import {createClient} from '@sanity/client'

const sanityClient = createClient({
  projectId: 'yq8gtfsy',
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: false,
  perspective: 'published',
  stega: {
    studioUrl: 'http://localhost:3333'
  }
})

export default sanityClient

export async function getFlightSchedules() {
  return await sanityClient.fetch(
    `*[_type == "flightSchedule"] | order(year desc, 
    month match ["Decembar","Novembar","Oktobar","Septembar","August","Juli","Juni","Maj","April","Mart","Februar","Januar"]) {
      _id,
      title,
      month,
      year,
      description,
      weeklySchedule[]{
        day,
        flights[]{
          type,
          flightNumber,
          airline,
          logo {
            asset->{
              url
            }
          },
          departureTime,
          arrivalTime,
          destination
        }
      }
    }`
  )
}

export async function updateFlightSchedule(documentId: string, weeklySchedule: any[]) {
  try {
    await sanityClient.patch(documentId)
      .set({ weeklySchedule })
      .commit();
    return true;
  } catch (error) {
    console.error('Error updating flight schedule:', error);
    return false;
  }
}

import Papa from 'papaparse';

export function processFlightScheduleCSV(csvContent: string): Promise<any[]> {
  return new Promise((resolve, reject) => {
    try {
      Papa.parse(csvContent as any, {
        header: true,
        skipEmptyLines: true,
        complete: (results: Papa.ParseResult<{ [key: string]: string }>) => {
        if (results.errors.length > 0) {
          reject(results.errors);
        } else {
          const parsedData = results.data;
          console.log('Parsed CSV Data:', parsedData); // Logging parsed data
          const weeklySchedule: { [key: string]: { day: string; flights: any[] } } = {};

          parsedData.forEach((row: { [key: string]: string }) => {
            const day = row.Day?.trim() ?? '';
            if (!weeklySchedule[day]) {
              weeklySchedule[day] = { day, flights: [] };
            }

          const type = row.Tip?.trim() ?? '';
          const time = row.Vrijeme?.trim() ?? '';
          const flight = {
            type: type === 'Polazak' ? 'odlazni' : type === 'Dolazak' ? 'dolazni' : '',
            flightNumber: row.Kod?.trim() ?? '',
            airline: row.Aviokompanija?.trim() ?? '',
            departureTime: type === 'odlazni' ? time : '',
            arrivalTime: type === 'dolazni' ? time : '',
            destination: type === 'odlazni' ? row.Destinacija?.trim() ?? '' : '',
            origin: type === 'dolazni' ? row.Destinacija?.trim() ?? '' : '',
          };

            weeklySchedule[day].flights.push(flight);
          });

          // Convert weeklySchedule object to array
          const weeklyScheduleArray = Object.values(weeklySchedule);
          console.log('Processed Weekly Schedule:', weeklyScheduleArray); // Logging processed schedule

          resolve(weeklyScheduleArray);
        }
      },
      });
    } catch (error) {
      reject(error);
    }
  });
}

// Helper function to get current date details
function getCurrentDateDetails() {
  const now = new Date();
  const year = now.getFullYear();
  const monthIndex = now.getMonth();
  const dayIndex = now.getDay(); // 0=Sunday, 1=Monday, ...

  const bosnianMonths = [
    'Januar', 'Februar', 'Mart', 'April', 'Maj', 'Juni',
    'Juli', 'August', 'Septembar', 'Oktobar', 'Novembar', 'Decembar'
  ];
  const bosnianWeekdays = [
    'Ponedjeljak', 'Utorak', 'Srijeda', 'Četvrtak', 'Petak', 'Subota', 'Nedjelja'
  ];

  const currentMonth = bosnianMonths[monthIndex];
  const currentWeekday = bosnianWeekdays[dayIndex === 0 ? 6 : dayIndex - 1]; // Adjust Sunday

  return { year, currentMonth, currentWeekday };
}

export async function getCurrentDaySchedule() {
  const { year, currentMonth, currentWeekday } = getCurrentDateDetails();

  const schedule = await sanityClient.fetch(
    `*[_type == "flightSchedule" && month == $currentMonth && year == $year][0] {
      weeklySchedule[]{
        day,
        flights[]{
          type,
          flightNumber,
          airline,
          logo {
            asset->{
              url
            }
          },
          departureTime,
          arrivalTime,
          destination
        }
      }
    }`,
    { currentMonth, year }
  );

  if (!schedule || !schedule.weeklySchedule) {
    return { departures: [], arrivals: [] };
  }

  const todaySchedule = schedule.weeklySchedule.find((d: any) => d.day === currentWeekday);

  if (!todaySchedule || !todaySchedule.flights) {
    return { departures: [], arrivals: [] };
  }

  const departures = todaySchedule.flights.filter((f: any) => f.type === 'odlazni');
  const arrivals = todaySchedule.flights.filter((f: any) => f.type === 'dolazni');

  return { departures, arrivals };
}

export async function getAllNovosti() {
  return await sanityClient.fetch(
    `*[_type == "novost"] | order(publishedAt desc){
      _id,
      title,
      "slug": slug.current,
      publishedAt,
      category,
      mainImage{
        asset->{url},
        alt
      },
      pdfFile{
        asset->{url}
      }
    }`
  )
}

export async function getNovosti() {
  return await sanityClient.fetch(
    `*[_type == "novost" && defined(category) && category == "novost"] | order(publishedAt desc){
      _id,
      title,
      "slug": slug.current,
      publishedAt,
      category,
      mainImage{
        asset->{url},
        alt
      }
    }`
  )
}

export async function getPublicCalls(category: 'javni-oglasi-aktivni' | 'javni-oglasi-arhivirani') {
  return await sanityClient.fetch(
    `*[_type == "novost" && defined(category) && category == $category] | order(publishedAt desc){
      _id,
      title,
      "slug": slug.current,
      publishedAt,
      category,
      mainImage{
        asset->{url},
        alt
      },
      body
    }`,
    { category }
  )
}

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

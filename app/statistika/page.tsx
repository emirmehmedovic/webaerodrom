"use client"; // Make client component due to calculations/state

import React from 'react';
import { BarChart, CalendarDays, TrendingUp } from 'lucide-react'; // Added icons
import PassengerCharts from '@/components/stats/passenger-charts'; // Import the chart component
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"; // Assuming Shadcn UI Table

// Define the structure of a single data row
interface StatsRow {
  year: number;
  jan: number | null;
  feb: number | null;
  mar: number | null;
  apr: number | null;
  may: number | null;
  jun: number | null;
  jul: number | null;
  aug: number | null;
  sep: number | null;
  oct: number | null;
  nov: number | null;
  dec: number | null;
  total: number | null;
}

// Parse and structure the data
const statsData: StatsRow[] = [ // Added type annotation
  { year: 2025, jan: null, feb: null, mar: null, apr: null, may: null, jun: null, jul: null, aug: null, sep: null, oct: null, nov: null, dec: null, total: null }, // Moved 2025 to top
  { year: 2024, jan: 19171, feb: 17162, mar: 14737, apr: 13158, may: 13023, jun: 13691, jul: 18317, aug: 22538, sep: 20436, oct: 19192, nov: 16700, dec: 19644, total: 207769 },
  { year: 2023, jan: 58304, feb: 48023, mar: 53076, apr: 67152, may: 68442, jun: 64795, jul: 72273, aug: 70088, sep: 28118, oct: 18825, nov: 15341, dec: 17899, total: 582336 },
  { year: 2022, jan: 21280, feb: 14630, mar: 22793, apr: 40060, may: 41117, jun: 38230, jul: 50027, aug: 51426, sep: 42688, oct: 44713, nov: 50481, dec: 52151, total: 466596 },
  { year: 2021, jan: 12394, feb: 8427, mar: 11650, apr: 13969, may: 19880, jun: 23006, jul: 45983, aug: 48630, sep: 32960, oct: 34835, nov: 21600, dec: 25473, total: 299031 },
  { year: 2020, jan: 35188, feb: 36589, mar: 17665, apr: 0, may: 100, jun: 19542, jul: 32008, aug: 28813, sep: 19509, oct: 17120, nov: 9505, dec: 12564, total: 228603 },
  { year: 2019, jan: 36341, feb: 30658, mar: 35679, apr: 56276, may: 52427, jun: 59627, jul: 67794, aug: 66709, sep: 56420, oct: 54018, nov: 35484, dec: 41617, total: 593050 },
  { year: 2018, jan: 40563, feb: 36022, mar: 43112, apr: 52638, may: 49371, jun: 53709, jul: 67412, aug: 65365, sep: 56062, oct: 50122, nov: 30763, dec: 39471, total: 584610 },
  { year: 2017, jan: 26544, feb: 23105, mar: 29116, apr: 50763, may: 47701, jun: 49662, jul: 63173, aug: 63407, sep: 52816, oct: 51556, nov: 37432, dec: 40321, total: 535596 },
  { year: 2016, jan: 19234, feb: 19939, mar: 23598, apr: 25261, may: 27324, jun: 26673, jul: 32229, aug: 31046, sep: 27793, oct: 27621, nov: 23619, dec: 27061, total: 311398 },
  { year: 2015, jan: 12960, feb: 12005, mar: 14474, apr: 17311, may: 18082, jun: 21563, jul: 33666, aug: 33007, sep: 28900, oct: 27167, nov: 22462, dec: 17427, total: 259074 },
  { year: 2014, jan: 8276, feb: 6455, mar: 7289, apr: 9495, may: 9343, jun: 12195, jul: 19887, aug: 19253, sep: 16967, oct: 16299, nov: 12363, dec: 13531, total: 151353 },
  { year: 2013, jan: 1, feb: 0, mar: 0, apr: 0, may: 455, jun: 6251, jul: 11868, aug: 11000, sep: 9071, oct: 8673, nov: 7359, dec: 6835, total: 61513 },
  { year: 2012, jan: 8, feb: 0, mar: 51, apr: 13, may: 2, jun: 854, jul: 1762, aug: 1243, sep: 195, oct: 59, nov: 4, dec: 0, total: 4191 },
  { year: 2011, jan: 0, feb: 0, mar: 12, apr: 54, may: 8, jun: 1143, jul: 1506, aug: 965, sep: 10, oct: 426, nov: 403, dec: 0, total: 4527 },
];

const months = [
  { key: 'jan', name: 'Jan' }, { key: 'feb', name: 'Feb' }, { key: 'mar', name: 'Mar' },
  { key: 'apr', name: 'Apr' }, { key: 'may', name: 'Maj' }, { key: 'jun', name: 'Jun' },
  { key: 'jul', name: 'Jul' }, { key: 'aug', name: 'Aug' }, { key: 'sep', name: 'Sep' },
  { key: 'oct', name: 'Okt' }, { key: 'nov', name: 'Nov' }, { key: 'dec', name: 'Dec' },
];

export default function StatisticsPage() {

  // --- Calculate Best Month & Quarter ---
  let bestMonth = { year: 0, monthIndex: -1, passengers: -1 };
  let bestQuarter = { year: 0, quarter: 0, passengers: -1 };

  const validData = statsData.filter(d => d.year !== 2025); // Exclude 2025

  validData.forEach(row => {
    // Best Month Calculation
    let currentBestMonthPassengers = -1;
    let currentBestMonthIndex = -1;
    months.forEach((month, index) => {
      const monthKey = month.key as keyof StatsRow; // Type assertion
      const passengers = typeof row[monthKey] === 'number' ? row[monthKey] as number : -1; // Type check
      if (passengers > currentBestMonthPassengers) {
        currentBestMonthPassengers = passengers;
        currentBestMonthIndex = index;
      }
    });
    if (currentBestMonthPassengers > bestMonth.passengers) {
      bestMonth = { year: row.year, monthIndex: currentBestMonthIndex, passengers: currentBestMonthPassengers };
    }

    // Best Quarter Calculation
    const q1 = (row.jan ?? 0) + (row.feb ?? 0) + (row.mar ?? 0);
    const q2 = (row.apr ?? 0) + (row.may ?? 0) + (row.jun ?? 0);
    const q3 = (row.jul ?? 0) + (row.aug ?? 0) + (row.sep ?? 0);
    const q4 = (row.oct ?? 0) + (row.nov ?? 0) + (row.dec ?? 0);
    const quarters = [q1, q2, q3, q4];

    let currentBestQuarterPassengers = -1;
    let currentBestQuarterIndex = -1;
    quarters.forEach((qPassengers, index) => {
      if (qPassengers > currentBestQuarterPassengers) {
        currentBestQuarterPassengers = qPassengers;
        currentBestQuarterIndex = index + 1; // Quarter index (1-4)
      }
    });

    if (currentBestQuarterPassengers > bestQuarter.passengers) {
      bestQuarter = { year: row.year, quarter: currentBestQuarterIndex, passengers: currentBestQuarterPassengers };
    }
  });
  // --- End Calculation ---

  return (
    <div className="container mx-auto px-4 py-12 space-y-16 relative overflow-hidden rounded-[15px]">

      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-20 rounded-[15px]">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-transparent to-blue-100 dark:from-[#0a192f] dark:via-transparent dark:to-[#172a45]" />
      </div>

      {/* Title Section */}
      <section className="text-center animate-fade-in">
        <BarChart className="h-16 w-16 mx-auto text-blue-600 dark:text-[#64ffda] mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          Statistika Putničkog Saobraćaja
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          Pregled broja putnika na Međunarodnom aerodromu Tuzla po godinama i mjesecima.
        </p>
      </section>

      {/* Statistics Table Section */}
      <section className="max-w-6xl mx-auto animate-fade-in-delay-1">
         <div className="rounded-[15px] shadow-xl overflow-x-auto {/* Added overflow-x-auto */}
           bg-white/70 backdrop-blur-lg border border-gray-200/50
           dark:bg-[#172a45]/60 dark:border-[#64ffda]/30 dark:shadow-[#64ffda]/10">
            <Table className="min-w-full"> {/* Added min-w-full */}
              <TableHeader>
                <TableRow className="dark:border-b-gray-700">
                  <TableHead className="font-semibold text-gray-900 dark:text-white sticky left-0 bg-white/70 dark:bg-[#172a45]/60 z-10">Godina</TableHead> {/* Sticky Year */}
                  {months.map(month => <TableHead key={month.key} className="text-right text-gray-600 dark:text-gray-300 whitespace-nowrap">{month.name}</TableHead>)} {/* Added whitespace-nowrap */}
                  <TableHead className="text-right font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-500 dark:from-[#64ffda] dark:to-sky-400 whitespace-nowrap">Ukupno</TableHead> {/* Highlighted Total Header */}
                </TableRow>
              </TableHeader>
              <TableBody>
                {statsData.map((row) => (
                  <TableRow key={row.year} className="dark:border-b-gray-800">
                    <TableCell className="font-medium text-gray-900 dark:text-white sticky left-0 bg-white/70 dark:bg-[#172a45]/60 z-10">{row.year}</TableCell> {/* Sticky Year */}
                    <TableCell className="text-right text-gray-700 dark:text-gray-300 whitespace-nowrap">{row.jan?.toLocaleString() ?? '-'}</TableCell>
                    <TableCell className="text-right text-gray-700 dark:text-gray-300 whitespace-nowrap">{row.feb?.toLocaleString() ?? '-'}</TableCell>
                    <TableCell className="text-right text-gray-700 dark:text-gray-300 whitespace-nowrap">{row.mar?.toLocaleString() ?? '-'}</TableCell>
                    <TableCell className="text-right text-gray-700 dark:text-gray-300 whitespace-nowrap">{row.apr?.toLocaleString() ?? '-'}</TableCell>
                    <TableCell className="text-right text-gray-700 dark:text-gray-300 whitespace-nowrap">{row.may?.toLocaleString() ?? '-'}</TableCell>
                    <TableCell className="text-right text-gray-700 dark:text-gray-300 whitespace-nowrap">{row.jun?.toLocaleString() ?? '-'}</TableCell>
                    <TableCell className="text-right text-gray-700 dark:text-gray-300 whitespace-nowrap">{row.jul?.toLocaleString() ?? '-'}</TableCell>
                    <TableCell className="text-right text-gray-700 dark:text-gray-300 whitespace-nowrap">{row.aug?.toLocaleString() ?? '-'}</TableCell>
                    <TableCell className="text-right text-gray-700 dark:text-gray-300 whitespace-nowrap">{row.sep?.toLocaleString() ?? '-'}</TableCell>
                    <TableCell className="text-right text-gray-700 dark:text-gray-300 whitespace-nowrap">{row.oct?.toLocaleString() ?? '-'}</TableCell>
                    <TableCell className="text-right text-gray-700 dark:text-gray-300 whitespace-nowrap">{row.nov?.toLocaleString() ?? '-'}</TableCell>
                    <TableCell className="text-right text-gray-700 dark:text-gray-300 whitespace-nowrap">{row.dec?.toLocaleString() ?? '-'}</TableCell>
                    <TableCell className="text-right font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-500 dark:from-[#64ffda] dark:to-sky-400 whitespace-nowrap">{row.total?.toLocaleString() ?? '-'}</TableCell> {/* Highlighted Total Cell */}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
         </div>
      </section>

      {/* Charts Section */}
      <PassengerCharts data={statsData} />

       {/* Best Month/Quarter Section */}
       <section className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in-delay-2">
         {/* Best Month Card */}
         <div className="p-6 rounded-[15px] shadow-xl flex flex-col items-center text-center
           bg-white/70 backdrop-blur-lg border border-gray-200/50
           dark:bg-[#172a45]/60 dark:border-[#64ffda]/30 dark:shadow-[#64ffda]/10">
            <CalendarDays className="h-10 w-10 text-blue-600 dark:text-[#64ffda] mb-3" />
            <h3 className="text-xl font-semibold mb-1 text-gray-800 dark:text-white">Najuspješniji Mjesec</h3>
            {bestMonth.monthIndex !== -1 && (
              <>
                <p className="text-lg font-bold text-gray-900 dark:text-white">
                  {months[bestMonth.monthIndex].name} {bestMonth.year}
                </p>
                <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-500 dark:from-[#64ffda] dark:to-sky-400 mt-1">
                  {bestMonth.passengers.toLocaleString()} putnika
                </p>
              </>
            )}
         </div>
          {/* Best Quarter Card */}
         <div className="p-6 rounded-[15px] shadow-xl flex flex-col items-center text-center
           bg-white/70 backdrop-blur-lg border border-gray-200/50
           dark:bg-[#0a192f]/70 dark:border-[#64ffda]/30 dark:shadow-[#64ffda]/10">
            <TrendingUp className="h-10 w-10 text-blue-600 dark:text-[#64ffda] mb-3" />
            <h3 className="text-xl font-semibold mb-1 text-gray-800 dark:text-white">Najuspješniji Kvartal</h3>
             {bestQuarter.quarter !== 0 && (
              <>
                <p className="text-lg font-bold text-gray-900 dark:text-white">
                  Q{bestQuarter.quarter} {bestQuarter.year}
                </p>
                <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-500 dark:from-[#64ffda] dark:to-sky-400 mt-1">
                  {bestQuarter.passengers.toLocaleString()} putnika
                </p>
              </>
            )}
         </div>
       </section>

    </div>
  );
}

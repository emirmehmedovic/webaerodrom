import React from 'react';
import { getFlightSchedules } from '../../lib/sanity';
import MonthlySchedule from '../../components/flights/MonthlySchedule';

export const revalidate = 60;

export default async function RedLetenjaPage() {
  const schedules = await getFlightSchedules();

  if (!schedules || schedules.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold mb-4">Red letenja</h1>
        <p>Trenutno nema dostupnih rasporeda letova.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Mjesečni red letenja</h1>

      {schedules.map((schedule: any) => (
        <MonthlySchedule key={schedule._id} schedule={schedule} />
      ))}
    </div>
  );
}

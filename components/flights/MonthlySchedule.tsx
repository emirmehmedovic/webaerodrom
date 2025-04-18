"use client";

import React, { useState } from "react";
import { PlaneTakeoff, PlaneLanding } from "lucide-react";
import { Button } from "../ui/button"; // Corrected import path

const bosnianWeekdays = [
  "Ponedjeljak",
  "Utorak",
  "Srijeda",
  "Četvrtak",
  "Petak",
  "Subota",
  "Nedjelja",
];

function getDatesInMonth(month: string, year: number) {
  const monthIndex = [
    "Januar",
    "Februar",
    "Mart",
    "April",
    "Maj",
    "Juni",
    "Juli",
    "August",
    "Septembar",
    "Oktobar",
    "Novembar",
    "Decembar",
  ].indexOf(month);

  const date = new Date(year, monthIndex, 1);
  const dates = [];

  while (date.getMonth() === monthIndex) {
    dates.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }

  return dates;
}

export default function MonthlySchedule({ schedule }: { schedule: any }) {
  const dates = getDatesInMonth(schedule.month, schedule.year);
  const weeksCount = Math.ceil(dates.length / 7);

  const [currentWeek, setCurrentWeek] = useState(0);

  const startIdx = currentWeek * 7;
  const endIdx = startIdx + 7;
  const weekDates = dates.slice(startIdx, endIdx);

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold text-center mb-4">
        {schedule.title} - {schedule.month} {schedule.year}
      </h2>

      <div className="flex justify-center gap-4 mb-4">
        <Button
          variant="outline"
          onClick={() => setCurrentWeek((w) => Math.max(0, w - 1))}
          disabled={currentWeek === 0}
          className="disabled:opacity-50"
        >
          Prethodna sedmica
        </Button>
        <span className="self-center">
          Sedmica {currentWeek + 1} / {weeksCount}
        </span>
        <Button
          variant="outline"
          onClick={() => setCurrentWeek((w) => Math.min(weeksCount - 1, w + 1))}
          disabled={currentWeek === weeksCount - 1}
          className="disabled:opacity-50"
        >
          Sljedeća sedmica
        </Button>
      </div>

      {weekDates.map((dateObj: Date, idx: number) => {
        const weekday =
          bosnianWeekdays[
            dateObj.getDay() === 0 ? 6 : dateObj.getDay() - 1
          ];
        const daySchedule = schedule.weeklySchedule?.find(
          (d: any) => d.day === weekday
        );

        const departures =
          daySchedule?.flights?.filter((f: any) => f.type === "odlazni") ?? [];
        const arrivals =
          daySchedule?.flights?.filter((f: any) => f.type === "dolazni") ?? [];

        // Sort flights by time
        departures.sort((a: any, b: any) => (a.departureTime || '').localeCompare(b.departureTime || ''));
        arrivals.sort((a: any, b: any) => (a.arrivalTime || '').localeCompare(b.arrivalTime || ''));

        return (
          <div
            key={idx}
            className="space-y-6 rounded-xl p-6 shadow bg-gradient-to-br from-sky-900/30 to-blue-900/30 dark:from-[#0a192f]/50 dark:to-[#172a45]/50"
          >
            <h3 className="text-xl font-bold mb-2 text-center">
              {`${dateObj.getDate().toString().padStart(2, '0')}.${(dateObj.getMonth() + 1).toString().padStart(2, '0')}.${dateObj.getFullYear()}`} - {weekday}
            </h3>

            {/* Departures */}
            <>
              <h4 className="text-xl font-semibold mb-2 flex items-center justify-center gap-2">
                <PlaneTakeoff className="h-6 w-6" /> Odlazni letovi
              </h4>
              <div className="overflow-x-auto">
                <table className="min-w-full border-separate border-spacing-y-2">
                  <thead className="bg-sky-700 text-white">
                    <tr>
                      <th className="px-4 py-2 rounded-l-lg text-center">#</th>
                      <th className="px-4 py-2 text-center w-24">Broj leta</th>
                      <th className="px-4 py-2 text-center">Aviokompanija</th>
                      <th className="px-4 py-2 text-center">
                        Vrijeme polaska
                      </th>
                      <th className="px-4 py-2 rounded-r-lg text-center">
                        Destinacija
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {departures.length > 0 ? (
                      departures.map((flight: any, fIdx: number) => (
                        <tr
                          key={fIdx}
                          className="odd:bg-white/5 even:bg-white/10 hover:bg-white/20 text-gray-900 dark:text-white text-center rounded-lg border-b border-white/20"
                        >
                          <td className="px-4 py-2">{fIdx + 1}</td>
                          <td className="px-4 py-2">{flight.flightNumber}</td>
                          <td className="px-4 py-2 flex flex-col items-center gap-1">
                            {flight.logo && flight.logo.asset && (
                              <img
                                src={flight.logo.asset.url}
                                alt="logo"
                                style={{
                                  width: "50px",
                                  height: "35px",
                                  borderRadius: "10px",
                                  objectFit: "cover",
                                }}
                              />
                            )}
                            <span>{flight.airline}</span>
                          </td>
                          <td className="px-4 py-2">{flight.departureTime}</td>
                          <td className="px-4 py-2">{flight.destination}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan={5}
                          className="px-4 py-2 text-center"
                        >
                          Nema odlaznih letova.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </>

            {/* Arrivals */}
            <>
              <h4 className="text-xl font-semibold mb-2 flex items-center justify-center gap-2">
                <PlaneLanding className="h-6 w-6" /> Dolazni letovi
              </h4>
              <div className="overflow-x-auto">
                <table className="min-w-full border-separate border-spacing-y-2">
                  <thead className="bg-emerald-700 text-white">
                    <tr>
                      <th className="px-4 py-2 rounded-l-lg text-center">#</th>
                      <th className="px-4 py-2 text-center w-24">Broj leta</th>
                      <th className="px-4 py-2 text-center">Aviokompanija</th>
                      <th className="px-4 py-2 text-center">
                        Vrijeme dolaska
                      </th>
                      <th className="px-4 py-2 rounded-r-lg text-center">
                        Porijeklo
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {arrivals.length > 0 ? (
                      arrivals.map((flight: any, fIdx: number) => (
                        <tr
                          key={fIdx}
                          className="odd:bg-white/5 even:bg-white/10 hover:bg-white/20 text-gray-900 dark:text-white text-center rounded-lg border-b border-white/20"
                        >
                          <td className="px-4 py-2">{fIdx + 1}</td>
                          <td className="px-4 py-2">{flight.flightNumber}</td>
                          <td className="px-4 py-2 flex flex-col items-center gap-1">
                            {flight.logo && flight.logo.asset && (
                              <img
                                src={flight.logo.asset.url}
                                alt="logo"
                                style={{
                                  width: "50px",
                                  height: "35px",
                                  borderRadius: "10px",
                                  objectFit: "cover",
                                }}
                              />
                            )}
                            <span>{flight.airline}</span>
                          </td>
                          <td className="px-4 py-2">{flight.arrivalTime}</td>
                          <td className="px-4 py-2">{flight.destination}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan={5}
                          className="px-4 py-2 text-center"
                        >
                          Nema dolaznih letova.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </>
          </div>
        );
      })}

      {/* Duplicate Pagination at the bottom */}
      {weeksCount > 1 && (
        <div className="flex justify-center gap-4 mt-8">
          <Button
            variant="outline"
            onClick={() => setCurrentWeek((w) => Math.max(0, w - 1))}
            disabled={currentWeek === 0}
            className="disabled:opacity-50"
          >
            Prethodna sedmica
          </Button>
          <span className="self-center">
            Sedmica {currentWeek + 1} / {weeksCount}
          </span>
          <Button
            variant="outline"
            onClick={() => setCurrentWeek((w) => Math.min(weeksCount - 1, w + 1))}
            disabled={currentWeek === weeksCount - 1}
            className="disabled:opacity-50"
          >
            Sljedeća sedmica
          </Button>
        </div>
      )}
    </div>
  );
}

"use client"; // Make this a client component

import React, { useState } from 'react';
import { PlaneTakeoff, PlaneLanding } from 'lucide-react'; // Import icons

interface Flight {
  type: string;
  flightNumber: string;
  airline: string;
  logo?: { asset?: { url?: string } };
  departureTime?: string;
  arrivalTime?: string;
  destination?: string;
}

interface FlightScheduleProps {
  departures: Flight[];
  arrivals: Flight[];
}

export function FlightSchedule({ departures, arrivals }: FlightScheduleProps) {
  const [activeView, setActiveView] = useState<'departures' | 'arrivals'>('departures');
  const today = new Date();
  const formattedDate = `${String(today.getDate()).padStart(2, '0')}.${String(today.getMonth() + 1).padStart(2, '0')}.${today.getFullYear()}`;

  return (
    <div className="space-y-6 border rounded-xl p-6 shadow bg-gradient-to-br from-sky-900/30 to-blue-900/30 dark:from-[#0a192f]/50 dark:to-[#172a45]/50">
      <h3 className="text-xl font-bold mb-4 text-left"> {/* Align left */}
        Raspored letova za {formattedDate} {/* Use dd.mm.yyyy format */}
      </h3>

      {/* Buttons to switch views */}
      <div className="flex justify-start gap-3 mb-4"> {/* Align left, smaller gap */}
        <button
          onClick={() => setActiveView('departures')}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-sm font-medium border transition ${ // Smaller padding, text-sm
            activeView === 'departures'
              ? 'bg-blue-600 text-white border-blue-600 dark:bg-[#64ffda] dark:text-gray-900 dark:border-[#64ffda]' // Active state
              : 'bg-transparent border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-[#64ffda] dark:text-[#64ffda] dark:hover:bg-[#64ffda]/10' // Default state
          }`}
        >
          <PlaneTakeoff size={18} />
          Odlazni letovi
        </button>
        <button
          onClick={() => setActiveView('arrivals')}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-sm font-medium border transition ${ // Smaller padding, text-sm
            activeView === 'arrivals'
              ? 'bg-blue-600 text-white border-blue-600 dark:bg-[#64ffda] dark:text-gray-900 dark:border-[#64ffda]' // Active state
              : 'bg-transparent border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-[#64ffda] dark:text-[#64ffda] dark:hover:bg-[#64ffda]/10' // Default state
          }`}
        >
          <PlaneLanding size={18} />
          Dolazni letovi
        </button>
      </div>

      {/* Conditional Table Rendering */}
      {activeView === 'departures' && (
        <>
          {/* <h4 className="text-lg font-semibold mb-2">Odlazni letovi</h4> */}
          <div className="overflow-x-auto">
            <table className="min-w-full border-separate border-spacing-y-2">
              <thead className="bg-blue-800 text-white">
                <tr>
                  <th className="px-4 py-2 rounded-l-lg text-center">#</th>
                  <th className="px-4 py-2 text-center w-24">Broj leta</th>
                  <th className="px-4 py-2 text-center">Aviokompanija</th>
                  <th className="px-4 py-2 text-center">Vrijeme polaska</th>
                  <th className="px-4 py-2 text-center">Destinacija</th>
                  <th className="px-4 py-2 rounded-r-lg text-center">Status</th> {/* Add Status Header */}
                </tr>
              </thead>
              <tbody>
                {departures.length > 0 ? departures.map((flight, fIdx) => (
                  <tr key={fIdx} className="odd:bg-white/5 even:bg-white/10 hover:bg-white/20 text-gray-900 dark:text-white text-center rounded-lg border-b border-white/20">
                    <td className="px-4 py-2">{fIdx + 1}</td>
                    <td className="px-4 py-2">{flight.flightNumber}</td>
                    <td className="px-4 py-2 flex flex-col items-center gap-1 text-gray-900 dark:text-white">
                      {flight.logo?.asset?.url && (
                        <img
                          src={flight.logo.asset.url}
                          alt="logo"
                          style={{
                            width: '50px',
                            height: '35px',
                            borderRadius: '10px',
                            objectFit: 'cover',
                          }}
                        />
                      )}
                      <span>{flight.airline}</span>
                    </td>
                  <td className="px-4 py-2">{flight.departureTime}</td>
                  <td className="px-4 py-2">{flight.destination}</td>
                  <td className="px-4 py-2">Na vrijeme</td> {/* Add Status Cell */}
                  </tr>
                )) : (
                <tr>
                  <td colSpan={6} className="px-4 py-2 text-center">Nema odlaznih letova za danas.</td> {/* Update colspan */}
                </tr>
                )}
              </tbody>
            </table>
          </div>
        </>
      )}

      {activeView === 'arrivals' && (
        <>
          {/* <h4 className="text-lg font-semibold mb-2">Dolazni letovi</h4> */}
          <div className="overflow-x-auto">
            <table className="min-w-full border-separate border-spacing-y-2">
              <thead className="bg-blue-800 text-white">
                <tr>
                  <th className="px-4 py-2 rounded-l-lg text-center">#</th>
                  <th className="px-4 py-2 text-center w-24">Broj leta</th>
                  <th className="px-4 py-2 text-center">Aviokompanija</th>
                  <th className="px-4 py-2 text-center">Vrijeme dolaska</th>
                  <th className="px-4 py-2 rounded-r-lg text-center">Status</th> {/* Add Status Header */}
                </tr>
              </thead>
              <tbody>
                {arrivals.length > 0 ? arrivals.map((flight, fIdx) => (
                  <tr key={fIdx} className="odd:bg-white/5 even:bg-white/10 hover:bg-white/20 text-gray-900 dark:text-white text-center rounded-lg border-b border-white/20">
                    <td className="px-4 py-2">{fIdx + 1}</td>
                    <td className="px-4 py-2">{flight.flightNumber}</td>
                    <td className="px-4 py-2 flex flex-col items-center gap-1">
                      {flight.logo?.asset?.url && (
                        <img
                          src={flight.logo.asset.url}
                          alt="logo"
                          style={{
                            width: '50px',
                            height: '35px',
                            borderRadius: '10px',
                            objectFit: 'cover',
                          }}
                        />
                      )}
                      <span>{flight.airline}</span>
                    </td>
                    <td className="px-4 py-2">{flight.arrivalTime}</td>
                  <td className="px-4 py-2">Na vrijeme</td> {/* Add Status Cell */}
                  </tr>
                )) : (
                <tr>
                  <td colSpan={5} className="px-4 py-2 text-center">Nema dolaznih letova za danas.</td> {/* Update colspan */}
                </tr>
                )}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

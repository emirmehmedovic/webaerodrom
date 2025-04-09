"use client";

import React, { useState } from 'react'; // Needs useState again
import { PlaneTakeoff, PlaneLanding } from 'lucide-react';
import { Button } from '../ui/button'; // Use Button component for tabs

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

export function FlightSchedule({ departures: initialDepartures, arrivals: initialArrivals }: FlightScheduleProps) {
  const [activeView, setActiveView] = useState<'departures' | 'arrivals'>('departures');
  const today = new Date();
  const formattedDate = `${String(today.getDate()).padStart(2, '0')}.${String(today.getMonth() + 1).padStart(2, '0')}.${today.getFullYear()}`;

  // Sort flights immediately
  const departures = [...initialDepartures].sort((a, b) => (a.departureTime || '').localeCompare(b.departureTime || ''));
  const arrivals = [...initialArrivals].sort((a, b) => (a.arrivalTime || '').localeCompare(b.arrivalTime || ''));

  return (
    // Keep rounded-xl, no border
    <div className="space-y-6 rounded-xl p-6 shadow bg-gradient-to-br from-sky-900/30 to-blue-900/30 dark:from-[#0a192f]/50 dark:to-[#172a45]/50">
      <h3 className="text-xl font-bold mb-4"> {/* Removed text-center */}
        Raspored letova za {formattedDate}
      </h3>

      {/* Buttons to switch views - Using Button component */}
      <div className="flex gap-3 mb-4"> {/* Removed justify-center */}
         <Button
           variant={activeView === 'departures' ? 'default' : 'outline'} // Use default variant for active
           size="sm" // Smaller size
           onClick={() => setActiveView('departures')}
           className="flex items-center gap-1.5"
         >
           <PlaneTakeoff size={18} /> Odlazni letovi
         </Button>
         <Button
           variant={activeView === 'arrivals' ? 'default' : 'outline'} // Use default variant for active
           size="sm" // Smaller size
           onClick={() => setActiveView('arrivals')}
           className="flex items-center gap-1.5"
         >
           <PlaneLanding size={18} /> Dolazni letovi
         </Button>
       </div>


      {/* Conditional Table Rendering */}
      {activeView === 'departures' && (
        <div className="overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-y-2">
            <thead className="bg-sky-700 text-white"> {/* Keep updated color */}
              <tr>
                <th className="px-4 py-2 rounded-l-lg text-center">#</th>
                <th className="px-4 py-2 text-center w-24">Broj leta</th>
                <th className="px-4 py-2 text-center">Aviokompanija</th>
                <th className="px-4 py-2 text-center">Vrijeme polaska</th>
                <th className="px-4 py-2 rounded-r-lg text-center">Destinacija</th> {/* Removed Status */}
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
                  {/* Removed Status Cell */}
                </tr>
              )) : (
              <tr>
                <td colSpan={5} className="px-4 py-2 text-center">Nema odlaznih letova za danas.</td> {/* Updated colspan */}
              </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {activeView === 'arrivals' && (
        <div className="overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-y-2">
            <thead className="bg-emerald-700 text-white"> {/* Keep updated color */}
              <tr>
                <th className="px-4 py-2 rounded-l-lg text-center">#</th>
                <th className="px-4 py-2 text-center w-24">Broj leta</th>
                <th className="px-4 py-2 text-center">Aviokompanija</th>
                <th className="px-4 py-2 text-center">Vrijeme dolaska</th>
                <th className="px-4 py-2 rounded-r-lg text-center">Porijeklo</th> {/* Changed from Status */}
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
                  <td className="px-4 py-2">{flight.destination}</td> {/* Display destination as origin */}
                </tr>
              )) : (
              <tr>
                <td colSpan={5} className="px-4 py-2 text-center">Nema dolaznih letova za danas.</td> {/* Updated colspan */}
              </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

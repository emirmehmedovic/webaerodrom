"use client"; // Make this a Client Component to allow onClick handlers

import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import Image component
import { Button } from '@/components/ui/button';
import { ExternalLink, Plane } from 'lucide-react';

const airlines = [
  {
    name: 'Wizz Air',
    checkInUrl: 'https://wizzair.com/en-gb/information-and-services/booking-information/check-in-and-boarding',
    logo: '/images/Wizzair-Wizz-Air-Logo.png'
  },
  {
    name: 'A Jet (AnadoluJet)',
    checkInUrl: 'https://www.anadolujet.com/en/travel-services/check-in',
    logo: '/images/AJetlogo_rE2syAo[1].jpg'
  },
  {
    name: 'Pegasus Airlines',
    checkInUrl: 'https://www.flypgs.com/en/useful-info/info-about-flights/check-in',
    logo: '/images/PEGASUS_AIRLINES_LOGO_SARI_1920x1080.jpg'
  },
];

export default function WebCheckInPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-12 relative overflow-hidden rounded-[15px]">

      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-20 rounded-[15px]">
        <div className="absolute inset-0 bg-gradient-to-tr from-sky-100 via-transparent to-blue-100 dark:from-[#0a192f] dark:via-transparent dark:to-[#172a45]" />
      </div>

      {/* Title and Explanation */}
      <section className="text-center animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white flex items-center justify-center gap-3">
          <Plane className="h-10 w-10 text-[#64ffda]" /> Web Check-in
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
          Uštedite vrijeme na aerodromu obavljanjem prijave na let (check-in) online putem web stranice Vaše aviokompanije. Molimo Vas da odaberete aviokompaniju sa kojom putujete kako biste bili preusmjereni na njihovu stranicu za web check-in.
        </p>
      </section>

      {/* Airline Links Section */}
      <section className="max-w-4xl mx-auto animate-fade-in-delay-1">
         <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
           Odaberite Vašu Aviokompaniju
         </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {airlines.map((airline) => (
            <div
              key={airline.name}
              className="rounded-[15px] p-6 shadow-xl flex flex-col items-center justify-between text-center transition-all duration-300 ease-in-out hover:scale-105
              bg-white/70 backdrop-blur-lg border border-gray-200/50
              dark:bg-[#172a45]/60 dark:border-[#64ffda]/30 dark:shadow-[#64ffda]/10"
            >
              <div className="relative h-16 w-full mb-4"> {/* Container for image */}
                <Image
                  src={airline.logo}
                  alt={`${airline.name} Logo`}
                  fill // Use fill to make image responsive within container
                  style={{ objectFit: 'contain' }} // Ensure logo fits without distortion
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Optional: for performance
                />
              </div>
              <p className="font-semibold mb-4 text-gray-800 dark:text-white">{airline.name}</p>
              <Button
                variant="outline"
                className="w-full bg-transparent border-blue-600 text-blue-600 hover:bg-blue-600/10 dark:border-[#64ffda] dark:text-[#64ffda] dark:hover:bg-[#64ffda]/10 dark:hover:text-[#64ffda] mt-auto flex items-center justify-center gap-2"
                onClick={() => window.open(airline.checkInUrl, '_blank', 'noopener,noreferrer')}
              >
                Idi na Check-in <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </section>

       {/* Important Notes */}
       <section className="max-w-3xl mx-auto mt-16 text-center text-sm text-gray-600 dark:text-gray-400 animate-fade-in-delay-2">
         <h3 className="font-semibold mb-2 text-gray-800 dark:text-white">Važne napomene:</h3>
         <p>Web check-in obično postaje dostupan 24-48 sati prije leta, ali provjerite tačna pravila Vaše aviokompanije.</p>
         <p>Nakon online prijave, obavezno sačuvajte ili odštampajte Vašu kartu za ukrcavanje (boarding pass).</p>
       </section>

    </div>
  );
}

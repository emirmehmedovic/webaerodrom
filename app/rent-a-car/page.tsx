import React from 'react';
import Image from 'next/image';
import { Car, KeyRound, MapPin } from 'lucide-react'; // Import icons

// Placeholder for actual Rent-a-Car agency data
const agencies = [
  { name: 'Agencija 1', logo: '/images/rentacar-logo1.png' },
  { name: 'Agencija 2', logo: '/images/rentacar-logo2.png' },
  { name: 'Agencija 3', logo: '/images/rentacar-logo3.png' },
  // Add more agencies as needed
];

export default function RentACarPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-16 relative overflow-hidden rounded-[15px]">

      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-20 rounded-[15px]">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-transparent to-blue-100 dark:from-[#0a192f] dark:via-transparent dark:to-[#172a45]" />
      </div>

      {/* Title Section */}
      <section className="text-center animate-fade-in">
        <KeyRound className="h-16 w-16 mx-auto text-blue-600 dark:text-[#64ffda] mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          Rent-a-Car
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          Iznajmite automobil direktno na Međunarodnom aerodromu Tuzla i nastavite svoje putovanje sa stilom i udobnošću.
        </p>
      </section>

      {/* Main Content Section */}
      <section className="max-w-4xl mx-auto p-6 md:p-8 rounded-[15px] shadow-xl animate-fade-in-delay-1
        bg-white/70 backdrop-blur-lg border border-gray-200/50
        dark:bg-[#172a45]/60 dark:border-[#64ffda]/30 dark:shadow-[#64ffda]/10">
         <div className="flex flex-col md:flex-row items-center gap-6">
           <Car className="h-12 w-12 text-blue-600 dark:text-[#64ffda] flex-shrink-0" />
           <div>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">Iznajmljivanje Vozila</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Na Međunarodnom aerodromu Tuzla moguće je iznajmiti automobil. U sklopu aerodroma nalaze se šalteri brojnih rent-a-car agencija.
            </p>
             <div className="flex items-start gap-3 text-sm">
               <MapPin className="h-5 w-5 mt-1 flex-shrink-0 text-blue-600 dark:text-[#64ffda]" />
               <div>
                 <p className="font-semibold text-gray-800 dark:text-white">Lokacija Agencija:</p>
                 <p className="text-gray-600 dark:text-gray-300">Šalteri agencija se nalaze u <span className="font-semibold">dolazećem holu</span> putničkog terminala.</p>
               </div>
             </div>
           </div>
         </div>
      </section>

      {/* Agency Logos (Placeholder) */}
      <section className="max-w-5xl mx-auto animate-fade-in-delay-2">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          Naše Rent-a-Car Agencije
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {agencies.map((agency) => (
            <div key={agency.name} className="p-4 rounded-[15px] h-20 w-40 flex items-center justify-center
              bg-white/70 backdrop-blur-lg border border-gray-200/50
              dark:bg-[#172a45]/60 dark:border-[#64ffda]/30 dark:shadow-[#64ffda]/10">
              {/* Placeholder - Replace with actual Image component */}
              <span className="text-xs text-gray-500 dark:text-gray-400">{agency.name} Logo</span>
              {/*
              <Image
                src={agency.logo}
                alt={`${agency.name} Logo`}
                width={120}
                height={60}
                style={{ objectFit: 'contain' }}
              />
              */}
            </div>
          ))}
        </div>
         <p className="text-center text-xs mt-4 text-gray-500 dark:text-gray-400">Logotipi su primjeri. Kontaktirajte agencije direktno za rezervacije.</p>
      </section>

    </div>
  );
}

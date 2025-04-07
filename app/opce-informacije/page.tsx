import React from 'react';
import Image from 'next/image';
import { Info, Building, CalendarCheck, Award, Images } from 'lucide-react'; // Import icons

export default function GeneralInfoPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-16 relative overflow-hidden rounded-[15px]">

      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-20 rounded-[15px]">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-transparent to-blue-100 dark:from-[#0a192f] dark:via-transparent dark:to-[#172a45]" />
      </div>

      {/* Title Section */}
      <section className="text-center animate-fade-in">
        <Info className="h-16 w-16 mx-auto text-blue-600 dark:text-[#64ffda] mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          Opće Informacije o Aerodromu
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          Saznajte više o osnivanju i historijatu Međunarodnog aerodroma Tuzla.
        </p>
      </section>

      {/* Main Content Section */}
      <section className="max-w-4xl mx-auto space-y-8 animate-fade-in-delay-1">

        {/* Osnivanje */}
        <div className="p-6 rounded-[15px] shadow-xl
          bg-white/70 backdrop-blur-lg border border-gray-200/50
          dark:bg-[#172a45]/60 dark:border-[#64ffda]/30 dark:shadow-[#64ffda]/10">
           <div className="flex items-center gap-3 mb-3">
             <Building className="h-8 w-8 text-blue-600 dark:text-[#64ffda] flex-shrink-0" />
             <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Osnivanje (1998)</h2>
           </div>
           <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">
             JP Međunarodni Aerodrom Tuzla je osnovan od strane Skupštine Tuzlansko – Podrinjskog Kantona Zakonom o Osnivanju JP Međunarodni Aerodrom Tuzla – Zračna Luka Dubrave 1998. godine. Na osnovu Daytonskog mirovnog sporazuma i Memoranduma o Razumijevanju potpisanog između Vijeća Ministara BiH i mirovnih snaga IFOR – a, iste godine aerodrom je otvoren za civilni zračni promet i služio je kao zajednički vojno / civilni aerodrom.
           </p>
        </div>

        {/* Period Zatvaranja */}
         <div className="p-6 rounded-[15px] shadow-xl
          bg-white/70 backdrop-blur-lg border border-gray-200/50
          dark:bg-[#0a192f]/70 dark:border-[#64ffda]/30 dark:shadow-[#64ffda]/10">
           <div className="flex items-center gap-3 mb-3">
             <CalendarCheck className="h-8 w-8 text-blue-600 dark:text-[#64ffda] flex-shrink-0" />
             <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Period 1998 - 2006</h2>
           </div>
           <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">
             U periodu od 10.10.1998 do 01.12.2006 godine, JP Međunarodni Aerodrom Tuzla je tri puta zatvaran za civilni zračni promet od strane međunarodnih vojnih mirovnih snaga koje su zračnu bazu Dubrave prioritetno koristile za vlastite zračne operacije. 01.12.2006 godine međunarodne mirovne vojne snage su u potpunosti napustile zračnu bazu Dubrave.
           </p>
        </div>

        {/* Certifikacija */}
         <div className="p-6 rounded-[15px] shadow-xl
          bg-white/70 backdrop-blur-lg border border-gray-200/50
          dark:bg-[#172a45]/60 dark:border-[#64ffda]/30 dark:shadow-[#64ffda]/10">
           <div className="flex items-center gap-3 mb-3">
             <Award className="h-8 w-8 text-blue-600 dark:text-[#64ffda] flex-shrink-0" />
             <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Certifikacija (2008 - 2009)</h2>
           </div>
           <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base mb-2">
             Nakon odlaska međunarodnih mirovnih vojnih snaga, JP Međunarodni Aerodrom Tuzla je osigurao tehničke uslove za ispunjavanje ICAO standarda i 05.06.2008. godine stekao privremeni Certifikat za Javnu Upotrebu aerodroma u međunarodnom zračnom prometu u trajanju od godinu dana. Sticanjem ovog Certifikata aerodrom je otvoren za civilni zračni promet.
           </p>
            <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">
             Provedbom inspekcijskog nadzora ovlaštenih institucija za civilnu avijaciju BiH, 05.06.2009. JP Međunarodni Aerodrom Tuzla je stekao Certifikat za javnu upotrebu u međunarodnom zračnom prometu na neograničeni period trajanja.
           </p>
        </div>
      </section>

      {/* Gallery Placeholder Section */}
      <section className="max-w-4xl mx-auto p-6 rounded-[15px] shadow-inner animate-fade-in-delay-2
        bg-blue-50/50 border border-blue-200/50
        dark:bg-[#172a45]/30 dark:border-[#64ffda]/20">
        <div className="flex flex-col items-center text-center gap-4">
          <Images className="h-10 w-10 text-blue-500 dark:text-blue-400 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Galerija Slika</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
              Uskoro će biti dostupna galerija slika aerodroma.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

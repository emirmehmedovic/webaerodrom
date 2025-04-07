import React from 'react';
import { Landmark, ArrowRightLeft, MapPin } from 'lucide-react'; // Import icons

export default function ExchangeOfficePage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-16 relative overflow-hidden rounded-[15px]">

      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-20 rounded-[15px]">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-transparent to-blue-100 dark:from-[#0a192f] dark:via-transparent dark:to-[#172a45]" />
      </div>

      {/* Title Section */}
      <section className="text-center animate-fade-in">
        <ArrowRightLeft className="h-16 w-16 mx-auto text-blue-600 dark:text-[#64ffda] mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          Mjenjačnica
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          Usluge mjenjačnice dostupne su Vam na aerodromu za jednostavnu zamjenu valuta.
        </p>
      </section>

      {/* Main Content Section */}
      <section className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center animate-fade-in-delay-1">

        {/* Text Content */}
        <div className="p-6 rounded-[15px] shadow-xl space-y-6
          bg-white/70 backdrop-blur-lg border border-gray-200/50
          dark:bg-[#172a45]/60 dark:border-[#64ffda]/30 dark:shadow-[#64ffda]/10">
           <div className="flex items-center gap-3 mb-3">
             <Landmark className="h-8 w-8 text-blue-600 dark:text-[#64ffda] flex-shrink-0" />
             <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Usluge Mjenjačnice</h2>
           </div>
           <p className="text-gray-700 dark:text-gray-300">
             U odlazećem gate-u putničkog terminala nalazi se mjenjačnica u kojoj se vrši otkup i prodaja svih valuta.
           </p>
           <div className="flex items-start gap-3 text-sm">
             <MapPin className="h-5 w-5 mt-1 flex-shrink-0 text-blue-600 dark:text-[#64ffda]" />
             <div>
               <p className="font-semibold text-gray-800 dark:text-white">Lokacija:</p>
               <p className="text-gray-600 dark:text-gray-300">Odlazeći gate (nakon pasoške kontrole).</p>
             </div>
           </div>
        </div>

        {/* Image Placeholder/Visual */}
        <div className="rounded-[15px] shadow-xl overflow-hidden group relative h-64 md:h-80
          bg-white/70 backdrop-blur-lg border border-gray-200/50
          dark:bg-[#0a192f]/70 dark:border-[#64ffda]/30 dark:shadow-[#64ffda]/10
          flex items-center justify-center">
           {/* Placeholder Icon or Image */}
           <ArrowRightLeft className="h-24 w-24 text-gray-300 dark:text-gray-600 opacity-50" />
           {/* Or use an actual image if available */}
           {/* <Image src="/images/exchange-office.jpg" alt="Mjenjačnica" fill style={{ objectFit: 'cover' }} /> */}
        </div>

      </section>

    </div>
  );
}

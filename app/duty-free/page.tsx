import React from 'react';
import Image from 'next/image';
import { ShoppingCart, Clock, Phone, Mail, MapPin } from 'lucide-react'; // Import icons

export default function DutyFreePage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-16 relative overflow-hidden rounded-[15px]">

      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-20 rounded-[15px]">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-transparent to-blue-100 dark:from-[#0a192f] dark:via-transparent dark:to-[#172a45]" />
      </div>

      {/* Title Section */}
      <section className="text-center animate-fade-in">
        <ShoppingCart className="h-16 w-16 mx-auto text-blue-600 dark:text-[#64ffda] mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          Duty Free Shop
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          Otkrijte bogatu ponudu svjetskih brendova po povoljnim cijenama u našem Duty Free Shop-u.
        </p>
      </section>

      {/* Main Content Section - Image Left, Text Right */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-fade-in-delay-1">
        {/* Image */}
        <div className="rounded-[15px] shadow-xl overflow-hidden group relative h-80 md:h-96">
           <Image
             src="/images/dutyfree.jpg" // Using the provided image path
             alt="Duty Free Shop na Aerodromu Tuzla"
             fill
             style={{ objectFit: 'cover' }}
             className="transition-transform duration-500 group-hover:scale-105"
             sizes="(max-width: 768px) 100vw, 50vw"
           />
        </div>

        {/* Text Content */}
        <div className="space-y-6">
           <div className="p-6 rounded-[15px] shadow-xl
             bg-white/70 backdrop-blur-lg border border-gray-200/50
             dark:bg-[#172a45]/60 dark:border-[#64ffda]/30 dark:shadow-[#64ffda]/10">
              <div className="flex items-center gap-3 mb-3">
                 <MapPin className="h-6 w-6 text-blue-600 dark:text-[#64ffda] flex-shrink-0" />
                 <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Lokacija i Ponuda</h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">
                Duty Free Shop nalazi se u sklopu odlazećeg dijela putničkog terminala, odmah po prolasku pasoške kontrole. Na površini većoj od 60 m², nudimo preko 2.000 različitih artikala i proizvoda prepoznatljivih svjetskih brendova provjerenog kvaliteta po povoljnim cijenama.
              </p>
           </div>

           <div className="p-6 rounded-[15px] shadow-xl
             bg-white/70 backdrop-blur-lg border border-gray-200/50
             dark:bg-[#0a192f]/70 dark:border-[#64ffda]/30 dark:shadow-[#64ffda]/10"> {/* Slightly different dark bg */}
              <div className="flex items-center gap-3 mb-3">
                 <Clock className="h-6 w-6 text-blue-600 dark:text-[#64ffda] flex-shrink-0" />
                 <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Radno Vrijeme</h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">
                Radno vrijeme je usklađeno sa odlazećim letovima sa Međunarodnog Aerodroma Tuzla.
              </p>
           </div>

           <div className="p-6 rounded-[15px] shadow-xl
             bg-white/70 backdrop-blur-lg border border-gray-200/50
             dark:bg-[#172a45]/60 dark:border-[#64ffda]/30 dark:shadow-[#64ffda]/10">
              <div className="flex items-center gap-3 mb-3">
                 <Phone className="h-6 w-6 text-blue-600 dark:text-[#64ffda] flex-shrink-0" />
                 <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Kontakt</h2>
              </div>
              <div className="space-y-2 text-sm">
                 <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-blue-500 dark:text-[#64ffda]/80 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">+387 35 365 118</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-blue-500 dark:text-[#64ffda]/80 flex-shrink-0" />
                    <a href="mailto:info@trp.si" className="text-blue-600 dark:text-[#64ffda] hover:underline">info@trp.si</a>
                 </div>
              </div>
           </div>
        </div>
      </section>

    </div>
  );
}

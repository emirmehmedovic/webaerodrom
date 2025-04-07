"use client"; // Required for animations/hooks if we were using Framer Motion, good practice anyway

import React from 'react';
import TicketSearchWidget from '@/components/tickets/ticket-search-widget';
import Image from 'next/image';
import { MapPin, Phone, Mail, PlaneTakeoff, Ticket, Building } from 'lucide-react'; // Added more icons

const destinations = [
  { name: 'Istanbul', image: '/images/istanbul.jpg' },
  { name: 'Dortmund', image: '/images/dortmund.jpg' },
  { name: 'Basel', image: '/images/basel.jpg' },
  { name: 'Memmingen', image: '/images/memmingen.jpg' },
];

// Simple fade-in animation class (add to globals.css if needed, or use inline style/library)
// For simplicity, we'll rely on Tailwind transitions for hover effects mainly.

export default function ProdajaKarataPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-20 relative overflow-hidden rounded-[15px]"> {/* Added radius */}

      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-20 rounded-[15px]"> {/* Added radius here too for consistency */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 via-transparent to-sky-100 dark:from-[#0a192f] dark:via-transparent dark:to-[#172a45]" />
      </div>

      {/* Top Section: Title and Widget */}
      <section className="text-center animate-fade-in"> {/* Added animation class placeholder */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white flex items-center justify-center gap-3">
          <PlaneTakeoff className="h-10 w-10 text-[#64ffda]" /> Kupite Vašu Kartu
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
          Pronađite najbolje ponude za letove sa Međunarodnog Aerodroma Tuzla. Unesite detalje Vašeg putovanja ispod.
        </p>
        {/* Widget Container */}
        <div className="max-w-4xl mx-auto p-6 md:p-8 rounded-[15px] shadow-xl transition-all duration-300 ease-in-out
          bg-white/70 backdrop-blur-lg border border-gray-200/50
          dark:bg-[#172a45]/60 dark:border-[#64ffda]/30 dark:shadow-[#64ffda]/10"> {/* Enhanced dark mode style */}
          <TicketSearchWidget />
        </div>
      </section>

      {/* Destination Showcase Section */}
      <section className="animate-fade-in-delay-1"> {/* Added animation class placeholder */}
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          Istražite Naše Destinacije
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {destinations.map((dest, index) => (
            <div key={dest.name} className="relative group overflow-hidden rounded-xl shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl">
              <Image
                src={dest.image}
                alt={dest.name}
                width={400}
                height={300}
                className="object-cover w-full h-60 transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:brightness-110" // Enhanced hover
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300 group-hover:from-black/60" />
              <div className="absolute bottom-0 left-0 p-4 transition-transform duration-300 group-hover:translate-y-[-5px]">
                <h3 className="text-xl font-semibold text-white">{dest.name}</h3>
                <p className="text-sm text-gray-200 group-hover:text-[#64ffda] transition-colors mt-1">Rezervišite let ▸</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* In-Person Purchase Section */}
      <section className="max-w-4xl mx-auto p-6 md:p-8 rounded-[15px] shadow-xl animate-fade-in-delay-2 {/* Added animation class placeholder */}
        bg-white/70 backdrop-blur-lg border border-gray-200/50
        dark:bg-[#0a192f]/70 dark:border-[#64ffda]/30 dark:shadow-[#64ffda]/10"> {/* Darker bg for contrast */}
        <div className="flex flex-col md:flex-row items-center gap-8">
           <div className="flex-shrink-0 text-center md:text-left">
             <Building className="h-16 w-16 mx-auto md:mx-0 text-[#64ffda] mb-4" />
             <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
               Kupovina na Aerodromu
             </h2>
             <p className="text-gray-700 dark:text-gray-300 mt-2">
               Karte možete kupiti i lično na našem šalteru.
             </p>
           </div>
           <div className="border-t md:border-t-0 md:border-l border-gray-300 dark:border-[#64ffda]/30 w-full md:w-auto md:h-auto px-0 md:pl-8 pt-8 md:pt-0">
             <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
               Šalter se nalazi u prizemlju terminala.
             </p>
             <div className="space-y-3 text-sm">
               {/* Address */}
               <div className="flex items-start gap-3">
                 <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-[#64ffda]" />
                 <div>
                   <p className="font-semibold text-gray-800 dark:text-white">Adresa:</p>
                   <p className="text-gray-600 dark:text-gray-300">Gornje Dubrave bb, 75270 Živinice, BiH</p>
                 </div>
               </div>
               {/* Contact */}
               <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 mt-0.5 flex-shrink-0 text-[#64ffda]" />
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-white">Telefon:</p>
                    <p className="text-gray-600 dark:text-gray-300">00387 35 302 400 / 00387 35 277 677</p>
                  </div>
               </div>
               <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 mt-0.5 flex-shrink-0 text-[#64ffda]" />
                   <div>
                    <p className="font-semibold text-gray-800 dark:text-white">Email:</p>
                    <a href="mailto:info@tuzla-airport.ba" className="text-blue-600 dark:text-[#64ffda] hover:underline">info@tuzla-airport.ba</a>
                  </div>
               </div>
             </div>
           </div>
        </div>
      </section>

    </div>
  );
}

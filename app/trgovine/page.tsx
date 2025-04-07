import React from 'react';
import Image from 'next/image';
import { ShoppingBag, Gift, MapPin } from 'lucide-react'; // Import icons

export default function ShopsPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-16 relative overflow-hidden rounded-[15px]">

      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-20 rounded-[15px]">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-transparent to-blue-100 dark:from-[#0a192f] dark:via-transparent dark:to-[#172a45]" />
      </div>

      {/* Title Section */}
      <section className="text-center animate-fade-in">
        <ShoppingBag className="h-16 w-16 mx-auto text-blue-600 dark:text-[#64ffda] mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          Trgovine i Suvenirnice
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          Pronađite poklone, suvenire i druge potrepštine u našim trgovinama unutar terminala.
        </p>
      </section>

      {/* Main Content Section */}
      <section className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start animate-fade-in-delay-1">

        {/* Shop Info */}
        <div className="p-6 rounded-[15px] shadow-xl space-y-4
          bg-white/70 backdrop-blur-lg border border-gray-200/50
          dark:bg-[#172a45]/60 dark:border-[#64ffda]/30 dark:shadow-[#64ffda]/10">
           <div className="flex items-center gap-3 mb-3">
             <ShoppingBag className="h-8 w-8 text-blue-600 dark:text-[#64ffda] flex-shrink-0" />
             <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Glavna Trgovina</h2>
           </div>
           <p className="text-gray-700 dark:text-gray-300">
             U prizemlju putničkog terminala, desno od glavnog ulaza, nalazi se savremeni objekat sa bogatom i raznovrsnom ponudom.
           </p>
           <p className="text-gray-700 dark:text-gray-300">
             Ljubazno osoblje pomoći će Vam u odabiru poklona za porodicu, prijatelje ili poslovne partnere.
           </p>
        </div>

        {/* Souvenir Shop Info */}
        <div className="p-6 rounded-[15px] shadow-xl space-y-4
          bg-white/70 backdrop-blur-lg border border-gray-200/50
          dark:bg-[#0a192f]/70 dark:border-[#64ffda]/30 dark:shadow-[#64ffda]/10"> {/* Slightly different dark bg */}
           <div className="flex items-center gap-3 mb-3">
             <Gift className="h-8 w-8 text-blue-600 dark:text-[#64ffda] flex-shrink-0" />
             <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Suvenirnica</h2>
           </div>
           <p className="text-gray-700 dark:text-gray-300">
             Lijevo od glavnog ulaza u terminal nalazi se suvenirnica u kojoj možete naći nešto lijepo za sebe ili vaše drage osobe.
           </p>
        </div>

      </section>

       {/* Optional Image Section */}
      {/*
      <section className="max-w-5xl mx-auto animate-fade-in-delay-2">
         <Image
           src="/images/shops-souvenirs.jpg" // Replace with an actual image path
           alt="Trgovine na Aerodromu Tuzla"
           width={1200}
           height={400}
           className="rounded-lg shadow-lg object-cover w-full"
         />
      </section>
      */}

    </div>
  );
}

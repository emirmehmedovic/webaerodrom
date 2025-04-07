import React from 'react';
import Image from 'next/image';
import { Car, Bus, Clock, Info, Ticket, Camera } from 'lucide-react'; // Import icons

export default function ParkingPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-16 relative overflow-hidden rounded-[15px]">

      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-20 rounded-[15px]">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-transparent to-blue-100 dark:from-[#0a192f] dark:via-transparent dark:to-[#172a45]" />
      </div>

      {/* Title Section */}
      <section className="text-center animate-fade-in">
        <Car className="h-16 w-16 mx-auto text-blue-600 dark:text-[#64ffda] mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          Parking na Aerodromu Tuzla
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          Međunarodni aerodrom Tuzla ima svoj parking, pokriven video nadzorom i fizički osiguran 24 sata dnevno. Zbog velikog kapaciteta, rezervacija nije neophodna čak ni na dan leta.
        </p>
      </section>

      {/* Pricing Section - Bento Grid Style */}
      <section className="max-w-5xl mx-auto animate-fade-in-delay-1">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          Cjenovnik Parkinga
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Kiss & Fly */}
          <div className="rounded-[15px] p-6 shadow-xl flex flex-col items-center text-center transition-all duration-300 ease-in-out hover:shadow-2xl
            bg-white/70 backdrop-blur-lg border border-gray-200/50
            dark:bg-[#172a45]/60 dark:border-[#64ffda]/30 dark:shadow-[#64ffda]/10">
            <Clock className="h-10 w-10 text-blue-600 dark:text-[#64ffda] mb-3" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">"Kiss & Fly" Zona</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">(do 5 minuta)</p>
            <p className="text-2xl font-bold text-green-600 dark:text-green-400">Besplatno</p>
          </div>

          {/* Card 2: Putničko vozilo - Sat */}
          <div className="rounded-[15px] p-6 shadow-xl flex flex-col items-center text-center transition-all duration-300 ease-in-out hover:shadow-2xl
            bg-white/70 backdrop-blur-lg border border-gray-200/50
            dark:bg-[#172a45]/60 dark:border-[#64ffda]/30 dark:shadow-[#64ffda]/10">
            <Car className="h-10 w-10 text-blue-600 dark:text-[#64ffda] mb-3" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Putničko Vozilo</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">(po satu)</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">3 KM</p>
          </div>

          {/* Card 3: Putničko vozilo - Dan */}
          <div className="rounded-[15px] p-6 shadow-xl flex flex-col items-center text-center transition-all duration-300 ease-in-out hover:shadow-2xl
            bg-white/70 backdrop-blur-lg border border-gray-200/50
            dark:bg-[#172a45]/60 dark:border-[#64ffda]/30 dark:shadow-[#64ffda]/10">
            <Car className="h-10 w-10 text-blue-600 dark:text-[#64ffda] mb-3" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Putničko Vozilo</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">(po danu)</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">10 KM</p>
          </div>

          {/* Card 4: Autobus */}
          <div className="rounded-[15px] p-6 shadow-xl flex flex-col items-center text-center transition-all duration-300 ease-in-out hover:shadow-2xl
            bg-white/70 backdrop-blur-lg border border-gray-200/50
            dark:bg-[#0a192f]/70 dark:border-[#64ffda]/30 dark:shadow-[#64ffda]/10"> {/* Slightly different dark bg */}
            <Bus className="h-10 w-10 text-blue-600 dark:text-[#64ffda] mb-3" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Autobus</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">(po danu)</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">30 KM</p>
          </div>

          {/* Card 5: Minibus */}
          <div className="rounded-[15px] p-6 shadow-xl flex flex-col items-center text-center transition-all duration-300 ease-in-out hover:shadow-2xl
            bg-white/70 backdrop-blur-lg border border-gray-200/50
            dark:bg-[#0a192f]/70 dark:border-[#64ffda]/30 dark:shadow-[#64ffda]/10"> {/* Slightly different dark bg */}
            <Bus className="h-10 w-10 text-blue-600 dark:text-[#64ffda] mb-3" /> {/* Reusing Bus icon */}
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Minibus</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">(po danu)</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">20 KM</p>
          </div>

           {/* Card 6: Kartice */}
           <div className="rounded-[15px] p-6 shadow-xl flex flex-col items-center text-center transition-all duration-300 ease-in-out hover:shadow-2xl
            bg-white/70 backdrop-blur-lg border border-gray-200/50
            dark:bg-[#0a192f]/70 dark:border-[#64ffda]/30 dark:shadow-[#64ffda]/10"> {/* Slightly different dark bg */}
            <Ticket className="h-10 w-10 text-blue-600 dark:text-[#64ffda] mb-3" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Parking Kartice</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Zamjenska: 30 KM</p>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Nova: 50 KM</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Besplatan izlaz: 15 min nakon plaćanja</p>
          </div>
        </div>
      </section>

      {/* Important Notice Section */}
      <section className="max-w-4xl mx-auto p-6 rounded-[15px] shadow-inner animate-fade-in-delay-2
        bg-yellow-50/70 border border-yellow-300/50
        dark:bg-yellow-900/30 dark:border-yellow-400/30">
        <div className="flex items-center gap-4">
          <Info className="h-8 w-8 text-yellow-600 dark:text-yellow-400 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-300">OBAVIJEST</h3>
            <p className="text-sm text-yellow-700 dark:text-yellow-200 mt-1">
              Molimo sve putnike, posjetitelje i korisnike Međunarodnog aerodroma Tuzla da obavijeste osoblje na naplatnoj kućici nakon što parkiraju svoje vozilo na području aerodroma.
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="max-w-4xl mx-auto p-6 rounded-[15px] shadow-inner animate-fade-in-delay-3
        bg-red-50/70 border border-red-300/50
        dark:bg-red-900/30 dark:border-red-400/30">
        <div className="flex items-center gap-4">
          <Info className="h-8 w-8 text-red-600 dark:text-red-400 flex-shrink-0" /> {/* Using Info icon, could use AlertTriangle */}
          <div>
            <h3 className="text-lg font-semibold text-red-800 dark:text-red-300">Odricanje od Odgovornosti</h3>
            <p className="text-sm text-red-700 dark:text-red-200 mt-1">
              Međunarodni aerodrom Tuzla ne snosi odgovornost za eventualnu štetu na vozilu ili krađu vozila na parkingu.
            </p>
          </div>
        </div>
      </section>

      {/* Optional Image Section */}
      {/*
      <section className="max-w-5xl mx-auto animate-fade-in-delay-3">
         <Image
           src="/images/parking-photo.jpg" // Replace with an actual parking image path
           alt="Parking na Aerodromu Tuzla"
           width={1200}
           height={400}
           className="rounded-lg shadow-lg object-cover w-full"
         />
      </section>
      */}

    </div>
  );
}

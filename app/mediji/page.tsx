import React from 'react';
import { Camera, Mail, Phone, Printer, FileText, AlertCircle } from 'lucide-react'; // Replaced Fax with Printer

// Helper component for sections
const InfoSection: React.FC<{ title: string; icon: React.ElementType; children: React.ReactNode }> = ({ title, icon: Icon, children }) => (
  <div className="mb-8 p-6 rounded-[15px] shadow-xl
    bg-white/70 backdrop-blur-lg border border-gray-200/50
    dark:bg-[#172a45]/60 dark:border-[#64ffda]/30 dark:shadow-[#64ffda]/10">
    <div className="flex items-center gap-3 mb-3">
      <Icon className="h-8 w-8 text-blue-600 dark:text-[#64ffda] flex-shrink-0" />
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">{title}</h2>
    </div>
    <div className="text-gray-700 dark:text-gray-300 text-sm md:text-base space-y-3">
      {children}
    </div>
  </div>
);

export default function MediaContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-16 relative overflow-hidden rounded-[15px]">

      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-20 rounded-[15px]">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-transparent to-blue-100 dark:from-[#0a192f] dark:via-transparent dark:to-[#172a45]" />
      </div>

      {/* Title Section */}
      <section className="text-center animate-fade-in">
        <Camera className="h-16 w-16 mx-auto text-blue-600 dark:text-[#64ffda] mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          Vodič za Medije i Kontakt
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          Informacije za medijske kuće o procedurama i kontaktima na Međunarodnom aerodromu Tuzla.
        </p>
      </section>

      {/* Main Content Section */}
      <section className="max-w-4xl mx-auto space-y-8 animate-fade-in-delay-1">

        <InfoSection title="Pravila i Procedure" icon={FileText}>
          <p>
            Sve medijske kuće želimo upoznati sa određenim pravilima i procedurama na Međunarodnom aerodromu Tuzla. Aerodrom predstavlja pogranično područje, što podrazumijeva izvjesna ograničenja u kretanju.
          </p>
        </InfoSection>

        <InfoSection title="Obavezna Najava Posjete" icon={AlertCircle}>
          <p>
            Ukoliko želite posjetiti Međunarodni aerodrom Tuzla, svaka posjeta predstavnika medija prethodi obaveznu najavu dolaska putem dopisa mailom ili faksom, <span className="font-semibold">najmanje 24 sata ranije</span>.
          </p>
          <p className="font-semibold mt-3 mb-1 text-gray-800 dark:text-white">Potrebni podaci u najavi:</p>
          <ul className="list-disc list-inside pl-4">
            <li>Medijska kuća iz koje dolazite</li>
            <li>Razlog, lokacija i predviđeno vrijeme snimanja (datum i sat)</li>
            <li>Ime, prezime i broj lične karte svih članova ekipe</li>
            <li>Kontakt telefon redakcije</li>
          </ul>
        </InfoSection>

        <InfoSection title="Kontakt za Najavu" icon={Mail}>
           <p>Svaki zahtjev dužni ste poslati na sljedeće adrese:</p>
           <div className="space-y-2 mt-2">
             <div className="flex items-center gap-2 text-sm">
               <Mail className="h-4 w-4 text-blue-500 dark:text-[#64ffda]/80 flex-shrink-0" />
               <a href="mailto:security@tuzla-airport.ba" className="text-blue-600 dark:text-[#64ffda] hover:underline">security@tuzla-airport.ba</a>
             </div>
             <div className="flex items-center gap-2 text-sm">
               <Mail className="h-4 w-4 text-blue-500 dark:text-[#64ffda]/80 flex-shrink-0" />
               <a href="mailto:opcentar@bih.net.ba" className="text-blue-600 dark:text-[#64ffda] hover:underline">opcentar@bih.net.ba</a>
             </div>
             <div className="flex items-center gap-2 text-sm">
               <Printer className="h-4 w-4 text-blue-500 dark:text-[#64ffda]/80 flex-shrink-0" /> {/* Replaced Fax with Printer */}
               <span className="text-gray-700 dark:text-gray-300">Fax: +387 35 745 750</span>
             </div>
           </div>
        </InfoSection>

        <InfoSection title="Dodatne Informacije" icon={Phone}>
           <p>Ukoliko su Vam potrebne dodatne informacije molimo da kontaktirate sljedeći broj:</p>
           <div className="flex items-center gap-2 text-sm mt-2">
             <Phone className="h-4 w-4 text-blue-500 dark:text-[#64ffda]/80 flex-shrink-0" />
             <span className="text-gray-700 dark:text-gray-300">+387 61 663 135</span>
           </div>
        </InfoSection>

      </section>

    </div>
  );
}

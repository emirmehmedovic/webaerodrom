import React from 'react';
import { MapPin, Navigation, Car } from 'lucide-react'; // Import icons

// Helper component for direction sections
const DirectionSection: React.FC<{ title: string; icon: React.ElementType; children: React.ReactNode }> = ({ title, icon: Icon, children }) => (
  <div className="mb-8 p-6 rounded-[15px] shadow-xl
    bg-white/70 backdrop-blur-lg border border-gray-200/50
    dark:bg-[#172a45]/60 dark:border-[#64ffda]/30 dark:shadow-[#64ffda]/10">
    <div className="flex items-center gap-3 mb-3">
      <Icon className="h-6 w-6 text-blue-600 dark:text-[#64ffda] flex-shrink-0" />
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h2>
    </div>
    <div className="text-gray-700 dark:text-gray-300 text-sm md:text-base space-y-2"> {/* Changed p to div and added space-y */}
      {children}
    </div>
  </div>
);

export default function HowToReachUsPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-16 relative overflow-hidden rounded-[15px]">

      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-20 rounded-[15px]">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-transparent to-blue-100 dark:from-[#0a192f] dark:via-transparent dark:to-[#172a45]" />
      </div>

      {/* Title Section */}
      <section className="text-center animate-fade-in">
        <Navigation className="h-16 w-16 mx-auto text-blue-600 dark:text-[#64ffda] mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          Kako Doći Do Nas
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          Međunarodni aerodrom Tuzla se nalazi u mjestu Dubrave Gornje, oko 13 kilometara od Tuzle. Pronađite upute za dolazak iz različitih pravaca.
        </p>
      </section>

      {/* Directions Section */}
      <section className="max-w-4xl mx-auto animate-fade-in-delay-1">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          Upute za Dolazak
        </h2>

        <DirectionSection title="Iz Pravca Sarajeva" icon={Car}>
          Nema potrebe da idete u Tuzlu. Iz Živinica pratite putokaze prema Kalesiji. Skretanje za aerodrom je jasno označeno. Udaljenost od skretanja kod Živinica je oko 6 kilometara.
        </DirectionSection>

        <DirectionSection title="Iz Pravca Banja Luke" icon={Car}>
          Pratite rutu: Doboj → Gračanica → Lukavac → Živinice → Dubrave Donje → Dubrave Gornje (Aerodrom Tuzla). Udaljenost je oko 160 kilometara.
        </DirectionSection>

        <DirectionSection title="Iz Pravca Srbije (preko Zvornika)" icon={Car}>
          Nakon prelaska granice u Karakaju, idite prema Kalesiji i na Međašu idete lijevo prema aerodromu. Od granice do aerodroma je otprilike 45 minuta vožnje.
        </DirectionSection>

        <DirectionSection title="Iz Pravca Srbije (preko Bijeljine)" icon={Car}>
          Pratite rutu: Ugljevik → Priboj → Podgora → Seljublje → Hrasno Donje → Tojšići → Gornje Dubrave (Aerodrom Tuzla). Udaljenost od Bijeljine je oko 70 kilometara.
        </DirectionSection>

        <DirectionSection title="Iz Pravca Hrvatske (preko Županje)" icon={Car}>
          Pratite rutu: Srebrenik → Lukavac → Živinice. U Živinicama skrenite prema Dubravama Gornjim i pratite znakove za aerodrom.
        </DirectionSection>

        <DirectionSection title="Iz Pravca Hrvatske (preko Brčkog)" icon={Car}>
          Pratite rutu: Lopare → Gornja Tuzla → Tojšići → Gornje Dubrave (Aerodrom Tuzla).
        </DirectionSection>

        <DirectionSection title="Lokacija na Mapi" icon={MapPin}>
          Međunarodni aerodrom Tuzla se nalazi na adresi: Gornje Dubrave bb, 75270 Živinice, Bosna i Hercegovina.
          <br/> {/* Use br for line break instead of p */}
          GPS koordinate: 44.458056, 18.721944
          <div className="mt-2"> {/* Wrap link in div */}
            <a href="https://www.google.com/maps/place/Tuzla+International+Airport/@44.458056,18.721944,17z/data=!3m1!4b1!4m5!3m4!1s0x475e9c7e4b7b7b7b:0x7b7b7b7b7b7b7b7b!8m2!3d44.458056!4d18.724133" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-[#64ffda] hover:underline">
              Pogledaj na Google Mapi
            </a>
          </div>
        </DirectionSection>
      </section>

    </div>
  );
}

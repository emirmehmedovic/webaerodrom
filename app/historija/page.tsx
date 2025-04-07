import React from 'react';
import { Landmark, Plane, Calendar, Building, TrendingUp, AlertTriangle, Award } from 'lucide-react'; // Import icons

// Timeline data structure
const timelineEvents = [
  { year: 'Period SFRJ', icon: Building, title: 'Vojni Aerodrom "Dubrave"', description: 'Izgrađen kao vojni aerodrom JNA, jedan od najvećih u bivšoj Jugoslaviji.' },
  { year: '1992-1995', icon: Calendar, title: 'Rat u BiH', description: 'Aerodrom pod kontrolom Armije RBiH, kasnije UN baza "Eagle Base" za humanitarnu pomoć.' },
  { year: '1996', icon: Landmark, title: 'Stabilizacijske Snage', description: 'Kontrolu preuzimaju IFOR, zatim SFOR.' },
  { year: '15. Okt 1998', icon: Plane, title: 'Otvorenje za Civilni Saobraćaj', description: 'Zvanično otvoren kao vojno/civilni aerodrom, sa ograničenim prometom.' },
  { year: '1998-2006', icon: Calendar, title: 'Povremena Zatvaranja', description: 'Aerodrom tri puta zatvaran za civilni saobraćaj zbog prioriteta mirovnih snaga.' },
  { year: 'Dec 2006', icon: Building, title: 'Predaja Upravljanja', description: 'Mirovne snage napuštaju bazu, vlasništvo prelazi na Vladu Tuzlanskog kantona.' },
  { year: 'Jun 2008', icon: Award, title: 'Privremeni Certifikat', description: 'Stečen privremeni Certifikat za Javnu Upotrebu u međunarodnom zračnom prometu.' },
  { year: 'Jun 2009', icon: Award, title: 'Trajni Certifikat', description: 'Stečen trajni Certifikat za javnu upotrebu u međunarodnom zračnom prometu.' },
  { year: 'Maj 2013', icon: Plane, title: 'Wizz Air - Prva Linija', description: 'Wizz Air uspostavlja prvu liniju za Malmö, početak LCC ere.' },
  { year: 'Dec 2013', icon: Plane, title: 'Wizz Air - Basel', description: 'Uvedena linija za Basel/Mulhouse/Freiburg.' },
  { year: 'Jun 2014', icon: Plane, title: 'Wizz Air - Dortmund & Eindhoven', description: 'Uvedene nove linije.' },
  { year: 'Okt 2014', icon: Plane, title: 'Wizz Air - Memmingen', description: 'Uvedena linija za Memmingen.' },
  { year: 'Jun 2015', icon: Plane, title: 'Wizz Air Baza', description: 'Wizz Air uspostavlja bazu sa jednim avionom Airbus A320, uvode se nove linije (Stockholm, Frankfurt Hahn, Gothenburg).' },
  { year: '2016-2017', icon: TrendingUp, title: 'Ekspanzija i Rast', description: 'Wizz Air dodaje drugi bazni avion (Mart 2017), nove rute (Beč, Berlin...). Aerodrom prelazi 500.000 putnika (2017).' },
  { year: 'Mart 2019', icon: Building, title: 'Novi Terminal (Atrij)', description: 'Otvoren prošireni dio putničkog terminala, poboljšan kapacitet.' },
  { year: '2019', icon: TrendingUp, title: 'Vrhunac Broja Putnika', description: 'Aerodrom dostiže blizu 600.000 putnika.' },
  { year: 'Nov 2019', icon: Plane, title: 'Ryanair (Kratkotrajno)', description: 'Ryanair kratko leti za Beč i Stockholm.' },
  { year: '2020-2021', icon: AlertTriangle, title: 'Pandemija COVID-19', description: 'Drastičan pad broja letova i putnika.' },
  { year: '2021-2022', icon: TrendingUp, title: 'Postepeni Oporavak', description: 'Ryanair se vraća (Beč, Stockholm, Memmingen), Pegasus i AJet započinju letove za Istanbul.' },
  { year: 'Sep 2022', icon: AlertTriangle, title: 'Najava Zatvaranja Wizz Baze', description: 'Wizz Air najavljuje zatvaranje baze.' },
  { year: 'Dec 2022/Jan 2023', icon: Plane, title: 'Zatvaranje Wizz Baze', description: 'Wizz Air zvanično zatvara bazu i značajno smanjuje broj linija.' },
  { year: '2023-Danas', icon: Landmark, title: 'Nova Faza', description: 'Ryanair i AJet održavaju linije, Wizz Air leti na preostalim rutama. Aerodrom radi na privlačenju novih prijevoznika i stabilizaciji.' },
];

export default function HistoryPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-16 relative overflow-hidden rounded-[15px]">

      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-20 rounded-[15px]">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-transparent to-blue-100 dark:from-[#0a192f] dark:via-transparent dark:to-[#172a45]" />
      </div>

      {/* Title Section */}
      <section className="text-center animate-fade-in">
        <Landmark className="h-16 w-16 mx-auto text-blue-600 dark:text-[#64ffda] mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          Historija Aerodroma Tuzla
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          Pregled ključnih događaja u razvoju Međunarodnog aerodroma Tuzla.
        </p>
      </section>

      {/* Timeline Section */}
      <section className="relative max-w-3xl mx-auto animate-fade-in-delay-1">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-[#64ffda]/30 transform -translate-x-1/2 hidden md:block" aria-hidden="true"></div>

        {timelineEvents.map((event, index) => (
          <div key={index} className="relative mb-12 md:mb-16">
            {/* Icon Point on Timeline */}
            <div className="absolute left-1/2 top-1 w-8 h-8 -ml-4 bg-white dark:bg-[#172a45] rounded-full border-2 border-blue-600 dark:border-[#64ffda] flex items-center justify-center hidden md:flex">
              <event.icon className="h-4 w-4 text-blue-600 dark:text-[#64ffda]" />
            </div>

            {/* Content Card */}
            <div className={`md:w-[calc(50%-2rem)] p-4 rounded-[15px] shadow-xl transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.02]
              bg-white/70 backdrop-blur-lg border border-gray-200/50
              dark:bg-[#172a45]/70 dark:border-[#64ffda]/30 dark:shadow-[#64ffda]/10
              ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'} `}> {/* Alternating sides */}

              {/* Mobile Icon and Year */}
               <div className="flex items-center gap-3 mb-2 md:hidden">
                 <event.icon className="h-5 w-5 text-blue-600 dark:text-[#64ffda] flex-shrink-0" />
                 <span className="text-sm font-semibold text-blue-700 dark:text-[#64ffda]">{event.year}</span>
               </div>
               {/* Desktop Year */}
               <div className="hidden md:block text-sm font-semibold text-blue-700 dark:text-[#64ffda] mb-1">{event.year}</div>

              <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">{event.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">{event.description}</p>
            </div>
          </div>
        ))}
      </section>

    </div>
  );
}

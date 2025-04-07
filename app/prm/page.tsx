import React from 'react';
import { Accessibility, BatteryCharging, ClipboardCheck, Eye, Ear, Lightbulb, Info } from 'lucide-react'; // Replaced Wheelchair with Accessibility

export default function PrmPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-16 relative overflow-hidden rounded-[15px]">

      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-20 rounded-[15px]">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-transparent to-blue-100 dark:from-[#0a192f] dark:via-transparent dark:to-[#172a45]" />
      </div>

      {/* Title Section */}
      <section className="text-center animate-fade-in">
        <Accessibility className="h-16 w-16 mx-auto text-blue-600 dark:text-[#64ffda] mb-4" /> {/* Replaced Wheelchair */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          Putnici sa Smanjenom Pokretljivošću (PRM)
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          Pružamo svu potrebnu pomoć i podršku putnicima čije fizičko, medicinsko ili mentalno stanje zahtijeva individualnu pažnju tokom putovanja.
        </p>
      </section>

      {/* Definition Section */}
      <section className="max-w-4xl mx-auto p-6 md:p-8 rounded-[15px] shadow-xl animate-fade-in-delay-1
        bg-white/70 backdrop-blur-lg border border-gray-200/50
        dark:bg-[#172a45]/60 dark:border-[#64ffda]/30 dark:shadow-[#64ffda]/10">
         <div className="flex flex-col md:flex-row items-center gap-6">
           <Info className="h-12 w-12 text-blue-600 dark:text-[#64ffda] flex-shrink-0" />
           <div>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">Definicija PRM Putnika</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Putnik se smatra putnikom s invaliditetom ili smanjenom pokretljivošću (PRM) ukoliko njegovo fizičko, medicinsko ili mentalno stanje zahtijeva individualnu pažnju i pomoć pri ukrcavanju i iskrcavanju, tokom boravka na aerodromu i tokom leta.
            </p>
           </div>
         </div>
      </section>

      {/* Categories Section */}
      <section className="max-w-5xl mx-auto animate-fade-in-delay-2">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          Kategorije Putnika Koji Koriste Invalidska Kolica
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* WCHR */}
          <div className="rounded-[15px] p-6 shadow-xl flex flex-col text-center transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1
            bg-white/70 backdrop-blur-lg border border-gray-200/50
            dark:bg-[#0a192f]/70 dark:border-[#64ffda]/30 dark:shadow-[#64ffda]/10">
            <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-[#64ffda]">WCHR</h3>
            <p className="text-sm font-semibold text-gray-800 dark:text-white mb-2">Ograničena pokretljivost</p>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Putnik zahtijeva invalidska kolica za udaljenost od/do zrakoplova, ali se može samostalno kretati u kabini.
            </p>
          </div>
          {/* WCHS */}
          <div className="rounded-[15px] p-6 shadow-xl flex flex-col text-center transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1
            bg-white/70 backdrop-blur-lg border border-gray-200/50
            dark:bg-[#0a192f]/70 dark:border-[#64ffda]/30 dark:shadow-[#64ffda]/10">
            <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-[#64ffda]">WCHS</h3>
            <p className="text-sm font-semibold text-gray-800 dark:text-white mb-2">Vrlo ograničena pokretljivost</p>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Potrebna su invalidska kolica od/do aviona i pomoć uz/niz stepenice, ali putnik može samostalno doći do svog sjedišta.
            </p>
          </div>
          {/* WCHC */}
          <div className="rounded-[15px] p-6 shadow-xl flex flex-col text-center transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1
            bg-white/70 backdrop-blur-lg border border-gray-200/50
            dark:bg-[#0a192f]/70 dark:border-[#64ffda]/30 dark:shadow-[#64ffda]/10">
            <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-[#64ffda]">WCHC</h3>
            <p className="text-sm font-semibold text-gray-800 dark:text-white mb-2">Potpuna nepokretnost</p>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Putnik je potpuno nepokretan i ne može se brinuti za sebe tokom leta. <span className="font-semibold">Obavezna je pratnja.</span> Aerodromsko osoblje pruža svu potrebnu pomoć.
            </p>
          </div>
        </div>
      </section>

      {/* Additional Info Sections */}
      <section className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in-delay-3">
        {/* Wheelchair Battery Info */}
        <div className="p-6 rounded-[15px] shadow-xl
          bg-white/70 backdrop-blur-lg border border-gray-200/50
          dark:bg-[#172a45]/60 dark:border-[#64ffda]/30 dark:shadow-[#64ffda]/10">
          <div className="flex items-center gap-3 mb-3">
             <BatteryCharging className="h-6 w-6 text-blue-600 dark:text-[#64ffda] flex-shrink-0" />
             <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Vlastita Kolica sa Baterijom</h2>
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Prihvataju se ručna kolica i kolica na pogon baterije sa suhom ćelijom (zaštićena od istjecanja). Terminali moraju biti izolirani radi sprječavanja kratkih spojeva, a baterija sigurno pričvršćena.
          </p>
        </div>

        {/* Medical Certificate */}
        <div className="p-6 rounded-[15px] shadow-xl
          bg-white/70 backdrop-blur-lg border border-gray-200/50
          dark:bg-[#172a45]/60 dark:border-[#64ffda]/30 dark:shadow-[#64ffda]/10">
           <div className="flex items-center gap-3 mb-3">
             <ClipboardCheck className="h-6 w-6 text-blue-600 dark:text-[#64ffda] flex-shrink-0" />
             <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Medicinski Certifikat</h2>
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Putnici kategorije WCHC (potpuno nepokretni) moraju imati medicinski certifikat o sposobnosti za putovanje, ne stariji od 6 dana od datuma putovanja.
          </p>
        </div>

         {/* Visually/Hearing Impaired */}
        <div className="md:col-span-2 p-6 rounded-[15px] shadow-xl
          bg-white/70 backdrop-blur-lg border border-gray-200/50
          dark:bg-[#172a45]/60 dark:border-[#64ffda]/30 dark:shadow-[#64ffda]/10">
           <div className="flex items-center gap-3 mb-3">
             <Eye className="h-6 w-6 text-blue-600 dark:text-[#64ffda] flex-shrink-0" />
             <Ear className="h-6 w-6 text-blue-600 dark:text-[#64ffda] flex-shrink-0" />
             <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Putnici Oštećenog Vida ili Sluha</h2>
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Ova kategorija putnika zahtijeva posebnu pažnju. Ukoliko putuju bez pratnje, osoblje aerodroma pruža asistenciju od šaltera za registraciju do zrakoplova. Molimo pratnju da aerodromska invalidska kolica preuzmu na šalteru informacija. Naše osoblje će biti na usluzi do ukrcavanja.
          </p>
        </div>
      </section>

      {/* Tips Section */}
      <section className="max-w-4xl mx-auto p-6 rounded-[15px] shadow-inner animate-fade-in-delay-4
        bg-blue-50/50 border border-blue-200/50
        dark:bg-[#172a45]/30 dark:border-[#64ffda]/20">
        <div className="flex items-center gap-4">
          <Lightbulb className="h-8 w-8 text-yellow-500 dark:text-yellow-400 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Savjet / Preporuka</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
              Putnici sa invaliditetom ili smanjenom pokretljivošću trebaju se deklarisati kao takvi prilikom kupovine karte (ili najkasnije 48 sati prije putovanja) kako bi dobili adekvatnu i stručnu pomoć na aerodromu.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

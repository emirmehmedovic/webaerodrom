import React from 'react';
import { Lightbulb, Clock, PlaneTakeoff, PlaneLanding, Ticket, Package, ScanLine, Smartphone, Laptop, HeartPulse, Syringe, AlertTriangle, Info, MapPin } from 'lucide-react'; // Import icons

export default function UsefulTipsPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-16 relative overflow-hidden rounded-[15px]">

      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-20 rounded-[15px]">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-transparent to-blue-100 dark:from-[#0a192f] dark:via-transparent dark:to-[#172a45]" />
      </div>

      {/* Title Section */}
      <section className="text-center animate-fade-in">
        <Lightbulb className="h-16 w-16 mx-auto text-yellow-500 dark:text-yellow-400 mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          Korisni Savjeti za Putnike
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          Pripremite se za ugodno putovanje uz nekoliko korisnih savjeta i preporuka.
        </p>
      </section>

      {/* Before You Travel Section */}
      <section className="max-w-4xl mx-auto p-6 md:p-8 rounded-[15px] shadow-xl animate-fade-in-delay-1
        bg-white/70 backdrop-blur-lg border border-gray-200/50
        dark:bg-[#172a45]/60 dark:border-[#64ffda]/30 dark:shadow-[#64ffda]/10">
         <div className="flex flex-col md:flex-row items-center gap-6">
           <MapPin className="h-12 w-12 text-blue-600 dark:text-[#64ffda] flex-shrink-0" />
           <div>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">Prije Kupovine Karte</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Informišite se o zemlji u koju planirate putovati. Provjerite potrebnu dokumentaciju (vize, pasoš) i eventualne preporuke ili uslove za ulazak u zemlju.
            </p>
           </div>
         </div>
      </section>

      {/* Airport Timing Section */}
      <section className="max-w-5xl mx-auto animate-fade-in-delay-2">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          Vrijeme Dolaska na Aerodrom
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Check-in Opens */}
          <div className="rounded-[15px] p-6 shadow-xl flex flex-col items-center text-center transition-all duration-300 ease-in-out hover:shadow-2xl
            bg-white/70 backdrop-blur-lg border border-gray-200/50
            dark:bg-[#0a192f]/70 dark:border-[#64ffda]/30 dark:shadow-[#64ffda]/10">
            <Clock className="h-10 w-10 text-blue-600 dark:text-[#64ffda] mb-3" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Otvaranje Šaltera</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Šalteri za registraciju putnika i prtljaga otvaraju se <span className="font-semibold">135 minuta</span> prije polijetanja. Dođite na vrijeme!
            </p>
          </div>
          {/* Check-in Closes */}
          <div className="rounded-[15px] p-6 shadow-xl flex flex-col items-center text-center transition-all duration-300 ease-in-out hover:shadow-2xl
            bg-white/70 backdrop-blur-lg border border-gray-200/50
            dark:bg-[#0a192f]/70 dark:border-[#64ffda]/30 dark:shadow-[#64ffda]/10">
            <Clock className="h-10 w-10 text-red-600 dark:text-red-400 mb-3" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Zatvaranje Šaltera</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Šalteri za registraciju se zatvaraju <span className="font-semibold">40 minuta</span> prije polijetanja.
            </p>
          </div>
          {/* Gate Closes */}
          <div className="rounded-[15px] p-6 shadow-xl flex flex-col items-center text-center transition-all duration-300 ease-in-out hover:shadow-2xl
            bg-white/70 backdrop-blur-lg border border-gray-200/50
            dark:bg-[#0a192f]/70 dark:border-[#64ffda]/30 dark:shadow-[#64ffda]/10">
            <PlaneTakeoff className="h-10 w-10 text-red-600 dark:text-red-400 mb-3" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Zatvaranje Izlaza (Gate)</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Izlaz za ukrcavanje u avion zatvara se <span className="font-semibold">30 minuta</span> prije polijetanja.
            </p>
          </div>
        </div>
      </section>

      {/* Luggage Tips Section */}
      <section className="max-w-4xl mx-auto p-6 md:p-8 rounded-[15px] shadow-xl animate-fade-in-delay-3
        bg-white/70 backdrop-blur-lg border border-gray-200/50
        dark:bg-[#172a45]/60 dark:border-[#64ffda]/30 dark:shadow-[#64ffda]/10">
         <div className="flex flex-col md:flex-row items-center gap-6">
           <Package className="h-12 w-12 text-blue-600 dark:text-[#64ffda] flex-shrink-0" />
           <div>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">Pakovanje i Provjera Prtljaga</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-sm">
              <li>Pregledajte karte i putne dokumente prije polaska.</li>
              <li>Spakujte prtljag pravilno, poštujući ograničenja težine kupljene uz kartu.</li>
              <li>Zapamtite izgled prtljaga i označite ga privjeskom sa imenom i prezimenom.</li>
              <li>Vodite računa o dozvoljenim i zabranjenim predmetima u ručnom i predatom prtljagu.</li>
              <li>Razmislite o umotavanju predatog prtljaga u foliju radi dodatne zaštite.</li>
              <li>Nakon čekiranja, provjerite tag/privjesak na karti da li se destinacija i ime slažu.</li>
            </ul>
           </div>
         </div>
      </section>

      {/* Electronics & Prohibited Items Section */}
      <section className="max-w-5xl mx-auto animate-fade-in-delay-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Electronics */}
        <div className="p-6 rounded-[15px] shadow-xl
          bg-white/70 backdrop-blur-lg border border-gray-200/50
          dark:bg-[#0a192f]/70 dark:border-[#64ffda]/30 dark:shadow-[#64ffda]/10">
          <div className="flex items-center gap-3 mb-3">
             <Smartphone className="h-6 w-6 text-blue-600 dark:text-[#64ffda] flex-shrink-0" />
             <Laptop className="h-6 w-6 text-blue-600 dark:text-[#64ffda] flex-shrink-0" />
             <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Elektronski Uređaji</h2>
          </div>
          <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm">
            <li>Manji uređaji (telefoni, tableti, e-čitači) mogu se koristiti uz uključen <span className="font-semibold">zrakoplovni režim rada</span>.</li>
            <li>Veći uređaji (laptop) moraju biti sklonjeni tokom polijetanja i slijetanja.</li>
            <li>Bez ograničenja: pejsmejkeri, slušni aparati, medicinski implantati, stimulatori nerava.</li>
          </ul>
        </div>

        {/* Prohibited in Checked Luggage */}
        <div className="p-6 rounded-[15px] shadow-xl
          bg-white/70 backdrop-blur-lg border border-gray-200/50
          dark:bg-[#0a192f]/70 dark:border-[#64ffda]/30 dark:shadow-[#64ffda]/10">
          <div className="flex items-center gap-3 mb-3">
             <AlertTriangle className="h-6 w-6 text-red-600 dark:text-red-400 flex-shrink-0" />
             <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Ne Nositi u Predatom Prtljagu</h2>
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
            Avio kompanija nije odgovorna za gubitak, štetu ili kašnjenje ako predati prtljag sadrži:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-xs">
            <li>Gotovinu, obveznice, nakit, plemenite metale, drago kamenje</li>
            <li>Računare, fotoaparate, kamere, mobilne telefone i opremu</li>
            <li>Službene, poslovne ili privatne dokumente, identifikacijske dokumente</li>
            <li>Ključeve, tečnost, lijekove, umjetnine, kvarljivu robu</li>
          </ul>
        </div>

        {/* Prohibited in Hand Luggage */}
        <div className="p-6 rounded-[15px] shadow-xl
          bg-white/70 backdrop-blur-lg border border-gray-200/50
          dark:bg-[#0a192f]/70 dark:border-[#64ffda]/30 dark:shadow-[#64ffda]/10">
          <div className="flex items-center gap-3 mb-3">
             <AlertTriangle className="h-6 w-6 text-red-600 dark:text-red-400 flex-shrink-0" />
             <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Zabranjeno u Ručnom Prtljagu</h2>
          </div>
          <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm">
            <li>Pištolji, vatreno oružje, naprave za omamljivanje</li>
            <li>Predmeti s oštrim vrhom ili rubom (noževi, makaze...)</li>
            <li>Radnički alati (bušilice, čekići...)</li>
            <li>Tupo oruđe (palice...)</li>
            <li>Tečnosti, aerosoli, gelovi preko 100ml po pakovanju (ukupno 1L, u zip vrećici). Vrećice dostupne na aerodromu.</li>
            <li>Izuzetak: Hrana i tečnosti za bebe do 2 godine potrebne tokom leta.</li>
          </ul>
        </div>

        {/* Medications */}
        <div className="p-6 rounded-[15px] shadow-xl
          bg-white/70 backdrop-blur-lg border border-gray-200/50
          dark:bg-[#0a192f]/70 dark:border-[#64ffda]/30 dark:shadow-[#64ffda]/10">
          <div className="flex items-center gap-3 mb-3">
             <Syringe className="h-6 w-6 text-blue-600 dark:text-[#64ffda] flex-shrink-0" />
             <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Lijekovi</h2>
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Tečni lijekovi podliježu pravilima za tečnosti. Za nužne lijekove (npr. inzulin) ponesite medicinsku potvrdu i pokažite je na sigurnosnoj kontroli ako zatraže. Imajte na umu da nije moguće čuvati lijekove na hladnom tokom putovanja.
          </p>
        </div>

        {/* Generally Prohibited Items */}
        <div className="md:col-span-2 p-6 rounded-[15px] shadow-xl
          bg-red-100/70 border border-red-300/50
          dark:bg-red-900/40 dark:border-red-500/40">
          <div className="flex items-center gap-3 mb-3">
             <AlertTriangle className="h-8 w-8 text-red-700 dark:text-red-300 flex-shrink-0" />
             <h2 className="text-xl font-semibold text-red-900 dark:text-red-200">Općenito Zabranjeni Predmeti za Prevoz</h2>
          </div>
          <p className="text-sm text-red-800 dark:text-red-200 mb-2">
            Zbog zdravstvenih i sigurnosnih razloga, u avion se <span className="font-semibold">ne smiju</span> unositi predmeti koji mogu ugroziti avion, osobe ili imovinu, uključujući (ali ne ograničavajući se na):
          </p>
          <ul className="list-disc list-inside space-y-1 text-red-800 dark:text-red-200 text-xs">
            <li>Oružje, municija, eksplozivi (i predmeti koji tako izgledaju)</li>
            <li>Zapaljive, radioaktivne, otrovne, zarazne, korozivne supstance</li>
            <li>Kondenzovani gasovi (osim izuzetaka za medicinska pomagala)</li>
            <li>Aktovke sa alarmima, litijske baterije (osim u uređajima pod određenim uslovima), pirotehnika</li>
            <li>Predmeti zabranjeni zakonima zemalja preleta</li>
            <li>Predmeti neprikladni zbog težine, veličine, pakovanja</li>
            <li>Ostaci ljudskih tijela, ljepila, boje</li>
            <li>Predmeti navedeni u ICAO i IATA propisima o opasnim materijama</li>
          </ul>
        </div>
      </section>

      {/* Security Check & Wizz Air Info Section */}
      <section className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in-delay-5">
         {/* Security Check Tip */}
        <div className="p-6 rounded-[15px] shadow-inner
          bg-blue-50/50 border border-blue-200/50
          dark:bg-[#172a45]/30 dark:border-[#64ffda]/20">
          <div className="flex items-center gap-4">
            <ScanLine className="h-8 w-8 text-blue-500 dark:text-blue-400 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Brža Sigurnosna Kontrola</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                Pripremite se unaprijed: odložite metalne i električne predmete (novčanike, kovanice, satove, ključeve, kaiševe, telefone), kapute i jakne u plastične posude prije prolaska kroz skener.
              </p>
            </div>
          </div>
        </div>
         {/* Wizz Air Info */}
        <div className="p-6 rounded-[15px] shadow-inner
          bg-purple-50/50 border border-purple-200/50
          dark:bg-purple-900/30 dark:border-purple-400/30">
          <div className="flex items-center gap-4">
            <Info className="h-8 w-8 text-purple-500 dark:text-purple-400 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Informacije za Wizz Air Letove</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                Za sve nejasnoće i pitanja vezano za karte avio kompanije Wizz Air, molimo vas obratite se direktno na <a href="https://www.wizzair.com" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 hover:underline font-semibold">www.wizzair.com</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

"use client"; // Needed for potential future interactivity or smooth scroll library

import React, { useState } from 'react';
import Link from 'next/link';
import { HelpCircle, Package, Ban, PlaneTakeoff, Music, Dog, Bike, Syringe, AlertTriangle, Info, ChevronRight, HandPlatter, Weight, Ruler, ShoppingBag, Baby, ArrowUpRightSquare } from 'lucide-react';

// Define sections for navigation and content mapping
const sections = [
  { id: 'wizzair-uvod', title: 'Uvod (Wizz Air)', icon: Info },
  { id: 'wizzair-rucni', title: 'Ručni Prtljag (Wizz Air)', icon: HandPlatter },
  { id: 'wizzair-predati', title: 'Predati Prtljag (Wizz Air)', icon: Package },
  { id: 'wizzair-sigurnost', title: 'Sigurnost (Wizz Air)', icon: Ban },
  { id: 'wizzair-specijalni', title: 'Specijalni Prtljag (Wizz Air)', icon: Bike },
  { id: 'wizzair-lijekovi', title: 'Lijekovi (Wizz Air)', icon: Syringe },
  { id: 'pegasus-prtljag', title: 'Prtljag (Pegasus)', icon: PlaneTakeoff }, // Added Pegasus
  { id: 'ajet-prtljag', title: 'Prtljag (AJet)', icon: PlaneTakeoff }, // Added AJet
];

// Helper component for FAQ sections
const FaqSection: React.FC<{ id: string; title: string; icon: React.ElementType; children: React.ReactNode }> = ({ id, title, icon: Icon, children }) => (
  <section id={id} className="mb-12 scroll-mt-24"> {/* scroll-mt for offset */}
    <div className="flex items-center gap-3 mb-4">
      <Icon className="h-8 w-8 text-blue-600 dark:text-[#64ffda] flex-shrink-0" />
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{title}</h2>
    </div>
    <div className="p-6 rounded-[15px] shadow-xl space-y-4
      bg-white/70 backdrop-blur-lg border border-gray-200/50
      dark:bg-[#172a45]/60 dark:border-[#64ffda]/30 dark:shadow-[#64ffda]/10
      text-gray-700 dark:text-gray-300 text-sm md:text-base">
      {children}
    </div>
  </section>
);

// Helper for subheadings within a section
const SubHeading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h4 className="font-semibold text-gray-800 dark:text-white mt-4 mb-2">{children}</h4>
);

// Helper for list items
const ListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li>{children}</li>
);

export default function FaqPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Basic smooth scroll
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80; // Adjust based on actual header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 relative overflow-hidden rounded-[15px]">

      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-20 rounded-[15px]">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-transparent to-blue-100 dark:from-[#0a192f] dark:via-transparent dark:to-[#172a45]" />
      </div>

      {/* Title Section */}
      <section className="text-center mb-16 animate-fade-in">
        <HelpCircle className="h-16 w-16 mx-auto text-blue-600 dark:text-[#64ffda] mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          Česta Pitanja - Prtljag
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          Pronađite odgovore na najčešća pitanja vezana za pravila o prtljagu za Wizz Air, Pegasus Airlines i AJet na letovima sa Aerodroma Tuzla.
        </p>
      </section>

      {/* Main Content with Sidebar Navigation */}
      <div className="flex flex-col md:flex-row gap-12">

        {/* Sidebar Navigation */}
        <aside className="md:w-1/4 lg:w-1/5 sticky top-24 self-start animate-fade-in-delay-1 h-fit">
          <nav className="space-y-2">
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Navigacija</h3>
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`w-full text-left px-4 py-2 rounded-lg flex items-center gap-2 transition-colors duration-200 ${
                  activeSection === section.id
                    ? 'bg-blue-100 dark:bg-[#172a45]/80 text-blue-700 dark:text-[#64ffda]'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50'
                }`}
              >
                <section.icon className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm">{section.title}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* FAQ Content */}
        <main className="md:w-3/4 lg:w-4/5 animate-fade-in-delay-2">

          {/* Wizz Air Sections */}
          <FaqSection id="wizzair-uvod" title="Uvod (Wizz Air)" icon={Info}>
            <p>Od 1. Novembra 2018. godine, svi putnici će imati pravo da u kabinu besplatno unesu jednu ručnu torbu veličine do 40 x 30 x 20 cm koju trebaju smjestiti ispod sjedišta ispred sebe.</p>
            <p>Putnicima koji su kupili WIZZ prioritet biće dozvoljeno da unesu jednu dodatnu torbu sa točkovima maksimalne veličine do 55 x 40 x 23 cm.</p>
            <p>Osim toga, Wizz Air je uveo novu vrstu predate torbe težine do 10 kg, pored dostupnih opcija od 20 i 32 kg.</p>
          </FaqSection>

          <FaqSection id="wizzair-rucni" title="Ručni Prtljag (Wizz Air)" icon={HandPlatter}>
            <SubHeading>Dopušteni Ručni Prtljag:</SubHeading>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <ListItem>Jedna ručna torba (maks. 40 x 30 x 20 cm, 10 kg), smještena ispod sjedišta.</ListItem>
              <ListItem>Predmeti kupljeni u bescarinskoj zoni nakon sigurnosne provjere.</ListItem>
            </ul>
            <SubHeading>WIZZ Prioritet:</SubHeading>
            <p className="mb-2">Ako kupite uslugu WIZZ prioritet (ili imate pravo putem paketa WIZZ Privilege Pass, WIZZ GO ili WIZZ Plus):</p>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <ListItem>Pravo na besplatnu ručnu torbu (maks. 40 x 30 x 20 cm).</ListItem>
              <ListItem>Pravo na dodatnu torbu sa točkovima (maks. 55 x 40 x 23 cm).</ListItem>
              <ListItem>Garantovan unos obje torbe u kabinu (osim zbog operativnih ograničenja).</ListItem>
            </ul>
             <SubHeading>Putnici bez WIZZ Prioriteta:</SubHeading>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <ListItem>Pravo na jednu besplatnu ručnu torbu (maks. 40 x 30 x 20 cm).</ListItem>
              <ListItem>Ako torba prelazi dimenzije, plaća se taksa za preveliki prtljag na aerodromu.</ListItem>
            </ul>
            <SubHeading>Tečnosti u Ručnom Prtljagu:</SubHeading>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <ListItem>Spremnici maksimalne zapremine 100 ml.</ListItem>
              <ListItem>Svi spremnici moraju stati u prozirnu plastičnu kesu od 1 litra (20x20 cm) koja se može ponovo zatvoriti.</ListItem>
              <ListItem>Kesa se pokazuje odvojeno na sigurnosnoj provjeri.</ListItem>
            </ul>
            <SubHeading>Dodatni Besplatni Predmeti u Kabini:</SubHeading>
            <ul className="list-disc list-inside space-y-1">
              <ListItem>Kaput ili prekrivač</ListItem>
              <ListItem>Mobilni telefon</ListItem>
              <ListItem>Štivo za čitanje</ListItem>
              <ListItem>Za djecu mlađu od 2 godine: hrana za vrijeme leta, sklopiva dječija nosiljka ili mala kolijevka</ListItem>
              <ListItem>Par štaka za osobe sa invaliditetom</ListItem>
            </ul>
          </FaqSection>

          <FaqSection id="wizzair-predati" title="Predati Prtljag (Wizz Air)" icon={Package}>
             <SubHeading>Dimenzije i Težina:</SubHeading>
             <ul className="list-disc list-inside space-y-1 mb-4">
                <ListItem>Maksimalne dimenzije: Širina 149 cm, Visina 119 cm, Dužina 171 cm.</ListItem>
                <ListItem>Tipovi torbi: do 10 kg, do 20 kg, do 32 kg.</ListItem>
                <ListItem>Maksimalno 3 komada se mogu kupiti online (wizzair.com / pozivni centar), ostali na aerodromu.</ListItem>
                <ListItem>Moguće kombinacije online: max 1x10kg, max 2x20kg, max 3x32kg. Druge kombinacije nisu moguće online.</ListItem>
                <ListItem>Maksimalna težina po komadu: 32 kg.</ListItem>
             </ul>
             <SubHeading>Dječija Oprema:</SubHeading>
             <p className="mb-4">Jedna dječija kolica / sklopiva nosiljka / autosjedalica mogu se besplatno predati za svako malo dijete.</p>
             <SubHeading>Nadogradnja i Prekomjerni Prtljag:</SubHeading>
             <ul className="list-disc list-inside space-y-1 mb-4">
                <ListItem>Dodatni predati prtljag se može dodati online (do 3 komada) ili na aerodromu (do 6 ukupno).</ListItem>
                <ListItem>Naknade za prtljag su veće na aerodromu.</ListItem>
                <ListItem>Dodatna taksa se naplaćuje na aerodromu za torbe teže od 20 kg (do 32 kg).</ListItem>
                <ListItem>Izvagajte torbe prije dolaska.</ListItem>
             </ul>
          </FaqSection>

          <FaqSection id="wizzair-sigurnost" title="Sigurnost (Wizz Air)" icon={Ban}>
            <SubHeading>Ne Nositi u Predatom Prtljagu (WIZZ ne odgovara za gubitak/štetu):</SubHeading>
            <ul className="list-disc list-inside space-y-1 mb-4 text-xs">
              <ListItem>Gotovina, obveznice, nakit, plemeniti metali, drago kamenje</ListItem>
              <ListItem>Računari, fotoaparati, kamere, mobilni telefoni i oprema</ListItem>
              <ListItem>Službeni, poslovni ili privatni dokumenti, identifikacijski dokumenti</ListItem>
              <ListItem>Ključevi, tečnost, lijekovi, umjetnine, kvarljiva roba</ListItem>
            </ul>
             <p className="text-xs mb-4">Neki aerodromi mogu imati dodatna ograničenja.</p>
            <SubHeading>Općenito Zabranjeni Predmeti za Prevoz (u avionu):</SubHeading>
             <ul className="list-disc list-inside space-y-1 mb-4 text-xs">
                <ListItem>Predmeti koji mogu dovesti u opasnost avion, osobe ili imovinu</ListItem>
                <ListItem>Predmeti koji mogu biti oštećeni tokom transporta zrakom</ListItem>
                <ListItem>Predmeti koji su neprikladno zapakovani</ListItem>
                <ListItem>Predmeti koji su zabranjeni važećim zakonima, propisima ili naredbama države</ListItem>
                <ListItem>Predmeti nepogodni zbog težine, veličine ili drugih karakteristika</ListItem>
                <ListItem>Predmeti koji mogu uzrokovati nelagodu ili mučninu</ListItem>
                <ListItem>Oružje, municija i eksplozivi (uključujući lovačko/sportsko)</ListItem>
                <ListItem>Predmeti ili supstance koji izgledaju kao oružje, municija ili eksploziv</ListItem>
                <ListItem>Zapaljive supstance (osim: alkoholna pića, sprej za kosu, parfem, kolonjska voda)</ListItem>
                <ListItem>Radioaktivni materijali</ListItem>
                <ListItem>Kondenzovani gas (osim izuzetaka za medicinska pomagala)</ListItem>
                <ListItem>Otrovne ili zarazne supstance</ListItem>
                <ListItem>Korozivne supstance (osim izuzetaka)</ListItem>
                <ListItem>Aktovke sa alarmima, litijske baterije (osim u uređajima), pirotehnika</ListItem>
                <ListItem>Ostaci ljudskih tijela</ListItem>
                <ListItem>Ljepilo ili boja</ListItem>
                <ListItem>Svi predmeti navedeni u ICAO i IATA propisima</ListItem>
             </ul>
             <p className="text-xs mb-4">Ako ste zapakovali bilo koji od ovih predmeta, prtljag neće biti preuzet.</p>
             <p className="text-xs">Putnik je obavezan odgovoriti na sve zahtjeve službenika obezbjeđenja. Wizz Air ne odgovara za troškove ako prtljag ne bude transportovan zbog neispunjavanja sigurnosnih zahtjeva.</p>
          </FaqSection>

          <FaqSection id="wizzair-specijalni" title="Specijalni Prtljag (Wizz Air)" icon={Bike}>
             <SubHeading>Sportska Oprema:</SubHeading>
             <p className="mb-2">Prevozi se uz plaćanje dodatne naknade. Mora biti ispravno zapakovana:</p>
             <ul className="list-disc list-inside space-y-1 mb-4 text-xs">
                <ListItem>Skije, daska za skijanje, oprema za surfanje, torbe za golf (u futroli)</ListItem>
                <ListItem>Motke za skakanje (u tekstilnoj vreći)</ListItem>
                <ListItem>Bicikli (u transportnom koferu, uklonjeni točkovi/pedale, upravljač okrenut paralelno/obložen, gume izduvane)</ListItem>
                <ListItem>Oprema za ronjenje (prazne boce, uklonjen izvor napajanja, prekidač na "OFF")</ListItem>
                <ListItem>Rogovi i trofeji (uz važeći veterinarski certifikat)</ListItem>
             </ul>
             <p className="text-xs mb-4">Aerodrom ne obezbjeđuje materijal za pakovanje.</p>
             <SubHeading>Životinje:</SubHeading>
             <p className="mb-4">Nije dozvoljeno unošenje kućnih ljubimaca, osim pasa vodiča (uz odgovarajuću dokumentaciju).</p>
             <SubHeading>Muzički Instrumenti:</SubHeading>
             <ul className="list-disc list-inside space-y-1 mb-4">
                <ListItem>Instrument u futroli do 80 cm dužine (ostale dimenzije max 40x23 cm) može u kabinu.</ListItem>
                <ListItem>Ako instrument sa futrolom ne prelazi 55x40x23 cm i 10 kg, može kao kabinski prtljag (umjesto ručne torbe). Provjeriti na mjeraču.</ListItem>
                <ListItem>Veći instrumenti koji ne mogu u predati prtljag mogu na dodatno kupljeno sjedište (Rezervacija: ime "EXST", prezime putnika). Ne mogu u redove za izlaz ili prvi red, moraju do prozora.</ListItem>
                <ListItem>Instrumenti veći od čela (kontrabas, harfa...) moraju se predati uz oznaku "Ograničena odgovornost".</ListItem>
             </ul>
             <SubHeading>Oznake Ograničene Odgovornosti:</SubHeading>
             <p>Prtljag koji je oštećen, lomljiv, glomazan, neodgovarajuće zapakovan, kasno predan ili prevelikih dimenzija prihvata se samo uz ovu oznaku. Wizz Air ne prihvata odgovornost.</p>
          </FaqSection>

           <FaqSection id="wizzair-lijekovi" title="Lijekovi (Wizz Air)" icon={Syringe}>
             <p>Tečni lijekovi podliježu pravilima za tečnosti u ručnom prtljagu (do 100ml, u zip kesi).</p>
             <p>Za nužne lijekove (npr. inzulin) ponesite medicinsku potvrdu i pokažite je na sigurnosnoj kontroli ako zatraže.</p>
             <p>Imajte na umu da nije moguće čuvati lijekove na hladnom tokom putovanja.</p>
           </FaqSection>

           {/* Pegasus Airlines Section */}
           <FaqSection id="pegasus-prtljag" title="Prtljag (Pegasus Airlines)" icon={PlaneTakeoff}>
              <SubHeading>Ručni Prtljag (Kabinski)</SubHeading>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <ListItem><strong>Besplatni Ručni Prtljag:</strong> Jedan komad (torba/ruksak) maks. 40x30x15 cm, do 3 kg. Mora stati ispod sjedišta.</ListItem>
                <ListItem><strong>Dodatni Kabinski Prtljag:</strong> Veći komad (maks. 55x40x20 cm, do 8 kg) za odjeljak iznad glave, ovisno o kupljenom paketu (npr. Advantage, Comfort Flex) ili uz doplatu.</ListItem>
                <ListItem>Ako ručni prtljag premašuje dozvoljeno, naplaćuje se naknada na izlazu.</ListItem>
                <ListItem>Predmeti iz Duty-Free (u zapečaćenoj kesi) obično se mogu unijeti dodatno.</ListItem>
              </ul>

              <SubHeading>Predati Prtljag (Checked Baggage)</SubHeading>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <ListItem>Količina besplatnog prtljaga ovisi o tarifi (Light obično nema, Saver/Advantage/Comfort Flex uključuju 15-20kg - provjeriti kartu).</ListItem>
                <ListItem>Dodatna kilaža se može kupiti online (jeftinije) ili na aerodromu.</ListItem>
                <ListItem>Maksimalna težina po komadu: 32 kg.</ListItem>
                <ListItem>Dječija oprema (kolica/nosiljka/autosjedalica) obično besplatno.</ListItem>
                <ListItem>Naknada za višak prtljaga naplaćuje se po kilogramu preko dozvoljenog.</ListItem>
              </ul>

              <SubHeading>Tečnosti u Ručnom Prtljagu</SubHeading>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <ListItem>Standardno pravilo: Spremnici do 100 ml, svi u 1L zip kesi (20x20 cm), jedna kesa po putniku.</ListItem>
              </ul>

              <SubHeading>Dodatni Predmeti u Kabini</SubHeading>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <ListItem>Mala ženska torbica ILI torba za laptop ILI torba za odijelo (provjeriti da li se računa kao jedini komad uz najnižu tarifu).</ListItem>
                <ListItem>Kaput, šal, prekrivač, mali kišobran.</ListItem>
                <ListItem>Štake/pomagala.</ListItem>
                <ListItem>Hrana za bebe za vrijeme leta.</ListItem>
              </ul>

              <SubHeading>Sigurnost i Zabranjeni Predmeti</SubHeading>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <ListItem>Ne pakujte vrijednosti u predati prtljag (ograničena odgovornost avio kompanije).</ListItem>
                <ListItem>Pridržavajte se liste zabranjenih predmeta (oružje, eksplozivi, zapaljive materije...). Detalji na web stranici Pegasusa.</ListItem>
              </ul>

              <SubHeading>Specijalni Prtljag</SubHeading>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <ListItem>Sportska oprema: Moguća uz naknadu, pravilno pakovanje i najavu.</ListItem>
                <ListItem>Muzički instrumenti: Manji kao ručni prtljag, za veće kupiti sjedište ili predati (uz naknadu/ograničenu odgovornost).</ListItem>
                <ListItem>Životinje: Generalno nisu dozvoljene u kabini (osim pasa vodiča). Prevoz u prtljažniku (AVIH) moguć pod strogim uslovima uz najavu i naknadu.</ListItem>
                <ListItem>Oznaka ograničene odgovornosti za lomljiv/glomazan prtljag.</ListItem>
              </ul>
           </FaqSection>

           {/* AJet Section */}
           <FaqSection id="ajet-prtljag" title="Prtljag (AJet)" icon={PlaneTakeoff}>
              <p className="italic text-sm mb-4 bg-blue-100 dark:bg-blue-900/30 p-3 rounded-md border border-blue-200 dark:border-blue-700">
                <strong>Važna Napomena:</strong> AJet (bivši AnadoluJet) je brend Turkish Airlinesa. Pravila mogu varirati (domaći/međunarodni letovi, tarifa). Uvijek provjerite specifična pravila za vašu kartu na službenoj AJet/Turkish Airlines stranici.
              </p>

              <SubHeading>Ručni Prtljag (Kabinski)</SubHeading>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <ListItem>Dozvoljena Količina: Jedan komad (maks. 55x40x23 cm, 8 kg).</ListItem>
                <ListItem>Dodatni Lični Predmet: Jedan manji predmet (maks. 40x30x15 cm - npr. torbica, laptop torba).</ListItem>
                <ListItem>Napomena za Tarife: Najniže tarife mogu imati stroža ograničenja (npr. samo lični predmet). Provjerite kartu!</ListItem>
                <ListItem>Prekoračenje: Prtljag može biti odbijen ili naplaćen na izlazu.</ListItem>
              </ul>

              <SubHeading>Predati Prtljag (Checked Baggage)</SubHeading>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <ListItem>Količina besplatnog prtljaga ovisi o ruti i tarifi (EcoJet, ExtraJet, ComfortJet). EcoJet često nema besplatan prtljag na međunarodnim letovima.</ListItem>
                <ListItem>Provjerite tačnu kilažu/broj komada prilikom rezervacije!</ListItem>
                <ListItem>Dodatni prtljag se može kupiti online (jeftinije) ili na aerodromu.</ListItem>
                <ListItem>Maksimalna težina po komadu: 32 kg.</ListItem>
                <ListItem>Maksimalne dimenzije (zbroj D+Š+V): 158 cm.</ListItem>
                <ListItem>Dječija oprema (sklopiva kolica/autosjedalica) obično besplatno.</ListItem>
              </ul>

              <SubHeading>Tečnosti u Ručnom Prtljagu</SubHeading>
              <ul className="list-disc list-inside space-y-1 mb-4">
                 <ListItem>Standardno pravilo: Spremnici do 100 ml, svi u 1L zip kesi (20x20 cm), jedna kesa po putniku.</ListItem>
              </ul>

              <SubHeading>Dodatni Predmeti u Kabini</SubHeading>
              <p className="mb-4">Obično dozvoljeni: kaput/jakna, mali kišobran, štake, hrana za bebe.</p>

              <SubHeading>Sigurnost i Zabranjeni Predmeti</SubHeading>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <ListItem>Ne pakujte vrijednosti u predati prtljag.</ListItem>
                <ListItem>Pridržavajte se liste zabranjenih materija (oružje, eksplozivi...). Detalji na web stranici.</ListItem>
                <ListItem>Posebna pravila za litijumske baterije.</ListItem>
              </ul>

              <SubHeading>Specijalni Prtljag</SubHeading>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <ListItem>Sportska oprema: Moguća uz naknadu, pravilno pakovanje i najavu.</ListItem>
                <ListItem>Muzički instrumenti: Manji kao ručni prtljag, za veće kupiti sjedište ili predati (uz naknadu/ograničenu odgovornost).</ListItem>
                <ListItem>Životinje (Kućni Ljubimci): Moguć prevoz manjih (pas, mačka, ptica) u kabini (PETC) ili većih u prtljažniku (AVIH) pod strogim uslovima, uz naknadu, dokumentaciju i ranu rezervaciju. Provjeriti direktno s kompanijom.</ListItem>
                <ListItem>Oznaka ograničene odgovornosti za lomljiv/glomazan prtljag.</ListItem>
              </ul>
           </FaqSection>

        </main>
      </div>
    </div>
  );
}

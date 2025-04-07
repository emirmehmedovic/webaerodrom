"use client"; // Needed for potential future interactivity

import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import Image component
import { Button } from '@/components/ui/button';
import { ExternalLink, Plane, CheckCircle, Clock, Wifi, Smartphone, AlertTriangle, Baby, Ban, Info, Ticket, PlaneTakeoff } from 'lucide-react';

// Helper component for sections
const CheckInSection: React.FC<{ id: string; title: string; icon: React.ElementType; children: React.ReactNode }> = ({ id, title, icon: Icon, children }) => (
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

// Helper for subheadings
const SubHeading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h4 className="font-semibold text-gray-800 dark:text-white mt-4 mb-2">{children}</h4>
);

// Helper for list items
const ListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li>{children}</li>
);

export default function CheckInPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-16 relative overflow-hidden rounded-[15px]">

      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-20 rounded-[15px]">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-transparent to-blue-100 dark:from-[#0a192f] dark:via-transparent dark:to-[#172a45]" />
      </div>

      {/* Title Section */}
      <section className="text-center mb-16 animate-fade-in">
        <CheckCircle className="h-16 w-16 mx-auto text-blue-600 dark:text-[#64ffda] mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          Prijava na Let / Check-in
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          Informacije o načinima prijave na let, rokovima i pravilima za putnike, djecu i prtljag za Wizz Air, Pegasus Airlines i AJet.
        </p>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto animate-fade-in-delay-1">

        {/* Wizz Air Section */}
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white border-b pb-2 border-gray-300 dark:border-gray-600">Wizz Air</h2>
        <CheckInSection id="wizz-online-checkin" title="Prijava Putem Interneta (Wizz Air)" icon={Wifi}>
          <p>Dostupna od <span className="font-semibold">30 dana do 3 sata</span> prije zakazanog vremena polaska ako ste kupili sjedište tokom rezervacije.</p>
          <p>Ako niste kupili sjedište, prijava je dostupna <span className="font-semibold">48 sati</span> prije polaska.</p>
          <p className="font-bold text-red-600 dark:text-red-400">OBAVEZNO odštampajte kartu za ukrcaj (boarding pass) i ponesite je sa sobom.</p>
          <p>Djecu mlađu od 14 godina mora pratiti putnik stariji od 16 godina, koji ih također prijavljuje online.</p>
          <p className="mt-4 p-3 bg-yellow-100 dark:bg-yellow-900/30 border border-yellow-300 dark:border-yellow-700 rounded-md text-yellow-800 dark:text-yellow-200">
            <Info className="inline h-5 w-5 mr-2" />
            <strong>Važno:</strong> Ukoliko niste izvršili online prijavu do 3 sata prije leta, dužni ste je izvršiti na šalteru aerodroma uz novčanu naknadu (78,50 KM na dan leta).
          </p>
        </CheckInSection>

        <CheckInSection id="wizz-airport-checkin" title="Prijava na Aerodromu (Wizz Air)" icon={Ticket}>
          <p>Ukoliko želite da se registrujete na aerodromu, potrebno je da uz kartu izaberete opciju <span className="font-semibold">"aerodromski check-in"</span> i platite je.</p>
          <p>Možete je doplatiti i naknadno, ali najkasnije <span className="font-semibold">do 3 sata</span> prije polijetanja.</p>
          <SubHeading>Rokovi na Aerodromu:</SubHeading>
          <ul className="list-disc list-inside space-y-1">
            <ListItem>Prijava počinje <span className="font-semibold">135 minuta</span> prije polijetanja.</ListItem>
            <ListItem>Prijava se završava <span className="font-semibold">40 minuta</span> prije polijetanja.</ListItem>
          </ul>
        </CheckInSection>

        <CheckInSection id="wizz-mobile-checkin" title="Prijava Putem Mobilnih Uređaja (Wizz Air)" icon={Smartphone}>
          <p>Ako se prijavljujete putem aplikacije Wizz Air, imate sljedeće mogućnosti:</p>
          <ul className="list-disc list-inside space-y-1">
            <ListItem>Preuzmite kartu za ukrcaj putem aplikacije dok je telefon povezan na internet.</ListItem>
            <ListItem>Posjetite wizzair.com putem preglednika na mobilnom uređaju, unesite potvrdni kod leta i odštampajte kartu za ukrcaj.</ListItem>
          </ul>
        </CheckInSection>

        <CheckInSection id="wizz-bebe-djeca" title="Bebe i Djeca (Wizz Air)" icon={Baby}>
          <SubHeading>Bebe (14 dana - 2 godine):</SubHeading>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <ListItem>Mogu putovati u krilu odrasle osobe u pratnji (samo jedna beba po odrasloj osobi).</ListItem>
            <ListItem>Autosjedalice okrenute prema nazad mogu se unijeti ako kupite dodatno sjedište.</ListItem>
            <ListItem>Beba ne smije napuniti 2 godine prije povratnog leta.</ListItem>
            <ListItem>Odrasla osoba može nositi potrepštine za bebu (ne kolica/nosiljku u kabini).</ListItem>
            <ListItem>Dječija kolica se prijavljuju s ostalim prtljagom (besplatno ako korisnik putuje).</ListItem>
          </ul>
          <SubHeading>Djeca (2 - 14 godina):</SubHeading>
           <ul className="list-disc list-inside space-y-1 mb-4">
            <ListItem>Moraju letjeti u pratnji odrasle osobe (najmanje 16 godina).</ListItem>
            <ListItem>Jedna odrasla osoba može pratiti max 10 djece.</ListItem>
            <ListItem>Djeca starija od 14 godina mogu putovati samostalno.</ListItem>
            <ListItem>Djeca od 14 i 15 godina mogu putovati samostalno, ali ne mogu biti pratnja drugom djetetu.</ListItem>
            <ListItem>Rezervacija za dijete mora biti izvršena u okviru rezervacije odrasle osobe.</ListItem>
            <ListItem>Plaća se naknada kao za odrasle, imaju vlastito sjedište.</ListItem>
          </ul>
        </CheckInSection>

        <CheckInSection id="wizz-zabranjeni-predmeti" title="Zabranjeni Predmeti (Wizz Air)" icon={Ban}>
           <p className="mb-4">Sljedeće predmete ne možete unijeti u avion ili ograničena područja na aerodromu iz sigurnosnih razloga.</p>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div>
                <SubHeading>NIJE DOPUŠTENO U KABINI:</SubHeading>
                <ul className="list-disc list-inside space-y-1 text-xs">
                  <ListItem><strong>Radni alat:</strong> Željezne poluge, bušilice, alati s oštricom 6cm (odvijači, dlijeta), pile, alati za zavarivanje, pištolji za vijke/eksere.</ListItem>
                  <ListItem><strong>Oštri predmeti:</strong> Sjekire, mesarski noževi, planinarski pijuk, žileti, skalpeli, noževi (6cm), makaze (6cm od oslonca), oprema za borilačke vještine, mačevi, sablje.</ListItem>
                  <ListItem><strong>Uređaji za omamljivanje:</strong> Pištolji/palice za omamljivanje, elektrošokeri, uređaji za životinje, hemijski sprejevi (suzavac, biber sprej...).</ListItem>
                  <ListItem><strong>Tupi predmeti:</strong> Palice za bejzbol/softbol, pendreci, oprema za borilačke vještine.</ListItem>
                </ul>
             </div>
             <div>
                <SubHeading>NIJE DOPUŠTENO U KABINI I PRTLJAGU:</SubHeading>
                 <ul className="list-disc list-inside space-y-1 text-xs">
                  <ListItem><strong>Eksploziv:</strong> Municija, detonatori, mine, granate, vojni uređaji, dimne patrone, dinamit, barut, plastični eksplozivi.</ListItem>
                  <ListItem><strong>Oružje:</strong> Vatreno oružje (sve vrste), pištolji igračke/kopije, dijelovi oružja, pištolji na komprimirani zrak/CO2, signalni/start pištolji, lukovi, samostreli, strijele, harpuni, praćke.</ListItem>
                  <ListItem>Aparat za gašenje požara</ListItem>
                  <ListItem>Vatromet</ListItem>
                  <ListItem>Gorivo</ListItem>
                  <ListItem>Plinski rešoi</ListItem>
                  <ListItem>Baterije (osim onih dozvoljenih prema posebnim pravilima)</ListItem>
                  <ListItem>Boja</ListItem>
                </ul>
             </div>
           </div>
        </CheckInSection>

        <CheckInSection id="wizz-propustena-prijava" title="Propuštena Prijava/Ukrcavanje (Wizz Air)" icon={AlertTriangle}>
          <p>Ukoliko ne uspijete obaviti prijavu na let do roka ili ne dođete na vrijeme na ulaz za ukrcaj, vaša rezervacija će biti <span className="font-semibold text-red-600 dark:text-red-400">otkazana</span> i nećete se moći ukrcati.</p>
        </CheckInSection>

        <CheckInSection id="wizz-ukrcavanje" title="Ukrcavanje (Wizz Air)" icon={PlaneTakeoff}>
          <p>Putnici koji se prijave online trebaju doći na ulaz za ukrcavanje najkasnije <span className="font-semibold">30 minuta</span> prije zakazanog vremena polaska.</p>
          <SubHeading>Dokumenti:</SubHeading>
          <p>Pobrinite se da imate sve potrebne putne dokumente (pasoš, viza). Provjerite zahtjeve za ulazak na odredište prije putovanja. Aerodrom ne preuzima odgovornost ako vam se odbije ukrcavanje zbog nedostatka dokumenata.</p>
          <p>Ako putujete sa bebom, pokažite odštampanu kartu za ukrcavanje za bebu na ulazu.</p>
          <SubHeading>Ulaz za Ukrcavanje (Gate):</SubHeading>
          <p>Informaciju o broju izlaza pronaći ćete na informativnim ekranima na aerodromu nakon prijave i sigurnosne provjere. Osoblje na šalteru će vam također dati informaciju ako se prijavljujete na aerodromu.</p>
          <SubHeading>Roba iz Bescarinske Zone:</SubHeading>
          <p>Robu kupljenu nakon prijave i sigurnosne provjere možete unijeti u avion.</p>
          <p className="mt-4 text-xs">Za detaljnije informacije vidjeti na <a href="https://www.wizzair.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-[#64ffda] hover:underline">www.wizzair.com</a>.</p>
        </CheckInSection>

        {/* Pegasus Airlines Section */}
        <h2 className="text-3xl font-bold mt-16 mb-6 text-center text-gray-900 dark:text-white border-b pb-2 border-gray-300 dark:border-gray-600">Pegasus Airlines</h2>
        <CheckInSection id="pegasus-online-checkin" title="Prijava Putem Interneta (Pegasus)" icon={Wifi}>
            <p>Dostupna od <span className="font-semibold">72 sata do 1 sat</span> prije polaska (može varirati).</p>
            <p>Preporučena i najčešće besplatna.</p>
            <p>Preuzmite/odštampajte kartu za ukrcaj (digitalna je obično prihvatljiva).</p>
            <p>Putnici s predatim prtljagom moraju predati prtljag na "Bag Drop" šalteru.</p>
        </CheckInSection>

        <CheckInSection id="pegasus-airport-checkin" title="Prijava na Aerodromu (Pegasus)" icon={Ticket}>
            <p>Moguća, ali može podlijegati naknadi ovisno o tarifi (provjeriti uslove karte).</p>
            <p>Preporučeno doći <span className="font-semibold">2-3 sata</span> prije međunarodnih letova.</p>
            <p>Šalteri se zatvaraju <span className="font-semibold">45-60 minuta</span> prije polaska (provjeriti tačno vrijeme).</p>
        </CheckInSection>

         <CheckInSection id="pegasus-mobile-checkin" title="Prijava Putem Mobilnih Uređaja (Pegasus)" icon={Smartphone}>
            <p>Obično dostupno putem Pegasus mobilne aplikacije.</p>
            <p>Kartu za ukrcaj možete sačuvati u aplikaciji ili kao digitalni fajl.</p>
        </CheckInSection>

         <CheckInSection id="pegasus-bebe-djeca" title="Bebe i Djeca (Pegasus)" icon={Baby}>
            <SubHeading>Bebe (7 dana - 2 godine):</SubHeading>
            <ul className="list-disc list-inside space-y-1 mb-4">
                <ListItem>Putuju u krilu odrasle osobe (starije od 18) uz naknadu.</ListItem>
                <ListItem>Jedna beba po odrasloj osobi.</ListItem>
                <ListItem>Autosjedalica moguća uz kupovinu dodatnog sjedišta po tarifi za dijete.</ListItem>
                <ListItem>Jedna sklopiva kolica/nosiljka besplatno kao predati prtljag.</ListItem>
            </ul>
            <SubHeading>Djeca (2 - 12 godina):</SubHeading>
            <ul className="list-disc list-inside space-y-1 mb-4">
                <ListItem>Moraju imati vlastitu kartu i sjedište.</ListItem>
                <ListItem>Moraju putovati u pratnji osobe starije od 18 godina.</ListItem>
            </ul>
             <SubHeading>Mladi Putnici (12 - 18 godina):</SubHeading>
             <p>Mogu putovati sami. Pegasus obično ne nudi posebnu uslugu pratnje (Unaccompanied Minor).</p>
        </CheckInSection>

        <CheckInSection id="pegasus-zabranjeni-predmeti" title="Zabranjeni Predmeti (Pegasus)" icon={Ban}>
            <p>Primjenjuju se međunarodni propisi. Lista je slična Wizz Air-ovoj.</p>
            <p>Ne pakujte vrijednosti u predati prtljag.</p>
            <p>Provjerite detaljnu listu na <a href="https://www.flypgs.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-[#64ffda] hover:underline">www.flypgs.com</a>.</p>
        </CheckInSection>

         <CheckInSection id="pegasus-propustena-prijava" title="Propuštena Prijava/Ukrcavanje (Pegasus)" icon={AlertTriangle}>
          <p>Rezervacija se otkazuje bez prava na povrat novca (osim ako tarifa dozvoljava promjene uz doplatu).</p>
        </CheckInSection>

        <CheckInSection id="pegasus-ukrcavanje" title="Ukrcavanje (Pegasus)" icon={PlaneTakeoff}>
          <p>Budite na izlazu (gate) najkasnije <span className="font-semibold">30-45 minuta</span> prije polaska.</p>
          <p>Ukrcavanje se zatvara <span className="font-semibold">15-20 minuta</span> prije polaska.</p>
          <p>Pripremite važeću kartu za ukrcaj i putne dokumente.</p>
          <p>Roba iz Duty-Free zone (u zapečaćenoj kesi) je obično dozvoljena.</p>
           <p className="mt-4 text-xs">Za detaljnije informacije vidjeti na <a href="https://www.flypgs.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-[#64ffda] hover:underline">www.flypgs.com</a>.</p>
        </CheckInSection>

        {/* AJet Section */}
        <h2 className="text-3xl font-bold mt-16 mb-6 text-center text-gray-900 dark:text-white border-b pb-2 border-gray-300 dark:border-gray-600">AJet (AnadoluJet)</h2>
         <p className="italic text-sm mb-4 bg-blue-100 dark:bg-blue-900/30 p-3 rounded-md border border-blue-200 dark:border-blue-700 max-w-4xl mx-auto">
            <strong>Važna Napomena:</strong> AJet je brend Turkish Airlinesa. Pravila mogu varirati (domaći/međunarodni letovi, tarifa). Uvijek provjerite specifična pravila za vašu kartu na službenoj AJet/Turkish Airlines stranici.
         </p>

        <CheckInSection id="ajet-online-checkin" title="Prijava Putem Interneta (AJet)" icon={Wifi}>
            <p>Dostupna od <span className="font-semibold">24 sata do 90 minuta</span> prije polaska.</p>
            <p>Preporučena i besplatna.</p>
            <p>Odštampajte kartu za ukrcaj ili preuzmite mobilnu kartu.</p>
            <p>Putnici s predatim prtljagom moraju predati prtljag na "Bag Drop" šalteru.</p>
        </CheckInSection>

        <CheckInSection id="ajet-airport-checkin" title="Prijava na Aerodromu (AJet)" icon={Ticket}>
            <p>Moguća. Naknada može zavisiti od tarife (EcoJet može zahtijevati doplatu).</p>
            <p>Preporučeno doći <span className="font-semibold">3 sata</span> prije međunarodnih letova.</p>
            <p>Šalteri se zatvaraju <span className="font-semibold">45-60 minuta</span> prije polaska (provjeriti tačno vrijeme).</p>
        </CheckInSection>

         <CheckInSection id="ajet-mobile-checkin" title="Prijava Putem Mobilnih Uređaja / Kioska (AJet)" icon={Smartphone}>
            <p>Obično dostupno putem mobilne aplikacije AJet/Turkish Airlines.</p>
            <p>Kiosci za samostalnu prijavu mogu biti dostupni na nekim aerodromima.</p>
        </CheckInSection>

         <CheckInSection id="ajet-bebe-djeca" title="Bebe i Djeca (AJet)" icon={Baby}>
            <SubHeading>Bebe (0 - 23 mjeseca):</SubHeading>
            <ul className="list-disc list-inside space-y-1 mb-4">
                <ListItem>Putuju u krilu odrasle osobe (starije od 18) uz naknadu.</ListItem>
                <ListItem>Jedna beba po odrasloj osobi.</ListItem>
                <ListItem>Moguće kupiti posebno sjedište po tarifi za dijete za korištenje autosjedalice.</ListItem>
                <ListItem>Jedna sklopiva kolica besplatno kao predati prtljag.</ListItem>
            </ul>
            <SubHeading>Djeca (2 - 12 godina):</SubHeading>
            <ul className="list-disc list-inside space-y-1 mb-4">
                <ListItem>Moraju imati vlastitu kartu i sjedište.</ListItem>
                <ListItem>Moraju putovati u pratnji osobe starije od 18 godina.</ListItem>
            </ul>
             <SubHeading>Maloljetnici bez Pratnje (Unaccompanied Minors):</SubHeading>
             <p>AJet/Turkish Airlines obično nude uslugu pratnje za djecu (npr. 7-12 god) uz naknadu i najavu. Djeca mlađa od 7 god obično ne mogu sama. Provjeriti uslove.</p>
        </CheckInSection>

        <CheckInSection id="ajet-zabranjeni-predmeti" title="Zabranjeni Predmeti (AJet)" icon={Ban}>
            <p>Primjenjuju se međunarodni propisi. Lista slična drugim kompanijama.</p>
            <p>Ne pakujte vrijednosti u predati prtljag.</p>
            <p>Posebna pravila za litijumske baterije.</p>
            <p>Provjerite detaljnu listu na <a href="https://www.ajet.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-[#64ffda] hover:underline">www.ajet.com</a> ili Turkish Airlines stranici.</p>
        </CheckInSection>

         <CheckInSection id="ajet-propustena-prijava" title="Propuštena Prijava/Ukrcavanje (AJet)" icon={AlertTriangle}>
          <p>Rezervacija se otkazuje ("no-show"). Ovisno o tarifi, karta može biti nevažeća ili promjenjiva uz doplatu.</p>
        </CheckInSection>

        <CheckInSection id="ajet-ukrcavanje" title="Ukrcavanje (AJet)" icon={PlaneTakeoff}>
          <p>Budite na izlazu (gate) najkasnije <span className="font-semibold">45 minuta</span> prije polaska.</p>
          <p>Ukrcavanje se zatvara <span className="font-semibold">15-20 minuta</span> prije polaska.</p>
          <p>Pripremite važeću kartu za ukrcaj i putne dokumente.</p>
          <p>Roba iz Duty-Free zone (u zapečaćenoj kesi) je obično dozvoljena.</p>
           <p className="mt-4 text-xs">Za detaljnije informacije vidjeti na <a href="https://www.ajet.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-[#64ffda] hover:underline">www.ajet.com</a>.</p>
        </CheckInSection>

      </main>
    </div>
  );
}

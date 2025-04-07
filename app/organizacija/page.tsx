import React from 'react';
import { Building, Users, Briefcase, ShieldCheck, Scale } from 'lucide-react'; // Import icons

// Helper component for sections
const OrgSection: React.FC<{ title: string; icon: React.ElementType; children: React.ReactNode }> = ({ title, icon: Icon, children }) => (
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

export default function OrganizationalStructurePage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-16 relative overflow-hidden rounded-[15px]">

      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-20 rounded-[15px]">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-transparent to-blue-100 dark:from-[#0a192f] dark:via-transparent dark:to-[#172a45]" />
      </div>

      {/* Title Section */}
      <section className="text-center animate-fade-in">
        <Users className="h-16 w-16 mx-auto text-blue-600 dark:text-[#64ffda] mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          Organizaciona Struktura
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          Pregled upravljačkih i nadzornih tijela JP Međunarodni Aerodrom Tuzla d.o.o.
        </p>
      </section>

      {/* Structure Sections */}
      <section className="max-w-4xl mx-auto space-y-8 animate-fade-in-delay-1">

        <OrgSection title="Skupština" icon={Building}>
          <p>
            Uredbom o vršenju ovlaštenja u privrednim društvima sa učešćem državnog kapitala iz nadležnosti Tuzlanskog kantona i općina/gradova na području Tuzlanskog kantona (“Sl. novine TK”, br. 11/2019) uređeno je pravo učešća u radu i odlučivanju skupštine privrednog društva iz nadležnosti Kantona i općina/gradova na području Kantona.
          </p>
          <p>
            Vlada Kantona i općinska/gradska vijeća ostvaruju putem punomoćnika. Vlada Tuzlanskog kantona učešća u radu i odlučivanju skupštine učestvuje neposredno ili putem resornog ministarstva, te za svaku sjednicu skupštine punomoćniku daje punomoć u pisanom obliku, sa obavezujućim uputama za glasanje.
          </p>
           <p>
            Resorno ministarstvo je Ministarstvo trgovine, turizma i saobraćaja Tuzlanskog kantona.
          </p>
        </OrgSection>

        <OrgSection title="Nadzorni Odbor" icon={Scale}>
          <p>
            Nadzorni odbor JP „Međunarodni aerodrom Tuzla“ d.o.o. imenovan je Odlukom Skupštine, a na osnovu Odluke o davanju prethodne saglasnosti za imenovanje donesene od strane Vlade TK. Predsjednik i članovi nadzornog odbora imenovani su od dana donošenja Odluke Skupštine.
          </p>
          <p>Nadzorni odbor čine predsjednik i dva člana:</p>
          <ul className="list-disc list-inside pl-4">
            <li>Bahrija Umihanić, predsjednik</li>
            <li>Amir Morankić, član</li>
            <li>Nusret Mamić, član</li>
          </ul>
        </OrgSection>

        <OrgSection title="Uprava" icon={Briefcase}>
           <p>
            Upravu Javnog preduzeća čini direktor (mandat četiri godine), izvršni direktor za saobraćaj i tehniku, izvršni direktor za finansijsko komercijalne poslove i izvršni direktor za marketing i razvoj. Uprava je imenovana Odlukom Nadzornog odbora.
          </p>
          <p>Upravu čine:</p>
           <ul className="list-disc list-inside pl-4">
            <li>Dževad Halilčević, generalni direktor</li>
            <li>Suhdin Đedović, izvršni direktor za saobraćaj i tehniku</li>
            <li>Melvin Mandalović, izvršni direktor za finansijsko komercijalne poslove</li>
            <li>Mirnes Vejzović, izvršni direktor za marketing i razvoj</li>
          </ul>
        </OrgSection>

        <OrgSection title="Odbor za Reviziju" icon={ShieldCheck}>
           <p>
            Odbor za reviziju JP „Međunarodni aerodrom Tuzla“ d.o.o. imenovan je Odlukom Skupštine od 31.08.2022. i 21.10.2022. godine. Predsjednik i članovi Odbora za reviziju imenuju se na mandat od četiri godine.
          </p>
          <p>Odbor za reviziju čine predsjednik i dva člana:</p>
           <ul className="list-disc list-inside pl-4">
            <li>Senada Fatušić, predsjednik</li>
            <li>Zineta Habul, član</li>
            <li>Alma Džibrić, član</li>
          </ul>
        </OrgSection>

      </section>

    </div>
  );
}

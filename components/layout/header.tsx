"use client";
import { useTheme } from 'next-themes';
import { Sun, Moon, Plane, Menu, ChevronDown } from 'lucide-react'; // Added ChevronDown
import { useState, useEffect, useRef } from 'react'; // Consolidated imports
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'; // Added Collapsible imports
import LanguageSwitcher from '@/components/language-switcher';

const navigation = [
  {
    name: 'Putnici',
    items: [
      { name: 'Prodaja karata', href: '/prodaja-karata' },
      // The previous attempt already made this change, so the SEARCH block needs to reflect the current state.
      // If it was reverted, this would be the place to change it again.
      // Assuming the change is already present based on the error message's file content:
      { name: 'Red letenja', href: '/red-letenja' },
      { name: 'Važniji telefonski brojevi', href: '/telefonski-brojevi' },
      { name: 'Web check in', href: '/web-check-in' },
      { name: 'Putnici sa smanjenom pokretljivošću', href: '/prm' },
      { name: 'Korisni savjeti', href: '/savjeti' },
      { name: 'Česta pitanja', href: '/faq' }, // Added FAQ link
      { name: 'Izgubili ste prtljag', href: '/izgubljeni-prtljag' },
      { name: 'Prijava na let / Check in', href: '/prijava-na-let' },
      { name: 'Kako do nas', href: '/kako-do-nas' },
      { name: 'Parking', href: '/parking' },
      { name: 'Internet', href: '/internet' },
      { name: 'Duty free shop', href: '/duty-free' },
      { name: 'Ugostiteljska ponuda', href: '/ugostiteljska-ponuda' },
      { name: 'Mjenjačnice', href: '/mjenjacnice' },
      { name: 'Bankomati', href: '/bankomati' },
      { name: 'Trgovine', href: '/trgovine' },
      { name: 'Rent a car', href: '/rent-a-car' },
    ],
  },
  {
    name: 'Poslovno',
    items: [
      { name: 'Cjenovnik', href: '/cjenovnik' },
      { name: 'Konferencijska sala', href: '/konferencijska-sala' },
      { name: 'Instrukcije o zakupu prostora', href: '/zakup-prostora' },
      {
        name: 'Javne nabavke',
        href: '/javne-nabavke',
        subitems: [
          { name: 'Pravilnik javnih nabavki', href: '/pravilnik-javne-nabavke' },
          { name: 'Odluke o izboru ponuđača', href: '/odluke-izbor' },
          { name: 'Odluke o poništenju', href: '/odluke-ponistenje' },
          { name: 'Odluke o pokretanju...', href: '/odluke-pokretanje' },
          { name: 'Odluke o pregovaračkom postupku', href: '/odluke-pregovaracki' },
          { name: 'Tenderske dokumentacije', href: '/tenderske-dokumentacije' },
          { name: 'Plan nabavki', href: '/plan-nabavki' },
          { name: 'Izvještaj o realizaciji ugovora', href: '/izvjestaj-ugovori' },
        ],
      },
      { name: 'Javni pozivi aktuelno', href: '/javni-pozivi' },
      { name: 'Javni pozivi arhiva', href: '/javni-pozivi-arhiva' },
      { name: 'Opće informacije', href: '/opce-informacije' },
      { name: 'Aerodrom kroz historiju', href: '/historija' },
      { name: 'Statistika', href: '/statistika' },
      { name: 'Izvještaj o utrošku sredstava', href: '/izvjestaj-sredstva' },
      { name: 'Organizaciona struktura', href: '/organizacija' },
      { name: 'Novosti', href: '/novosti' },
      { name: 'Mediji', href: '/mediji' }, // Renamed and updated href
    ],
  },
];

// Removed duplicate import

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Mobile sheet state
  const [openMenu, setOpenMenu] = useState<string | null>(null); // Desktop menu state
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null); // Desktop submenu state
  const [isPutniciOpen, setIsPutniciOpen] = useState(false); // Mobile collapsible state
  const [isPoslovnoOpen, setIsPoslovnoOpen] = useState(false); // Mobile collapsible state

  const menuRef = useRef<HTMLDivElement>(null); // Ref for desktop menu click outside

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenSubmenu(null);
        setOpenMenu(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2 ml-6">
          <Plane className="h-6 w-6 text-[#64ffda]" />
          <span className="font-bold text-xl">Aerodrom Tuzla</span>
        </Link>

        {/* Desktop Navigation */}
        <div ref={menuRef} className="hidden md:flex md:flex-1 md:items-center md:justify-between">
          <div className="ml-14 flex items-center space-x-6">
            {navigation.map((section) => (
              <div key={section.name} className="relative">
                <button
                  className={`text-base font-semibold px-4 py-2 rounded-lg backdrop-blur-md transition-all hover:bg-white/20 hover:text-[#64ffda] ${
                    section.name === 'Putnici'
                      ? 'bg-white/5'
                      : section.name === 'Poslovno'
                      ? 'bg-white/10'
                      : ''
                  }`}
                  onClick={() =>
                    setOpenMenu(openMenu === section.name ? null : section.name)
                  }
                >
                  {section.name}
                </button>
                {openMenu === section.name && (
                  <div className="absolute left-0 mt-2 w-[600px] max-h-[400px] overflow-y-auto grid grid-cols-3 gap-4 rounded-xl bg-background/90 backdrop-blur-lg border border-border/40 shadow-2xl p-6 z-50">
                    {section.items.map((link) => (
                      <div key={link.name} className="relative">
                        {link.subitems ? (
                          // Render button for items WITH subitems
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              setOpenSubmenu(openSubmenu === link.name ? null : link.name);
                            }}
                            className="block w-full text-left px-3 py-2 text-sm rounded hover:bg-[#172a45]/50 hover:text-[#64ffda] transition-colors flex items-center justify-between"
                          >
                            {link.name}
                            <span className="ml-1">▼</span>
                          </button>
                        ) : (
                          // Render Link for items WITHOUT subitems
                          <Link
                            href={link.href}
                            className="block w-full text-left px-3 py-2 text-sm rounded hover:bg-[#172a45]/50 hover:text-[#64ffda] transition-colors"
                            onClick={() => { setOpenMenu(null); setOpenSubmenu(null); }} // Close menu on click
                          >
                            {link.name}
                          </Link>
                        )}
                        {/* Submenu rendering logic (only if subitems exist) */}
                        {link.subitems && openSubmenu === link.name && (
                          <div className="absolute left-full top-0 mt-0 ml-2 w-56 rounded-xl bg-background/90 backdrop-blur-lg border border-border/40 shadow-2xl p-4 z-50">
                            {link.subitems.map((sublink) => (
                              <Link
                                key={sublink.name}
                                href={sublink.href}
                                className="block px-3 py-2 text-sm rounded hover:bg-[#172a45]/50 hover:text-[#64ffda] transition-colors"
                                onClick={() => { setOpenMenu(null); setOpenSubmenu(null); }} // Close menu on click
                              >
                                {sublink.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex items-center space-x-2 ml-auto pr-4">
            {mounted && (
              <LanguageSwitcher />
            )}
            <Button asChild variant="outline">
              <Link href="/kontakt">Kontakt</Link>
            </Button>
            {mounted && (
              <Button
                variant="outline"
                size="icon"
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              </Button>
            )}
          </div>
        </div>

 
        {/* Mobile Navigation */}
        <div className="flex flex-1 justify-end md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="max-h-screen overflow-y-auto">
              {/* Corrected Mobile Menu Logic */}
              <div className="flex flex-col space-y-4 mt-8">
                {navigation.map((section) => {
                  const isCollapsible = section.name === 'Putnici' || section.name === 'Poslovno';
                  const isOpenState = section.name === 'Putnici' ? isPutniciOpen : isPoslovnoOpen;
                  const setIsOpenState = section.name === 'Putnici' ? setIsPutniciOpen : setIsPoslovnoOpen;

                  if (isCollapsible) {
                    return (
                      <Collapsible key={section.name} open={isOpenState} onOpenChange={setIsOpenState}>
                        <CollapsibleTrigger className="flex justify-between items-center w-full mb-2 p-2 rounded hover:bg-muted">
                          {/* Removed text-[#64ffda] for better light theme contrast */}
                          <p className="font-semibold">{section.name}</p>
                          <ChevronDown className={`h-4 w-4 transition-transform ${isOpenState ? 'rotate-180' : ''}`} />
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <div className="flex flex-col space-y-2 pl-6 border-l border-border/40 mb-4"> {/* Indented content */}
                            {section.items.map((link) => (
                              <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm transition-colors hover:text-[#64ffda] py-1"
                                onClick={() => setIsOpen(false)} // Close sheet on link click
                              >
                                {link.name}
                              </Link>
                              // Note: Subitems are not rendered here for simplicity on mobile
                            ))}
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    );
                  } else {
                    // Handle non-collapsible sections if any exist in the future
                    return (
                      <div key={section.name}>
                        {/* Render non-collapsible section */}
                      </div>
                    );
                  }
                })}
                <Button asChild variant="outline" className="mt-4">
                  <Link href="/kontakt" onClick={() => setIsOpen(false)}>
                    Kontakt
                  </Link>
                </Button>
                <div className="flex justify-center mt-4">
                  <LanguageSwitcher />
                </div>
                <div className="flex justify-center mt-4">
                  <Button
                    variant="outline"
                    onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                    aria-label="Toggle theme"
                    className="w-full"
                  >
                    {theme === 'light' ? 'Tamna Tema' : 'Svijetla Tema'}
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}

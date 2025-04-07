import Link from 'next/link';
import { Facebook, Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full mt-12 py-12 bg-gradient-to-r from-blue-800 to-indigo-900 text-white">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Kontakt */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold mb-2">Kontakt</h4>
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <Phone className="h-4 w-4 flex-shrink-0" />
            <span>+387 35 302 400</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <Phone className="h-4 w-4 flex-shrink-0" /> {/* Using Phone icon for Fax */}
            <span>Fax: +387 35 745 750</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <Mail className="h-4 w-4 flex-shrink-0" />
            <a href="mailto:info@tuzla-airport.ba" className="hover:text-white transition-colors">info@tuzla-airport.ba</a>
          </div>
        </div>

        {/* Column 2: Adresa & Radno vrijeme */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold mb-2">Adresa</h4>
          <div className="flex items-start gap-2 text-sm text-gray-300">
            <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
            <span>Gornje Dubrave b.b.<br />75270 Živinice<br />Bosna i Hercegovina</span>
          </div>
          <h4 className="text-lg font-semibold mt-6 mb-2">Radno vrijeme</h4>
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <Clock className="h-4 w-4 flex-shrink-0" />
            <span>Svaki dan: 06:30 - 23:00</span>
          </div>
        </div>

        {/* Column 3: Social, Legal & Copyright */}
        <div className="space-y-4 md:text-left"> {/* Changed alignment for consistency */}
          <h4 className="text-lg font-semibold mb-2">Pratite nas</h4>
          <div className="flex gap-4"> {/* Removed md:justify-end */}
            <a href="https://www.facebook.com/Tuzlaintrnationalairport" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-300 hover:text-white transition-colors">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="https://www.instagram.com/tuzlainternationalairport/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-300 hover:text-white transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
          </div>
          <div className="mt-6 space-x-4"> {/* Added margin-top */}
            <Link href="/privacy" className="text-sm text-gray-300 hover:text-white transition-colors">Privatnost</Link>
            <Link href="/terms" className="text-sm text-gray-300 hover:text-white transition-colors">Uslovi korištenja</Link>
          </div>
          <p className="text-sm text-gray-300 mt-6"> {/* Added margin-top */}
            © {new Date().getFullYear()} Međunarodni Aerodrom Tuzla.<br/> Sva prava zadržana.
          </p>
        </div>
      </div>
    </footer>
  );
}

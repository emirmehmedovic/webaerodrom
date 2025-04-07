"use client"; // Needed for potential form interactivity later

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Link from 'next/link'; // Added Link import
import Image from 'next/image'; // Added Image import
import { Luggage, Search, Phone, Mail, Info, Lightbulb, Building } from 'lucide-react';

export default function LostLuggagePage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-16 relative overflow-hidden rounded-[15px]">

      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-20 rounded-[15px]">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-transparent to-blue-100 dark:from-[#0a192f] dark:via-transparent dark:to-[#172a45]" />
      </div>

      {/* Bento Grid Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in max-w-4xl mx-auto"> {/* Added max-w and mx-auto */}
        {/* Text Cell */}
        <div className="md:col-span-1 rounded-[15px] p-6 shadow-xl flex flex-col justify-center items-center md:items-start text-center md:text-left transition-all duration-300 ease-in-out hover:shadow-2xl
          bg-white/70 backdrop-blur-lg border border-gray-200/50
          dark:bg-[#172a45]/60 dark:border-[#64ffda]/30 dark:shadow-[#64ffda]/10">
          <Luggage className="h-12 w-12 text-blue-600 dark:text-[#64ffda] mb-4" />
          <h1 className="text-3xl lg:text-4xl font-bold mb-3 text-gray-900 dark:text-white">
            Izgubljen ili Oštećen Prtljag?
          </h1>
          <p className="text-md text-gray-700 dark:text-gray-300">
            Bez brige, tu smo da pomognemo. Slijedite korake ispod kako biste prijavili problem i pratili status Vašeg prtljaga.
          </p>
        </div>

        {/* Image Cell */}
        <div className="md:col-span-2 h-64 md:h-80 rounded-[15px] shadow-xl overflow-hidden group relative transition-all duration-300 ease-in-out hover:shadow-2xl {/* Added height */}
          bg-white/70 backdrop-blur-lg border border-gray-200/50
          dark:bg-[#0a192f]/70 dark:border-[#64ffda]/30 dark:shadow-[#64ffda]/10">
           <Image
             src="/images/izgubljeni-prtljag.png"
             alt="Ilustracija izgubljenog prtljaga"
             fill
             style={{ objectFit: 'cover' }}
             className="transition-transform duration-500 group-hover:scale-105"
             sizes="(max-width: 768px) 100vw, 66vw"
           />
           {/* Optional overlay */}
           {/* <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div> */}
        </div>
      </section>

      {/* Immediate Steps Section */}
      <section className="max-w-4xl mx-auto p-6 md:p-8 rounded-[15px] shadow-xl animate-fade-in-delay-1
        bg-white/70 backdrop-blur-lg border border-gray-200/50
        dark:bg-[#172a45]/60 dark:border-[#64ffda]/30 dark:shadow-[#64ffda]/10">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <Building className="h-12 w-12 text-blue-600 dark:text-[#64ffda] flex-shrink-0" />
          <div>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">Odmah se Javite na Šalter</h2>
            <p className="text-gray-700 dark:text-gray-300">
              U slučaju da vaš prtljag nije stigao, zamijenjen je ili oštećen, odmah se javite na šalter za <span className="font-semibold text-blue-600 dark:text-[#64ffda]">izgubljeno / nađeno</span> koji se nalazi u holu terminala Međunarodnog aerodroma Tuzla. Naše stručno osoblje će napraviti odgovarajući zapisnik.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Radno vrijeme šaltera je usklađeno sa radnim vremenom aerodroma (06:30 - 23:00).</p>
          </div>
        </div>
      </section>

      {/* Process & World Tracer Section */}
      <section className="max-w-4xl mx-auto p-6 md:p-8 rounded-[15px] shadow-xl animate-fade-in-delay-2
        bg-white/70 backdrop-blur-lg border border-gray-200/50
        dark:bg-[#0a192f]/70 dark:border-[#64ffda]/30 dark:shadow-[#64ffda]/10">
         <div className="flex flex-col md:flex-row items-center gap-6">
           <Search className="h-12 w-12 text-blue-600 dark:text-[#64ffda] flex-shrink-0" />
           <div>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">Praćenje i Pronalazak</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Redovno ćemo vas informisati o statusu vašeg prtljaga. Koristimo napredni računarski sistem <span className="font-semibold text-blue-600 dark:text-[#64ffda]">World Tracer</span> za brzi pronalazak prtljaga širom svijeta.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              U naš odjel prispjevaju i drugi zaboravljeni predmeti (u zrakoplovu, čekaonicama, toaletima, restoranima, na KDZ kontroli). Ukoliko primjetite da vam nešto nedostaje, kontaktirajte nas. Nakon pronalaska, osoblje vas obavještava radi preuzimanja.
            </p>
           </div>
         </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-4xl mx-auto animate-fade-in-delay-3 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="p-6 md:p-8 rounded-[15px] shadow-xl
          bg-white/70 backdrop-blur-lg border border-gray-200/50
          dark:bg-[#172a45]/60 dark:border-[#64ffda]/30 dark:shadow-[#64ffda]/10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Kontakt Informacije</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">Za sve informacije možete nas kontaktirati:</p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm">
              <Phone className="h-5 w-5 flex-shrink-0 text-blue-600 dark:text-[#64ffda]" />
              <span className="text-gray-700 dark:text-gray-300">+387 35 745 551</span> {/* Darker text */}
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Mail className="h-5 w-5 flex-shrink-0 text-blue-600 dark:text-[#64ffda]" />
              <a href="mailto:lostandfound@tuzla-airport.ba" className="text-blue-600 dark:text-[#64ffda] hover:underline">lostandfound@tuzla-airport.ba</a>
            </div>
          </div>
        </div>

        {/* Contact Form Placeholder */}
        <div className="p-6 md:p-8 rounded-[15px] shadow-xl
          bg-white/70 backdrop-blur-lg border border-gray-200/50
          dark:bg-[#0a192f]/70 dark:border-[#64ffda]/30 dark:shadow-[#64ffda]/10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Pošaljite Upit Online</h2>
          <form className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-sm font-medium text-gray-800 dark:text-gray-300">Ime i Prezime</Label> {/* Darker label */}
              <Input id="name" name="name" type="text" required className="mt-1 bg-white/50 dark:bg-black/20 border-gray-300 dark:border-gray-600" />
            </div>
            <div>
              <Label htmlFor="email" className="text-sm font-medium text-gray-800 dark:text-gray-300">Email Adresa</Label> {/* Darker label */}
              <Input id="email" name="email" type="email" required className="mt-1 bg-white/50 dark:bg-black/20 border-gray-300 dark:border-gray-600" />
            </div>
             <div>
              <Label htmlFor="flightNumber" className="text-sm font-medium text-gray-800 dark:text-gray-300">Broj Leta (opcionalno)</Label> {/* Darker label */}
              <Input id="flightNumber" name="flightNumber" type="text" className="mt-1 bg-white/50 dark:bg-black/20 border-gray-300 dark:border-gray-600" />
            </div>
            <div>
              <Label htmlFor="message" className="text-sm font-medium text-gray-800 dark:text-gray-300">Opis problema / Poruka</Label> {/* Darker label */}
              <Textarea id="message" name="message" rows={4} required className="mt-1 bg-white/50 dark:bg-black/20 border-gray-300 dark:border-gray-600" />
            </div>
            <Button type="submit" variant="outline" className="w-full bg-transparent border-blue-600 text-blue-600 hover:bg-blue-600/10 dark:border-[#64ffda] dark:text-[#64ffda] dark:hover:bg-[#64ffda]/10 dark:hover:text-[#64ffda]">
              Pošalji Poruku
            </Button>
          </form>
        </div>
      </section>

      {/* Tips Section */}
      <section className="max-w-4xl mx-auto p-6 rounded-[15px] shadow-inner animate-fade-in-delay-4
        bg-blue-50/50 border border-blue-200/50
        dark:bg-[#172a45]/30 dark:border-[#64ffda]/20">
        <div className="flex items-center gap-4">
          <Lightbulb className="h-8 w-8 text-yellow-500 dark:text-yellow-400 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Naš Savjet Putnicima</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
              Označite svoj prtljag imenom i prezimenom ili prepoznatljivim privjeskom. To može značajno ubrzati proces identifikacije u slučaju gubitka.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

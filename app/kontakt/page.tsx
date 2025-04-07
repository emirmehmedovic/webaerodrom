"use client"; // Needed for form interactivity

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Building, Ticket, Luggage, User, Briefcase, Shield, Calculator, Megaphone, Info, Printer } from 'lucide-react'; // Import icons

// Helper component for contact cards
const ContactCard: React.FC<{ title: string; icon: React.ElementType; children: React.ReactNode }> = ({ title, icon: Icon, children }) => (
  <div className="p-6 rounded-[15px] shadow-xl flex flex-col
    bg-white/70 backdrop-blur-lg border border-gray-200/50
    dark:bg-[#172a45]/60 dark:border-[#64ffda]/30 dark:shadow-[#64ffda]/10">
    <div className="flex items-center gap-3 mb-3">
      <Icon className="h-6 w-6 text-blue-600 dark:text-[#64ffda] flex-shrink-0" />
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
    </div>
    <div className="text-gray-700 dark:text-gray-300 text-sm space-y-2 mt-auto pt-3 border-t border-gray-300 dark:border-gray-600/50">
      {children}
    </div>
  </div>
);

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-16 relative overflow-hidden rounded-[15px]">

      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-20 rounded-[15px]">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-transparent to-blue-100 dark:from-[#0a192f] dark:via-transparent dark:to-[#172a45]" />
      </div>

      {/* Title Section */}
      <section className="text-center animate-fade-in">
        <Mail className="h-16 w-16 mx-auto text-blue-600 dark:text-[#64ffda] mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          Kontakt Informacije
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          Stupite u kontakt sa nama putem telefona, emaila ili kontakt forme. Ovdje možete pronaći kontakte za različite službe aerodroma.
        </p>
      </section>

      {/* General Contact Info */}
      <section className="max-w-4xl mx-auto p-6 md:p-8 rounded-[15px] shadow-xl animate-fade-in-delay-1
        bg-white/70 backdrop-blur-lg border border-gray-200/50
        dark:bg-[#0a192f]/70 dark:border-[#64ffda]/30 dark:shadow-[#64ffda]/10">
         <h2 className="text-2xl font-semibold mb-4 text-center text-gray-900 dark:text-white">Opšte Informacije</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            {/* Address */}
            <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0 text-blue-600 dark:text-[#64ffda]" />
                <div>
                <p className="font-semibold text-gray-800 dark:text-white">Adresa:</p>
                <p className="text-gray-600 dark:text-gray-300">Međunarodni aerodrom Tuzla<br/>Gornje Dubrave b.b.<br/>75270 Živinice<br/>Bosna i Hercegovina</p>
                </div>
            </div>
            {/* Main Contacts */}
            <div className="space-y-2">
                <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 flex-shrink-0 text-blue-600 dark:text-[#64ffda]" />
                    <div>
                        <p className="font-semibold text-gray-800 dark:text-white">Telefon:</p>
                        <p className="text-gray-600 dark:text-gray-300">+387 35 302 400</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Printer className="h-5 w-5 flex-shrink-0 text-blue-600 dark:text-[#64ffda]" /> {/* Using Printer for Fax */}
                    <div>
                        <p className="font-semibold text-gray-800 dark:text-white">Fax:</p>
                        <p className="text-gray-600 dark:text-gray-300">+387 35 745 750</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 flex-shrink-0 text-blue-600 dark:text-[#64ffda]" />
                    <div>
                        <p className="font-semibold text-gray-800 dark:text-white">Email:</p>
                        <a href="mailto:info@tuzla-airport.ba" className="text-blue-600 dark:text-[#64ffda] hover:underline">info@tuzla-airport.ba</a>
                    </div>
                </div>
            </div>
         </div>
      </section>

      {/* Department Contacts Grid */}
      <section className="max-w-6xl mx-auto animate-fade-in-delay-2">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          Kontakti po Službama
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ContactCard title="Šalter za avio karte" icon={Ticket}>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-blue-500 dark:text-[#64ffda]/80 flex-shrink-0" />
              <span>+387 35 277 677</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-blue-500 dark:text-[#64ffda]/80 flex-shrink-0" />
              <a href="mailto:airtours@tuzla-airport.ba" className="text-blue-600 dark:text-[#64ffda] hover:underline break-all">airtours@tuzla-airport.ba</a>
            </div>
          </ContactCard>

          <ContactCard title="Šalter za informacije" icon={Info}>
             <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-blue-500 dark:text-[#64ffda]/80 flex-shrink-0" />
              <span>+387 35 302 400</span>
            </div>
             <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-blue-500 dark:text-[#64ffda]/80 flex-shrink-0" />
              <a href="mailto:info@tuzla-airport.ba" className="text-blue-600 dark:text-[#64ffda] hover:underline break-all">info@tuzla-airport.ba</a>
            </div>
          </ContactCard>

          <ContactCard title="Šalter za izgubljeni/nađeni prtljag" icon={Luggage}>
             <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-blue-500 dark:text-[#64ffda]/80 flex-shrink-0" />
              <span>+387 35 745 551</span>
            </div>
             <div className="flex items-center gap-2">
              <Printer className="h-4 w-4 text-blue-500 dark:text-[#64ffda]/80 flex-shrink-0" />
              <span>Fax: +387 35 745 750</span>
            </div>
             <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-blue-500 dark:text-[#64ffda]/80 flex-shrink-0" />
              <a href="mailto:lostandfound@tuzla-airport.ba" className="text-blue-600 dark:text-[#64ffda] hover:underline break-all">lostandfound@tuzla-airport.ba</a>
            </div>
          </ContactCard>

          <ContactCard title="Ured direktora" icon={Building}>
             <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-blue-500 dark:text-[#64ffda]/80 flex-shrink-0" />
              <span>+387 35 745 610</span>
            </div>
             <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-blue-500 dark:text-[#64ffda]/80 flex-shrink-0" />
              <a href="mailto:office@tuzla-airport.ba" className="text-blue-600 dark:text-[#64ffda] hover:underline break-all">office@tuzla-airport.ba</a>
            </div>
          </ContactCard>

          <ContactCard title="Šef službe prihvata i otpreme" icon={User}>
             <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-blue-500 dark:text-[#64ffda]/80 flex-shrink-0" />
              <span>+387 61 201 564 (pon-pet 08:00 – 16:00)</span>
            </div>
             <div className="flex items-center gap-2">
              <Printer className="h-4 w-4 text-blue-500 dark:text-[#64ffda]/80 flex-shrink-0" />
              <span>Fax: +387 35 745 750</span>
            </div>
             <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-blue-500 dark:text-[#64ffda]/80 flex-shrink-0" />
              <a href="mailto:aldijana.zubcevic@tuzla-airport.ba" className="text-blue-600 dark:text-[#64ffda] hover:underline break-all">aldijana.zubcevic@tuzla-airport.ba</a>
            </div>
          </ContactCard>

          <ContactCard title="Rukovodilac sektora saobraćaja" icon={Briefcase}>
             <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-blue-500 dark:text-[#64ffda]/80 flex-shrink-0" />
              <span>+387 35 365 117</span>
            </div>
             <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-blue-500 dark:text-[#64ffda]/80 flex-shrink-0" />
              <a href="mailto:edina.sisic@tuzla-airport.ba" className="text-blue-600 dark:text-[#64ffda] hover:underline break-all">edina.sisic@tuzla-airport.ba</a>
            </div>
             <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-blue-500 dark:text-[#64ffda]/80 flex-shrink-0" />
              <a href="mailto:opsmanagr@bih.net.ba" className="text-blue-600 dark:text-[#64ffda] hover:underline break-all">opsmanagr@bih.net.ba</a>
            </div>
          </ContactCard>

           <ContactCard title="Rukovodilac sektora finansija, pravnih, kadrovskih i opštih poslova" icon={Calculator}>
             <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-blue-500 dark:text-[#64ffda]/80 flex-shrink-0" />
              <span>+387 35 365 127</span>
            </div>
             <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-blue-500 dark:text-[#64ffda]/80 flex-shrink-0" />
              <a href="mailto:narcisa.arapcic@tuzla-airport.ba" className="text-blue-600 dark:text-[#64ffda] hover:underline break-all">narcisa.arapcic@tuzla-airport.ba</a>
            </div>
          </ContactCard>

           <ContactCard title="Služba za marketing" icon={Megaphone}>
             <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-blue-500 dark:text-[#64ffda]/80 flex-shrink-0" />
              <span>+387 35 365 120</span>
            </div>
             <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-blue-500 dark:text-[#64ffda]/80 flex-shrink-0" />
              <a href="mailto:mirela.vilic@tuzla-airport.ba" className="text-blue-600 dark:text-[#64ffda] hover:underline break-all">mirela.vilic@tuzla-airport.ba</a>
            </div>
             <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-blue-500 dark:text-[#64ffda]/80 flex-shrink-0" />
              <a href="mailto:iris.piric@tuzla-airport.ba" className="text-blue-600 dark:text-[#64ffda] hover:underline break-all">iris.piric@tuzla-airport.ba</a>
            </div>
          </ContactCard>

          {/* Add other contacts similarly */}

        </div>
      </section>

      {/* Contact Form Section */}
      <section className="max-w-4xl mx-auto p-6 md:p-8 rounded-[15px] shadow-xl animate-fade-in-delay-3
        bg-white/70 backdrop-blur-lg border border-gray-200/50
        dark:bg-[#0a192f]/70 dark:border-[#64ffda]/30 dark:shadow-[#64ffda]/10">
        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-900 dark:text-white">Pošaljite Upit Online</h2>
        <p className="text-center text-gray-700 dark:text-gray-300 mb-6 text-sm">Možete nas kontaktirati i preko priložene forme.</p>
        <form className="space-y-4 max-w-lg mx-auto">
          <div>
            <Label htmlFor="contact-name" className="text-sm font-medium text-gray-800 dark:text-gray-300">Ime i Prezime</Label>
            <Input id="contact-name" name="name" type="text" required className="mt-1 bg-white/50 dark:bg-black/20 border-gray-300 dark:border-gray-600" />
          </div>
          <div>
            <Label htmlFor="contact-email" className="text-sm font-medium text-gray-800 dark:text-gray-300">Email Adresa</Label>
            <Input id="contact-email" name="email" type="email" required className="mt-1 bg-white/50 dark:bg-black/20 border-gray-300 dark:border-gray-600" />
          </div>
          <div>
            <Label htmlFor="contact-subject" className="text-sm font-medium text-gray-800 dark:text-gray-300">Predmet</Label>
            <Input id="contact-subject" name="subject" type="text" required className="mt-1 bg-white/50 dark:bg-black/20 border-gray-300 dark:border-gray-600" />
          </div>
          <div>
            <Label htmlFor="contact-message" className="text-sm font-medium text-gray-800 dark:text-gray-300">Poruka</Label>
            <Textarea id="contact-message" name="message" rows={5} required className="mt-1 bg-white/50 dark:bg-black/20 border-gray-300 dark:border-gray-600" />
          </div>
          <Button type="submit" variant="outline" className="w-full bg-transparent border-blue-600 text-blue-600 hover:bg-blue-600/10 dark:border-[#64ffda] dark:text-[#64ffda] dark:hover:bg-[#64ffda]/10 dark:hover:text-[#64ffda]">
            Pošalji Poruku
          </Button>
        </form>
      </section>

    </div>
  );
}

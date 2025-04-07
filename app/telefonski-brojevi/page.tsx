import React from 'react';
import { Phone, Mail, Printer, Building, User, Briefcase, Shield, Calculator, Megaphone, Info } from 'lucide-react'; // Replaced Fax with Printer

// Define Luggage icon component at the top
const Luggage = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="6" y="8" width="12" height="10" rx="2" ry="2"></rect>
    <path d="M8 8V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3"></path>
    <path d="M10 18v-2"></path>
    <path d="M14 18v-2"></path>
  </svg>
);

const contacts = [
  {
    title: 'Šalter za informacije i prodaju avio karata',
    icon: Info,
    phones: ['+387 35 302 400', '+387 35 277 677'],
    email: 'info@tuzla-airport.ba',
  },
  {
    title: 'Šalter za izgubljeni / nađeni prtljag',
    icon: Luggage, // Assuming Luggage icon is imported or available
    phones: ['+387 35 745 551'],
    fax: '+387 35 745 750',
    email: 'lostandfound@tuzla-airport.ba',
  },
  {
    title: 'Ured direktora',
    icon: Building,
    phones: ['+387 35 745 610'],
    email: 'office@tuzla-airport.ba',
  },
  {
    title: 'Šef operativnih poslova',
    icon: User,
    name: 'Asim Jukanović', // Added name based on email
    fax: '+387 35 745 750',
    email: 'asim.jukanovic@tuzla-airport.ba',
  },
  {
    title: 'Šef službe prihvata i otpreme putnika i prtljaga',
    icon: User,
    name: 'Aldijana Zubčević', // Added name based on email
    phones: ['+387 61 201 564 (pon-pet 08:00 – 16:00)'],
    fax: '+387 35 745 750',
    email: 'aldijana.zubcevic@tuzla-airport.ba',
  },
  {
    title: 'Rukovodilac sektora saobraćaja',
    icon: Briefcase,
    name: 'Edina Šišić', // Added name based on email
    phones: ['+387 35 365 117'],
    emails: ['edina.sisic@tuzla-airport.ba', 'opsmanagr@bih.net.ba'], // Multiple emails
  },
  {
    title: 'Rukovodilac sektora tehnike i elektro održavanja',
    icon: Briefcase, // Using Briefcase as generic sector icon
    name: 'Mensud Brčaninović', // Added name based on email
    email: 'mensud.brcaninovic@tuzla-airport.ba',
  },
  {
    title: 'Rukovodilac sektora sigurnosti i zaštite',
    icon: Shield,
    name: 'Mehmedalija Selimović', // Added name based on email
    phones: ['+387 35 745 550'],
    fax: '+387 35 745 611',
    email: 'mehmedalija.selimovic@tuzla-airport.ba',
  },
  {
    title: 'Šef računovodstva',
    icon: Calculator,
    name: 'Bahra Hrustemović', // Added name based on email
    phones: ['+387 35 365 127'],
    email: 'bahra.hrustemovic@tuzla-airport.ba',
  },
  {
    title: 'Služba za marketing',
    icon: Megaphone,
    phones: ['+387 35 365 120'],
    emails: ['mirela.vilic@tuzla-airport.ba', 'iris.piric@tuzla-airport.ba'], // Multiple emails
  },
];


export default function ImportantContactsPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-16 relative overflow-hidden rounded-[15px]">

      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-20 rounded-[15px]">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-transparent to-blue-100 dark:from-[#0a192f] dark:via-transparent dark:to-[#172a45]" />
      </div>

      {/* Title Section */}
      <section className="text-center animate-fade-in">
        <Phone className="h-16 w-16 mx-auto text-blue-600 dark:text-[#64ffda] mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          Važniji Telefonski Brojevi i Kontakti
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          Ovdje možete pronaći kontakt informacije za različite službe i odjele na Međunarodnom aerodromu Tuzla.
        </p>
      </section>

      {/* Contacts Grid Section */}
      <section className="animate-fade-in-delay-1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contacts.map((contact) => (
            <div
              key={contact.title}
              className="rounded-[15px] p-6 shadow-xl flex flex-col transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1
              bg-white/70 backdrop-blur-lg border border-gray-200/50
              dark:bg-[#172a45]/60 dark:border-[#64ffda]/30 dark:shadow-[#64ffda]/10"
            >
              <div className="flex items-center gap-3 mb-3">
                <contact.icon className="h-6 w-6 text-blue-600 dark:text-[#64ffda] flex-shrink-0" />
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{contact.title}</h2>
              </div>
              {contact.name && (
                 <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 ml-9">{contact.name}</p>
              )}
              <div className="space-y-2 text-sm mt-auto pt-3 border-t border-gray-300 dark:border-gray-600/50">
                {contact.phones && contact.phones.map((phone, index) => (
                  <div key={`phone-${index}`} className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-blue-500 dark:text-[#64ffda]/80 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{phone}</span>
                  </div>
                ))}
                {contact.fax && (
                  <div className="flex items-center gap-2">
                    <Printer className="h-4 w-4 text-blue-500 dark:text-[#64ffda]/80 flex-shrink-0" /> {/* Changed Fax to Printer */}
                    <span className="text-gray-700 dark:text-gray-300">FAX: {contact.fax}</span>
                  </div>
                )}
                {contact.email && (
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-blue-500 dark:text-[#64ffda]/80 flex-shrink-0" />
                    <a href={`mailto:${contact.email}`} className="text-blue-600 dark:text-[#64ffda] hover:underline break-all">
                      {contact.email}
                    </a>
                  </div>
                )}
                 {contact.emails && contact.emails.map((email, index) => (
                   <div key={`email-${index}`} className="flex items-center gap-2">
                     <Mail className="h-4 w-4 text-blue-500 dark:text-[#64ffda]/80 flex-shrink-0" />
                     <a href={`mailto:${email}`} className="text-blue-600 dark:text-[#64ffda] hover:underline break-all">
                       {email}
                     </a>
                   </div>
                 ))}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

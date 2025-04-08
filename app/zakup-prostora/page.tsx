import React from 'react';
import { FileText } from 'lucide-react';

export const revalidate = 0;

export default function ZakupProstoraPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-16 relative overflow-hidden rounded-[15px]">

      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-20 rounded-[15px]">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-transparent to-blue-100 dark:from-[#0a192f] dark:via-transparent dark:to-[#172a45]" />
      </div>

      {/* Title Section */}
      <section className="text-center animate-fade-in">
        <FileText className="h-16 w-16 mx-auto text-blue-600 dark:text-[#64ffda] mb-4" />
        <h1 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
          Instrukcija o zakupu reklamnih i poslovnih prostora MAT
        </h1>
      </section>

      {/* Content Section */}
      <section className="max-w-3xl mx-auto animate-fade-in-delay-1">
        <div className="p-8 rounded-[15px] shadow-xl bg-white/70 backdrop-blur-lg border border-gray-200/50 dark:bg-[#172a45]/60 dark:border-[#64ffda]/30 dark:shadow-[#64ffda]/10 transition-all duration-300 hover:shadow-lg space-y-6 text-center">
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Instrukcija o zakupu reklamnih i poslovnih prostora MAT
          </p>

          <p className="text-md text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Ovdje možete pregledati i preuzeti zvanični dokument u PDF formatu.
          </p>

          <a
            href="/files/Instrukcija o zakupu poslovnog prostora.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow transition-all duration-300 transform hover:scale-105 dark:bg-[#64ffda] dark:text-gray-900 dark:hover:bg-[#52e0c4]"
          >
            Preuzmi PDF fajl
          </a>
        </div>
      </section>

    </div>
  );
}

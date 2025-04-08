import React from 'react';
import Link from 'next/link';
import { Archive } from 'lucide-react';
import { getPublicCalls } from '@/lib/sanity';

export default async function ArchivedPublicCallsPage() {
  const articles = await getPublicCalls('javni-oglasi-arhivirani');

  return (
    <div className="container mx-auto px-4 py-12 space-y-16 relative overflow-hidden rounded-[15px]">

      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-20 rounded-[15px]">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-transparent to-blue-100 dark:from-[#0a192f] dark:via-transparent dark:to-[#172a45]" />
      </div>

      {/* Title Section */}
      <section className="text-center animate-fade-in">
        <Archive className="h-16 w-16 mx-auto text-blue-600 dark:text-[#64ffda] mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          Javni Pozivi - Arhiva
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          Arhiva prethodnih javnih poziva i tendera Međunarodnog aerodroma Tuzla.
        </p>
      </section>

      {/* Articles List Section */}
      <section className="max-w-4xl mx-auto space-y-8 animate-fade-in-delay-1">
        {articles.length > 0 ? (
          articles.map((article: any) => (
            <div key={article.id} className="p-6 rounded-[15px] shadow-xl bg-white/70 backdrop-blur-lg border border-gray-200/50 dark:bg-[#172a45]/60 dark:border-[#64ffda]/30 dark:shadow-[#64ffda]/10 opacity-80 transition-all duration-300 hover:shadow-lg hover:opacity-90"> {/* Added opacity and hover */}
              <h2 className="text-2xl font-semibold mb-2 text-gray-700 dark:text-gray-400"> {/* Muted title */}
                 {/* Link to article page (needs to be created later) */}
                 {/* <Link href={`/javni-pozivi/${article.slug}`} className="hover:text-blue-600 dark:hover:text-[#64ffda] transition-colors"> */}
                   {article.title}
                 {/* </Link> */}
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-500 mb-4"> {/* Muted date */}
                Objavljeno: {new Date(article.publishedAt).toLocaleDateString('bs-BA')} (Arhivirano)
              </p>
              {/* Add excerpt or image preview here later */}
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Ovdje će ići kratki opis ili sadržaj arhiviranog javnog poziva...
              </p>
               {/* <Link href={`/javni-pozivi/${article.slug}`} className="text-blue-600 dark:text-[#64ffda] hover:underline text-sm mt-2 inline-block font-medium">
                 Detaljnije...
               </Link> */}
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400">Nema arhiviranih javnih poziva.</p>
        )}
      </section>

    </div>
  );
}

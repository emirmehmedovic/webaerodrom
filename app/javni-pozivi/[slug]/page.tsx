export const revalidate = 0;

import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Calendar, Megaphone, Archive } from 'lucide-react';
import sanityClient from '@/lib/sanity'; // Import Sanity client
import { PortableText } from '@portabletext/react'; // Import PortableText

interface PublicCall {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  category: string; // 'javni-oglasi-aktivni' or 'javni-oglasi-arhivirani'
  mainImage?: {
    asset: {
      url: string;
    };
    alt?: string;
  };
  body: any[]; // Portable Text blocks
}

// Generate static paths for all public calls from Sanity
export async function generateStaticParams() {
  const slugs: { slug: string }[] = await sanityClient.fetch(
    `*[_type == "novost" && (category == "javni-oglasi-aktivni" || category == "javni-oglasi-arhivirani") && defined(slug.current)]{ "slug": slug.current }`
  );
  return slugs.map((s) => ({ slug: s.slug }));
}

// Fetch data for a specific public call from Sanity
async function getData(slug: string): Promise<PublicCall | null> {
  const post = await sanityClient.fetch(
    `*[_type == "novost" && slug.current == $slug && (category == "javni-oglasi-aktivni" || category == "javni-oglasi-arhivirani")][0]{
      _id,
      title,
      slug,
      publishedAt,
      category,
      mainImage{
        asset->{url},
        alt
      },
      body
    }`,
    { slug }
  );
  return post;
}

export default async function JavniPozivPage({ params }: { params: { slug: string } }) {
  const post = await getData(params.slug);

  if (!post) {
    notFound(); // Return 404 if post not found
  }

  const isArchived = post.category === 'javni-oglasi-arhivirani';

  return (
    <div className="container mx-auto px-4 py-12 space-y-12 relative overflow-hidden rounded-[15px]">

       {/* Subtle Background Gradient */}
      <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-20 rounded-[15px]">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-transparent to-blue-100 dark:from-[#0a192f] dark:via-transparent dark:to-[#172a45]" />
      </div>

      <article className={`max-w-3xl mx-auto p-6 md:p-8 rounded-[15px] shadow-xl
        bg-white/80 backdrop-blur-lg border border-gray-200/50
        dark:bg-[#172a45]/70 dark:border-[#64ffda]/30 dark:shadow-[#64ffda]/10
        ${isArchived ? 'opacity-80' : ''}`}> {/* Add opacity if archived */}

        {/* Header */}
        <header className="mb-8 border-b border-gray-300 dark:border-gray-600/50 pb-6">
           {isArchived && (
             <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
               <Archive className="h-4 w-4" />
               <span>Ovaj poziv je arhiviran.</span>
             </div>
           )}
          <h1 className={`text-3xl md:text-4xl font-bold mb-3 ${isArchived ? 'text-gray-600 dark:text-gray-400' : 'text-gray-900 dark:text-white'}`}>
            {post.title}
          </h1>
          <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
            <Calendar className="h-4 w-4" />
            <span>Objavljeno: {new Date(post.publishedAt).toLocaleDateString('bs-BA')}</span>
             <span className="mx-1">|</span>
             {isArchived ? (
                 <span className="flex items-center gap-1"><Archive className="h-4 w-4" /> Arhiviran</span>
             ) : (
                 <span className="flex items-center gap-1 text-green-600 dark:text-green-400"><Megaphone className="h-4 w-4" /> Aktuelan</span>
             )}
          </div>
        </header>

        {/* Optional Main Image */}
        {post.mainImage?.asset?.url && (
          <div className="mb-8 relative h-64 md:h-80 rounded-lg overflow-hidden shadow-md">
            <Image
              src={post.mainImage.asset.url}
              alt={post.mainImage.alt || post.title}
              fill
              style={{ objectFit: 'cover' }}
              priority // Prioritize loading the main image
            />
          </div>
        )}

        {/* Content */}
        {post.body && post.body.length > 0 && (
           <div className={`prose prose-sm md:prose-base dark:prose-invert max-w-none
                       prose-headings:text-gray-800 dark:prose-headings:text-white
                       prose-p:text-gray-700 dark:prose-p:text-gray-300
                       prose-a:text-blue-600 dark:prose-a:text-[#64ffda] hover:prose-a:underline
                       prose-strong:text-gray-800 dark:prose-strong:text-white
                       ${isArchived ? 'prose-p:text-gray-600 dark:prose-p:text-gray-400' : ''}`}>
             <PortableText value={post.body} />
           </div>
         )}
      </article>
    </div>
  );
}

import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Calendar } from 'lucide-react';
import { PortableText } from '@portabletext/react';
import sanityClient from '@/lib/sanity';

interface Article {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  mainImage?: {
    asset: {
      url: string;
    };
    alt?: string;
  };
  body: any[]; // Portable Text blocks
}

export async function generateStaticParams() {
  const slugs: { slug: { current: string } }[] = await sanityClient.fetch(
    `*[_type == "novost" && defined(slug.current)]{ slug }`
  );
  return slugs.map((s) => ({ slug: s.slug.current }));
}

async function getData(slug: string): Promise<Article | null> {
  const article = await sanityClient.fetch(
    `*[_type == "novost" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      publishedAt,
      mainImage{
        asset->{url},
        alt
      },
      body
    }`,
    { slug }
  );
  return article;
}

export default async function NovostPage({ params }: { params: { slug: string } }) {
  const post = await getData(params.slug);

  if (!post) {
    notFound(); // Return 404 if post not found
  }

  return (
    <div className="container mx-auto px-4 py-12 space-y-12 relative overflow-hidden rounded-[15px]">

       {/* Subtle Background Gradient - Temporarily Commented Out for Testing */}
       {/* <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-20 rounded-[15px]">
         <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-transparent to-blue-100 dark:from-[#0a192f] dark:via-transparent dark:to-[#172a45]" />
       </div> */}

      <article className="max-w-3xl mx-auto p-6 md:p-8 rounded-[15px] shadow-xl
        bg-white border border-gray-200/50
        dark:bg-[#172a45] dark:border-[#64ffda]/30 dark:shadow-[#64ffda]/10">

        {/* Header */}
        <header className="novost-header mb-8 border-b border-transparent pb-6 bg-transparent">
          <h1 className="novost-title text-3xl md:text-4xl font-bold mb-3 text-gray-900 dark:text-white p-4 rounded-[10px] bg-transparent">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
            <Calendar className="h-4 w-4" />
            <span>Objavljeno: {new Date(post.publishedAt).toLocaleDateString('bs-BA')}</span>
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
              priority
            />
          </div>
        )}

        {/* Content */}
        {post.body && post.body.length > 0 && (
          <div className="prose prose-sm sm:prose-base md:prose-lg lg:prose-xl dark:prose-invert max-w-none break-words">
            <PortableText value={post.body} />
          </div>
        )}
      </article>
    </div>
  );
}

import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Calendar, Newspaper } from 'lucide-react';
import { getPostData, getAllPostSlugs, PostData } from '@/lib/posts';

// Generate static paths for all news posts at build time
export async function generateStaticParams() {
  const paths = getAllPostSlugs('novosti'); // Get slugs from the 'novosti' directory
  return paths;
}

// Fetch data for a specific post
async function getData(slug: string): Promise<PostData | null> {
  const postData = await getPostData('novosti', slug); // Fetch from 'novosti' directory
  return postData;
}

export default async function NovostPage({ params }: { params: { slug: string } }) {
  const post = await getData(params.slug);

  if (!post) {
    notFound(); // Return 404 if post not found
  }

  return (
    <div className="container mx-auto px-4 py-12 space-y-12 relative overflow-hidden rounded-[15px]">

       {/* Subtle Background Gradient */}
      <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-20 rounded-[15px]">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-transparent to-blue-100 dark:from-[#0a192f] dark:via-transparent dark:to-[#172a45]" />
      </div>

      <article className="max-w-3xl mx-auto p-6 md:p-8 rounded-[15px] shadow-xl
        bg-white/80 backdrop-blur-lg border border-gray-200/50
        dark:bg-[#172a45]/70 dark:border-[#64ffda]/30 dark:shadow-[#64ffda]/10">

        {/* Header */}
        <header className="mb-8 border-b border-gray-300 dark:border-gray-600/50 pb-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900 dark:text-white">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
            <Calendar className="h-4 w-4" />
            <span>Objavljeno: {new Date(post.publishedAt).toLocaleDateString('bs-BA')}</span>
          </div>
        </header>

        {/* Optional Main Image */}
        {post.mainImage && (
          <div className="mb-8 relative h-64 md:h-80 rounded-lg overflow-hidden shadow-md">
            <Image
              src={post.mainImage} // Assuming this is the direct URL or path from frontmatter
              alt={post.alt || post.title} // Use alt text from frontmatter or fallback to title
              fill
              style={{ objectFit: 'cover' }}
              priority // Prioritize loading the main image
            />
          </div>
        )}

        {/* Content */}
        {post.contentHtml && (
          <div
            className="prose prose-sm md:prose-base dark:prose-invert max-w-none 
                       prose-headings:text-gray-800 dark:prose-headings:text-white 
                       prose-p:text-gray-700 dark:prose-p:text-gray-300
                       prose-a:text-blue-600 dark:prose-a:text-[#64ffda] hover:prose-a:underline
                       prose-strong:text-gray-800 dark:prose-strong:text-white"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        )}
      </article>
    </div>
  );
}

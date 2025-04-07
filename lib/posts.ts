import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// Define the base directory where content files are stored
const contentDirectory = path.join(process.cwd(), '_content');

// Define the structure of the post data including frontmatter
export interface PostData {
  id: string; // The filename without .md
  slug: string;
  title: string;
  publishedAt: string; // Keep as string initially
  mainImage?: string;
  category?: string; // 'novosti' or 'javni-poziv'
  status?: 'aktuelni' | 'arhiva'; // Only for 'javni-poziv'
  contentHtml?: string; // Processed HTML content
  [key: string]: any; // Allow other frontmatter fields
}

// Function to process markdown content to HTML
async function processMarkdown(content: string): Promise<string> {
  const processedContent = await remark().use(html).process(content);
  return processedContent.toString();
}

// Function to get sorted posts data from a specific subdirectory (e.g., 'novosti', 'javni-pozivi')
export async function getSortedPostsData(subDirectory: 'novosti' | 'javni-pozivi'): Promise<PostData[]> {
  const postsDir = path.join(contentDirectory, subDirectory);

  // Check if directory exists
  if (!fs.existsSync(postsDir)) {
    console.warn(`Directory not found: ${postsDir}`);
    return [];
  }

  const fileNames = fs.readdirSync(postsDir).filter(fileName => fileName.endsWith('.md') || fileName.endsWith('.mdx'));

  const allPostsData = await Promise.all(fileNames.map(async (fileName) => {
    // Remove ".md" or ".mdx" from file name to get id/slug
    const id = fileName.replace(/\.(md|mdx)$/, '');
    const slug = id; // Use filename as slug for simplicity

    // Read markdown file as string
    const fullPath = path.join(postsDir, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      slug,
      ...(matterResult.data as { title: string; publishedAt: string; mainImage?: string; category?: string; status?: 'aktuelni' | 'arhiva' }), // Type assertion for frontmatter
    } as PostData; // Assert the final object shape
  }));

  // Sort posts by date (newest first)
  return allPostsData.sort((a, b) => {
    if (a.publishedAt < b.publishedAt) {
      return 1;
    } else {
      return -1;
    }
  });
}

// Function to get data for a single post by slug/id from a specific subdirectory
export async function getPostData(subDirectory: 'novosti' | 'javni-pozivi', id: string): Promise<PostData | null> {
   const postsDir = path.join(contentDirectory, subDirectory);
   const possibleExtensions = ['.md', '.mdx'];
   let fullPath = '';
   let fileContents = '';

   // Find the file with either .md or .mdx extension
   for (const ext of possibleExtensions) {
       const testPath = path.join(postsDir, `${id}${ext}`);
       if (fs.existsSync(testPath)) {
           fullPath = testPath;
           fileContents = fs.readFileSync(fullPath, 'utf8');
           break;
       }
   }

   if (!fileContents) {
       // Handle case where file doesn't exist
       console.error(`Post not found for id: ${id} in ${subDirectory}`);
       return null;
   }

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const contentHtml = await processMarkdown(matterResult.content);

  // Combine the data with the id and contentHtml
  return {
    id,
    slug: id, // Use filename as slug
    contentHtml,
    ...(matterResult.data as { title: string; publishedAt: string; mainImage?: string; category?: string; status?: 'aktuelni' | 'arhiva' }),
  } as PostData;
}

// Function to get all possible slugs for dynamic routes
export function getAllPostSlugs(subDirectory: 'novosti' | 'javni-pozivi'): { params: { slug: string } }[] {
  const postsDir = path.join(contentDirectory, subDirectory);

  if (!fs.existsSync(postsDir)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDir).filter(fileName => fileName.endsWith('.md') || fileName.endsWith('.mdx'));

  return fileNames.map(fileName => {
    return {
      params: {
        slug: fileName.replace(/\.(md|mdx)$/, '')
      }
    };
  });
}

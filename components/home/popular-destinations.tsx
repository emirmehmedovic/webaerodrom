'use client';

import Image from 'next/image';
import { useState } from 'react'; // Removed useEffect
import { motion } from 'framer-motion'; // Import motion
// Removed Card and CardContent import
import { cn } from '@/lib/utils';
import Link from 'next/link'; // Import Link for buttons
import { Button } from '@/components/ui/button'; // Import Button component

interface Airline {
  name: string;
  link: string;
  style: string; // Tailwind classes for button styling
}

interface Destination {
  name: string;
  image: string;
  text: string;
  airlines: Airline[];
}

const destinations: Destination[] = [
  {
    name: 'Istanbul',
    image: '/images/istanbul.jpg',
    text: 'Iz Tuzle za Istanbul',
    airlines: [
      { name: 'Pegasus', link: 'https://www.flypgs.com', style: 'bg-yellow-400 hover:bg-yellow-500 text-black' },
      { name: 'A Jet', link: 'https://www.ajet.com', style: 'bg-blue-600 hover:bg-blue-700 text-white' },
    ],
  },
  {
    name: 'Beč',
    image: '/images/vienna.jpg',
    text: 'Iz Tuzle za Beč',
    airlines: [
      { name: 'Wizz Air', link: 'https://wizzair.com', style: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white' },
    ],
  },
  {
    name: 'Memmingen',
    image: '/images/memmingen.jpg',
    text: 'Iz Tuzle za Memmingen',
    airlines: [
      { name: 'Wizz Air', link: 'https://wizzair.com', style: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white' },
    ],
  },
  {
    name: 'Basel',
    image: '/images/basel.jpg',
    text: 'Iz Tuzle za Basel',
    airlines: [
      { name: 'Wizz Air', link: 'https://wizzair.com', style: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white' },
    ],
  },
  {
    name: 'Dortmund',
    image: '/images/dortmund.jpg',
    text: 'Iz Tuzle za Dortmund',
    airlines: [
      { name: 'Wizz Air', link: 'https://wizzair.com', style: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white' },
    ],
  },
];


// Animation variants for Framer Motion
const sentenceVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.3, // Start after a short delay
      staggerChildren: 0.08, // Time between each word appearing
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 10 }, // Start slightly below and invisible
  visible: {
    opacity: 1,
    y: 0, // Move to original position
    transition: {
      type: 'spring', // Use spring physics for a smoother feel
      stiffness: 100,
      damping: 12,
    },
  },
};

export default function PopularDestinations() {
  const [selectedDestination, setSelectedDestination] = useState<Destination>(
    destinations[0]
  );
  // No longer need displayedText or textKey with framer-motion's key approach

  return (
    <section className="container mx-auto px-4 py-12">
<h2 className="mb-8 text-center text-3xl font-bold text-blue-900 dark:text-white">
  Destinacije
</h2>
      {/* Increased height again from h-[600px] to h-[700px] */}
      <div className="relative h-[700px] w-full overflow-hidden rounded-[10px]">
        {/* Background Image */}
        <Image
          src={selectedDestination.image}
          alt={`Slika destinacije ${selectedDestination.name}`}
          layout="fill"
          objectFit="cover"
          className="transition-opacity duration-500 ease-in-out blur-sm" // Added blur-sm
          priority // Load the default image faster
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div> {/* Slightly darker overlay */}

        {/* Centered Text and Buttons */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 z-10">
           {/* Animated Text using Framer Motion */}
           {/* Use selectedDestination.name as key to force re-animation on change */}
           <motion.h3
             key={selectedDestination.name} // Re-trigger animation when destination changes
             className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg min-h-[3em]" // Added min-h to prevent layout shift
             variants={sentenceVariants}
             initial="hidden"
             animate="visible"
           >
             {selectedDestination.text.split(' ').map((word, index) => (
               <motion.span
                 key={`${word}-${index}`}
                 variants={wordVariants}
                 style={{ display: 'inline-block', marginRight: '0.25em' }} // Ensure words stay inline but animate individually
               >
                 {word}
               </motion.span>
             ))}
           </motion.h3>
           <div className="flex flex-wrap justify-center gap-4">
             {selectedDestination.airlines.map((airline) => (
               <Button key={airline.name} className={cn("font-semibold", airline.style)} asChild>
                 <Link href={airline.link} target="_blank" rel="noopener noreferrer">
                   {airline.name}
                 </Link>
               </Button>
             ))}
           </div>
         </div>

        {/* Destination Cards - Responsive Layout */}
        {/* Mobile: Horizontal scroll, wider cards | Desktop: Centered flex row */}
        {/* Removed px-4 from outer div for mobile */}
        <div className="absolute bottom-5 left-0 right-0 z-10 md:left-1/2 md:right-auto md:w-full md:max-w-4xl md:-translate-x-1/2 md:transform">
          {/* Added px-4, scroll snapping to inner div */}
          <div className="flex space-x-4 overflow-x-auto px-4 pb-4 snap-x snap-mandatory md:justify-center md:overflow-x-visible md:px-0 md:pb-0 md:snap-none">
            {destinations.map((dest) => (
              // Replaced Card with div
              <div
                key={dest.name}
                // Mobile: Wider card, shrink-0, snap-center | Desktop: w-1/5
                className={cn(
                  'w-3/5 flex-shrink-0 snap-center cursor-pointer overflow-hidden rounded-[10px] transition-all duration-300 hover:scale-105 bg-transparent md:w-1/5 md:flex-shrink md:snap-align-none', // Added snap-center for mobile
                  selectedDestination.name === dest.name ? 'scale-105' : '' // Keep scale effect on select
                )}
                onClick={() => setSelectedDestination(dest)}
              > {/* Fixed closing bracket position */}
              {/* Remove rounding and overflow from inner div */}
              <div className="relative h-32 p-0 bg-transparent"> {/* Removed rounded-[10px] and overflow-hidden */}
                <Image
                  src={dest.image}
                  alt={dest.name}
                  layout="fill"
                  objectFit="cover"
                  className="" // Removed rounded-[10px]
                />
                {/* Remove rounding from overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 p-2"> {/* Removed rounded-[10px] */}
                  <span className="text-center text-sm font-semibold text-white">
                    {dest.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div> {/* Closes the inner flex div */}
      </div> {/* Closes the absolute positioned div for cards */}
    </div> {/* Closes the relative h-[700px] div */}
  </section>
);
}

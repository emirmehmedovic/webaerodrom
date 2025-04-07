"use client";

import { useState } from "react";

const cities = [
  {
    name: "Vienna",
    thumb: "/images/vienna.jpg",
    background: "/images/vienna.jpg",
    ctaText: "Iz Tuzle u Beč s Wizzairom od 35€",
    ctaUrl: "https://wizzair.com",
  },
  {
    name: "Istanbul",
    thumb: "/images/istanbul.jpg",
    background: "/images/istanbul.jpg",
    ctaText: "Iz Tuzle za Istanbul Pegasus ili AJet Airlines od 39€",
    ctaUrl: "https://www.flypgs.com",
  },
  {
    name: "Basel",
    thumb: "/images/basel.jpg",
    background: "/images/basel.jpg",
    ctaText: "Iz Tuzle za Basel s Wizzairom od 29€",
    ctaUrl: "https://wizzair.com",
  },
  {
    name: "Memmingen",
    thumb: "/images/memmingen.jpg",
    background: "/images/memmingen.jpg",
    ctaText: "Iz Tuzle za Memmingen s Wizzairom od 25€",
    ctaUrl: "https://wizzair.com",
  },
  {
    name: "Dortmund",
    thumb: "/images/dortmund.jpg",
    background: "/images/dortmund.jpg",
    ctaText: "Iz Tuzle za Dortmund s Wizzairom od 30€",
    ctaUrl: "https://wizzair.com",
  },
];

export default function Destinations() {
  const [selected, setSelected] = useState(cities[0]);

  return (
    <div className="relative rounded-xl overflow-hidden h-[600px] md:h-[700px] flex flex-col justify-end p-4">
      <img
        src={selected.background}
        alt={selected.name}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30 md:bg-black/20 backdrop-blur-sm"></div>
      <div
        key={selected.name}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-500 ease-out opacity-100"
      >
        <div className="bg-black/50 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg text-center transform transition-all duration-500 ease-out opacity-100 scale-100">
          <a
            href={selected.ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white text-lg md:text-xl font-bold hover:scale-105 hover:text-blue-300 transition-transform duration-300"
          >
            {selected.ctaText}
          </a>
        </div>
      </div>
      <div className="relative z-10 flex space-x-4 overflow-x-auto scrollbar-hide p-2 snap-x snap-mandatory w-full md:w-fit md:mx-auto">
        {cities.map((city) => (
          <div
            key={city.name}
            onClick={() => setSelected(city)}
            className={`flex-shrink-0 w-40 md:w-48 snap-start cursor-pointer rounded-lg overflow-hidden border-2 shadow-md backdrop-blur-sm bg-black/30 ${
              selected.name === city.name
                ? "border-blue-500"
                : "border-transparent"
            }`}
          >
            <img
              src={city.thumb}
              alt={city.name}
              className="w-full h-24 md:h-28 object-cover"
            />
            <div className="text-center text-white text-xs md:text-sm lg:text-base font-semibold p-1 bg-black/50 whitespace-normal break-words">
              {city.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
'use client';

import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';

// --- Interfaces (iste kao prije) ---
interface ThemeColors {
    background: string;
    cardBg: string;
    cardBgHover: string;
    buttonPrimaryBg: string;
    buttonPrimaryBgHover: string;
    buttonSecondaryBg: string;
    buttonSecondaryBgHover: string;
    gradientClasses: string;
    textMain: string;
    textSubtle: string;
}

interface GridItemContentData {
    image?: string;
    alt?: string;
    title?: string;
    subtitle?: string;
    text?: string;
}

interface GridContent {
    mainImage: GridItemContentData;
    exploreCard: GridItemContentData;
    detailImage1: GridItemContentData; // Slika Puffin/Pločice
    cuisineCard: GridItemContentData;
    foodImage: GridItemContentData; // Slika Hrane
    atmosphereImage: GridItemContentData; // Slika Cabin/Bosfor
    experienceCard: GridItemContentData; // Kartica Unleash/Doživljaj
    detailImage2: GridItemContentData; // Slika Snowy/Kapali
    stayCard: GridItemContentData;
    discoverButton: GridItemContentData;
    prevButton: GridItemContentData;
    nextButton: GridItemContentData;
}

interface DestinationTheme {
    name: string;
    colors: ThemeColors;
    content: GridContent;
}


// --- Podaci za Teme (Isti kao prije - putanje slika su kakve ste ih unijeli) ---
const themesData: DestinationTheme[] = [
    {
        name: "Istanbul", // Slično Reykjavik stilu
        colors: { background: '#212121', cardBg: '#4a4a4a', cardBgHover: '#5a5a5a', buttonPrimaryBg: '#4a4a4a', buttonPrimaryBgHover: '#5a5a5a', buttonSecondaryBg: '#333333', buttonSecondaryBgHover: '#4a4a4a', gradientClasses: "bg-gradient-to-br from-stone-800 via-neutral-800 to-stone-900", textMain: '#ffffff', textSubtle: '#bdbdbd', },
        content: { mainImage: { image: "/images/Istanbul/main.jpg", alt: "Panorama Istanbula", title: "Istanbul", subtitle: "Grad na dva kontinenta" }, exploreCard: { title: "Istraži", text: "Historijski poluotok – Aja Sofija, Plava Džamija, Topkapi, Kapali čaršija." }, detailImage1: { image: "/images/Istanbul/detail1.jpg", alt:"Detalj pločica iz Istanbula" }, cuisineCard: { title: "Okusi", text: "Probajte bogate okuse Turske - od kebaba i meze do baklave i rahat lokuma." }, foodImage: { image: "/images/Istanbul/food.jpg", alt: "Turska hrana i čaj" }, atmosphereImage: { image: "/images/Istanbul/atmosphere.jpg", alt: "Pogled na Bosfor" }, experienceCard: { title: "Doživite čaroliju Istanbula.", text: "Otkrijte živopisne bazare, hiljadugodišnju historiju, impresivne džamije i energiju grada." }, detailImage2: { image: "/images/Istanbul/detail2.jpg", alt: "Unutrašnjost Kapali čaršije" }, stayCard: { title: "Boravak", text: "Odaberite šarmantne hotele u Sultanahmetu ili moderne apartmane u Beyoğlu." }, discoverButton: { title: "OTKRIJ VIŠE" }, prevButton: { title: "PRETHODNI" }, nextButton: { title: "SLJEDEĆI" }, }
    },
    {
        name: "Beč", // Slično Kyoto stilu
        colors: { background: '#281a25', cardBg: '#5e3b4f', cardBgHover: '#744a62', buttonPrimaryBg: '#5e3b4f', buttonPrimaryBgHover: '#744a62', buttonSecondaryBg: '#3f2b3a', buttonSecondaryBgHover: '#5e3b4f', gradientClasses: "bg-gradient-to-br from-red-950 via-rose-950 to-stone-900", textMain: '#fdf8f8', textSubtle: '#f5e1ed', },
        content: { mainImage: { image: "/images/Vienna/main.jpg", alt: "Palača Schönbrunn, Beč", title: "Beč", subtitle: "Carska Prijestonica Muzike" }, exploreCard: { title: "Istraži", text: "Palače Schönbrunn i Hofburg, Katedrala Sv. Stjepana, Belvedere." }, detailImage1: { image: "/images/Vienna/detail1.jpg", alt: "Detalj arhitekture Beča" }, cuisineCard: { title: "Okusi", text: "Uživajte u bečkoj šnicli, Sacher torti i kafi u tradicionalnim kafanama." }, foodImage: { image: "/images/Vienna/food.jpg", alt: "Sacher torta" }, atmosphereImage: { image: "/images/Vienna/atmosphere.jpg", alt: "Bečka opera noću" }, experienceCard: { title: "Otkrijte eleganciju i historiju Beča.", text: "Posjetite svjetski poznate muzeje, uživajte u klasičnoj muzici i prošetajte carskim vrtovima." }, detailImage2: { image: "/images/Vienna/detail2.jpg", alt: "Fijaker ispred Hofburga" }, stayCard: { title: "Boravak", text: "Luksuzni hoteli u centru grada ili šarmantni apartmani u sporednim ulicama." }, discoverButton: { title: "OTKRIJ VIŠE" }, prevButton: { title: "PRETHODNI" }, nextButton: { title: "SLJEDEĆI" }, }
    },
     {
        name: "Basel", // Slično Santorini stilu
        colors: { background: '#1f2937', cardBg: '#374151', cardBgHover: '#4b5563', buttonPrimaryBg: '#374151', buttonPrimaryBgHover: '#4b5563', buttonSecondaryBg: '#111827', buttonSecondaryBgHover: '#1f2937', gradientClasses: "bg-gradient-to-br from-slate-800 via-blue-950 to-slate-900", textMain: '#f9fafb', textSubtle: '#e5e7eb', },
        content: { mainImage: { image: "/images/Basel/main.jpg", alt: "Most na Rajni, Basel", title: "Basel", subtitle: "Švicarski Grad Umjetnosti i Kulture" }, exploreCard: { title: "Istraži", text: "Fondacija Beyeler, Muzej umjetnosti (Kunstmuseum), Stari grad (Altstadt), obale Rajne." }, detailImage1: { image: "/images/Basel/detail1.jpg", alt:"Moderna arhitektura Basela" }, cuisineCard: { title: "Okusi", text: "Probajte Basler Läckerli (medenjake), švicarske sireve i čokoladu." }, foodImage: { image: "/images/Basel/food.jpg", alt: "Basler Läckerli medenjaci" }, atmosphereImage: { image: "/images/Basel/atmosphere.jpg", alt: "Rijeka Rajna u Baselu sa brodovima" }, experienceCard: { title: "Doživite spoj tradicije i modernog u Baselu.", text: "Uronite u svjetsku klasu umjetnosti, prošetajte šarmantnim Starim gradom i opustite se uz Rajnu." }, detailImage2: { image: "/images/Basel/detail2.jpg", alt: "Tinguely fontana u Baselu" }, stayCard: { title: "Boravak", text: "Dizajnerski hoteli blizu muzeja ili udobni smještaji u Starom gradu." }, discoverButton: { title: "OTKRIJ VIŠE" }, prevButton: { title: "PRETHODNI" }, nextButton: { title: "SLJEDEĆI" }, }
    }
];


const TravelBentoGrid = () => {
  const [currentThemeIndex, setCurrentThemeIndex] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const gridContainerRef = useRef<HTMLDivElement>(null);

  const currentTheme = useMemo(() => themesData[currentThemeIndex], [currentThemeIndex]);

  // --- CSS Stilovi (Isti kao prije) ---
  const dynamicStyles = `
    :root {
      --theme-card-bg: ${currentTheme?.colors.cardBg || '#4a4a4a'};
      --theme-card-bg-hover: ${currentTheme?.colors.cardBgHover || '#5a5a5a'};
      --theme-button-primary-bg: ${currentTheme?.colors.buttonPrimaryBg || '#4a4a4a'};
      --theme-button-primary-bg-hover: ${currentTheme?.colors.buttonPrimaryBgHover || '#5a5a5a'};
      --theme-button-secondary-bg: ${currentTheme?.colors.buttonSecondaryBg || '#333333'};
      --theme-button-secondary-bg-hover: ${currentTheme?.colors.buttonSecondaryBgHover || '#4a4a4a'};
      --theme-text-main: ${currentTheme?.colors.textMain || '#ffffff'};
      --theme-text-subtle: ${currentTheme?.colors.textSubtle || '#bdbdbd'};
    }

    .travel-bento-grid-wrapper { font-family: sans-serif; }

    .travel-bento-grid-wrapper .theme-card-gradient { color: var(--theme-text-main); transition: filter 0.3s ease; }
    .travel-bento-grid-wrapper .theme-card-gradient .text-subtle { color: var(--theme-text-subtle); }
    .travel-bento-grid-wrapper .theme-card-gradient:hover { filter: saturate(1.2) brightness(1.05); }

    .travel-bento-grid-wrapper .theme-button-primary { background-color: var(--theme-button-primary-bg); color: var(--theme-text-main); transition: background-color 0.3s ease; }
    .travel-bento-grid-wrapper .theme-button-primary:hover { background-color: var(--theme-button-primary-bg-hover); }

    .travel-bento-grid-wrapper .theme-button-secondary { background-color: var(--theme-button-secondary-bg); color: var(--theme-text-subtle); transition: background-color 0.3s ease; }
    .travel-bento-grid-wrapper .theme-button-secondary:hover { background-color: var(--theme-button-secondary-bg-hover); }

    .travel-bento-grid-wrapper .text-main { color: var(--theme-text-main); }
    .travel-bento-grid-wrapper .text-subtle { color: var(--theme-text-subtle); }

    .travel-bento-grid-wrapper #bento-grid-container { opacity: 1; transition: opacity 0.3s ease-in-out; }
    .travel-bento-grid-wrapper #bento-grid-container.is-fading { opacity: 0; }

    .travel-bento-grid-wrapper .group .object-cover,
    .travel-bento-grid-wrapper .group .bg-cover.bg-center[style] { transition: transform 0.3s ease, opacity 0.5s ease-in-out; }
    .travel-bento-grid-wrapper .bg-cover.bg-center[style] { background-size: cover; background-position: center; background-repeat: no-repeat; }
  `;

  // Funkcija za promjenu teme (ostaje ista logika)
  const changeTheme = useCallback((direction: 'next' | 'prev') => {
    if (isTransitioning || !gridContainerRef.current) return;
    setIsTransitioning(true);
    gridContainerRef.current.classList.add('is-fading');
    setTimeout(() => {
      setCurrentThemeIndex((prevIndex) => {
        if (direction === 'next') return (prevIndex + 1) % themesData.length;
        else return (prevIndex - 1 + themesData.length) % themesData.length;
      });
      requestAnimationFrame(() => {
            if(gridContainerRef.current) gridContainerRef.current.classList.remove('is-fading');
           setTimeout(() => setIsTransitioning(false), 300);
       });
    }, 300);
  }, [isTransitioning]);

  const showNextTheme = useCallback(() => changeTheme('next'), [changeTheme]);
  const showPrevTheme = useCallback(() => changeTheme('prev'), [changeTheme]);

   // Efekat za klik na iteme (ostaje isti)
   useEffect(() => {
     const gridItems = document.querySelectorAll('.travel-bento-grid .group');
     const handleClick = (event: Event) => {
        const item = event.currentTarget as HTMLElement;
        const titleElement = item.querySelector('h2, h3');
        const title = titleElement ? titleElement.textContent?.trim() : 'Element';
        console.log(`Kliknuto: ${title}`);
     };
     gridItems.forEach(item => item.addEventListener('click', handleClick));
     return () => gridItems.forEach(item => item.removeEventListener('click', handleClick));
   }, []);


  if (!currentTheme) return <div className="p-8">Učitavanje...</div>;

  // --- Render Komponente ---
  return (
    <>
      <style>{dynamicStyles}</style>
      <div className="travel-bento-grid-wrapper">
          <div className="max-w-6xl mx-auto mb-12 md:mb-16 travel-bento-grid px-4 md:px-0">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-main mb-8">
              Vaše Putovanje: {currentTheme.name}
            </h1>

            {/* === NOVI REDOSLIJED ZA MOBILNI PRIKAZ === */}
            {/* Osnovne klase su za mobilni (flex col), md: klase za desktop (grid) */}
            <div
              ref={gridContainerRef}
              id="bento-grid-container"
              className="flex flex-col gap-4 md:grid md:grid-cols-4 md:grid-rows-7 md:gap-4 md:h-[600px] lg:h-[700px]"
            >

              {/* 1. Glavna Slika */}
              <div className="w-full rounded-xl shadow-lg overflow-hidden relative group cursor-pointer min-h-[300px] md:min-h-0 md:col-span-2 md:row-span-3"
                   style={{backgroundImage: `url('${currentTheme.content.mainImage.image || ''}')`}}
                   aria-label={currentTheme.content.mainImage.alt}>
                {/* Overlay i Tekst */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 md:p-6 text-white z-10">
                  <h2 className="text-2xl md:text-4xl font-bold mb-1">{currentTheme.content.mainImage.title}</h2>
                  <p className="text-base md:text-lg opacity-90">{currentTheme.content.mainImage.subtitle}</p>
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300"></div>
              </div>

               {/* 2. Tekst Doživljaj Kartica (Unleash/Experience) */}
              <div className={`theme-card-gradient ${currentTheme.colors.gradientClasses} w-full rounded-xl shadow-lg overflow-hidden p-4 md:p-6 flex flex-col justify-center group cursor-pointer md:col-start-1 md:row-start-4 md:row-span-3`}>
                <h3 className="text-xl md:text-2xl font-semibold mb-3 leading-tight text-main">{currentTheme.content.experienceCard.title}</h3>
                <p className="text-sm md:text-base text-subtle">{currentTheme.content.experienceCard.text}</p>
              </div>

              {/* 3. Discover More Button */}
              <button className="theme-button-primary w-full rounded-lg shadow-md p-4 flex items-center justify-center group cursor-pointer font-semibold md:col-start-1 md:row-start-7">
                  {currentTheme.content.discoverButton.title}
              </button>

              {/* 4. Prev/Next Buttons */}
              <div className="flex gap-2 items-stretch justify-stretch w-full md:col-start-2 md:row-start-7">
                <button
                  onClick={showPrevTheme}
                  disabled={isTransitioning}
                  className="theme-button-secondary flex-1 font-semibold py-3 px-3 rounded-lg text-xs md:text-sm flex items-center justify-center group cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Prethodna destinacija"
                >
                  {currentTheme.content.prevButton.title}
                </button>
                <button
                  onClick={showNextTheme}
                  disabled={isTransitioning}
                  className="theme-button-secondary flex-1 font-semibold py-3 px-3 rounded-lg text-xs md:text-sm flex items-center justify-center group cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Sljedeća destinacija"
                >
                  {currentTheme.content.nextButton.title}
                </button>
              </div>

              {/* 5. Explore Kartica */}
              <div className={`theme-card-gradient ${currentTheme.colors.gradientClasses} w-full rounded-xl shadow-lg overflow-hidden p-4 md:p-6 flex flex-col justify-center group cursor-pointer md:col-start-3 md:row-start-1`}>
                   <h3 className="text-xl font-semibold mb-2 text-main">{currentTheme.content.exploreCard.title}</h3>
                   <p className="text-sm text-subtle">{currentTheme.content.exploreCard.text}</p>
              </div>

              {/* 6. Slika Detalja 2 (Snowy/Kapali) */}
              <div className="w-full rounded-xl shadow-lg overflow-hidden relative group cursor-pointer min-h-[250px] md:min-h-0 md:col-start-2 md:row-start-4 md:row-span-3"
                   style={{backgroundImage: `url('${currentTheme.content.detailImage2.image || ''}')`}}
                    aria-label={currentTheme.content.detailImage2.alt}>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
              </div>

               {/* 7. Slika Atmosfere (Cabin/Bosfor) */}
              <div className="w-full rounded-xl shadow-lg overflow-hidden relative group cursor-pointer min-h-[350px] md:min-h-0 md:col-start-3 md:row-start-2 md:row-span-4"
                   style={{backgroundImage: `url('${currentTheme.content.atmosphereImage.image || ''}')`}}
                    aria-label={currentTheme.content.atmosphereImage.alt}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

               {/* 8. Slika Detalja 1 (Puffin/Pločice) */}
              <div className="w-full rounded-xl shadow-lg overflow-hidden relative group cursor-pointer min-h-[250px] md:min-h-0 md:col-start-4 md:row-start-1 md:row-span-3"
                   style={{backgroundImage: `url('${currentTheme.content.detailImage1.image || ''}')`}}
                    aria-label={currentTheme.content.detailImage1.alt}>
                   <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
              </div>

              {/* 9. Cuisine Kartica */}
              <div className={`theme-card-gradient ${currentTheme.colors.gradientClasses} w-full rounded-xl shadow-lg overflow-hidden p-4 md:p-6 flex flex-col justify-center group cursor-pointer md:col-start-4 md:row-start-4 md:row-span-2`}>
                   <h3 className="text-xl font-semibold mb-2 text-main">{currentTheme.content.cuisineCard.title}</h3>
                   <p className="text-sm text-subtle">{currentTheme.content.cuisineCard.text}</p>
              </div>

               {/* 10. Stay Kartica */}
               <div className={`theme-card-gradient ${currentTheme.colors.gradientClasses} w-full rounded-xl shadow-lg overflow-hidden p-4 md:p-6 flex flex-col justify-center group cursor-pointer md:col-start-4 md:row-start-6 md:row-span-2`}>
                   <h3 className="text-xl font-semibold mb-2 text-main">{currentTheme.content.stayCard.title}</h3>
                   <p className="text-sm text-subtle">{currentTheme.content.stayCard.text}</p>
              </div>

              {/* 11. Slika Hrane */}
              <div className="w-full rounded-xl shadow-lg overflow-hidden relative group cursor-pointer min-h-[250px] md:min-h-0 md:col-start-3 md:row-start-6 md:row-span-2"
                  style={{backgroundImage: `url('${currentTheme.content.foodImage.image || ''}')`}}
                   aria-label={currentTheme.content.foodImage.alt}>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
              </div>


            </div> {/* Kraj Grid/Flex Contanera */}
          </div> {/* Kraj max-w kontejnera */}
      </div> {/* Kraj wrapper diva */}
    </>
  );
};

export default TravelBentoGrid;
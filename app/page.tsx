export const revalidate = 0;

import { FlightSchedule } from "@/components/flights/flight-schedule"
import { BentoGrid } from "@/components/home/bento-grid"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Facebook, Instagram } from 'lucide-react';
import { getNovosti, getCurrentDaySchedule } from '@/lib/sanity'; // Import getNovosti and getCurrentDaySchedule
import Link from 'next/link'; // Import Link
import PopularDestinations from '@/components/home/popular-destinations'; // Import the new component

export default async function Home() { // Make component async
  const allNovosti = await getNovosti();
  const latestNovosti = allNovosti.slice(0, 4); // Get latest 4
  const { departures, arrivals } = await getCurrentDaySchedule(); // Fetch today's schedule

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] py-48 px-6 rounded-3xl bg-gradient-to-r from-[#0a192f] to-[#172a45] shadow-2xl overflow-hidden">
        <div className="relative z-10 flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Dobrodošli na<br />Međunarodni aerodrom<br /> Tuzla
          </h1>
          <form
            action="/informacije-o-letovima"
            method="get"
            className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-[#64ffda]/50 shadow-lg max-w-2xl w-full mt-6"
          >
            <input
              type="text"
              placeholder="Unesite destinaciju ili broj leta"
              className="flex-grow bg-transparent placeholder-gray-300 text-white focus:outline-none px-2"
            />
            <Button
              type="submit"
              className="rounded-full px-4 py-2 bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f] font-semibold transition-colors"
            >
              Traži
            </Button>
          </form>
        </div>

        {/* Icons row */}
        <div className="relative z-10 mt-6 flex justify-center gap-4 text-white">
          <a href="/red-letenja" className="flex flex-col items-center hover:text-[#64ffda] transition-colors bg-white/10 backdrop-blur-md rounded-[15px] px-2 py-2 shadow-lg text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.5 19l19-7-19-7v6l15 1-15 1v6z" />
            </svg>
            <span className="text-sm">Red Letenja</span>
          </a>
          <a href="/parking" className="flex flex-col items-center hover:text-[#64ffda] transition-colors bg-white/10 backdrop-blur-md rounded-[15px] px-2 py-2 shadow-lg text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16v16H4z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 8h4a2 2 0 110 4h-4V8z" />
            </svg>
            <span className="text-sm">Parking Info</span>
          </a>
          <a href="/web-check-in" className="flex flex-col items-center hover:text-[#64ffda] transition-colors bg-white/10 backdrop-blur-md rounded-[15px] px-2 py-2 shadow-lg text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16v16H4z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8M8 16h8M8 8h8" />
            </svg>
            <span className="text-sm">Web check in</span>
          </a>
        </div>

        <video
          src="/videos/Novi Hero.mp4"
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-50"
        />
      </section>

      {/* Main Grid */}
      {/* Adjusted grid columns: Left takes remaining space, Right fixed to card width */}
      {/* Removed px-4 md:px-0 from grid container */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_theme(width.80)] gap-8">
        {/* Added px-4 md:px-0 to left column container */}
        <div className="space-y-8 px-4 md:px-0">
          <div id="flights">
            <FlightSchedule departures={departures} arrivals={arrivals} />
          </div>
          {/* BentoGrid should now align correctly as its parent has padding */}
          <BentoGrid />
        </div>

        {/* Right Sidebar - Added px-4 md:px-0, align center mobile, end large */}
        <div className="space-y-8 flex flex-col items-center lg:items-end px-4 md:px-0"> {/* Align items on container */}
          {/* Added w-80, removed w-full h-44 */}
          {/* Removed lg:self-end from individual cards */}
          <Card className="javnabavke-card rounded-xl bg-[#172a45]/20 backdrop-blur-lg shadow-2xl p-4 flex flex-col justify-between gap-4 w-80">
            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#64ffda]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h5l5 5v11a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-lg font-semibold text-[#64ffda]">Javne nabavke</h3>
            </div>
            <p className="text-sm text-[#8892b0]">
              Pregled aktuelnih javnih nabavki i tendera na aerodromu.
            </p>
            <Button asChild variant="outline" className="w-full border border-[#64ffda] text-[#64ffda] bg-transparent hover:bg-[#64ffda]/10 hover:text-[#64ffda]">
              <a href="/javni-pozivi">Pogledaj</a>
            </Button>
          </Card>

          {/* Added w-80, removed w-full h-44 */}
          <Card className="prtljag-card bg-[#172a45]/50 border-[#64ffda]/20 w-80"> {/* Removed lg:self-end */}
            <CardHeader>
              <CardTitle>Dozvoljeni prtljag</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-around">
              {/* Link for Ručni Prtljag */}
              <Link href="/faq#wizzair-rucni" className="flex flex-col items-center hover:opacity-80 transition-opacity">
                <div className="w-12 h-12 rounded-full bg-[#64ffda]/10 flex items-center justify-center mb-2">
                  <svg className="w-6 h-6 text-[#64ffda]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <path d="M16 8h.01M8 8h.01" />
                    <path d="M12 16v-4" />
                  </svg>
                </div>
                <span className="text-sm text-[#8892b0]">Ručni</span>
              </Link>
              {/* Link for Predati Prtljag */}
              <Link href="/faq#wizzair-predati" className="flex flex-col items-center hover:opacity-80 transition-opacity">
                <div className="w-12 h-12 rounded-full bg-[#64ffda]/10 flex items-center justify-center mb-2">
                  <svg className="w-6 h-6 text-[#64ffda]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M12 8v8" />
                    <path d="M8 12h8" />
                  </svg>
                </div>
                <span className="text-sm text-[#8892b0]">Predani</span>
              </Link>
              {/* Link for Specijalni Prtljag */}
              <Link href="/faq#wizzair-specijalni" className="flex flex-col items-center hover:opacity-80 transition-opacity">
                <div className="w-12 h-12 rounded-full bg-[#64ffda]/10 flex items-center justify-center mb-2">
                  <svg className="w-6 h-6 text-[#64ffda]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v20M2 12h20" />
                  </svg>
                </div>
                <span className="text-sm text-[#8892b0]">Posebni</span>
              </Link>
            </CardContent>
          </Card>

          {/* Wrap Parking card with Link - Added w-80 to Link */}
          <Link href="/parking" className="block hover:opacity-90 transition-opacity w-80"> {/* Removed lg:self-end */}
            {/* Removed w-full h-44 */}
            <Card className="parking-card bg-[#172a45]/50 border-[#64ffda]/20">
              <CardHeader>
                <CardTitle>Parking</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#64ffda]/10 flex items-center justify-center">
                      <span className="text-[#64ffda]">P</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Kiss & Fly zone</h4>
                      <p className="text-sm text-[#8892b0]">5 minuta besplatno</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Added w-80, removed w-full h-44 flex flex-col */}
          <Card className="info-card-1 bg-[#172a45]/50 border-[#64ffda]/20 w-80"> {/* Removed lg:self-end */}
            <CardHeader>
              <CardTitle>Partneri aerodroma</CardTitle>
            </CardHeader>
            {/* Removed flex-grow overflow-hidden */}
            <CardContent className="marquee-container relative flex overflow-x-hidden">
              {/* The marquee content - logos duplicated for seamless loop */}
              <div className="animate-marquee whitespace-nowrap flex items-center"> {/* Removed self-center */}
                {/* First set of logos */}
                <Image src="/images/Wizzair-Wizz-Air-Logo.png" alt="Wizz Air Logo" width={100} height={40} className="inline-block mx-4 object-contain h-10 w-auto" />
                <Image src="/images/AJetlogo_rE2syAo[1].jpg" alt="AJet Logo" width={100} height={40} className="inline-block mx-4 object-contain h-10 w-auto" />
                <Image src="/images/PEGASUS_AIRLINES_LOGO_SARI_1920x1080.jpg" alt="Pegasus Airlines Logo" width={100} height={40} className="inline-block mx-4 object-contain h-10 w-auto" />
                {/* Second set of logos (duplicate) */}
                <Image src="/images/Wizzair-Wizz-Air-Logo.png" alt="Wizz Air Logo" width={100} height={40} className="inline-block mx-4 object-contain h-10 w-auto" />
                <Image src="/images/AJetlogo_rE2syAo[1].jpg" alt="AJet Logo" width={100} height={40} className="inline-block mx-4 object-contain h-10 w-auto" />
                <Image src="/images/PEGASUS_AIRLINES_LOGO_SARI_1920x1080.jpg" alt="Pegasus Airlines Logo" width={100} height={40} className="inline-block mx-4 object-contain h-10 w-auto" />
              </div>
               {/* Duplicate the marquee content again for absolute positioning trick if needed, but flex should handle it */}
               <div className="animate-marquee whitespace-nowrap flex items-center" aria-hidden="true">
                 {/* First set of logos */}
                 <Image src="/images/Wizzair-Wizz-Air-Logo.png" alt="" width={100} height={40} className="inline-block mx-4 object-contain h-10 w-auto" />
                 <Image src="/images/AJetlogo_rE2syAo[1].jpg" alt="" width={100} height={40} className="inline-block mx-4 object-contain h-10 w-auto" />
                 <Image src="/images/PEGASUS_AIRLINES_LOGO_SARI_1920x1080.jpg" alt="" width={100} height={40} className="inline-block mx-4 object-contain h-10 w-auto" />
                 {/* Second set of logos (duplicate) */}
                 <Image src="/images/Wizzair-Wizz-Air-Logo.png" alt="" width={100} height={40} className="inline-block mx-4 object-contain h-10 w-auto" />
                 <Image src="/images/AJetlogo_rE2syAo[1].jpg" alt="" width={100} height={40} className="inline-block mx-4 object-contain h-10 w-auto" />
                 <Image src="/images/PEGASUS_AIRLINES_LOGO_SARI_1920x1080.jpg" alt="" width={100} height={40} className="inline-block mx-4 object-contain h-10 w-auto" />
               </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Aktuelnosti Section - Added px-4 md:px-0 */}
      <section className="mt-12 px-4 md:px-0">
        <h2 className="text-2xl font-bold mb-6">Aktuelnosti</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"> {/* 4 columns on medium+ screens */}
          {latestNovosti.map((article: any) => (
            <Link href={`/novosti/${article.slug}`} key={article._id} className="group block rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 dark:bg-[#172a45]/60 dark:border dark:border-[#64ffda]/30">
              {article.mainImage?.asset?.url && (
                <div className="relative w-full h-48"> {/* Consistent height */}
                  <Image
                    src={article.mainImage.asset.url}
                    alt={article.mainImage.alt || article.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="p-4">
                <h3 className="text-md font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-[#64ffda] transition-colors">
                  {article.title}
                </h3>
              </div>
            </Link>
          ))}
          {latestNovosti.length === 0 && (
             <p className="text-center text-gray-500 dark:text-gray-400 md:col-span-4">Trenutno nema novosti.</p>
          )}
        </div>
        {/* "Pogledaj sve" Button */}
        {latestNovosti.length > 0 && (
          <div className="mt-8 text-center">
            <Button asChild variant="outline" className="border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10 hover:text-[#64ffda] dark:text-[#64ffda] dark:border-[#64ffda] text-blue-600 border-blue-600 hover:border-blue-700 hover:text-blue-700">
              <Link href="/novosti">Pogledaj sve</Link>
            </Button>
          </div>
        )}
      </section>

      {/* Popular Destinations Section - Component handles its own padding */}
      <PopularDestinations />

     
      {/* Partner Images - Added px-4 md:px-0 */}
      <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-6 bg-[#172a45]/30 rounded-xl p-4 shadow-inner px-4 md:px-0">
        <img
          src="/images/nova.gif"
          alt="Partner 1"
          className="w-52 h-auto rounded-lg object-contain"
        />
        <img
          src="/images/dutyfree.gif"
          alt="Partner 2"
          className="w-52 h-auto rounded-lg object-contain"
        />
      </div>

      {/* Map/Social Grid - Added px-4 md:px-0 */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[minmax(150px,auto)] px-4 md:px-0">
        {/* Map (Now 3 cols - 75%) - Updated background colors */}
        <div className="md:col-span-3 rounded-2xl p-6 shadow-xl flex flex-col hover:scale-105 transition-transform duration-300
          bg-slate-100 dark:bg-[#172a45]/60 dark:border dark:border-[#64ffda]/30">
          <h3 className="text-lg font-bold mb-4 text-gray-800 dark:text-white">Lokacija aerodroma</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.858682876989!2d18.72194431553499!3d44.45805597910233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475e9c7e4b7b7b7b%3A0x7b7b7b7b7b7b7b7b!2sTuzla%20International%20Airport!5e0!3m2!1sen!2sba!4v1680000000000!5m2!1sen!2sba"
            width="100%"
            height="200"
            style={{ border: 0 }}
            className="rounded-md"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Social Media (Now 1 col - 25%) - Updated background colors */}
        <div className="md:col-span-1 rounded-2xl p-6 shadow-xl flex flex-col justify-center items-center hover:scale-105 transition-transform duration-300
          bg-slate-100 dark:bg-[#172a45]/60 dark:border dark:border-[#64ffda]/30">
          <h3 className="text-lg font-bold mb-4 text-gray-800 dark:text-white">Društvene mreže</h3>
          <p className="text-gray-800 dark:text-white mb-2">Pratite nas na društvenim mrežama!</p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/Tuzlaintrnationalairport" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-800 dark:text-[#64ffda] hover:opacity-80 transition-opacity">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="https://www.instagram.com/tuzlainternationalairport/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-800 dark:text-[#64ffda] hover:opacity-80 transition-opacity">
              <Instagram className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Removed FAQ section */}
      </div>
    </div>
  )
}

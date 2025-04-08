import React from 'react';
import { FileText } from 'lucide-react';

export const revalidate = 0;

const decisions = [
  "Odluka o izboru najpovoljnijeg ponuđača – nabavka električne energije",
  "Odluka o izboru najpovoljnijeg ponuđača – usluga odvoza smeća",
  "Odluka o izboru najpovoljnijeg ponuđača – LOT 2 geomehaničko ispitivanje",
  "Odluka o izboru najpovoljnijeg ponuđača – LOT 1 geodetsko snimanje",
  "Odluka o izboru najpovoljnijeg ponuđača – nabavka pumpe za vozilo DEICER",
  "Odluka o izboru najpovoljnijeg ponuđača – nabavka metlica",
  "Odluka o izboru najpovoljnijeg ponuđača – materijal za održavanje čistoće",
  "Odluka o izboru najpovljnijeg ponuđača – revizija finansijkih izvještaja",
  "Odluka o izboru najpovoljnige ponuđača – kancelarijski materijal",
  "Odluka o izboru najpovoljnijeg ponuđača – nabavka rekuperatora",
  "Odluka o izboru najpovoljnijeg ponuđača za nabavku usluga revizije trafo stanica i elektro postrojenja",
  "Odluka o izboru najpovoljnijeg ponuđača za nabavku usluga osiguranja radnika od nesretnog slučaja LOT 1",
  "Odluka o izboru najpovoljnijeg ponuđača za nabavku usluga osiguranja od odgovornosti LOT 2",
  "Odluka o izboru najpovoljnijeg ponuđača-nabavka usluge izrade glavnog projekta svjetlosnog obilježavanja centralne linije PSS",
  "Odluka o izboru najpovoljnijeg ponuđača za nabavku uređaja za zaštitu računarske mreže i informacionog sistema na JP MAT",
  "Odluka o izboru najpovoljnijeg ponuđača za nabavku invlidskih kolica za ukrcavanje i iskrcavanje putnika na električni pogon na JP MAT",
  "Odluka o izboru najpovoljnijeg ponuđača za nabavku komunalnih usluga-usluga odvoza smeća",
  "Odluka o izboru najpovoljnijeg ponuđača za nabavku bravarskih radova na izlaznom GATE-u",
  "Odluka o izboru najpovoljnijeg ponuđača za nabavku kabina za rent a car",
  "Odluka o izboru najpovoljnijeg ponuđača za nabavku stolica za javni prostor",
  "Odluka o izboru najpovoljnijeg ponuđača za nabavku vatrogasnog intervencijskog odijela i izolacionih aparata za disanje",
  "Odluka o izboru najpovoljnijeg ponuđača za nabavku PUTNIČKIH STEPENICA",
  "Odluka o izboru najpovoljnijeg ponuđača za nabavku svjetlećeg logotipa JP MAT",
  "Odluka o izboru najpovoljnijeg ponuđača KOLICA ZA PRTLJAG II",
  "Odluka o izboru najpovoljnijeg ponuđača za nabavku Fluida za odleđivanje 2023",
  "Odluka o izboru najpovoljnijeg ponuđača za nabavku rendgen uređaja i md vrata",
  "Odluka o izboru najpovoljnijeg ponudjaca VOZILO ZA ODLEDJIVANJE",
  "Odluka o izboru najpovoljnijeg ponuđača NISKOPODNI AUTOBUSI",
  "Odluka o izboru najpovoljnijeg ponuđača RADOVI PORTIRNICA",
  "Odluka o izbiru najpovoljnijeg ponuđača KOLICA ZA PRTLJAG",
  "Odluka o izboru najpovoljnijeg ponuđača GPU AGREGAT",
  "Odluka o izboru najpovoljnijeg ponuđača INVALIDSKA KOLICA",
  "Odluka o izboru trećerangiranog ponuđača za izradu studije izvodljivosti",
  "Odluka o izboru najpovoljnijeg ponuđača za nabavku mašine za brisanje pločica (hola) i prenosivog – ručnog baterijskog usisivača.",
  "Odluka o izboru drugorangiranog ponuđača za izradu studije izvodljivosti",
  "Odluka o izboru najpovoljnijeg ponuđača za nabavku DCS sistema",
  "Odluka o izboru najpovoljnijeg ponuđača za nabavku niskopodnih autobusa",
  "Odluka o izboru najpovoljnijeg ponuđača za nabavku goriva 2023",
  "Odluka o izboru najpovoljnijeg ponuđača – radovi nadstrešnica",
  "ODLUKA o izboru najpovoljnijeg ponuđača – Sistem za kancelarijsko poslovanje DMS",
  "Odluka o izboru – traktor na elektricni pogon",
  "Odluka o izboru LOT 3",
  "Odluka o izboru LOT 1",
  "Odluka o izboru najpovoljnijeg ponuđača – zdravstvene usluge",
  "Odluka o izboru najpovoljnijeg ponudjaca za nabavku uree za zimsko odrzavanje",
  "Odluka o izboru za nabavku rude sa priključnim glavama",
  "Odluka o izboru za nabavku poravka X-ray uređaja",
  "Odluka o izboru LOT 2 tecnost za odledjivanje",
  "Odluka o izboru najpovoljnijeg ponuđača FLUID",
  "Odluka o izboru ponuđača za nabavku radova parking",
  "Odluka o izboru radovi nadogradnje izlazni gate",
  "Odluka o izboru ponuđača za nabavku bankarskih usluga",
  "Odluka o izboru ponuđača za nabavku rude",
  "Odluka o izboru ponuđača – oprema za parking",
  "Odluka o izboru najpovoljnjijeg ponuđača TEHNOGRAD d.o.o.",
  "Odluka o izboru – Oznake za prtljag",
  "Odluka o izboru najpovoljnijeg ponuđača Osiguranje od odgovornosti",
  "Odluka o izboru najpovoljnijeg ponuđača JZNU Dom Zdravlja Tuzla",
  "Odluka o izboru najpovoljnijeg ponuđača “Hemija patenting” d.o.o. Lukavac",
  "Odluka o dodjeli – Urea za zimsko odrzavanje PSS",
  "Odluka o izboru Urea Hifa-Oil",
  "Odluka o izboru najpovoljnijeg ponuđača Middlepoint-KDZ",
  "Odluka o izboru BANKARSKE USLUGE",
  "ODLUKU O IZBORU NAJPOVOLJNIJEG PONUĐAČA – Tehnograd d.o.o.",
  "Odluku o izboru najpovoljnijeg ponuđača – Tehnička i fizička zaštita",
  "Odluku o izboru najpovoljnijeg ponuđača- Džena d.o.o. Gradačac",
  "Odluka o izboru najpovoljnijeg ponuđača-EURO DAM JAS",
  "Odluka o izboru najpovoljnijeg ponuđača PCN",
  "Odluka – APS Aviation",
  "Odluka – TOM CAT",
  "Odluka – “Tehno biro” d.o.o.",
  "Odluka – “Migros” d.o.o. Sarajevo",
  "Odluku – Wiener Osiguranje",
  "Odluka – HIFA Petrol",
  "Odluka – Novošped",
  "Odluka – Elektroprivreda BIH",
  "Odluka – Revizorske usluge",
  "Odluka – Hifa Oil",
  "Odluka – Hemija patenting",
  "Odluka – IPSA INSTITUT",
  "Odluka – Hemija Patenting",
  "Odluku – Tom Cat",
  "Odluka – TP Omerbašić d.o.o. Tešanj",
  "Odluka – TP Omerbašić d.o.o. Tešanj",
  "Odluka – Gorivo",
  "Odluka – Higijena",
  "Odluka – Grant Thrnton",
  "Odluka –  Eccos Inženjering",
  "Odluka",
  "Odluka0001",
  "ODLUKA O POKRETANJU PREGOVARAČKOG POSTUPKA BEZ OBJAVE OBAVJEŠTENJA",
  "ODLUKA O IZBORU – STRUCNI NADZOR CARINSKO SKLADISTE",
  "ODLUKA O IZBORU_VATROGASNA ODIJELA ZA ULAZAK U VATRU",
  "ODLUKA O IZBORU-NABAVKA REZERVNIH DIJELOVA I SERVISIRANJE",
  "ODLUKA O IZBORU-PODNE I ZIDNE OBLOGE",
  "ODLUKA O IZBORU-PJENILO",
  "ODLUKA O IZBORU-OBLOGE FASADE PLOCAMA",
  "ODLUKA O IZBORU-MASINSKI RADOVI",
  "ODLUKA O IZBORU-TEKUCINA ZA PSS",
  "ODLUKA O IZBORU-VODOVOD I KANALIZACIJE",
  "ODLUKA O IZBORU-NABAVKA RADOVA CARINSKO SKLADISTE",
  "ODLUKA O IZBORU-NABAVKA UREE",
  "ODLUKA FAZA I",
  "ODLUKA O IZBORU PUMPNO FILTERSKO POSTROJENJE",
  "ODLUKA O IZBORU TRAKTOR",
  "ODLUKA O IZBORU CITAC TABLICA",
  "ODLUKA O IZBORU STRUCNO USAVRSAVANJE",
  "ODLUKA IZBOR KREDITNO ZADUZENJE",
  "ODLUKA IZBOR REZERVNI DIO X-RAY",
  "ODLUKA O IZBORU NADZOR",
  "ODLUKA O IZBORU OZNAKE",
  "ODLUKA AUTOMOBIL",
  "ODLUKA GLAVNI PROJEKAT",
  "ODLUKA O IZBORU – DE ICING",
  "ODLUKA O IZBORU – DOLLY KOLICA LOT 2",
  "ODLUKA O IZBORU – OSIGURANJE OD ODGOVORNOSTI",
  "ODLUKA O IZBORU – SERVISIRANJE",
  "ODLUKA O IZBORU – STRUČNO USAVRŠAVANJE",
  "ODLUKA O IZBORU – ŠPEDITERSKE USLUGE",
  "ODLUKA O IZBORU – TANKOVI",
  "ODLUKA O IZBORU – TEGLJAČ I CISTERNA",
  "ODLUKA O IZBORU – UPS",
  "ODLUKA O IZBORU – VILJUŠKAR.",
  "ODLUKA O IZBORU – VILJUŠKAR",
  "ODLUKA O IZBORU – NAJPOVOLJNIJEG PONUĐAČA NAFTNIH DERIVATA ZA VOZILA I OPREMU (UREĐAJE)",
  "ODLUKA O IZBORU – NAJPOVOLJNIJEG PONUĐAČA.",
  "ODLUKA O IZBORU – NAJPOVOLJNIJEG PONUĐAČA",
  "ODLUKA O IZBORU – DOLLY KOLICA LOT 2"
];

const pdfFiles = [
  "20210415130830.pdf",
  "20210520102328.pdf",
  "20210604120533.pdf",
  "20220209094521.pdf",
  "ODLLUKA-O-IZBORU-PJENILO.pdf",
  "Odluka (1).pdf",
  "ODLUKA-AUTOMOBIL.pdf",
  "ODLUKA-GLAVNI-PROJEKAT.pdf",
  "Odluka-Gorivo.pdf",
  "Odluka-Higijena.pdf",
  "ODLUKA-IZBOR-KREDITNO-ZADUZENJE.pdf",
  "ODLUKA-IZBOR-REZERVNI-DIO-X-RAY.pdf",
  "Odluka-o-dodjeli-Urea-za-zimsko-odrzavanje-PSS.pdf",
  "Odluka-o-izbiru-najpovoljnijeg-ponudjaca-KOLICA-ZA-PRTLJAG.pdf",
  "ODLUKA-O-IZBORU_VATROGASNA-ODIJELA-ZA-ULAZAK-U-VATRU.pdf",
  "ODLUKA-O-IZBORU-–-DE-ICING-1.pdf",
  "ODLUKA-O-IZBORU-–-DOLLY-KOLICA-LOT-2 (1).pdf",
  "ODLUKA-O-IZBORU-–-DOLLY-KOLICA-LOT-2.pdf",
  "ODLUKA-O-IZBORU-–-OSIGURANJE-OD-ODGOVORNOSTI.pdf",
  "ODLUKA-O-IZBORU-–-SERVISIRANJE.pdf",
  "ODLUKA-O-IZBORU-–-ŠPEDITERSKE-USLUGE.pdf",
  "ODLUKA-O-IZBORU-–-STRUČNO-USAVRŠAVANJE.pdf",
  "ODLUKA-O-IZBORU-–-TANKOVI.pdf",
  "ODLUKA-O-IZBORU-–-TEGLJAČ-I-CISTERNA.pdf",
  "ODLUKA-O-IZBORU-–-UPS.pdf",
  "ODLUKA-O-IZBORU-–-VILJUŠKAR..pdf",
  "ODLUKA-O-IZBORU-–-VILJUŠKAR.pdf",
  "Odluka-o-izboru-BANKARSKE-USLUGE.pdf",
  "ODLUKA-O-IZBORU-CITAC-TABLICA.pdf",
  "Odluka-o-izboru-drugorangiranog-ponudjaca-za-izradu-studije-izvodljivosti.pdf",
  "Odluka-o-izboru-LOT-1.pdf",
  "Odluka-o-izboru-LOT-2-tecnost-za-odledjivanje.pdf",
  "Odluka-o-izboru-LOT-3.pdf",
  "ODLUKA-O-IZBORU-MASINSKI-RADOVI (1).pdf",
  "ODLUKA-O-IZBORU-MASINSKI-RADOVI.pdf",
  "ODLUKA-O-IZBORU-NABAVKA-RADOVA-CARINSKO-SKLADISTE.pdf",
  "ODLUKA-O-IZBORU-NABAVKA-REZERVNIH-DIJELOVA-I-SERVISIRANJE.pdf",
  "ODLUKA-O-IZBORU-NABAVKA-UREE.pdf",
  "ODLUKA-O-IZBORU-NADZOR.pdf",
  "Odluka-o-izboru-najpovljnijeg-ponudjaca-revizija-finansijkih-izvjestaja.pdf",
  "Odluka-o-izboru-najpovoljineg-ponudjaca-LOT-1-geodetsko-snimanje.pdf",
  "Odluka-o-izboru-najpovoljnige-ponudjaca-kancelarijski-materijal.pdf",
  "Odluka-o-izboru-najpovoljnijeg-ponuđača-APS-Aviation.pdf",
  "Odluka-o-izboru-najpovoljnijeg-ponuđača-ECCOS-INŽENJERING.pdf",
  "Odluka-o-izboru-najpovoljnijeg-ponuđača-GRANT-THRNTON.pdf",
  "ODLUKA-O-IZBORU-NAJPOVOLJNIJEG-PONUĐAČA-NAFTNIH-DERIVATA-ZA-VOZILA-I-OPREMU-UREĐAJE.pdf",
  "Odluka-o-izboru-najpovoljnijeg-ponuđača-PCN.pdf",
  "ODLUKA-O-IZBORU-NAJPOVOLJNIJEG-PONUĐAČA..pdf",
  "ODLUKA-O-IZBORU-NAJPOVOLJNIJEG-PONUĐAČA.pdf",
  "Odluka-o-izboru-najpovoljnijeg-ponudjaca-GPU-AGREGAT.pdf",
  "Odluka-o-izboru-najpovoljnijeg-ponudjaca-INVALIDSKA-KOLICA.pdf",
  "Odluka-o-izboru-najpovoljnijeg-ponudjaca-KOLICA-ZA-PRTLJAG-II.pdf",
  "Odluka-o-izboru-najpovoljnijeg-ponudjaca-LOT-2-geomehanicko-ispitivanje.pdf",
  "Odluka-o-izboru-najpovoljnijeg-ponudjaca-materijal-za-odrzavanje-cistoce.pdf",
  "Odluka-o-izboru-najpovoljnijeg-ponudjaca-nabavaka-pumpe-za-vozilo-DEICER.pdf",
  "Odluka-o-izboru-najpovoljnijeg-ponudjaca-nabavka-el-energije.pdf",
  "Odluka-o-izboru-najpovoljnijeg-ponudjaca-nabavka-metlica-za-aerodromske-cetke.pdf",
  "Odluka-o-izboru-najpovoljnijeg-ponudjaca-nabavka-rekuperatora.pdf",
  "Odluka-o-izboru-najpovoljnijeg-ponudjaca-nabavka-usluge-izrade-glavnog-projekta-svjetlosnog-obiljezavanja-centralne-linije-PSS.pdf",
  "Odluka-o-izboru-najpovoljnijeg-ponudjaca-NISKOPODNI-AUTOBUSI.pdf",
  "Odluka-o-izboru-najpovoljnijeg-ponudjaca-Osiguranje-od-odgovornosti.pdf",
  "Odluka-o-izboru-najpovoljnijeg-ponudjaca-radovi-nadstresnica.pdf",
  "Odluka-o-izboru-najpovoljnijeg-ponudjaca-RADOVI-PORTIRNICA.pdf",
  "ODLUKA-o-izboru-najpovoljnijeg-ponudjaca-Sistem-za-kancelarijsko-poslovanje-DMS.pdf",
  "Odluka-o-izboru-najpovoljnijeg-ponudjaca-usluga-odvoza-smeca.pdf",
  "Odluka-o-izboru-najpovoljnijeg-ponudjaca-VOZILO-ZA-ODLEDJIVANJE.pdf",
  "Odluka-o-izboru-najpovoljnijeg-ponudjaca-za-nabavku-bravarskih-radova-na-izlaznom-GATE-u.pdf",
  "Odluka-o-izboru-najpovoljnijeg-ponudjaca-za-nabavku-DCS-sistema.pdf",
  "Odluka-o-izboru-najpovoljnijeg-ponudjaca-za-nabavku-Fluida-za-odledjivanje-2023.pdf",
  "Odluka-o-izboru-najpovoljnijeg-ponudjaca-za-nabavku-goriva-2023.pdf",
  "Odluka-o-izboru-najpovoljnijeg-ponudjaca-za-nabavku-invlidskih-kolica-za-ukrcavanje-i-iskrcavanje-putnika-na-elektricni-pogon-na-JP-MAT.pdf",
  "Odluka-o-izboru-najpovoljnijeg-ponudjaca-za-nabavku-kabina-za-rent-a-car.pdf",
  "Odluka-o-izboru-najpovoljnijeg-ponudjaca-za-nabavku-komunalnih-usluga-usluga-odvoza-smeca.pdf",
  "Odluka-o-izboru-najpovoljnijeg-ponudjaca-za-nabavku-masine-za-brisanje-plocica-hola-i-prenosivog-rucnog-baterijskog-usisivaca.pdf",
  "Odluka-o-izboru-najpovoljnijeg-ponudjaca-za-nabavku-niskopodnih-autobusa.pdf",
  "Odluka-o-izboru-najpovoljnijeg-ponudjaca-za-nabavku-PUTNICKIH-STEPENICA.pdf",
  "Odluka-o-izboru-najpovoljnijeg-ponudjaca-za-nabavku-rendgen-uredjaja-i-md-vrata.pdf",
  "Odluka-o-izboru-najpovoljnijeg-ponudjaca-za-nabavku-stolica-za-javni-prostor.pdf",
  "Odluka-o-izboru-najpovoljnijeg-ponudjaca-za-nabavku-svjetleceg-logotipa-JP-MAT.pdf",
  "Odluka-o-izboru-najpovoljnijeg-ponudjaca-za-nabavku-uredjaja-za-zastitu-racunarske-mreze-i-informacionog-sistema-na-JP-MAT.pdf",
  "Odluka-o-izboru-najpovoljnijeg-ponudjaca-za-nabavku-uree-za-zimsko-odrzavanje.pdf",
  "Odluka-o-izboru-najpovoljnijeg-ponudjaca-za-nabavku-usluga-osiguranja-od-odgovornosti-LOT-2.pdf",
  "Odluka-o-izboru-najpovoljnijeg-ponudjaca-za-nabavku-usluga-osiguranja-radnika-od-nesretnog-slucaja-LOT-1.pdf",
  "Odluka-o-izboru-najpovoljnijeg-ponudjaca-za-nabavku-usluga-revizije-trafo-stanica-i-elektro-postrojenja.pdf",
  "Odluka-o-izboru-najpovoljnijeg-ponudjaca-za-nabavku-vatrogasnog-intervencijskog-odijela-i-izolacionih-aparata-za-disanje.pdf",
  "Odluka-o-izboru-najpovoljnijeg-ponudjaca-zdravstvene-usluge.pdf",
  "Odluka-o-izboru-najpovoljnijeg-ponudjaca.pdf",
  "Odluka-o-izboru-najpovoljnijeg.pdf",
  "Odluka-o-izboru-najpovoljnjijeg-ponudjaca.pdf",
  "ODLUKA-O-IZBORU-OBLOGE-FASADE-PLOCAMA.pdf",
  "Odluka-o-izboru-Oznake-za-prtljag.pdf",
  "ODLUKA-O-IZBORU-OZNAKE.pdf",
  "Odluka-o-izboru-ponudjaca-oprema-za-parking.pdf",
  "Odluka-o-izboru-ponudjaca-za-nabavku-bankarskih-usluga.pdf",
  "Odluka-o-izboru-ponudjaca-za-nabavku-radova-parking.pdf",
  "Odluka-o-izboru-ponudjaca-za-nabavku-rude.pdf",
  "ODLUKA-O-IZBORU-PUMPNO-FILTERSKO-POSTROJENJE.pdf",
  "Odluka-o-izboru-radovi-nadogradnje-izlazni-gate.pdf",
  "ODLUKA-O-IZBORU-STRUCNI-NADZOR-CARINSKO-SKLADISTE.pdf",
  "ODLUKA-O-IZBORU-STRUCNO-USAVRSAVANJE.pdf",
  "ODLUKA-O-IZBORU-TEKUCINA-ZA-PSS.pdf",
  "Odluka-o-izboru-traktor-na-elektricni-pogon.pdf",
  "ODLUKA-O-IZBORU-TRAKTOR.pdf",
  "Odluka-o-izboru-trecerangiranog-ponudjaca-za-izradu-studije-izvodljivosti.pdf",
  "Odluka-o-izboru-Urea-Hifa-Oil.pdf",
  "ODLUKA-O-IZBORU-VODOVOD-I-KANALIZACIJE.pdf",
  "Odluka-o-izboru-za-nabavku-poravka-X-ray-uredjaja.pdf",
  "Odluka-o-izboru-za-nabavku-rude-sa-prikljucnim-glavama.pdf",
  "ODLUKA-O-POKRETANJU-PREGOVARAČKOG-POSTUPKA-BEZ-OBJAVE-OBAVJEŠTENJA.pdf",
  "Odluka-TEHNO-biro-d.o.o..pdf",
  "Odluka.pdf",
  "Odluka0001.pdf",
  "OdlukaMiddlepointKDZ.pdf"
];

function normalize(str: string) {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // remove diacritics
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function findPdf(title: string) {
  const normTitle = normalize(title);
  return pdfFiles.find((file) => {
    const normFile = normalize(file);
    return normFile.includes(normTitle) || normTitle.includes(normFile);
  });
}

export default function OdlukeIzborPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-16 relative overflow-hidden rounded-[15px]">
      <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-20 rounded-[15px]">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-transparent to-blue-100 dark:from-[#0a192f] dark:via-transparent dark:to-[#172a45]" />
      </div>

      <section className="text-center animate-fade-in">
        <FileText className="h-16 w-16 mx-auto text-blue-600 dark:text-[#64ffda] mb-4" />
        <h1 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
          ODLUKE O IZBORU NAJPOVOLJNIJEG PONUĐAČA
        </h1>
      </section>

      <section className="max-w-4xl mx-auto animate-fade-in-delay-1">
        <div className="p-8 rounded-[15px] shadow-xl bg-white/70 backdrop-blur-lg border border-gray-200/50 dark:bg-[#172a45]/60 dark:border-[#64ffda]/30 dark:shadow-[#64ffda]/10 transition-all duration-300 hover:shadow-lg space-y-4 text-center">
          {decisions.map((decision, idx) => {
            let pdf = findPdf(decision);

            const overrides: Record<number, string> = {
              0: "Odluka-o-izboru-najpovoljnijeg-ponudjaca-nabavka-el-energije.pdf",
              1: "Odluka-o-izboru-najpovoljnijeg-ponudjaca-usluga-odvoza-smeca.pdf",
              2: "Odluka-o-izboru-najpovoljnijeg-ponudjaca-LOT-2-geomehanicko-ispitivanje.pdf",
              3: "Odluka-o-izboru-najpovoljineg-ponudjaca-LOT-1-geodetsko-snimanje.pdf",
              4: "Odluka-o-izboru-najpovoljnijeg-ponudjaca-nabavaka-pumpe-za-vozilo-DEICER.pdf",
              5: "Odluka-o-izboru-najpovoljnijeg-ponudjaca-nabavka-metlica-za-aerodromske-cetke.pdf",
              6: "Odluka-o-izboru-najpovoljnijeg-ponudjaca-materijal-za-odrzavanje-cistoce.pdf",
              7: "Odluka-o-izboru-najpovljnijeg-ponudjaca-revizija-finansijkih-izvjestaja.pdf",
              8: "Odluka-o-izboru-najpovoljnige-ponudjaca-kancelarijski-materijal.pdf",
              9: "Odluka-o-izboru-najpovoljnijeg-ponudjaca-nabavka-rekuperatora.pdf",
              10: "Odluka-o-izboru-najpovoljnijeg-ponudjaca-za-nabavku-usluga-revizije-trafo-stanica-i-elektro-postrojenja.pdf",
              11: "Odluka-o-izboru-najpovoljnijeg-ponudjaca-za-nabavku-usluga-osiguranja-radnika-od-nesretnog-slucaja-lot-1.pdf",
              12: "Odluka-o-izboru-najpovoljnijeg-ponudjaca-za-nabavku-usluga-osiguranja-od-odgovornosti-lot-2.pdf",
              13: "Odluka-o-izboru-najpovoljnijeg-ponudjaca-nabavka-usluge-izrade-glavnog-projekta-svjetlosnog-obiljezavanja-centralne-linije-pss.pdf",
              14: "Odluka-o-izboru-najpovoljnijeg-ponudjaca-za-nabavku-uredjaja-za-zastitu-racunarske-mreze-i-informacionog-sistema-na-jp-mat.pdf",
              15: "Odluka-o-izboru-najpovoljnijeg-ponudjaca-za-nabavku-invlidskih-kolica-za-ukrcavanje-i-iskrcavanje-putnika-na-elektricni-pogon-na-JP-MAT.pdf",
              16: "Odluka-o-izboru-najpovoljnijeg-ponudjaca-za-nabavku-komunalnih-usluga-usluga-odvoza-smeca.pdf",
              17: "Odluka-o-izboru-najpovoljnijeg-ponudjaca-za-nabavku-bravarskih-radova-na-izlaznom-GATE-u.pdf",
              18: "Odluka-o-izboru-najpovoljnijeg-ponudjaca-za-nabavku-kabina-za-rent-a-car.pdf",
              19: "Odluka-o-izboru-najpovoljnijeg-ponudjaca-za-nabavku-stolica-za-javni-prostor.pdf",
              20: "Odluka-o-izboru-najpovoljnijeg-ponudjaca-za-nabavku-vatrogasnog-intervencijskog-odijela-i-izolacionih-aparata-za-disanje.pdf",
              21: "Odluka-o-izboru-najpovoljnijeg-ponudjaca-za-nabavku-PUTNICKIH-STEPENICA.pdf",
              22: "Odluka-o-izboru-najpovoljnijeg-ponudjaca-za-nabavku-svjetleceg-logotipa-JP-MAT.pdf",
              23: "Odluka-o-izboru-najpovoljnijeg-ponudjaca-KOLICA-ZA-PRTLJAG-II.pdf",
              24: "Odluka-o-izboru-najpovoljnijeg-ponudjaca-za-nabavku-Fluida-za-odledjivanje-2023.pdf",
              25: "Odluka-o-izboru-najpovoljnijeg-ponudjaca-za-nabavku-rendgen-uredjaja-i-md-vrata.pdf",
              26: "Odluka-o-izboru-najpovoljnijeg-ponudjaca-VOZILO-ZA-ODLEDJIVANJE.pdf",
              27: "Odluka-o-izboru-najpovoljnijeg-ponudjaca-NISKOPODNI-AUTOBUSI.pdf",
              28: "Odluka-o-izboru-najpovoljnijeg-ponudjaca-RADOVI-PORTIRNICA.pdf",
              29: "Odluka-o-izbiru-najpovoljnijeg-ponudjaca-KOLICA-ZA-PRTLJAG.pdf",
              30: "Odluka-o-izboru-najpovoljnijeg-ponudjaca-GPU-AGREGAT.pdf",
              31: "Odluka-o-izboru-najpovoljnijeg-ponudjaca-INVALIDSKA-KOLICA.pdf",
              32: "Odluka-o-izboru-trecerangiranog-ponudjaca-za-izradu-studije-izvodljivosti.pdf",
              33: "Odluka-o-izboru-najpovoljnijeg-ponudjaca-za-nabavku-masine-za-brisanje-plocica-hola-i-prenosivog-rucnog-baterijskog-usisivaca.pdf",
              34: "Odluka-o-izboru-drugorangiranog-ponudjaca-za-izradu-studije-izvodljivosti.pdf",
              35: "Odluka-o-izboru-najpovoljnijeg-ponudjaca-za-nabavku-DCS-sistema.pdf",
              36: "Odluka-o-izboru-najpovoljnijeg-ponudjaca-za-nabavku-niskopodnih-autobusa.pdf",
              37: "Odluka-o-izboru-najpovoljnijeg-ponudjaca-za-nabavku-goriva-2023.pdf",
              38: "Odluka-o-izboru-najpovoljnijeg-ponudjaca-radovi-nadstresnica.pdf",
              39: "ODLUKA-o-izboru-najpovoljnijeg-ponudjaca-Sistem-za-kancelarijsko-poslovanje-DMS.pdf",
              40: "Odluka-o-izboru-traktor-na-elektricni-pogon.pdf",
              41: "Odluka-o-izboru-LOT-3.pdf",
              42: "Odluka-o-izboru-LOT-1.pdf",
              43: "Odluka-o-izboru-najpovoljnijeg-ponudjaca-zdravstvene-usluge.pdf",
              44: "Odluka-o-izboru-najpovoljnijeg-ponudjaca-za-nabavku-uree-za-zimsko-odrzavanje.pdf",
              45: "Odluka-o-izboru-za-nabavku-rude-sa-prikljucnim-glavama.pdf",
              46: "Odluka-o-izboru-za-nabavku-poravka-X-ray-uredjaja.pdf",
              47: "Odluka-o-izboru-LOT-2-tecnost-za-odledjivanje.pdf",
              49: "Odluka-o-izboru-ponudjaca-za-nabavku-radova-parking.pdf",
              50: "Odluka-o-izboru-radovi-nadogradnje-izlazni-gate.pdf",
              51: "Odluka-o-izboru-ponudjaca-za-nabavku-bankarskih-usluga.pdf",
              52: "Odluka-o-izboru-ponudjaca-za-nabavku-rude.pdf",
              53: "Odluka-o-izboru-ponudjaca-oprema-za-parking.pdf",
              55: "Odluka-o-izboru-najpovoljnjijeg-ponudjaca.pdf",
              57: "Odluka-o-izboru-najpovoljnijeg-ponudjaca-Osiguranje-od-odgovornosti.pdf",
              58: "Odluka-o-izboru-najpovoljnijeg-ponudjaca.pdf",
              59: "20220209094521.pdf",
              62: "OdlukaMiddlepointKDZ.pdf",
              48: "ODLUKA-O-IZBORU-TEKUCINA-ZA-PSS.pdf",
              54: "Odluka-o-dodjeli-Urea-za-zimsko-odrzavanje-PSS.pdf",
              56: "Odluka-o-izboru-Urea-Hifa-Oil.pdf",
              60: "Odluka-o-izboru-Oznake-za-prtljag.pdf",
              61: "ODLUKA-O-IZBORU_VATROGASNA-ODIJELA-ZA-ULAZAK-U-VATRU.pdf",
              63: "ODLUKA-O-IZBORU-NABAVKA-REZERVNIH-DIJELOVA-I-SERVISIRANJE.pdf",
              64: "ODLUKA-O-IZBORU-OBLOGE-FASADE-PLOCAMA.pdf",
              65: "ODLUKA-O-IZBORU-MASINSKI-RADOVI.pdf",
              66: "ODLUKA-O-IZBORU-TEKUCINA-ZA-PSS.pdf",
              67: "ODLUKA-O-IZBORU-VODOVOD-I-KANALIZACIJE.pdf",
              68: "ODLUKA-O-IZBORU-NABAVKA-RADOVA-CARINSKO-SKLADISTE.pdf",
              69: "ODLUKA-O-IZBORU-NABAVKA-UREE.pdf",
              71: "ODLUKA-O-IZBORU-PUMPNO-FILTERSKO-POSTROJENJE.pdf",
              72: "ODLUKA-O-IZBORU-TRAKTOR.pdf",
              73: "ODLUKA-O-IZBORU-CITAC-TABLICA.pdf",
              74: "ODLUKA-O-IZBORU-STRUCNO-USAVRSAVANJE.pdf",
              75: "ODLUKA-IZBOR-KREDITNO-ZADUZENJE.pdf",
              76: "ODLUKA-IZBOR-REZERVNI-DIO-X-RAY.pdf",
              77: "ODLUKA-O-IZBORU-NADZOR.pdf",
              78: "ODLUKA-O-IZBORU-OZNAKE.pdf",
              79: "ODLUKA-AUTOMOBIL.pdf",
              80: "ODLUKA-GLAVNI-PROJEKAT.pdf"
            };

            if (overrides[idx]) pdf = overrides[idx];

            // Attempt filename-based matching for the rest
            if (!pdf) {
              const slug = "Odluka-o-izboru-" + decision
                .toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/-+/g, '-')
                .replace(/^-|-$/g, '') + ".pdf";

              pdf = pdfFiles.find((file) => file.toLowerCase() === slug);
            }

            return (
              <div
                key={idx}
                className="p-4 rounded-lg border border-gray-300 dark:border-[#64ffda]/30 bg-white/50 dark:bg-[#172a45]/50 shadow hover:shadow-md transition-all duration-300 space-y-2"
              >
                {pdf ? (
                  <a
                    href={`/files/odluke o izboru najpovoljnijeg ponuđača/${pdf}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-[#64ffda] font-semibold uppercase transition-colors"
                  >
                    {`${idx + 1}. ${decision.toUpperCase()}`}
                  </a>
                ) : (
                  <p className="block text-gray-500 dark:text-gray-400 font-semibold uppercase">
                    {`${idx + 1}. ${decision.toUpperCase()}`}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

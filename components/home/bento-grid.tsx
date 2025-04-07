"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Armchair, Luggage, FileText, MapPin, AlertCircle, HelpCircle } from "lucide-react"
import Link from "next/link"

const bentoItems = [
  {
    title: "PRM",
    description: "Pomoć putnicima sa smanjenom pokretljivošću",
    icon: Armchair,
    href: "/prm",
    styleClass: "bg-[#172a45]/20 backdrop-blur-md"
  },
  {
    title: "Izgubljeni prtljag",
    description: "Procedura za pronalazak izgubljenog prtljaga",
    icon: Luggage,
    href: "/izgubljeni-prtljag",
    styleClass: "bg-blue-900/20 backdrop-blur-lg"
  },
  {
    title: "Javne nabavke",
    description: "Pregled aktuelnih javnih nabavki",
    icon: FileText,
    href: "/javne-nabavke",
    styleClass: "bg-indigo-900/20 backdrop-blur-xl"
  },
  {
    title: "Kako do nas",
    description: "Upute za dolazak do aerodroma",
    icon: MapPin,
    href: "/kako-do-nas",
    styleClass: "bg-sky-900/20 backdrop-blur-2xl"
  },
  {
    title: "Korisni savjeti",
    description: "Savjeti za ugodno putovanje",
    icon: HelpCircle,
    href: "/savjeti",
    styleClass: "bg-purple-900/20 backdrop-blur-md"
  },
  {
    title: "Važne informacije",
    description: "Aktuelne informacije za putnike",
    icon: AlertCircle,
    href: "/informacije",
    styleClass: "bg-pink-900/20 backdrop-blur-lg"
  }
]

export function BentoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
      {bentoItems.map((item) => {
        const Icon = item.icon
        return (
          <Link href={item.href} key={item.title}>
            <Card className={`bento-card-${bentoItems.indexOf(item) + 1} h-full rounded-[15px] shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:bg-[#172a45]/30 ${item.styleClass}`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon className="h-5 w-5 text-[#64ffda]" />
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#8892b0]">{item.description}</p>
              </CardContent>
            </Card>
          </Link>
        )
      })}
    </div>
  )
}

"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plane, PlaneLanding } from "lucide-react"
import { Button } from "@/components/ui/button"

type Flight = {
  time: string
  destination: string
  airline: string
  flightNumber: string
  status: string
}

const mockArrivals: Flight[] = [
  { time: "10:00", destination: "Athen", airline: "Aviopmez", flightNumber: "AV123", status: "Na vrijeme" },
  { time: "10:20", destination: "Dobitnia", airline: "Nijo komp.", flightNumber: "NK456", status: "Kasni" },
  { time: "10:20", destination: "Pragusan", airline: "Aviokomp.", flightNumber: "AK789", status: "Na vrijeme" },
]

const mockDepartures: Flight[] = [
  { time: "11:45", destination: "Basel", airline: "Wizz Air", flightNumber: "W62848", status: "Na vrijeme" },
  { time: "16:20", destination: "Stockholm", airline: "Wizz Air", flightNumber: "W62849", status: "Na vrijeme" },
]

function FlightTable({ flights }: { flights: Flight[] }) {
  return (
    <div className="relative overflow-x-auto">
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">Datum</Button>
          <Button variant="outline" size="sm">Vrijeme</Button>
        </div>
      </div>
      <table className="w-full text-sm text-left">
        <thead className="text-xs uppercase bg-[#172a45]/50">
          <tr>
            <th scope="col" className="px-6 py-3">Vrijeme</th>
            <th scope="col" className="px-6 py-3">Destinacija</th>
            <th scope="col" className="px-6 py-3">Prijevoznik</th>
            <th scope="col" className="px-6 py-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight, index) => (
            <tr key={index} className="border-b border-[#172a45]/30">
              <td className="px-6 py-4 font-medium">{flight.time}</td>
              <td className="px-6 py-4">{flight.destination}</td>
              <td className="px-6 py-4">{flight.airline}</td>
              <td className="px-6 py-4">
                <span className={`px-2 py-1 rounded text-xs ${
                  flight.status === "Na vrijeme" 
                    ? "bg-green-500/20 text-green-400"
                    : "bg-yellow-500/20 text-yellow-400"
                }`}>
                  {flight.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function FlightSchedule() {
  return (
    <Card className="bg-[#172a45]/20 backdrop-blur-2xl border border-white/20 shadow-2xl">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-2xl">Raspored letova</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="dolasci">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="dolasci" className="flex items-center gap-2">
              <PlaneLanding className="h-4 w-4" />
              Dolasci
            </TabsTrigger>
            <TabsTrigger value="odlasci" className="flex items-center gap-2">
              <Plane className="h-4 w-4" />
              Odlasci
            </TabsTrigger>
          </TabsList>
          <TabsContent value="dolasci">
            <FlightTable flights={mockArrivals} />
          </TabsContent>
          <TabsContent value="odlasci">
            <FlightTable flights={mockDepartures} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

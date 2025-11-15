import { createClient } from "@/lib/supabase/server"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

interface Ambassador {
  id: string
  name: string
  bio: string | null
  image_url: string | null
}

export default async function AmbassadorsPage() {
  const supabase = await createClient()

  const { data: ambassadors, error } = await supabase
    .from("ambassadors")
    .select("*")

  if (error) {
    console.error("[v0] Error fetching ambassadors:", error)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">Нашите посланици</h1>
        <p className="mx-auto max-w-2xl text-balance text-lg text-muted-foreground">
          Запознайте се с нашите посланици, които вдъхновяват и водят пътя към по-добро бъдеще чрез своите инициативи и ангажираност.
        </p>
      </div>

      {ambassadors && ambassadors.length > 0 ? (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {ambassadors.map((ambassador: Ambassador) => (
            <Card key={ambassador.id} className="overflow-hidden">
              <div className="relative aspect-square">
                <Image
                  src={ambassador.image_url || "/placeholder.svg?height=400&width=400"}
                  alt={ambassador.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="pt-6">
                <div className="mb-2 flex items-start justify-between">
                  <h3 className="text-xl font-semibold">{ambassador.name}</h3>
                </div>
                {ambassador.bio && <p className="text-sm text-muted-foreground leading-relaxed">{ambassador.bio}</p>}
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="py-12 text-center">
          <p className="text-muted-foreground">No ambassadors found. Please check back later.</p>
        </div>
      )}
    </div>
  )
}

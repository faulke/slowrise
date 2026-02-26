import Image from "next/image"
import { MapPin } from "lucide-react"

const stockists = [
  {
    name: "Pybus Public Market",
    location: "Wenatchee, WA",
    type: "Market",
  },
  {
    name: "Badger Mountain Brewing",
    location: "Wenatchee, WA",
    type: "Brewery",
  },
  {
    name: "The Owl Soda Fountain",
    location: "Leavenworth, WA",
    type: "Shop",
  },
  {
    name: "Columbia Valley Brewing",
    location: "East Wenatchee, WA",
    type: "Brewery",
  },
  {
    name: "Chelan Valley Farms",
    location: "Chelan, WA",
    type: "Farm Stand",
  },
  {
    name: "Wally's House of Booze",
    location: "Wenatchee, WA",
    type: "Shop",
  },
]

export function Stockists() {
  return (
    <section id="find-us" className="py-24 md:py-32 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image */}
          <div className="relative aspect-[4/3] lg:aspect-auto rounded-sm overflow-hidden">
            <Image
              src="/images/stockists-brewery.jpg"
              alt="Interior of a cozy local taproom with warm lighting and artisan snacks"
              fill
              className="object-cover"
            />
          </div>

          {/* Stockists list */}
          <div>
            <p className="text-xs tracking-widest uppercase text-primary font-medium mb-4">
              Find Us
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight text-foreground text-balance">
              Local spots. Real shelves.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We keep things close to home. Here are some of our favorite places that carry Slowrise Snacks.
            </p>

            <div className="mt-10 divide-y divide-border">
              {stockists.map((spot) => (
                <div key={spot.name} className="flex items-start gap-4 py-4">
                  <MapPin className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">{spot.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {spot.location}
                      <span className="mx-2 text-border">{"/"}</span>
                      {spot.type}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm text-muted-foreground">
              Want to carry Slowrise?{" "}
              <a href="#contact" className="text-primary underline underline-offset-4 hover:text-foreground transition-colors">
                Get in touch
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

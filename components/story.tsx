import Image from "next/image"

export function Story() {
  return (
    <section id="story" className="py-24 md:py-32 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section label */}
        <p className="text-xs tracking-widest uppercase text-primary font-medium mb-12">
          Our Story
        </p>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Text side */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-foreground text-balance">
              Good things take time. We took that literally.
            </h2>
            <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Slowrise started the way all good things do around here: with a sourdough starter, a kitchen that smelled incredible, and way too many snacks to keep to ourselves.
              </p>
              <p>
                We&apos;re based in Wenatchee, in the heart of North Central Washington&apos;s Columbia River Valley. Our snacks are fermented low and slow, baked in small batches, and made with ingredients we actually want to eat. No rush. No shortcuts.
              </p>
              <p>
                You&apos;ll find us at local shops, taprooms, and farmers markets across the valley. We believe great snacks should come from real places and real people, not a factory floor.
              </p>
            </div>
          </div>

          {/* Image side */}
          <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
            <Image
              src="/images/valley-landscape.jpg"
              alt="Columbia River Valley landscape near Wenatchee, Washington with orchards and rolling hills"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

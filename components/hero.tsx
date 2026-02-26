import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-end pb-16 md:pb-24">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-snacks.jpg"
          alt="Artisan sourdough crackers and snacks arranged on a rustic cutting board"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      <div className="mx-auto max-w-6xl px-6 w-full">
        <div className="max-w-2xl">
          <p className="text-sm tracking-widest uppercase text-accent font-medium mb-4">
            Wenatchee, WA
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight text-foreground text-balance">
            Slowrise Snacks
          </h1>
          <p className="mt-6 text-lg md:text-xl leading-relaxed text-muted-foreground max-w-lg">
            Small-batch sourdough snacks with simple ingredients that rise with epic flavor and wander wherever you do.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#snacks"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground text-sm tracking-wide uppercase rounded-sm hover:opacity-90 transition-opacity"
            >
              See the Snacks
            </a>
            <a
              href="#find-us"
              className="inline-flex items-center px-6 py-3 border border-foreground/30 text-foreground text-sm tracking-wide uppercase rounded-sm hover:bg-foreground hover:text-background transition-colors"
            >
              Find our products
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

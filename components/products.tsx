import Image from "next/image"

const products = [
  {
    name: "Rosemary & Sea Salt Crackers",
    description:
      "Crispy, tangy sourdough crackers with rosemary from the garden and flaky Jacobsen sea salt. Perfect alongside a sharp cheddar or straight out of the bag.",
    image: "/images/product-crackers.jpg",
    alt: "Artisan sourdough crackers showing bubbly fermented texture",
  },
  {
    name: "Pretzel Bites",
    description:
      "Chewy-crisp sourdough pretzel bites with a deep malty crust and coarse salt. Made to go with a cold pint at your favorite local taproom.",
    image: "/images/product-pretzels.jpg",
    alt: "Golden sourdough pretzel bites in a rustic ceramic bowl with sea salt",
  },
  {
    name: "Everything Breadsticks",
    description:
      "Long, snappy sourdough breadsticks loaded with sesame, poppy, garlic, and onion. Basically everything good on a stick.",
    image: "/images/product-breadsticks.jpg",
    alt: "Sourdough breadsticks arranged in a jar with artisan packaging",
  },
]

export function Products() {
  return (
    <section
      id="snacks"
      className="py-24 md:py-32 bg-secondary scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs tracking-widest uppercase text-primary font-medium mb-4">
          The Goods
        </p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight text-secondary-foreground text-balance">
          Small batch. Big flavor.
        </h2>
        <p className="mt-4 max-w-xl text-muted-foreground leading-relaxed">
          Every batch starts with our house sourdough culture, local flour, and a whole lot of patience. Here&apos;s what we&apos;re baking.
        </p>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <article key={product.name} className="group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-muted">
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-6">
                <h3 className="font-serif text-xl text-secondary-foreground">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

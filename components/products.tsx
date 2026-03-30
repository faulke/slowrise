import Image from "next/image"

const products = [
  {
    name: "Parmesan Garlic Crackers",
    description:
      "Crispy, tangy sourdough crackers with parmesan cheese and a hint of garlic, topped with flaky sea salt.",
    image: "/images/product-crackers.jpg",
    alt: "Artisan sourdough crackers showing bubbly fermented texture",
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

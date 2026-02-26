export function Process() {
  const steps = [
    {
      number: "01",
      title: "Feed the Starter",
      description:
        "It all begins with our house sourdough culture. She's been alive and kicking for years, fed daily with stone-ground flour and clean water.",
    },
    {
      number: "02",
      title: "Mix & Rest",
      description:
        "We mix small batches by hand and let the dough ferment naturally. No commercial yeast, no dough conditioners. Just time doing its thing.",
    },
    {
      number: "03",
      title: "Shape & Bake",
      description:
        "Each piece is shaped, scored, and baked until golden. We watch every batch and pull them when they're exactly right.",
    },
    {
      number: "04",
      title: "Pack & Share",
      description:
        "Cooled, packed by hand, and delivered to our neighbors. From our kitchen to the shelves of local spots you already love.",
    },
  ]

  return (
    <section className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs tracking-widest uppercase opacity-60 mb-4">
          Our Process
        </p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight text-balance">
          Four steps. No shortcuts.
        </h2>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {steps.map((step) => (
            <div key={step.number}>
              <span className="font-serif text-5xl text-accent/30">
                {step.number}
              </span>
              <h3 className="mt-2 font-serif text-lg">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed opacity-70">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

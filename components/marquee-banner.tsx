"use client"

export function MarqueeBanner() {
  const items = [
    "Sourdough Crackers",
    "Pretzel Bites",
    "Breadsticks",
    "Small Batch",
    "Wild Culture",
    "Wenatchee WA",
    "Columbia River Valley",
    "Slow Fermented",
  ]

  const repeatedItems = [...items, ...items]

  return (
    <div className="bg-accent text-accent-foreground overflow-hidden py-3">
      <div className="animate-marquee flex whitespace-nowrap">
        {repeatedItems.map((item, i) => (
          <span key={i} className="mx-6 text-xs tracking-widest uppercase">
            {item}
            <span className="mx-6 opacity-40">{"*"}</span>
          </span>
        ))}
      </div>
    </div>
  )
}

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { MarqueeBanner } from "@/components/marquee-banner"
import { Story } from "@/components/story"
import { Products } from "@/components/products"
import { Process } from "@/components/process"
import { Stockists } from "@/components/stockists"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <MarqueeBanner />
      <Story />
      <Products />
      <Process />
      <Stockists />
      <Footer />
    </main>
  )
}

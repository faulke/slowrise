import { Instagram, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-card py-20 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <p className="font-serif text-2xl tracking-tight text-card-foreground">
              Slowrise Snacks
            </p>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Small-batch sourdough snacks from the Columbia River Valley. Made slow. Made right.
            </p>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs tracking-widest uppercase text-primary font-medium mb-4">
              Get in Touch
            </p>
            <div className="space-y-3">
              <a
                href="mailto:hello@slowrisesnacks.com"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-card-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                hello@slowrisesnacks.com
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-card-foreground transition-colors"
              >
                <Instagram className="h-4 w-4" />
                @slowrisesnacks
              </a>
            </div>
          </div>

          {/* Location */}
          <div>
            <p className="text-xs tracking-widest uppercase text-primary font-medium mb-4">
              Based in
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Wenatchee, Washington
              <br />
              North Central WA
              <br />
              Columbia River Valley
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            {"Slowrise Snacks. All rights reserved."}
          </p>
          <p className="text-xs text-muted-foreground">
            Made with patience and wild yeast.
          </p>
        </div>
      </div>
    </footer>
  )
}

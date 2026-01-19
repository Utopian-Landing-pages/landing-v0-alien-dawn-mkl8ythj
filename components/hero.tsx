import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-card" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="flex flex-col items-center justify-center space-y-8 max-w-5xl mx-auto">
          {/* Logo/Title */}
          <div className="space-y-2">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-balance">
              ALIEN DAWN
            </h1>
            <div className="h-1 w-32 bg-accent mx-auto" />
          </div>

          {/* Tagline */}
          <p className="text-xl md:text-3xl lg:text-4xl font-light text-muted-foreground max-w-3xl text-balance leading-relaxed">
            {'Compelling characters with morally gray aspects'}
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl text-pretty">
            {'A realistic, modern-day platformer targeted at adults. Experience a narrative where your choices define the outcome and characters evolve with complex motivations.'}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="text-base px-8 py-6 bg-foreground text-background hover:bg-foreground/90">
              {'Get Early Access'}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 py-6 bg-transparent">
              {'Watch Trailer'}
            </Button>
          </div>

          {/* Badge */}
          <div className="pt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span className="text-sm text-muted-foreground">{'In Development'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-card to-transparent" />
    </section>
  )
}

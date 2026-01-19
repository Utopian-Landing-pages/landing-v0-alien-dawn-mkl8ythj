import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Alex Chen',
    role: 'Game Reviewer',
    quote: 'The morally gray characters kept me hooked. Choices actually matter and the consequences feel real.',
    initials: 'AC'
  },
  {
    name: 'Jordan Blake',
    role: 'Platformer Enthusiast',
    quote: 'Finally, a platformer that respects my intelligence. The mature storytelling is refreshingly bold.',
    initials: 'JB'
  },
  {
    name: 'Sam Rivera',
    role: 'Indie Game Fan',
    quote: 'The realistic setting combined with character-driven gameplay creates something truly unique.',
    initials: 'SR'
  }
]

export default function Testimonials() {
  return (
    <section className="py-24 px-4 bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">
            {'What Players Are Saying'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {'Early feedback from playtesters and game industry veterans'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border bg-background/50 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex flex-col gap-4">
                  <Quote className="h-8 w-8 text-accent/30" />
                  <p className="text-base leading-relaxed text-foreground">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center gap-3 pt-2">
                    <Avatar>
                      <AvatarFallback className="bg-accent/10 text-accent border border-accent/20">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-sm">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

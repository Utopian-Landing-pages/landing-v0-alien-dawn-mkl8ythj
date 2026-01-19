import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Target, Users, Layers, Map } from 'lucide-react'

const features = [
  {
    icon: Target,
    title: 'Realistic World',
    description: 'Explore a gritty, believable modern setting',
    detail: 'Experience platforming with real-world consequences. Navigate urban landscapes, abandoned facilities, and hidden locations that feel authentic and lived-in.'
  },
  {
    icon: Users,
    title: 'Morally Gray Characters',
    description: 'Engage with complex motivations',
    detail: 'Every character has a story. Your allies today might become adversaries tomorrow. Build relationships that impact gameplay and narrative outcomes.'
  },
  {
    icon: Layers,
    title: 'Mature Storytelling',
    description: 'Experience narratives for adults',
    detail: 'Uncover secrets through layered storytelling. Make difficult decisions that challenge your morality and shape the world around you.'
  },
  {
    icon: Map,
    title: 'Dynamic Gameplay',
    description: 'Unique personalities affect mechanics',
    detail: 'Character traits influence movement, abilities, and interaction options. Each playthrough offers different strategic approaches based on your choices.'
  }
]

export default function Features() {
  return (
    <section className="py-24 px-4 bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">
            {'Key Features'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {'A platformer that respects your intelligence and craves depth over simplicity'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="border-border bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-colors">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                      <CardDescription className="text-base">{feature.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.detail}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

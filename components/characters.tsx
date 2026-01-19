import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const characters = [
  {
    name: 'The Survivor',
    role: 'Protagonist',
    trait: 'Resourceful but haunted',
    description: 'A former engineer forced to navigate a world that has turned hostile. Their technical skills are matched only by the weight of past decisions.'
  },
  {
    name: 'The Guide',
    role: 'Ally',
    trait: 'Knowledgeable but secretive',
    description: 'They know more than they reveal. Trust is earned slowly, and their true motivations remain shrouded in mystery until the final act.'
  },
  {
    name: 'The Enforcer',
    role: 'Antagonist',
    trait: 'Ruthless yet principled',
    description: 'Not a villain, but an opposing force with their own moral code. They believe the ends justify the means—at any cost.'
  }
]

export default function Characters() {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">
            {'Meet The Cast'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {'Characters with diverse backstories and unique personalities that directly affect gameplay'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {characters.map((character, index) => (
            <Card key={index} className="border-border bg-card hover:border-accent/50 transition-colors">
              <CardHeader>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl">{character.name}</CardTitle>
                    <span className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                      {character.role}
                    </span>
                  </div>
                  <CardDescription className="text-sm italic">
                    {character.trait}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {character.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

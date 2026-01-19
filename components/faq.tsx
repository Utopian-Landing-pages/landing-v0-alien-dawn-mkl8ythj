import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'What makes Alien Dawn different from other platformers?',
    answer: "Alien Dawn focuses on realistic, adult-oriented storytelling with morally gray characters. It's not about jumping on mushrooms—it's about navigating complex narratives where your choices have weight and consequences."
  },
  {
    question: 'How do character personalities affect gameplay?',
    answer: 'Each character has unique traits that influence movement mechanics, available abilities, and interaction options. For example, a character with technical skills might access different routes, while a charismatic character opens unique dialogue paths.'
  },
  {
    question: 'What platforms will Alien Dawn be available on?',
    answer: 'We are currently developing for PC (Steam), with console releases planned for PlayStation and Xbox following the initial launch. Stay tuned for specific release dates.'
  },
  {
    question: 'Is there multiplayer or co-op?',
    answer: 'Alien Dawn is a single-player experience focused on delivering a rich, narrative-driven adventure. We want to ensure the story and character development receive full attention without compromise.'
  },
  {
    question: 'When is the expected release date?',
    answer: 'We are currently in active development. Early access for supporters and beta testers is planned for late 2026, with a full release targeted for 2027. Sign up for our newsletter to get updates.'
  },
  {
    question: 'What inspired the morally gray character approach?',
    answer: 'We believe mature audiences deserve games that reflect the complexity of real human nature. Characters in Alien Dawn make decisions based on their backgrounds, beliefs, and circumstances—not simple good vs. evil dichotomies.'
  }
]

export default function FAQ() {
  return (
    <section className="py-24 px-4 bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">
            {'Frequently Asked Questions'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {'Everything you need to know about Alien Dawn'}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-background/50 backdrop-blur-sm"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-medium text-base">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

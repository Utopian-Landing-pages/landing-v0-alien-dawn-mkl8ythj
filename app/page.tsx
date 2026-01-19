import Hero from '@/components/hero'
import Features from '@/components/features'
import Characters from '@/components/characters'
import Testimonials from '@/components/testimonials'
import CTA from '@/components/cta'
import FAQ from '@/components/faq'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Characters />
      <Testimonials />
      <CTA />
      <FAQ />
      <Footer />
    </main>
  )
}

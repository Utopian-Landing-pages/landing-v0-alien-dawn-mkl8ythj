'use client'

import React from "react"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Mail } from 'lucide-react'

export default function CTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission
    console.log('[v0] Email submitted:', email)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setEmail('')
    }, 3000)
  }

  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <Card className="border-border bg-card">
            <div className="p-8 md:p-12 text-center space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
                  {'Ready to Experience Realistic Platforming?'}
                </h2>
                <p className="text-base md:text-lg text-muted-foreground text-pretty">
                  {'Sign up for early access and exclusive updates. Be among the first to explore Alien Dawn.'}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 pt-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="sr-only">
                    Email address
                  </Label>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-1">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="pl-10 h-11 bg-background"
                      />
                    </div>
                    <Button type="submit" size="lg" className="h-11 px-8 bg-foreground text-background hover:bg-foreground/90">
                      {submitted ? 'Subscribed!' : 'Get Notified'}
                    </Button>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  {'We respect your privacy. Unsubscribe at any time.'}
                </p>
              </form>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

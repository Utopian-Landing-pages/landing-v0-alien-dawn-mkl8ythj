import { Github, Twitter, Youtube, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">ALIEN DAWN</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {'A realistic platformer for adults who crave depth, complexity, and moral ambiguity.'}
            </p>
          </div>

          {/* Game */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm">Game</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#characters" className="hover:text-foreground transition-colors">Characters</a></li>
              <li><a href="#story" className="hover:text-foreground transition-colors">Story</a></li>
              <li><a href="#gameplay" className="hover:text-foreground transition-colors">Gameplay</a></li>
            </ul>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm">Community</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#news" className="hover:text-foreground transition-colors">News</a></li>
              <li><a href="#forum" className="hover:text-foreground transition-colors">Forum</a></li>
              <li><a href="#support" className="hover:text-foreground transition-colors">Support</a></li>
              <li><a href="#press" className="hover:text-foreground transition-colors">Press Kit</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm">Connect</h4>
            <div className="flex gap-2">
              <Button size="icon" variant="outline" className="h-9 w-9 bg-transparent">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button size="icon" variant="outline" className="h-9 w-9 bg-transparent">
                <Youtube className="h-4 w-4" />
                <span className="sr-only">YouTube</span>
              </Button>
              <Button size="icon" variant="outline" className="h-9 w-9 bg-transparent">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
              <Button size="icon" variant="outline" className="h-9 w-9 bg-transparent">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            {'© 2026 Alien Dawn. All rights reserved.'}
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#privacy" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#cookies" className="hover:text-foreground transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

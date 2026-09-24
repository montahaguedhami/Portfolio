import Image from 'next/image'
import { Code2, Share, Mail, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5 pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left column - Text content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
                Montaha Guedhami
              </span>
              <br />
              Software Engineer
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Software engineering student focused on backend development, DevOps, AI, and thoughtful user experiences. I enjoy turning complex ideas into practical, reliable products.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white group"
            >
              Explore My Work
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:bg-card/50"
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 pt-4">
            <span className="text-sm font-medium text-foreground/60">Connect with me:</span>
            <div className="flex gap-3">
              <a
                href="https://github.com/montahaguedhami"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-card hover:bg-card/80 hover:text-primary transition-all duration-200 group"
              >
                <Code2 className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-card hover:bg-card/80 hover:text-primary transition-all duration-200"
              >
                <Share className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-card hover:bg-card/80 hover:text-primary transition-all duration-200"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right column - Profile Image */}
        <div className="relative h-96 md:h-full min-h-96 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl" />
          <div className="relative w-80 h-80 rounded-2xl overflow-hidden border border-border/50 shadow-2xl hover:shadow-primary/20 transition-all duration-300">
            <Image
              src="/profile.png"
                alt="Montaha Guedhami"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

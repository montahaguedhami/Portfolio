import { Code2, Share, Mail, MoreHorizontal } from 'lucide-react'
import { navItems } from '@/lib/site-content'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/50 py-12 px-6 bg-gradient-to-t from-card/20 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
              Montaha Guedhami
            </h3>
            <p className="text-sm text-foreground/60">
              Software engineering student exploring backend, DevOps, and UX/UI.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {navItems.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-foreground/60 hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/montahaguedhami"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-card border border-border hover:border-primary hover:text-primary transition-all duration-200"
              >
                <Code2 className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-card border border-border hover:border-primary hover:text-primary transition-all duration-200"
              >
                <MoreHorizontal className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-card border border-border hover:border-primary hover:text-primary transition-all duration-200"
              >
                <Share className="w-5 h-5" />
              </a>
              <a
                href="mailto:montaha.guedhami@esprit.tn"
                className="p-2 rounded-lg bg-card border border-border hover:border-primary hover:text-primary transition-all duration-200"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/50 pt-8">
          <p className="text-center text-sm text-foreground/50">
            © {currentYear} Montaha Guedhami. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

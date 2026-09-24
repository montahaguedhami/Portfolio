'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Command, Moon, Sun } from 'lucide-react'
import { useCommandPalette, useTheme } from '@/components/site-provider'
import { navItems } from '@/lib/site-content'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const { openPalette } = useCommandPalette()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="#home"
          className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
        >
          Montaha Guedhami
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={openPalette}
            className="hidden md:inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-card border border-border/60 text-sm text-foreground/70 hover:text-foreground hover:border-primary/50 transition-colors duration-200"
          >
            <Command className="w-4 h-4" />
            <span>Cmd K</span>
          </button>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-card hover:bg-card/80 border border-border/60 transition-colors duration-200"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-foreground" />
            ) : (
              <Moon className="w-5 h-5 text-foreground" />
            )}
          </button>
        </div>
      </div>
    </nav>
  )
}

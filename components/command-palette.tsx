'use client'

import { useMemo, useState } from 'react'
import { Search, Sparkles } from 'lucide-react'
import { blogPosts, caseStudies, navItems } from '@/lib/site-content'
import { useCommandPalette, useTheme } from '@/components/site-provider'

type CommandItem = {
  label: string
  description: string
  href?: string
  action?: () => void
  keywords: string[]
}

export function CommandPalette() {
  const [search, setSearch] = useState('')
  const { isOpen, closePalette } = useCommandPalette()
  const { theme, toggleTheme } = useTheme()

  const items = useMemo<CommandItem[]>(
    () => [
      ...navItems.map((item) => ({
        label: item.label,
        description: `Jump to the ${item.label.toLowerCase()} section`,
        href: item.href,
        keywords: [item.label.toLowerCase(), item.href.replace('#', '')],
      })),
      {
        label: 'Toggle theme',
        description: `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`,
        action: toggleTheme,
        keywords: ['theme', 'dark', 'light'],
      },
      {
        label: 'Open blog',
        description: 'Read the MDX writing collection',
        href: '/blog',
        keywords: ['blog', 'writing', 'mdx'],
      },
      {
        label: 'Open case studies',
        description: 'Explore detailed project decisions',
        href: '/case-studies',
        keywords: ['case studies', 'projects', 'decisions'],
      },
      ...blogPosts.map((post) => ({
        label: post.title,
        description: post.excerpt,
        href: `/blog/${post.slug}`,
        keywords: [post.title, post.slug, 'article'],
      })),
      ...caseStudies.map((study) => ({
        label: study.title,
        description: study.summary,
        href: `/case-studies#${study.slug}`,
        keywords: [study.title, study.slug, 'case study'],
      })),
    ],
    [theme, toggleTheme],
  )

  const filteredItems = items.filter((item) => {
    const query = search.toLowerCase()
    return (
      item.label.toLowerCase().includes(query) ||
      item.keywords.some((keyword) => keyword.toLowerCase().includes(query))
    )
  })

  if (!isOpen) {
    return null
  }

  const handleSelect = (item: CommandItem) => {
    closePalette()

    if (item.action) {
      item.action()
      return
    }

    if (item.href?.startsWith('#')) {
      const target = document.querySelector(item.href)
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return
    }

    if (item.href) {
      window.location.href = item.href
    }
  }

  return (
    <div className="fixed inset-0 z-[80] flex items-start justify-center bg-background/75 px-4 pt-24 backdrop-blur-sm">
      <div className="w-full max-w-2xl overflow-hidden rounded-3xl border border-border/70 bg-card shadow-2xl">
        <div className="flex items-center gap-3 border-b border-border/70 px-4 py-4">
          <Search className="h-4 w-4 text-foreground/45" />
          <input
            autoFocus
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Type a command or section..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-foreground/40"
          />
          <span className="rounded-full border border-border/60 px-2 py-1 text-[11px] text-foreground/50">
            Esc
          </span>
        </div>
        <div className="max-h-[60vh] overflow-y-auto p-2">
          {filteredItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleSelect(item)}
              className="flex w-full items-start gap-3 rounded-2xl px-4 py-3 text-left transition-colors hover:bg-muted"
            >
              <div className="mt-1 rounded-full bg-primary/10 p-2 text-primary">
                <Sparkles className="h-4 w-4" />
              </div>
              <div>
                <div className="text-sm font-medium">{item.label}</div>
                <div className="text-sm text-foreground/55">{item.description}</div>
              </div>
            </button>
          ))}
          {filteredItems.length === 0 ? (
            <div className="px-4 py-10 text-center text-sm text-foreground/55">
              No matching commands.
            </div>
          ) : null}
        </div>
      </div>
      <button className="absolute inset-0 -z-10" aria-label="Close command palette" onClick={closePalette} />
    </div>
  )
}
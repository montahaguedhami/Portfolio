'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

type Theme = 'light' | 'dark'

type ThemeContextValue = {
  theme: Theme
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
}

type CommandPaletteContextValue = {
  openPalette: () => void
  closePalette: () => void
  isOpen: boolean
}

const ThemeContext = createContext<ThemeContextValue | null>(null)
const CommandPaletteContext = createContext<CommandPaletteContextValue | null>(null)

export function useTheme() {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used within SiteProvider')
  }

  return context
}

export function useCommandPalette() {
  const context = useContext(CommandPaletteContext)

  if (!context) {
    throw new Error('useCommandPalette must be used within SiteProvider')
  }

  return context
}

export function SiteProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark')
  const [isPaletteOpen, setPaletteOpen] = useState(false)

  useEffect(() => {
    try {
      const storedTheme = window.localStorage.getItem('theme')
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      const nextTheme = storedTheme === 'light' || storedTheme === 'dark' ? storedTheme : systemTheme
      setTheme(nextTheme)
    } catch (error) {
      setTheme('dark')
    }
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document.documentElement.dataset.theme = theme

    try {
      window.localStorage.setItem('theme', theme)
    } catch (error) {}
  }, [theme])

  useEffect(() => {
    const handleShortcut = (event: KeyboardEvent) => {
      const isShortcut = (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k'

      if (isShortcut) {
        event.preventDefault()
        setPaletteOpen(true)
      }

      if (event.key === 'Escape') {
        setPaletteOpen(false)
      }
    }

    window.addEventListener('keydown', handleShortcut)
    return () => window.removeEventListener('keydown', handleShortcut)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('[data-reveal]')

    if (!sections.length) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -10% 0px',
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }, [])

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
      setTheme,
    }),
    [theme, toggleTheme],
  )

  const paletteValue = useMemo(
    () => ({
      openPalette: () => setPaletteOpen(true),
      closePalette: () => setPaletteOpen(false),
      isOpen: isPaletteOpen,
    }),
    [isPaletteOpen],
  )

  return (
    <ThemeContext.Provider value={value}>
      <CommandPaletteContext.Provider value={paletteValue}>
        {children}
      </CommandPaletteContext.Provider>
    </ThemeContext.Provider>
  )
}
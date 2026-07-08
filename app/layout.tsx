import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { CommandPalette } from '@/components/command-palette'
import { ScrollProgress } from '@/components/scroll-progress'
import { SiteProvider } from '@/components/site-provider'
import './globals.css'

const _geistSans = Geist({ subsets: ['latin'], display: 'swap' })
const _geistMono = Geist_Mono({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Full Stack Software Engineer | Portfolio',
  description:
    'Professional portfolio of a Full Stack Software Engineer showcasing projects, case studies, and writing.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f7f3eb' },
    { media: '(prefers-color-scheme: dark)', color: '#0f0f1a' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background" suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground font-sans">
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {
              try {
                const stored = localStorage.getItem('theme');
                const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const theme = stored === 'light' || stored === 'dark' ? stored : (systemDark ? 'dark' : 'light');
                document.documentElement.classList.toggle('dark', theme === 'dark');
                document.documentElement.dataset.theme = theme;
              } catch (error) {}
            })();`,
          }}
        />
        <SiteProvider>
          <ScrollProgress />
          <CommandPalette />
          {children}
        </SiteProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

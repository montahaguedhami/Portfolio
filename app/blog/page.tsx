import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { blogPosts } from '@/lib/site-content'

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground mb-12">
          <ArrowLeft className="h-4 w-4" /> Back home
        </Link>
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.24em] text-foreground/45 mb-4">MDX writing</p>
          <h1 className="text-5xl font-bold mb-4">Blog</h1>
          <p className="text-foreground/65 max-w-2xl">
            Notes on performance, UI systems, and the technical decisions behind the portfolio itself.
          </p>
        </div>
        <div className="grid gap-6">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="rounded-3xl border border-border/60 bg-card/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
            >
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-foreground/45 mb-4">
                <span>{post.date}</span>
                <span className="h-px w-8 bg-border" />
                <span>{post.readingTime}</span>
              </div>
              <h2 className="text-2xl font-semibold mb-3">{post.title}</h2>
              <p className="text-sm text-foreground/65 leading-relaxed mb-4">{post.excerpt}</p>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                Read post <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
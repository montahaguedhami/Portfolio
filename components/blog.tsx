import Link from 'next/link'
import { ArrowRight, FileText } from 'lucide-react'
import { blogPosts } from '@/lib/site-content'

export function Blog() {
  return (
    <section id="blog" className="py-24 px-6 relative reveal-section" data-reveal>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <h2 className="text-4xl font-bold mb-4">Blog with MDX</h2>
            <p className="text-foreground/60 max-w-2xl">
              Short technical essays and project notes written in MDX, so code, diagrams, and prose can live together.
            </p>
          </div>
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
            Read all posts <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-3xl border border-border/60 bg-card/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="mb-5 inline-flex rounded-2xl bg-primary/10 p-3 text-primary">
                <FileText className="h-5 w-5" />
              </div>
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-foreground/45 mb-4">
                <span>{post.date}</span>
                <span className="h-px w-8 bg-border" />
                <span>{post.readingTime}</span>
              </div>
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
              <p className="text-sm text-foreground/65 leading-relaxed">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
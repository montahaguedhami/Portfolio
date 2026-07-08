import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { blogPosts } from '@/lib/site-content'

const postModules = {
  'designing-command-palettes': () => import('@/content/blog/designing-command-palettes.mdx'),
  'shipping-lighthouse-95': () => import('@/content/blog/shipping-lighthouse-95.mdx'),
} as const

type BlogSlug = keyof typeof postModules

export function generateStaticParams() {
  return Object.keys(postModules).map((slug) => ({ slug }))
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const loader = postModules[slug as BlogSlug]

  if (!loader) {
    notFound()
  }

  const Post = await loader()
  const post = blogPosts.find((entry) => entry.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground mb-10">
          <ArrowLeft className="h-4 w-4" /> Back to blog
        </Link>
        <p className="text-sm uppercase tracking-[0.24em] text-foreground/45 mb-4">{post.date}</p>
        <h1 className="text-5xl font-bold mb-4">{post.title}</h1>
        <p className="text-foreground/60 mb-10">{post.excerpt}</p>
        <article className="prose max-w-none prose-headings:scroll-mt-24 prose-a:text-primary prose-strong:text-foreground prose-p:text-foreground/75">
          <Post.default />
        </article>
      </div>
    </main>
  )
}
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { caseStudies, projects } from '@/lib/site-content'

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground mb-12">
          <ArrowLeft className="h-4 w-4" /> Back home
        </Link>
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.24em] text-foreground/45 mb-4">Project case studies</p>
          <h1 className="text-5xl font-bold mb-4">Technical decisions, documented</h1>
          <p className="text-foreground/65 max-w-3xl">
            These case studies spell out the problem, the tradeoffs, and the implementation choices that shaped each project.
          </p>
        </div>

        <div className="space-y-6">
          {caseStudies.map((study) => {
            const project = projects.find((entry) => entry.title === study.title)

            return (
              <article key={study.slug} id={study.slug} className="rounded-3xl border border-border/60 bg-card/70 p-8">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between mb-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-foreground/45 mb-2">{project?.category}</p>
                    <h2 className="text-3xl font-semibold">{study.title}</h2>
                  </div>
                  <Link href="/blog/designing-command-palettes" className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                    Related writing <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <p className="text-foreground/70 leading-relaxed mb-6">{project?.challenge}</p>
                <div className="grid gap-4 md:grid-cols-3 mb-6">
                  {project?.metrics.map((metric) => (
                    <div key={metric.label} className="rounded-2xl border border-border/60 bg-background/70 p-4">
                      <p className="text-xs uppercase tracking-[0.22em] text-foreground/45 mb-2">{metric.label}</p>
                      <p className="text-lg font-semibold">{metric.value}</p>
                    </div>
                  ))}
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground/45 mb-3">Decisions</p>
                    <ul className="space-y-3 text-foreground/70">
                      {project?.decisions.map((decision) => (
                        <li key={decision} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                          <span>{decision}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground/45 mb-3">Outcome</p>
                    <p className="text-foreground/70 leading-relaxed mb-4">{project?.impact}</p>
                    <p className="text-foreground/70 leading-relaxed">{project?.decision}</p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </main>
  )
}
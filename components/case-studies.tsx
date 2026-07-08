import Link from 'next/link'
import { ArrowRight, BrainCircuit, DatabaseZap, Gauge } from 'lucide-react'
import { caseStudies } from '@/lib/site-content'

const icons = [Gauge, BrainCircuit, DatabaseZap]

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 px-6 relative reveal-section" data-reveal>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <h2 className="text-4xl font-bold mb-4">Case Studies</h2>
            <p className="text-foreground/60 max-w-2xl">
              A concise view of the technical decisions behind each major project.
            </p>
          </div>
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
            View all case studies <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {caseStudies.map((study, index) => {
            const Icon = icons[index % icons.length]

            return (
              <article
                key={study.slug}
                id={study.slug}
                className="rounded-3xl border border-border/60 bg-card/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="mb-5 inline-flex rounded-2xl bg-primary/10 p-3 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{study.title}</h3>
                <p className="text-sm text-foreground/65 leading-relaxed mb-6">{study.summary}</p>
                <Link href={`/case-studies#${study.slug}`} className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                  Read decisions <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
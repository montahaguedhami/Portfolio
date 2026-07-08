'use client'

import Image from 'next/image'
import { useDeferredValue, useMemo, useState } from 'react'
import { Code2, ExternalLink, Filter, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { projectFilters, projects } from '@/lib/site-content'

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<(typeof projectFilters)[number]>('All')
  const [search, setSearch] = useState('')
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null)
  const deferredSearch = useDeferredValue(search)

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesFilter = activeFilter === 'All' || project.tags.includes(activeFilter)
      const searchableText = `${project.title} ${project.description} ${project.decision} ${project.technologies.join(' ')}`.toLowerCase()
      const matchesSearch = searchableText.includes(deferredSearch.toLowerCase())

      return matchesFilter && matchesSearch
    })
  }, [activeFilter, deferredSearch])

  return (
    <section id="projects" className="py-24 px-6 relative reveal-section" data-reveal>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-foreground/60 max-w-2xl">
              Filtered, interactive project work with the tradeoffs and implementation details surfaced on demand.
            </p>
          </div>
          <div className="flex gap-2 flex-wrap">
            {projectFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3 py-2 rounded-full text-sm border transition-colors duration-200 ${
                  activeFilter === filter
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-card border-border/60 text-foreground/70 hover:text-foreground hover:border-primary/50'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3 mb-10 rounded-2xl border border-border/60 bg-card/70 backdrop-blur-sm px-4 py-3">
          <Filter className="w-4 h-4 text-foreground/50" />
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search projects, decisions, or tech"
            className="w-full bg-transparent outline-none text-sm placeholder:text-foreground/40"
          />
          {search ? (
            <button onClick={() => setSearch('')} className="text-foreground/50 hover:text-foreground" aria-label="Clear search">
              <X className="w-4 h-4" />
            </button>
          ) : null}
        </div>

        <div className="space-y-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`group grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}
            >
              <div className="relative h-80 rounded-xl overflow-hidden border border-border/50 bg-card group-hover:border-primary/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-foreground/45">
                  <span>{project.category}</span>
                  <span className="h-px w-8 bg-border" />
                  <span>{project.year}</span>
                </div>
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{project.description}</p>
                <p className="text-sm text-foreground/60 leading-relaxed">{project.decision}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4 flex-wrap">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-border hover:border-primary/50"
                    onClick={() => setSelectedProject(project)}
                  >
                    <Code2 className="w-4 h-4 mr-2" />
                    Case study
                  </Button>
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-primary/90"
                    onClick={() => window.open(project.links.live, '_blank', 'noopener,noreferrer')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-border/70 bg-card/50 p-10 text-center text-foreground/60">
            No projects match the current filter.
          </div>
        ) : null}

        {selectedProject ? (
          <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
            <button
              aria-label="Close project details"
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            />
            <div className="relative z-10 w-full max-w-3xl rounded-3xl border border-border/70 bg-card p-6 md:p-8 shadow-2xl">
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-foreground/45 mb-2">{selectedProject.category}</p>
                  <h3 className="text-3xl font-bold">{selectedProject.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="rounded-full border border-border p-2 hover:bg-muted"
                  aria-label="Close details"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <p className="text-foreground/70 leading-relaxed mb-6">{selectedProject.challenge}</p>
              <div className="grid gap-4 md:grid-cols-3 mb-6">
                {selectedProject.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-border/60 bg-background/70 p-4">
                    <p className="text-xs uppercase tracking-[0.22em] text-foreground/45 mb-2">{metric.label}</p>
                    <p className="text-lg font-semibold">{metric.value}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground/45">Technical decisions</p>
                <ul className="space-y-3 text-foreground/70">
                  {selectedProject.decisions.map((decision) => (
                    <li key={decision} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{decision}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button variant="outline" onClick={() => window.location.assign(selectedProject.links.caseStudy)}>
                  Read full case study
                </Button>
                <Button onClick={() => window.open(selectedProject.links.code, '_blank', 'noopener,noreferrer')}>
                  View code
                </Button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}
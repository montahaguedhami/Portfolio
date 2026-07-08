import { ExternalLink, GitBranch, Star } from 'lucide-react'
import { githubRepos, githubStats } from '@/lib/site-content'

export function GitHubActivity() {
  return (
    <section id="github" className="py-24 px-6 relative reveal-section" data-reveal>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <h2 className="text-4xl font-bold mb-4">GitHub Activity</h2>
            <p className="text-foreground/60 max-w-2xl">
              A snapshot of pinned repositories and the kinds of systems I spend time building.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {githubStats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-border/60 bg-card px-4 py-3 text-center">
                <p className="text-xs uppercase tracking-[0.2em] text-foreground/45">{stat.label}</p>
                <p className="text-xl font-semibold mt-1">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {githubRepos.map((repo) => (
            <a
              key={repo.name}
              href={repo.href}
              className="group rounded-2xl border border-border/60 bg-card/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-foreground/45 mb-2">Pinned repo</p>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{repo.name}</h3>
                </div>
                <ExternalLink className="h-4 w-4 text-foreground/40" />
              </div>
              <p className="text-sm text-foreground/65 leading-relaxed mb-6">{repo.description}</p>
              <div className="flex items-center justify-between text-sm text-foreground/55">
                <span className="inline-flex items-center gap-2"><GitBranch className="h-4 w-4" />{repo.language}</span>
                <span className="inline-flex items-center gap-2"><Star className="h-4 w-4" />{repo.stars}</span>
                <span>{repo.forks} forks</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
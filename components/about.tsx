export function About() {
  const stats = [
    { label: 'Years of Experience', value: '5+' },
    { label: 'Projects Completed', value: '40+' },
    { label: 'Technologies', value: '20+' },
  ]

  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group relative p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              {/* Glassmorphism effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <p className="text-foreground/60 text-sm font-medium mb-2">
                  {stat.label}
                </p>
                <h3 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {stat.value}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="relative p-12 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border/50 backdrop-blur-sm">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <div className="space-y-4 text-foreground/80 leading-relaxed">
            <p>
              I&apos;m a passionate full stack engineer dedicated to building elegant, performant solutions
              that solve real problems. With expertise spanning frontend, backend, and infrastructure,
              I approach every project with a focus on clean code, scalability, and user experience.
            </p>
            <p>
              Throughout my career, I&apos;ve had the privilege of working with startups and established
              tech companies, delivering impactful products that have helped thousands of users. I&apos;m
              particularly drawn to challenges that require thoughtful architectural decisions and
              collaborative problem-solving.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to
              open source projects, or sharing knowledge with the developer community.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

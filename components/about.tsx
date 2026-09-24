export function About() {
  const stats = [
    { label: 'Primary focus', value: 'Backend' },
    { label: 'Infrastructure', value: 'DevOps' },
    { label: 'Product mindset', value: 'UX/UI' },
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
              I&apos;m Montaha Guedhami, a final-year software engineering student with a strong interest
              in software development, DevOps, and emerging technologies. I approach technical problems
              with curiosity, adaptability, and a practical mindset.
            </p>
            <p>
              My experience includes building RAG-based chatbots, real-time dashboards, REST APIs, and
              full-stack applications. I&apos;m seeking opportunities to apply my knowledge, gain professional
              experience, and grow as a versatile software engineer.
            </p>
            <p>
              I enjoy learning new technologies, solving real-world problems, and collaborating on products
              that are useful, maintainable, and easy to understand.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

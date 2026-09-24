export function Skills() {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: ['Python', 'JavaScript', 'TypeScript', 'SQL'],
    },
    {
      category: 'Web Development',
      skills: ['React', 'Next.js', 'FastAPI', 'REST APIs', 'HTML/CSS'],
    },
    {
      category: 'AI & Machine Learning',
      skills: ['RAG', 'LLM Integration', 'Prompt Engineering', 'Vector Databases', 'NLP'],
    },
    {
      category: 'Databases',
      skills: ['ChromaDB', 'MongoDB', 'SQL'],
    },
    {
      category: 'Tools & DevOps',
      skills: ['Git', 'GitLab', 'Docker'],
    },
    {
      category: 'Languages',
      skills: ['English (Advanced)', 'French (B2)', 'Arabic (Native)'],
    },
  ]

  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">Skills & Expertise</h2>
        <p className="text-center text-foreground/60 mb-16 max-w-2xl mx-auto">
          A comprehensive toolkit of technologies and practices for building modern, scalable applications
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((group) => (
            <div
              key={group.category}
              className="group relative p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 overflow-hidden"
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-accent/0 group-hover:from-primary/10 group-hover:via-primary/5 group-hover:to-accent/5 transition-all duration-300" />

              <div className="relative z-10">
                <h3 className="text-lg font-semibold mb-4 text-primary group-hover:text-accent transition-colors">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors duration-200 hover:scale-105 transform transition-transform cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

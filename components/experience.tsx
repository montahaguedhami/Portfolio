export function Experience() {
  const experiences = [
    {
      role: 'AI Chatbot Development Intern',
      company: 'Concept Media',
      period: 'July 2026 - August 2026 · Remote',
      description:
        "Designed and built a self-hosted RAG-based chatbot to answer client questions using the agency's own data, with zero reliance on external AI APIs for data privacy compliance.",
      achievements: [
        'Built a data extraction pipeline for OCR, PDF/Word parsing, and vector database storage using ChromaDB.',
        'Developed a FastAPI backend integrating a locally-hosted LLM (Qwen2.5 via Ollama).',
        'Connected and styled a Next.js frontend to match the company brand identity.',
        'Managed the project using Git/GitLab with feature branches and merge requests.',
      ],
    },
    {
      role: 'Summer Internship',
      company: 'TPR',
      period: 'July 2025 - August 2025 · Megrine',
      description:
        'Designed and developed a modern React-based dashboard for real-time tracking and visualization of GLPI support tickets.',
      achievements: [
        'Integrated the GLPI REST API to retrieve and synchronize ticket data automatically.',
        'Built an intuitive interface displaying ticket status, priority, and history in real time.',
        'Improved support team visibility and response tracking through centralized data visualization.',
      ],
    },
    {
      role: 'Summer Internship',
      company: 'Arab Tunisian Bank (ATB)',
      period: 'July 2023 · Agence Fochana',
      description:
        'Supported daily client-facing operations and contributed to document organization.',
      achievements: [
        'Provided client support.',
        'Managed document sorting and organization.',
      ],
    },
  ]

  const education = [
    {
      degree: 'Engineer in Software Engineering',
      school: 'ESPRIT School of Engineering',
      year: '2022 - 2027',
    },
    {
      degree: 'Relevant Coursework',
      school: 'Data Structures & Algorithms, Databases, Web & Mobile Development, Artificial Intelligence, Software Engineering Methodologies',
      year: 'Current',
    },
  ]

  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-16">Experience & Education</h2>

        {/* Experience Timeline */}
        <div className="mb-24">
          <h3 className="text-2xl font-bold mb-8 text-primary">Professional Experience</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={`${exp.company}-${exp.role}`}
                className="relative pl-8 group"
              >
                {/* Timeline line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-0 top-12 bottom-0 w-px bg-gradient-to-b from-primary to-transparent" />
                )}

                {/* Timeline dot */}
                <div className="absolute left-[-20px] top-0 w-10 h-10 rounded-full border-2 border-primary bg-background flex items-center justify-center group-hover:scale-125 transition-transform">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>

                {/* Content */}
                <div className="p-6 rounded-lg bg-card border border-border/50 group-hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="text-lg font-semibold">{exp.role}</h4>
                      <p className="text-sm text-foreground/60">{exp.company}</p>
                    </div>
                    <span className="text-sm text-primary font-medium">{exp.period}</span>
                  </div>

                  <p className="text-foreground/70 text-sm mb-4">{exp.description}</p>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement) => (
                      <li key={achievement} className="text-sm text-foreground/60 flex items-start">
                        <span className="text-primary mr-3 mt-0.5">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-primary">Education</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu) => (
              <div
                key={edu.degree}
                className="p-6 rounded-lg bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 group"
              >
                <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {edu.degree}
                </h4>
                <p className="text-sm text-foreground/60 mb-3">{edu.school}</p>
                <p className="text-sm text-primary font-medium">{edu.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

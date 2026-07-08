export function Experience() {
  const experiences = [
    {
      role: 'Senior Full Stack Engineer',
      company: 'Tech Innovations Co.',
      period: '2023 - Present',
      description:
        'Leading the development of scalable microservices architecture. Mentoring junior engineers and architecting solutions for 100k+ daily active users.',
      achievements: [
        'Reduced API response time by 60% through optimization',
        'Led migration of monolith to microservices',
        'Implemented automated testing increasing coverage to 85%',
      ],
    },
    {
      role: 'Full Stack Developer',
      company: 'Digital Solutions LLC',
      period: '2021 - 2023',
      description:
        'Built and maintained full-stack web applications using modern JavaScript frameworks. Collaborated with design and product teams to deliver high-quality features.',
      achievements: [
        'Developed 5+ production applications serving 50k+ users',
        'Implemented real-time features using WebSockets',
        'Established CI/CD pipelines reducing deployment time by 70%',
      ],
    },
    {
      role: 'Frontend Developer',
      company: 'Creative Studio',
      period: '2020 - 2021',
      description:
        'Focused on building responsive, accessible user interfaces. Worked closely with designers to transform mockups into pixel-perfect implementations.',
      achievements: [
        'Built component library with 50+ reusable components',
        'Improved Lighthouse score from 65 to 95',
        'Mentored 2 junior developers on best practices',
      ],
    },
  ]

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of Technology',
      year: '2020',
    },
    {
      degree: 'Professional Certification - Full Stack Development',
      school: 'Code Academy',
      year: '2019',
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
                key={exp.role}
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

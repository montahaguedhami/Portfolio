import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Skills } from '@/components/skills'
import { Projects } from '@/components/projects'
import { CaseStudies } from '@/components/case-studies'
import { GitHubActivity } from '@/components/github-activity'
import { Blog } from '@/components/blog'
import { Experience } from '@/components/experience'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <CaseStudies />
      <GitHubActivity />
      <Blog />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}

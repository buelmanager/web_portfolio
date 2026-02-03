import { getProjects } from '@/lib/projects'
import BottomNav from '@/components/ui/BottomNav'
import Hero from '@/components/sections/Hero'
import Projects from '@/components/sections/Projects'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'

export default function Home() {
  const projects = getProjects()

  return (
    <>
      <main className="main-container">
        <Hero />
        <Projects projects={projects} />
        <About />
        <Contact />
      </main>
      <BottomNav />
    </>
  )
}

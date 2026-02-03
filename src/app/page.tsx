import { getProjects, getProjectCount } from '@/lib/projects'
import SideNav from '@/components/ui/SideNav'
import Hero from '@/components/sections/Hero'
import Projects from '@/components/sections/Projects'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'

export default function Home() {
  const projects = getProjects()
  const { total, complete } = getProjectCount()

  return (
    <>
      <SideNav />
      <main>
        <Hero projectCount={total} completeCount={complete} />
        <Projects projects={projects} />
        <About />
        <Contact />
      </main>
    </>
  )
}

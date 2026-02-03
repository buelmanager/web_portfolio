'use client'

import FadeInSection from '@/components/animations/FadeInSection'
import TextReveal from '@/components/animations/TextReveal'
import ProjectCard from '@/components/ui/ProjectCard'
import type { Project } from '@/lib/projects'

interface ProjectsProps {
  projects: Project[]
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="py-24 px-4 md:px-8 lg:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <FadeInSection className="text-center mb-16">
          <TextReveal 
            text="프로젝트" 
            className="text-4xl md:text-5xl font-bold mb-4"
          />
          <p className="text-text-secondary max-w-2xl mx-auto">
            다양한 웹 프로젝트들을 소개합니다. 각 프로젝트는 Next.js, React, 
            TypeScript, Tailwind CSS, GSAP 등 최신 기술 스택으로 구축되었습니다.
          </p>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <FadeInSection 
              key={project.id} 
              delay={index * 0.1}
              direction="up"
            >
              <ProjectCard project={project} index={index} />
            </FadeInSection>
          ))}
        </div>

        {projects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-text-muted">프로젝트가 없습니다.</p>
          </div>
        )}
      </div>
    </section>
  )
}

'use client'

import ProjectCard from '@/components/ui/ProjectCard'
import type { Project } from '@/lib/projects'

interface ProjectsProps {
  projects: Project[]
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section className="work" id="work">
      <div className="work-header">
        <h2 className="work-section-title">Selected Work</h2>
        <span className="work-section-title">{projects.length} Projects</span>
      </div>

      <div className="work-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {projects.length === 0 && (
        <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--color-text-muted)' }}>
          프로젝트가 없습니다.
        </div>
      )}
    </section>
  )
}

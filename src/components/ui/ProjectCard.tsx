'use client'

import Link from 'next/link'
import type { Project } from '@/lib/projects'

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const displayName = project.name.includes(' - ') 
    ? project.name.split(' - ')[0] 
    : project.name.includes(' | ')
    ? project.name.split(' | ')[0]
    : project.name;
    
  const subtitle = project.name.includes(' - ')
    ? project.name.split(' - ')[1]
    : project.name.includes(' | ')
    ? project.name.split(' | ')[1]
    : project.description;

  if (project.hasStaticBuild) {
    return (
      <article className="project-card" data-index={index + 1}>
        <a href={project.demoUrl} className="project-link" target="_blank" rel="noopener noreferrer">
          <div className="project-image-wrapper">
            <img
              src={project.image}
              alt={displayName}
              className="project-image"
            />
            <div className="project-overlay" />
            <span className="live-badge">LIVE</span>
          </div>
          <div className="project-content">
            <div className="project-meta">
              <span className="project-category">{project.category}</span>
              <span className="project-year">{project.year}</span>
            </div>
            <h3 className="project-title">{displayName}</h3>
            <p className="project-description">{subtitle}</p>
            <div className="project-details">
              <div className="detail-row">
                <span className="detail-label">Concept</span>
                <span className="detail-value">{project.description.substring(0, 50)}...</span>
              </div>
              {project.colors.length > 0 && (
                <div className="detail-row">
                  <span className="detail-label">Color</span>
                  <span className="detail-value">{project.colors.join(' · ')}</span>
                </div>
              )}
            </div>
            <div className="project-tech">
              {project.techStack.slice(0, 4).map((tech) => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        </a>
      </article>
    )
  }

  return (
    <article className="project-card" data-index={index + 1}>
      <Link href={`/projects/${project.id}`} className="project-link">
        <div className="project-image-wrapper">
          <img
            src={project.image}
            alt={displayName}
            className="project-image"
          />
          <div className="project-overlay" />
        </div>
        <div className="project-content">
          <div className="project-meta">
            <span className="project-category">{project.category}</span>
            <span className="project-year">{project.year}</span>
          </div>
          <h3 className="project-title">{displayName}</h3>
          <p className="project-description">{subtitle}</p>
          <div className="project-details">
            <div className="detail-row">
              <span className="detail-label">Concept</span>
              <span className="detail-value">{project.description.substring(0, 50)}...</span>
            </div>
            {project.colors.length > 0 && (
              <div className="detail-row">
                <span className="detail-label">Color</span>
                <span className="detail-value">{project.colors.join(' · ')}</span>
              </div>
            )}
          </div>
          <div className="project-tech">
            {project.techStack.slice(0, 4).map((tech) => (
              <span key={tech} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>
      </Link>
    </article>
  )
}

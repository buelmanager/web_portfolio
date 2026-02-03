'use client'

import Link from 'next/link'
import type { Project } from '@/lib/projects'

interface ProjectDetailProps {
  project: Project
  projectIndex: number
}

export default function ProjectDetail({ project, projectIndex }: ProjectDetailProps) {
  const displayName = project.name.includes(' - ')
    ? project.name.split(' - ')[0]
    : project.name.includes(' | ')
    ? project.name.split(' | ')[0]
    : project.name

  const subtitle = project.name.includes(' - ')
    ? project.name.split(' - ')[1]
    : project.name.includes(' | ')
    ? project.name.split(' | ')[1]
    : ''

  return (
    <div className="project-page">
      <Link href="/" className="back-button">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
        Back
      </Link>

      <div className="project-hero">
        <img src={project.image} alt={displayName} className="project-hero-image" />
        <div className="project-hero-overlay" />
        <div className="project-hero-content">
          <span className="project-page-category">{project.category}</span>
          <h1 className="project-page-title">{displayName}</h1>
          {subtitle && <p className="project-page-subtitle">{subtitle}</p>}
        </div>
      </div>

      <div className="project-info">
        <div className="project-info-grid">
          <div className="info-section">
            <h3>Overview</h3>
            <p>{project.description}</p>
          </div>

          <div className="info-section">
            <h3>Tech Stack</h3>
            <div className="tech-list">
              {project.techStack.map((tech) => (
                <span key={tech} className="tech-item">{tech}</span>
              ))}
            </div>
          </div>

          {project.colors.length > 0 && (
            <div className="info-section">
              <h3>Color Palette</h3>
              <div className="color-list">
                {project.colors.map((color) => (
                  <div key={color} className="color-item">
                    <div className="color-swatch" style={{ backgroundColor: color }} />
                    <span>{color}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="info-section">
            <h3>Run Command</h3>
            <code className="run-command">{project.runCommand}</code>
          </div>
        </div>

        <div className="project-actions">
          <a 
            href={`http://localhost:${3000 + projectIndex + 1}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="action-button primary"
          >
            View Live Demo
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </a>
        </div>
      </div>

      <style jsx>{`
        .project-page {
          min-height: 100vh;
          background: var(--color-bg);
        }

        .back-button {
          position: fixed;
          top: 2rem;
          left: 2rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--color-text);
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          z-index: 100;
          padding: 0.75rem 1.5rem;
          background: rgba(10, 10, 10, 0.8);
          backdrop-filter: blur(10px);
          border-radius: 50px;
          transition: all 0.3s ease;
        }

        .back-button:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .project-hero {
          position: relative;
          height: 70vh;
          overflow: hidden;
        }

        .project-hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .project-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 0%, rgba(10, 10, 10, 0.8) 100%);
        }

        .project-hero-content {
          position: absolute;
          bottom: 4rem;
          left: 4rem;
          right: 4rem;
        }

        .project-page-category {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 400;
          color: var(--color-text-muted);
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }

        .project-page-title {
          font-size: clamp(2.5rem, 8vw, 5rem);
          font-weight: 300;
          letter-spacing: -0.03em;
          margin-bottom: 0.5rem;
        }

        .project-page-subtitle {
          font-size: 1.25rem;
          color: var(--color-text-muted);
          font-weight: 300;
        }

        .project-info {
          padding: 4rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .project-info-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .info-section h3 {
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--color-text-muted);
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }

        .info-section p {
          font-size: 1rem;
          line-height: 1.8;
          color: var(--color-text);
        }

        .tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-item {
          font-size: 0.875rem;
          padding: 0.5rem 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--color-border);
          border-radius: 4px;
          color: var(--color-text-muted);
        }

        .color-list {
          display: flex;
          gap: 1.5rem;
        }

        .color-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .color-swatch {
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          border: 1px solid var(--color-border);
        }

        .color-item span {
          font-size: 0.875rem;
          color: var(--color-text-muted);
          font-family: monospace;
        }

        .run-command {
          display: block;
          font-size: 0.875rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--color-border);
          border-radius: 4px;
          color: var(--color-text);
          font-family: monospace;
        }

        .project-actions {
          display: flex;
          gap: 1rem;
        }

        .action-button {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 2rem;
          font-size: 0.875rem;
          font-weight: 500;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          border-radius: 50px;
          transition: all 0.3s ease;
        }

        .action-button.primary {
          background: var(--color-text);
          color: var(--color-bg);
        }

        .action-button.primary:hover {
          background: transparent;
          color: var(--color-text);
          box-shadow: inset 0 0 0 1px var(--color-text);
        }

        @media (max-width: 768px) {
          .project-hero-content {
            left: 1.5rem;
            right: 1.5rem;
            bottom: 2rem;
          }

          .project-info {
            padding: 2rem 1.5rem;
          }

          .project-info-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .back-button {
            top: 1rem;
            left: 1rem;
          }
        }
      `}</style>
    </div>
  )
}

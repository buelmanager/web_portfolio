'use client'

import { useState } from 'react'
import { Copy, Check, ExternalLink, Code2 } from 'lucide-react'
import type { Project } from '@/lib/projects'

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(project.runCommand)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div 
      className="group relative bg-surface border border-border rounded-2xl p-6 hover-lift transition-all duration-300 hover:border-primary/50"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-surface-light flex items-center justify-center">
            <Code2 className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-text-primary group-hover:text-primary transition-colors">
              {project.id}
            </h3>
            <p className="text-xs text-text-muted">{project.name}</p>
          </div>
        </div>
        
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            project.isComplete
              ? 'bg-green-500/20 text-green-400 border border-green-500/30'
              : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
          }`}
        >
          {project.isComplete ? '완료' : '미완성'}
        </span>
      </div>

      <p className="text-text-secondary text-sm mb-4 line-clamp-2 min-h-[2.5rem]">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 bg-surface-light rounded-md text-xs text-text-muted"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="bg-background/50 rounded-lg p-3 border border-border/50">
        <div className="flex items-center justify-between gap-2">
          <code className="text-xs text-primary font-mono truncate flex-1">
            {project.runCommand}
          </code>
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-md hover:bg-surface-light transition-colors flex-shrink-0"
            title="명령어 복사"
          >
            {copied ? (
              <Check className="w-4 h-4 text-green-400" />
            ) : (
              <Copy className="w-4 h-4 text-text-muted hover:text-primary" />
            )}
          </button>
        </div>
      </div>

      {project.hasReadme && (
        <div className="absolute top-4 right-14">
          <span className="w-2 h-2 rounded-full bg-primary inline-block" title="c_readme.md 있음" />
        </div>
      )}

      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </div>
  )
}

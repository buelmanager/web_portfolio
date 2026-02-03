import { getProjects } from '@/lib/projects'
import { notFound } from 'next/navigation'
import ProjectDetail from './ProjectDetail'

interface ProjectPageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  const projects = getProjects()
  return projects.map((project) => ({
    id: project.id,
  }))
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params
  const projects = getProjects()
  const project = projects.find(p => p.id === id)
  const projectIndex = projects.findIndex(p => p.id === id)

  if (!project) {
    notFound()
  }

  return <ProjectDetail project={project} projectIndex={projectIndex} />
}

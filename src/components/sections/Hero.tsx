'use client'

import TextReveal from '@/components/animations/TextReveal'
import MagneticButton from '@/components/animations/MagneticButton'
import { ChevronDown, Folder } from 'lucide-react'

interface HeroProps {
  projectCount: number
  completeCount: number
}

export default function Hero({ projectCount, completeCount }: HeroProps) {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-background" />
      
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, var(--border) 1px, transparent 0)`,
        backgroundSize: '40px 40px',
        opacity: 0.3
      }} />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-surface/80 backdrop-blur-sm rounded-full border border-border">
          <Folder className="w-4 h-4 text-primary" />
          <span className="text-sm text-text-secondary">
            {projectCount}개 프로젝트 · {completeCount}개 완료
          </span>
        </div>

        <TextReveal 
          text="웹 프로젝트" 
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-2"
          delay={0.2}
        />
        <TextReveal 
          text="포트폴리오" 
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 text-gradient"
          delay={0.5}
        />
        
        <p className="text-lg md:text-xl text-text-secondary mb-4 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          Next.js, React, GSAP로 구축된 웹 프로젝트 컬렉션
        </p>
        
        <p className="text-text-muted mb-12 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
          각 프로젝트를 클릭하여 실행 명령어를 확인하세요
        </p>

        <MagneticButton>
          <button
            onClick={scrollToProjects}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary-hover text-background font-semibold rounded-full transition-all duration-300 hover:shadow-lg cyan-glow"
          >
            프로젝트 보기
            <ChevronDown className="w-5 h-5" />
          </button>
        </MagneticButton>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-text-muted" />
      </div>
    </section>
  )
}

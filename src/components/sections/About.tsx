'use client'

import FadeInSection from '@/components/animations/FadeInSection'
import TextReveal from '@/components/animations/TextReveal'
import { Code2, Layers, Sparkles, Zap } from 'lucide-react'

const techStack = [
  { name: 'Next.js 16', icon: Layers, description: '최신 App Router 기반' },
  { name: 'React 19', icon: Code2, description: 'Server Components 지원' },
  { name: 'TypeScript', icon: Zap, description: '타입 안전성 보장' },
  { name: 'GSAP', icon: Sparkles, description: '부드러운 애니메이션' },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-4 md:px-8 lg:px-16 bg-surface">
      <div className="max-w-5xl mx-auto">
        <FadeInSection className="text-center mb-16">
          <TextReveal 
            text="소개" 
            className="text-4xl md:text-5xl font-bold mb-4"
          />
          <p className="text-text-secondary max-w-2xl mx-auto">
            이 포트폴리오는 다양한 웹 프로젝트들을 자동으로 발견하고 
            소개하는 쇼케이스입니다. 각 프로젝트는 독립적으로 실행 가능합니다.
          </p>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {techStack.map((tech, index) => (
            <FadeInSection 
              key={tech.name} 
              delay={index * 0.1}
              direction={index % 2 === 0 ? 'left' : 'right'}
            >
              <div className="flex items-start gap-4 p-6 bg-background rounded-2xl border border-border hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <tech.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-text-primary mb-1">
                    {tech.name}
                  </h3>
                  <p className="text-text-secondary text-sm">
                    {tech.description}
                  </p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection>
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 border border-border text-center">
            <h3 className="text-2xl font-bold mb-4">프로젝트 자동 발견</h3>
            <p className="text-text-secondary mb-6">
              <code className="px-2 py-1 bg-background rounded text-primary text-sm">web/</code> 
              폴더 내의 모든 프로젝트를 자동으로 스캔하여 표시합니다.
              <br />
              새 프로젝트를 추가하면 자동으로 포트폴리오에 반영됩니다.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-background rounded-full text-sm border border-border">
                Tailwind CSS 4
              </span>
              <span className="px-4 py-2 bg-background rounded-full text-sm border border-border">
                Lucide Icons
              </span>
              <span className="px-4 py-2 bg-background rounded-full text-sm border border-border">
                ScrollTrigger
              </span>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}

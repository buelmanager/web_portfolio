'use client'

import { useRef, useEffect } from 'react'
import { Building2, Home, Ruler, PenTool, Layers, Lightbulb, Users, Award } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import FadeInSection from '@/components/animations/FadeInSection'
import TextReveal from '@/components/animations/TextReveal'

gsap.registerPlugin(ScrollTrigger)

const features = [
  {
    icon: Home,
    title: '주거 공간 설계',
    description: '라이프스타일을 담은 맞춤 주택',
  },
  {
    icon: Building2,
    title: '상업 공간 설계',
    description: '브랜드 가치를 높이는 공간',
  },
  {
    icon: Ruler,
    title: '리모델링 & 인테리어',
    description: '기존 공간의 새로운 발견',
  },
  {
    icon: PenTool,
    title: '3D 시각화',
    description: '완공 전 공간을 미리 경험',
  },
  {
    icon: Layers,
    title: '구조 설계',
    description: '안전하고 효율적인 구조',
  },
  {
    icon: Lightbulb,
    title: '친환경 설계',
    description: '지속 가능한 건축 솔루션',
  },
  {
    icon: Users,
    title: '프로젝트 관리',
    description: '설계부터 시공까지 원스톱',
  },
  {
    icon: Award,
    title: '인허가 컨설팅',
    description: '복잡한 절차를 간소화',
  },
]

export default function Features() {
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cards = cardsRef.current?.querySelectorAll('.feature-card')
    if (!cards) return

    cards.forEach((card) => {
      const icon = card.querySelector('.feature-icon')
      
      card.addEventListener('mouseenter', () => {
        gsap.to(icon, { rotate: 360, duration: 0.6, ease: 'power2.out' })
      })
      
      card.addEventListener('mouseleave', () => {
        gsap.to(icon, { rotate: 0, duration: 0.3, ease: 'power2.in' })
      })
    })
  }, [])

  return (
    <section id="features" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <TextReveal 
            text="공간의 모든 가능성을 실현합니다" 
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-primary"
          />
          <FadeInSection delay={0.3}>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              혁신적인 디자인과 정밀한 설계로
              <br className="hidden md:block" />
              당신만의 공간을 완성합니다
            </p>
          </FadeInSection>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FadeInSection 
              key={feature.title} 
              delay={index * 0.1}
              direction="up"
            >
              <div className="feature-card group p-8 bg-white border border-border hover:border-secondary/50 transition-all duration-300 hover-lift cursor-pointer">
                <div className="w-14 h-14 mb-6 flex items-center justify-center border border-border group-hover:border-secondary group-hover:bg-secondary/5 transition-all duration-300">
                  <feature.icon className="feature-icon w-6 h-6 text-primary group-hover:text-secondary transition-colors" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-primary group-hover:text-secondary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-text-secondary">
                  {feature.description}
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}

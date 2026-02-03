'use client'

import { useEffect, useRef, useState } from 'react'
import FadeInSection from '@/components/animations/FadeInSection'
import TextReveal from '@/components/animations/TextReveal'

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height)
      setOffset(scrollProgress * 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="py-24 bg-background relative overflow-hidden"
    >
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle at 30% 50%, var(--primary) 0%, transparent 50%), radial-gradient(circle at 70% 50%, var(--secondary) 0%, transparent 50%)',
          transform: `translateY(${offset}px)`,
          transition: 'transform 0.1s linear'
        }}
      />
      
      <div 
        className="absolute top-0 left-0 w-full h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, var(--primary), transparent)'
        }}
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <TextReveal 
          text="당신만의 타임리스를 찾아보세요" 
          className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
        />
        
        <FadeInSection delay={0.3}>
          <p className="text-lg text-text-muted mb-10 max-w-2xl mx-auto leading-relaxed">
            프라이빗 부티크에서 당신만을 위한 특별한 시간을 예약하세요.
            <br />
            전문 컨설턴트가 맞춤형 상담을 제공해드립니다.
          </p>
        </FadeInSection>

        <FadeInSection delay={0.5}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:boutique@zenith.com"
              className="px-8 py-4 bg-primary hover:bg-primary-hover text-background font-semibold tracking-wide uppercase text-sm transition-all duration-300 hover:scale-105"
            >
              부티크 방문 예약
            </a>
            <a
              href="#"
              className="px-8 py-4 border border-primary text-primary font-semibold tracking-wide uppercase text-sm transition-all duration-300 hover:bg-primary hover:text-background"
            >
              컬렉션 카탈로그
            </a>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.7}>
          <p className="mt-10 text-sm text-text-muted tracking-wider">
            청담 플래그십 · 갤러리아 명품관 · 신세계 강남
          </p>
        </FadeInSection>
      </div>
    </section>
  )
}

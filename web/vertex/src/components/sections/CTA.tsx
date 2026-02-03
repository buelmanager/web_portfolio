'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import FadeInSection from '@/components/animations/FadeInSection'
import TextReveal from '@/components/animations/TextReveal'

gsap.registerPlugin(ScrollTrigger)

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (bgRef.current && sectionRef.current) {
      gsap.to(bgRef.current, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      })
    }

    const statItems = statsRef.current?.querySelectorAll('.stat-number')
    if (statItems) {
      statItems.forEach((item) => {
        const endValue = parseInt(item.getAttribute('data-value') || '0')
        const suffix = item.getAttribute('data-suffix') || ''
        
        ScrollTrigger.create({
          trigger: item,
          start: 'top 80%',
          onEnter: () => {
            const obj = { val: 0 }
            gsap.to(obj, {
              val: endValue,
              duration: 2,
              ease: 'power2.out',
              onUpdate: () => {
                item.textContent = Math.round(obj.val) + suffix
              }
            })
          }
        })
      })
    }
  }, [])

  return (
    <section ref={sectionRef} id="contact" className="py-32 relative overflow-hidden">
      <div 
        ref={bgRef} 
        className="absolute inset-0 -top-20 -bottom-20 bg-primary"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className="absolute inset-0 bg-primary/90" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <TextReveal 
          text="당신의 공간을 특별하게" 
          className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-white"
        />
        
        <FadeInSection delay={0.3}>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            15년간 200개 이상의 프로젝트를 성공적으로 완수한 vertex와 함께
            <br />
            당신만의 특별한 공간을 만들어 보세요.
          </p>
        </FadeInSection>

        <div ref={statsRef} className="flex justify-center gap-12 mb-12">
          <FadeInSection delay={0.4}>
            <div className="text-center">
              <div className="stat-number text-4xl md:text-5xl font-bold text-secondary" data-value="15" data-suffix="년">0</div>
              <div className="text-white/60 text-sm mt-2">경력</div>
            </div>
          </FadeInSection>
          <FadeInSection delay={0.5}>
            <div className="text-center">
              <div className="stat-number text-4xl md:text-5xl font-bold text-secondary" data-value="200" data-suffix="+">0</div>
              <div className="text-white/60 text-sm mt-2">프로젝트</div>
            </div>
          </FadeInSection>
        </div>

        <FadeInSection delay={0.6}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@vertex.co.kr"
              className="px-8 py-4 bg-white text-primary font-semibold tracking-wide text-sm transition-all duration-300 hover:bg-secondary hover:text-white"
            >
              무료 상담 신청
            </a>
            <a
              href="#"
              className="px-8 py-4 border border-white/50 text-white font-semibold tracking-wide text-sm transition-all duration-300 hover:bg-white hover:text-primary"
            >
              포트폴리오 다운로드
            </a>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.8}>
          <p className="mt-10 text-sm text-white/50">
            평일 09:00 ~ 18:00
          </p>
        </FadeInSection>
      </div>
    </section>
  )
}

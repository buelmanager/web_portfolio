'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import FadeInSection from '@/components/animations/FadeInSection'
import TextReveal from '@/components/animations/TextReveal'

gsap.registerPlugin(ScrollTrigger)

export default function CTA() {
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (bgRef.current) {
      gsap.to(bgRef.current, {
        yPercent: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: bgRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      })
    }
  }, [])

  return (
    <section id="contact" className="py-24 bg-foreground relative overflow-hidden">
      <div 
        ref={bgRef}
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(156, 175, 136, 0.5) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(184, 201, 168, 0.3) 0%, transparent 50%)'
        }}
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <TextReveal 
          text="당신만의 휴식을 시작하세요" 
          className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-white"
        />
        
        <FadeInSection delay={0.3}>
          <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
            자연의 에너지로 몸과 마음의 균형을 찾아드립니다.
            <br />
            지금 바로 프리미엄 웰니스를 경험하세요.
          </p>
        </FadeInSection>

        <FadeInSection delay={0.5}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#features"
              className="px-8 py-4 bg-primary hover:bg-primary-hover text-white font-medium tracking-wide text-sm transition-all duration-300 hover:scale-105 rounded-full"
            >
              프로그램 예약
            </a>
            <a
              href="tel:02-123-4567"
              className="px-8 py-4 border-2 border-white/50 text-white font-medium tracking-wide text-sm transition-all duration-300 hover:bg-white hover:text-foreground rounded-full"
            >
              상담 문의
            </a>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.7}>
          <p className="mt-8 text-sm text-white/50">
            10:00 ~ 22:00 (연중무휴)
          </p>
        </FadeInSection>
      </div>
    </section>
  )
}

'use client'

import FadeInSection from '@/components/animations/FadeInSection'
import TextReveal from '@/components/animations/TextReveal'

export default function CTA() {
  return (
    <section id="contact" className="py-24 bg-secondary/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-transparent" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <TextReveal 
          text="특별한 경험을 예약하세요" 
          className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
        />
        
        <FadeInSection delay={0.3}>
          <p className="text-lg text-text-secondary mb-10 max-w-2xl mx-auto">
            허니문, 기념일, 비즈니스 출장까지
            <br />
            atlas에서 잊지 못할 럭셔리 경험을 선사합니다.
          </p>
        </FadeInSection>

        <FadeInSection delay={0.5}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-primary hover:bg-primary-hover text-white font-semibold tracking-wide uppercase text-sm transition-all duration-300 hover:scale-105"
            >
              객실 예약
            </a>
            <a
              href="#offers"
              className="px-8 py-4 border-2 border-secondary text-secondary font-semibold tracking-wide uppercase text-sm transition-all duration-300 hover:bg-secondary hover:text-white"
            >
              스페셜 오퍼
            </a>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.7}>
          <div className="mt-10 text-sm text-text-muted space-y-1">
            <p>체크인 15:00 · 체크아웃 11:00</p>
            <p className="text-text-secondary mt-2">24시간 컨시어지 서비스</p>
            <p className="text-primary font-medium mt-3">+82-2-1234-5678</p>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}

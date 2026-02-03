'use client'

import FadeInSection from '@/components/animations/FadeInSection'
import TextReveal from '@/components/animations/TextReveal'

export default function CTA() {
  return (
    <section id="contact" className="py-24 bg-primary/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <TextReveal 
          text="특별한 순간을 예약하세요" 
          className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
        />
        
        <FadeInSection delay={0.3}>
          <p className="text-lg text-text-secondary mb-10 max-w-2xl mx-auto">
            소중한 분과의 식사, 기념일, 비즈니스 미팅까지
            <br />
            master에서 완벽한 다이닝 경험을 선사합니다.
          </p>
        </FadeInSection>

        <FadeInSection delay={0.5}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-primary hover:bg-primary-hover text-white font-semibold tracking-wide uppercase text-sm transition-all duration-300 hover:scale-105"
            >
              온라인 예약
            </a>
            <a
              href="tel:02-XXX-XXXX"
              className="px-8 py-4 border-2 border-primary text-primary font-semibold tracking-wide uppercase text-sm transition-all duration-300 hover:bg-primary hover:text-white"
            >
              전화 예약: 02-XXX-XXXX
            </a>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.7}>
          <div className="mt-10 text-sm text-text-muted space-y-1">
            <p>런치 12:00 ~ 15:00 (라스트오더 14:00)</p>
            <p>디너 18:00 ~ 22:00 (라스트오더 20:30)</p>
            <p className="text-text-secondary mt-2">매주 월요일 휴무</p>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}

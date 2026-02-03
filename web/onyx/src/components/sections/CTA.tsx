'use client'

import FadeInSection from '@/components/animations/FadeInSection'
import TextReveal from '@/components/animations/TextReveal'
import MagneticButton from '@/components/animations/MagneticButton'
import SectionTransition from '@/components/animations/SectionTransition'

export default function CTA() {
  return (
    <SectionTransition className="py-24 bg-background relative overflow-hidden">
      <section id="contact">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 via-transparent to-accent/10" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <TextReveal 
            text="프라이빗 상담을 시작하세요" 
            className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
          />
          
          <FadeInSection delay={0.3}>
            <p className="text-lg text-text-secondary mb-10 max-w-2xl mx-auto">
              onyx의 전문가가 최적의 자산관리 솔루션을 제안해 드립니다.
              <br />
              100억 이상 자산가를 위한 프리미엄 웰스 매니지먼트.
            </p>
          </FadeInSection>

          <FadeInSection delay={0.5}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton>
                <a
                  href="mailto:private@onyx.co.kr"
                  className="inline-block px-8 py-4 bg-gradient-to-r from-secondary to-accent hover:from-accent hover:to-secondary text-background font-semibold tracking-wide uppercase text-sm transition-all duration-300 hover:scale-105 gold-glow"
                >
                  1:1 상담 신청
                </a>
              </MagneticButton>
              <MagneticButton>
                <a
                  href="#"
                  className="inline-block px-8 py-4 border-2 border-primary text-primary font-semibold tracking-wide uppercase text-sm transition-all duration-300 hover:bg-primary hover:text-background"
                >
                  자산진단 리포트
                </a>
              </MagneticButton>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.7}>
            <p className="mt-8 text-sm text-text-muted">
              예약 상담: 평일 09:00 ~ 18:00 · 서울 강남 본점
            </p>
          </FadeInSection>
        </div>
      </section>
    </SectionTransition>
  )
}

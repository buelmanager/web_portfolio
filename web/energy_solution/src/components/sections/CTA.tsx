'use client'

import FadeInSection from '@/components/animations/FadeInSection'
import TextReveal from '@/components/animations/TextReveal'

export default function CTA() {
  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <TextReveal 
          text="지속 가능한 미래를 시작하세요" 
          className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
        />
        
        <FadeInSection delay={0.3}>
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
            15년 노하우의 에너지 전문가가 최적의 솔루션을 제안해 드립니다.
            <br />
            무료 현장 실사, 맞춤 설계, 보조금 신청까지 원스톱으로 해결하세요.
          </p>
        </FadeInSection>

        <FadeInSection delay={0.5}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="px-8 py-4 bg-primary hover:bg-primary-hover text-white font-semibold tracking-wide uppercase text-sm transition-all duration-300 hover:scale-105"
            >
              무료 상담 신청
            </a>
            <a
              href="tel:1588-0000"
              className="px-8 py-4 border-2 border-white text-white font-semibold tracking-wide uppercase text-sm transition-all duration-300 hover:bg-white hover:text-black"
            >
              전화 상담: 1588-0000
            </a>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.7}>
          <p className="mt-8 text-sm text-gray-500">
            평일 09:00 ~ 18:00 (점심 12:00 ~ 13:00) · 24시간 긴급 출동
          </p>
        </FadeInSection>
      </div>
    </section>
  )
}

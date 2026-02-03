'use client'

import FadeInSection from '@/components/animations/FadeInSection'
import TextReveal from '@/components/animations/TextReveal'

export default function CTA() {
  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <TextReveal 
          text="지금 바로 시작하세요" 
          className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
        />
        
        <FadeInSection delay={0.3}>
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
            25년 노하우의 전문 상담사가 최적의 솔루션을 제안해 드립니다.
            <br />
            대량 구매, 맞춤 견적, 기업 납품까지 원스톱으로 해결하세요.
          </p>
        </FadeInSection>

        <FadeInSection delay={0.5}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://dccom.co.kr"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-primary hover:bg-primary-hover text-white font-semibold tracking-wide uppercase text-sm transition-all duration-300 hover:scale-105"
            >
              쇼핑몰 바로가기
            </a>
            <a
              href="tel:070-8873-8472"
              className="px-8 py-4 border-2 border-white text-white font-semibold tracking-wide uppercase text-sm transition-all duration-300 hover:bg-white hover:text-black"
            >
              전화 상담: 070-8873-8472
            </a>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.7}>
          <p className="mt-8 text-sm text-gray-500">
            평일 10:00 ~ 18:30 (점심 12:00 ~ 13:00)
          </p>
        </FadeInSection>
      </div>
    </section>
  )
}

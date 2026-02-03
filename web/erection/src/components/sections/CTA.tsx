'use client'

import FadeInSection from '@/components/animations/FadeInSection'
import TextReveal from '@/components/animations/TextReveal'

export default function CTA() {
  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <TextReveal 
          text="견적 문의하기" 
          className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
        />
        
        <FadeInSection delay={0.3}>
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
            25년 건설 노하우의 전문가가 최적의 시공 솔루션을 제안해 드립니다.
            <br />
            주거/상업 공간 리모델링부터 신축까지 원스톱으로 해결하세요.
          </p>
        </FadeInSection>

        <FadeInSection delay={0.5}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@lotus.co.kr"
              className="px-8 py-4 bg-primary hover:bg-primary-hover text-white font-semibold tracking-wide uppercase text-sm transition-all duration-300 hover:scale-105"
            >
              이메일 문의
            </a>
            <a
              href="tel:02-XXXX-XXXX"
              className="px-8 py-4 border-2 border-white text-white font-semibold tracking-wide uppercase text-sm transition-all duration-300 hover:bg-white hover:text-black"
            >
              전화 상담: 02-XXXX-XXXX
            </a>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.7}>
          <p className="mt-8 text-sm text-gray-500">
            평일 09:00 ~ 18:00 (점심 12:00 ~ 13:00)
          </p>
        </FadeInSection>
      </div>
    </section>
  )
}

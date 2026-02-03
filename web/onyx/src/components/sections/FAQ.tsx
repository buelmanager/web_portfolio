'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import FadeInSection from '@/components/animations/FadeInSection'
import TextReveal from '@/components/animations/TextReveal'
import SectionTransition from '@/components/animations/SectionTransition'

const faqs = [
  {
    question: '최소 가입 자산은?',
    answer: 'onyx 프라이빗 뱅킹 서비스는 100억원 이상의 금융자산을 보유하신 고객을 대상으로 합니다. 자산 규모에 따라 플래티넘, 다이아몬드, 블랙 등급으로 차별화된 서비스를 제공합니다.',
  },
  {
    question: 'PB 배정 기준은?',
    answer: '고객님의 투자 성향, 자산 규모, 선호 투자 분야를 종합적으로 분석하여 최적의 전담 PB를 배정합니다. 모든 PB는 15년 이상의 경력과 글로벌 자격증을 보유한 전문가입니다.',
  },
  {
    question: '수수료 구조는?',
    answer: '자산운용 수수료는 운용 규모와 성과에 따라 차등 적용됩니다. 투명한 보수 체계로 숨겨진 비용 없이 운용됩니다. 상세 내용은 1:1 상담 시 안내드립니다.',
  },
  {
    question: '해외 자산도 관리 가능한가요?',
    answer: '네, 미국, 유럽, 아시아 등 글로벌 네트워크를 통해 해외 부동산, 증권, 대체투자 자산까지 통합 관리가 가능합니다. 현지 전문가 네트워크와 협력하여 최적의 투자 기회를 제공합니다.',
  },
  {
    question: '상담은 어떻게 진행되나요?',
    answer: '온라인 예약 후 전담 매니저가 연락드립니다. 첫 상담은 서울 강남 본점 또는 고객님이 원하시는 장소에서 1:1 대면으로 진행되며, 이후 정기 리뷰와 수시 소통이 이루어집니다.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <SectionTransition className="py-24 bg-surface">
      <section id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <TextReveal 
              text="자주 묻는 질문" 
              className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
            />
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <div className="border border-border rounded-lg overflow-hidden bg-surface-light">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold hover:bg-background/30 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-secondary transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="px-6 pb-5 text-text-secondary">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
    </SectionTransition>
  )
}

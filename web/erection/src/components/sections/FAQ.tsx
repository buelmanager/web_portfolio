'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import FadeInSection from '@/components/animations/FadeInSection'
import TextReveal from '@/components/animations/TextReveal'

const faqs = [
  {
    question: '견적은 어떻게 받을 수 있나요?',
    answer: '전화 또는 온라인 문의를 통해 상담 일정을 잡으시면, 전문 상담사가 현장을 방문하여 무료로 실측 및 견적을 제공해 드립니다. 견적서는 상세한 항목별 비용을 포함하여 투명하게 안내됩니다.',
  },
  {
    question: '시공 기간은 얼마나 걸리나요?',
    answer: '시공 기간은 공사 규모와 종류에 따라 다릅니다. 일반적으로 아파트 인테리어는 4~6주, 단독주택 신축은 4~6개월, 상업 공간 인테리어는 3~8주 정도 소요됩니다. 정확한 일정은 현장 실측 후 안내해 드립니다.',
  },
  {
    question: '시공 중 거주가 가능한가요?',
    answer: '부분 리모델링의 경우 거주하면서 공사가 가능합니다. 단, 전체 리모델링이나 구조 변경 공사의 경우에는 안전과 작업 효율을 위해 임시 거주를 권장드립니다.',
  },
  {
    question: '하자 보수는 어떻게 진행되나요?',
    answer: '로터스건설은 시공 완료 후 1년간 무상 하자 보수 서비스를 제공합니다. 하자 발생 시 24시간 내 접수 확인 후, 신속하게 처리해 드립니다. 25년 경력의 신뢰를 바탕으로 책임 시공합니다.',
  },
  {
    question: '자재는 직접 선택할 수 있나요?',
    answer: '네, 물론입니다. 고객님의 취향과 예산에 맞춰 다양한 자재를 제안해 드리며, 직접 선택하신 자재로 시공도 가능합니다. 또한 파트너사를 통해 프리미엄 자재를 합리적인 가격에 제공해 드립니다.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 bg-surface">
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
                  className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold hover:bg-black/30 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-5 text-gray-400">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}

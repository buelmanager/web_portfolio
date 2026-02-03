'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import FadeInSection from '@/components/animations/FadeInSection'
import TextReveal from '@/components/animations/TextReveal'

const faqs = [
  {
    question: '배송은 얼마나 걸리나요?',
    answer: '일반 배송은 영업일 기준 2-3일 소요됩니다. 서버, 워크스테이션 등 대형 제품은 별도 협의가 필요할 수 있습니다. 경기도 파주 출고센터에서 신속하게 발송됩니다.',
  },
  {
    question: '세금계산서 발행이 가능한가요?',
    answer: '네, 사업자 고객을 위한 세금계산서 발행이 가능합니다. 주문 시 사업자등록번호와 함께 요청해 주시면 즉시 처리해 드립니다.',
  },
  {
    question: '대량 구매 시 할인이 있나요?',
    answer: '대량 구매 고객에게는 특별 할인가를 제공합니다. 온라인 견적 시스템을 통해 맞춤 견적을 요청하시거나, 고객센터(070-8873-8472)로 문의해 주세요.',
  },
  {
    question: '중고/리퍼비시 제품의 품질은 어떤가요?',
    answer: '25년 재고 관리 노하우를 바탕으로 모든 중고/리퍼비시 제품은 철저한 테스트와 검수를 거칩니다. 제품 상태는 상세히 안내드리며, 일정 기간 보증도 제공합니다.',
  },
  {
    question: '프린터 렌탈 서비스는 어떻게 이용하나요?',
    answer: '장기 사용을 원하시는 고객을 위해 프린터 렌탈 서비스를 제공합니다. 1:1 문의를 통해 사용 환경과 필요 사양을 알려주시면 최적의 렌탈 플랜을 제안해 드립니다.',
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

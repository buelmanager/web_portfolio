'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import FadeInSection from '@/components/animations/FadeInSection'
import TextReveal from '@/components/animations/TextReveal'

const faqs = [
  {
    question: '태양광 설치 비용은 얼마인가요?',
    answer: '설치 비용은 용량과 설치 환경에 따라 다릅니다. 가정용 3kW 기준 약 500~700만원이며, 정부 보조금(최대 175만원)을 지원받을 수 있습니다. 무료 현장 실사 후 정확한 견적을 안내해 드립니다.',
  },
  {
    question: '정부 보조금은 어떻게 받나요?',
    answer: '저희가 보조금 신청부터 승인까지 모든 과정을 대행해 드립니다. 한국에너지공단 신재생에너지센터를 통해 주택용, 상업용 모두 보조금 지원이 가능하며, 지자체별 추가 지원도 안내해 드립니다.',
  },
  {
    question: '설치 후 유지보수는 어떻게 하나요?',
    answer: '24시간 원격 모니터링 시스템으로 발전량과 시스템 상태를 실시간 확인합니다. 연 2회 정기 점검을 무료로 제공하며, 고장 발생 시 24시간 내 긴급 출동 서비스를 운영합니다.',
  },
  {
    question: '투자 대비 수익은 어느 정도인가요?',
    answer: '일반적으로 5~7년 내 초기 투자비 회수가 가능하며, 이후 15~20년간 순수익이 발생합니다. 상업용의 경우 연 15% 이상의 투자 수익률을 기대할 수 있습니다.',
  },
  {
    question: '태양광 패널 수명은 얼마나 되나요?',
    answer: '고품질 태양광 패널의 수명은 25~30년입니다. 저희는 25년 출력 보증(80% 이상)을 제공하는 Tier-1 등급 패널만 사용하며, 인버터는 10년 품질 보증을 제공합니다.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 bg-surface">
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

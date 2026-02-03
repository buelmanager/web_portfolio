'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import FadeInSection from '@/components/animations/FadeInSection'
import TextReveal from '@/components/animations/TextReveal'

const faqs = [
  {
    question: '체크인/체크아웃 시간은?',
    answer: '체크인은 오후 3시부터, 체크아웃은 오전 11시까지입니다. 얼리 체크인 또는 레이트 체크아웃을 원하시는 경우, 사전에 컨시어지에게 문의해 주시면 가능 여부를 안내해 드립니다. 프리미엄 스위트 투숙객에게는 무료 레이트 체크아웃(오후 2시까지)이 제공됩니다.',
  },
  {
    question: '조식은 포함인가요?',
    answer: '객실 요금에는 조식이 포함되어 있지 않습니다. 다만, 다양한 조식 포함 패키지를 제공하고 있으며, 미슐랭 3스타 셰프가 직접 준비하는 프리미엄 조식 뷔페를 별도로 이용하실 수 있습니다. 인룸 다이닝 조식 서비스도 24시간 가능합니다.',
  },
  {
    question: '반려동물 동반 가능한가요?',
    answer: '네, 반려동물 친화 객실을 운영하고 있습니다. 소형견(7kg 이하)에 한해 동반 투숙이 가능하며, 사전 예약이 필요합니다. 반려동물용 침대, 식기, 간식 등 펫 어메니티를 제공해 드리며, 호텔 내 펫 스파 서비스도 이용 가능합니다.',
  },
  {
    question: '공항 픽업 서비스가 있나요?',
    answer: '네, 프라이빗 리무진 공항 픽업 서비스를 제공합니다. 인천국제공항 및 김포공항에서 호텔까지 편안하게 이동하실 수 있으며, 예약 시 항공편 정보를 알려주시면 항공기 지연 시에도 대기해 드립니다. 스위트 투숙객에게는 무료로 제공됩니다.',
  },
  {
    question: '장기 투숙 할인이 있나요?',
    answer: '7박 이상 장기 투숙 시 최대 20%까지 할인 혜택을 제공합니다. 30박 이상의 익스텐디드 스테이 프로그램은 별도의 특별 요금과 함께 주간 하우스키핑, 세탁 서비스 등 추가 혜택이 포함됩니다. 자세한 사항은 예약팀으로 문의해 주세요.',
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
                  className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold hover:bg-surface transition-colors"
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
  )
}

'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import FadeInSection from '@/components/animations/FadeInSection'
import TextReveal from '@/components/animations/TextReveal'

const faqs = [
  {
    question: '예약은 어떻게 하나요?',
    answer: '온라인 예약 또는 전화(02-XXX-XXXX)로 예약하실 수 있습니다. 온라인 예약은 24시간 가능하며, 전화 예약은 런치 11:00~15:00, 디너 17:00~22:00에 가능합니다. 특별한 날의 예약은 최소 3일 전에 해주시면 더욱 완벽한 준비가 가능합니다.',
  },
  {
    question: '드레스 코드가 있나요?',
    answer: '스마트 캐주얼을 권장드립니다. 반바지, 슬리퍼, 운동복은 정중히 사양하고 있으며, 프라이빗 룸 이용 시에는 보다 자유로운 복장이 가능합니다. 특별한 행사의 경우 사전에 문의해 주시면 안내드리겠습니다.',
  },
  {
    question: '주차는 가능한가요?',
    answer: '발렛파킹 서비스를 무료로 제공해 드리고 있습니다. 레스토랑 입구에서 발렛 직원에게 차량 키를 맡겨주시면 됩니다. 식사 후 출차 요청은 계산 시 말씀해 주시면 미리 준비해 드립니다.',
  },
  {
    question: '코르키지가 가능한가요?',
    answer: '코르키지는 병당 30,000원입니다. 단, 저희 와인 리스트에 있는 와인은 코르키지가 불가하오니 양해 부탁드립니다. 특별한 빈티지 와인의 경우 소믈리에가 최적의 상태로 서빙해 드립니다.',
  },
  {
    question: '특별한 날 서프라이즈가 가능한가요?',
    answer: '생일, 기념일 등 특별한 날을 위한 케이크 및 데코레이션 서비스를 제공합니다. 예약 시 미리 말씀해 주시면, 시그니처 디저트 플레이트와 함께 특별한 메시지 카드를 준비해 드립니다. 프로포즈, 기업 행사 등 특별 이벤트도 문의해 주세요.',
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

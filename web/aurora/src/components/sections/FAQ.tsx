'use client'

import { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import { gsap } from 'gsap'
import FadeInSection from '@/components/animations/FadeInSection'
import TextReveal from '@/components/animations/TextReveal'

const faqs = [
  {
    question: '예약은 어떻게 하나요?',
    answer: '온라인 예약 시스템을 통해 24시간 예약이 가능합니다. 전화 예약은 운영 시간(10:00~22:00) 중 가능하며, 원하시는 날짜와 프로그램을 선택해 주시면 담당 테라피스트를 배정해 드립니다.',
  },
  {
    question: '프로그램 소요 시간은 어떻게 되나요?',
    answer: '프로그램에 따라 60분, 90분, 120분으로 구성되어 있습니다. 시그니처 프로그램은 120분, 기본 프로그램은 60분이 소요됩니다. 패키지 이용 시 추가 휴식 시간이 제공됩니다.',
  },
  {
    question: '방문 시 준비물이 필요한가요?',
    answer: '특별한 준비물은 필요하지 않습니다. 가운, 슬리퍼, 어메니티 등 모든 물품이 준비되어 있습니다. 편안한 마음으로 방문해 주시면 됩니다.',
  },
  {
    question: '임산부도 이용 가능한가요?',
    answer: '임신 16주 이후부터 전문 산전 마사지 프로그램을 이용하실 수 있습니다. 예약 시 임신 여부를 알려주시면 안전하고 편안한 케어를 제공해 드립니다.',
  },
  {
    question: '취소 및 환불 정책은 어떻게 되나요?',
    answer: '예약일 기준 48시간 전까지 무료 취소가 가능합니다. 24시간 전 취소 시 50%, 당일 취소 및 노쇼의 경우 100% 취소 수수료가 발생합니다.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const contentRefs = useRef<(HTMLDivElement | null)[]>([])

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  useEffect(() => {
    contentRefs.current.forEach((ref, index) => {
      if (!ref) return
      
      if (openIndex === index) {
        gsap.to(ref, {
          height: 'auto',
          opacity: 1,
          duration: 0.4,
          ease: 'power2.out'
        })
      } else {
        gsap.to(ref, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: 'power2.in'
        })
      }
    })
  }, [openIndex])

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <TextReveal 
            text="자주 묻는 질문" 
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground"
          />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FadeInSection key={index} delay={index * 0.1}>
              <div className="border border-border rounded-2xl overflow-hidden bg-surface-light hover:border-primary/30 transition-colors">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-foreground hover:bg-primary/5 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <div
                  ref={el => { contentRefs.current[index] = el }}
                  className="overflow-hidden"
                  style={{ height: index === 0 ? 'auto' : 0, opacity: index === 0 ? 1 : 0 }}
                >
                  <div className="px-6 pb-5 text-text-secondary leading-relaxed">
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

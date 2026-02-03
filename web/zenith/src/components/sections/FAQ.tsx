'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import FadeInSection from '@/components/animations/FadeInSection'
import TextReveal from '@/components/animations/TextReveal'

const faqs = [
  {
    question: '다이아몬드 인증서는 제공되나요?',
    answer: '모든 다이아몬드에는 GIA(미국보석학회) 또는 IGI 국제 인증서가 포함됩니다. 인증서에는 캐럿, 컬러, 클래리티, 컷 등 4C 등급과 함께 고유 식별번호가 기재되어 있어 진품 보증과 자산 가치를 증명합니다.',
  },
  {
    question: '시계 수리/오버홀은 어떻게 하나요?',
    answer: '스위스 본사 인증 워치메이커가 상주하는 서비스 센터에서 정기 점검 및 오버홀을 진행합니다. 기계식 시계는 3-5년 주기의 오버홀을 권장드리며, 부티크 방문 또는 픽업 서비스를 통해 접수 가능합니다.',
  },
  {
    question: '맞춤 제작 기간은 얼마나 소요되나요?',
    answer: '비스포크 주얼리 제작은 디자인 상담부터 완성까지 약 4-8주가 소요됩니다. 스위스 본사 장인이 직접 제작하는 하이 주얼리의 경우 3-6개월이 필요할 수 있으며, 제작 과정은 단계별로 안내드립니다.',
  },
  {
    question: '분할 결제가 가능한가요?',
    answer: '프리미엄 고객을 위한 무이자 분할 결제 프로그램을 운영합니다. 신용카드 최대 12개월 무이자 할부 또는 zenith VIP 회원 전용 맞춤 결제 플랜을 제공해드립니다.',
  },
  {
    question: '재판매 서비스가 있나요?',
    answer: 'zenith 구매 제품에 한해 트레이드인 및 위탁 판매 서비스를 제공합니다. 전문 감정사가 공정한 시세로 감정하며, 새 제품 구매 시 크레딧으로 사용하실 수 있습니다.',
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
                  <div className="px-6 pb-5 text-text-muted leading-relaxed">
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

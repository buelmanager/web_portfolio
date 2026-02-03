'use client'

import { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import { gsap } from 'gsap'
import FadeInSection from '@/components/animations/FadeInSection'
import TextReveal from '@/components/animations/TextReveal'

const faqs = [
  {
    question: '설계 기간은 얼마나 걸리나요?',
    answer: '프로젝트 규모와 복잡도에 따라 달라지지만, 일반적으로 기본 설계에 4-8주, 실시 설계에 6-12주가 소요됩니다. 첫 상담 시 프로젝트의 특성을 파악하여 예상 일정을 안내해 드립니다.',
  },
  {
    question: '설계 비용은 어떻게 산정되나요?',
    answer: '설계비는 건축물의 용도, 연면적, 설계 범위에 따라 산정됩니다. 대한건축사협회 기준을 참고하며, 프로젝트의 특성과 고객의 요구사항을 고려하여 합리적인 견적을 제안해 드립니다. 무료 상담을 통해 예산 범위를 확인해 보세요.',
  },
  {
    question: '시공사 연결도 가능한가요?',
    answer: '네, 가능합니다. 오랜 협력 관계를 유지해온 신뢰할 수 있는 시공사를 추천해 드릴 수 있으며, 설계 단계부터 시공까지 원활한 진행을 위해 전 과정을 조율해 드립니다.',
  },
  {
    question: '인허가 대행도 해주시나요?',
    answer: '모든 인허가 절차를 대행해 드립니다. 건축허가, 용도변경, 착공신고, 사용승인 등 복잡한 행정 절차를 전문적으로 처리하여 고객님의 시간과 노력을 절약해 드립니다.',
  },
  {
    question: '3D 시각화는 언제 받을 수 있나요?',
    answer: '기본 설계 완료 후 3D 시각화 작업이 진행됩니다. 일반적으로 2-3주 내에 고품질 렌더링 이미지와 VR 투어 영상을 제공해 드려, 완공 전 공간을 생생하게 미리 경험하실 수 있습니다.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const answerRefs = useRef<(HTMLDivElement | null)[]>([])

  const toggleFAQ = (index: number) => {
    const prevIndex = openIndex
    setOpenIndex(openIndex === index ? null : index)

    if (prevIndex !== null && answerRefs.current[prevIndex]) {
      gsap.to(answerRefs.current[prevIndex], {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.inOut'
      })
    }

    if (openIndex !== index && answerRefs.current[index]) {
      gsap.fromTo(answerRefs.current[index],
        { height: 0, opacity: 0 },
        { height: 'auto', opacity: 1, duration: 0.4, ease: 'power2.out' }
      )
    }
  }

  useEffect(() => {
    if (answerRefs.current[0]) {
      gsap.set(answerRefs.current[0], { height: 'auto', opacity: 1 })
    }
  }, [])

  return (
    <section id="faq" className="py-24 bg-surface">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <TextReveal 
            text="자주 묻는 질문" 
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-primary"
          />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FadeInSection key={index} delay={index * 0.1}>
              <div className="border border-border overflow-hidden bg-white hover:border-secondary/30 transition-colors duration-300">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-primary hover:text-secondary transition-colors group"
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-secondary transition-transform duration-300 flex-shrink-0 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <div
                  ref={(el) => { answerRefs.current[index] = el }}
                  className={`overflow-hidden ${openIndex === 0 && index === 0 ? '' : 'h-0 opacity-0'}`}
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

'use client'

import { UtensilsCrossed, ChefHat, Wine, Salad, Clock, Award, Sparkles, Users } from 'lucide-react'
import FadeInSection from '@/components/animations/FadeInSection'
import TextReveal from '@/components/animations/TextReveal'

const features = [
  {
    icon: UtensilsCrossed,
    title: '시즌 코스 메뉴',
    description: '제철 최상의 재료로 구성된 프리미엄 코스',
  },
  {
    icon: Users,
    title: '프라이빗 다이닝',
    description: '특별한 날을 위한 독립된 공간',
  },
  {
    icon: Wine,
    title: '와인 페어링',
    description: '소믈리에가 추천하는 완벽한 매칭',
  },
  {
    icon: Salad,
    title: '신선한 재료',
    description: '매일 공수되는 최상급 식재료',
  },
  {
    icon: Clock,
    title: '런치 & 디너',
    description: '점심 코스부터 풀코스 디너까지',
  },
  {
    icon: Award,
    title: '미슐랭 경력 셰프',
    description: '세계 유수의 레스토랑 경력',
  },
  {
    icon: Sparkles,
    title: '시그니처 디저트',
    description: '파티시에의 예술적 창작품',
  },
  {
    icon: ChefHat,
    title: '프라이빗 이벤트',
    description: '기업 행사, 웨딩, 가족 모임',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <TextReveal 
            text="특별한 경험을 선사합니다" 
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          />
          <FadeInSection delay={0.3}>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              최상의 재료와 장인의 손길이 만나는 곳, 
              <br className="hidden md:block" />
              미식의 모든 순간을 완벽하게 준비합니다.
            </p>
          </FadeInSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FadeInSection 
              key={feature.title} 
              delay={index * 0.1}
              direction="up"
            >
              <div className="group p-6 bg-surface-light border border-border rounded-lg hover-lift cursor-pointer">
                <div className="w-12 h-12 mb-4 flex items-center justify-center bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-text-secondary">
                  {feature.description}
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}

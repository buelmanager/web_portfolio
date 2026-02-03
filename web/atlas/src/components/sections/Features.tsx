'use client'

import { Hotel, Utensils, Waves, Dumbbell, Wine, Users, Award, Globe } from 'lucide-react'
import FadeInSection from '@/components/animations/FadeInSection'
import TextReveal from '@/components/animations/TextReveal'

const features = [
  {
    icon: Hotel,
    title: '프리미엄 스위트',
    description: '오션뷰 & 시티뷰 객실',
  },
  {
    icon: Utensils,
    title: '미슐랭 다이닝',
    description: '3스타 셰프의 레스토랑',
  },
  {
    icon: Waves,
    title: '인피니티 풀',
    description: '루프탑 & 비치 풀',
  },
  {
    icon: Dumbbell,
    title: '피트니스 & 요가',
    description: '24시간 웰니스 센터',
  },
  {
    icon: Wine,
    title: '와인 셀러',
    description: '5,000병 프리미엄 컬렉션',
  },
  {
    icon: Users,
    title: '컨시어지 서비스',
    description: '24시간 맞춤 케어',
  },
  {
    icon: Award,
    title: '국제 어워드',
    description: 'Forbes 5-Star 인증',
  },
  {
    icon: Globe,
    title: '글로벌 네트워크',
    description: '전세계 50개 호텔',
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
              100년의 전통과 현대적 럭셔리가 만나는 곳,
              <br className="hidden md:block" />
              완벽한 휴식의 모든 순간을 준비합니다.
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
                <div className="w-12 h-12 mb-4 flex items-center justify-center bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-secondary" />
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

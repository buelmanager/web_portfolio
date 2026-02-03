'use client'

import { Building2, Home, Store, Paintbrush, HardHat, Ruler, Shield, Handshake } from 'lucide-react'
import FadeInSection from '@/components/animations/FadeInSection'
import TextReveal from '@/components/animations/TextReveal'

const features = [
  {
    icon: Building2,
    title: '신축 건설',
    description: '주거 및 상업용 건물 신축 설계부터 완공까지',
  },
  {
    icon: Home,
    title: '주거 리모델링',
    description: '아파트, 빌라, 단독주택 인테리어 및 리모델링',
  },
  {
    icon: Store,
    title: '상업 공간 시공',
    description: '사무실, 매장, 식당 등 상업 인테리어 전문',
  },
  {
    icon: Paintbrush,
    title: '인테리어 디자인',
    description: '트렌디한 감각의 맞춤형 공간 디자인',
  },
  {
    icon: HardHat,
    title: '리모델링 공사',
    description: '구조 변경부터 마감까지 토탈 리모델링',
  },
  {
    icon: Ruler,
    title: '실측 및 견적',
    description: '무료 현장 방문 실측 및 정확한 견적 제공',
  },
  {
    icon: Shield,
    title: '품질 보증',
    description: '시공 후 하자 보수 및 A/S 보증 서비스',
  },
  {
    icon: Handshake,
    title: '원스톱 서비스',
    description: '설계, 인허가, 시공, 사후관리까지 한번에',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <TextReveal
            text="전문 시공 서비스"
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          />
          <FadeInSection delay={0.3}>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              25년 건설 노하우로 주거부터 상업 공간까지
              <br className="hidden md:block" />
              고객의 꿈을 현실로 만들어드립니다.
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
                <p className="text-sm text-gray-400">
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

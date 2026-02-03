'use client'

import { Sun, Battery, Zap, Building2, Leaf, Settings, Shield, HeadphonesIcon } from 'lucide-react'
import FadeInSection from '@/components/animations/FadeInSection'
import TextReveal from '@/components/animations/TextReveal'

const features = [
  {
    icon: Sun,
    title: '태양광 발전 시스템',
    description: '고효율 태양광 패널과 인버터로 최적의 발전량 확보',
  },
  {
    icon: Battery,
    title: 'ESS 에너지 저장',
    description: '잉여 전력 저장으로 24시간 안정적인 전력 공급',
  },
  {
    icon: Zap,
    title: '전력 계통 연계',
    description: '한전 계통 연계 및 전력 판매 시스템 구축',
  },
  {
    icon: Building2,
    title: '산업용 발전소',
    description: '공장, 창고 등 대규모 산업시설 맞춤 설계',
  },
  {
    icon: Leaf,
    title: '친환경 인증',
    description: 'REC 발급, 탄소배출권 확보 지원',
  },
  {
    icon: Settings,
    title: '유지보수 서비스',
    description: '24시간 원격 모니터링 및 정기 점검',
  },
  {
    icon: Shield,
    title: '장기 보증',
    description: '패널 25년, 인버터 10년 품질 보증',
  },
  {
    icon: HeadphonesIcon,
    title: '전문 컨설팅',
    description: '부지 분석부터 인허가까지 원스톱 서비스',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <TextReveal 
            text="토탈 에너지 솔루션" 
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          />
          <FadeInSection delay={0.3}>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              태양광 발전부터 에너지 저장, 유지보수까지
              <br className="hidden md:block" />
              15년 노하우로 최적의 신재생에너지 솔루션을 제공합니다.
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

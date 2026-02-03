'use client'

import { Monitor, Server, Laptop, Cpu, Tv, Refrigerator, Wrench, Shield } from 'lucide-react'
import FadeInSection from '@/components/animations/FadeInSection'
import TextReveal from '@/components/animations/TextReveal'

const features = [
  {
    icon: Monitor,
    title: '데스크탑 & 워크스테이션',
    description: 'Dell PRECISION, HP Z시리즈 등 전문가급 워크스테이션',
  },
  {
    icon: Server,
    title: '서버 솔루션',
    description: 'POWEREDGE, ProLiant 등 엔터프라이즈 서버',
  },
  {
    icon: Laptop,
    title: '노트북 & 태블릿',
    description: '비즈니스 노트북부터 하이엔드 게이밍까지',
  },
  {
    icon: Cpu,
    title: '컴퓨터 부품',
    description: 'CPU, GPU, RAM, SSD 등 고성능 부품',
  },
  {
    icon: Tv,
    title: '대형 가전',
    description: 'TV, 냉장고, 세탁기 등 프리미엄 가전',
  },
  {
    icon: Refrigerator,
    title: '생활 가전',
    description: '주방가전, 계절가전, 음향기기',
  },
  {
    icon: Wrench,
    title: '중고 & 리퍼비시',
    description: '검증된 품질의 가성비 제품',
  },
  {
    icon: Shield,
    title: 'B2B 전문 서비스',
    description: '대량 구매, 세금계산서, 맞춤 견적',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <TextReveal 
            text="프리미엄 서비스의 모든 것" 
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          />
          <FadeInSection delay={0.3}>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              IT 하드웨어부터 생활가전까지, 25년 노하우로 
              <br className="hidden md:block" />
              엄선된 2,000여 종의 프리미엄 제품을 만나보세요.
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

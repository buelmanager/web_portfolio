'use client'

import { TrendingUp, Shield, Globe, PieChart, Briefcase, Users, Award, Lock } from 'lucide-react'
import FadeInSection from '@/components/animations/FadeInSection'
import TextReveal from '@/components/animations/TextReveal'
import SectionTransition from '@/components/animations/SectionTransition'

const features = [
  {
    icon: TrendingUp,
    title: '맞춤형 포트폴리오',
    description: '당신만의 투자 전략',
  },
  {
    icon: Globe,
    title: '글로벌 자산배분',
    description: '전세계 시장 접근',
  },
  {
    icon: PieChart,
    title: '세무 최적화',
    description: '절세 전략 컨설팅',
  },
  {
    icon: Briefcase,
    title: '부동산 투자',
    description: '프리미엄 자산 발굴',
  },
  {
    icon: Users,
    title: '상속 설계',
    description: '세대 간 자산 이전',
  },
  {
    icon: Award,
    title: '전담 PB 배정',
    description: '1:1 프라이빗 서비스',
  },
  {
    icon: Shield,
    title: '대체투자',
    description: 'PE, VC, 헤지펀드 접근',
  },
  {
    icon: Lock,
    title: '보안 & 프라이버시',
    description: '철저한 기밀 보장',
  },
]

export default function Features() {
  return (
    <SectionTransition className="py-24 bg-surface">
      <section id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <TextReveal 
              text="프리미엄 자산관리 서비스" 
              className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
            />
            <FadeInSection delay={0.3}>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                초고액 자산가를 위한 맞춤형 웰스 매니지먼트
                <br className="hidden md:block" />
                글로벌 네트워크와 전문가 팀이 함께합니다.
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
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-secondary transition-colors">
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
    </SectionTransition>
  )
}

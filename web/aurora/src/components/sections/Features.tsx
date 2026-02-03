'use client'

import { Leaf, Droplets, Sun, Moon, Heart, Sparkles, Wind, Flower2 } from 'lucide-react'
import FadeInSection from '@/components/animations/FadeInSection'
import TextReveal from '@/components/animations/TextReveal'

const features = [
  {
    icon: Leaf,
    title: '시그니처 아로마 테라피',
    description: '천연 에센셜 오일로 깊은 이완',
  },
  {
    icon: Sparkles,
    title: '프라이빗 스파 스위트',
    description: '오직 당신만을 위한 독립된 공간',
  },
  {
    icon: Droplets,
    title: '하이드로 테라피',
    description: '미네랄 워터로 피부 재생',
  },
  {
    icon: Moon,
    title: '명상 & 요가',
    description: '마음의 평화를 찾는 시간',
  },
  {
    icon: Sun,
    title: '페이셜 트리트먼트',
    description: '자연 유래 성분의 프리미엄 케어',
  },
  {
    icon: Wind,
    title: '바디 스크럽 & 랩',
    description: '전신 디톡스와 보습',
  },
  {
    icon: Heart,
    title: '커플 스파 패키지',
    description: '소중한 사람과 함께하는 힐링',
  },
  {
    icon: Flower2,
    title: '웰니스 컨설팅',
    description: '맞춤형 프로그램 설계',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <TextReveal 
            text="몸과 마음의 균형을 찾다" 
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground"
          />
          <FadeInSection delay={0.3}>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              자연의 선물로 완성되는 프리미엄 웰니스 프로그램.
              <br className="hidden md:block" />
              당신만을 위한 맞춤 케어를 경험하세요.
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
              <div className="group p-6 bg-surface-light border border-border rounded-2xl hover-lift cursor-pointer transition-all duration-300 hover:border-primary/30">
                <div className="w-14 h-14 mb-5 flex items-center justify-center bg-primary/10 rounded-xl group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-text-muted">
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

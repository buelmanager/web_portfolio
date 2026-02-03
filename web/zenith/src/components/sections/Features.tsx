'use client'

import { useRef } from 'react'
import { Gem, Watch, Award, Sparkles, Shield, Heart, Crown, Star } from 'lucide-react'
import FadeInSection from '@/components/animations/FadeInSection'
import TextReveal from '@/components/animations/TextReveal'

const features = [
  {
    icon: Gem,
    title: '다이아몬드 컬렉션',
    description: 'GIA 인증 최상급 다이아몬드',
  },
  {
    icon: Watch,
    title: '스위스 타임피스',
    description: '기계식 무브먼트의 정수',
  },
  {
    icon: Award,
    title: '맞춤 제작',
    description: '당신만을 위한 유일한 작품',
  },
  {
    icon: Shield,
    title: '평생 보증',
    description: '세대를 넘어 전해지는 가치',
  },
  {
    icon: Heart,
    title: '브라이덜 컬렉션',
    description: '영원한 사랑의 약속',
  },
  {
    icon: Sparkles,
    title: '빈티지 컬렉션',
    description: '시간이 만든 희소성',
  },
  {
    icon: Crown,
    title: 'VIP 라운지',
    description: '프라이빗 쇼룸 경험',
  },
  {
    icon: Star,
    title: '감정 서비스',
    description: '전문가의 정밀 감정',
  },
]

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    const rotateX = (y - centerY) / 10
    const rotateY = (centerX - x) / 10
    
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
  }

  const handleMouseLeave = () => {
    if (!cardRef.current) return
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)'
  }

  return (
    <FadeInSection delay={index * 0.1} direction="up">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group p-8 bg-surface-light border border-border rounded-lg cursor-pointer transition-all duration-300 card-3d"
      >
        <div className="w-14 h-14 mb-6 flex items-center justify-center bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
          <feature.icon className="w-7 h-7 text-primary" />
        </div>
        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors tracking-wide">
          {feature.title}
        </h3>
        <p className="text-sm text-text-muted leading-relaxed">
          {feature.description}
        </p>
      </div>
    </FadeInSection>
  )
}

export default function Features() {
  return (
    <section id="features" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <TextReveal 
            text="타임리스 컬렉션" 
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          />
          <FadeInSection delay={0.3}>
            <p className="text-lg text-text-muted max-w-2xl mx-auto tracking-wide">
              1865년부터 이어온 스위스 장인정신으로
              <br className="hidden md:block" />
              영원한 가치를 담은 작품을 선사합니다
            </p>
          </FadeInSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

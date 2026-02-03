'use client'

import { useState } from 'react'
import Image from 'next/image'
import FadeInSection from '@/components/animations/FadeInSection'
import TextReveal from '@/components/animations/TextReveal'

const categories = {
  '바디케어': [
    {
      name: '딥티슈 마사지',
      type: '근육 이완',
      description: '깊은 근육 조직까지 집중 관리하여 만성 피로와 통증을 해소합니다',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80',
      price: '₩180,000',
      duration: '60분',
    },
    {
      name: '핫스톤 테라피',
      type: '온열 요법',
      description: '따뜻한 현무암 돌로 근육 이완과 혈액순환을 촉진합니다',
      image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&q=80',
      price: '₩220,000',
      duration: '90분',
    },
    {
      name: '아로마 마사지',
      type: '이완 요법',
      description: '천연 에센셜 오일로 심신의 안정과 깊은 이완을 선사합니다',
      image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80',
      price: '₩200,000',
      duration: '75분',
    },
  ],
  '페이셜': [
    {
      name: '안티에이징 페이셜',
      type: '피부 재생',
      description: '자연 유래 성분으로 탄력 있고 젊은 피부를 되찾아 드립니다',
      image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&q=80',
      price: '₩250,000',
      duration: '90분',
    },
    {
      name: '하이드레이팅 케어',
      type: '수분 보습',
      description: '깊은 수분 공급으로 촉촉하고 빛나는 피부 완성',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80',
      price: '₩200,000',
      duration: '75분',
    },
    {
      name: '클래리파잉 페이셜',
      type: '딥클렌징',
      description: '모공 속 노폐물 제거와 피부 정화 케어',
      image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80',
      price: '₩180,000',
      duration: '60분',
    },
  ],
  '패키지': [
    {
      name: '커플 로맨틱 스파',
      type: '커플 전용',
      description: '소중한 사람과 함께하는 프라이빗 스파 경험',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80',
      price: '₩450,000',
      duration: '150분',
    },
    {
      name: '데이 스파 패키지',
      type: '풀 코스',
      description: '바디 + 페이셜 + 명상의 완벽한 휴식 코스',
      image: 'https://images.unsplash.com/photo-1591343395082-e120087004b4?w=600&q=80',
      price: '₩380,000',
      duration: '180분',
    },
    {
      name: '프리미엄 멤버십',
      type: '월정액',
      description: '매월 2회 시그니처 프로그램 + 부가 혜택',
      image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=600&q=80',
      price: '₩350,000/월',
      duration: '횟수 무제한',
    },
  ],
  '웰니스': [
    {
      name: '명상 & 요가',
      type: '마음 케어',
      description: '전문 강사와 함께하는 마음 챙김 프로그램',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80',
      price: '₩80,000',
      duration: '60분',
    },
    {
      name: '사운드 힐링',
      type: '소리 치유',
      description: '싱잉볼과 자연의 소리로 마음의 평화 찾기',
      image: 'https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=600&q=80',
      price: '₩120,000',
      duration: '75분',
    },
    {
      name: '웰니스 컨설팅',
      type: '맞춤 설계',
      description: '개인별 라이프스타일에 맞는 웰니스 플랜 설계',
      image: 'https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?w=600&q=80',
      price: '₩50,000',
      duration: '45분',
    },
  ],
}

type CategoryKey = keyof typeof categories

export default function CategorySelector() {
  const [activeTab, setActiveTab] = useState<CategoryKey>('바디케어')
  const [activeIndex, setActiveIndex] = useState(0)

  const currentPrograms = categories[activeTab]
  const activeProgram = currentPrograms[activeIndex]

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <TextReveal 
            text="프로그램 카테고리" 
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground"
          />
        </div>

        <FadeInSection>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {(Object.keys(categories) as CategoryKey[]).map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab)
                  setActiveIndex(0)
                }}
                className={`px-6 py-3 font-medium text-sm tracking-wider transition-all duration-300 rounded-full ${
                  activeTab === tab
                    ? 'bg-primary text-white'
                    : 'bg-surface text-text-secondary hover:text-foreground hover:bg-surface-light border border-border'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </FadeInSection>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <FadeInSection direction="left">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src={activeProgram.image}
                alt={activeProgram.name}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-foreground text-sm rounded-full">
                {activeProgram.duration}
              </div>
            </div>
          </FadeInSection>

          <FadeInSection direction="right">
            <div className="space-y-6">
              <div>
                <span className="text-primary text-sm font-medium tracking-wider">
                  {activeProgram.type}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-foreground">
                  {activeProgram.name}
                </h3>
                <p className="text-text-secondary text-lg mb-6 leading-relaxed">
                  {activeProgram.description}
                </p>
                <p className="text-2xl font-bold text-primary mb-8">
                  {activeProgram.price}
                </p>
                <a
                  href="#contact"
                  className="inline-block px-8 py-4 bg-primary hover:bg-primary-hover text-white font-medium tracking-wide transition-all duration-300 rounded-full"
                >
                  예약하기
                </a>
              </div>

              <div className="flex gap-4 pt-8 border-t border-border">
                {currentPrograms.map((program, index) => (
                  <button
                    key={program.name}
                    onClick={() => setActiveIndex(index)}
                    className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                      activeIndex === index ? 'border-primary' : 'border-transparent opacity-50 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={program.image}
                      alt={program.name}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}

'use client'

import { useState } from 'react'
import Image from 'next/image'
import FadeInSection from '@/components/animations/FadeInSection'
import TextReveal from '@/components/animations/TextReveal'

const categories = {
  '주택용': [
    {
      name: '가정용 태양광 3kW',
      type: '주택용',
      description: '4인 가구 기준 월 전기요금 80% 절감 효과',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80',
      price: '설치비 지원',
    },
    {
      name: '가정용 태양광 5kW',
      type: '주택용',
      description: '전기차 충전까지 가능한 넉넉한 용량',
      image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&q=80',
      price: '정부 보조금',
    },
    {
      name: '가정용 ESS 패키지',
      type: '주택용+ESS',
      description: '태양광+ESS 통합 시스템으로 에너지 자립',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80',
      price: '맞춤 견적',
    },
  ],
  '상업용': [
    {
      name: '건물 옥상 태양광',
      type: '상업용',
      description: '유휴 옥상 공간을 수익 창출 공간으로',
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&q=80',
      price: '무료 현장실사',
    },
    {
      name: '주차장 태양광',
      type: '상업용',
      description: '캐노피형 태양광으로 그늘+발전 동시 해결',
      image: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=600&q=80',
      price: '투자비 회수 5년',
    },
    {
      name: '빌딩 BIPV 시스템',
      type: '건물일체형',
      description: '건물 외관과 조화로운 디자인 태양광',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
      price: '맞춤 설계',
    },
  ],
  '산업용': [
    {
      name: '공장 지붕 태양광',
      type: '산업용',
      description: '대규모 공장 지붕 활용 MW급 발전소',
      image: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=600&q=80',
      price: 'PPA 계약 가능',
    },
    {
      name: '물류센터 태양광',
      type: '산업용',
      description: '넓은 지붕 면적 최대 활용 발전 시스템',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80',
      price: '투자 수익률 15%+',
    },
    {
      name: '산업용 ESS',
      type: '대용량 저장',
      description: '피크 저감 및 전력 품질 향상',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80',
      price: '전력비 30% 절감',
    },
  ],
}

type CategoryKey = keyof typeof categories

export default function CategorySelector() {
  const [activeTab, setActiveTab] = useState<CategoryKey>('주택용')
  const [activeIndex, setActiveIndex] = useState(0)

  const currentProducts = categories[activeTab]
  const activeProduct = currentProducts[activeIndex]

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <TextReveal 
            text="규모별 솔루션" 
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          />
        </div>

        <FadeInSection>
          <div className="flex justify-center gap-4 mb-12">
            {(Object.keys(categories) as CategoryKey[]).map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab)
                  setActiveIndex(0)
                }}
                className={`px-6 py-3 font-semibold text-sm uppercase tracking-wider transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-primary text-white'
                    : 'bg-surface-light text-gray-400 hover:text-white hover:bg-surface'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </FadeInSection>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <FadeInSection direction="left">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src={activeProduct.image}
                alt={activeProduct.name}
                fill
                className="object-cover"
              />
            </div>
          </FadeInSection>

          <FadeInSection direction="right">
            <div className="space-y-6">
              <div>
                <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                  {activeProduct.type}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                  {activeProduct.name}
                </h3>
                <p className="text-gray-400 text-lg mb-6">
                  {activeProduct.description}
                </p>
                <p className="text-2xl font-bold text-primary mb-8">
                  {activeProduct.price}
                </p>
                <a
                  href="#contact"
                  className="inline-block px-8 py-4 bg-primary hover:bg-primary-hover text-white font-semibold tracking-wide transition-all duration-300"
                >
                  무료 상담 신청
                </a>
              </div>

              <div className="flex gap-4 pt-8 border-t border-border">
                {currentProducts.map((product, index) => (
                  <button
                    key={product.name}
                    onClick={() => setActiveIndex(index)}
                    className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      activeIndex === index ? 'border-primary' : 'border-transparent opacity-50 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
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

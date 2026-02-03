'use client'

import { useState } from 'react'
import Image from 'next/image'
import FadeInSection from '@/components/animations/FadeInSection'
import TextReveal from '@/components/animations/TextReveal'

const categories = {
  'IT 하드웨어': [
    {
      name: 'Dell PRECISION',
      type: '워크스테이션',
      description: '전문가급 고성능 워크스테이션으로 복잡한 작업도 손쉽게',
      image: 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=600&q=80',
      price: '견적 문의',
    },
    {
      name: 'HP ProLiant',
      type: '서버',
      description: '안정적인 엔터프라이즈급 서버 솔루션',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
      price: '견적 문의',
    },
    {
      name: '비즈니스 노트북',
      type: '노트북',
      description: '업무 효율을 극대화하는 프리미엄 노트북',
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80',
      price: '₩890,000~',
    },
  ],
  '가전': [
    {
      name: '프리미엄 TV',
      type: 'TV',
      description: '최신 기술이 집약된 대형 스마트 TV',
      image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&q=80',
      price: '₩1,290,000~',
    },
    {
      name: '양문형 냉장고',
      type: '냉장고',
      description: '넉넉한 용량의 프리미엄 냉장고',
      image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=600&q=80',
      price: '₩1,890,000~',
    },
    {
      name: '드럼 세탁기',
      type: '세탁기',
      description: '스마트 기능이 탑재된 대용량 드럼 세탁기',
      image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=600&q=80',
      price: '₩990,000~',
    },
  ],
  '중고 & 리퍼': [
    {
      name: '리퍼 워크스테이션',
      type: '리퍼비시',
      description: '검증된 품질의 가성비 워크스테이션',
      image: 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=600&q=80',
      price: '최대 60% 할인',
    },
    {
      name: '중고 서버',
      type: '중고',
      description: '테스트 완료된 안정적인 중고 서버',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
      price: '최대 70% 할인',
    },
    {
      name: '리퍼 노트북',
      type: '리퍼비시',
      description: '새것같은 상태의 리퍼비시 노트북',
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80',
      price: '최대 50% 할인',
    },
  ],
}

type CategoryKey = keyof typeof categories

export default function CategorySelector() {
  const [activeTab, setActiveTab] = useState<CategoryKey>('IT 하드웨어')
  const [activeIndex, setActiveIndex] = useState(0)

  const currentProducts = categories[activeTab]
  const activeProduct = currentProducts[activeIndex]

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <TextReveal 
            text="카테고리별 제품" 
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
                  견적 문의하기
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

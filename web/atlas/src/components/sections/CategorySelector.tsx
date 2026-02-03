'use client'

import { useState } from 'react'
import Image from 'next/image'
import FadeInSection from '@/components/animations/FadeInSection'
import TextReveal from '@/components/animations/TextReveal'

const menuCategories = {
  '런치': [
    {
      name: '런치 A 코스',
      type: '5 코스',
      description: '셰프의 정수가 담긴 점심 코스. 에피타이저부터 디저트까지 완벽한 구성.',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80',
      price: '₩89,000',
    },
    {
      name: '런치 B 코스',
      type: '7 코스',
      description: '보다 풍성한 점심을 위한 프리미엄 코스.',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80',
      price: '₩129,000',
    },
    {
      name: '비즈니스 런치',
      type: '4 코스',
      description: '비즈니스 미팅에 최적화된 간결한 코스.',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80',
      price: '₩69,000',
    },
  ],
  '디너': [
    {
      name: '시그니처 코스',
      type: '8 코스',
      description: '셰프의 철학이 담긴 풀코스 디너. 최상의 재료로 완성하는 미식의 정점.',
      image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80',
      price: '₩250,000',
    },
    {
      name: '셰프 테이블',
      type: '10 코스',
      description: '오픈 키친에서 셰프와 함께하는 특별한 다이닝 경험.',
      image: 'https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?w=600&q=80',
      price: '₩350,000',
    },
    {
      name: '테이스팅 코스',
      type: '6 코스',
      description: '다양한 요리를 소량으로 즐기는 미식 여정.',
      image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&q=80',
      price: '₩180,000',
    },
  ],
  '와인': [
    {
      name: '와인 페어링',
      type: '5 글라스',
      description: '코스에 맞춰 소믈리에가 엄선한 와인 페어링.',
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80',
      price: '₩90,000~',
    },
    {
      name: '샴페인 셀렉션',
      type: '프리미엄',
      description: '특별한 날을 위한 샴페인 큐레이션.',
      image: 'https://images.unsplash.com/photo-1594372365401-3b5ff14eaaed?w=600&q=80',
      price: '₩150,000~',
    },
    {
      name: '와인 리스트',
      type: '150+ 종',
      description: '전 세계 엄선된 와인 컬렉션.',
      image: 'https://images.unsplash.com/photo-1474722883778-792e7990302f?w=600&q=80',
      price: '문의',
    },
  ],
  '디저트': [
    {
      name: '시그니처 디저트',
      type: '파티시에 추천',
      description: '파티시에의 예술적 감각이 담긴 시그니처 디저트 플레이트.',
      image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&q=80',
      price: '₩35,000',
    },
    {
      name: '디저트 코스',
      type: '3 코스',
      description: '달콤한 마무리를 위한 미니 디저트 코스.',
      image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?w=600&q=80',
      price: '₩55,000',
    },
    {
      name: '기념일 케이크',
      type: '예약 필수',
      description: '특별한 날을 위한 맞춤 케이크. 3일 전 예약.',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80',
      price: '₩80,000~',
    },
  ],
}

type CategoryKey = keyof typeof menuCategories

export default function CategorySelector() {
  const [activeTab, setActiveTab] = useState<CategoryKey>('런치')
  const [activeIndex, setActiveIndex] = useState(0)

  const currentMenus = menuCategories[activeTab]
  const activeMenu = currentMenus[activeIndex]

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <TextReveal 
            text="메뉴 구성" 
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          />
        </div>

        <FadeInSection>
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {(Object.keys(menuCategories) as CategoryKey[]).map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab)
                  setActiveIndex(0)
                }}
                className={`px-6 py-3 font-semibold text-sm uppercase tracking-wider transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-primary text-white'
                    : 'bg-surface-light text-text-secondary hover:text-primary hover:bg-surface border border-border'
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
                src={activeMenu.image}
                alt={activeMenu.name}
                fill
                className="object-cover"
              />
            </div>
          </FadeInSection>

          <FadeInSection direction="right">
            <div className="space-y-6">
              <div>
                <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                  {activeMenu.type}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                  {activeMenu.name}
                </h3>
                <p className="text-text-secondary text-lg mb-6">
                  {activeMenu.description}
                </p>
                <p className="text-2xl font-bold text-primary mb-8">
                  {activeMenu.price}
                </p>
                <a
                  href="#contact"
                  className="inline-block px-8 py-4 bg-primary hover:bg-primary-hover text-white font-semibold tracking-wide transition-all duration-300"
                >
                  예약하기
                </a>
              </div>

              <div className="flex gap-4 pt-8 border-t border-border">
                {currentMenus.map((menu, index) => (
                  <button
                    key={menu.name}
                    onClick={() => setActiveIndex(index)}
                    className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      activeIndex === index ? 'border-primary' : 'border-transparent opacity-50 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={menu.image}
                      alt={menu.name}
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

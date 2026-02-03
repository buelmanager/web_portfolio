'use client'

import { useState } from 'react'
import Image from 'next/image'
import FadeInSection from '@/components/animations/FadeInSection'
import TextReveal from '@/components/animations/TextReveal'

const categories = {
  '주거': [
    {
      name: '한남동 프라이빗 레지던스',
      type: '단독주택',
      description: '도심 속 자연을 품은 프라이빗 주거 공간',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
      area: '450㎡',
    },
    {
      name: '판교 모던 하우스',
      type: '단독주택',
      description: '미니멀한 디자인과 기능성의 조화',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
      area: '320㎡',
    },
    {
      name: '제주 힐링 빌라',
      type: '전원주택',
      description: '제주의 자연을 담은 휴식 공간',
      image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80',
      area: '280㎡',
    },
  ],
  '상업': [
    {
      name: '강남 플래그십 스토어',
      type: '리테일',
      description: '브랜드 아이덴티티를 공간으로 표현',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80',
      area: '200㎡',
    },
    {
      name: '판교 테크 오피스',
      type: '오피스',
      description: '창의적 협업을 위한 열린 업무 공간',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
      area: '1,200㎡',
    },
    {
      name: '청담 뷰티 살롱',
      type: '살롱',
      description: '럭셔리한 경험을 선사하는 프리미엄 공간',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80',
      area: '150㎡',
    },
  ],
  '문화': [
    {
      name: '성수 갤러리 카페',
      type: '복합문화',
      description: '예술과 커피가 만나는 문화 공간',
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80',
      area: '180㎡',
    },
    {
      name: '홍대 아트 스튜디오',
      type: '스튜디오',
      description: '창작 활동을 위한 영감의 공간',
      image: 'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=600&q=80',
      area: '250㎡',
    },
    {
      name: '이태원 북카페',
      type: '카페',
      description: '책과 함께하는 여유로운 시간',
      image: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=600&q=80',
      area: '120㎡',
    },
  ],
  '리모델링': [
    {
      name: '압구정 빈티지 아파트',
      type: '아파트',
      description: '30년 된 아파트의 현대적 재해석',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80',
      area: '165㎡',
    },
    {
      name: '종로 한옥 리노베이션',
      type: '한옥',
      description: '전통과 현대의 조화로운 만남',
      image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80',
      area: '200㎡',
    },
    {
      name: '을지로 오피스 리뉴얼',
      type: '오피스',
      description: '낡은 사무실의 스마트한 변신',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&q=80',
      area: '400㎡',
    },
  ],
}

type CategoryKey = keyof typeof categories

export default function CategorySelector() {
  const [activeTab, setActiveTab] = useState<CategoryKey>('주거')
  const [activeIndex, setActiveIndex] = useState(0)

  const currentProjects = categories[activeTab]
  const activeProject = currentProjects[activeIndex]

  return (
    <section className="py-24 bg-surface-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <TextReveal 
            text="카테고리별 프로젝트" 
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-primary"
          />
        </div>

        <FadeInSection>
          <div className="flex justify-center gap-2 md:gap-4 mb-12 flex-wrap">
            {(Object.keys(categories) as CategoryKey[]).map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab)
                  setActiveIndex(0)
                }}
                className={`px-5 py-2.5 font-medium text-sm tracking-wide transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-primary text-white'
                    : 'bg-white text-text-secondary border border-border hover:border-secondary hover:text-secondary'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </FadeInSection>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <FadeInSection direction="left">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={activeProject.image}
                alt={activeProject.name}
                fill
                className="object-cover transition-transform duration-500"
              />
            </div>
          </FadeInSection>

          <FadeInSection direction="right">
            <div className="space-y-6">
              <div>
                <span className="text-secondary text-sm font-semibold uppercase tracking-wider">
                  {activeProject.type}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-primary">
                  {activeProject.name}
                </h3>
                <p className="text-text-secondary text-lg mb-6">
                  {activeProject.description}
                </p>
                <p className="text-xl font-semibold text-secondary mb-8">
                  면적: {activeProject.area}
                </p>
                <a
                  href="#contact"
                  className="inline-block px-8 py-4 bg-primary hover:bg-primary-hover text-white font-semibold tracking-wide transition-all duration-300"
                >
                  프로젝트 상담하기
                </a>
              </div>

              <div className="flex gap-4 pt-8 border-t border-border">
                {currentProjects.map((project, index) => (
                  <button
                    key={project.name}
                    onClick={() => setActiveIndex(index)}
                    className={`relative w-20 h-20 overflow-hidden border-2 transition-all ${
                      activeIndex === index ? 'border-secondary' : 'border-transparent opacity-50 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={project.image}
                      alt={project.name}
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

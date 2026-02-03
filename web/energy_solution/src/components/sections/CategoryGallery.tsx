'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, CheckCircle, Zap, TrendingUp } from 'lucide-react'
import Carousel from '@/components/ui/Carousel'
import FadeInSection from '@/components/animations/FadeInSection'
import TextReveal from '@/components/animations/TextReveal'
import Modal from '@/components/ui/Modal'

const categories = [
  {
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80',
    title: '주택용 태양광',
    count: '500+ 설치',
    description: '가정에서 직접 전력을 생산하여 전기요금을 절감하고 탄소 중립에 기여합니다.',
    details: '정부 보조금을 활용하면 초기 비용 부담을 크게 줄일 수 있습니다. 20년 이상 안정적인 전력 생산이 가능하며, 잉여 전력은 한전에 판매할 수 있습니다.',
    benefits: ['전기요금 80% 절감', '정부 보조금 지원', '잉여전력 판매', '탄소중립 기여', '자산가치 상승', '에너지 자립'],
    roi: '투자 회수 5~7년',
  },
  {
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&q=80',
    title: '상업용 태양광',
    count: '300+ 설치',
    description: '건물 옥상, 주차장 등 유휴 공간을 활용하여 수익을 창출합니다.',
    details: '상업용 건물의 유휴 공간을 활용하여 전기요금 절감과 REC 판매 수익을 동시에 얻을 수 있습니다. ESG 경영에도 기여합니다.',
    benefits: ['전기요금 절감', 'REC 수익 창출', 'ESG 경영 기여', '건물 가치 상승', '세제 혜택', '브랜드 이미지'],
    roi: '투자 회수 4~6년',
  },
  {
    image: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=600&q=80',
    title: '산업용 발전소',
    count: '150+ 설치',
    description: 'MW급 대규모 발전소로 산업용 전력을 자체 조달합니다.',
    details: '공장, 물류센터 등 대규모 시설의 지붕을 활용하여 MW급 발전소를 구축합니다. PPA 계약을 통해 초기 투자 없이도 설치가 가능합니다.',
    benefits: ['대규모 발전', 'PPA 계약 가능', '전력비 절감', '탄소배출권', 'RE100 대응', '안정적 수익'],
    roi: '투자 회수 3~5년',
  },
  {
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80',
    title: 'ESS 시스템',
    count: '100+ 설치',
    description: '에너지를 저장하여 피크 시간대 전력비를 절감합니다.',
    details: '태양광으로 생산한 전력을 저장하여 야간이나 피크 시간대에 사용합니다. 비상 전원으로도 활용 가능하여 전력 품질을 향상시킵니다.',
    benefits: ['피크 저감', '전력비 절감', '비상 전원', '전력 품질 향상', '스마트 관리', '장기 보증'],
    roi: '전력비 30% 절감',
  },
  {
    image: 'https://images.unsplash.com/photo-1548337138-e87d889cc369?w=600&q=80',
    title: '풍력 발전',
    count: '50+ 설치',
    description: '바람 자원이 풍부한 지역에 최적화된 발전 시스템입니다.',
    details: '소형 풍력부터 대형 풍력까지 다양한 규모의 풍력 발전 시스템을 설치합니다. 태양광과 하이브리드 시스템으로 24시간 발전이 가능합니다.',
    benefits: ['24시간 발전', '태양광 연계', '높은 효율', '소음 저감', '원격 모니터링', '장기 보증'],
    roi: '투자 회수 6~8년',
  },
  {
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&q=80',
    title: '유지보수 서비스',
    count: '1,000+ 계약',
    description: '설치 후에도 안심할 수 있는 전문 유지보수 서비스를 제공합니다.',
    details: '정기 점검, 세척, 고장 수리까지 전문 엔지니어가 관리합니다. 24시간 원격 모니터링으로 문제 발생 시 신속하게 대응합니다.',
    benefits: ['정기 점검', '24시간 모니터링', '신속한 A/S', '성능 보장', '전문 엔지니어', '합리적 비용'],
    roi: '발전량 10% 향상',
  },
]

interface Category {
  image: string
  title: string
  count: string
  description: string
  details: string
  benefits: string[]
  roi: string
}

export default function CategoryGallery() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)

  return (
    <>
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <TextReveal
              text="솔루션 카테고리"
              className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
            />
            <FadeInSection delay={0.3}>
              <p className="text-lg text-gray-400">
                다양한 규모와 환경에 맞는 최적의 에너지 솔루션
              </p>
            </FadeInSection>
          </div>

          <FadeInSection>
            <Carousel
              slidesPerView={2}
              spaceBetween={20}
              navigation={true}
              pagination={false}
              breakpoints={{
                640: { slidesPerView: 3, spaceBetween: 20 },
                1024: { slidesPerView: 4, spaceBetween: 24 },
                1280: { slidesPerView: 5, spaceBetween: 24 },
              }}
              className="pb-8"
            >
              {categories.map((category) => (
                <div
                  key={category.title}
                  className="group cursor-pointer"
                  onClick={() => setSelectedCategory(category)}
                >
                  <div className="relative aspect-square overflow-hidden rounded-xl mb-3">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="px-4 py-2 bg-primary text-white text-sm font-medium rounded">
                        자세히 보기
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {category.title}
                      </h3>
                      <p className="text-sm text-gray-300">{category.count}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </FadeInSection>
        </div>
      </section>

      {/* Modal */}
      <Modal isOpen={!!selectedCategory} onClose={() => setSelectedCategory(null)}>
        {selectedCategory && (
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-surface rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCategory(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-black/50 hover:bg-black/70 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            <div className="relative aspect-[16/9]">
              <Image
                src={selectedCategory.image}
                alt={selectedCategory.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
            </div>

            <div className="p-6 md:p-8 -mt-16 relative">
              <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full mb-4">
                {selectedCategory.count}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">{selectedCategory.title}</h2>
              <p className="text-gray-400 mb-6">{selectedCategory.description}</p>

              <div className="mb-6 p-4 bg-surface-light rounded-lg border border-border">
                <p className="text-gray-300 leading-relaxed">{selectedCategory.details}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  주요 혜택
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {selectedCategory.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6 p-4 bg-primary/10 rounded-lg border border-primary/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <span className="text-gray-300">예상 수익</span>
                  </div>
                  <span className="text-xl font-bold text-primary">{selectedCategory.roi}</span>
                </div>
              </div>

              <a
                href="#contact"
                onClick={() => setSelectedCategory(null)}
                className="inline-block w-full text-center px-8 py-4 bg-primary hover:bg-primary-hover text-white font-semibold transition-all duration-300 rounded-lg"
              >
                무료 상담 신청하기
              </a>
            </div>
          </div>
        )}
      </Modal>
    </>
  )
}

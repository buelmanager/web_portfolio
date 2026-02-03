'use client'

import { useState } from 'react'
import { X, CheckCircle, Ruler, Clock, Wrench } from 'lucide-react'
import FadeInSection from '@/components/animations/FadeInSection'
import TextReveal from '@/components/animations/TextReveal'
import Modal from '@/components/ui/Modal'

const constructionTypes = {
  '주거 공간': [
    {
      name: '아파트 리모델링',
      type: '주거',
      description: '노후된 아파트를 현대적이고 기능적인 공간으로 재탄생시킵니다. 구조 변경, 인테리어, 설비 교체까지 토탈 서비스를 제공합니다.',
      image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600&q=80',
      price: '평당 150만원~',
      details: '20년 이상 된 노후 아파트를 최신 트렌드에 맞게 완벽하게 리모델링합니다. 구조 변경을 통한 공간 확장, 최신 설비 교체, 에너지 효율 개선까지 한 번에 해결해드립니다.',
      duration: '4~6주',
      features: ['구조 변경', '배관 교체', '전기 공사', '도배/마루', '주방 시공', '욕실 시공', '붙박이장', '조명 설계'],
    },
    {
      name: '단독주택 신축',
      type: '신축',
      description: '설계부터 완공까지 고객의 라이프스타일에 맞춘 맞춤형 단독주택을 건축합니다.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
      price: '평당 600만원~',
      details: '고객의 꿈을 담은 단독주택을 설계부터 완공까지 책임집니다. 토지 분석, 설계, 인허가, 기초공사부터 마감까지 원스톱 서비스를 제공합니다.',
      duration: '5~7개월',
      features: ['토지 분석', '건축 설계', '인허가 대행', '기초 공사', '골조 공사', '지붕 공사', '외장 마감', '내부 마감'],
    },
    {
      name: '빌라 인테리어',
      type: '인테리어',
      description: '빌라 공간을 최대한 활용한 효율적이고 스타일리시한 인테리어를 제공합니다.',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80',
      price: '평당 120만원~',
      details: '빌라 특유의 구조적 제약을 극복하고 공간을 최대한 활용하는 인테리어를 제공합니다. 수납 공간 극대화와 효율적인 동선 설계가 특징입니다.',
      duration: '3~5주',
      features: ['공간 설계', '도배/마루', '주방 시공', '욕실 시공', '조명 설계', '수납장', '발코니 확장', '샷시 교체'],
    },
  ],
  '상업 공간': [
    {
      name: '사무실 인테리어',
      type: '오피스',
      description: '생산성과 브랜드 이미지를 높이는 현대적인 오피스 공간을 설계하고 시공합니다.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
      price: '평당 180만원~',
      details: '직원 복지와 업무 효율을 모두 고려한 현대적인 오피스 공간을 만들어드립니다. 오픈 플로어, 집중 업무 공간, 회의실 등을 효율적으로 배치합니다.',
      duration: '3~6주',
      features: ['공간 기획', '파티션 설치', '전기/통신', '냉난방 시스템', '조명 설계', '바닥재 시공', '회의실', 'IT 인프라'],
    },
    {
      name: '매장 인테리어',
      type: '리테일',
      description: '고객 경험을 극대화하는 매력적인 매장 공간을 만들어드립니다.',
      image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80',
      price: '평당 200만원~',
      details: '브랜드 아이덴티티를 반영한 매력적인 매장 공간을 설계합니다. 고객 동선과 상품 진열을 최적화하여 매출 증대에 기여합니다.',
      duration: '2~4주',
      features: ['컨셉 기획', '파사드 디자인', '진열대 제작', '조명 설계', '사인물', 'POS 시스템', '창고 공간', '피팅룸'],
    },
    {
      name: '식음료 매장',
      type: 'F&B',
      description: '카페, 레스토랑 등 감각적인 F&B 공간 전문 시공을 제공합니다.',
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80',
      price: '평당 220만원~',
      details: '카페, 레스토랑, 베이커리 등 F&B 공간 전문 시공 경험을 바탕으로 위생과 동선을 고려한 최적의 공간을 만들어드립니다.',
      duration: '3~5주',
      features: ['주방 설비', '홀 인테리어', '좌석 배치', '조명 설계', '환기 시스템', '냉난방', '화장실', '테라스'],
    },
  ],
  '특수 시공': [
    {
      name: '전원주택',
      type: '전원',
      description: '자연과 어우러지는 전원주택 설계 및 시공. 에너지 효율과 편의성을 갖춘 맞춤형 주택.',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80',
      price: '평당 550만원~',
      details: '도시를 벗어나 자연 속에서 여유로운 삶을 꿈꾸는 분들을 위한 전원주택을 건축합니다. 친환경 자재와 에너지 효율 시스템을 적용합니다.',
      duration: '5~8개월',
      features: ['부지 분석', '친환경 설계', '지열 시스템', '태양광', '정원 조경', '테라스/데크', '외부 창고', '주차장'],
    },
    {
      name: '상가 건물',
      type: '상가',
      description: '임대 수익을 극대화하는 효율적인 상가 건물 설계 및 건축.',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80',
      price: '견적 문의',
      details: '임대 수익 극대화를 위해 설계된 상업용 건물입니다. 각 층별 독립된 출입구와 충분한 주차 공간을 확보하여 임차인 만족도를 높입니다.',
      duration: '6~10개월',
      features: ['설계 최적화', '구조 설계', '엘리베이터', '주차장', '층별 분리', '외관 마감', '공용 공간', '기계실'],
    },
    {
      name: '리모델링 공사',
      type: '리모델링',
      description: '건물 구조 변경, 외관 개선, 내부 공간 재구성 등 대규모 리모델링 전문.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
      price: '견적 문의',
      details: '노후 건물의 가치를 높이는 대규모 리모델링을 전문으로 합니다. 구조 보강, 외관 개선, 내부 공간 재구성을 통해 건물을 새롭게 탈바꿈시킵니다.',
      duration: '3~6개월',
      features: ['구조 진단', '보강 공사', '외관 리뉴얼', '방수 공사', '단열 공사', '설비 교체', '내부 마감', '조경'],
    },
  ],
}

interface ConstructionType {
  name: string
  type: string
  description: string
  image: string
  price: string
  details: string
  duration: string
  features: string[]
}

type CategoryKey = keyof typeof constructionTypes

export default function CategorySelector() {
  const [activeTab, setActiveTab] = useState<CategoryKey>('주거 공간')
  const [activeIndex, setActiveIndex] = useState(0)
  const [selectedType, setSelectedType] = useState<ConstructionType | null>(null)

  const currentTypes = constructionTypes[activeTab]
  const activeType = currentTypes[activeIndex]

  return (
    <>
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <TextReveal
            text="시공 유형별 안내"
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          />
        </div>

        <FadeInSection>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {(Object.keys(constructionTypes) as CategoryKey[]).map((tab) => (
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
            <div
              className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group"
              onClick={() => setSelectedType(activeType)}
            >
              <img
                src={activeType.image}
                alt={activeType.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="px-4 py-2 bg-primary text-white text-sm font-medium rounded">
                  자세히 보기
                </span>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection direction="right">
            <div className="space-y-6">
              <div>
                <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                  {activeType.type}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                  {activeType.name}
                </h3>
                <p className="text-gray-400 text-lg mb-6">
                  {activeType.description}
                </p>
                <p className="text-2xl font-bold text-primary mb-8">
                  {activeType.price}
                </p>
                <a
                  href="#contact"
                  className="inline-block px-8 py-4 bg-primary hover:bg-primary-hover text-white font-semibold tracking-wide transition-all duration-300"
                >
                  무료 견적 문의
                </a>
              </div>

              <div className="flex gap-4 pt-8 border-t border-border">
                {currentTypes.map((type, index) => (
                  <button
                    key={type.name}
                    onClick={() => setActiveIndex(index)}
                    className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      activeIndex === index ? 'border-primary' : 'border-transparent opacity-50 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={type.image}
                      alt={type.name}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>

    {/* Modal */}
    <Modal isOpen={!!selectedType} onClose={() => setSelectedType(null)}>
      {selectedType && (
        <div
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-surface rounded-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setSelectedType(null)}
            className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-black/50 hover:bg-black/70 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          <div className="relative aspect-[16/9]">
            <img
              src={selectedType.image}
              alt={selectedType.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
          </div>

          <div className="p-6 md:p-8 -mt-16 relative">
            <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full mb-4">
              {selectedType.type}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">{selectedType.name}</h2>
            <p className="text-gray-400 mb-6">{selectedType.description}</p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <Ruler className="w-4 h-4 text-primary" />
                <span className="text-gray-300">{selectedType.price}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-gray-300">시공 기간: {selectedType.duration}</span>
              </div>
            </div>

            <div className="mb-6 p-4 bg-surface-light rounded-lg border border-border">
              <p className="text-gray-300 leading-relaxed">{selectedType.details}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Wrench className="w-5 h-5 text-primary" />
                포함 서비스
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {selectedType.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="#contact"
              onClick={() => setSelectedType(null)}
              className="inline-block w-full text-center px-8 py-4 bg-primary hover:bg-primary-hover text-white font-semibold transition-all duration-300 rounded-lg"
            >
              무료 견적 문의하기
            </a>
          </div>
        </div>
      )}
    </Modal>
    </>
  )
}

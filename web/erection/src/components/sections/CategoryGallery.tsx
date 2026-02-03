'use client'

import { useState } from 'react'
import { X, CheckCircle } from 'lucide-react'
import Carousel from '@/components/ui/Carousel'
import FadeInSection from '@/components/animations/FadeInSection'
import TextReveal from '@/components/animations/TextReveal'
import Modal from '@/components/ui/Modal'

const serviceAreas = [
  {
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80',
    title: '주택 신축',
    count: '150+ 프로젝트',
    description: '고객의 라이프스타일에 맞춘 맞춤형 단독주택 설계 및 시공',
    details: '토지 분석부터 설계, 인허가, 시공까지 원스톱 서비스를 제공합니다. 에너지 효율과 거주 편의성을 모두 고려한 스마트 주택을 건축합니다.',
    services: ['토지 분석', '건축 설계', '인허가 대행', '기초 공사', '골조 공사', '마감 공사', '조경 시공'],
    price: '평당 500~700만원',
  },
  {
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
    title: '사무실 인테리어',
    count: '200+ 프로젝트',
    description: '업무 효율과 브랜드 이미지를 높이는 현대적인 오피스 공간',
    details: '직원 복지와 생산성을 모두 고려한 오피스 인테리어를 제공합니다. 오픈 플로어, 집중 업무 공간, 회의실 등을 효율적으로 배치합니다.',
    services: ['공간 기획', '레이아웃 설계', '전기/통신 공사', '냉난방 시스템', '조명 설계', '가구 배치', 'IT 인프라'],
    price: '평당 150~250만원',
  },
  {
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80',
    title: '아파트 리모델링',
    count: '300+ 프로젝트',
    description: '노후 아파트를 현대적이고 기능적인 공간으로 재탄생',
    details: '구조 변경, 확장 공사, 인테리어까지 아파트 전체 리모델링을 전문으로 합니다. 수납 공간 극대화와 동선 개선에 특화되어 있습니다.',
    services: ['구조 변경', '확장 공사', '방수 공사', '배관 교체', '전기 공사', '도배/마루', '주방/욕실'],
    price: '평당 120~200만원',
  },
  {
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80',
    title: '상업 공간',
    count: '120+ 프로젝트',
    description: '매출 증대와 고객 경험을 극대화하는 상업 공간 인테리어',
    details: '매장, 레스토랑, 카페 등 상업 공간의 동선과 분위기를 최적화합니다. 브랜드 아이덴티티를 반영한 차별화된 공간을 만들어드립니다.',
    services: ['컨셉 기획', '파사드 디자인', '조명 설계', '주방 설비', '좌석 배치', '사인물', '외부 테라스'],
    price: '평당 180~300만원',
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
    title: '빌라 시공',
    count: '80+ 프로젝트',
    description: '실용적이고 세련된 빌라 및 다세대 주택 건축',
    details: '임대 수익과 거주 편의성을 모두 고려한 빌라 및 다세대 주택을 건축합니다. 각 세대별 독립성과 프라이버시를 보장합니다.',
    services: ['설계 최적화', '구조 설계', '세대 분리', '주차장 설계', '옥상 활용', '외관 마감', '공용 공간'],
    price: '평당 450~600만원',
  },
  {
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600&q=80',
    title: '전원주택',
    count: '60+ 프로젝트',
    description: '자연과 어우러지는 힐링 공간, 전원주택 전문 시공',
    details: '도시를 벗어나 자연 속에서 여유로운 삶을 꿈꾸는 분들을 위한 전원주택을 건축합니다. 친환경 자재와 에너지 효율 시스템을 적용합니다.',
    services: ['부지 분석', '친환경 설계', '지열 시스템', '태양광 설치', '정원 조경', '테라스/데크', '외부 창고'],
    price: '평당 550~750만원',
  },
]

interface ServiceArea {
  image: string
  title: string
  count: string
  description: string
  details: string
  services: string[]
  price: string
}

export default function CategoryGallery() {
  const [selectedArea, setSelectedArea] = useState<ServiceArea | null>(null)

  return (
    <>
      <section id="gallery" className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <TextReveal
              text="시공 분야"
              className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
            />
            <FadeInSection delay={0.3}>
              <p className="text-lg text-gray-400">
                로터스건설이 전문으로 하는 시공 분야를 확인하세요
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
              {serviceAreas.map((area) => (
                <div
                  key={area.title}
                  className="group cursor-pointer"
                  onClick={() => setSelectedArea(area)}
                >
                  <div className="relative aspect-square overflow-hidden rounded-xl mb-3">
                    <img
                      src={area.image}
                      alt={area.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="px-4 py-2 bg-primary text-white text-sm font-medium rounded">
                        자세히 보기
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {area.title}
                      </h3>
                      <p className="text-sm text-gray-300">{area.count}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </FadeInSection>
        </div>
      </section>

      {/* Modal */}
      <Modal isOpen={!!selectedArea} onClose={() => setSelectedArea(null)}>
        {selectedArea && (
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-surface rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedArea(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-black/50 hover:bg-black/70 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            <div className="relative aspect-[16/9]">
              <img
                src={selectedArea.image}
                alt={selectedArea.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
            </div>

            <div className="p-6 md:p-8 -mt-16 relative">
              <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full mb-4">
                {selectedArea.count}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">{selectedArea.title}</h2>
              <p className="text-gray-400 mb-6">{selectedArea.description}</p>

              <div className="mb-6 p-4 bg-surface-light rounded-lg border border-border">
                <p className="text-gray-300 leading-relaxed">{selectedArea.details}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">포함 서비스</h3>
                <div className="grid grid-cols-2 gap-3">
                  {selectedArea.services.map((service) => (
                    <div key={service} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6 p-4 bg-primary/10 rounded-lg border border-primary/30">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">예상 비용</span>
                  <span className="text-xl font-bold text-primary">{selectedArea.price}</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">* 실제 비용은 현장 상황에 따라 달라질 수 있습니다</p>
              </div>

              <a
                href="#contact"
                onClick={() => setSelectedArea(null)}
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

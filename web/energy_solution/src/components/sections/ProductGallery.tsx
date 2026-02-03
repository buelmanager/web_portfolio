'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, Zap, Sun, Battery, CheckCircle } from 'lucide-react'
import Carousel from '@/components/ui/Carousel'
import FadeInSection from '@/components/animations/FadeInSection'
import TextReveal from '@/components/animations/TextReveal'
import Modal from '@/components/ui/Modal'

const products = [
  {
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
    title: '주택용 태양광 시스템',
    description: '가정용 3kW~10kW 맞춤형 태양광 발전 시스템',
    details: '고효율 단결정 태양광 패널을 사용하여 가정에서 필요한 전력을 자체 생산합니다. 정부 보조금과 함께 설치하면 초기 비용 부담을 크게 줄일 수 있습니다.',
    capacity: '3kW ~ 10kW',
    warranty: '25년 출력 보증',
    features: ['고효율 단결정 패널', '인버터 10년 보증', '24시간 모니터링', '정부 보조금 지원'],
  },
  {
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80',
    title: '상업용 태양광 발전소',
    description: '건물 옥상, 주차장 등 유휴 공간 활용 발전',
    details: '상업용 건물의 유휴 공간을 활용하여 전기요금을 절감하고 추가 수익을 창출할 수 있습니다. 전문 컨설팅을 통해 최적의 설계를 제안드립니다.',
    capacity: '50kW ~ 500kW',
    warranty: '25년 출력 보증',
    features: ['옥상/주차장 설치', 'REC 수익 창출', '전기요금 절감', '탄소중립 기여'],
  },
  {
    image: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=800&q=80',
    title: '산업용 태양광 플랜트',
    description: '공장, 물류센터 대규모 발전 시설 구축',
    details: 'MW급 대규모 태양광 발전소 구축으로 산업용 전력을 자체 조달하고 잉여 전력 판매로 추가 수익을 창출합니다. PPA 계약도 가능합니다.',
    capacity: '1MW 이상',
    warranty: '25년 출력 보증',
    features: ['대규모 발전소', 'PPA 계약 가능', '잉여전력 판매', 'ESS 연계 가능'],
  },
  {
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80',
    title: 'ESS 에너지 저장 시스템',
    description: '리튬이온 배터리 기반 고효율 에너지 저장',
    details: '태양광으로 생산한 전력을 저장하여 야간이나 피크 시간대에 사용할 수 있습니다. 전력 품질 향상과 비상 전원으로도 활용 가능합니다.',
    capacity: '5kWh ~ 1MWh',
    warranty: '10년 배터리 보증',
    features: ['리튬이온 배터리', '피크 저감', '비상 전원', '스마트 관리'],
  },
  {
    image: 'https://images.unsplash.com/photo-1548337138-e87d889cc369?w=800&q=80',
    title: '풍력 발전 시스템',
    description: '소형 풍력부터 대형 풍력 발전까지',
    details: '바람 자원이 풍부한 지역에 최적화된 풍력 발전 시스템을 설치합니다. 태양광과 함께 하이브리드 시스템 구성도 가능합니다.',
    capacity: '3kW ~ 3MW',
    warranty: '20년 보증',
    features: ['소음 저감 설계', '태양광 연계', '원격 모니터링', '고효율 발전기'],
  },
]

interface Product {
  image: string
  title: string
  description: string
  details: string
  capacity: string
  warranty: string
  features: string[]
}

export default function ProductGallery() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  return (
    <>
      <section id="products" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <TextReveal
              text="신재생에너지 솔루션"
              className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
            />
            <FadeInSection delay={0.3}>
              <p className="text-lg text-gray-400">
                고효율 태양광 패널과 첨단 에너지 저장 시스템
              </p>
            </FadeInSection>
          </div>

          <FadeInSection>
            <Carousel
              slidesPerView={1}
              spaceBetween={30}
              navigation={true}
              pagination={true}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 30 },
              }}
              className="pb-12"
            >
              {products.map((product) => (
                <div
                  key={product.title}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProduct(product)}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="px-4 py-2 bg-primary text-white text-sm font-medium rounded">
                        자세히 보기
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{product.description}</p>
                </div>
              ))}
            </Carousel>
          </FadeInSection>
        </div>
      </section>

      {/* Modal */}
      <Modal isOpen={!!selectedProduct} onClose={() => setSelectedProduct(null)}>
        {selectedProduct && (
          <div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-surface rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-black/50 hover:bg-black/70 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            <div className="relative aspect-video">
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
            </div>

            <div className="p-6 md:p-8 -mt-20 relative">
              <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full mb-4">
                신재생에너지
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">{selectedProduct.title}</h2>
              <p className="text-gray-400 mb-6">{selectedProduct.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2 text-sm">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="text-gray-300">용량: {selectedProduct.capacity}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Sun className="w-4 h-4 text-primary" />
                  <span className="text-gray-300">{selectedProduct.warranty}</span>
                </div>
              </div>

              <div className="mb-6 p-4 bg-surface-light rounded-lg border border-border">
                <p className="text-gray-300 leading-relaxed">{selectedProduct.details}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Battery className="w-5 h-5 text-primary" />
                  주요 특징
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {selectedProduct.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#contact"
                onClick={() => setSelectedProduct(null)}
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

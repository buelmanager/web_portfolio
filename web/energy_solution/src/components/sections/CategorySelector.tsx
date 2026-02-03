'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, CheckCircle, Zap, Clock, TrendingUp } from 'lucide-react'
import FadeInSection from '@/components/animations/FadeInSection'
import TextReveal from '@/components/animations/TextReveal'
import Modal from '@/components/ui/Modal'

const categories = {
  '주택용': [
    {
      name: '가정용 태양광 3kW',
      type: '주택용',
      description: '4인 가구 기준 월 전기요금 80% 절감 효과',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80',
      price: '설치비 지원',
      details: '소규모 가정에 최적화된 3kW 태양광 시스템입니다. 월 평균 300kWh 이상 발전하여 4인 가구 전기요금의 80%를 절감할 수 있습니다. 정부 보조금을 활용하면 초기 비용을 크게 줄일 수 있습니다.',
      duration: '설치 2~3일',
      features: ['고효율 단결정 패널', '인버터 10년 보증', '24시간 모니터링', '정부 보조금 지원', '잉여전력 판매', 'A/S 5년'],
      roi: '투자 회수 5~7년',
    },
    {
      name: '가정용 태양광 5kW',
      type: '주택용',
      description: '전기차 충전까지 가능한 넉넉한 용량',
      image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&q=80',
      price: '정부 보조금',
      details: '전기차를 보유한 가정이나 전력 사용량이 많은 가정에 적합한 5kW 시스템입니다. 월 평균 500kWh 이상 발전하여 전기요금 걱정 없이 생활할 수 있습니다.',
      duration: '설치 3~4일',
      features: ['고효율 단결정 패널', '인버터 10년 보증', '24시간 모니터링', '전기차 충전 연동', '잉여전력 판매', 'A/S 5년'],
      roi: '투자 회수 4~6년',
    },
    {
      name: '가정용 ESS 패키지',
      type: '주택용+ESS',
      description: '태양광+ESS 통합 시스템으로 에너지 자립',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80',
      price: '맞춤 견적',
      details: '태양광과 ESS를 결합하여 에너지 자립을 실현합니다. 낮에 생산한 전력을 저장하여 야간에도 태양광 전력을 사용할 수 있으며, 정전 시 비상 전원으로도 활용 가능합니다.',
      duration: '설치 4~5일',
      features: ['태양광 5kW', 'ESS 10kWh', '비상 전원', '스마트 관리', '피크 저감', 'A/S 10년'],
      roi: '전기요금 90% 절감',
    },
  ],
  '상업용': [
    {
      name: '건물 옥상 태양광',
      type: '상업용',
      description: '유휴 옥상 공간을 수익 창출 공간으로',
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&q=80',
      price: '무료 현장실사',
      details: '상업용 건물의 옥상을 활용하여 전기요금을 절감하고 REC 판매 수익을 창출합니다. 건물의 특성에 맞는 최적의 설계를 제안드립니다.',
      duration: '설치 2~4주',
      features: ['옥상 최적화 설계', 'REC 수익 창출', '전기요금 절감', 'ESG 경영', '세제 혜택', 'A/S 5년'],
      roi: '투자 회수 4~6년',
    },
    {
      name: '주차장 태양광',
      type: '상업용',
      description: '캐노피형 태양광으로 그늘+발전 동시 해결',
      image: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=600&q=80',
      price: '투자비 회수 5년',
      details: '주차장에 태양광 캐노피를 설치하여 그늘을 제공하면서 전력을 생산합니다. 전기차 충전 인프라와 연계하여 부가 가치를 창출할 수 있습니다.',
      duration: '설치 3~6주',
      features: ['캐노피 구조물', '전기차 충전', '그늘 제공', 'REC 수익', '브랜드 이미지', 'A/S 10년'],
      roi: '투자 회수 5년',
    },
    {
      name: '빌딩 BIPV 시스템',
      type: '건물일체형',
      description: '건물 외관과 조화로운 디자인 태양광',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
      price: '맞춤 설계',
      details: '건물 외관에 태양광 패널을 통합하여 미관을 해치지 않으면서 전력을 생산합니다. 신축 건물이나 리모델링 시 적용하기 좋습니다.',
      duration: '설계 협의',
      features: ['건물 일체형', '디자인 맞춤', '높은 효율', '브랜드 가치', '친환경 인증', '장기 보증'],
      roi: '맞춤 컨설팅',
    },
  ],
  '산업용': [
    {
      name: '공장 지붕 태양광',
      type: '산업용',
      description: '대규모 공장 지붕 활용 MW급 발전소',
      image: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=600&q=80',
      price: 'PPA 계약 가능',
      details: '대규모 공장 지붕을 활용하여 MW급 발전소를 구축합니다. PPA 계약을 통해 초기 투자 없이도 설치가 가능하며, 장기적으로 안정적인 전력비 절감 효과를 얻을 수 있습니다.',
      duration: '설치 2~3개월',
      features: ['MW급 발전', 'PPA 계약', '전력비 절감', 'RE100 대응', '탄소배출권', '장기 보증'],
      roi: '투자 회수 3~5년',
    },
    {
      name: '물류센터 태양광',
      type: '산업용',
      description: '넓은 지붕 면적 최대 활용 발전 시스템',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80',
      price: '투자 수익률 15%+',
      details: '물류센터의 넓은 지붕을 최대한 활용하여 대규모 발전소를 구축합니다. 높은 투자 수익률과 함께 친환경 물류 이미지를 구축할 수 있습니다.',
      duration: '설치 2~4개월',
      features: ['대규모 발전', '높은 수익률', '친환경 물류', 'ESG 경영', '세제 혜택', '장기 보증'],
      roi: '투자 수익률 15%+',
    },
    {
      name: '산업용 ESS',
      type: '대용량 저장',
      description: '피크 저감 및 전력 품질 향상',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80',
      price: '전력비 30% 절감',
      details: '산업용 ESS를 설치하여 피크 시간대 전력 사용량을 줄이고 전력비를 절감합니다. 전력 품질 향상과 비상 전원으로도 활용 가능합니다.',
      duration: '설치 1~2개월',
      features: ['피크 저감', '전력비 절감', '전력 품질', '비상 전원', '스마트 관리', '장기 보증'],
      roi: '전력비 30% 절감',
    },
  ],
}

interface Product {
  name: string
  type: string
  description: string
  image: string
  price: string
  details: string
  duration: string
  features: string[]
  roi: string
}

type CategoryKey = keyof typeof categories

export default function CategorySelector() {
  const [activeTab, setActiveTab] = useState<CategoryKey>('주택용')
  const [activeIndex, setActiveIndex] = useState(0)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const currentProducts = categories[activeTab]
  const activeProduct = currentProducts[activeIndex]

  return (
    <>
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
              <div
                className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => setSelectedProduct(activeProduct)}
              >
                <Image
                  src={activeProduct.image}
                  alt={activeProduct.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
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

      {/* Modal */}
      <Modal isOpen={!!selectedProduct} onClose={() => setSelectedProduct(null)}>
        {selectedProduct && (
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-surface rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-black/50 hover:bg-black/70 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            <div className="relative aspect-[16/9]">
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
            </div>

            <div className="p-6 md:p-8 -mt-16 relative">
              <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full mb-4">
                {selectedProduct.type}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">{selectedProduct.name}</h2>
              <p className="text-gray-400 mb-6">{selectedProduct.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2 text-sm">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="text-gray-300">{selectedProduct.price}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-gray-300">{selectedProduct.duration}</span>
                </div>
              </div>

              <div className="mb-6 p-4 bg-surface-light rounded-lg border border-border">
                <p className="text-gray-300 leading-relaxed">{selectedProduct.details}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  포함 사항
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

              <div className="mb-6 p-4 bg-primary/10 rounded-lg border border-primary/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <span className="text-gray-300">예상 수익</span>
                  </div>
                  <span className="text-xl font-bold text-primary">{selectedProduct.roi}</span>
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

'use client'

import { useState } from 'react'
import Image from 'next/image'
import FadeInSection from '@/components/animations/FadeInSection'
import TextReveal from '@/components/animations/TextReveal'
import Modal from '@/components/ui/Modal'
import { CheckCircle, Tag, Award, Clock, Eye, Watch, Gem, Shield, Sparkles } from 'lucide-react'

const categories = {
  '크로노마스터': [
    {
      name: 'Chronomaster Sport',
      type: '스포츠 크로노그래프',
      description: '엘 프리메로 하이프리퀀시 무브먼트의 스포츠 에디션',
      image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600&q=80',
      price: '₩15,800,000',
      details: {
        fullDescription: 'Chronomaster Sport는 1969년 탄생한 전설적인 엘 프리메로 무브먼트를 현대적인 스포츠 디자인에 담았습니다. 36,000vph의 하이프리퀀시로 1/10초 정밀 측정이 가능한 크로노그래프입니다.',
        features: [
          '엘 프리메로 3600 무브먼트',
          '1/10초 정밀 크로노그래프',
          '36,000 vph 하이프리퀀시',
          '세라믹 베젤 인서트',
          '60시간 파워 리저브',
          '100m 방수',
        ],
        specs: {
          movement: 'Cal. El Primero 3600',
          case: '41mm 스테인리스 스틸',
          water: '100m 방수',
          dial: '트리컬러 서브다이얼',
        },
        tags: ['엘 프리메로', '크로노그래프', '스포츠', '하이프리퀀시'],
      },
    },
    {
      name: 'Chronomaster Original',
      type: '헤리티지 크로노그래프',
      description: '1969년 오리지널 엘 프리메로의 완벽한 복각',
      image: 'https://images.unsplash.com/photo-1622434641406-a158123450f9?w=600&q=80',
      price: '₩13,200,000',
      details: {
        fullDescription: '시계 역사상 가장 혁신적인 무브먼트였던 엘 프리메로의 50주년을 기념하여 제작된 헤리티지 모델입니다. 오리지널 디자인을 충실히 재현하면서 현대적 무브먼트를 탑재했습니다.',
        features: [
          '오리지널 1969 디자인 복각',
          '트리컬러 서브다이얼',
          '펌킨 크라운',
          '래디언트 인덱스',
          '55시간 파워 리저브',
          '사파이어 케이스백',
        ],
        specs: {
          movement: 'Cal. El Primero 3600',
          case: '38mm 스테인리스 스틸',
          water: '50m 방수',
          dial: '실버 트리컬러',
        },
        tags: ['헤리티지', '복각', '클래식', '트리컬러'],
      },
    },
    {
      name: 'Chronomaster Open',
      type: '오픈하트 크로노그래프',
      description: '엘 프리메로의 심장을 볼 수 있는 오픈다이얼',
      image: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=600&q=80',
      price: '₩16,500,000',
      details: {
        fullDescription: '다이얼의 오프닝을 통해 엘 프리메로 무브먼트의 정교한 작동을 감상할 수 있습니다. 스켈레톤의 매력과 실용성을 동시에 갖춘 시그니처 모델입니다.',
        features: [
          '오픈하트 다이얼',
          '무브먼트 뷰 윈도우',
          '로즈골드 & 스틸 투톤',
          '1/10초 크로노그래프',
          '60시간 파워 리저브',
          '악어가죽 스트랩',
        ],
        specs: {
          movement: 'Cal. El Primero 3604',
          case: '42mm 투톤 (스틸/로즈골드)',
          water: '50m 방수',
          dial: '그레이 오픈',
        },
        tags: ['오픈하트', '스켈레톤', '투톤', '럭셔리'],
      },
    },
  ],
  '디파이': [
    {
      name: 'Defy Skyline',
      type: '럭셔리 스포츠',
      description: '도시의 스카이라인에서 영감받은 현대적 디자인',
      image: 'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=600&q=80',
      price: '₩12,500,000',
      details: {
        fullDescription: 'Defy Skyline은 현대 도시의 스카이라인에서 영감을 받아 탄생했습니다. 독특한 12각형 베젤과 통합형 브레이슬릿이 특징이며, 1/10초 점핑 세컨즈 기능을 갖추고 있습니다.',
        features: [
          '12각형 베젤 디자인',
          '1/10초 점핑 세컨즈',
          '통합형 스틸 브레이슬릿',
          '교체용 러버 스트랩 포함',
          '60시간 파워 리저브',
          '100m 방수',
        ],
        specs: {
          movement: 'Cal. 3620',
          case: '41mm 스테인리스 스틸',
          water: '100m 방수',
          dial: '블루 그라데이션',
        },
        tags: ['럭셔리스포츠', '통합브레이슬릿', '모던', '블루'],
      },
    },
    {
      name: 'Defy Extreme',
      type: '익스트림 스포츠',
      description: '극한의 환경에서도 완벽한 성능',
      image: 'https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=600&q=80',
      price: '₩18,200,000',
      details: {
        fullDescription: 'Defy Extreme은 가장 까다로운 환경에서도 완벽한 성능을 발휘하는 프로페셔널 스포츠 워치입니다. 충격 방지 무브먼트와 특수 소재 케이스가 극한의 내구성을 보장합니다.',
        features: [
          '충격 방지 무브먼트',
          '카본 파이버 케이스',
          '티타늄 베젤',
          '200m 방수',
          '교체식 스트랩 시스템',
          '야광 인덱스 & 핸즈',
        ],
        specs: {
          movement: 'Cal. El Primero 9004',
          case: '45mm 티타늄/카본',
          water: '200m 방수',
          dial: '블랙 스켈레톤',
        },
        tags: ['익스트림', '카본', '티타늄', '하이테크'],
      },
    },
    {
      name: 'Defy Classic',
      type: '클래식 스포츠',
      description: '절제된 우아함의 스포츠 워치',
      image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&q=80',
      price: '₩9,800,000',
      details: {
        fullDescription: 'Defy Classic은 스포티한 DNA를 클래식한 디자인으로 승화시킨 모델입니다. 엘리트 무브먼트를 탑재하여 합리적인 가격에 ZENITH의 품질을 경험할 수 있습니다.',
        features: [
          '엘리트 자동 무브먼트',
          '스켈레톤 다이얼',
          '세라믹 베젤',
          '사파이어 케이스백',
          '50시간 파워 리저브',
          '100m 방수',
        ],
        specs: {
          movement: 'Cal. Elite 670 SK',
          case: '41mm 스테인리스 스틸',
          water: '100m 방수',
          dial: '스켈레톤',
        },
        tags: ['클래식', '스켈레톤', '엘리트', '입문'],
      },
    },
  ],
  '파일럿': [
    {
      name: 'Pilot Type 20',
      type: '빈티지 파일럿',
      description: '항공 역사를 담은 클래식 파일럿 워치',
      image: 'https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=600&q=80',
      price: '₩9,800,000',
      details: {
        fullDescription: 'Pilot Type 20은 1930-40년대 항공 황금기의 파일럿 시계에서 영감을 받았습니다. 대형 어니언 크라운과 아라빅 인덱스가 빈티지한 매력을 자아냅니다.',
        features: [
          '대형 어니언 크라운',
          '빈티지 아라빅 인덱스',
          '에이지드 스틸 케이스',
          '슈퍼루미노바 야광',
          '48시간 파워 리저브',
          '송아지 가죽 스트랩',
        ],
        specs: {
          movement: 'Cal. Elite 679',
          case: '45mm 에이지드 스틸',
          water: '100m 방수',
          dial: '블랙 무광',
        },
        tags: ['빈티지', '파일럿', '대형', '클래식'],
      },
    },
    {
      name: 'Pilot Cronometro',
      type: '크로노미터 파일럿',
      description: 'COSC 인증 정밀 파일럿 워치',
      image: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=600&q=80',
      price: '₩11,500,000',
      details: {
        fullDescription: '스위스 공식 크로노미터 인증(COSC)을 받은 프리미엄 파일럿 워치입니다. 센트럴 세컨즈와 파워 리저브 인디케이터가 뛰어난 가독성을 제공합니다.',
        features: [
          'COSC 크로노미터 인증',
          '파워 리저브 인디케이터',
          '센트럴 세컨즈',
          'GMT 기능',
          '60시간 파워 리저브',
          '리벳 가죽 스트랩',
        ],
        specs: {
          movement: 'Cal. Elite 6150',
          case: '43mm 스테인리스 스틸',
          water: '100m 방수',
          dial: '블루 선버스트',
        },
        tags: ['크로노미터', 'COSC', 'GMT', '정밀'],
      },
    },
    {
      name: 'Pilot Automatic',
      type: '에브리데이 파일럿',
      description: '매일 착용하기 좋은 현대적 파일럿',
      image: 'https://images.unsplash.com/photo-1622434641406-a158123450f9?w=600&q=80',
      price: '₩7,500,000',
      details: {
        fullDescription: '파일럿 컬렉션의 입문 모델로, 클래식한 파일럿 디자인을 40mm 케이스에 담았습니다. 데일리 워치로 완벽한 사이즈와 편안한 착용감을 제공합니다.',
        features: [
          '40mm 착용감 좋은 케이스',
          '아라빅 인덱스',
          '데이트 디스플레이',
          '엘리트 무브먼트',
          '48시간 파워 리저브',
          'NATO/가죽 스트랩 호환',
        ],
        specs: {
          movement: 'Cal. Elite 670',
          case: '40mm 스테인리스 스틸',
          water: '100m 방수',
          dial: '그린/블랙/화이트',
        },
        tags: ['데일리', '40mm', '입문', 'NATO'],
      },
    },
  ],
}

type CategoryKey = keyof typeof categories
type Product = typeof categories[CategoryKey][number]

export default function CategorySelector() {
  const [activeTab, setActiveTab] = useState<CategoryKey>('크로노마스터')
  const [activeIndex, setActiveIndex] = useState(0)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const currentProducts = categories[activeTab]
  const activeProduct = currentProducts[activeIndex]

  const getSpecIcon = (key: string) => {
    switch (key) {
      case 'movement': return <Watch className="w-5 h-5" />
      case 'case': return <Gem className="w-5 h-5" />
      case 'water': return <Shield className="w-5 h-5" />
      case 'dial': return <Sparkles className="w-5 h-5" />
      default: return <CheckCircle className="w-5 h-5" />
    }
  }

  const specLabels: Record<string, string> = {
    movement: '무브먼트',
    case: '케이스',
    water: '방수',
    dial: '다이얼',
  }

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <TextReveal
            text="컬렉션 라인"
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
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />

              {/* Hover Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-hover text-white font-semibold rounded-lg transition-all transform translate-y-4 group-hover:translate-y-0 duration-300">
                  <Eye className="w-5 h-5" />
                  자세히 보기
                </button>
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
                <div className="flex gap-4">
                  <button
                    onClick={() => setSelectedProduct(activeProduct)}
                    className="px-6 py-4 bg-surface-light hover:bg-surface text-white font-semibold tracking-wide transition-all duration-300 border border-border"
                  >
                    상세 정보
                  </button>
                  <a
                    href="#contact"
                    className="inline-block px-8 py-4 bg-primary hover:bg-primary-hover text-white font-semibold tracking-wide transition-all duration-300"
                  >
                    부티크 예약
                  </a>
                </div>
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

      {/* Product Detail Modal */}
      <Modal
        isOpen={selectedProduct !== null}
        onClose={() => setSelectedProduct(null)}
        title={selectedProduct?.name}
      >
        {selectedProduct && (
          <div className="space-y-8">
            {/* Image */}
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.name}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-primary text-white text-sm font-semibold rounded-full">
                  {selectedProduct.type}
                </span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {selectedProduct.details.tags.map((tag, index) => (
                <span
                  key={index}
                  className="flex items-center gap-1 px-3 py-1 bg-surface-light border border-border rounded-full text-sm text-gray-300"
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Description */}
            <div>
              <p className="text-lg text-gray-300 leading-relaxed">
                {selectedProduct.details.fullDescription}
              </p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-primary">제품 특징</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {selectedProduct.details.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-surface-light rounded-lg">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specs */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-primary">상세 사양</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {Object.entries(selectedProduct.details.specs).map(([key, value]) => (
                  <div key={key} className="flex items-center gap-4 p-4 bg-surface-light rounded-lg border border-border">
                    <div className="p-2 bg-primary/20 rounded-lg text-primary">
                      {getSpecIcon(key)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-400">{specLabels[key] || key}</p>
                      <p className="font-semibold text-foreground text-sm truncate">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Price and CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-border">
              <div>
                <p className="text-sm text-gray-400">정가</p>
                <p className="text-2xl font-bold text-primary">{selectedProduct.price}</p>
              </div>
              <a
                href="#contact"
                onClick={() => setSelectedProduct(null)}
                className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary-hover text-white font-semibold text-center rounded-lg transition-colors"
              >
                부티크 예약하기
              </a>
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}

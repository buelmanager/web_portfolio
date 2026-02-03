'use client'

import { useState } from 'react'
import Image from 'next/image'
import Carousel from '@/components/ui/Carousel'
import FadeInSection from '@/components/animations/FadeInSection'
import TextReveal from '@/components/animations/TextReveal'
import Modal from '@/components/ui/Modal'
import { CheckCircle, Watch, Gem, Shield, Eye } from 'lucide-react'

const products = [
  {
    image: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=800&q=80',
    title: 'ZENITH Elite Moonphase',
    description: '달의 위상을 담은 클래식 드레스 워치',
    details: {
      fullDescription: 'ZENITH Elite Moonphase는 150년 전통의 스위스 장인 정신이 담긴 우아한 드레스 워치입니다. 정밀한 문페이즈 컴플리케이션과 함께 고급 로즈골드 케이스가 어우러져 품격 있는 모습을 완성합니다.',
      features: [
        '스위스 COSC 인증 무브먼트',
        '정확한 문페이즈 컴플리케이션',
        '18K 로즈골드 케이스',
        '사파이어 크리스탈 전후면',
        '50시간 파워 리저브',
        '악어가죽 스트랩',
      ],
      specs: {
        movement: '자동 기계식 (Cal. Elite 692)',
        case: '40mm 18K 로즈골드',
        waterResistance: '50m 방수',
        dial: '실버 선버스트',
      },
      price: '₩28,500,000',
    },
  },
  {
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=80',
    title: 'ZENITH Chronomaster Sport',
    description: '정밀한 크로노그래프의 정수',
    details: {
      fullDescription: 'Chronomaster Sport는 하이프리퀀시 크로노그래프 무브먼트로 유명한 ZENITH의 스포츠 컬렉션입니다. 1/10초 정밀도의 크로노그래프와 스포티한 디자인이 조화를 이룹니다.',
      features: [
        '엘 프리메로 하이프리퀀시 무브먼트',
        '1/10초 정밀 크로노그래프',
        '세라믹 베젤 인서트',
        '투명 케이스백',
        '60시간 파워 리저브',
        '스틸 브레이슬릿 & 러버 스트랩',
      ],
      specs: {
        movement: '자동 (Cal. El Primero 3600)',
        case: '41mm 스테인리스 스틸',
        waterResistance: '100m 방수',
        dial: '트리컬러 서브다이얼',
      },
      price: '₩15,800,000',
    },
  },
  {
    image: 'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=800&q=80',
    title: 'ZENITH Defy Skyline',
    description: '미래지향적 디자인의 럭셔리 스포츠 워치',
    details: {
      fullDescription: 'Defy Skyline은 도시의 스카이라인에서 영감을 받은 현대적인 럭셔리 스포츠 워치입니다. 독특한 12각형 베젤과 통합형 브레이슬릿이 특징이며, 1/10초 점핑 세컨즈를 갖추고 있습니다.',
      features: [
        '엘 프리메로 무브먼트',
        '1/10초 점핑 세컨즈',
        '12각형 베젤 디자인',
        '통합형 스틸 브레이슬릿',
        '사파이어 크리스탈',
        '60시간 파워 리저브',
      ],
      specs: {
        movement: '자동 (Cal. 3620)',
        case: '41mm 스테인리스 스틸',
        waterResistance: '100m 방수',
        dial: '블루 그라데이션',
      },
      price: '₩12,500,000',
    },
  },
  {
    image: 'https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=800&q=80',
    title: 'ZENITH Pilot Type 20',
    description: '항공 역사를 담은 파일럿 워치',
    details: {
      fullDescription: 'Pilot Type 20은 ZENITH의 항공 역사에서 영감을 받은 빈티지 스타일의 파일럿 워치입니다. 대형 어니언 크라운과 아라빅 인덱스가 클래식한 매력을 더합니다.',
      features: [
        '엘리트 자동 무브먼트',
        '대형 어니언 크라운',
        '빈티지 아라빅 인덱스',
        '슈퍼루미노바 야광',
        '송아지 가죽 스트랩',
        '48시간 파워 리저브',
      ],
      specs: {
        movement: '자동 (Cal. Elite 679)',
        case: '45mm 에이지드 스틸',
        waterResistance: '100m 방수',
        dial: '블랙 무광',
      },
      price: '₩9,800,000',
    },
  },
  {
    image: 'https://images.unsplash.com/photo-1622434641406-a158123450f9?w=800&q=80',
    title: 'ZENITH Chronomaster Original',
    description: '엘 프리메로의 전설적 헤리티지',
    details: {
      fullDescription: 'Chronomaster Original은 1969년 첫 출시된 엘 프리메로 무브먼트의 오리지널 디자인을 충실히 재현한 모델입니다. 시계 역사상 가장 정밀한 자동 크로노그래프의 DNA를 간직하고 있습니다.',
      features: [
        '전설적인 엘 프리메로 무브먼트',
        '36,000 vph 하이프리퀀시',
        '트리컬러 서브다이얼',
        '펌킨 크라운',
        '레이디언트 인덱스',
        '55시간 파워 리저브',
      ],
      specs: {
        movement: '자동 (Cal. El Primero 3600)',
        case: '38mm 스테인리스 스틸',
        waterResistance: '50m 방수',
        dial: '실버 트리컬러',
      },
      price: '₩13,200,000',
    },
  },
]

type Product = typeof products[0]

export default function ProductGallery() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const getSpecIcon = (key: string) => {
    switch (key) {
      case 'movement': return <Watch className="w-5 h-5" />
      case 'case': return <Gem className="w-5 h-5" />
      case 'waterResistance': return <Shield className="w-5 h-5" />
      case 'dial': return <Eye className="w-5 h-5" />
      default: return <CheckCircle className="w-5 h-5" />
    }
  }

  const specLabels: Record<string, string> = {
    movement: '무브먼트',
    case: '케이스',
    waterResistance: '방수',
    dial: '다이얼',
  }

  return (
    <section id="products" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <TextReveal
            text="타임피스 컬렉션"
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          />
          <FadeInSection delay={0.3}>
            <p className="text-lg text-gray-400">
              150년 스위스 전통의 정밀 시계 제작
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
              <div key={product.title} className="group cursor-pointer">
                <div
                  className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4"
                  onClick={() => setSelectedProduct(product)}
                >
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-hover text-white font-semibold rounded-lg transition-all transform translate-y-4 group-hover:translate-y-0 duration-300">
                      <Eye className="w-5 h-5" />
                      자세히 보기
                    </button>
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

      {/* Product Detail Modal */}
      <Modal
        isOpen={selectedProduct !== null}
        onClose={() => setSelectedProduct(null)}
        title={selectedProduct?.title}
      >
        {selectedProduct && (
          <div className="space-y-8">
            {/* Image */}
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.title}
                fill
                className="object-cover"
              />
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
                    <div>
                      <p className="text-sm text-gray-400">{specLabels[key] || key}</p>
                      <p className="font-semibold text-foreground">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Price and CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-border">
              <div>
                <p className="text-sm text-gray-400">정가</p>
                <p className="text-2xl font-bold text-primary">{selectedProduct.details.price}</p>
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

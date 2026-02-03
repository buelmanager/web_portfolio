'use client'

import { useState } from 'react'
import Carousel from '@/components/ui/Carousel'
import Modal from '@/components/ui/Modal'
import FadeInSection from '@/components/animations/FadeInSection'
import TextReveal from '@/components/animations/TextReveal'
import { CheckCircle, Gem, Shield, Award } from 'lucide-react'

const products = [
  {
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80',
    title: '다이아몬드 솔리테어 링',
    description: '완벽한 프로포즈를 위한 클래식 다이아몬드 링',
    details: {
      overview: 'GIA 인증 최상급 다이아몬드를 사용한 클래식 솔리테어 링입니다. 18K 화이트골드 세팅에 D컬러, VVS1 등급의 1캐럿 라운드 브릴리언트 컷 다이아몬드가 빛을 발합니다.',
      features: [
        'GIA 인증 1캐럿 다이아몬드',
        'D컬러 / VVS1 클래리티',
        '18K 화이트골드 세팅',
        '평생 무료 세척 서비스',
      ],
      material: '18K 화이트골드',
      certification: 'GIA 인증서 포함',
      warranty: '평생 보증',
    },
  },
  {
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
    title: '사파이어 펜던트 네클리스',
    description: '깊고 신비로운 블루 사파이어의 우아함',
    details: {
      overview: '스리랑카산 천연 블루 사파이어를 중심으로 다이아몬드 헤일로가 감싸는 우아한 펜던트입니다. 로열 블루 컬러의 5캐럿 사파이어가 특별한 자리를 빛냅니다.',
      features: [
        '5캐럿 천연 블루 사파이어',
        '다이아몬드 헤일로 세팅',
        '18K 화이트골드 체인',
        '길이 조절 가능',
      ],
      material: '18K 화이트골드',
      certification: 'GRS 인증서 포함',
      warranty: '5년 보증',
    },
  },
  {
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
    title: '에메랄드 컷 이어링',
    description: '세련된 에메랄드 컷의 드롭 이어링',
    details: {
      overview: '콜롬비아산 최상급 에메랄드를 에메랄드 컷으로 세공한 드롭 이어링입니다. 총 4캐럿의 생생한 그린 컬러가 얼굴을 화사하게 밝혀줍니다.',
      features: [
        '총 4캐럿 콜롬비아 에메랄드',
        '에메랄드 컷 세공',
        '18K 옐로우골드',
        '클립 & 포스트 타입',
      ],
      material: '18K 옐로우골드',
      certification: 'AGL 인증서 포함',
      warranty: '5년 보증',
    },
  },
  {
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
    title: '루비 & 다이아몬드 브레이슬릿',
    description: '정열적인 루비와 다이아몬드의 조화',
    details: {
      overview: '버마산 피전블러드 루비와 다이아몬드가 교차하며 세팅된 테니스 브레이슬릿입니다. 총 15캐럿의 보석이 손목을 화려하게 장식합니다.',
      features: [
        '버마산 피전블러드 루비 10캐럿',
        '다이아몬드 5캐럿',
        '18K 화이트골드',
        '안전 잠금장치 포함',
      ],
      material: '18K 화이트골드',
      certification: 'GRS & GIA 인증서',
      warranty: '5년 보증',
    },
  },
  {
    image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80',
    title: '오닉스 시그니처 커프링크',
    description: '블랙 오닉스로 완성하는 품격 있는 스타일',
    details: {
      overview: 'ONYX 브랜드의 시그니처 아이템인 블랙 오닉스 커프링크입니다. 18K 골드 프레임에 완벽하게 컷팅된 오닉스가 세팅되어 격식 있는 자리에서 품격을 더합니다.',
      features: [
        'AAA급 블랙 오닉스',
        '18K 옐로우골드 프레임',
        'T-바 잠금장치',
        '전용 케이스 포함',
      ],
      material: '18K 옐로우골드',
      certification: 'ONYX 정품 인증',
      warranty: '평생 보증',
    },
  },
]

type Product = typeof products[number]

export default function ProductGallery() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  return (
    <section id="products" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <TextReveal
            text="시그니처 컬렉션"
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          />
          <FadeInSection delay={0.3}>
            <p className="text-lg text-gray-400">
              장인 정신으로 완성한 프리미엄 주얼리
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
                  <img
                    src={product.image}
                    alt={product.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute inset-0 bg-black/60" />
                    <button className="relative z-10 px-6 py-3 bg-secondary text-background font-semibold rounded-lg hover:bg-secondary/90 transition-colors">
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
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        title={selectedProduct?.title}
      >
        {selectedProduct && (
          <div className="space-y-8">
            {/* Image */}
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
            </div>

            {/* Overview */}
            <div>
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <Gem className="text-secondary" size={24} />
                제품 소개
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {selectedProduct.details.overview}
              </p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <CheckCircle className="text-secondary" size={24} />
                제품 특징
              </h3>
              <ul className="grid md:grid-cols-2 gap-3">
                {selectedProduct.details.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle className="text-secondary shrink-0 mt-0.5" size={18} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Specs Info */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-5 bg-background rounded-xl border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <Gem className="text-secondary" size={20} />
                  <span className="text-sm text-gray-400">소재</span>
                </div>
                <p className="text-lg font-bold text-secondary">
                  {selectedProduct.details.material}
                </p>
              </div>
              <div className="p-5 bg-background rounded-xl border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="text-secondary" size={20} />
                  <span className="text-sm text-gray-400">인증</span>
                </div>
                <p className="text-lg font-bold text-secondary">
                  {selectedProduct.details.certification}
                </p>
              </div>
              <div className="p-5 bg-background rounded-xl border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="text-secondary" size={20} />
                  <span className="text-sm text-gray-400">보증</span>
                </div>
                <p className="text-lg font-bold text-secondary">
                  {selectedProduct.details.warranty}
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-border">
              <a
                href="#contact"
                onClick={() => setSelectedProduct(null)}
                className="flex-1 text-center px-8 py-4 bg-secondary text-background font-semibold rounded-lg hover:bg-secondary/90 transition-colors"
              >
                구매 상담 신청
              </a>
              <button
                onClick={() => setSelectedProduct(null)}
                className="flex-1 px-8 py-4 border border-border text-gray-300 font-semibold rounded-lg hover:bg-surface-light transition-colors"
              >
                닫기
              </button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}

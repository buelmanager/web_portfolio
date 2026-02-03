'use client'

import { useState } from 'react'
import Modal from '@/components/ui/Modal'
import FadeInSection from '@/components/animations/FadeInSection'
import TextReveal from '@/components/animations/TextReveal'
import { CheckCircle, Gem, Award, Clock, Sparkles, Heart, Shield } from 'lucide-react'

const categories = {
  '링 & 반지': [
    {
      name: '다이아몬드 솔리테어',
      type: 'Engagement Ring',
      description: 'GIA 인증 최상급 다이아몬드로 제작된 클래식 약혼반지 컬렉션',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80',
      price: '₩5,000,000~',
      details: {
        overview: '인생에서 가장 특별한 순간을 위한 약혼반지입니다. GIA 인증 D~F 컬러, VVS 이상의 최상급 다이아몬드만을 사용하며, 18K 또는 플래티늄 세팅으로 제작됩니다.',
        features: [
          'GIA 인증 다이아몬드',
          'D~F 컬러 / VVS+ 클래리티',
          '18K 골드 또는 플래티늄',
          '평생 무료 세척 서비스',
          '사이즈 무료 조절 (1회)',
          '맞춤 각인 서비스',
        ],
        craftsman: '마스터 장인 제작',
        leadTime: '제작 기간 2~3주',
      },
    },
    {
      name: '이터니티 밴드',
      type: 'Eternity Band',
      description: '영원한 사랑을 상징하는 풀 이터니티 다이아몬드 밴드',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80',
      price: '₩3,500,000~',
      details: {
        overview: '반지 전체를 감싸는 다이아몬드가 끊임없는 영원을 상징합니다. 웨딩밴드나 기념일 선물로 완벽한 선택입니다.',
        features: [
          '라운드 브릴리언트 컷 다이아몬드',
          '풀 이터니티 세팅',
          '18K 화이트골드',
          '편안한 착용감 설계',
          '스택킹 가능',
          '평생 보증',
        ],
        craftsman: '마스터 장인 제작',
        leadTime: '제작 기간 2주',
      },
    },
    {
      name: '시그넷 링',
      type: 'Signet Ring',
      description: '품격 있는 남성을 위한 클래식 시그넷 링 컬렉션',
      image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&q=80',
      price: '₩2,000,000~',
      details: {
        overview: '전통적인 시그넷 링을 현대적으로 재해석한 남성 주얼리입니다. 블랙 오닉스 또는 라피스라줄리 세팅으로 제공됩니다.',
        features: [
          '18K 옐로우골드',
          'AAA급 오닉스/라피스라줄리',
          '가문 각인 서비스',
          '클래식 쿠션 컷',
          '안티크 피니시 옵션',
          '남성 사이즈 특화',
        ],
        craftsman: '마스터 장인 제작',
        leadTime: '제작 기간 3주',
      },
    },
  ],
  '네클리스': [
    {
      name: '사파이어 펜던트',
      type: 'Sapphire Pendant',
      description: '깊고 신비로운 로열 블루 사파이어 펜던트',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80',
      price: '₩8,000,000~',
      details: {
        overview: '스리랑카산 로열 블루 사파이어를 중심으로 다이아몬드 헤일로가 감싸는 우아한 펜던트입니다.',
        features: [
          '5캐럿+ 천연 사파이어',
          'GRS 인증서 포함',
          '다이아몬드 헤일로',
          '18K 화이트골드 체인',
          '길이 조절 가능',
          '전용 주얼리 박스',
        ],
        craftsman: '컬러스톤 전문 장인',
        leadTime: '제작 기간 3~4주',
      },
    },
    {
      name: '진주 초커',
      type: 'Pearl Choker',
      description: '클래식한 아코야 진주 초커 네클리스',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80',
      price: '₩4,500,000~',
      details: {
        overview: '일본산 최상급 아코야 진주로 제작된 클래식 초커입니다. 완벽한 라운드 형태와 고광택이 특징입니다.',
        features: [
          '7~7.5mm 아코야 진주',
          'AAA 등급 광택',
          '18K 골드 클래스프',
          '실크 매듭 제작',
          '표준 16인치 길이',
          '진주 전용 케이스',
        ],
        craftsman: '진주 전문 장인',
        leadTime: '제작 기간 2주',
      },
    },
    {
      name: '다이아몬드 Y-네클리스',
      type: 'Y-Necklace',
      description: '우아한 드롭 라인의 다이아몬드 Y-네클리스',
      image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600&q=80',
      price: '₩6,000,000~',
      details: {
        overview: '세련된 Y자 드롭 디자인으로 목선을 아름답게 장식합니다. 이브닝 드레스와 완벽한 조화를 이룹니다.',
        features: [
          '총 2캐럿 다이아몬드',
          '페이브 세팅',
          '18K 화이트골드',
          '조절 가능 체인',
          '드롭 길이 선택',
          '베젤 세팅 포인트',
        ],
        craftsman: '마스터 장인 제작',
        leadTime: '제작 기간 2~3주',
      },
    },
  ],
  '이어링': [
    {
      name: '다이아몬드 스터드',
      type: 'Diamond Studs',
      description: '매일 착용하는 클래식 다이아몬드 스터드 이어링',
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80',
      price: '₩3,000,000~',
      details: {
        overview: '심플하면서도 우아한 다이아몬드 스터드 이어링입니다. 일상부터 특별한 날까지 완벽하게 어울립니다.',
        features: [
          '총 1캐럿 다이아몬드',
          'GIA 인증',
          '4프롱 세팅',
          '푸쉬백 잠금장치',
          '18K 화이트골드',
          '좌우 매칭 보장',
        ],
        craftsman: '마스터 장인 제작',
        leadTime: '제작 기간 1~2주',
      },
    },
    {
      name: '에메랄드 드롭',
      type: 'Emerald Drops',
      description: '콜롬비아 에메랄드의 화려한 드롭 이어링',
      image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&q=80',
      price: '₩12,000,000~',
      details: {
        overview: '콜롬비아 무조 광산의 최상급 에메랄드로 제작된 드롭 이어링입니다. 화려한 자리에서 시선을 사로잡습니다.',
        features: [
          '총 6캐럿 에메랄드',
          'AGL 인증서',
          '에메랄드 컷',
          '다이아몬드 프레임',
          '18K 옐로우골드',
          '안전 클립 잠금장치',
        ],
        craftsman: '컬러스톤 전문 장인',
        leadTime: '제작 기간 4주',
      },
    },
    {
      name: '후프 이어링',
      type: 'Hoop Earrings',
      description: '세련된 다이아몬드 파베 후프 이어링',
      image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&q=80',
      price: '₩4,000,000~',
      details: {
        overview: '클래식 후프 디자인에 다이아몬드 파베 세팅을 더한 럭셔리 이어링입니다.',
        features: [
          '총 1.5캐럿 다이아몬드',
          '인사이드-아웃 파베',
          '18K 로즈골드',
          '힌지 클로저',
          '25mm 직경',
          '경량 설계',
        ],
        craftsman: '마스터 장인 제작',
        leadTime: '제작 기간 2주',
      },
    },
  ],
}

type CategoryKey = keyof typeof categories
type Product = typeof categories[CategoryKey][number]

export default function CategorySelector() {
  const [activeTab, setActiveTab] = useState<CategoryKey>('링 & 반지')
  const [activeIndex, setActiveIndex] = useState(0)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const currentProducts = categories[activeTab]
  const activeProduct = currentProducts[activeIndex]

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product)
  }

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <TextReveal
            text="럭셔리 컬렉션"
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
              onClick={() => handleProductClick(activeProduct)}
            >
              <img
                src={activeProduct.image}
                alt={activeProduct.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                <button className="px-6 py-3 bg-secondary text-background font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
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
                  <a
                    href="#contact"
                    className="inline-block px-8 py-4 bg-primary hover:bg-primary-hover text-white font-semibold tracking-wide transition-all duration-300"
                  >
                    구매 상담
                  </a>
                  <button
                    onClick={() => handleProductClick(activeProduct)}
                    className="px-8 py-4 border border-border text-gray-300 font-semibold hover:bg-surface-light transition-all duration-300"
                  >
                    자세히 보기
                  </button>
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
                    <img
                      src={product.image}
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-cover"
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
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        title={selectedProduct?.name}
      >
        {selectedProduct && (
          <div className="space-y-8">
            {/* Image & Type Badge */}
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
              <div className="absolute top-6 left-6">
                <span className="px-4 py-2 bg-primary/90 text-white text-sm font-semibold rounded-lg">
                  {selectedProduct.type}
                </span>
              </div>
              <div className="absolute bottom-6 left-6">
                <span className="px-4 py-2 bg-secondary/90 text-background font-bold rounded-lg">
                  {selectedProduct.price}
                </span>
              </div>
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

            {/* Craftsman & Lead Time */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-background rounded-xl border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="text-secondary" size={20} />
                  <span className="text-sm text-gray-400">제작</span>
                </div>
                <p className="text-lg font-bold text-secondary">
                  {selectedProduct.details.craftsman}
                </p>
              </div>
              <div className="p-5 bg-background rounded-xl border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="text-secondary" size={20} />
                  <span className="text-sm text-gray-400">소요 기간</span>
                </div>
                <p className="text-lg font-bold text-secondary">
                  {selectedProduct.details.leadTime}
                </p>
              </div>
            </div>

            {/* Additional Info Cards */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-surface-light/50 rounded-lg border border-border/50 text-center">
                <Sparkles className="text-secondary mx-auto mb-2" size={28} />
                <p className="text-sm text-gray-400">프리미엄 품질</p>
              </div>
              <div className="p-4 bg-surface-light/50 rounded-lg border border-border/50 text-center">
                <Heart className="text-secondary mx-auto mb-2" size={28} />
                <p className="text-sm text-gray-400">맞춤 제작</p>
              </div>
              <div className="p-4 bg-surface-light/50 rounded-lg border border-border/50 text-center">
                <Shield className="text-secondary mx-auto mb-2" size={28} />
                <p className="text-sm text-gray-400">평생 보증</p>
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

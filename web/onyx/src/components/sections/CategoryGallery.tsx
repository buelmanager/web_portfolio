'use client'

import { useState } from 'react'
import Carousel from '@/components/ui/Carousel'
import Modal from '@/components/ui/Modal'
import FadeInSection from '@/components/animations/FadeInSection'
import TextReveal from '@/components/animations/TextReveal'
import { CheckCircle, Gem, Sparkles, Heart } from 'lucide-react'

const categories = [
  {
    image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600&q=80',
    title: '다이아몬드',
    count: '200+ 제품',
    details: {
      overview: '세계 최고 수준의 다이아몬드만을 엄선하여 제공합니다. GIA 인증 다이아몬드로 D~F 컬러, VVS 이상 클래리티의 최상급 원석만을 취급합니다.',
      highlights: [
        'GIA 인증 다이아몬드만 취급',
        'D~F 컬러 최상급 등급',
        'VVS1~IF 클래리티',
        '엑설런트 컷 품질 보증',
      ],
      priceRange: '₩3,000,000~',
      bestSeller: '1캐럿 솔리테어 링',
    },
  },
  {
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80',
    title: '루비 & 사파이어',
    count: '150+ 제품',
    details: {
      overview: '버마, 스리랑카, 캐시미르 등 세계적 산지의 최상급 컬러스톤을 제공합니다. 각 원석은 GRS 또는 SSEF 인증을 받은 프리미엄 품질입니다.',
      highlights: [
        '피전블러드 루비 전문',
        '로열 블루 사파이어',
        'GRS/SSEF 인증',
        '원산지 증명 포함',
      ],
      priceRange: '₩5,000,000~',
      bestSeller: '사파이어 헤일로 펜던트',
    },
  },
  {
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80',
    title: '에메랄드',
    count: '80+ 제품',
    details: {
      overview: '콜롬비아 무조 광산의 최상급 에메랄드를 중심으로 한 그린스톤 컬렉션입니다. 깊고 선명한 그린 컬러와 뛰어난 투명도가 특징입니다.',
      highlights: [
        '콜롬비아 무조 광산 원석',
        'Minor Oil 처리 등급',
        'AGL/GRS 인증',
        '맞춤 세팅 서비스',
      ],
      priceRange: '₩4,000,000~',
      bestSeller: '에메랄드 드롭 이어링',
    },
  },
  {
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80',
    title: '진주',
    count: '120+ 제품',
    details: {
      overview: '일본 아코야, 남양, 타히티안 진주 등 세계 각지의 프리미엄 진주 컬렉션입니다. 자연 광택과 완벽한 형태의 최상급 진주만을 선별합니다.',
      highlights: [
        '일본 아코야 진주',
        '남양 골든 펄',
        '타히티안 블랙 펄',
        '자연 광택 A+ 등급',
      ],
      priceRange: '₩1,500,000~',
      bestSeller: '아코야 네클리스',
    },
  },
  {
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&q=80',
    title: '웨딩 & 브라이덜',
    count: '300+ 제품',
    details: {
      overview: '인생의 가장 특별한 순간을 위한 웨딩 주얼리 컬렉션입니다. 약혼반지부터 웨딩밴드, 예물 세트까지 완벽한 라인업을 제공합니다.',
      highlights: [
        '맞춤 제작 서비스',
        '커플링 각인 무료',
        '평생 사이즈 조절',
        '웨딩 컨설팅 포함',
      ],
      priceRange: '₩2,000,000~',
      bestSeller: '클래식 웨딩밴드 세트',
    },
  },
  {
    image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&q=80',
    title: '남성 주얼리',
    count: '100+ 제품',
    details: {
      overview: '세련된 남성을 위한 프리미엄 주얼리 컬렉션입니다. 커프링크, 타이클립, 시그넷 링 등 품격 있는 액세서리를 제공합니다.',
      highlights: [
        '비즈니스 컬렉션',
        '골프 액세서리',
        '프리미엄 시계줄',
        '맞춤 각인 서비스',
      ],
      priceRange: '₩800,000~',
      bestSeller: '오닉스 커프링크 세트',
    },
  },
]

type Category = typeof categories[number]

export default function CategoryGallery() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)

  return (
    <section id="gallery" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <TextReveal
            text="주얼리 카테고리"
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          />
          <FadeInSection delay={0.3}>
            <p className="text-lg text-gray-400">
              취향과 스타일에 맞는 완벽한 주얼리를 찾아보세요
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
                  <img
                    src={category.image}
                    alt={category.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors" />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="px-4 py-2 bg-secondary text-background text-sm font-semibold rounded-lg hover:bg-secondary/90 transition-colors">
                      자세히 보기
                    </button>
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

      {/* Category Detail Modal */}
      <Modal
        isOpen={!!selectedCategory}
        onClose={() => setSelectedCategory(null)}
        title={selectedCategory?.title}
      >
        {selectedCategory && (
          <div className="space-y-8">
            {/* Image */}
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
              <img
                src={selectedCategory.image}
                alt={selectedCategory.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="px-4 py-2 bg-secondary/90 text-background font-semibold rounded-lg">
                  {selectedCategory.count}
                </span>
              </div>
            </div>

            {/* Overview */}
            <div>
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <Gem className="text-secondary" size={24} />
                카테고리 소개
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {selectedCategory.details.overview}
              </p>
            </div>

            {/* Highlights */}
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <CheckCircle className="text-secondary" size={24} />
                주요 특징
              </h3>
              <ul className="grid md:grid-cols-2 gap-3">
                {selectedCategory.details.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle className="text-secondary shrink-0 mt-0.5" size={18} />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {/* Price & Best Seller */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-background rounded-xl border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="text-secondary" size={20} />
                  <span className="text-sm text-gray-400">가격대</span>
                </div>
                <p className="text-lg font-bold text-secondary">
                  {selectedCategory.details.priceRange}
                </p>
              </div>
              <div className="p-5 bg-background rounded-xl border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <Heart className="text-secondary" size={20} />
                  <span className="text-sm text-gray-400">베스트셀러</span>
                </div>
                <p className="text-lg font-bold text-secondary">
                  {selectedCategory.details.bestSeller}
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-border">
              <a
                href="#products"
                onClick={() => setSelectedCategory(null)}
                className="flex-1 text-center px-8 py-4 bg-secondary text-background font-semibold rounded-lg hover:bg-secondary/90 transition-colors"
              >
                컬렉션 보기
              </a>
              <button
                onClick={() => setSelectedCategory(null)}
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

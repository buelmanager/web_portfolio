'use client'

import { useState } from 'react'
import Image from 'next/image'
import Carousel from '@/components/ui/Carousel'
import FadeInSection from '@/components/animations/FadeInSection'
import TextReveal from '@/components/animations/TextReveal'
import Modal from '@/components/ui/Modal'
import { CheckCircle, Watch, Award, Shield, Eye, ArrowRight } from 'lucide-react'

const categories = [
  {
    image: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=600&q=80',
    title: '드레스 워치',
    count: '50+ 모델',
    details: {
      description: '격식 있는 자리를 위한 우아한 드레스 워치 컬렉션입니다. 얇은 케이스와 클래식한 디자인, 고급 소재가 어우러져 품격 있는 모습을 완성합니다.',
      highlights: [
        '울트라 씬 무브먼트',
        '18K 골드 케이스',
        '문페이즈 컴플리케이션',
        '악어가죽 스트랩',
      ],
      collections: ['Elite', 'Heritage', 'Star'],
      benefits: [
        { icon: Watch, text: '스위스 COSC 인증' },
        { icon: Award, text: '150년 장인 전통' },
        { icon: Shield, text: '5년 국제 보증' },
      ],
    },
  },
  {
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600&q=80',
    title: '크로노그래프',
    count: '40+ 모델',
    details: {
      description: 'ZENITH의 상징인 엘 프리메로 무브먼트를 탑재한 크로노그래프 컬렉션입니다. 1/10초 정밀도의 하이프리퀀시 무브먼트로 정확한 시간 측정이 가능합니다.',
      highlights: [
        '엘 프리메로 무브먼트',
        '1/10초 정밀 측정',
        '36,000 vph 하이프리퀀시',
        '트리컬러 서브다이얼',
      ],
      collections: ['Chronomaster', 'Defy', 'Pilot'],
      benefits: [
        { icon: Watch, text: '세계 최초 자동 크로노' },
        { icon: Award, text: '1969년 탄생' },
        { icon: Shield, text: '5년 국제 보증' },
      ],
    },
  },
  {
    image: 'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=600&q=80',
    title: '스포츠 럭셔리',
    count: '30+ 모델',
    details: {
      description: '활동적인 라이프스타일을 위한 럭셔리 스포츠 워치입니다. 견고한 내구성과 스타일리시한 디자인을 겸비하여 어떤 상황에서도 완벽한 모습을 유지합니다.',
      highlights: [
        '통합형 브레이슬릿',
        '100m 방수',
        '세라믹 베젤',
        '야광 인덱스',
      ],
      collections: ['Defy Skyline', 'Defy Extreme', 'Defy Classic'],
      benefits: [
        { icon: Watch, text: '고성능 무브먼트' },
        { icon: Award, text: '현대적 디자인' },
        { icon: Shield, text: '5년 국제 보증' },
      ],
    },
  },
  {
    image: 'https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=600&q=80',
    title: '파일럿 워치',
    count: '25+ 모델',
    details: {
      description: 'ZENITH의 항공 역사에서 영감을 받은 파일럿 워치 컬렉션입니다. 뛰어난 가독성과 대형 크라운, 빈티지 디자인이 조종사 시계의 전통을 이어갑니다.',
      highlights: [
        '대형 어니언 크라운',
        '빈티지 아라빅 인덱스',
        '슈퍼루미노바 야광',
        '리벳 가죽 스트랩',
      ],
      collections: ['Pilot Type 20', 'Pilot Cronometro', 'Pilot Automatic'],
      benefits: [
        { icon: Watch, text: '항공 역사 헤리티지' },
        { icon: Award, text: '빈티지 디자인' },
        { icon: Shield, text: '5년 국제 보증' },
      ],
    },
  },
  {
    image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&q=80',
    title: '하이 주얼리',
    count: '20+ 모델',
    details: {
      description: '다이아몬드와 귀금속으로 장식된 하이 주얼리 시계 컬렉션입니다. 시계 제작의 정밀함과 주얼리의 화려함이 완벽하게 조화를 이룹니다.',
      highlights: [
        '다이아몬드 세팅',
        '18K 화이트골드',
        '사파이어 & 에메랄드',
        '맞춤 제작 가능',
      ],
      collections: ['Star', 'Elite Lady', 'Defy Midnight'],
      benefits: [
        { icon: Watch, text: '수작업 세팅' },
        { icon: Award, text: '한정판 에디션' },
        { icon: Shield, text: '5년 국제 보증' },
      ],
    },
  },
  {
    image: 'https://images.unsplash.com/photo-1622434641406-a158123450f9?w=600&q=80',
    title: '빈티지 & 헤리티지',
    count: '15+ 모델',
    details: {
      description: 'ZENITH의 역사적인 모델들을 현대적으로 재해석한 헤리티지 컬렉션입니다. 오리지널 디자인의 정수를 유지하면서 최신 무브먼트를 탑재합니다.',
      highlights: [
        '오리지널 디자인 재현',
        '리미티드 에디션',
        '복각 다이얼',
        '빈티지 케이스',
      ],
      collections: ['Chronomaster Original', 'El Primero A386', 'Revival'],
      benefits: [
        { icon: Watch, text: '역사적 모델 복각' },
        { icon: Award, text: '컬렉터 아이템' },
        { icon: Shield, text: '5년 국제 보증' },
      ],
    },
  },
]

type Category = typeof categories[0]

export default function CategoryGallery() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)

  return (
    <section id="gallery" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <TextReveal
            text="컬렉션 카테고리"
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          />
          <FadeInSection delay={0.3}>
            <p className="text-lg text-gray-400">
              150년 전통의 스위스 워치메이킹 컬렉션
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
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors" />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-hover text-white text-sm font-semibold rounded-lg transition-all transform translate-y-4 group-hover:translate-y-0 duration-300">
                      <Eye className="w-4 h-4" />
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
        isOpen={selectedCategory !== null}
        onClose={() => setSelectedCategory(null)}
        title={selectedCategory?.title}
      >
        {selectedCategory && (
          <div className="space-y-8">
            {/* Image */}
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <Image
                src={selectedCategory.image}
                alt={selectedCategory.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="px-4 py-2 bg-primary text-white text-sm font-semibold rounded-full">
                  {selectedCategory.count}
                </span>
              </div>
            </div>

            {/* Description */}
            <div>
              <p className="text-lg text-gray-300 leading-relaxed">
                {selectedCategory.details.description}
              </p>
            </div>

            {/* Highlights */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-primary">주요 특징</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {selectedCategory.details.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-surface-light rounded-lg">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Collections */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-primary">대표 라인</h3>
              <div className="flex flex-wrap gap-3">
                {selectedCategory.details.collections.map((collection, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-surface-light border border-border rounded-full text-gray-300 text-sm font-medium"
                  >
                    {collection}
                  </span>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-primary">ZENITH의 약속</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {selectedCategory.details.benefits.map((benefit, index) => (
                  <div key={index} className="flex flex-col items-center text-center p-4 bg-surface-light rounded-lg border border-border">
                    <div className="p-3 bg-primary/20 rounded-full text-primary mb-3">
                      <benefit.icon className="w-6 h-6" />
                    </div>
                    <span className="text-gray-300 text-sm">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-border">
              <a
                href="#products"
                onClick={() => setSelectedCategory(null)}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-primary hover:bg-primary-hover text-white font-semibold rounded-lg transition-colors"
              >
                컬렉션 보기
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                onClick={() => setSelectedCategory(null)}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-surface-light hover:bg-border text-white font-semibold rounded-lg border border-border transition-colors"
              >
                부티크 예약
              </a>
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}

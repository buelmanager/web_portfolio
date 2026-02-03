'use client'

import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CheckCircle, Eye, TrendingUp, Users, Clock } from 'lucide-react'
import Carousel from '@/components/ui/Carousel'
import FadeInSection from '@/components/animations/FadeInSection'
import TextReveal from '@/components/animations/TextReveal'
import Modal from '@/components/ui/Modal'

gsap.registerPlugin(ScrollTrigger)

const categories = [
  {
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80',
    title: '주거 공간',
    count: '80+ 프로젝트',
    description: '삶의 질을 높이는 맞춤형 주거 공간 설계를 제공합니다. 단독주택, 아파트, 빌라 등 다양한 유형의 주거 프로젝트를 진행하며, 거주자의 라이프스타일에 최적화된 공간을 만들어갑니다.',
    stats: {
      completed: '80+',
      satisfaction: '98%',
      experience: '15년+',
    },
    features: [
      '가족 구성원별 맞춤 공간 설계',
      '자연 채광 및 통풍 최적화',
      '수납공간 효율 극대화',
      '에너지 절감 설계',
      '스마트홈 시스템 통합',
    ],
    highlights: ['단독주택', '아파트', '빌라', '타운하우스', '펜트하우스'],
  },
  {
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80',
    title: '상업 공간',
    count: '50+ 프로젝트',
    description: '비즈니스 성공을 위한 전략적 공간 설계를 제공합니다. 브랜드 아이덴티티를 반영하고, 고객 경험을 극대화하는 상업 공간을 만들어 매출 향상에 기여합니다.',
    stats: {
      completed: '50+',
      satisfaction: '95%',
      experience: '12년+',
    },
    features: [
      '브랜드 아이덴티티 공간화',
      '고객 동선 최적화 설계',
      'VMD 전략 연계 인테리어',
      '직원 업무 효율 고려',
      '유지보수 용이한 마감재 선정',
    ],
    highlights: ['플래그십 스토어', '오피스', '리테일', '쇼룸', '팝업스토어'],
  },
  {
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80',
    title: '문화 공간',
    count: '30+ 프로젝트',
    description: '사람들이 모이고 소통하는 문화 공간을 설계합니다. 카페, 갤러리, 복합문화공간 등 방문자에게 특별한 경험을 선사하는 공간을 만들어갑니다.',
    stats: {
      completed: '30+',
      satisfaction: '97%',
      experience: '10년+',
    },
    features: [
      '감성적 분위기 연출',
      '음향 및 조명 설계',
      '전시 및 이벤트 가변성',
      'SNS 포토존 기획',
      '친환경 지속가능 디자인',
    ],
    highlights: ['카페', '레스토랑', '갤러리', '복합문화공간', '공연장'],
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80',
    title: '리모델링',
    count: '40+ 프로젝트',
    description: '기존 공간의 잠재력을 최대한 끌어내는 리모델링 서비스입니다. 구조 변경부터 인테리어 리뉴얼까지, 공간의 가치를 새롭게 재창조합니다.',
    stats: {
      completed: '40+',
      satisfaction: '96%',
      experience: '13년+',
    },
    features: [
      '기존 구조 분석 및 최적화',
      '단열 및 방음 성능 향상',
      '노후 설비 현대화',
      '공간 재배치 및 확장',
      '인허가 절차 지원',
    ],
    highlights: ['아파트 리모델링', '빌딩 리노베이션', '상가 리뉴얼', '한옥 현대화', '오피스 리모델링'],
  },
]

type Category = typeof categories[number]

export default function CategoryGallery() {
  const sectionRef = useRef<HTMLElement>(null)
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)

  useEffect(() => {
    const images = sectionRef.current?.querySelectorAll('.category-image')
    images?.forEach((img) => {
      gsap.fromTo(img,
        { scale: 1.2 },
        {
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: img,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        }
      )
    })
  }, [])

  return (
    <section ref={sectionRef} id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <TextReveal 
            text="프로젝트 카테고리" 
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-primary"
          />
          <FadeInSection delay={0.3}>
            <p className="text-lg text-text-secondary">
              다양한 공간 유형에서 축적된 전문성
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
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 4, spaceBetween: 24 },
            }}
            className="pb-8"
          >
            {categories.map((category, index) => (
              <FadeInSection key={category.title} delay={index * 0.1}>
                <div className="group cursor-pointer" onClick={() => setSelectedCategory(category)}>
                  <div className="relative aspect-[3/4] overflow-hidden mb-4">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="category-image object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="flex items-center gap-2 px-5 py-2.5 bg-white/95 text-primary font-medium hover:bg-secondary hover:text-white transition-colors duration-300">
                        <Eye size={18} />
                        자세히 보기
                      </button>
                    </div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-xl font-semibold text-white mb-1">
                        {category.title}
                      </h3>
                      <p className="text-sm text-white/70">{category.count}</p>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </Carousel>
        </FadeInSection>
      </div>

      {/* Category Detail Modal */}
      <Modal isOpen={!!selectedCategory} onClose={() => setSelectedCategory(null)}>
        {selectedCategory && (
          <div className="grid md:grid-cols-2">
            {/* Image Section */}
            <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[550px]">
              <Image
                src={selectedCategory.image}
                alt={selectedCategory.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block px-4 py-1.5 bg-secondary text-white text-sm font-medium mb-2">
                  {selectedCategory.count}
                </span>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                {selectedCategory.title}
              </h2>

              <p className="text-text-secondary mb-6 leading-relaxed">
                {selectedCategory.description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8 py-6 border-y border-border">
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <TrendingUp size={20} className="text-secondary" />
                  </div>
                  <p className="text-xl font-bold text-primary">{selectedCategory.stats.completed}</p>
                  <p className="text-xs text-text-muted">완료 프로젝트</p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <Users size={20} className="text-secondary" />
                  </div>
                  <p className="text-xl font-bold text-primary">{selectedCategory.stats.satisfaction}</p>
                  <p className="text-xs text-text-muted">고객 만족도</p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <Clock size={20} className="text-secondary" />
                  </div>
                  <p className="text-xl font-bold text-primary">{selectedCategory.stats.experience}</p>
                  <p className="text-xs text-text-muted">전문 경력</p>
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-primary mb-4">서비스 특징</h3>
                <ul className="space-y-2">
                  {selectedCategory.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-text-secondary">
                      <CheckCircle size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Highlights */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-text-muted mb-3">프로젝트 유형</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedCategory.highlights.map((highlight, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-surface-light text-sm text-text-secondary border border-border"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="#contact"
                onClick={() => setSelectedCategory(null)}
                className="inline-block w-full text-center px-8 py-4 bg-primary hover:bg-primary-hover text-white font-semibold tracking-wide transition-all duration-300"
              >
                프로젝트 상담하기
              </a>
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}

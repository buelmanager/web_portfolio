'use client'

import Image from 'next/image'
import Carousel from '@/components/ui/Carousel'
import FadeInSection from '@/components/animations/FadeInSection'
import TextReveal from '@/components/animations/TextReveal'

const categories = [
  {
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80',
    title: '주택용 태양광',
    count: '500+ 설치',
  },
  {
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&q=80',
    title: '상업용 태양광',
    count: '300+ 설치',
  },
  {
    image: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=600&q=80',
    title: '산업용 발전소',
    count: '150+ 설치',
  },
  {
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80',
    title: 'ESS 시스템',
    count: '100+ 설치',
  },
  {
    image: 'https://images.unsplash.com/photo-1548337138-e87d889cc369?w=600&q=80',
    title: '풍력 발전',
    count: '50+ 설치',
  },
  {
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&q=80',
    title: '유지보수 서비스',
    count: '1,000+ 계약',
  },
]

export default function CategoryGallery() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <TextReveal 
            text="솔루션 카테고리" 
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          />
          <FadeInSection delay={0.3}>
            <p className="text-lg text-gray-400">
              다양한 규모와 환경에 맞는 최적의 에너지 솔루션
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
              <div key={category.title} className="group cursor-pointer">
                <div className="relative aspect-square overflow-hidden rounded-xl mb-3">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
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
    </section>
  )
}

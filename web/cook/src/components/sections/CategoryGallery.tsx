'use client'

import Image from 'next/image'
import Carousel from '@/components/ui/Carousel'
import FadeInSection from '@/components/animations/FadeInSection'
import TextReveal from '@/components/animations/TextReveal'

const dishes = [
  {
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80',
    title: '런치 코스',
    count: '5 코스',
  },
  {
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=600&q=80',
    title: '디너 코스',
    count: '8 코스',
  },
  {
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80',
    title: '와인 셀렉션',
    count: '150+ 종',
  },
  {
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&q=80',
    title: '디저트 컬렉션',
    count: '시즌별 변경',
  },
  {
    image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600&q=80',
    title: '애피타이저',
    count: '셰프 추천',
  },
  {
    image: 'https://images.unsplash.com/photo-1482049016gy4-07a3b93d5f63?w=600&q=80',
    title: '메인 디쉬',
    count: '시그니처',
  },
]

export default function CategoryGallery() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <TextReveal 
            text="다이닝 경험" 
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          />
          <FadeInSection delay={0.3}>
            <p className="text-lg text-text-secondary">
              당신만을 위한 특별한 미식 여정을 준비합니다
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
            {dishes.map((dish) => (
              <div key={dish.title} className="group cursor-pointer">
                <div className="relative aspect-square overflow-hidden rounded-xl mb-3">
                  <Image
                    src={dish.image}
                    alt={dish.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {dish.title}
                    </h3>
                    <p className="text-sm text-gray-200">{dish.count}</p>
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

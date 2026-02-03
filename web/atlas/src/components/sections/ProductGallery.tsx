'use client'

import Image from 'next/image'
import Carousel from '@/components/ui/Carousel'
import FadeInSection from '@/components/animations/FadeInSection'
import TextReveal from '@/components/animations/TextReveal'

const menuItems = [
  {
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80',
    title: '한우 안심 스테이크',
    description: '최상급 한우 안심과 트러플 소스의 조화',
  },
  {
    image: 'https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?w=800&q=80',
    title: '랍스터 비스크',
    description: '신선한 랍스터로 우려낸 깊은 풍미',
  },
  {
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
    title: '시즌 코스 메뉴',
    description: '셰프의 철학이 담긴 8가지 코스',
  },
  {
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80',
    title: '와규 타르타르',
    description: '캐비어와 함께 즐기는 프리미엄 타르타르',
  },
  {
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=80',
    title: '시그니처 디저트',
    description: '파티시에의 예술적 창작 디저트',
  },
]

export default function ProductGallery() {
  return (
    <section id="products" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <TextReveal 
            text="시그니처 메뉴" 
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          />
          <FadeInSection delay={0.3}>
            <p className="text-lg text-text-secondary">
              셰프의 철학과 최상의 재료가 만나는 순간
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
            {menuItems.map((item) => (
              <div key={item.title} className="group cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-text-secondary text-sm">{item.description}</p>
              </div>
            ))}
          </Carousel>
        </FadeInSection>
      </div>
    </section>
  )
}

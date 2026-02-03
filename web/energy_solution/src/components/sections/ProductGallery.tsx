'use client'

import Image from 'next/image'
import Carousel from '@/components/ui/Carousel'
import FadeInSection from '@/components/animations/FadeInSection'
import TextReveal from '@/components/animations/TextReveal'

const products = [
  {
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
    title: '주택용 태양광 시스템',
    description: '가정용 3kW~10kW 맞춤형 태양광 발전 시스템',
  },
  {
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80',
    title: '상업용 태양광 발전소',
    description: '건물 옥상, 주차장 등 유휴 공간 활용 발전',
  },
  {
    image: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=800&q=80',
    title: '산업용 태양광 플랜트',
    description: '공장, 물류센터 대규모 발전 시설 구축',
  },
  {
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80',
    title: 'ESS 에너지 저장 시스템',
    description: '리튬이온 배터리 기반 고효율 에너지 저장',
  },
  {
    image: 'https://images.unsplash.com/photo-1548337138-e87d889cc369?w=800&q=80',
    title: '풍력 발전 시스템',
    description: '소형 풍력부터 대형 풍력 발전까지',
  },
]

export default function ProductGallery() {
  return (
    <section id="products" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <TextReveal 
            text="신재생에너지 솔루션" 
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          />
          <FadeInSection delay={0.3}>
            <p className="text-lg text-gray-400">
              고효율 태양광 패널과 첨단 에너지 저장 시스템
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
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
    </section>
  )
}

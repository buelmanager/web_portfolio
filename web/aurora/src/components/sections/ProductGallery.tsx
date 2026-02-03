'use client'

import Image from 'next/image'
import Carousel from '@/components/ui/Carousel'
import FadeInSection from '@/components/animations/FadeInSection'
import TextReveal from '@/components/animations/TextReveal'

const programs = [
  {
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80',
    title: '시그니처 아로마 테라피',
    description: '천연 에센셜 오일로 깊은 이완을 경험하세요',
    duration: '90분',
  },
  {
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800&q=80',
    title: '핫스톤 마사지',
    description: '따뜻한 돌의 온기로 근육 이완과 혈액순환 촉진',
    duration: '120분',
  },
  {
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80',
    title: '딥티슈 마사지',
    description: '깊은 근육 조직까지 집중 관리',
    duration: '60분',
  },
  {
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&q=80',
    title: '페이셜 트리트먼트',
    description: '자연 유래 성분으로 빛나는 피부 완성',
    duration: '75분',
  },
  {
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80',
    title: '커플 프라이빗 스파',
    description: '소중한 사람과 함께하는 특별한 휴식',
    duration: '150분',
  },
]

export default function ProductGallery() {
  return (
    <section id="programs" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <TextReveal 
            text="시그니처 프로그램" 
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground"
          />
          <FadeInSection delay={0.3}>
            <p className="text-lg text-text-secondary">
              전문 테라피스트가 선사하는 프리미엄 웰니스 경험
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
            {programs.map((program) => (
              <div key={program.title} className="group cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-4">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 right-4 px-3 py-1 bg-primary/90 text-white text-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {program.duration}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {program.title}
                </h3>
                <p className="text-text-muted text-sm">{program.description}</p>
              </div>
            ))}
          </Carousel>
        </FadeInSection>
      </div>
    </section>
  )
}

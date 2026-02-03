'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Carousel from '@/components/ui/Carousel'
import FadeInSection from '@/components/animations/FadeInSection'
import TextReveal from '@/components/animations/TextReveal'

gsap.registerPlugin(ScrollTrigger)

const facilities = [
  {
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80',
    title: '프라이빗 스파 스위트',
    description: '오직 당신만을 위한 독립된 공간',
  },
  {
    image: 'https://images.unsplash.com/photo-1591343395082-e120087004b4?w=600&q=80',
    title: '명상 & 요가실',
    description: '마음의 평화를 찾는 시간',
  },
  {
    image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=600&q=80',
    title: '프리미엄 라운지',
    description: '편안한 휴식을 위한 공간',
  },
  {
    image: 'https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?w=600&q=80',
    title: '하이드로 테라피실',
    description: '미네랄 워터의 치유 효과',
  },
  {
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&q=80',
    title: '페이셜 트리트먼트룸',
    description: '자연 유래 프리미엄 케어',
  },
  {
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&q=80',
    title: '핫스톤 테라피실',
    description: '따뜻한 돌의 치유력',
  },
]

export default function CategoryGallery() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const images = sectionRef.current?.querySelectorAll('.facility-image')
    if (!images) return

    images.forEach((img) => {
      gsap.to(img, {
        yPercent: -10,
        ease: 'none',
        scrollTrigger: {
          trigger: img,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      })
    })
  }, [])

  return (
    <section id="facilities" ref={sectionRef} className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <TextReveal 
            text="프리미엄 시설" 
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground"
          />
          <FadeInSection delay={0.3}>
            <p className="text-lg text-text-secondary">
              자연의 아름다움을 담은 힐링 공간
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
            {facilities.map((facility) => (
              <div key={facility.title} className="group cursor-pointer">
                <div className="relative aspect-square overflow-hidden rounded-2xl mb-3">
                  <div className="facility-image absolute inset-0 scale-110">
                    <Image
                      src={facility.image}
                      alt={facility.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/40 transition-colors" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {facility.title}
                    </h3>
                    <p className="text-sm text-white/70">{facility.description}</p>
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

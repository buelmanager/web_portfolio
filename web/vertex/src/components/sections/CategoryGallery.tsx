'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Carousel from '@/components/ui/Carousel'
import FadeInSection from '@/components/animations/FadeInSection'
import TextReveal from '@/components/animations/TextReveal'

gsap.registerPlugin(ScrollTrigger)

const categories = [
  {
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80',
    title: '주거 공간',
    count: '80+ 프로젝트',
  },
  {
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80',
    title: '상업 공간',
    count: '50+ 프로젝트',
  },
  {
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80',
    title: '문화 공간',
    count: '30+ 프로젝트',
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80',
    title: '리모델링',
    count: '40+ 프로젝트',
  },
]

export default function CategoryGallery() {
  const sectionRef = useRef<HTMLElement>(null)

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
                <div className="group cursor-pointer">
                  <div className="relative aspect-[3/4] overflow-hidden mb-4">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="category-image object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
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
    </section>
  )
}

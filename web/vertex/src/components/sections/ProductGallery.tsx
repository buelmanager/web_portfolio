'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Carousel from '@/components/ui/Carousel'
import FadeInSection from '@/components/animations/FadeInSection'
import TextReveal from '@/components/animations/TextReveal'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    title: '한남동 프라이빗 레지던스',
    category: '주택',
    year: '2024',
  },
  {
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    title: '강남 플래그십 스토어',
    category: '상가',
    year: '2023',
  },
  {
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
    title: '성수 스페셜티 카페',
    category: '카페',
    year: '2023',
  },
  {
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    title: '판교 테크 오피스',
    category: '오피스',
    year: '2024',
  },
  {
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80',
    title: '제주 모던 빌라',
    category: '주택',
    year: '2023',
  },
]

export default function ProductGallery() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const images = sectionRef.current?.querySelectorAll('.project-image')
    images?.forEach((img) => {
      gsap.to(img, {
        scale: 1.05,
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
    <section ref={sectionRef} id="projects" className="py-24 bg-surface-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <TextReveal 
            text="프로젝트 포트폴리오" 
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-primary"
          />
          <FadeInSection delay={0.3}>
            <p className="text-lg text-text-secondary">
              공간의 가치를 높이는 vertex의 설계 작업들
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
            {projects.map((project) => (
              <div key={project.title} className="group cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="project-image object-cover transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="inline-block px-3 py-1 bg-secondary text-white text-xs font-medium mb-2">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-primary group-hover:text-secondary transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-sm text-text-muted">{project.year}</span>
                </div>
              </div>
            ))}
          </Carousel>
        </FadeInSection>
      </div>
    </section>
  )
}

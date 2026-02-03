'use client'

import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { X, CheckCircle, MapPin, Users } from 'lucide-react'
import Carousel from '@/components/ui/Carousel'
import FadeInSection from '@/components/animations/FadeInSection'
import TextReveal from '@/components/animations/TextReveal'
import Modal from '@/components/ui/Modal'

gsap.registerPlugin(ScrollTrigger)

const facilities = [
  {
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80',
    title: '프라이빗 스파 스위트',
    description: '오직 당신만을 위한 독립된 공간',
    details: '완벽한 프라이버시가 보장되는 독립형 스위트룸입니다. 개인 자쿠지, 샤워 시설, 휴식 공간이 갖춰져 있어 소중한 분과 함께 특별한 시간을 보내실 수 있습니다.',
    capacity: '2인 기준',
    amenities: ['개인 자쿠지', '샤워 시설', '미니 라운지', '음료 서비스', '프리미엄 어메니티', '개별 온도 조절'],
  },
  {
    image: 'https://images.unsplash.com/photo-1591343395082-e120087004b4?w=600&q=80',
    title: '명상 & 요가실',
    description: '마음의 평화를 찾는 시간',
    details: '자연광이 풍부하게 들어오는 넓은 공간에서 명상과 요가를 즐기실 수 있습니다. 전문 강사의 지도 아래 심신의 안정을 찾아보세요.',
    capacity: '최대 15인',
    amenities: ['요가 매트 제공', '명상 쿠션', '싱잉볼', '향 테라피', '자연 채광', '사운드 시스템'],
  },
  {
    image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=600&q=80',
    title: '프리미엄 라운지',
    description: '편안한 휴식을 위한 공간',
    details: '시술 전후로 편안하게 휴식을 취할 수 있는 라운지입니다. 허브티와 건강 음료, 가벼운 다과를 즐기며 여유로운 시간을 보내세요.',
    capacity: '상시 이용',
    amenities: ['허브티 바', '건강 음료', '다과 서비스', '잡지 & 도서', '와이파이', '편안한 소파'],
  },
  {
    image: 'https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?w=600&q=80',
    title: '하이드로 테라피실',
    description: '미네랄 워터의 치유 효과',
    details: '미네랄이 풍부한 특수 물을 사용한 수치료 공간입니다. 자쿠지, 비쉬 샤워, 스파 풀 등 다양한 수치료 시설을 경험하실 수 있습니다.',
    capacity: '4인 기준',
    amenities: ['미네랄 자쿠지', '비쉬 샤워', '콜드 플런지', '사우나', '스팀룸', '냉온 교대욕'],
  },
  {
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&q=80',
    title: '페이셜 트리트먼트룸',
    description: '자연 유래 프리미엄 케어',
    details: '최신 피부 관리 장비와 유기농 스킨케어 제품을 갖춘 전용 트리트먼트룸입니다. 피부 타입에 맞는 맞춤형 케어를 받으실 수 있습니다.',
    capacity: '1인 전용',
    amenities: ['최신 관리 장비', '유기농 제품', '개별 세면대', 'LED 테라피', '스팀 타월', '개인 파우더룸'],
  },
  {
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&q=80',
    title: '핫스톤 테라피실',
    description: '따뜻한 돌의 치유력',
    details: '화산암인 현무암을 사용한 핫스톤 테라피 전용 공간입니다. 은은한 조명과 아로마 향이 어우러져 깊은 이완을 경험하실 수 있습니다.',
    capacity: '2인 기준',
    amenities: ['천연 현무암', '온열 베드', '아로마 디퓨저', '간접 조명', '음악 시스템', '온열 타월'],
  },
]

interface Facility {
  image: string
  title: string
  description: string
  details: string
  capacity: string
  amenities: string[]
}

export default function CategoryGallery() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null)

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
    <>
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
                <div
                  key={facility.title}
                  className="group cursor-pointer"
                  onClick={() => setSelectedFacility(facility)}
                >
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
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-full">
                        자세히 보기
                      </span>
                    </div>
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

      {/* Modal */}
      <Modal isOpen={!!selectedFacility} onClose={() => setSelectedFacility(null)}>
        {selectedFacility && (
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-surface rounded-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedFacility(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-foreground/50 hover:bg-foreground/70 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            <div className="relative aspect-[16/9]">
              <Image
                src={selectedFacility.image}
                alt={selectedFacility.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
            </div>

            <div className="p-6 md:p-8 -mt-16 relative">
              <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full mb-4">
                프리미엄 시설
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-foreground">{selectedFacility.title}</h2>
              <p className="text-text-secondary mb-6">{selectedFacility.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2 text-sm">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-text-secondary">{selectedFacility.capacity}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-text-secondary">Aurora Spa 본관</span>
                </div>
              </div>

              <div className="mb-6 p-4 bg-surface-light rounded-2xl border border-border">
                <p className="text-text-secondary leading-relaxed">{selectedFacility.details}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4 text-foreground">시설 안내</h3>
                <div className="grid grid-cols-2 gap-3">
                  {selectedFacility.amenities.map((amenity) => (
                    <div key={amenity} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-text-secondary text-sm">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#contact"
                onClick={() => setSelectedFacility(null)}
                className="inline-block w-full text-center px-8 py-4 bg-primary hover:bg-primary-hover text-white font-medium transition-all duration-300 rounded-full"
              >
                시설 이용 문의하기
              </a>
            </div>
          </div>
        )}
      </Modal>
    </>
  )
}

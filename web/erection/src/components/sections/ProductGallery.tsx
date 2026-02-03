'use client'

import { useState } from 'react'
import { X, MapPin, Ruler, Calendar } from 'lucide-react'
import Carousel from '@/components/ui/Carousel'
import FadeInSection from '@/components/animations/FadeInSection'
import TextReveal from '@/components/animations/TextReveal'
import Modal from '@/components/ui/Modal'

const projects = [
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    title: '강남 프리미엄 주택',
    description: '모던 스타일의 고급 단독주택 신축',
    area: '연면적 320㎡',
    location: '서울 강남구',
    duration: '6개월',
    details: '고급 자재와 스마트홈 시스템을 적용한 프리미엄 단독주택입니다. 지하 1층, 지상 2층 규모로 넓은 거실과 개방형 주방, 4개의 침실을 갖추고 있습니다.',
    features: ['스마트홈 시스템', '지열 냉난방', '고급 원목 마감', '옥상 정원'],
  },
  {
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    title: '판교 오피스 인테리어',
    description: 'IT 기업 본사 사무실 전면 리모델링',
    area: '연면적 850㎡',
    location: '경기 성남시 판교',
    duration: '3개월',
    details: '직원 복지와 업무 효율을 모두 고려한 현대적인 오피스 공간입니다. 오픈 플로어 플랜과 집중 업무 공간을 조화롭게 배치했습니다.',
    features: ['오픈 플로어', '회의실 8개', '휴게 공간', '카페테리아'],
  },
  {
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80',
    title: '청담동 카페 시공',
    description: '감각적인 디자인의 프리미엄 카페',
    area: '연면적 180㎡',
    location: '서울 강남구 청담동',
    duration: '2개월',
    details: '자연광을 최대한 활용한 밝고 개방적인 카페 공간입니다. 미니멀한 디자인과 따뜻한 우드 톤이 조화를 이룹니다.',
    features: ['대형 창문', '테라스 좌석', '오픈 키친', '프라이빗 룸'],
  },
  {
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80',
    title: '용산 아파트 리모델링',
    description: '30평대 아파트 전체 인테리어',
    area: '연면적 115㎡',
    location: '서울 용산구',
    duration: '6주',
    details: '기존 구조를 최대한 활용하면서 현대적인 감각으로 재탄생시킨 아파트입니다. 수납 공간을 극대화하고 동선을 효율적으로 개선했습니다.',
    features: ['확장형 거실', '드레스룸', '붙박이장', '간접 조명'],
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
    title: '분당 상가 건물',
    description: '4층 규모 상업용 건물 신축',
    area: '연면적 1,200㎡',
    location: '경기 성남시 분당구',
    duration: '8개월',
    details: '임대 수익 극대화를 위해 설계된 상업용 건물입니다. 각 층별 독립된 출입구와 충분한 주차 공간을 확보했습니다.',
    features: ['엘리베이터', '주차장 20대', '층별 독립 출입', '옥상 공간'],
  },
]

interface Project {
  image: string
  title: string
  description: string
  area: string
  location: string
  duration: string
  details: string
  features: string[]
}

export default function ProductGallery() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <>
      <section id="products" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <TextReveal
              text="시공 사례"
              className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
            />
            <FadeInSection delay={0.3}>
              <p className="text-lg text-gray-400">
                로터스건설이 완성한 프리미엄 시공 포트폴리오
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
                <div
                  key={project.title}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm text-primary font-medium">{project.area}</span>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="px-4 py-2 bg-primary text-white text-sm font-medium rounded">
                        자세히 보기
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{project.description}</p>
                </div>
              ))}
            </Carousel>
          </FadeInSection>
        </div>
      </section>

      {/* Modal */}
      <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
        {selectedProject && (
          <div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-surface rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-black/50 hover:bg-black/70 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            <div className="relative aspect-video">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
            </div>

            <div className="p-6 md:p-8 -mt-20 relative">
              <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full mb-4">
                시공 완료
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">{selectedProject.title}</h2>
              <p className="text-gray-400 mb-6">{selectedProject.description}</p>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-gray-300">{selectedProject.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Ruler className="w-4 h-4 text-primary" />
                  <span className="text-gray-300">{selectedProject.area}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="text-gray-300">{selectedProject.duration}</span>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">프로젝트 설명</h3>
                <p className="text-gray-400 leading-relaxed">{selectedProject.details}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">주요 특징</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 bg-surface-light border border-border rounded-full text-sm text-gray-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href="#contact"
                onClick={() => setSelectedProject(null)}
                className="inline-block w-full text-center px-8 py-4 bg-primary hover:bg-primary-hover text-white font-semibold transition-all duration-300 rounded-lg"
              >
                비슷한 프로젝트 문의하기
              </a>
            </div>
          </div>
        )}
      </Modal>
    </>
  )
}

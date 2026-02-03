'use client'

import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CheckCircle, MapPin, Ruler, Calendar, Eye } from 'lucide-react'
import Carousel from '@/components/ui/Carousel'
import FadeInSection from '@/components/animations/FadeInSection'
import TextReveal from '@/components/animations/TextReveal'
import Modal from '@/components/ui/Modal'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    title: '한남동 프라이빗 레지던스',
    category: '주택',
    year: '2024',
    location: '서울 용산구 한남동',
    area: '450㎡',
    duration: '8개월',
    description: '한강이 보이는 언덕 위에 자리 잡은 프라이빗 레지던스입니다. 자연 채광을 극대화한 설계와 프라이버시를 고려한 중정 구조로, 도심 속에서도 여유로운 일상을 누릴 수 있습니다.',
    features: [
      '바닥 난방 시스템 및 지열 히트펌프',
      '전면 통유리 파사드',
      '스마트홈 자동화 시스템',
      '옥상 정원 및 루프탑 테라스',
      '지하 와인셀러 및 홈시어터',
    ],
  },
  {
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    title: '강남 플래그십 스토어',
    category: '상가',
    year: '2023',
    location: '서울 강남구 신사동',
    area: '320㎡',
    duration: '5개월',
    description: '글로벌 패션 브랜드의 플래그십 스토어로, 브랜드 아이덴티티를 공간에 담아냈습니다. 유동적인 동선과 연출 조명으로 제품의 가치를 극대화합니다.',
    features: [
      '모듈형 디스플레이 시스템',
      '연출 조명 및 간접 조명',
      'VIP 라운지 및 피팅룸',
      '디지털 사이니지 연동',
      '지속가능한 친환경 자재',
    ],
  },
  {
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
    title: '성수 스페셜티 카페',
    category: '카페',
    year: '2023',
    location: '서울 성동구 성수동',
    area: '180㎡',
    duration: '4개월',
    description: '로스터리 카페의 본질을 담은 공간입니다. 원두 로스팅 과정을 고객이 직접 볼 수 있도록 오픈 키친 형태로 설계하여 커피 문화를 경험할 수 있습니다.',
    features: [
      '오픈 로스터리 공간',
      '커핑룸 및 클래스룸',
      '빈티지 인더스트리얼 인테리어',
      '테라스 가든 좌석',
      '맞춤형 원목 가구',
    ],
  },
  {
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    title: '판교 테크 오피스',
    category: '오피스',
    year: '2024',
    location: '경기 성남시 판교',
    area: '1,200㎡',
    duration: '6개월',
    description: 'IT 스타트업을 위한 창의적 업무 공간입니다. 집중 업무와 협업이 자유롭게 이루어질 수 있도록 다양한 형태의 공간을 배치했습니다.',
    features: [
      '핫데스킹 존 및 전용 데스크',
      '미팅룸 및 화상회의실',
      '휴게 라운지 및 카페테리아',
      '수면실 및 명상 공간',
      '스탠딩 데스크 및 폰부스',
    ],
  },
  {
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80',
    title: '제주 모던 빌라',
    category: '주택',
    year: '2023',
    location: '제주 서귀포시 안덕면',
    area: '280㎡',
    duration: '10개월',
    description: '제주 오름을 바라보는 모던 빌라입니다. 현무암과 콘크리트를 조화롭게 사용하여 제주의 자연과 어우러지는 건축미를 완성했습니다.',
    features: [
      '무한 수영장 (인피니티 풀)',
      '전면 오션뷰 테라스',
      '제주 현무암 마감',
      '게스트 하우스 및 BBQ 존',
      '태양광 발전 시스템',
    ],
  },
]

type Project = typeof projects[number]

export default function ProductGallery() {
  const sectionRef = useRef<HTMLElement>(null)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

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
              <div key={project.title} className="group cursor-pointer" onClick={() => setSelectedProject(project)}>
                <div className="relative aspect-[4/3] overflow-hidden mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="project-image object-cover transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-white/95 text-primary font-medium hover:bg-secondary hover:text-white transition-colors duration-300">
                      <Eye size={18} />
                      자세히 보기
                    </button>
                  </div>
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

      {/* Project Detail Modal */}
      <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
        {selectedProject && (
          <div className="grid md:grid-cols-2">
            {/* Image Section */}
            <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[500px]">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="inline-block px-4 py-1.5 bg-secondary text-white text-sm font-medium">
                  {selectedProject.category}
                </span>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                {selectedProject.title}
              </h2>

              <p className="text-text-secondary mb-6 leading-relaxed">
                {selectedProject.description}
              </p>

              {/* Project Info */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 text-sm">
                  <MapPin size={18} className="text-secondary" />
                  <div>
                    <p className="text-text-muted">위치</p>
                    <p className="font-medium text-primary">{selectedProject.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Ruler size={18} className="text-secondary" />
                  <div>
                    <p className="text-text-muted">면적</p>
                    <p className="font-medium text-primary">{selectedProject.area}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Calendar size={18} className="text-secondary" />
                  <div>
                    <p className="text-text-muted">완공</p>
                    <p className="font-medium text-primary">{selectedProject.year}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Calendar size={18} className="text-secondary" />
                  <div>
                    <p className="text-text-muted">소요기간</p>
                    <p className="font-medium text-primary">{selectedProject.duration}</p>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-primary mb-4">주요 특징</h3>
                <ul className="space-y-2">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-text-secondary">
                      <CheckCircle size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <a
                href="#contact"
                onClick={() => setSelectedProject(null)}
                className="inline-block w-full text-center px-8 py-4 bg-primary hover:bg-primary-hover text-white font-semibold tracking-wide transition-all duration-300"
              >
                프로젝트 상담하기
              </a>
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}

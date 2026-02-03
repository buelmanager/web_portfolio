'use client'

import { useState } from 'react'
import Image from 'next/image'
import { CheckCircle, MapPin, Ruler, Calendar, Eye } from 'lucide-react'
import FadeInSection from '@/components/animations/FadeInSection'
import TextReveal from '@/components/animations/TextReveal'
import Modal from '@/components/ui/Modal'

const categories = {
  '주거': [
    {
      name: '한남동 프라이빗 레지던스',
      type: '단독주택',
      description: '도심 속 자연을 품은 프라이빗 주거 공간',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
      area: '450㎡',
      location: '서울 용산구 한남동',
      year: '2024',
      duration: '8개월',
      fullDescription: '한강이 보이는 언덕 위에 자리 잡은 프라이빗 레지던스입니다. 자연 채광을 극대화한 설계와 프라이버시를 고려한 중정 구조로, 도심 속에서도 여유로운 일상을 누릴 수 있습니다. 고급 마감재와 스마트홈 시스템이 적용되었습니다.',
      features: [
        '바닥 난방 시스템 및 지열 히트펌프',
        '전면 통유리 파사드',
        '스마트홈 자동화 시스템',
        '옥상 정원 및 루프탑 테라스',
      ],
    },
    {
      name: '판교 모던 하우스',
      type: '단독주택',
      description: '미니멀한 디자인과 기능성의 조화',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
      area: '320㎡',
      location: '경기 성남시 판교',
      year: '2023',
      duration: '6개월',
      fullDescription: '젊은 가족을 위한 미니멀 디자인 주택입니다. 불필요한 장식을 배제하고 기능성에 집중하여 실용적이면서도 세련된 공간을 완성했습니다. 아이들의 성장에 맞춰 변화할 수 있는 가변형 공간이 특징입니다.',
      features: [
        '가변형 벽체 시스템',
        '대용량 수납 설계',
        '친환경 단열 시스템',
        '프라이빗 가든',
      ],
    },
    {
      name: '제주 힐링 빌라',
      type: '전원주택',
      description: '제주의 자연을 담은 휴식 공간',
      image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80',
      area: '280㎡',
      location: '제주 서귀포시 안덕면',
      year: '2023',
      duration: '10개월',
      fullDescription: '제주 오름을 바라보는 힐링 빌라입니다. 현무암과 콘크리트를 조화롭게 사용하여 제주의 자연과 어우러지는 건축미를 완성했습니다. 세컨드 하우스로 활용하기 좋은 구조입니다.',
      features: [
        '무한 수영장 (인피니티 풀)',
        '전면 오션뷰 테라스',
        '제주 현무암 마감',
        '태양광 발전 시스템',
      ],
    },
  ],
  '상업': [
    {
      name: '강남 플래그십 스토어',
      type: '리테일',
      description: '브랜드 아이덴티티를 공간으로 표현',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80',
      area: '200㎡',
      location: '서울 강남구 신사동',
      year: '2023',
      duration: '4개월',
      fullDescription: '글로벌 패션 브랜드의 플래그십 스토어입니다. 브랜드 아이덴티티를 공간 곳곳에 담아내어 고객에게 특별한 쇼핑 경험을 선사합니다. 유동적인 동선과 연출 조명으로 제품의 가치를 극대화했습니다.',
      features: [
        '모듈형 디스플레이 시스템',
        'VIP 라운지 및 피팅룸',
        '디지털 사이니지 연동',
        '지속가능한 친환경 자재',
      ],
    },
    {
      name: '판교 테크 오피스',
      type: '오피스',
      description: '창의적 협업을 위한 열린 업무 공간',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
      area: '1,200㎡',
      location: '경기 성남시 판교',
      year: '2024',
      duration: '5개월',
      fullDescription: 'IT 스타트업을 위한 창의적 업무 공간입니다. 집중 업무와 협업이 자유롭게 이루어질 수 있도록 다양한 형태의 공간을 배치했습니다. 직원들의 웰빙을 고려한 휴게 공간도 마련되어 있습니다.',
      features: [
        '핫데스킹 존 및 전용 데스크',
        '미팅룸 및 화상회의실',
        '휴게 라운지 및 카페테리아',
        '수면실 및 명상 공간',
      ],
    },
    {
      name: '청담 뷰티 살롱',
      type: '살롱',
      description: '럭셔리한 경험을 선사하는 프리미엄 공간',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80',
      area: '150㎡',
      location: '서울 강남구 청담동',
      year: '2023',
      duration: '3개월',
      fullDescription: '프리미엄 뷰티 브랜드의 플래그십 살롱입니다. 고객에게 럭셔리한 경험을 선사하기 위해 최고급 마감재와 조명 설계에 공을 들였습니다. 프라이빗한 VIP룸도 마련되어 있습니다.',
      features: [
        '프라이빗 VIP룸',
        '고급 대리석 마감',
        '맞춤형 조명 시스템',
        '최신 미용 장비 배치',
      ],
    },
  ],
  '문화': [
    {
      name: '성수 갤러리 카페',
      type: '복합문화',
      description: '예술과 커피가 만나는 문화 공간',
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80',
      area: '180㎡',
      location: '서울 성동구 성수동',
      year: '2023',
      duration: '4개월',
      fullDescription: '로스터리 카페와 갤러리가 결합된 복합문화공간입니다. 예술 작품을 감상하며 커피를 즐길 수 있는 특별한 경험을 제공합니다. 정기적인 전시 교체를 고려한 유연한 공간 구성이 특징입니다.',
      features: [
        '오픈 로스터리 공간',
        '가변형 전시 시스템',
        '빈티지 인더스트리얼 인테리어',
        '테라스 가든 좌석',
      ],
    },
    {
      name: '홍대 아트 스튜디오',
      type: '스튜디오',
      description: '창작 활동을 위한 영감의 공간',
      image: 'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=600&q=80',
      area: '250㎡',
      location: '서울 마포구 서교동',
      year: '2023',
      duration: '3개월',
      fullDescription: '다양한 창작 활동을 지원하는 아트 스튜디오입니다. 자연광이 풍부하게 들어오는 작업 공간과 작품 전시를 위한 갤러리 공간을 갖추고 있습니다. 예술가들의 협업을 위한 공용 공간도 마련되어 있습니다.',
      features: [
        '대형 천창 자연 채광',
        '작품 보관 창고',
        '협업 라운지',
        '전시 및 이벤트 공간',
      ],
    },
    {
      name: '이태원 북카페',
      type: '카페',
      description: '책과 함께하는 여유로운 시간',
      image: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=600&q=80',
      area: '120㎡',
      location: '서울 용산구 이태원동',
      year: '2022',
      duration: '3개월',
      fullDescription: '책과 커피를 함께 즐길 수 있는 아늑한 북카페입니다. 독서에 집중할 수 있는 프라이빗한 좌석과 소규모 북클럽을 위한 모임 공간을 갖추고 있습니다. 약 3,000권의 큐레이션 도서를 보유하고 있습니다.',
      features: [
        '3,000권 큐레이션 도서',
        '프라이빗 독서 부스',
        '북클럽 미팅룸',
        '아늑한 벽난로 좌석',
      ],
    },
  ],
  '리모델링': [
    {
      name: '압구정 빈티지 아파트',
      type: '아파트',
      description: '30년 된 아파트의 현대적 재해석',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80',
      area: '165㎡',
      location: '서울 강남구 압구정동',
      year: '2023',
      duration: '4개월',
      fullDescription: '30년 된 빈티지 아파트를 현대적 감각으로 리모델링했습니다. 기존 구조의 장점을 살리면서 최신 설비와 마감재로 업그레이드하여 새 아파트 못지않은 주거 환경을 만들었습니다.',
      features: [
        '전면 배관 교체',
        '단열 성능 향상',
        '오픈형 주방 구조 변경',
        '스마트 조명 시스템',
      ],
    },
    {
      name: '종로 한옥 리노베이션',
      type: '한옥',
      description: '전통과 현대의 조화로운 만남',
      image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80',
      area: '200㎡',
      location: '서울 종로구 북촌',
      year: '2023',
      duration: '8개월',
      fullDescription: '100년 된 한옥을 현대적 주거 공간으로 리노베이션했습니다. 전통 한옥의 아름다움을 보존하면서도 현대인의 생활 편의를 고려한 설비를 갖추었습니다. 마당을 중심으로 한 공간 구성이 특징입니다.',
      features: [
        '전통 기와 복원',
        '바닥 온돌 시스템',
        '현대식 주방 및 욕실',
        '중정 정원 조성',
      ],
    },
    {
      name: '을지로 오피스 리뉴얼',
      type: '오피스',
      description: '낡은 사무실의 스마트한 변신',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&q=80',
      area: '400㎡',
      location: '서울 중구 을지로',
      year: '2024',
      duration: '3개월',
      fullDescription: '40년 된 오래된 사무실 건물의 한 층을 현대적인 공유 오피스로 리뉴얼했습니다. 천장을 노출하여 높이감을 확보하고, 빈티지한 분위기와 현대적 설비가 조화를 이루는 공간을 만들었습니다.',
      features: [
        '노출 천장 인더스트리얼 디자인',
        '공유 미팅룸 및 라운지',
        '개인 집중 부스',
        '최신 회의 시스템',
      ],
    },
  ],
}

type CategoryKey = keyof typeof categories
type Project = typeof categories[CategoryKey][number]

export default function CategorySelector() {
  const [activeTab, setActiveTab] = useState<CategoryKey>('주거')
  const [activeIndex, setActiveIndex] = useState(0)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const currentProjects = categories[activeTab]
  const activeProject = currentProjects[activeIndex]

  return (
    <section className="py-24 bg-surface-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <TextReveal 
            text="카테고리별 프로젝트" 
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-primary"
          />
        </div>

        <FadeInSection>
          <div className="flex justify-center gap-2 md:gap-4 mb-12 flex-wrap">
            {(Object.keys(categories) as CategoryKey[]).map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab)
                  setActiveIndex(0)
                }}
                className={`px-5 py-2.5 font-medium text-sm tracking-wide transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-primary text-white'
                    : 'bg-white text-text-secondary border border-border hover:border-secondary hover:text-secondary'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </FadeInSection>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <FadeInSection direction="left">
            <div
              className="relative aspect-[4/3] overflow-hidden cursor-pointer group"
              onClick={() => setSelectedProject(activeProject)}
            >
              <Image
                src={activeProject.image}
                alt={activeProject.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="flex items-center gap-2 px-5 py-2.5 bg-white/95 text-primary font-medium hover:bg-secondary hover:text-white transition-colors duration-300">
                  <Eye size={18} />
                  자세히 보기
                </button>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection direction="right">
            <div className="space-y-6">
              <div>
                <span className="text-secondary text-sm font-semibold uppercase tracking-wider">
                  {activeProject.type}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-primary">
                  {activeProject.name}
                </h3>
                <p className="text-text-secondary text-lg mb-6">
                  {activeProject.description}
                </p>
                <p className="text-xl font-semibold text-secondary mb-8">
                  면적: {activeProject.area}
                </p>
                <a
                  href="#contact"
                  className="inline-block px-8 py-4 bg-primary hover:bg-primary-hover text-white font-semibold tracking-wide transition-all duration-300"
                >
                  프로젝트 상담하기
                </a>
              </div>

              <div className="flex gap-4 pt-8 border-t border-border">
                {currentProjects.map((project, index) => (
                  <button
                    key={project.name}
                    onClick={() => setActiveIndex(index)}
                    className={`relative w-20 h-20 overflow-hidden border-2 transition-all ${
                      activeIndex === index ? 'border-secondary' : 'border-transparent opacity-50 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>

      {/* Project Detail Modal */}
      <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
        {selectedProject && (
          <div className="grid md:grid-cols-2">
            {/* Image Section */}
            <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[500px]">
              <Image
                src={selectedProject.image}
                alt={selectedProject.name}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="inline-block px-4 py-1.5 bg-secondary text-white text-sm font-medium">
                  {selectedProject.type}
                </span>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                {selectedProject.name}
              </h2>

              <p className="text-text-secondary mb-6 leading-relaxed">
                {selectedProject.fullDescription}
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

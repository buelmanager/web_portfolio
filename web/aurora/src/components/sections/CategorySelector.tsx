'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, Clock, CheckCircle, Sparkles } from 'lucide-react'
import FadeInSection from '@/components/animations/FadeInSection'
import TextReveal from '@/components/animations/TextReveal'
import Modal from '@/components/ui/Modal'

const categories = {
  '바디케어': [
    {
      name: '딥티슈 마사지',
      type: '근육 이완',
      description: '깊은 근육 조직까지 집중 관리하여 만성 피로와 통증을 해소합니다',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80',
      price: '₩180,000',
      duration: '60분',
      details: '만성 통증과 근육 경직을 전문적으로 케어하는 딥티슈 마사지입니다. 숙련된 테라피스트가 깊은 근육층까지 집중적으로 관리하여 뭉친 근육을 풀어주고 혈액순환을 촉진합니다.',
      features: ['심층 근육 케어', '통증 부위 집중 관리', '스트레칭 테크닉', '쿨링 젤 마무리', '허브티 서비스', '개인 샤워실'],
    },
    {
      name: '핫스톤 테라피',
      type: '온열 요법',
      description: '따뜻한 현무암 돌로 근육 이완과 혈액순환을 촉진합니다',
      image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&q=80',
      price: '₩220,000',
      duration: '90분',
      details: '화산암인 현무암을 50~60도로 가열하여 몸의 주요 경혈점에 올려놓고 깊은 이완을 유도합니다. 온열 효과로 근육이 부드럽게 이완되고 혈액순환이 촉진됩니다.',
      features: ['천연 현무암 사용', '경혈점 온열 테라피', '근육 이완 마사지', '아로마 오일 포함', '족욕 서비스', '허브티 서비스'],
    },
    {
      name: '아로마 마사지',
      type: '이완 요법',
      description: '천연 에센셜 오일로 심신의 안정과 깊은 이완을 선사합니다',
      image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80',
      price: '₩200,000',
      duration: '75분',
      details: '라벤더, 유칼립투스, 로즈마리 등 최상급 에센셜 오일을 개인별 컨디션에 맞게 블렌딩합니다. 향기 테라피와 마사지가 어우러져 심신의 균형을 찾아드립니다.',
      features: ['프리미엄 에센셜 오일', '전신 이완 마사지', '두피 케어 포함', '림프 드레나지', '허브티 서비스', '개인 샤워실'],
    },
  ],
  '페이셜': [
    {
      name: '안티에이징 페이셜',
      type: '피부 재생',
      description: '자연 유래 성분으로 탄력 있고 젊은 피부를 되찾아 드립니다',
      image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&q=80',
      price: '₩250,000',
      duration: '90분',
      details: '유기농 성분의 프리미엄 안티에이징 제품으로 피부 깊숙이 영양을 공급합니다. 콜라겐 생성을 촉진하고 탄력을 회복시켜 젊고 건강한 피부로 가꿔드립니다.',
      features: ['유기농 스킨케어', 'LED 광선 테라피', '콜라겐 마스크', '림프 드레나지', '목/어깨 마사지', '메이크업 베이스'],
    },
    {
      name: '하이드레이팅 케어',
      type: '수분 보습',
      description: '깊은 수분 공급으로 촉촉하고 빛나는 피부 완성',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80',
      price: '₩200,000',
      duration: '75분',
      details: '건조하고 지친 피부에 깊은 수분을 공급하는 집중 보습 케어입니다. 히알루론산과 천연 보습 성분으로 피부 장벽을 강화하고 촉촉한 피부를 만들어드립니다.',
      features: ['히알루론산 세럼', '수분 팩 트리트먼트', '딥클렌징', '각질 관리', '보습 마스크', '미스트 마무리'],
    },
    {
      name: '클래리파잉 페이셜',
      type: '딥클렌징',
      description: '모공 속 노폐물 제거와 피부 정화 케어',
      image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80',
      price: '₩180,000',
      duration: '60분',
      details: '모공 깊숙이 쌓인 노폐물과 피지를 깨끗이 제거하는 딥클렌징 케어입니다. 피부 톤을 밝게 하고 맑은 피부결로 가꿔드립니다.',
      features: ['효소 클렌징', '모공 케어', '피부 진정팩', '톤업 마스크', '피부 진단', '홈케어 상담'],
    },
  ],
  '패키지': [
    {
      name: '커플 로맨틱 스파',
      type: '커플 전용',
      description: '소중한 사람과 함께하는 프라이빗 스파 경험',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80',
      price: '₩450,000',
      duration: '150분',
      details: '프라이빗 스위트룸에서 소중한 사람과 함께 즐기는 럭셔리 스파 경험입니다. 커플 아로마 마사지, 족욕, 샴페인 서비스가 포함된 로맨틱 패키지입니다.',
      features: ['프라이빗 스위트룸', '커플 아로마 마사지', '샴페인 & 과일', '족욕 & 스크럽', '커플 사진 촬영', '기념품 증정'],
    },
    {
      name: '데이 스파 패키지',
      type: '풀 코스',
      description: '바디 + 페이셜 + 명상의 완벽한 휴식 코스',
      image: 'https://images.unsplash.com/photo-1591343395082-e120087004b4?w=600&q=80',
      price: '₩380,000',
      duration: '180분',
      details: '하루 종일 스파에서 보내는 완벽한 힐링 데이입니다. 전신 아로마 마사지, 페이셜 케어, 명상 세션이 포함된 풀 코스 패키지입니다.',
      features: ['전신 아로마 마사지', '안티에이징 페이셜', '명상 세션', '건강 점심 식사', '라운지 이용', '허브티 서비스'],
    },
    {
      name: '프리미엄 멤버십',
      type: '월정액',
      description: '매월 2회 시그니처 프로그램 + 부가 혜택',
      image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=600&q=80',
      price: '₩350,000/월',
      duration: '횟수 무제한',
      details: '매월 2회의 시그니처 프로그램을 선택하여 이용할 수 있는 프리미엄 멤버십입니다. 라운지 무제한 이용, 동반 할인 등 다양한 혜택이 제공됩니다.',
      features: ['월 2회 시그니처 프로그램', '라운지 무제한', '동반 20% 할인', '생일 특별 케어', '우선 예약권', 'VIP 이벤트 초대'],
    },
  ],
  '웰니스': [
    {
      name: '명상 & 요가',
      type: '마음 케어',
      description: '전문 강사와 함께하는 마음 챙김 프로그램',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80',
      price: '₩80,000',
      duration: '60분',
      details: '전문 요가 강사와 함께하는 심신 안정 프로그램입니다. 호흡법과 명상을 통해 스트레스를 해소하고 마음의 평화를 찾아드립니다.',
      features: ['하타 요가', '호흡 명상', '마음 챙김 수련', '싱잉볼 테라피', '요가 매트 제공', '허브티 서비스'],
    },
    {
      name: '사운드 힐링',
      type: '소리 치유',
      description: '싱잉볼과 자연의 소리로 마음의 평화 찾기',
      image: 'https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=600&q=80',
      price: '₩120,000',
      duration: '75분',
      details: '티베트 싱잉볼의 깊은 울림과 자연의 소리로 심신을 치유하는 프로그램입니다. 소리의 진동이 몸과 마음의 긴장을 풀어줍니다.',
      features: ['티베트 싱잉볼', '자연음 명상', '크리스탈볼', '소리 진동 테라피', '아로마 테라피', '허브티 서비스'],
    },
    {
      name: '웰니스 컨설팅',
      type: '맞춤 설계',
      description: '개인별 라이프스타일에 맞는 웰니스 플랜 설계',
      image: 'https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?w=600&q=80',
      price: '₩50,000',
      duration: '45분',
      details: '웰니스 전문가가 고객의 생활 패턴, 스트레스 수준, 건강 상태를 분석하여 맞춤형 웰니스 플랜을 설계해 드립니다.',
      features: ['1:1 상담', '스트레스 진단', '생활습관 분석', '맞춤 프로그램 추천', '홈케어 가이드', '팔로업 상담'],
    },
  ],
}

interface Program {
  name: string
  type: string
  description: string
  image: string
  price: string
  duration: string
  details: string
  features: string[]
}

type CategoryKey = keyof typeof categories

export default function CategorySelector() {
  const [activeTab, setActiveTab] = useState<CategoryKey>('바디케어')
  const [activeIndex, setActiveIndex] = useState(0)
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null)

  const currentPrograms = categories[activeTab]
  const activeProgram = currentPrograms[activeIndex]

  return (
    <>
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <TextReveal
              text="프로그램 카테고리"
              className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground"
            />
          </div>

          <FadeInSection>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {(Object.keys(categories) as CategoryKey[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab)
                    setActiveIndex(0)
                  }}
                  className={`px-6 py-3 font-medium text-sm tracking-wider transition-all duration-300 rounded-full ${
                    activeTab === tab
                      ? 'bg-primary text-white'
                      : 'bg-surface text-text-secondary hover:text-foreground hover:bg-surface-light border border-border'
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
                className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group"
                onClick={() => setSelectedProgram(activeProgram)}
              >
                <Image
                  src={activeProgram.image}
                  alt={activeProgram.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-foreground text-sm rounded-full">
                  {activeProgram.duration}
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-full">
                    자세히 보기
                  </span>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection direction="right">
              <div className="space-y-6">
                <div>
                  <span className="text-primary text-sm font-medium tracking-wider">
                    {activeProgram.type}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-foreground">
                    {activeProgram.name}
                  </h3>
                  <p className="text-text-secondary text-lg mb-6 leading-relaxed">
                    {activeProgram.description}
                  </p>
                  <p className="text-2xl font-bold text-primary mb-8">
                    {activeProgram.price}
                  </p>
                  <a
                    href="#contact"
                    className="inline-block px-8 py-4 bg-primary hover:bg-primary-hover text-white font-medium tracking-wide transition-all duration-300 rounded-full"
                  >
                    예약하기
                  </a>
                </div>

                <div className="flex gap-4 pt-8 border-t border-border">
                  {currentPrograms.map((program, index) => (
                    <button
                      key={program.name}
                      onClick={() => setActiveIndex(index)}
                      className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                        activeIndex === index ? 'border-primary' : 'border-transparent opacity-50 hover:opacity-100'
                      }`}
                    >
                      <Image
                        src={program.image}
                        alt={program.name}
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
      </section>

      {/* Modal */}
      <Modal isOpen={!!selectedProgram} onClose={() => setSelectedProgram(null)}>
        {selectedProgram && (
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-surface rounded-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProgram(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-foreground/50 hover:bg-foreground/70 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            <div className="relative aspect-[16/9]">
              <Image
                src={selectedProgram.image}
                alt={selectedProgram.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
            </div>

            <div className="p-6 md:p-8 -mt-16 relative">
              <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full mb-4">
                {selectedProgram.type}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-foreground">{selectedProgram.name}</h2>
              <p className="text-text-secondary mb-6">{selectedProgram.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-text-secondary">소요 시간: {selectedProgram.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-text-secondary">프리미엄 케어</span>
                </div>
              </div>

              <div className="mb-6 p-4 bg-surface-light rounded-2xl border border-border">
                <p className="text-text-secondary leading-relaxed">{selectedProgram.details}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4 text-foreground">포함 서비스</h3>
                <div className="grid grid-cols-2 gap-3">
                  {selectedProgram.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-text-secondary text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6 p-4 bg-primary/10 rounded-2xl border border-primary/30">
                <div className="flex items-center justify-between">
                  <span className="text-text-secondary">프로그램 가격</span>
                  <span className="text-xl font-bold text-primary">{selectedProgram.price}</span>
                </div>
              </div>

              <a
                href="#contact"
                onClick={() => setSelectedProgram(null)}
                className="inline-block w-full text-center px-8 py-4 bg-primary hover:bg-primary-hover text-white font-medium transition-all duration-300 rounded-full"
              >
                예약 문의하기
              </a>
            </div>
          </div>
        )}
      </Modal>
    </>
  )
}

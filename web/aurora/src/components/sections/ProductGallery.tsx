'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, Clock, Sparkles, CheckCircle } from 'lucide-react'
import Carousel from '@/components/ui/Carousel'
import FadeInSection from '@/components/animations/FadeInSection'
import TextReveal from '@/components/animations/TextReveal'
import Modal from '@/components/ui/Modal'

const programs = [
  {
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80',
    title: '시그니처 아로마 테라피',
    description: '천연 에센셜 오일로 깊은 이완을 경험하세요',
    duration: '90분',
    price: '₩220,000',
    details: '라벤더, 유칼립투스, 로즈마리 등 최상급 에센셜 오일을 블렌딩하여 심신의 균형을 찾아드립니다. 스트레스 해소와 깊은 이완을 위한 전신 마사지입니다.',
    features: ['프리미엄 에센셜 오일', '전신 이완 마사지', '두피 케어 포함', '허브티 서비스'],
  },
  {
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800&q=80',
    title: '핫스톤 마사지',
    description: '따뜻한 돌의 온기로 근육 이완과 혈액순환 촉진',
    duration: '120분',
    price: '₩280,000',
    details: '화산암인 현무암을 50~60도로 가열하여 몸의 주요 경혈점에 올려놓고 깊은 이완을 유도합니다. 근육 긴장 완화와 혈액순환 개선에 탁월합니다.',
    features: ['천연 현무암 사용', '경혈점 온열 테라피', '근육 이완 마사지', '아로마 오일 포함'],
  },
  {
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80',
    title: '딥티슈 마사지',
    description: '깊은 근육 조직까지 집중 관리',
    duration: '60분',
    price: '₩180,000',
    details: '만성 통증과 근육 경직을 해소하는 강도 높은 마사지입니다. 깊은 근육 조직까지 도달하여 뭉친 근육을 풀어주고 통증을 완화합니다.',
    features: ['심층 근육 케어', '통증 부위 집중 관리', '스트레칭 테크닉', '쿨링 젤 마무리'],
  },
  {
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&q=80',
    title: '페이셜 트리트먼트',
    description: '자연 유래 성분으로 빛나는 피부 완성',
    duration: '75분',
    price: '₩200,000',
    details: '자연 유래 성분의 프리미엄 스킨케어 제품으로 피부 깊숙이 영양을 공급합니다. 클렌징부터 팩, 마무리 케어까지 풀 코스 페이셜입니다.',
    features: ['유기농 스킨케어', '림프 드레나지', '콜라겐 마스크', 'LED 광선 테라피'],
  },
  {
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80',
    title: '커플 프라이빗 스파',
    description: '소중한 사람과 함께하는 특별한 휴식',
    duration: '150분',
    price: '₩450,000',
    details: '프라이빗 스위트룸에서 소중한 사람과 함께 즐기는 럭셔리 스파 경험입니다. 샴페인과 함께 로맨틱한 분위기에서 힐링 시간을 보내세요.',
    features: ['프라이빗 스위트룸', '커플 아로마 마사지', '샴페인 & 과일 서비스', '족욕 & 스크럽'],
  },
]

interface Program {
  image: string
  title: string
  description: string
  duration: string
  price: string
  details: string
  features: string[]
}

export default function ProductGallery() {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null)

  return (
    <>
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
                <div
                  key={program.title}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProgram(program)}
                >
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
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-full">
                        자세히 보기
                      </span>
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

      {/* Modal */}
      <Modal isOpen={!!selectedProgram} onClose={() => setSelectedProgram(null)}>
        {selectedProgram && (
          <div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-surface rounded-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProgram(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-foreground/50 hover:bg-foreground/70 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            <div className="relative aspect-video">
              <Image
                src={selectedProgram.image}
                alt={selectedProgram.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
            </div>

            <div className="p-6 md:p-8 -mt-20 relative">
              <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full mb-4">
                시그니처 프로그램
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-foreground">{selectedProgram.title}</h2>
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

'use client'

import { useState } from 'react'
import Image from 'next/image'
import Carousel from '@/components/ui/Carousel'
import Modal from '@/components/ui/Modal'
import FadeInSection from '@/components/animations/FadeInSection'
import TextReveal from '@/components/animations/TextReveal'
import { CheckCircle, Users, Clock, Star } from 'lucide-react'

const dishes = [
  {
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80',
    title: '런치 코스',
    count: '5 코스',
    details: {
      fullDescription: '바쁜 일상 속에서도 품격 있는 미식을 경험할 수 있도록 구성된 점심 코스입니다. 에피타이저부터 디저트까지 5가지 코스로 완벽한 런치를 선사합니다.',
      duration: '약 1시간 30분',
      guests: '1인 이상',
      price: '₩89,000~',
      features: ['아뮤즈 부쉬', '에피타이저', '메인 디쉬 선택', '프리 디저트', '시그니처 디저트'],
      availability: '화~토 12:00-14:00',
      recommendation: '비즈니스 미팅 및 소규모 모임에 추천',
    },
  },
  {
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=600&q=80',
    title: '디너 코스',
    count: '8 코스',
    details: {
      fullDescription: '하루의 마무리를 특별하게 장식하는 풀코스 디너입니다. 셰프의 철학과 계절의 정수가 담긴 8가지 코스로 잊지 못할 미식 경험을 선사합니다.',
      duration: '약 2시간 30분',
      guests: '2인 이상',
      price: '₩250,000~',
      features: ['아뮤즈 부쉬', '에피타이저 2종', '수프 또는 리조또', '생선 요리', '육류 요리', '프리 디저트', '메인 디저트', '쁘띠 푸르'],
      availability: '화~토 18:00-21:00',
      recommendation: '기념일, 프로포즈, 특별한 날에 추천',
    },
  },
  {
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80',
    title: '와인 셀렉션',
    count: '150+ 종',
    details: {
      fullDescription: '전 세계 유명 와이너리에서 엄선한 150종 이상의 프리미엄 와인 컬렉션입니다. 소믈리에가 각 코스에 맞는 완벽한 페어링을 제안해 드립니다.',
      duration: '코스별 맞춤',
      guests: '1인 이상',
      price: '글라스 ₩15,000~ / 보틀 ₩90,000~',
      features: ['프랑스 보르도 & 부르고뉴', '이탈리아 피에몬테 & 토스카나', '스페인 리오하', '미국 나파밸리', '샴페인 & 스파클링'],
      availability: '상시 제공',
      recommendation: '코스 요리와 함께 와인 페어링 추천',
    },
  },
  {
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&q=80',
    title: '디저트 컬렉션',
    count: '시즌별 변경',
    details: {
      fullDescription: '수석 파티시에가 매 시즌 새롭게 선보이는 디저트 컬렉션입니다. 프랑스 정통 기법과 한국적 감성이 어우러진 달콤한 예술 작품을 만나보세요.',
      duration: '약 30분',
      guests: '1인 이상',
      price: '₩35,000~',
      features: ['시그니처 플레이팅', '수제 초콜릿 트러플', '계절 과일 타르트', '아티잔 아이스크림', '프렌치 마카롱'],
      availability: '상시 제공',
      recommendation: '식사 후 달콤한 마무리 또는 티타임에 추천',
    },
  },
  {
    image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600&q=80',
    title: '애피타이저',
    count: '셰프 추천',
    details: {
      fullDescription: '본격적인 식사 전 입맛을 돋우는 정교한 에피타이저 셀렉션입니다. 셰프가 엄선한 계절 재료로 만든 작은 한 입에 큰 감동을 담았습니다.',
      duration: '약 20분',
      guests: '1인 이상',
      price: '₩28,000~',
      features: ['캐비어 카나페', '훈제 연어 타르타르', '푸아그라 무스', '계절 채소 크루디테', '아뮤즈 부쉬 셀렉션'],
      availability: '상시 제공',
      recommendation: '코스 추가 또는 단품 주문 가능',
    },
  },
  {
    image: 'https://images.unsplash.com/photo-1482049016gy4-07a3b93d5f63?w=600&q=80',
    title: '메인 디쉬',
    count: '시그니처',
    details: {
      fullDescription: '최상급 식재료와 셰프의 완벽한 기술이 만나는 시그니처 메인 디쉬입니다. 한우, 랍스터, 트러플 등 프리미엄 재료로 잊지 못할 맛을 선사합니다.',
      duration: '약 40분',
      guests: '1인 이상',
      price: '₩85,000~',
      features: ['한우 안심 스테이크', '랍스터 테르미도르', '양갈비 로스트', '오리 콩피', '농어 뫼니에르'],
      availability: '상시 제공',
      recommendation: '와인 페어링과 함께 즐기시길 권장',
    },
  },
]

type Dish = typeof dishes[number]

export default function CategoryGallery() {
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null)

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <TextReveal
            text="다이닝 경험"
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          />
          <FadeInSection delay={0.3}>
            <p className="text-lg text-text-secondary">
              당신만을 위한 특별한 미식 여정을 준비합니다
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
            {dishes.map((dish) => (
              <div
                key={dish.title}
                className="group cursor-pointer"
                onClick={() => setSelectedDish(dish)}
              >
                <div className="relative aspect-square overflow-hidden rounded-xl mb-3">
                  <Image
                    src={dish.image}
                    alt={dish.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="px-4 py-2 bg-white/95 text-text-primary text-sm font-semibold rounded-full shadow-lg">
                      자세히 보기
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {dish.title}
                    </h3>
                    <p className="text-sm text-gray-200">{dish.count}</p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </FadeInSection>
      </div>

      <Modal isOpen={!!selectedDish} onClose={() => setSelectedDish(null)}>
        {selectedDish && (
          <div className="grid md:grid-cols-2">
            <div className="relative aspect-square md:aspect-auto md:min-h-[500px]">
              <Image
                src={selectedDish.image}
                alt={selectedDish.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden" />
              <div className="absolute bottom-4 left-4 md:hidden">
                <span className="px-3 py-1 bg-primary text-white text-sm font-medium rounded-full">
                  {selectedDish.count}
                </span>
              </div>
            </div>
            <div className="p-8 md:p-10">
              <span className="hidden md:inline-block px-3 py-1 bg-primary text-white text-sm font-medium rounded-full mb-4">
                {selectedDish.count}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {selectedDish.title}
              </h3>
              <p className="text-text-secondary mb-6 leading-relaxed">
                {selectedDish.details.fullDescription}
              </p>

              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="text-center p-3 bg-surface rounded-lg">
                  <Clock className="w-5 h-5 text-primary mx-auto mb-1" />
                  <p className="text-xs text-text-muted">소요 시간</p>
                  <p className="font-semibold text-xs mt-1">{selectedDish.details.duration}</p>
                </div>
                <div className="text-center p-3 bg-surface rounded-lg">
                  <Users className="w-5 h-5 text-primary mx-auto mb-1" />
                  <p className="text-xs text-text-muted">인원</p>
                  <p className="font-semibold text-xs mt-1">{selectedDish.details.guests}</p>
                </div>
                <div className="text-center p-3 bg-surface rounded-lg">
                  <Star className="w-5 h-5 text-primary mx-auto mb-1" />
                  <p className="text-xs text-text-muted">가격</p>
                  <p className="font-semibold text-xs mt-1">{selectedDish.details.price}</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-3">구성 메뉴</h4>
                <div className="space-y-2">
                  {selectedDish.details.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-text-secondary">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-border pt-4 space-y-2">
                <p className="text-sm">
                  <span className="text-text-muted">운영 시간:</span>{' '}
                  <span className="text-text-secondary">{selectedDish.details.availability}</span>
                </p>
                <p className="text-sm">
                  <span className="text-text-muted">추천:</span>{' '}
                  <span className="text-text-secondary">{selectedDish.details.recommendation}</span>
                </p>
              </div>

              <div className="mt-6 flex gap-3">
                <a
                  href="#contact"
                  onClick={() => setSelectedDish(null)}
                  className="flex-1 py-3 bg-primary hover:bg-primary-hover text-white text-center font-semibold rounded-lg transition-colors"
                >
                  예약하기
                </a>
                <button
                  onClick={() => setSelectedDish(null)}
                  className="px-6 py-3 border border-border hover:border-primary text-text-primary font-semibold rounded-lg transition-colors"
                >
                  닫기
                </button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}

'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'
import Carousel from '@/components/ui/Carousel'
import FadeInSection from '@/components/animations/FadeInSection'
import TextReveal from '@/components/animations/TextReveal'
import Modal from '@/components/ui/Modal'

const facilities = [
  {
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80',
    title: '인피니티 풀',
    count: '루프탑',
    description: '도시의 스카이라인을 바라보며 즐기는 인피니티 풀입니다. 수온은 연중 28도로 유지됩니다.',
    details: '운영시간: 오전 6시 ~ 오후 10시. 투숙객 전용이며, 타올과 선베드가 무료로 제공됩니다.',
    features: ['온수 풀 (28°C)', '파노라마 뷰', '풀사이드 바', '카바나 대여', '타올 서비스'],
    price: '무료 (투숙객)',
  },
  {
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80',
    title: '스파 & 웰니스',
    count: '지하 1층',
    description: '전문 테라피스트가 제공하는 프리미엄 스파 서비스입니다. 아로마 테라피, 딥티슈 마사지 등 다양한 프로그램을 경험하세요.',
    details: '운영시간: 오전 10시 ~ 오후 10시. 사전 예약 필수이며, 투숙객 20% 할인이 적용됩니다.',
    features: ['아로마 테라피', '핫스톤 마사지', '페이셜 트리트먼트', '커플 룸', '사우나'],
    price: '₩150,000~',
  },
  {
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&q=80',
    title: '피트니스 센터',
    count: '24시간',
    description: '최신 운동 기구를 갖춘 피트니스 센터입니다. 개인 트레이너 서비스도 이용 가능합니다.',
    details: '24시간 운영되며, 투숙객은 무료로 이용 가능합니다. PT 서비스는 별도 예약이 필요합니다.',
    features: ['최신 유산소 기구', '프리웨이트 존', '요가 스튜디오', '개인 트레이너', '타올 & 물 제공'],
    price: '무료 (투숙객)',
  },
  {
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80',
    title: '파인 다이닝',
    count: '3F',
    description: '미쉐린 스타 셰프가 선보이는 프렌치-아시안 퓨전 요리를 즐기세요.',
    details: '운영시간: 런치 12:00~14:30, 디너 18:00~22:00. 드레스 코드: 스마트 캐주얼.',
    features: ['미쉐린 셰프', '코스 요리', '와인 페어링', '프라이빗 룸', '시티뷰'],
    price: '₩150,000~',
  },
  {
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80',
    title: '비즈니스 센터',
    count: '2F',
    description: '회의실과 업무 공간을 갖춘 비즈니스 센터입니다. 최신 AV 장비와 고속 인터넷이 제공됩니다.',
    details: '운영시간: 24시간. 회의실은 사전 예약이 필요하며, 케이터링 서비스도 가능합니다.',
    features: ['회의실 3개', '프린터 & 복사기', '화상회의 시스템', '고속 WiFi', '비서 서비스'],
    price: '시간당 ₩50,000~',
  },
  {
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80',
    title: '컨시어지 서비스',
    count: '로비',
    description: '24시간 컨시어지 서비스로 여행의 모든 것을 도와드립니다.',
    details: '공항 픽업, 레스토랑 예약, 관광 투어, 티켓 예매 등 다양한 서비스를 제공합니다.',
    features: ['공항 리무진', '투어 예약', '레스토랑 예약', '티켓팅', 'VIP 서비스'],
    price: '서비스별 상이',
  },
]

type Facility = typeof facilities[number]

export default function CategoryGallery() {
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null)

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <TextReveal
            text="호텔 시설"
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          />
          <FadeInSection delay={0.3}>
            <p className="text-lg text-text-secondary">
              완벽한 휴식을 위한 프리미엄 시설
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
                <div className="relative aspect-square overflow-hidden rounded-xl mb-3">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg">
                      자세히 보기
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {facility.title}
                    </h3>
                    <p className="text-sm text-gray-200">{facility.count}</p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </FadeInSection>
      </div>

      <Modal isOpen={!!selectedFacility} onClose={() => setSelectedFacility(null)}>
        {selectedFacility && (
          <div
            className="bg-surface rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={selectedFacility.image}
                  alt={selectedFacility.title}
                  fill
                  className="object-cover rounded-t-2xl"
                />
              </div>
              <button
                onClick={() => setSelectedFacility(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                  {selectedFacility.count}
                </span>
                <h2 className="text-3xl font-bold text-white mt-1">{selectedFacility.title}</h2>
              </div>
            </div>

            <div className="p-8">
              <p className="text-text-secondary mb-6 leading-relaxed">
                {selectedFacility.description}
              </p>

              <div className="bg-surface-light rounded-xl p-6 mb-6">
                <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                  운영 안내
                </h4>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {selectedFacility.details}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                  주요 시설
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedFacility.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-border">
                <span className="text-2xl font-bold text-primary">{selectedFacility.price}</span>
                <a
                  href="#contact"
                  onClick={() => setSelectedFacility(null)}
                  className="inline-block px-8 py-4 bg-primary hover:bg-primary-hover text-white font-semibold tracking-wide transition-all duration-300 rounded-lg"
                >
                  예약하기
                </a>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}

'use client'

import { useState } from 'react'
import Image from 'next/image'
import Carousel from '@/components/ui/Carousel'
import Modal from '@/components/ui/Modal'
import FadeInSection from '@/components/animations/FadeInSection'
import TextReveal from '@/components/animations/TextReveal'
import { CheckCircle, Clock, Utensils, Flame } from 'lucide-react'

const menuItems = [
  {
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80',
    title: '한우 안심 스테이크',
    description: '최상급 한우 안심과 트러플 소스의 조화',
    details: {
      fullDescription: '1++ 등급 한우 안심을 저온 숙성 후 완벽한 온도로 조리합니다. 블랙 트러플 소스와 계절 채소 가니쉬가 어우러져 깊은 풍미를 선사합니다.',
      cookingTime: '25분',
      portion: '200g',
      chef: '김민수 총괄 셰프',
      features: ['1++ 등급 한우', '21일 드라이에이징', '블랙 트러플 소스', '계절 채소 가니쉬'],
      allergens: '유제품',
      pairing: '풀바디 레드 와인 추천',
    },
  },
  {
    image: 'https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?w=800&q=80',
    title: '랍스터 비스크',
    description: '신선한 랍스터로 우려낸 깊은 풍미',
    details: {
      fullDescription: '메인 주 직송 랍스터를 사용하여 8시간 이상 정성껏 우려낸 비스크입니다. 크림의 부드러움과 바다의 깊은 풍미가 조화를 이룹니다.',
      cookingTime: '8시간+',
      portion: '300ml',
      chef: '박준형 수 셰프',
      features: ['메인 주 직송 랍스터', '8시간 저온 조리', '프렌치 크림', '신선한 허브'],
      allergens: '갑각류, 유제품',
      pairing: '샤르도네 화이트 와인',
    },
  },
  {
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
    title: '시즌 코스 메뉴',
    description: '셰프의 철학이 담긴 8가지 코스',
    details: {
      fullDescription: '계절마다 변화하는 최상의 식재료로 구성된 8가지 코스입니다. 각 코스는 셰프의 창의성과 전통의 조화를 담아 특별한 미식 경험을 선사합니다.',
      cookingTime: '2시간 30분',
      portion: '8코스',
      chef: '김민수 총괄 셰프',
      features: ['계절 식재료', '8가지 코스', '와인 페어링 옵션', '셰프 테이블 가능'],
      allergens: '별도 문의',
      pairing: '소믈리에 추천 와인 페어링',
    },
  },
  {
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80',
    title: '와규 타르타르',
    description: '캐비어와 함께 즐기는 프리미엄 타르타르',
    details: {
      fullDescription: 'A5 등급 일본산 와규를 수작업으로 다져 만든 타르타르입니다. 오세트라 캐비어와 완벽한 조화를 이루며 입안에서 녹는 식감을 선사합니다.',
      cookingTime: '즉시 제공',
      portion: '120g',
      chef: '이정훈 수 셰프',
      features: ['A5 와규', '오세트라 캐비어', '수제 에그 소스', '트러플 오일'],
      allergens: '달걀, 생선알',
      pairing: '샴페인 또는 드라이 화이트',
    },
  },
  {
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=80',
    title: '시그니처 디저트',
    description: '파티시에의 예술적 창작 디저트',
    details: {
      fullDescription: '수석 파티시에가 계절마다 새롭게 선보이는 시그니처 디저트입니다. 프랑스 정통 기법과 현대적 감각이 어우러진 달콤한 마무리를 경험하세요.',
      cookingTime: '당일 제작',
      portion: '1인분',
      chef: '최예린 수석 파티시에',
      features: ['수제 초콜릿', '계절 과일', '아티잔 아이스크림', '에디블 플라워'],
      allergens: '유제품, 견과류, 밀',
      pairing: '디저트 와인 또는 에스프레소',
    },
  },
]

type MenuItem = typeof menuItems[number]

export default function ProductGallery() {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)

  return (
    <section id="products" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <TextReveal
            text="시그니처 메뉴"
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          />
          <FadeInSection delay={0.3}>
            <p className="text-lg text-text-secondary">
              셰프의 철학과 최상의 재료가 만나는 순간
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
            {menuItems.map((item) => (
              <div
                key={item.title}
                className="group cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="px-6 py-3 bg-white/95 text-text-primary font-semibold rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      자세히 보기
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-text-secondary text-sm">{item.description}</p>
              </div>
            ))}
          </Carousel>
        </FadeInSection>
      </div>

      <Modal isOpen={!!selectedItem} onClose={() => setSelectedItem(null)}>
        {selectedItem && (
          <div className="grid md:grid-cols-2">
            <div className="relative aspect-square md:aspect-auto">
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8 md:p-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                {selectedItem.title}
              </h3>
              <p className="text-primary font-medium mb-4">
                {selectedItem.description}
              </p>
              <p className="text-text-secondary mb-6 leading-relaxed">
                {selectedItem.details.fullDescription}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3 p-3 bg-surface rounded-lg">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-xs text-text-muted">조리 시간</p>
                    <p className="font-semibold text-sm">{selectedItem.details.cookingTime}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-surface rounded-lg">
                  <Utensils className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-xs text-text-muted">분량</p>
                    <p className="font-semibold text-sm">{selectedItem.details.portion}</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Flame className="w-4 h-4 text-primary" />
                  주요 특징
                </h4>
                <div className="space-y-2">
                  {selectedItem.details.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-text-secondary">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-border pt-4 space-y-2">
                <p className="text-sm">
                  <span className="text-text-muted">담당 셰프:</span>{' '}
                  <span className="font-medium">{selectedItem.details.chef}</span>
                </p>
                <p className="text-sm">
                  <span className="text-text-muted">알러지 정보:</span>{' '}
                  <span className="text-text-secondary">{selectedItem.details.allergens}</span>
                </p>
                <p className="text-sm">
                  <span className="text-text-muted">추천 페어링:</span>{' '}
                  <span className="text-text-secondary">{selectedItem.details.pairing}</span>
                </p>
              </div>

              <button
                onClick={() => setSelectedItem(null)}
                className="mt-6 w-full py-3 bg-primary hover:bg-primary-hover text-white font-semibold rounded-lg transition-colors"
              >
                닫기
              </button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}

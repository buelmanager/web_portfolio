'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'
import Carousel from '@/components/ui/Carousel'
import FadeInSection from '@/components/animations/FadeInSection'
import TextReveal from '@/components/animations/TextReveal'
import Modal from '@/components/ui/Modal'

const roomItems = [
  {
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
    title: '프리미엄 스위트',
    description: '파노라마 오션뷰와 함께하는 특별한 휴식',
    details: '85㎡의 넓은 공간에서 탁 트인 바다 전망을 감상하세요. 킹사이즈 침대, 대리석 욕실, 전용 발코니가 포함됩니다. 24시간 버틀러 서비스와 무료 미니바가 제공됩니다.',
    roomType: '스위트룸',
    amenities: ['킹사이즈 침대', '오션뷰 발코니', '대리석 욕실', '레인샤워', '무료 미니바', '버틀러 서비스'],
    capacity: ['성인 2인', '최대 3인'],
    price: '₩850,000/박',
  },
  {
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
    title: '오션 디럭스',
    description: '바다가 선사하는 평온한 아침',
    details: '55㎡의 세련된 객실에서 아름다운 바다 전망을 즐기세요. 퀸사이즈 침대와 독립형 욕조, 넓은 발코니가 완벽한 휴식을 보장합니다.',
    roomType: '디럭스룸',
    amenities: ['퀸사이즈 침대', '독립형 욕조', '발코니', '에스프레소 머신', '턴다운 서비스'],
    capacity: ['성인 2인'],
    price: '₩550,000/박',
  },
  {
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80',
    title: '가든 빌라',
    description: '프라이빗 정원이 있는 독채 빌라',
    details: '120㎡의 독립된 빌라에서 완벽한 프라이버시를 경험하세요. 전용 정원과 자쿠지, 야외 테라스가 포함됩니다. 조식 룸서비스가 기본 제공됩니다.',
    roomType: '빌라',
    amenities: ['프라이빗 정원', '야외 자쿠지', '테라스', '전용 주차', '조식 포함', '개별 체크인'],
    capacity: ['성인 2인', '최대 4인'],
    price: '₩1,200,000/박',
  },
  {
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80',
    title: '패밀리 스위트',
    description: '온 가족이 함께하는 넉넉한 공간',
    details: '100㎡의 투룸 구조로 가족 여행에 최적화된 객실입니다. 마스터 베드룸과 키즈룸이 분리되어 있으며, 키즈 어메니티가 제공됩니다.',
    roomType: '패밀리룸',
    amenities: ['킹침대 + 트윈침대', '키즈 어메니티', '거실 공간', '욕조 & 샤워부스', '어린이 슬리퍼/가운'],
    capacity: ['성인 2인 + 아동 2인'],
    price: '₩750,000/박',
  },
  {
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80',
    title: '로얄 펜트하우스',
    description: '최고층에서 만나는 궁극의 럭셔리',
    details: '200㎡의 펜트하우스에서 360도 파노라마 뷰를 감상하세요. 프라이빗 루프탑 풀, 전용 엘리베이터, VIP 컨시어지 서비스가 포함됩니다.',
    roomType: '펜트하우스',
    amenities: ['프라이빗 풀', '루프탑 테라스', '전용 엘리베이터', 'VIP 컨시어지', '샴페인 웰컴', '리무진 서비스'],
    capacity: ['성인 4인', '최대 6인'],
    price: '₩3,500,000/박',
  },
]

type RoomItem = typeof roomItems[number]

export default function ProductGallery() {
  const [selectedItem, setSelectedItem] = useState<RoomItem | null>(null)

  return (
    <section id="products" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <TextReveal
            text="객실 안내"
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          />
          <FadeInSection delay={0.3}>
            <p className="text-lg text-text-secondary">
              완벽한 휴식을 위한 프리미엄 객실
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
            {roomItems.map((item) => (
              <div key={item.title} className="group cursor-pointer">
                <div
                  className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4"
                  onClick={() => setSelectedItem(item)}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="px-6 py-3 bg-primary text-white font-semibold rounded-lg">
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
          <div
            className="bg-surface rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  className="object-cover rounded-t-2xl"
                />
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            <div className="p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-3xl font-bold mb-2">{selectedItem.title}</h2>
                  <p className="text-text-secondary">{selectedItem.description}</p>
                </div>
                <span className="text-2xl font-bold text-primary">{selectedItem.price}</span>
              </div>

              <p className="text-text-secondary mb-6 leading-relaxed">
                {selectedItem.details}
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                    객실 타입
                  </h4>
                  <p className="text-text-primary">{selectedItem.roomType}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                    수용 인원
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.capacity.map((cap) => (
                      <span
                        key={cap}
                        className="px-3 py-1 bg-surface-light text-text-secondary text-sm rounded-full"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-2">
                  <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                    객실 시설
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.amenities.map((amenity) => (
                      <span
                        key={amenity}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <a
                  href="#contact"
                  onClick={() => setSelectedItem(null)}
                  className="inline-block px-8 py-4 bg-primary hover:bg-primary-hover text-white font-semibold tracking-wide transition-all duration-300 rounded-lg"
                >
                  예약 문의하기
                </a>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}

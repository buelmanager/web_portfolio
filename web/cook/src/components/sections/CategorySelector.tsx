'use client'

import { useState } from 'react'
import Image from 'next/image'
import Modal from '@/components/ui/Modal'
import FadeInSection from '@/components/animations/FadeInSection'
import TextReveal from '@/components/animations/TextReveal'
import { CheckCircle, Clock, Users, Wine, AlertCircle, ChefHat } from 'lucide-react'

const menuCategories = {
  '런치': [
    {
      name: '런치 A 코스',
      type: '5 코스',
      description: '셰프의 정수가 담긴 점심 코스. 에피타이저부터 디저트까지 완벽한 구성.',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80',
      price: '₩89,000',
      details: {
        fullDescription: '바쁜 일상 속에서도 품격 있는 미식을 경험하실 수 있습니다. 계절 식재료를 활용한 5가지 코스로 구성되어 있으며, 런치 시간에 맞춰 적절한 분량으로 제공됩니다.',
        duration: '약 1시간 30분',
        guests: '1인 이상',
        courses: ['아뮤즈 부쉬', '에피타이저', '메인 (육류 또는 해산물 선택)', '프리 디저트', '시그니처 디저트'],
        allergens: '별도 문의 시 맞춤 조리 가능',
        pairing: '글라스 와인 페어링 +₩35,000',
        reservation: '당일 예약 가능 (재고 상황에 따라 변동)',
      },
    },
    {
      name: '런치 B 코스',
      type: '7 코스',
      description: '보다 풍성한 점심을 위한 프리미엄 코스.',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80',
      price: '₩129,000',
      details: {
        fullDescription: '특별한 점심 미팅이나 기념일에 적합한 프리미엄 런치 코스입니다. A 코스에 생선 요리와 추가 에피타이저가 더해져 보다 풍성한 경험을 선사합니다.',
        duration: '약 2시간',
        guests: '2인 이상',
        courses: ['아뮤즈 부쉬', '콜드 에피타이저', '웜 에피타이저', '생선 요리', '메인 (프리미엄 육류)', '프리 디저트', '시그니처 디저트'],
        allergens: '별도 문의 시 맞춤 조리 가능',
        pairing: '글라스 와인 페어링 +₩55,000',
        reservation: '전일 예약 필수',
      },
    },
    {
      name: '비즈니스 런치',
      type: '4 코스',
      description: '비즈니스 미팅에 최적화된 간결한 코스.',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80',
      price: '₩69,000',
      details: {
        fullDescription: '중요한 비즈니스 미팅에 최적화된 간결하면서도 품격 있는 4코스입니다. 대화에 집중하실 수 있도록 적절한 간격으로 서빙됩니다.',
        duration: '약 1시간',
        guests: '2인 이상',
        courses: ['에피타이저', '수프 또는 샐러드', '메인 디쉬', '디저트 & 커피'],
        allergens: '별도 문의 시 맞춤 조리 가능',
        pairing: '글라스 와인 1잔 포함',
        reservation: '당일 예약 가능',
      },
    },
  ],
  '디너': [
    {
      name: '시그니처 코스',
      type: '8 코스',
      description: '셰프의 철학이 담긴 풀코스 디너. 최상의 재료로 완성하는 미식의 정점.',
      image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80',
      price: '₩250,000',
      details: {
        fullDescription: '총괄 셰프 김민수의 요리 철학이 담긴 시그니처 디너 코스입니다. 최상급 식재료와 정교한 기술로 완성되는 8가지 코스가 잊지 못할 미식 경험을 선사합니다.',
        duration: '약 2시간 30분',
        guests: '2인 이상',
        courses: ['아뮤즈 부쉬', '콜드 에피타이저', '웜 에피타이저', '수프 또는 리조또', '생선 요리', '메인 (한우 또는 와규)', '프리 디저트', '시그니처 디저트 & 쁘띠 푸르'],
        allergens: '사전 문의 필수',
        pairing: '소믈리에 추천 와인 페어링 +₩120,000',
        reservation: '3일 전 예약 필수',
      },
    },
    {
      name: '셰프 테이블',
      type: '10 코스',
      description: '오픈 키친에서 셰프와 함께하는 특별한 다이닝 경험.',
      image: 'https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?w=600&q=80',
      price: '₩350,000',
      details: {
        fullDescription: '오픈 키친 바로 앞 특별석에서 셰프의 조리 과정을 직접 관람하며 즐기는 프리미엄 다이닝 경험입니다. 매 코스마다 셰프가 직접 요리에 대한 설명을 해드립니다.',
        duration: '약 3시간',
        guests: '2~6인',
        courses: ['웰컴 샴페인', '아뮤즈 부쉬 2종', '콜드 에피타이저', '웜 에피타이저', '해산물 요리', '팔렛 클렌저', '메인 1 (생선)', '메인 2 (육류)', '프리 디저트', '시그니처 디저트 플레이트'],
        allergens: '사전 상담 후 맞춤 구성',
        pairing: '프리미엄 와인 페어링 포함',
        reservation: '1주일 전 예약 필수 (좌석 한정)',
      },
    },
    {
      name: '테이스팅 코스',
      type: '6 코스',
      description: '다양한 요리를 소량으로 즐기는 미식 여정.',
      image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&q=80',
      price: '₩180,000',
      details: {
        fullDescription: '셰프의 다양한 요리 스타일을 한 번에 경험할 수 있는 테이스팅 코스입니다. 각 요리는 소량으로 제공되어 여러 가지 맛을 부담 없이 즐기실 수 있습니다.',
        duration: '약 2시간',
        guests: '1인 이상',
        courses: ['아뮤즈 부쉬', '테이스팅 에피타이저 3종', '미니 파스타 또는 리조또', '메인 듀오 (생선 & 육류)', '프리 디저트', '디저트 트리오'],
        allergens: '별도 문의 시 맞춤 조리 가능',
        pairing: '테이스팅 와인 페어링 +₩80,000',
        reservation: '전일 예약 필수',
      },
    },
  ],
  '와인': [
    {
      name: '와인 페어링',
      type: '5 글라스',
      description: '코스에 맞춰 소믈리에가 엄선한 와인 페어링.',
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80',
      price: '₩90,000~',
      details: {
        fullDescription: '전문 소믈리에가 각 코스의 풍미와 완벽하게 어울리도록 엄선한 5잔의 와인으로 구성됩니다. 와인에 대한 상세한 설명과 함께 서빙됩니다.',
        duration: '코스와 함께',
        guests: '1인 이상',
        courses: ['웰컴 스파클링', '화이트 와인 (에피타이저)', '로제 또는 라이트 레드 (생선)', '풀바디 레드 (육류)', '디저트 와인'],
        allergens: '-',
        pairing: '프리미엄 업그레이드 가능',
        reservation: '코스 예약 시 함께 신청',
      },
    },
    {
      name: '샴페인 셀렉션',
      type: '프리미엄',
      description: '특별한 날을 위한 샴페인 큐레이션.',
      image: 'https://images.unsplash.com/photo-1594372365401-3b5ff14eaaed?w=600&q=80',
      price: '₩150,000~',
      details: {
        fullDescription: '프로포즈, 기념일, 축하 자리를 더욱 특별하게 만들어 줄 프리미엄 샴페인 셀렉션입니다. 돔 페리뇽, 크루그, 볼랭저 등 명품 샴페인을 제공합니다.',
        duration: '-',
        guests: '2인 이상',
        courses: ['돔 페리뇽', '크루그 그랑 퀴베', '볼랭저 스페셜 퀴베', '루이 로드레 크리스탈', '살롱 블랑 드 블랑'],
        allergens: '-',
        pairing: '특별 기념일 패키지 구성 가능',
        reservation: '전일 예약 시 특별 준비 가능',
      },
    },
    {
      name: '와인 리스트',
      type: '150+ 종',
      description: '전 세계 엄선된 와인 컬렉션.',
      image: 'https://images.unsplash.com/photo-1474722883778-792e7990302f?w=600&q=80',
      price: '문의',
      details: {
        fullDescription: '프랑스, 이탈리아, 스페인, 미국 등 전 세계 주요 와인 산지에서 엄선한 150종 이상의 와인을 보유하고 있습니다. 소믈리에에게 추천을 요청해 주세요.',
        duration: '-',
        guests: '-',
        courses: ['보르도 그랑 크뤼', '부르고뉴 프리미에 크뤼', '이탈리아 수퍼 투스칸', '나파밸리 컬트 와인', '희귀 빈티지 컬렉션'],
        allergens: '-',
        pairing: '소믈리에 상담 제공',
        reservation: '희귀 와인은 사전 확인 필요',
      },
    },
  ],
  '디저트': [
    {
      name: '시그니처 디저트',
      type: '파티시에 추천',
      description: '파티시에의 예술적 감각이 담긴 시그니처 디저트 플레이트.',
      image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&q=80',
      price: '₩35,000',
      details: {
        fullDescription: '수석 파티시에 최예린이 계절마다 새롭게 선보이는 시그니처 디저트입니다. 프랑스 정통 기법과 한국적 감성이 어우러진 예술 작품 같은 디저트를 만나보세요.',
        duration: '약 20분',
        guests: '1인 이상',
        courses: ['메인 디저트', '아이스크림 또는 소르베', '가니쉬 & 소스', '쁘띠 푸르'],
        allergens: '유제품, 견과류, 밀 (사전 문의 필수)',
        pairing: '디저트 와인 또는 에스프레소 추천',
        reservation: '당일 주문 가능',
      },
    },
    {
      name: '디저트 코스',
      type: '3 코스',
      description: '달콤한 마무리를 위한 미니 디저트 코스.',
      image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?w=600&q=80',
      price: '₩55,000',
      details: {
        fullDescription: '식사의 달콤한 마무리를 위한 3가지 디저트 코스입니다. 가벼운 것부터 진한 것까지 순서대로 구성되어 완벽한 피날레를 선사합니다.',
        duration: '약 30분',
        guests: '1인 이상',
        courses: ['팔렛 클렌저 (소르베)', '메인 디저트 플레이트', '초콜릿 트러플 & 프렌치 마카롱'],
        allergens: '유제품, 견과류, 밀, 달걀',
        pairing: '디저트 와인 3종 페어링 +₩25,000',
        reservation: '당일 주문 가능',
      },
    },
    {
      name: '기념일 케이크',
      type: '예약 필수',
      description: '특별한 날을 위한 맞춤 케이크. 3일 전 예약.',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80',
      price: '₩80,000~',
      details: {
        fullDescription: '생일, 기념일, 프로포즈 등 특별한 날을 위한 맞춤 케이크입니다. 디자인, 메시지, 크기 등을 원하시는 대로 제작해 드립니다.',
        duration: '제작 3일 소요',
        guests: '4~6인분 기준',
        courses: ['바닐라 시폰', '초콜릿 무스', '딸기 프레지에', '티라미수', '맞춤 디자인'],
        allergens: '주문 시 확인',
        pairing: '샴페인 패키지 +₩80,000',
        reservation: '3일 전 예약 필수 (성수기 1주일 전)',
      },
    },
  ],
}

type CategoryKey = keyof typeof menuCategories
type MenuItem = typeof menuCategories['런치'][number]

export default function CategorySelector() {
  const [activeTab, setActiveTab] = useState<CategoryKey>('런치')
  const [activeIndex, setActiveIndex] = useState(0)
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)

  const currentMenus = menuCategories[activeTab]
  const activeMenu = currentMenus[activeIndex]

  const handleImageClick = () => {
    setSelectedItem(activeMenu)
  }

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <TextReveal
            text="메뉴 구성"
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          />
        </div>

        <FadeInSection>
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {(Object.keys(menuCategories) as CategoryKey[]).map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab)
                  setActiveIndex(0)
                }}
                className={`px-6 py-3 font-semibold text-sm uppercase tracking-wider transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-primary text-white'
                    : 'bg-surface-light text-text-secondary hover:text-primary hover:bg-surface border border-border'
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
              className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group"
              onClick={handleImageClick}
            >
              <Image
                src={activeMenu.image}
                alt={activeMenu.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="px-6 py-3 bg-white/95 text-text-primary font-semibold rounded-full shadow-lg">
                  자세히 보기
                </span>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection direction="right">
            <div className="space-y-6">
              <div>
                <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                  {activeMenu.type}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                  {activeMenu.name}
                </h3>
                <p className="text-text-secondary text-lg mb-6">
                  {activeMenu.description}
                </p>
                <p className="text-2xl font-bold text-primary mb-8">
                  {activeMenu.price}
                </p>
                <div className="flex gap-4">
                  <a
                    href="#contact"
                    className="inline-block px-8 py-4 bg-primary hover:bg-primary-hover text-white font-semibold tracking-wide transition-all duration-300"
                  >
                    예약하기
                  </a>
                  <button
                    onClick={handleImageClick}
                    className="inline-block px-8 py-4 border border-border hover:border-primary text-text-primary font-semibold tracking-wide transition-all duration-300"
                  >
                    상세 보기
                  </button>
                </div>
              </div>

              <div className="flex gap-4 pt-8 border-t border-border">
                {currentMenus.map((menu, index) => (
                  <button
                    key={menu.name}
                    onClick={() => setActiveIndex(index)}
                    className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      activeIndex === index ? 'border-primary' : 'border-transparent opacity-50 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={menu.image}
                      alt={menu.name}
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

      <Modal isOpen={!!selectedItem} onClose={() => setSelectedItem(null)}>
        {selectedItem && (
          <div className="grid md:grid-cols-2">
            <div className="relative aspect-square md:aspect-auto md:min-h-[550px]">
              <Image
                src={selectedItem.image}
                alt={selectedItem.name}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-primary text-white text-sm font-medium rounded-full">
                  {selectedItem.type}
                </span>
              </div>
            </div>
            <div className="p-8 md:p-10 overflow-y-auto max-h-[550px]">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                {selectedItem.name}
              </h3>
              <p className="text-2xl font-bold text-primary mb-4">
                {selectedItem.price}
              </p>
              <p className="text-text-secondary mb-6 leading-relaxed">
                {selectedItem.details.fullDescription}
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="flex items-center gap-3 p-3 bg-surface rounded-lg">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-xs text-text-muted">소요 시간</p>
                    <p className="font-semibold text-sm">{selectedItem.details.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-surface rounded-lg">
                  <Users className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-xs text-text-muted">인원</p>
                    <p className="font-semibold text-sm">{selectedItem.details.guests}</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <ChefHat className="w-4 h-4 text-primary" />
                  코스 구성
                </h4>
                <div className="space-y-2">
                  {selectedItem.details.courses.map((course, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-text-secondary">{course}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-border pt-4 space-y-2">
                <p className="text-sm flex items-start gap-2">
                  <Wine className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>
                    <span className="text-text-muted">페어링:</span>{' '}
                    <span className="text-text-secondary">{selectedItem.details.pairing}</span>
                  </span>
                </p>
                <p className="text-sm flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>
                    <span className="text-text-muted">알러지:</span>{' '}
                    <span className="text-text-secondary">{selectedItem.details.allergens}</span>
                  </span>
                </p>
                <p className="text-sm flex items-start gap-2">
                  <Clock className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>
                    <span className="text-text-muted">예약:</span>{' '}
                    <span className="text-text-secondary">{selectedItem.details.reservation}</span>
                  </span>
                </p>
              </div>

              <div className="mt-6 flex gap-3">
                <a
                  href="#contact"
                  onClick={() => setSelectedItem(null)}
                  className="flex-1 py-3 bg-primary hover:bg-primary-hover text-white text-center font-semibold rounded-lg transition-colors"
                >
                  예약하기
                </a>
                <button
                  onClick={() => setSelectedItem(null)}
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

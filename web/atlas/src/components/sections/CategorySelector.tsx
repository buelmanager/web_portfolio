'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'
import FadeInSection from '@/components/animations/FadeInSection'
import TextReveal from '@/components/animations/TextReveal'
import Modal from '@/components/ui/Modal'

const packageCategories = {
  '로맨틱': [
    {
      name: '허니문 스위트',
      type: '2박 3일',
      description: '신혼부부를 위한 로맨틱한 허니문 패키지. 스위트룸과 특별한 서비스가 포함됩니다.',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80',
      price: '₩1,890,000',
      details: '프라이빗한 공간에서 특별한 순간을 만들어보세요. 샴페인 웰컴, 조식 룸서비스, 커플 스파가 포함된 올인클루시브 패키지입니다.',
      includes: ['오션뷰 스위트룸 2박', '샴페인 & 딸기 웰컴', '조식 룸서비스', '커플 아로마 마사지 90분', '캔들라이트 디너', '레이트 체크아웃 (14시)'],
      concierge: '전담 컨시어지',
      special: '기념일 케이크 & 꽃 장식',
    },
    {
      name: '프로포즈 패키지',
      type: '1박 2일',
      description: '평생 잊지 못할 프로포즈를 위한 특별 구성.',
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&q=80',
      price: '₩2,500,000',
      details: '루프탑 프라이빗 공간에서 특별한 순간을 연출해드립니다. 전문 플래너가 프로포즈 연출을 도와드립니다.',
      includes: ['펜트하우스 스위트 1박', '루프탑 프라이빗 세팅', '장미 100송이 장식', '샴페인 & 디저트', '전문 포토그래퍼 1시간', '조식 & 레이트 체크아웃'],
      concierge: '프로포즈 플래너',
      special: '다이아몬드 반지 보관 서비스',
    },
    {
      name: '애니버서리 셀레브레이션',
      type: '1박 2일',
      description: '기념일을 더욱 특별하게. 맞춤형 축하 서비스.',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&q=80',
      price: '₩1,200,000',
      details: '결혼기념일, 생일 등 소중한 기념일을 호텔에서 특별하게 보내세요. 맞춤 케이크와 꽃 장식이 포함됩니다.',
      includes: ['디럭스룸 1박', '웰컴 샴페인', '맞춤 기념일 케이크', '플라워 장식', '스파 20% 할인', '레이트 체크아웃'],
      concierge: '컨시어지 서비스',
      special: '기념 촬영 서비스',
    },
  ],
  '가족': [
    {
      name: '패밀리 어드벤처',
      type: '2박 3일',
      description: '아이들과 함께하는 즐거운 가족 여행 패키지.',
      image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600&q=80',
      price: '₩1,580,000',
      details: '패밀리 스위트에서 아이들과 함께 특별한 추억을 만들어보세요. 키즈 프로그램과 어메니티가 포함됩니다.',
      includes: ['패밀리 스위트 2박', '조식 4인', '키즈 웰컴 키트', '수영장 무제한 이용', '키즈 프로그램 (3-12세)', '인근 테마파크 20% 할인'],
      concierge: '패밀리 컨시어지',
      special: '베이비시터 서비스 (유료)',
    },
    {
      name: '3대 여행',
      type: '2박 3일',
      description: '조부모님과 함께하는 효도 여행 패키지.',
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80',
      price: '₩2,200,000',
      details: '커넥팅룸 2실로 편안하게 묵으시면서 3대가 함께하는 특별한 시간을 보내세요.',
      includes: ['커넥팅룸 2실 2박', '조식 6인', '가족 사진 촬영', '한정식 디너 1회', '스파 이용권 (2인)', '공항 리무진'],
      concierge: 'VIP 컨시어지',
      special: '효도 감사 선물 세트',
    },
  ],
  '웰니스': [
    {
      name: '힐링 리트릿',
      type: '3박 4일',
      description: '일상에서 벗어나 완전한 재충전을 위한 웰니스 패키지.',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80',
      price: '₩2,800,000',
      details: '전문 웰니스 프로그램과 함께 몸과 마음의 균형을 찾아보세요. 1:1 맞춤 프로그램이 제공됩니다.',
      includes: ['가든뷰 디럭스 3박', '웰컴 디톡스 주스', '데일리 요가 클래스', '스파 트리트먼트 3회', '헬시 미식 코스', '명상 프로그램'],
      concierge: '웰니스 컨시어지',
      special: '건강 상담 & 맞춤 프로그램',
    },
    {
      name: '스파 에스케이프',
      type: '1박 2일',
      description: '프리미엄 스파를 중심으로 구성된 짧은 휴식 패키지.',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80',
      price: '₩890,000',
      details: '하루만에 완전한 재충전을 경험하세요. 시그니처 스파 프로그램이 포함됩니다.',
      includes: ['디럭스룸 1박', '시그니처 마사지 120분', '하이드로 테라피', '스파 전용 런치', '사우나 & 찜질방', '아로마 선물 세트'],
      concierge: '스파 컨시어지',
      special: '얼리 체크인 (12시)',
    },
  ],
  '비즈니스': [
    {
      name: '이그제큐티브 스테이',
      type: '장기 투숙',
      description: '출장 및 장기 체류를 위한 비즈니스 패키지.',
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80',
      price: '₩350,000/박',
      details: '비즈니스 센터 무료 이용, 고속 WiFi, 조식이 포함된 효율적인 비즈니스 스테이 패키지입니다.',
      includes: ['이그제큐티브룸', '조식 포함', '비즈니스 센터 무료', '회의실 2시간 무료', '런드리 서비스 50% 할인', '공항 셔틀'],
      concierge: '비즈니스 컨시어지',
      special: '5박 이상 20% 할인',
    },
    {
      name: 'MICE 패키지',
      type: '맞춤형',
      description: '세미나, 컨퍼런스를 위한 기업 맞춤 패키지.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80',
      price: '견적 문의',
      details: '10인 이상 그룹을 위한 맞춤형 MICE 패키지입니다. 회의실, 숙박, 케이터링이 포함됩니다.',
      includes: ['그랜드 볼룸/회의실', '그룹 숙박 할인', '커피 브레이크 2회', '런치/디너 뷔페', 'AV 장비 일체', '전담 이벤트 매니저'],
      concierge: 'MICE 전담팀',
      special: '20인 이상 추가 혜택',
    },
  ],
}

type CategoryKey = keyof typeof packageCategories
type PackageItem = typeof packageCategories[CategoryKey][number]

export default function CategorySelector() {
  const [activeTab, setActiveTab] = useState<CategoryKey>('로맨틱')
  const [activeIndex, setActiveIndex] = useState(0)
  const [selectedPackage, setSelectedPackage] = useState<PackageItem | null>(null)

  const currentPackages = packageCategories[activeTab]
  const activePackage = currentPackages[activeIndex]

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <TextReveal
            text="특별 패키지"
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          />
        </div>

        <FadeInSection>
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {(Object.keys(packageCategories) as CategoryKey[]).map((tab) => (
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
              onClick={() => setSelectedPackage(activePackage)}
            >
              <Image
                src={activePackage.image}
                alt={activePackage.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="px-6 py-3 bg-primary text-white font-semibold rounded-lg">
                  자세히 보기
                </span>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection direction="right">
            <div className="space-y-6">
              <div>
                <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                  {activePackage.type}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                  {activePackage.name}
                </h3>
                <p className="text-text-secondary text-lg mb-6">
                  {activePackage.description}
                </p>
                <p className="text-2xl font-bold text-primary mb-8">
                  {activePackage.price}
                </p>
                <div className="flex gap-4">
                  <a
                    href="#contact"
                    className="inline-block px-8 py-4 bg-primary hover:bg-primary-hover text-white font-semibold tracking-wide transition-all duration-300"
                  >
                    예약하기
                  </a>
                  <button
                    onClick={() => setSelectedPackage(activePackage)}
                    className="px-8 py-4 border border-border hover:border-primary text-text-primary hover:text-primary font-semibold tracking-wide transition-all duration-300"
                  >
                    상세 보기
                  </button>
                </div>
              </div>

              <div className="flex gap-4 pt-8 border-t border-border">
                {currentPackages.map((pkg, index) => (
                  <button
                    key={pkg.name}
                    onClick={() => setActiveIndex(index)}
                    className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      activeIndex === index ? 'border-primary' : 'border-transparent opacity-50 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={pkg.image}
                      alt={pkg.name}
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

      <Modal isOpen={!!selectedPackage} onClose={() => setSelectedPackage(null)}>
        {selectedPackage && (
          <div
            className="bg-surface rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={selectedPackage.image}
                  alt={selectedPackage.name}
                  fill
                  className="object-cover rounded-t-2xl"
                />
              </div>
              <button
                onClick={() => setSelectedPackage(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                  {selectedPackage.type}
                </span>
                <h2 className="text-3xl font-bold text-white mt-1">{selectedPackage.name}</h2>
              </div>
            </div>

            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <p className="text-text-secondary leading-relaxed flex-1 mr-4">
                  {selectedPackage.details}
                </p>
                <span className="text-2xl font-bold text-primary whitespace-nowrap">
                  {selectedPackage.price}
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-surface-light rounded-xl p-6">
                  <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                    패키지 포함 내역
                  </h4>
                  <ul className="space-y-2">
                    {selectedPackage.includes.map((item, index) => (
                      <li key={item} className="flex items-start gap-3 text-text-secondary text-sm">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 text-primary text-xs font-semibold flex items-center justify-center mt-0.5">
                          {index + 1}
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                      전담 서비스
                    </h4>
                    <p className="text-text-primary">{selectedPackage.concierge}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                      특별 혜택
                    </h4>
                    <p className="text-text-secondary text-sm">{selectedPackage.special}</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-6 border-t border-border">
                <a
                  href="#contact"
                  onClick={() => setSelectedPackage(null)}
                  className="flex-1 text-center px-8 py-4 bg-primary hover:bg-primary-hover text-white font-semibold tracking-wide transition-all duration-300 rounded-lg"
                >
                  예약 문의하기
                </a>
                <button
                  onClick={() => setSelectedPackage(null)}
                  className="px-8 py-4 border border-border hover:border-primary text-text-primary hover:text-primary font-semibold tracking-wide transition-all duration-300 rounded-lg"
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

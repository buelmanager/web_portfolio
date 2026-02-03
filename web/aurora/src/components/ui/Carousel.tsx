'use client'

import { ReactNode } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

interface CarouselProps {
  children: ReactNode[]
  slidesPerView?: number | 'auto'
  spaceBetween?: number
  navigation?: boolean
  pagination?: boolean
  autoplay?: boolean | { delay: number }
  effect?: 'slide' | 'fade'
  loop?: boolean
  breakpoints?: Record<number, { slidesPerView: number; spaceBetween?: number }>
  className?: string
}

export default function Carousel({
  children,
  slidesPerView = 1,
  spaceBetween = 30,
  navigation = true,
  pagination = true,
  autoplay = false,
  effect = 'slide',
  loop = true,
  breakpoints,
  className = '',
}: CarouselProps) {
  const modules = [Navigation, Pagination, EffectFade]
  if (autoplay) modules.push(Autoplay)

  return (
    <Swiper
      modules={modules}
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      navigation={navigation}
      pagination={pagination ? { clickable: true, dynamicBullets: true } : false}
      autoplay={autoplay ? (typeof autoplay === 'object' ? { ...autoplay, disableOnInteraction: false } : { delay: 4000, disableOnInteraction: false }) : false}
      effect={effect}
      loop={loop}
      breakpoints={breakpoints}
      className={className}
    >
      {children.map((child, index) => (
        <SwiperSlide key={index}>{child}</SwiperSlide>
      ))}
    </Swiper>
  )
}

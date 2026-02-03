'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import TextReveal from '@/components/animations/TextReveal'

export default function Hero() {
  const [videoError, setVideoError] = useState(false)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleCanPlay = () => setIsVideoLoaded(true)
    video.addEventListener('canplay', handleCanPlay)

    return () => video.removeEventListener('canplay', handleCanPlay)
  }, [])

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden">
      {(videoError || !isVideoLoaded) && (
        <Image
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&q=80"
          alt="Solar Panel Background"
          fill
          priority
          className="object-cover"
          quality={90}
        />
      )}

      {!videoError && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          onError={() => setVideoError(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <source 
            src="https://cdn.pixabay.com/video/2020/07/30/45770-446625379_large.mp4" 
            type="video/mp4" 
          />
        </video>
      )}

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-[1]" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <TextReveal 
            text="지속 가능한 미래를 위한" 
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-2"
            delay={0.3}
          />
          <TextReveal 
            text="에너지 혁신" 
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8"
            delay={0.6}
          />
          
          <p className="text-lg md:text-xl text-gray-300 mb-4 animate-fade-in-up" style={{ animationDelay: '1s' }}>
            Energy Solution - Green Energy Partner
          </p>
          
          <div className="flex flex-col items-center gap-2 mb-10">
            <span className="text-gray-400">15년 노하우 · 1,000+ 설치 실적</span>
            <div className="flex items-baseline gap-2">
              <span className="text-sm text-gray-400">태양광 발전으로</span>
              <span className="text-3xl md:text-4xl font-bold text-primary">탄소중립 실현</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#products"
              className="px-8 py-4 bg-primary hover:bg-primary-hover text-white font-semibold tracking-wide uppercase text-sm transition-all duration-300 hover:scale-105"
            >
              솔루션 둘러보기
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-white text-white font-semibold tracking-wide uppercase text-sm transition-all duration-300 hover:bg-white hover:text-black"
            >
              무료 상담 신청
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

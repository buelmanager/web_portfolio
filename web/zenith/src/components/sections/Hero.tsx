'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import TextReveal from '@/components/animations/TextReveal'

export default function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }, [])

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden">
      {!videoLoaded && (
        <Image
          src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1920&q=80"
          alt="Luxury Jewelry Background"
          fill
          priority
          className="object-cover"
          quality={90}
        />
      )}

      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          videoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        src="https://videos.pexels.com/video-files/3843433/3843433-uhd_2560_1440_30fps.mp4"
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={() => setVideoLoaded(true)}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background z-[1]" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <TextReveal 
            text="시간을 담은 예술" 
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-2 gold-shimmer"
            delay={0.3}
          />
          <TextReveal 
            text="영원을 새기다" 
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 gold-shimmer"
            delay={0.6}
          />
          
          <p className="text-lg md:text-xl text-text-secondary mb-4 animate-fade-in-up tracking-[0.3em] uppercase" style={{ animationDelay: '1s' }}>
            zenith Swiss Luxury Since 1865
          </p>
          
          <div className="flex flex-col items-center gap-2 mb-10">
            <div className="flex items-baseline gap-4 text-text-muted">
              <span className="tracking-wider">150년 전통</span>
              <span className="text-primary">·</span>
              <span className="tracking-wider">스위스 장인</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#features"
              className="px-8 py-4 bg-primary hover:bg-primary-hover text-background font-semibold tracking-wide uppercase text-sm transition-all duration-300 hover:scale-105"
            >
              컬렉션 둘러보기
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-primary text-primary font-semibold tracking-wide uppercase text-sm transition-all duration-300 hover:bg-primary hover:text-background"
            >
              부티크 예약
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

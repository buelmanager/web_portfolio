'use client'

import { useState } from 'react'
import TextReveal from '@/components/animations/TextReveal'
import MagneticButton from '@/components/animations/MagneticButton'

export default function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false)

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden">
      <video
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          videoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={() => setVideoLoaded(true)}
      >
        <source src="https://videos.pexels.com/video-files/3141211/3141211-uhd_2560_1440_30fps.mp4" type="video/mp4" />
      </video>
      
      <div className={`absolute inset-0 bg-gradient-to-br from-background via-surface to-surface-light transition-opacity duration-1000 ${videoLoaded ? 'opacity-0' : 'opacity-100'}`} />

      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/50 to-transparent z-[1]" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <TextReveal 
            text="자산의 새로운 기준" 
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-2"
            delay={0.3}
          />
          <TextReveal 
            text="프라이빗 뱅킹" 
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 text-gradient"
            delay={0.6}
          />
          
          <p className="text-lg md:text-xl text-text-secondary mb-4 animate-fade-in-up" style={{ animationDelay: '1s' }}>
            onyx Private Banking & Wealth Management
          </p>
          
          <div className="flex flex-col items-center gap-2 mb-10">
            <span className="text-text-muted">100억+ 자산가 전용 · 글로벌 네트워크</span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl md:text-4xl font-bold text-secondary">신뢰 · 프라이빗 · 자산증식</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <MagneticButton>
              <a
                href="#features"
                className="inline-block px-8 py-4 bg-gradient-to-r from-secondary to-accent hover:from-accent hover:to-secondary text-background font-semibold tracking-wide uppercase text-sm transition-all duration-300 hover:scale-105 gold-glow"
              >
                서비스 알아보기
              </a>
            </MagneticButton>
            <MagneticButton>
              <a
                href="#contact"
                className="inline-block px-8 py-4 border-2 border-primary text-primary font-semibold tracking-wide uppercase text-sm transition-all duration-300 hover:bg-primary hover:text-background"
              >
                상담 예약
              </a>
            </MagneticButton>
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

'use client'

import { useState } from 'react'
import Image from 'next/image'
import TextReveal from '@/components/animations/TextReveal'

export default function Hero() {
  const [iframeLoaded, setIframeLoaded] = useState(false)

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden">
      {!iframeLoaded && (
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
          alt="Construction Building Background"
          fill
          priority
          className="object-cover"
          quality={90}
        />
      )}

      <iframe
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 pointer-events-none ${
          iframeLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transform: 'scale(1.5)', transformOrigin: 'center center' }}
        src="https://www.youtube.com/embed/SAqvP-FjW_Y?autoplay=1&mute=1&loop=1&playlist=SAqvP-FjW_Y&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
        allow="autoplay; encrypted-media"
        allowFullScreen
        onLoad={() => setIframeLoaded(true)}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-[1]" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <TextReveal 
            text="믿음으로 짓는" 
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-2"
            delay={0.3}
          />
          <TextReveal 
            text="든든한 건축" 
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8"
            delay={0.6}
          />
          
          <p className="text-lg md:text-xl text-gray-300 mb-4 animate-fade-in-up" style={{ animationDelay: '1s' }}>
            로터스건설 - 25년 건설 노하우
          </p>
          
          <div className="flex flex-col items-center gap-2 mb-10">
            <span className="text-gray-400">주거/상업 공간의 가치를 높이는 종합 건설 인테리어</span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl md:text-4xl font-bold text-primary">신뢰와 품질</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-4 bg-primary hover:bg-primary-hover text-white font-semibold tracking-wide uppercase text-sm transition-all duration-300 hover:scale-105"
            >
              시공사례 보기
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-white text-white font-semibold tracking-wide uppercase text-sm transition-all duration-300 hover:bg-white hover:text-black"
            >
              견적 문의
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

'use client'

import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import TextReveal from '@/components/animations/TextReveal'

export default function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 1.2 })
    
    if (buttonsRef.current) {
      const buttons = buttonsRef.current.querySelectorAll('a')
      tl.fromTo(buttons, 
        { opacity: 0, y: 30, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.15, ease: 'back.out(1.2)' }
      )
    }

    if (statsRef.current) {
      tl.fromTo(statsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
        '-=0.3'
      )
    }
  }, [])

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden">
      {!videoLoaded && (
        <Image
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&q=80"
          alt="Modern Architecture Background"
          fill
          priority
          className="object-cover"
          quality={90}
        />
      )}

      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          videoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={() => setVideoLoaded(true)}
      >
        <source src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-[1]" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <p className="text-secondary tracking-[0.3em] uppercase text-sm mb-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            vertex Architecture & Design
          </p>
          
          <TextReveal 
            text="공간을 디자인하다" 
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-2 text-white"
            delay={0.5}
          />
          <TextReveal 
            text="가치를 창조하다" 
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-10 text-white"
            delay={0.8}
          />
          
          <div ref={statsRef} className="flex items-center justify-center gap-8 mb-12 text-white/80">
            <div className="flex items-center gap-2">
              <span className="w-8 h-[1px] bg-secondary"></span>
              <span className="text-sm tracking-wider">15년 경력</span>
            </div>
            <div className="w-1 h-1 bg-secondary rounded-full"></div>
            <div className="flex items-center gap-2">
              <span className="text-sm tracking-wider">200+ 프로젝트</span>
              <span className="w-8 h-[1px] bg-secondary"></span>
            </div>
          </div>

          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-4 bg-white text-primary font-semibold tracking-wide text-sm transition-all duration-300 hover:bg-secondary hover:text-white"
            >
              프로젝트 보기
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-white/50 text-white font-semibold tracking-wide text-sm transition-all duration-300 hover:bg-white hover:text-primary"
            >
              상담 신청
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent animate-pulse" />
      </div>
    </section>
  )
}

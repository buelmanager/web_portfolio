'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import TextReveal from '@/components/animations/TextReveal'
import { gsap } from 'gsap'

export default function Hero() {
  const [videoError, setVideoError] = useState(false)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleCanPlay = () => setIsVideoLoaded(true)
    video.addEventListener('canplay', handleCanPlay)

    return () => video.removeEventListener('canplay', handleCanPlay)
  }, [])

  useEffect(() => {
    if (buttonsRef.current) {
      gsap.fromTo(
        buttonsRef.current.children,
        { opacity: 0, y: 30, filter: 'blur(10px)' },
        { 
          opacity: 1, 
          y: 0, 
          filter: 'blur(0px)',
          duration: 0.8,
          stagger: 0.15,
          delay: 1.2,
          ease: 'power3.out'
        }
      )
    }

    if (statsRef.current) {
      gsap.fromTo(
        statsRef.current,
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8,
          delay: 1.5,
          ease: 'power3.out'
        }
      )
    }
  }, [])

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden">
      {(videoError || !isVideoLoaded) && (
        <Image
          src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1920&q=80"
          alt="Spa & Wellness Background"
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
            src="https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4" 
            type="video/mp4" 
          />
        </video>
      )}

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60 z-[1]" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <TextReveal 
            text="자연이 선사하는" 
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-2 text-white"
            delay={0.3}
          />
          <TextReveal 
            text="깊은 휴식" 
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 text-white"
            delay={0.6}
          />
          
          <p className="text-lg md:text-xl text-white/80 mb-4 opacity-0 animate-[fadeIn_0.8s_ease_1s_forwards]">
            aurora Premium Spa & Wellness
          </p>
          
          <div ref={statsRef} className="flex flex-col items-center gap-2 mb-10 opacity-0">
            <span className="text-white/70 tracking-widest text-sm">자연 유래 성분 · 프라이빗 케어</span>
          </div>

          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#features"
              className="px-8 py-4 bg-primary hover:bg-primary-hover text-white font-medium tracking-wide text-sm transition-all duration-300 hover:scale-105 rounded-full opacity-0"
            >
              프로그램 보기
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-white/80 text-white font-medium tracking-wide text-sm transition-all duration-300 hover:bg-white hover:text-foreground rounded-full opacity-0"
            >
              예약 문의
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

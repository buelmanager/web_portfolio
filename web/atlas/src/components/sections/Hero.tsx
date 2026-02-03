'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import TextReveal from '@/components/animations/TextReveal'
import TypewriterText from '@/components/animations/TypewriterText'

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
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80"
          alt="Luxury Hotel Resort"
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
            src="https://videos.pexels.com/video-files/2491284/2491284-uhd_2560_1440_30fps.mp4" 
            type="video/mp4" 
          />
        </video>
      )}

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-[1]" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <TextReveal 
            text="완벽한 휴식의" 
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-2 text-white"
            delay={0.3}
          />
          <TextReveal 
            text="시작" 
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 text-white"
            delay={0.6}
          />
          
          <div className="text-lg md:text-xl text-gray-200 mb-4">
            <TypewriterText 
              text="atlas Experience" 
              speed={80} 
              delay={1200}
              className="text-primary-light"
              showCursor={false}
            />
          </div>
          
          <div className="flex flex-col items-center gap-2 mb-10">
            <span className="text-sm text-gray-400 uppercase tracking-widest">Luxury Hotel & Resort Since 1920</span>
            <div className="flex items-baseline gap-3 mt-2">
              <span className="text-gray-300">100년 전통</span>
              <span className="text-primary">·</span>
              <span className="text-gray-300">전세계 50개 호텔</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#features"
              className="px-8 py-4 bg-primary hover:bg-primary-hover text-white font-semibold tracking-wide uppercase text-sm transition-all duration-300 hover:scale-105"
            >
              객실 보기
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-white text-white font-semibold tracking-wide uppercase text-sm transition-all duration-300 hover:bg-white hover:text-secondary"
            >
              예약하기
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

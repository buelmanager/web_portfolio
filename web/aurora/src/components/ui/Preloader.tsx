'use client'

import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true)
  const preloaderRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLHeadingElement>(null)
  const loaderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline()

    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 20, filter: 'blur(10px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8, ease: 'power3.out' }
    )
    .fromTo(
      loaderRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' },
      '-=0.3'
    )

    const timer = setTimeout(() => {
      gsap.to(preloaderRef.current, {
        opacity: 0,
        duration: 0.6,
        ease: 'power2.inOut',
        onComplete: () => setIsLoading(false)
      })
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div 
      ref={preloaderRef}
      className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center"
    >
      <h1 
        ref={textRef}
        className="text-3xl md:text-4xl font-bold tracking-[0.3em] text-foreground mb-8 opacity-0"
      >
        <span>au</span>
        <span className="text-primary">ro</span>
        <span>ra</span>
      </h1>
      
      <div ref={loaderRef} className="relative w-12 h-12 opacity-0">
        <div className="absolute inset-0 rounded-full border-2 border-border" />
        <div 
          className="absolute inset-0 rounded-full border-2 border-primary border-t-transparent animate-spin"
          style={{ animationDuration: '1.2s' }}
        />
      </div>

      <p className="mt-8 text-text-muted text-sm tracking-widest">
        자연이 선사하는 휴식
      </p>
    </div>
  )
}

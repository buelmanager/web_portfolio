'use client'

import { useState, useEffect } from 'react'

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 2
      })
    }, 40)

    const timer = setTimeout(() => {
      setFadeOut(true)
      setTimeout(() => setIsLoading(false), 800)
    }, 2200)

    return () => {
      clearTimeout(timer)
      clearInterval(progressInterval)
    }
  }, [])

  if (!isLoading) return null

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-[#2C4A3E] flex flex-col items-center justify-center transition-all duration-800 ${
        fadeOut ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
      }`}
    >
      <div className="flex flex-col items-center">
        <div className="mb-6 opacity-80">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <path d="M24 4L28 16H40L30 24L34 36L24 28L14 36L18 24L8 16H20L24 4Z" fill="#C9A86C"/>
          </svg>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-light tracking-[0.4em] text-white mb-3 uppercase">
          atlas
        </h1>
        
        <p className="text-sm md:text-base tracking-[0.25em] text-[#C9A86C] mb-12 font-light">
          LUXURY HOTELS & RESORTS
        </p>
        
        <div className="w-48 h-[1px] bg-white/20 relative overflow-hidden">
          <div 
            className="absolute left-0 top-0 h-full bg-[#C9A86C] transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <p className="mt-8 text-white/60 text-xs tracking-[0.2em]">
          완벽한 휴식의 시작
        </p>
      </div>
    </div>
  )
}

'use client'

import { useState, useEffect } from 'react'

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)
  const [progress, setProgress] = useState(0)
  const [showTagline, setShowTagline] = useState(false)

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

    const taglineTimer = setTimeout(() => {
      setShowTagline(true)
    }, 600)

    const fadeTimer = setTimeout(() => {
      setFadeOut(true)
      setTimeout(() => setIsLoading(false), 800)
    }, 2500)

    return () => {
      clearInterval(progressInterval)
      clearTimeout(taglineTimer)
      clearTimeout(fadeTimer)
    }
  }, [])

  if (!isLoading) return null

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-[#0a0a0a] flex flex-col items-center justify-center transition-all duration-800 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
      
      <div className="relative z-10 flex flex-col items-center">
        <div className="overflow-hidden">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.4em] text-white uppercase"
            style={{
              animation: 'slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
              opacity: 0,
              transform: 'translateY(100%)',
            }}
          >
            zenith
          </h1>
        </div>

        <div 
          className={`mt-6 overflow-hidden transition-all duration-700 ${
            showTagline ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <p 
            className="text-xs md:text-sm tracking-[0.3em] text-[#c9a96e] uppercase font-light"
            style={{
              animation: showTagline ? 'fadeIn 1s ease-out forwards' : 'none',
            }}
          >
            Swiss Luxury Since 1865
          </p>
        </div>

        <div className="mt-12 w-48 md:w-64">
          <div className="h-[1px] bg-white/10 relative overflow-hidden">
            <div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#c9a96e] to-[#e8d5a3] transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          <div className="mt-4 flex justify-center">
            <span className="text-[10px] md:text-xs tracking-[0.2em] text-white/40 font-light tabular-nums">
              {progress}%
            </span>
          </div>
        </div>
      </div>

      <div className="absolute top-8 left-8 w-12 h-12">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#c9a96e]/50 to-transparent" />
        <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-[#c9a96e]/50 to-transparent" />
      </div>
      <div className="absolute top-8 right-8 w-12 h-12">
        <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-[#c9a96e]/50 to-transparent" />
        <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-[#c9a96e]/50 to-transparent" />
      </div>
      <div className="absolute bottom-8 left-8 w-12 h-12">
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#c9a96e]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-[1px] h-full bg-gradient-to-t from-[#c9a96e]/50 to-transparent" />
      </div>
      <div className="absolute bottom-8 right-8 w-12 h-12">
        <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-l from-[#c9a96e]/50 to-transparent" />
        <div className="absolute bottom-0 right-0 w-[1px] h-full bg-gradient-to-t from-[#c9a96e]/50 to-transparent" />
      </div>

      <style jsx>{`
        @keyframes slideUp {
          0% {
            opacity: 0;
            transform: translateY(100%);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}

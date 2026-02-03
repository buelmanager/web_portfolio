'use client'

import { useState, useEffect } from 'react'

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true)
      setTimeout(() => setIsLoading(false), 500)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-8">
        o<span className="text-primary">ny</span>x
      </h1>
      
      <div className="relative w-12 h-12">
        <svg 
          className="animate-spin" 
          viewBox="0 0 50 50"
          style={{ animationDuration: '1.5s' }}
        >
          <circle
            cx="25"
            cy="25"
            r="20"
            fill="none"
            stroke="rgba(192,197,206,0.1)"
            strokeWidth="2"
          />
          <circle
            cx="25"
            cy="25"
            r="20"
            fill="none"
            stroke="url(#gold-gradient)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="80"
            strokeDashoffset="60"
          />
          <defs>
            <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#B8956A" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

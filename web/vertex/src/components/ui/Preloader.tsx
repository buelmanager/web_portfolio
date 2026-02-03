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
      className={`fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-8">
        ver<span className="text-secondary">tex</span>
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
            stroke="#E0E0E0"
            strokeWidth="2"
          />
          <circle
            cx="25"
            cy="25"
            r="20"
            fill="none"
            stroke="#C9A86C"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="80"
            strokeDashoffset="60"
          />
        </svg>
      </div>
      
      <p className="mt-6 text-sm text-text-muted tracking-widest uppercase">
        Architecture & Design
      </p>
    </div>
  )
}

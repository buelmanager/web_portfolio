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
      className={`fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="relative w-20 h-20 mb-8">
        <div className="absolute inset-4 rounded-full bg-primary animate-pulse" />
        
        <svg 
          className="absolute inset-0 w-full h-full animate-spin"
          viewBox="0 0 80 80"
          style={{ animationDuration: '8s' }}
        >
          {[...Array(8)].map((_, i) => (
            <line
              key={i}
              x1="40"
              y1="8"
              x2="40"
              y2="16"
              stroke="#22C55E"
              strokeWidth="3"
              strokeLinecap="round"
              transform={`rotate(${i * 45} 40 40)`}
              style={{
                opacity: 0.6 + (i % 2) * 0.4
              }}
            />
          ))}
        </svg>
      </div>

      <h1 className="text-2xl md:text-3xl font-bold tracking-wider text-white mb-2">
        <span className="text-primary">Energy</span> Solution
      </h1>
      
      <p className="text-sm text-gray-500 tracking-widest uppercase mb-8">
        Green Energy Partner
      </p>
      
      <div className="w-48 h-0.5 bg-gray-800 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full animate-loading-bar"
        />
      </div>

      <style jsx>{`
        @keyframes loading-bar {
          0% {
            width: 0%;
            margin-left: 0%;
          }
          50% {
            width: 60%;
            margin-left: 20%;
          }
          100% {
            width: 0%;
            margin-left: 100%;
          }
        }
        .animate-loading-bar {
          animation: loading-bar 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

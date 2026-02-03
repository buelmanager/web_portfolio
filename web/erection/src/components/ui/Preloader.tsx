'use client'

import { useState, useEffect } from 'react'
import { Building2 } from 'lucide-react'

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
    }, 35)

    const timer = setTimeout(() => {
      setFadeOut(true)
      setTimeout(() => setIsLoading(false), 600)
    }, 2200)

    return () => {
      clearTimeout(timer)
      clearInterval(progressInterval)
    }
  }, [])

  if (!isLoading) return null

  return (
    <div
      className={`fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center transition-opacity duration-600 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* 건물 아이콘 애니메이션 */}
      <div className="relative mb-8">
        <div className="w-20 h-20 flex items-center justify-center">
          <Building2
            className="w-16 h-16 text-primary animate-pulse"
            strokeWidth={1.5}
          />
        </div>
        {/* 건설 중 효과 - 점진적 빌딩업 */}
        <div
          className="absolute bottom-0 left-0 right-0 bg-primary/20 transition-all duration-100"
          style={{ height: `${progress}%` }}
        />
      </div>

      <h1 className="text-3xl md:text-4xl font-bold tracking-[0.15em] text-white mb-3">
        <span className="text-primary">로터스</span>건설
      </h1>

      <p className="text-sm text-gray-400 tracking-wider mb-8">
        믿음으로 짓는 든든한 건축
      </p>

      {/* 프로그레스 바 */}
      <div className="w-48 md:w-64">
        <div className="h-[2px] bg-white/10 relative overflow-hidden rounded-full">
          <div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-primary/70 transition-all duration-100 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-3 flex justify-center">
          <span className="text-xs tracking-widest text-white/40 font-light">
            {progress}%
          </span>
        </div>
      </div>
    </div>
  )
}

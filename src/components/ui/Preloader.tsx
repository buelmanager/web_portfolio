'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

interface PreloaderProps {
  onComplete?: () => void
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [count, setCount] = useState(0)
  const preloaderRef = useRef<HTMLDivElement>(null)
  const counterRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const counter = { value: 0 }

    gsap.to(counter, {
      value: 100,
      duration: 2,
      ease: 'power2.out',
      onUpdate: () => {
        setCount(Math.round(counter.value))
      },
      onComplete: () => {
        gsap.to(preloaderRef.current, {
          opacity: 0,
          duration: 0.5,
          ease: 'power2.inOut',
          onComplete: () => {
            if (preloaderRef.current) {
              preloaderRef.current.style.display = 'none'
            }
            onComplete?.()
          }
        })
      }
    })

    return () => {
      gsap.killTweensOf(counter)
    }
  }, [onComplete])

  return (
    <div ref={preloaderRef} className="preloader">
      <div className="preloader-content">
        <div className="preloader-counter">
          <span ref={counterRef} className="counter-number">
            {count}
          </span>
        </div>
      </div>
    </div>
  )
}

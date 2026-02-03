'use client'

import { useRef, ReactNode } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

interface FadeInSectionProps {
  children: ReactNode
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale'
  delay?: number
  className?: string
  blur?: boolean
}

export default function FadeInSection({ 
  children, 
  direction = 'up',
  delay = 0,
  className = '',
  blur = false
}: FadeInSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const element = sectionRef.current
      if (!element) return

      const directionMap = {
        up: { y: 60, x: 0, scale: 1 },
        down: { y: -60, x: 0, scale: 1 },
        left: { x: 60, y: 0, scale: 1 },
        right: { x: -60, y: 0, scale: 1 },
        scale: { x: 0, y: 0, scale: 0.9 },
      }

      const fromVars: gsap.TweenVars = {
        opacity: 0,
        ...directionMap[direction],
      }

      if (blur) {
        fromVars.filter = 'blur(10px)'
      }

      gsap.fromTo(
        element,
        fromVars,
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          duration: 1,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    },
    { scope: sectionRef }
  )

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  )
}

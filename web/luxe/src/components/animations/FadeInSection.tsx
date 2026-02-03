'use client'

import { useRef, ReactNode } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

interface FadeInSectionProps {
  children: ReactNode
  direction?: 'up' | 'down' | 'left' | 'right'
  delay?: number
  className?: string
}

export default function FadeInSection({ 
  children, 
  direction = 'up',
  delay = 0,
  className = ''
}: FadeInSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const element = sectionRef.current
      if (!element) return

      const directionMap = {
        up: { y: 60, x: 0 },
        down: { y: -60, x: 0 },
        left: { x: 60, y: 0 },
        right: { x: -60, y: 0 },
      }

      gsap.fromTo(
        element,
        {
          opacity: 0,
          ...directionMap[direction],
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
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

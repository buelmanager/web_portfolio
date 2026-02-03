'use client'

import { useRef, ReactNode } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

interface RevealOnScrollProps {
  children: ReactNode
  delay?: number
  y?: number
  duration?: number
  className?: string
}

export default function RevealOnScroll({ 
  children, 
  delay = 0, 
  y = 60, 
  duration = 1,
  className = ''
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = ref.current
      if (!el) return

      gsap.fromTo(
        el,
        { 
          y, 
          opacity: 0, 
          filter: 'blur(10px)' 
        },
        {
          y: 0,
          opacity: 1,
          filter: 'blur(0px)',
          duration,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    },
    { scope: ref }
  )

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

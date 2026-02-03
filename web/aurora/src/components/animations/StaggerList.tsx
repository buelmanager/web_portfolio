'use client'

import { useRef, ReactNode } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

interface StaggerListProps {
  children: ReactNode
  stagger?: number
  className?: string
}

export default function StaggerList({ 
  children, 
  stagger = 0.1,
  className = ''
}: StaggerListProps) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const items = ref.current?.children
      if (!items) return

      gsap.fromTo(
        items,
        { 
          y: 40, 
          opacity: 0 
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 80%'
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

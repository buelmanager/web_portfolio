'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

interface TextRevealProps {
  text: string
  className?: string
  delay?: number
  stagger?: number
}

export default function TextReveal({ 
  text, 
  className = '', 
  delay = 0,
  stagger = 0.03
}: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const chars = containerRef.current?.querySelectorAll('.char')
      if (!chars) return

      gsap.fromTo(
        chars,
        {
          opacity: 0,
          y: 50,
          rotateX: -90,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          delay,
          stagger,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    },
    { scope: containerRef }
  )

  const words = text.split(' ')

  return (
    <div ref={containerRef} className={className}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-[0.25em]">
          {word.split('').map((char, charIndex) => (
            <span 
              key={charIndex} 
              className="char inline-block"
              style={{ perspective: '1000px' }}
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </div>
  )
}

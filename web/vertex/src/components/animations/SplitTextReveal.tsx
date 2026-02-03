'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface SplitTextRevealProps {
  text: string
  className?: string
  delay?: number
}

export default function SplitTextReveal({ 
  text, 
  className = '', 
  delay = 0 
}: SplitTextRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const words = ref.current?.querySelectorAll('.word')
    if (!words) return
    
    gsap.fromTo(words,
      { opacity: 0, y: 30, rotateX: -90 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: 'back.out(1.2)',
        delay,
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%'
        }
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [delay])
  
  const words = text.split(' ')
  
  return (
    <div ref={ref} className={className} style={{ perspective: '1000px' }}>
      {words.map((word, i) => (
        <span 
          key={i} 
          className="word inline-block mr-2"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {word}
        </span>
      ))}
    </div>
  )
}

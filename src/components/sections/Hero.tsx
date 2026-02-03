'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const scrollIndicatorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const words = titleRef.current?.querySelectorAll('.title-word')
    
    if (words) {
      gsap.fromTo(words,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: 'power3.out',
          delay: 2.5
        }
      )
    }

    if (scrollIndicatorRef.current) {
      gsap.fromTo(scrollIndicatorRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, delay: 3.5 }
      )
    }
  }, [])

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 ref={titleRef} className="hero-title">
          <span className="title-line">
            <span className="title-word">Creative</span>
          </span>
          <span className="title-line">
            <span className="title-word">Developer</span>
            <span className="title-word title-ampersand">&</span>
          </span>
          <span className="title-line">
            <span className="title-word">Designer</span>
          </span>
        </h1>
      </div>
      <div ref={scrollIndicatorRef} className="hero-scroll-indicator">
        <span className="scroll-text">Scroll to explore</span>
        <div className="scroll-arrow">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
        </div>
      </div>
    </section>
  )
}

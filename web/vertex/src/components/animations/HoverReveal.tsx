'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'

interface HoverRevealProps {
  src: string
  alt: string
  children: React.ReactNode
  className?: string
}

export default function HoverReveal({ 
  src, 
  alt, 
  children,
  className = ''
}: HoverRevealProps) {
  const imageRef = useRef<HTMLDivElement>(null)
  
  const handleMouseEnter = () => {
    gsap.to(imageRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.4,
      ease: 'power2.out'
    })
  }
  
  const handleMouseLeave = () => {
    gsap.to(imageRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.3,
      ease: 'power2.in'
    })
  }
  
  return (
    <div 
      className={`relative ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <div 
        ref={imageRef}
        className="absolute inset-0 pointer-events-none opacity-0"
        style={{ transform: 'scale(0.8)' }}
      >
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
    </div>
  )
}

'use client'

import { useState, useEffect } from 'react'

interface TypewriterTextProps {
  text: string
  speed?: number
  delay?: number
  className?: string
  showCursor?: boolean
}

export default function TypewriterText({ 
  text, 
  speed = 100, 
  delay = 0, 
  className = '',
  showCursor = true 
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      } else {
        setIsComplete(true)
      }
    }, currentIndex === 0 ? delay : speed)
    
    return () => clearTimeout(timeout)
  }, [currentIndex, text, speed, delay])
  
  return (
    <span className={className}>
      {displayText}
      {showCursor && !isComplete && (
        <span className="animate-pulse text-primary">|</span>
      )}
    </span>
  )
}

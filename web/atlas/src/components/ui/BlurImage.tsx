'use client'

import { useState } from 'react'
import Image, { ImageProps } from 'next/image'

interface BlurImageProps extends Omit<ImageProps, 'onLoadingComplete'> {
  containerClassName?: string
}

export default function BlurImage({ 
  src, 
  alt, 
  className = '', 
  containerClassName = '',
  ...props 
}: BlurImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  
  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      <Image
        src={src}
        alt={alt}
        className={`transition-all duration-700 ${
          isLoading ? 'blur-lg scale-110' : 'blur-0 scale-100'
        } ${className}`}
        onLoad={() => setIsLoading(false)}
        {...props}
      />
    </div>
  )
}

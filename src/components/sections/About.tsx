'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const introRef = useRef<HTMLParagraphElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        introRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      gsap.fromTo(
        descRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="about" id="about">
      <div className="about-content">
        <div className="about-header">
          <span className="section-label">About</span>
        </div>
        <div className="about-text">
          <p ref={introRef} className="about-intro">
            브랜드의 본질을 시각화하는<br />
            크리에이티브 디렉터
          </p>
          <p ref={descRef} className="about-description">
            서울을 기반으로 활동하며, 럭셔리 브랜드의 디지털 경험 디자인을 전문으로 합니다.
            브랜드 아이덴티티부터 웹사이트, 캠페인까지 통합적인 크리에이티브 디렉션을 제공합니다.
          </p>
        </div>
      </div>
    </section>
  )
}

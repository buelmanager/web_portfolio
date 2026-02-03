'use client'

import TextReveal from '@/components/animations/TextReveal'
import MagneticButton from '@/components/animations/MagneticButton'

export default function Hero() {
  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden">
      {/* YouTube video background - jewelry/diamond related */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <iframe
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] md:w-[177.77vh] md:h-[100vh] md:min-w-full md:min-h-[56.25vw]"
          src="https://www.youtube.com/embed/Qo5IpN2p4Wc?autoplay=1&mute=1&loop=1&playlist=Qo5IpN2p4Wc&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1"
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={{ border: 'none' }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background/60 z-[1]" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <TextReveal
            text="영원한 아름다움"
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-2"
            delay={0.3}
          />
          <TextReveal
            text="럭셔리 주얼리"
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 text-gradient"
            delay={0.6}
          />

          <p className="text-lg md:text-xl text-text-secondary mb-4 animate-fade-in-up" style={{ animationDelay: '1s' }}>
            ONYX Fine Jewelry & High-End Accessories
          </p>

          <div className="flex flex-col items-center gap-2 mb-10">
            <span className="text-text-muted">Since 1987 · 장인 정신 · 프리미엄 품질</span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl md:text-4xl font-bold text-secondary">우아함 · 희소성 · 영원</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <MagneticButton>
              <a
                href="#products"
                className="inline-block px-8 py-4 bg-gradient-to-r from-secondary to-accent hover:from-accent hover:to-secondary text-background font-semibold tracking-wide uppercase text-sm transition-all duration-300 hover:scale-105 gold-glow"
              >
                컬렉션 보기
              </a>
            </MagneticButton>
            <MagneticButton>
              <a
                href="#contact"
                className="inline-block px-8 py-4 border-2 border-primary text-primary font-semibold tracking-wide uppercase text-sm transition-all duration-300 hover:bg-primary hover:text-background"
              >
                예약 상담
              </a>
            </MagneticButton>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

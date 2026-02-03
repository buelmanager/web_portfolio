'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: '홈', href: '#hero' },
  { label: '회사소개', href: '#about' },
  { label: '시공사례', href: '#projects' },
  { label: '견적문의', href: '#contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3 group">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="transition-transform group-hover:scale-105">
              <rect x="4" y="14" width="8" height="14" fill="currentColor" className="text-primary"/>
              <rect x="14" y="8" width="8" height="20" fill="currentColor" className="text-primary/80"/>
              <rect x="24" y="18" width="4" height="10" fill="currentColor" className="text-primary/60"/>
              <rect x="2" y="28" width="28" height="2" fill="currentColor" className="text-white/30"/>
              <rect x="6" y="16" width="2" height="2" fill="currentColor" className="text-white/40"/>
              <rect x="6" y="20" width="2" height="2" fill="currentColor" className="text-white/40"/>
              <rect x="6" y="24" width="2" height="2" fill="currentColor" className="text-white/40"/>
              <rect x="16" y="10" width="2" height="2" fill="currentColor" className="text-white/40"/>
              <rect x="16" y="14" width="2" height="2" fill="currentColor" className="text-white/40"/>
              <rect x="16" y="18" width="2" height="2" fill="currentColor" className="text-white/40"/>
              <rect x="16" y="22" width="2" height="2" fill="currentColor" className="text-white/40"/>
              <rect x="20" y="14" width="2" height="2" fill="currentColor" className="text-white/40"/>
              <rect x="20" y="18" width="2" height="2" fill="currentColor" className="text-white/40"/>
            </svg>
            <div className="flex flex-col leading-none">
              <span className="text-xl font-bold tracking-tight">
                <span className="text-primary">로터스</span>
                <span className="text-white">건설</span>
              </span>
              <span className="text-[10px] text-gray-400 tracking-[0.15em] uppercase">Construction</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors uppercase tracking-wider"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-2 bg-primary hover:bg-primary-hover text-white text-sm font-semibold uppercase tracking-wider transition-colors"
            >
              견적 문의
            </a>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 text-gray-300 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block mt-4 px-5 py-3 bg-primary text-white text-center font-semibold"
            >
              견적 문의하기
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}

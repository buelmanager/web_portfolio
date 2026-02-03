'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import ScrollProgress from '@/components/animations/ScrollProgress'

const navItems = [
  { label: '홈', href: '#hero' },
  { label: '서비스', href: '#features' },
  { label: '인사이트', href: '#insights' },
  { label: '상담', href: '#contact' },
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
    <>
      <ScrollProgress />
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-background/95 backdrop-blur-md py-4 border-b border-border/50' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <a href="#hero" className="text-2xl font-bold tracking-tight">
              o<span className="text-primary">ny</span>x
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-text-secondary hover:text-secondary transition-colors uppercase tracking-wider"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="px-6 py-2.5 bg-gradient-to-r from-secondary to-accent hover:from-accent hover:to-secondary text-background text-sm font-semibold uppercase tracking-wider transition-all duration-300"
              >
                상담 신청
              </a>
            </nav>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-text-secondary"
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
                  className="block py-3 text-text-secondary hover:text-secondary transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="block mt-4 px-5 py-3 bg-gradient-to-r from-secondary to-accent text-background text-center font-semibold"
              >
                상담 신청하기
              </a>
            </nav>
          )}
        </div>
      </header>
    </>
  )
}

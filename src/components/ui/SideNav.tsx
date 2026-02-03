'use client'

import { useState, useEffect } from 'react'

interface NavItem {
  id: string
  label: string
  href: string
}

const navItems: NavItem[] = [
  { id: 'hero', label: '홈', href: '#hero' },
  { id: 'projects', label: '프로젝트', href: '#projects' },
  { id: 'about', label: '소개', href: '#about' },
  { id: 'contact', label: '연락처', href: '#contact' },
]

export default function SideNav() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id))
      const viewportCenter = window.scrollY + window.innerHeight / 2
      
      let closestSection = navItems[0].id
      let closestDistance = Infinity
      
      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop
          const sectionBottom = sectionTop + section.offsetHeight
          const sectionCenter = (sectionTop + sectionBottom) / 2
          const distance = Math.abs(viewportCenter - sectionCenter)
          
          if (distance < closestDistance) {
            closestDistance = distance
            closestSection = navItems[index].id
          }
        }
      })
      
      setActiveSection(closestSection)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <ul className="space-y-6">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="group flex items-center gap-3 transition-all duration-300"
            >
              <span
                className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-primary border-primary scale-125'
                    : 'bg-transparent border-text-muted hover:border-primary'
                }`}
              />
              <span
                className={`text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'opacity-100 text-primary translate-x-0'
                    : 'opacity-0 text-text-secondary translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
                }`}
              >
                {item.label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

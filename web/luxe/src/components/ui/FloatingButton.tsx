'use client'

import { Phone } from 'lucide-react'

export default function FloatingButton() {
  return (
    <a
      href="tel:070-8873-8472"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary hover:bg-primary-hover rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 group"
      aria-label="전화 상담"
    >
      <Phone className="w-6 h-6 text-white" />
      <span className="absolute right-full mr-3 px-3 py-2 bg-black text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        전화 상담
      </span>
    </a>
  )
}

'use client'

import { Phone } from 'lucide-react'

export default function FloatingButton() {
  return (
    <a
      href="tel:02-XXXX-XXXX"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary hover:bg-primary-hover rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 group"
      aria-label="상담 신청"
    >
      <Phone className="w-6 h-6 text-white" />
      <span className="absolute right-full mr-3 px-4 py-2 bg-primary text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        상담 신청
      </span>
    </a>
  )
}

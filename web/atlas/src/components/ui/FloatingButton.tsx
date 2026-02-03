'use client'

import { Phone } from 'lucide-react'

export default function FloatingButton() {
  return (
    <a
      href="tel:02-XXX-XXXX"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary hover:bg-primary-hover rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 group"
      aria-label="예약 전화"
    >
      <Phone className="w-6 h-6 text-white" />
      <span className="absolute right-full mr-3 px-3 py-2 bg-foreground text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        예약 전화
      </span>
    </a>
  )
}

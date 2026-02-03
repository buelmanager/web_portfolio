'use client'

import { Phone } from 'lucide-react'

export default function FloatingButton() {
  return (
    <a
      href="tel:02-XXXX-XXXX"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-secondary to-accent hover:from-accent hover:to-secondary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 group gold-glow"
      aria-label="VIP 상담"
    >
      <Phone className="w-6 h-6 text-background" />
      <span className="absolute right-full mr-3 px-3 py-2 bg-surface border border-border text-text-primary text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        VIP 상담
      </span>
    </a>
  )
}

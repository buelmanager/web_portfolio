'use client'

import { MapPin, Phone, Mail, Building } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-surface-light border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 tracking-tight">
              o<span className="text-primary">ny</span>x
            </h3>
            <p className="text-text-secondary mb-6 max-w-md">
              초고액 자산가를 위한 프라이빗 뱅킹. 맞춤형 자산관리와 글로벌 투자 솔루션으로 자산의 새로운 기준을 제시합니다.
            </p>
            <div className="flex gap-4">
              <a href="#contact"
                className="w-10 h-10 bg-surface rounded-full flex items-center justify-center hover:bg-secondary/20 transition-colors border border-border">
                <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg text-primary">회사 정보</h4>
            <ul className="space-y-3 text-text-secondary text-sm">
              <li className="flex items-start gap-2">
                <Building className="w-4 h-4 mt-0.5 text-secondary flex-shrink-0" />
                <span>onyx Private Banking</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-secondary flex-shrink-0" />
                <span>서울시 강남구 테헤란로<br />onyx Tower 20F</span>
              </li>
              <li>
                <span className="text-xs text-text-muted">금융위원회 인가 제XX호</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg text-primary">고객 센터</h4>
            <ul className="space-y-3 text-text-secondary text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-secondary" />
                <a href="tel:02-XXXX-XXXX" className="hover:text-secondary transition-colors">
                  02-XXXX-XXXX (VIP 전용)
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-secondary" />
                <a href="mailto:private@onyx.co.kr" className="hover:text-secondary transition-colors">
                  private@onyx.co.kr
                </a>
              </li>
              <li className="text-xs mt-4 text-text-muted">
                <p>예약 상담: 평일 09:00 ~ 18:00</p>
                <p>VIP 라운지: 연중무휴</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-sm">
            &copy; 2024 onyx Private Banking. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-text-muted">
            <a href="#" className="hover:text-secondary transition-colors">이용약관</a>
            <a href="#" className="hover:text-secondary transition-colors">개인정보처리방침</a>
            <a href="#" className="hover:text-secondary transition-colors">투자 유의사항</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

'use client'

import { useState, FormEvent } from 'react'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <section className="contact" id="contact">
        <div className="contact-content">
          <div className="form-message form-success">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h3>메시지가 전송되었습니다</h3>
            <p>빠른 시일 내에 답변 드리겠습니다.</p>
          </div>
        </div>
      </section>
    )
  }

  if (status === 'error') {
    return (
      <section className="contact" id="contact">
        <div className="contact-content">
          <div className="form-message form-error">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M15 9L9 15M9 9L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <h3>전송에 실패했습니다</h3>
            <p>잠시 후 다시 시도해주세요.</p>
            <button 
              onClick={() => setStatus('idle')}
              className="form-submit"
              style={{ marginTop: '2rem' }}
            >
              다시 시도
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-content">
        <h2 className="contact-title">
          <span className="contact-line">Let&apos;s work</span>
          <span className="contact-line">together</span>
        </h2>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="hidden" name="access_key" value="07954244-fabc-4a30-b95f-4007b2af9bb5" />
          <input type="hidden" name="subject" value="새로운 프로젝트 문의 - 포트폴리오" />
          <input type="hidden" name="from_name" value="Portfolio Contact Form" />
          <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className="form-input" 
                placeholder="성함을 입력해주세요" 
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="form-input" 
                placeholder="이메일 주소를 입력해주세요" 
                required 
              />
            </div>

            <div className="form-group form-group-full">
              <label htmlFor="company" className="form-label">
                Company <span className="optional">(Optional)</span>
              </label>
              <input 
                type="text" 
                id="company" 
                name="company" 
                className="form-input" 
                placeholder="회사/브랜드명" 
              />
            </div>

            <div className="form-group form-group-full">
              <label htmlFor="project-type" className="form-label">Project Type</label>
              <select 
                id="project-type" 
                name="project_type" 
                className="form-input form-select" 
                required
                defaultValue=""
              >
                <option value="" disabled>프로젝트 유형을 선택해주세요</option>
                <option value="branding">Branding</option>
                <option value="web-design">Web Design</option>
                <option value="app-design">App Design</option>
                <option value="art-direction">Art Direction</option>
                <option value="consulting">Consulting</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group form-group-full">
              <label htmlFor="budget" className="form-label">Budget Range</label>
              <select 
                id="budget" 
                name="budget" 
                className="form-input form-select" 
                required
                defaultValue=""
              >
                <option value="" disabled>예산 범위를 선택해주세요</option>
                <option value="under-500">&#8361;500만원 이하</option>
                <option value="500-1000">&#8361;500만원 - &#8361;1,000만원</option>
                <option value="1000-2000">&#8361;1,000만원 - &#8361;2,000만원</option>
                <option value="over-2000">&#8361;2,000만원 이상</option>
              </select>
            </div>

            <div className="form-group form-group-full">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea 
                id="message" 
                name="message" 
                className="form-input form-textarea" 
                placeholder="프로젝트에 대해 자세히 설명해주세요" 
                rows={5} 
                required
              />
            </div>
          </div>

          <button type="submit" className="form-submit" disabled={status === 'submitting'}>
            <span className="submit-text">
              {status === 'submitting' ? 'Sending...' : 'Send Message'}
            </span>
            <span className="submit-arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </span>
          </button>
        </form>
      </div>
    </section>
  )
}

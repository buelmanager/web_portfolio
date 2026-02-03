import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Footer.css';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const footer = footerRef.current;
    const content = contentRef.current;

    gsap.fromTo(content.children,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: footer,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <footer className="footer" ref={footerRef}>
      <div className="footer-content" ref={contentRef}>
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#" className="footer-logo">VELOX</a>
            <p className="footer-tagline">꿈을 향해 달리다</p>
          </div>

          <div className="footer-newsletter">
            <h4 className="newsletter-title">뉴스레터 구독</h4>
            <p className="newsletter-desc">최신 소식과 이벤트를 가장 먼저 받아보세요.</p>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="이메일 주소"
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
          </div>
        </div>

        <div className="footer-nav">
          <div className="footer-nav-column">
            <h4 className="footer-nav-title">모델</h4>
            <a href="#" className="footer-link">GT-S</a>
            <a href="#" className="footer-link">GT-E</a>
            <a href="#" className="footer-link">GT-X</a>
            <a href="#" className="footer-link">컨셉트카</a>
          </div>

          <div className="footer-nav-column">
            <h4 className="footer-nav-title">쇼핑</h4>
            <a href="#" className="footer-link">구매 상담</a>
            <a href="#" className="footer-link">시승 신청</a>
            <a href="#" className="footer-link">견적 내기</a>
            <a href="#" className="footer-link">전시장 찾기</a>
          </div>

          <div className="footer-nav-column">
            <h4 className="footer-nav-title">서비스</h4>
            <a href="#" className="footer-link">서비스센터</a>
            <a href="#" className="footer-link">정품 부품</a>
            <a href="#" className="footer-link">보증 프로그램</a>
            <a href="#" className="footer-link">긴급출동</a>
          </div>

          <div className="footer-nav-column">
            <h4 className="footer-nav-title">브랜드</h4>
            <a href="#" className="footer-link">회사 소개</a>
            <a href="#" className="footer-link">헤리티지</a>
            <a href="#" className="footer-link">뉴스룸</a>
            <a href="#" className="footer-link">채용</a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-social">
            <a href="#" className="social-link" aria-label="인스타그램">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
                <circle cx="18" cy="6" r="1" fill="currentColor"/>
              </svg>
            </a>
            <a href="#" className="social-link" aria-label="유튜브">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M22.54 6.42C22.4212 5.94541 22.1793 5.51057 21.8387 5.15941C21.498 4.80824 21.0708 4.55318 20.6 4.42C18.88 4 12 4 12 4C12 4 5.12 4 3.4 4.46C2.92925 4.59318 2.50198 4.84824 2.16135 5.19941C1.82072 5.55057 1.57879 5.98541 1.46 6.46C1 8.18 1 12 1 12C1 12 1 15.82 1.46 17.54C1.69 18.46 2.43 19.18 3.4 19.42C5.12 19.88 12 19.88 12 19.88C12 19.88 18.88 19.88 20.6 19.42C21.57 19.18 22.31 18.46 22.54 17.54C23 15.82 23 12 23 12C23 12 23 8.18 22.54 6.42Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.75 15.02L15.5 12L9.75 8.98V15.02Z" fill="currentColor"/>
              </svg>
            </a>
            <a href="#" className="social-link" aria-label="페이스북">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          <div className="footer-legal">
            <span className="copyright">&copy; 2026 VELOX. 모든 권리 보유.</span>
            <div className="legal-links">
              <a href="#">이용약관</a>
              <a href="#">개인정보처리방침</a>
              <a href="#">쿠키 설정</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

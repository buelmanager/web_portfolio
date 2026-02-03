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
      { y: 40, opacity: 0 },
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
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#" className="footer-logo">
              <span className="footer-logo-mark"></span>
              <span className="footer-logo-text">NOIR</span>
            </a>
            <p className="footer-tagline">결정적 한 잔의 순간</p>
          </div>

          <div className="footer-info">
            <div className="footer-column">
              <h4 className="footer-title">방문</h4>
              <address className="footer-address">
                서울특별시 강남구<br />
                도산대로 123<br />
                월-일 08:00 - 22:00
              </address>
            </div>

            <div className="footer-column">
              <h4 className="footer-title">연락</h4>
              <a href="tel:+82212345678" className="footer-link">02-1234-5678</a>
              <a href="mailto:hello@noir.coffee" className="footer-link">hello@noir.coffee</a>
            </div>

            <div className="footer-column">
              <h4 className="footer-title">소셜</h4>
              <a href="#" className="footer-link">인스타그램</a>
              <a href="#" className="footer-link">네이버블로그</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; 2026 NOIR COFFEE. 모든 권리 보유.
          </p>
          <div className="footer-legal">
            <a href="#">개인정보처리방침</a>
            <a href="#">이용약관</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

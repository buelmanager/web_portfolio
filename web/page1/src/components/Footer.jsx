import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Footer.css';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const footer = footerRef.current;

    gsap.fromTo(footer.children,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: footer,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <footer className="footer">
      <div className="footer-content" ref={footerRef}>
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#" className="footer-logo">
              <span className="footer-logo-text">MAISON NOIR</span>
            </a>
            <p className="footer-tagline">Defining haute couture excellence since 1987</p>
          </div>

          <div className="footer-nav">
            <div className="footer-nav-column">
              <h4 className="footer-nav-title">La Maison</h4>
              <a href="#" className="footer-link">Our Heritage</a>
              <a href="#" className="footer-link">Artisans</a>
              <a href="#" className="footer-link">Careers</a>
            </div>
            <div className="footer-nav-column">
              <h4 className="footer-nav-title">Collections</h4>
              <a href="#" className="footer-link">Haute Couture</a>
              <a href="#" className="footer-link">Prêt-à-Porter</a>
              <a href="#" className="footer-link">Bridal</a>
            </div>
            <div className="footer-nav-column">
              <h4 className="footer-nav-title">Connect</h4>
              <a href="#" className="footer-link">Rendez-vous</a>
              <a href="#" className="footer-link">Press</a>
              <a href="#" className="footer-link">Instagram</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-locations">
            <span>Paris</span>
            <span>Milan</span>
            <span>New York</span>
          </div>
          <div className="footer-legal">
            <span>&copy; 2026 MAISON NOIR. All rights reserved.</span>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

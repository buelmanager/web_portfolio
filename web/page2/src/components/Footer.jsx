import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Footer.css';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const footer = footerRef.current;
    const logo = logoRef.current;

    // Logo scale animation
    gsap.fromTo(logo,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
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
      <div className="footer-top">
        <div className="footer-logo" ref={logoRef}>
          <span className="footer-logo-top">KRONOS</span>
          <span className="footer-logo-bottom">LEGACY</span>
        </div>
        <p className="footer-tagline">
          Crafting Time, Defining Legacy
        </p>
      </div>

      <div className="footer-content">
        <div className="footer-nav">
          <div className="footer-nav-column">
            <h4 className="footer-nav-title">Collections</h4>
            <a href="#" className="footer-link">Sovereign</a>
            <a href="#" className="footer-link">Celestial</a>
            <a href="#" className="footer-link">Heritage</a>
            <a href="#" className="footer-link">Meridian</a>
          </div>

          <div className="footer-nav-column">
            <h4 className="footer-nav-title">The Maison</h4>
            <a href="#" className="footer-link">Our Story</a>
            <a href="#" className="footer-link">Manufacture</a>
            <a href="#" className="footer-link">Craftsmanship</a>
            <a href="#" className="footer-link">Sustainability</a>
          </div>

          <div className="footer-nav-column">
            <h4 className="footer-nav-title">Services</h4>
            <a href="#" className="footer-link">Boutiques</a>
            <a href="#" className="footer-link">Book Appointment</a>
            <a href="#" className="footer-link">After-Sales</a>
            <a href="#" className="footer-link">Authentication</a>
          </div>

          <div className="footer-nav-column">
            <h4 className="footer-nav-title">Connect</h4>
            <a href="#" className="footer-link">Contact Us</a>
            <a href="#" className="footer-link">Newsletter</a>
            <a href="#" className="footer-link">Instagram</a>
            <a href="#" className="footer-link">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-locations">
          <span>Geneva</span>
          <span>Paris</span>
          <span>New York</span>
          <span>Hong Kong</span>
          <span>Dubai</span>
        </div>

        <div className="footer-legal">
          <span>&copy; 2026 Kronos Legacy. All rights reserved.</span>
          <div className="footer-legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

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
          <span className="footer-logo-top">MAISON</span>
          <span className="footer-logo-bottom">ÉLISE</span>
        </div>
        <p className="footer-tagline">
          L'Art du Cuir Parisien
        </p>
      </div>

      <div className="footer-content">
        <div className="footer-nav">
          <div className="footer-nav-column">
            <h4 className="footer-nav-title">Collections</h4>
            <a href="#" className="footer-link">Étoile</a>
            <a href="#" className="footer-link">Parisienne</a>
            <a href="#" className="footer-link">Héritage</a>
            <a href="#" className="footer-link">Voyage</a>
          </div>

          <div className="footer-nav-column">
            <h4 className="footer-nav-title">La Maison</h4>
            <a href="#" className="footer-link">Notre Histoire</a>
            <a href="#" className="footer-link">L'Atelier</a>
            <a href="#" className="footer-link">Savoir-Faire</a>
            <a href="#" className="footer-link">Durabilité</a>
          </div>

          <div className="footer-nav-column">
            <h4 className="footer-nav-title">Services</h4>
            <a href="#" className="footer-link">Boutiques</a>
            <a href="#" className="footer-link">Rendez-vous</a>
            <a href="#" className="footer-link">Entretien</a>
            <a href="#" className="footer-link">Authentification</a>
          </div>

          <div className="footer-nav-column">
            <h4 className="footer-nav-title">Contact</h4>
            <a href="#" className="footer-link">Nous Contacter</a>
            <a href="#" className="footer-link">Newsletter</a>
            <a href="#" className="footer-link">Instagram</a>
            <a href="#" className="footer-link">Pinterest</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-locations">
          <span>Paris</span>
          <span>New York</span>
          <span>London</span>
          <span>Tokyo</span>
          <span>Milan</span>
        </div>

        <div className="footer-legal">
          <span>&copy; 2026 Maison Élise. Tous droits réservés.</span>
          <div className="footer-legal-links">
            <a href="#">Confidentialité</a>
            <a href="#">Conditions</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

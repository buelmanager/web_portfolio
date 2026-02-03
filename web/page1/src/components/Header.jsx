import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : '';
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <nav className="nav">
          <div className="nav-left">
            <a href="#" className="nav-link">Atelier</a>
            <a href="#" className="nav-link">Collections</a>
            <a href="#" className="nav-link">Couture</a>
          </div>

          <a href="#" className="logo">
            <span className="logo-text">MAISON NOIR</span>
          </a>

          <div className="nav-right">
            <a href="#" className="nav-link">Journal</a>
            <a href="#" className="nav-link">Boutiques</a>
            <a href="#" className="nav-link nav-link-contact">Rendez-vous</a>
          </div>
        </nav>

        <button
          className={`menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          aria-label="Toggle Menu"
          onClick={toggleMobileMenu}
        >
          <span className="menu-text">Menu</span>
          <span className="menu-text-close">Close</span>
        </button>
      </header>

      <div className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-nav-content">
          <a href="#" className="mobile-nav-link">Atelier</a>
          <a href="#" className="mobile-nav-link">Collections</a>
          <a href="#" className="mobile-nav-link">Couture</a>
          <a href="#" className="mobile-nav-link">Journal</a>
          <a href="#" className="mobile-nav-link">Boutiques</a>
          <a href="#" className="mobile-nav-link">Rendez-vous</a>
        </div>
      </div>
    </>
  );
};

export default Header;

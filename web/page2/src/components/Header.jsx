import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-inner">
          <nav className="nav-left">
            <a href="#" className="nav-link">Collections</a>
            <a href="#" className="nav-link">Manufacture</a>
            <a href="#" className="nav-link">Heritage</a>
          </nav>

          <a href="#" className="logo">
            <span className="logo-top">KRONOS</span>
            <span className="logo-bottom">LEGACY</span>
          </a>

          <nav className="nav-right">
            <a href="#" className="nav-link">Boutiques</a>
            <a href="#" className="nav-link">Journal</a>
            <a href="#" className="nav-link nav-link-cta">Contact</a>
          </nav>

          <button
            className={`menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span className="menu-line"></span>
            <span className="menu-line"></span>
          </button>
        </div>
      </header>

      <div className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-nav-content">
          <a href="#" className="mobile-nav-link">Collections</a>
          <a href="#" className="mobile-nav-link">Manufacture</a>
          <a href="#" className="mobile-nav-link">Heritage</a>
          <a href="#" className="mobile-nav-link">Boutiques</a>
          <a href="#" className="mobile-nav-link">Journal</a>
          <a href="#" className="mobile-nav-link">Contact</a>
        </div>
      </div>
    </>
  );
};

export default Header;

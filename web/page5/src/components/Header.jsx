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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : '';
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-inner">
          <a href="#" className="logo">
            <span className="logo-text">VELOX</span>
          </a>

          <nav className="nav-desktop">
            <a href="#" className="nav-link">모델</a>
            <a href="#" className="nav-link">기술</a>
            <a href="#" className="nav-link">경험</a>
            <a href="#" className="nav-link">브랜드</a>
            <a href="#" className="nav-link">구매상담</a>
          </nav>

          <div className="header-actions">
            <button className="search-btn" aria-label="검색">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/>
                <path d="M20 20L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          <button
            className={`menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="메뉴"
          >
            <span className="menu-line"></span>
            <span className="menu-line"></span>
            <span className="menu-line"></span>
          </button>
        </div>
      </header>

      <div className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-nav-inner">
          <div className="mobile-nav-content">
            <a href="#" className="mobile-nav-link" onClick={toggleMobileMenu}>
              <span className="mobile-nav-number">01</span>
              <span className="mobile-nav-text">모델</span>
            </a>
            <a href="#" className="mobile-nav-link" onClick={toggleMobileMenu}>
              <span className="mobile-nav-number">02</span>
              <span className="mobile-nav-text">기술</span>
            </a>
            <a href="#" className="mobile-nav-link" onClick={toggleMobileMenu}>
              <span className="mobile-nav-number">03</span>
              <span className="mobile-nav-text">경험</span>
            </a>
            <a href="#" className="mobile-nav-link" onClick={toggleMobileMenu}>
              <span className="mobile-nav-number">04</span>
              <span className="mobile-nav-text">브랜드</span>
            </a>
            <a href="#" className="mobile-nav-link" onClick={toggleMobileMenu}>
              <span className="mobile-nav-number">05</span>
              <span className="mobile-nav-text">구매상담</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

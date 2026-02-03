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
        <div className="header-inner">
          <a href="#" className="logo">
            <span className="logo-mark"></span>
            <span className="logo-text">NOIR</span>
          </a>

          <nav className="nav-desktop">
            <a href="#" className="nav-link">원두</a>
            <a href="#" className="nav-link">메뉴</a>
            <a href="#" className="nav-link">공간</a>
            <a href="#" className="nav-link">이야기</a>
          </nav>

          <div className="header-actions">
            <a href="#" className="nav-link">방문예약</a>
          </div>

          <button
            className={`menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="메뉴 열기"
          >
            <span className="menu-line"></span>
            <span className="menu-line"></span>
          </button>
        </div>
      </header>

      <div className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-nav-content">
          <a href="#" className="mobile-nav-link" onClick={toggleMobileMenu}>원두</a>
          <a href="#" className="mobile-nav-link" onClick={toggleMobileMenu}>메뉴</a>
          <a href="#" className="mobile-nav-link" onClick={toggleMobileMenu}>공간</a>
          <a href="#" className="mobile-nav-link" onClick={toggleMobileMenu}>이야기</a>
          <a href="#" className="mobile-nav-link" onClick={toggleMobileMenu}>방문예약</a>
        </div>
      </div>
    </>
  );
};

export default Header;

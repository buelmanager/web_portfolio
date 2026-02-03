'use client'

const navLinks = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

const socialLinks = [
  { href: 'https://instagram.com', label: 'Ig' },
  { href: 'https://behance.net', label: 'Be' },
  { href: 'https://linkedin.com', label: 'Li' },
]

export default function BottomNav() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="bottom-nav">
      <div className="nav-left">
        <a href="#" className="nav-logo">Portfolio</a>
      </div>
      <div className="nav-center">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="nav-link"
            onClick={(e) => handleNavClick(e, link.href)}
          >
            {link.label}
          </a>
        ))}
      </div>
      <div className="nav-right">
        <div className="nav-socials">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

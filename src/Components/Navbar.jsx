import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Home', to: '/', type: 'route' },
  { label: 'About', to: '/about', type: 'route' },
  { label: 'Services', to: '/#services', type: 'hash' },
  { label: 'Skills', to: '/#skills', type: 'hash' },
  { label: 'Projects', to: '/#projects', type: 'hash' },
  { label: 'Contact', to: '/#contact', type: 'hash' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="navbar">
      <Link
        className="brand"
        to="/"
        aria-label="Benedicta Danquah home"
        onClick={() => setIsMenuOpen(false)}
      >
        <span className="brand-mark">BD</span>
        <span className="brand-name">Benedicta Danquah</span>
      </Link>

      <nav
        className={`nav-links${isMenuOpen ? ' is-open' : ''}`}
        id="primary-navigation"
        aria-label="Main navigation"
      >
        {navItems.map((item) =>
          item.type === 'route' ? (
            <NavLink
              key={item.label}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ) : (
            <Link
              key={item.label}
              to={item.to}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          )
        )}
      </nav>

      <button
        className="mobile-menu-toggle"
        type="button"
        aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isMenuOpen}
        aria-controls="primary-navigation"
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <a
        className="talk-button"
        href="mailto:danquahbenedicta72@gmail.com?subject=Project%20Enquiry"
      >
        Let's Talk <span>↗</span>
      </a>
    </header>
  )
}

export default Navbar
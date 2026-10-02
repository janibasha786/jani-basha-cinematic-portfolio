import { useEffect, useRef, useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navbarRef = useRef(null)

  const handleLinkClick = () => {
    setMenuOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        navbarRef.current &&
        !navbarRef.current.contains(event.target)
      ) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [menuOpen])

  return (
    <nav
      ref={navbarRef}
      className={`navbar ${menuOpen ? 'menu-open' : ''}`}
    >
      <a
        href="#"
        className="navbar-logo"
        onClick={handleLinkClick}
      >
        JANI BASHA
      </a>

      <div className="navbar-links">
        <a href="#about" onClick={handleLinkClick}>
          ABOUT
        </a>

        <a href="#experience" onClick={handleLinkClick}>
          EXPERIENCE
        </a>

        <a href="#projects" onClick={handleLinkClick}>
          PROJECTS
        </a>

        <a href="#contact" onClick={handleLinkClick}>
          CONTACT
        </a>
      </div>

      <button
        type="button"
        className="menu-toggle"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
      >
        <span />
        <span />
      </button>
    </nav>
  )
}

export default Navbar
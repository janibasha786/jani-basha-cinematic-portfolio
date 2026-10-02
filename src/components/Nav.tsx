import { useEffect, useState } from 'react'

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = [
        'about',
        'expertise',
        'projects',
        'contact'
      ]

      let currentSection = ''

      sections.forEach((section) => {
        const element = document.getElementById(section)

        if (element) {
          const sectionTop = element.offsetTop - 150

          if (window.scrollY >= sectionTop) {
            currentSection = section
          }
        }
      })

      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)

    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav className={scrolled ? 'nav-scrolled' : ''}>
      <div className="nav-logo">
        JANI BASHA
      </div>

      <button
        className={`menu-toggle ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={
          menuOpen
            ? 'Close navigation'
            : 'Open navigation'
        }
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div
        className={`nav-links ${menuOpen ? 'open' : ''}`}
      >
        <a
          href="#about"
          className={
            activeSection === 'about' ? 'active' : ''
          }
          onClick={closeMenu}
        >
          ABOUT
        </a>

        <a
          href="#expertise"
          className={
            activeSection === 'expertise' ? 'active' : ''
          }
          onClick={closeMenu}
        >
          EXPERTISE
        </a>

        <a
          href="#projects"
          className={
            activeSection === 'projects' ? 'active' : ''
          }
          onClick={closeMenu}
        >
          PROJECTS
        </a>

        <a
          href="#contact"
          className={
            activeSection === 'contact' ? 'active' : ''
          }
          onClick={closeMenu}
        >
          CONTACT
        </a>
      </div>
    </nav>
  )
}

export default Nav
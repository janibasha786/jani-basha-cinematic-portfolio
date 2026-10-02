import { useEffect } from 'react'

function NavbarAnimation() {
  useEffect(() => {
    const navbar = document.querySelector('.navbar')

    if (!navbar) return

    const handleScroll = () => {
      if (window.scrollY > 60) {
        navbar.classList.add('navbar-scrolled')
      } else {
        navbar.classList.remove('navbar-scrolled')
      }
    }

    window.addEventListener('scroll', handleScroll)

    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return null
}

export default NavbarAnimation
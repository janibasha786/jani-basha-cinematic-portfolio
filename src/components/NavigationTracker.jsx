import { useEffect } from 'react'

function NavigationTracker() {
  useEffect(() => {
    const sections = document.querySelectorAll(
      '#about, #experience, #projects, #contact'
    )

    const links = document.querySelectorAll('.navbar-links a')

    const handleScroll = () => {
      let currentSection = ''

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 200

        if (window.scrollY >= sectionTop) {
          currentSection = section.id
        }
      })

      links.forEach((link) => {
        link.classList.remove('nav-active')

        if (
          link.getAttribute('href') ===
          `#${currentSection}`
        ) {
          link.classList.add('nav-active')
        }
      })

      const skillsSection = document.querySelector('.skills-section')

      if (skillsSection) {
        const skillsTop = skillsSection.offsetTop - 200
        const skillsBottom =
          skillsTop + skillsSection.offsetHeight

        if (
          window.scrollY >= skillsTop &&
          window.scrollY < skillsBottom
        ) {
          document.body.classList.add('skills-active')
        } else {
          document.body.classList.remove('skills-active')
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.body.classList.remove('skills-active')
    }
  }, [])

  return null
}

export default NavigationTracker
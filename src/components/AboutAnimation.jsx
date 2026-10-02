import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function AboutAnimation() {
  useEffect(() => {
    const section = document.querySelector('.about-section')

    if (!section) return

    const elements = section.querySelectorAll(
      '.section-label, .about-heading, .experience-number, .about-text, .about-technologies'
    )

    gsap.fromTo(
      elements,
      {
        opacity: 0,
        y: 35,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          once: true,
        },
      }
    )

    return () => {
  ScrollTrigger.getAll().forEach((trigger) => {
    if (trigger.trigger === section) {
      trigger.kill()
    }
  })
}
  }, [])

  return null
}

export default AboutAnimation
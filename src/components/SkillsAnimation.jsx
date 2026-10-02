import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function SkillsAnimation() {
  useEffect(() => {
    const section = document.querySelector('.skills-section')

    if (!section) return

    const groups = section.querySelectorAll('.skill-group')

    gsap.fromTo(
      groups,
      {
        opacity: 0,
        y: 35,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
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

export default SkillsAnimation
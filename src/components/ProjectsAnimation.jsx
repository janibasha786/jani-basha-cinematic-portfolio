import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function ProjectsAnimation() {
  useEffect(() => {
    const section = document.querySelector('.projects-section')

    if (!section) return

    const cards = section.querySelectorAll('.project-card')

    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.2,
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

export default ProjectsAnimation
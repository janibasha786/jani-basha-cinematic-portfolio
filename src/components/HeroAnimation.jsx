import { useEffect } from 'react'
import gsap from 'gsap'

function HeroAnimation() {
  useEffect(() => {
    const element =
      document.querySelector('.hero-animate')

    if (!element) return

    const eyebrow =
      element.querySelector('.eyebrow')

    const title =
      element.querySelector('h1')

    const description =
      element.querySelector('.hero-description')

    const meta =
      element.querySelector('.hero-meta')

    const timeline =
      gsap.timeline({
        defaults: {
          ease: 'power3.out',
        },
      })

    timeline
      .fromTo(
        eyebrow,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
        }
      )
      .fromTo(
        title,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
        },
        '-=0.25'
      )
      .fromTo(
        description,
        {
          opacity: 0,
          y: 25,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
        },
        '-=0.45'
      )
      .fromTo(
        meta,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
        },
        '-=0.3'
      )

    return () => {
      timeline.kill()
    }
  }, [])

  return null
}

export default HeroAnimation
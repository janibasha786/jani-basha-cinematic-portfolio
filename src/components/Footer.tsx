import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Footer() {
  const footerRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.footer-animate', {
        y: 20,
        opacity: 0
      })

      gsap.to('.footer-animate', {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 90%',
          once: true
        }
      })
    }, footerRef)

    return () => ctx.revert()
  }, [])

  return (
    <footer
      ref={footerRef}
      className="footer"
    >
      <p className="footer-animate">
        © 2026 JANI BASHA
      </p>

      <p className="footer-animate">
        MAINFRAME DEVELOPER
      </p>
    </footer>
  )
}

export default Footer
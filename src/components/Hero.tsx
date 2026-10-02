import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import photo from '../assets/photo.jpg'
import resume from '../assets/Jani_Basha_Resume.pdf'

function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-animate',
        {
          y: 40,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out'
        }
      )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="hero">
      <div className="hero-text">
        <p className="hero-label hero-animate">
          MAINFRAME DEVELOPER
        </p>

        <h1 className="hero-animate">
          Building and supporting
          <br />
          enterprise applications.
        </h1>

        <p className="hero-description hero-animate">
          5+ years of experience working with COBOL, JCL, DB2,
          CICS, VSAM and enterprise mainframe systems.
        </p>

        <div className="hero-buttons hero-animate">
          <a href="#projects">VIEW PROJECTS</a>
          <a href="#contact">CONTACT ME</a>
          <a href={resume}
            target="_blank"
            rel="noreferrer"
            aria-label="View Jani Basha resume"
          >
            VIEW RESUME
          </a>
        </div>
      </div>

      <div className="hero-photo hero-animate">
        <img src={photo} alt="Jani Basha" />
      </div>
    </section>
  )
}

export default Hero
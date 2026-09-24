import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'


function About() {
  const aboutRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    gsap.set('.about-animate', {
      y: 50,
      opacity: 0
    })

    gsap.to('.about-animate', {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: aboutRef.current,
        start: 'top 75%',
        once: true
      }
    })
  }, aboutRef)

  return () => ctx.revert()
}, [])

  return (
    <section ref={aboutRef} id="about" className="about">
      <div className="section-header about-animate">
        <p>ABOUT ME</p>
        <h2>
          Building and supporting enterprise mainframe applications
        </h2>
      </div>

      <div className="about-content">
        <p className="about-animate">
          I am a Mainframe Developer with 5+ years of experience working
          across Banking and Insurance domains. I work with COBOL, JCL, DB2,
          VSAM, IMS and CICS to develop, maintain and support enterprise
          applications.
        </p>

        <p className="about-animate">
          My experience includes application development, production support,
          impact analysis, batch processing, debugging and resolving
          production issues in enterprise environments.
        </p>
      </div>
    </section>
  )
}

export default About
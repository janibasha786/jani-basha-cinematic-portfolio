import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const elements = section.querySelectorAll(
      '.section-label, .about-heading, .experience-number, .about-text, .about-technologies span'
    )

    gsap.fromTo(
      elements,
      {
        y: 35,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.08,
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

  return (
    <section
      ref={sectionRef}
      id="about"
      className="about-section"
    >
      <div className="section-label">
        <span>01</span>
        <span>ABOUT</span>
      </div>

      <div className="about-content">
        <div className="about-heading">
          <p>MAINFRAME</p>
          <h2>DEVELOPER</h2>
        </div>

        <div className="about-details">
          <div className="experience-number">
            <span>5+</span>
            <small>YEARS OF EXPERIENCE</small>
          </div>

          <p className="about-text">
            I am a Mainframe Developer with 5+ years of experience
            working across banking and insurance domains, building,
            enhancing and supporting enterprise applications.
          </p>

          <p className="about-text">
            My experience includes application development,
            impact analysis, defect resolution, production support,
            batch monitoring, testing and deployment support.
          </p>
        </div>
      </div>

      <div className="about-technologies">
        <span>COBOL</span>
        <span>JCL</span>
        <span>DB2</span>
        <span>CICS</span>
        <span>VSAM</span>
        <span>IMS DB</span>
        <span>SQL</span>
      </div>
    </section>
  )
}

export default About
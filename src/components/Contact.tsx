import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Contact() {
  const contactRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray<HTMLElement>(
        '.contact-animate'
      )

      gsap.set(elements, {
        y: 40,
        opacity: 0
      })

      gsap.to(elements, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: contactRef.current,
          start: 'top 75%',
          once: true
        }
      })
    }, contactRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={contactRef}
      id="contact"
      className="contact"
    >
      <div className="section-header contact-animate">
        <p>CONTACT</p>
        <h2>Let's connect</h2>
      </div>

      <div className="contact-content">
        <p className="contact-animate">
          Interested in discussing a Mainframe opportunity or
          enterprise application project? Feel free to get in touch.
        </p>

        <div className="contact-links contact-animate">
          <a href="mailto:janibashasyed2016@gmail.com" aria-label="Send email to Jani Basha">
            EMAIL ME
          </a>

          <a
            href="https://www.linkedin.com/in/syed-mahaboob-jani-basha-2912291a9/"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Jani Basha LinkedIn profile"
          >
            LINKEDIN
          </a>

          <a href="tel:+919502065671"
            aria-label="Call Jani Basha"
          >
            CALL ME
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
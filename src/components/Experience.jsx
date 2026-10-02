import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Experience() {
  const sectionRef = useRef(null)

  const experience = [
    {
      year: '2021',
      company: 'COFORGE',
      role: 'Graduate Engineer Trainee',
      description:
        'Joined Coforge and began professional training in Mainframe technologies.',
    },
    {
      year: '2022',
      company: 'COFORGE',
      role: 'Mainframe Developer',
      description:
        'Joined the Utica Mutual Insurance project and worked on enterprise Mainframe applications.',
    },
    {
      year: '2023 — 2024',
      company: 'COFORGE',
      role: 'Mainframe Developer',
      description:
        'Continued application development, enhancements, testing and production support for the insurance project.',
    },
    {
      year: '2025',
      company: 'COFORGE → INFOSYS',
      role: 'Mainframe Developer',
      description:
        'Transitioned from Coforge to Infosys and moved into the Charles Schwab banking and financial services project.',
    },
    {
      year: '2025 — PRESENT',
      company: 'INFOSYS · CHARLES SCHWAB',
      role: 'Mainframe Developer',
      description:
        'Working on enterprise Mainframe applications involving COBOL, JCL, DB2 and CICS.',
    },
  ]

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const header = section.querySelector('.experience-header')
    const items = section.querySelectorAll('.experience-item')

    gsap.fromTo(
      header,
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 72%',
          once: true,
        },
      }
    )

    gsap.fromTo(
      items,
      {
        y: 45,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 62%',
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
      id="experience"
      className="experience-section"
    >
      <div className="section-label">
        <span>02</span>
        <span>EXPERIENCE</span>
      </div>

      <div className="experience-header">
        <h2>
          A JOURNEY
          <span>THROUGH CODE.</span>
        </h2>

        <p>
          From Mainframe training to supporting enterprise
          applications across insurance and banking.
        </p>
      </div>

      <div className="experience-list">
        {experience.map((item, index) => (
          <article
            className="experience-item"
            key={`${item.year}-${item.company}`}
          >
            <div className="experience-index">
              {String(index + 1).padStart(2, '0')}
            </div>

            <div className="experience-year">
              {item.year}
            </div>

            <div className="experience-info">
              <p className="experience-company">
                {item.company}
              </p>

              <h3>{item.role}</h3>

              <p className="experience-description">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience
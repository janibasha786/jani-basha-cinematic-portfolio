import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Skills() {
  const skillsRef = useRef<HTMLElement>(null)

  const skills = [
    'COBOL',
    'JCL',
    'DB2',
    'CICS',
    'VSAM',
    'IMS DB',
    'SQL',
    'SDSF',
    'TSO',
    'Production Support',
    'Debugging',
    'Impact Analysis'
  ]

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const skillItems = gsap.utils.toArray<HTMLElement>('.skill-item')

      // Scroll reveal
      gsap.set(skillItems, {
        y: 30,
        opacity: 0
      })

      gsap.to(skillItems, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: skillsRef.current,
          start: 'top 75%',
          once: true
        }
      })

      // Hover animation
      skillItems.forEach((item) => {
        item.addEventListener('mouseenter', () => {
          gsap.to(item, {
            scale: 1.05,
            y: -5,
            duration: 0.25,
            ease: 'power2.out'
          })
        })

        item.addEventListener('mouseleave', () => {
          gsap.to(item, {
            scale: 1,
            y: 0,
            duration: 0.25,
            ease: 'power2.out'
          })
        })
      })
    }, skillsRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={skillsRef}
      id="skills"
      className="skills"
    >
      <div className="section-header">
        <p>SKILLS</p>
        <h2>Tools and technologies</h2>
      </div>

      <div className="skills-list">
        {skills.map((skill) => (
          <div className="skill-item" key={skill}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
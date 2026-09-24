import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Expertise() {
  const expertiseRef = useRef<HTMLElement>(null)

  const expertise = [
    {
      number: '01',
      title: 'COBOL',
      description: 'Enterprise application development and maintenance.'
    },
    {
      number: '02',
      title: 'JCL',
      description: 'Batch job development, execution and production support.'
    },
    {
      number: '03',
      title: 'DB2',
      description: 'SQL development, data processing and performance analysis.'
    },
    {
      number: '04',
      title: 'CICS',
      description: 'Online transaction processing and application support.'
    },
    {
      number: '05',
      title: 'VSAM',
      description: 'File processing and enterprise data management.'
    },
    {
      number: '06',
      title: 'IMS',
      description: 'Hierarchical database processing and DL/I programming.'
    }
  ]

  useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    gsap.set('.expertise-card', {
      y: 60,
      opacity: 0
    })

    gsap.to('.expertise-card', {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: expertiseRef.current,
        start: 'top 75%',
        once: true
      }
    })
  }, expertiseRef)

  return () => ctx.revert()
}, [])

  return (
    <section
      ref={expertiseRef}
      id="expertise"
      className="expertise"
    >
      <div className="section-header">
        <p>EXPERTISE</p>
        <h2>Core technologies I work with</h2>
      </div>

      <div className="expertise-grid">
        {expertise.map((item) => (
          <div className="expertise-card" key={item.number}>
            <span>{item.number}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Expertise
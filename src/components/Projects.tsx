import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function ProjectsNew() {
  const projectsRef = useRef<HTMLElement>(null)

  const projects = [
    {
      number: '01',
      title: 'Charles Schwab',
      role: 'Mainframe Developer',
      domain: 'Banking & Financial Services',
      description:
        'Supported enterprise mainframe applications across banking and financial services, including Reverse Distribution Mechanism (RDM) and ANEX initiatives.',
      responsibilities: [
        'Performed impact analysis for application changes and enhancements.',
        'Developed and maintained COBOL and JCL components.',
        'Performed batch monitoring, debugging and production support.',
        'Investigated defects and validated fixes through functional and regression testing.',
        'Supported deployment activities and production issue resolution.'
      ],
      technologies:
        'COBOL · JCL · DB2 · CICS · z/OS · Production Support'
    },
    {
      number: '02',
      title: 'Utica National Insurance',
      role: 'Mainframe Developer',
      domain: 'Insurance',
      description:
        'Developed, enhanced and supported enterprise mainframe applications involved in insurance claim processing.',
      responsibilities: [
        'Developed and maintained COBOL programs and JCL batch jobs.',
        'Worked with DB2, IMS DB and VSAM for enterprise data processing.',
        'Supported CICS online applications and transaction processing.',
        'Performed impact analysis, debugging and defect resolution.',
        'Handled production incidents and supported application maintenance.'
      ],
      technologies:
        'COBOL · JCL · DB2 · IMS DB · VSAM · CICS · z/OS'
    }
  ]

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.project-card', {
        y: 60,
        opacity: 0
      })

      gsap.to('.project-card', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: projectsRef.current,
          start: 'top 75%',
          once: true
        }
      })
    }, projectsRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={projectsRef} id="projects" className="projects">
      <div className="section-header">
        <p>PROJECTS</p>
        <h2>Selected enterprise work</h2>
      </div>

      <div className="projects-list">
        {projects.map((project) => (
          <div className="project-card" key={project.number}>
            <span>{project.number}</span>

            <div className="project-info">
              <h3>{project.title}</h3>

              <div className="project-meta">
                <span>{project.role}</span>
                <span>{project.domain}</span>
              </div>

              <p>{project.description}</p>

              <ul>
                {project.responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <small>{project.technologies}</small>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProjectsNew
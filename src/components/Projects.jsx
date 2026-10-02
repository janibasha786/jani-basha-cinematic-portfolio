import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Projects() {
  const sectionRef = useRef(null)

  const projects = [
    {
      number: '01',
      title: 'CHARLES SCHWAB',
      category: 'BANKING · FINANCIAL SERVICES',

      description:
        'Worked on enterprise Mainframe applications supporting banking and financial services workflows. My role covered application development, impact analysis, functional validation, regression testing and production support across business-critical batch processing.',

      work:
        'A key area of work involved RDM processing for negative-rate scenarios, including validation of share destruction across a multi-million-account platform. I performed impact analysis, validated functional changes and supported regression and end-to-end testing across daily, monthly and yearly workflows.',

      technologies: [
        'COBOL',
        'JCL',
        'DB2',
        'CICS',
      ],

      highlights: [
        'RDM Negative-Rate Processing',
        'Share Destruction Validation',
        'Impact Analysis',
        'Regression & E2E Testing',
        'Daily / Monthly / Yearly Workflows',
        '50+ Production Batch Jobs',
        'HEN & TUP Environments',
        'Job Failure & Abend Analysis',
        'Production Support',
        'Migration Validation',
      ],
    },

    {
      number: '02',
      title: 'UTICA MUTUAL',
      category: 'INSURANCE',

      description:
        'Worked on enterprise Mainframe applications supporting insurance business operations. The role involved application development, enhancements, defect resolution, testing and production support across established Mainframe processing workflows.',

      work:
        'Worked with existing application functionality to understand business and technical requirements, implement enhancements and validate changes through testing. Supported defect investigation and production issues while maintaining reliability of existing insurance processing.',

      technologies: [
        'COBOL',
        'JCL',
        'DB2',
        'VSAM',
        'IMS DB',
      ],

      highlights: [
        'Application Development',
        'Application Enhancements',
        'Program Logic Analysis',
        'Defect Investigation',
        'Functional Testing',
        'Regression Testing',
        'Production Issue Analysis',
        'Batch Processing',
        'DB2 Data Validation',
        'Production Support',
      ],
    },
  ]

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const intro = section.querySelector('.projects-intro')
    const cards = section.querySelectorAll('.project-card')

    gsap.fromTo(
      intro,
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
      cards,
      {
        y: 45,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.75,
        stagger: 0.15,
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
        if (
          trigger.trigger === section ||
          section.contains(trigger.trigger)
        ) {
          trigger.kill()
        }
      })
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="projects-section"
    >
      <div className="section-label">
        <span>03</span>
        <span>PROJECTS</span>
      </div>

      <div className="projects-intro">
        <h2>
          WORK THAT
          <span>MATTERS.</span>
        </h2>

        <p>
          Enterprise Mainframe applications across
          banking and insurance.
        </p>
      </div>

      <div className="projects-list">
        {projects.map((project) => (
          <article
            className="project-card"
            key={project.number}
          >
            <div className="project-number">
              {project.number}
            </div>

            <div className="project-main">
              <p className="project-category">
                {project.category}
              </p>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <p className="project-work">
                {project.work}
              </p>

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            <div className="project-highlights">
              {project.highlights.map((highlight) => (
                <span key={highlight}>
                  {highlight}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
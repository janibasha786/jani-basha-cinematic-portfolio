const projects = [
  {
    number: "01",
    title: "Charles Schwab – RDM Processing",
    domain: "Banking / Financial Services",
    technologies: [
      "COBOL",
      "JCL",
      "DB2",
      "Mainframe",
    ],
    description:
      "Worked on RDM processing, including changes related to negative-rate processing and share destruction requirements.",
    responsibilities: [
      "Performed impact analysis for application changes.",
      "Implemented and supported required application changes.",
      "Performed validation and testing of changes.",
      "Supported deployment activities.",
      "Provided production incident support.",
      "Monitored and supported 50+ production batch jobs.",
    ],
  },
  {
    number: "02",
    title: "ANEX Account Number Conversion",
    domain: "Banking / Financial Services",
    technologies: [
      "COBOL",
      "JCL",
      "DB2",
      "Batch Processing",
    ],
    description:
      "Worked on application changes associated with the conversion of ANEX account numbers from 8-digit to 9-digit format.",
    responsibilities: [
      "Analyzed application impact of account number changes.",
      "Identified affected processing and data areas.",
      "Supported development and validation activities.",
      "Performed testing of application changes.",
    ],
  },
  {
    number: "03",
    title: "Utica National Insurance – Claims Processing",
    domain: "Insurance",
    technologies: [
      "COBOL",
      "JCL",
      "DB2",
      "VSAM",
      "IMS DB",
      "CICS",
    ],
    description:
      "Worked on enterprise insurance applications supporting claims processing and related business workflows.",
    responsibilities: [
      "Developed and enhanced COBOL applications.",
      "Worked with batch and online processing.",
      "Supported claims processing workflows.",
      "Worked with Entry and Loss databases.",
      "Implemented table-driven validations.",
      "Worked with diaries and remarks processing.",
    ],
  },
  {
    number: "04",
    title: "Production Support & Application Maintenance",
    domain: "Banking & Insurance",
    technologies: [
      "COBOL",
      "JCL",
      "DB2",
      "VSAM",
      "IMS DB",
      "CICS",
    ],
    description:
      "Supported enterprise mainframe applications through incident investigation, defect resolution and application maintenance.",
    responsibilities: [
      "Investigated production incidents.",
      "Performed abend debugging and root cause analysis.",
      "Performed impact analysis for change requests.",
      "Resolved application defects.",
      "Supported batch job monitoring.",
      "Performed unit testing and application validation.",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-header">
        <p>SELECTED WORK</p>
        <h2>Projects &amp; Experience</h2>
      </div>

      <div className="projects-list">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-number">
              {project.number}
            </div>

            <div className="project-content">
              <p className="project-domain">
                {project.domain}
              </p>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

              <ul>
                {project.responsibilities.map((responsibility) => (
                  <li key={responsibility}>
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
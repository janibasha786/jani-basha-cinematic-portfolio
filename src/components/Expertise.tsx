const expertise = [
  {
    title: "COBOL Development",
    description:
      "Development and enhancement of enterprise COBOL applications, business logic implementation, defect resolution and application maintenance.",
    technologies: ["COBOL", "Subprograms", "File Processing"],
  },
  {
    title: "JCL & Batch Processing",
    description:
      "Working with batch jobs, job execution, monitoring, troubleshooting and production support.",
    technologies: ["JCL", "SDSF", "DFSORT"],
  },
  {
    title: "DB2 & SQL",
    description:
      "Working with DB2 databases and SQL for application development, data processing, validation and production issue analysis.",
    technologies: ["DB2", "SQL", "Cursors", "Queries"],
  },
  {
    title: "CICS",
    description:
      "Experience with CICS-based online processing and supporting applications involving online and batch processing.",
    technologies: ["CICS", "Online Processing"],
  },
  {
    title: "IMS DB & VSAM",
    description:
      "Experience working with IMS DB and VSAM as part of enterprise application processing and data management.",
    technologies: ["IMS DB", "VSAM"],
  },
  {
    title: "Production Support",
    description:
      "Incident investigation, abend debugging, root cause analysis, impact analysis, defect resolution and production support.",
    technologies: ["RCA", "Incident Management", "Impact Analysis"],
  },
];

export default function Expertise() {
  return (
    <section id="expertise">
      <div className="section-header">
        <p>EXPERTISE</p>
        <h2>Core areas of expertise</h2>
      </div>

      <div className="expertise-grid">
        {expertise.map((item) => (
          <div className="expertise-card" key={item.title}>
            <h3>{item.title}</h3>

            <p>{item.description}</p>

            <div className="technology-tags">
              {item.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
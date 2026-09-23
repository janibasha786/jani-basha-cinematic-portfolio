const skillCategories = [
  {
    title: "Mainframe Development",
    skills: [
      "COBOL",
      "JCL",
      "CICS",
      "IMS DB",
      "VSAM",
    ],
  },
  {
    title: "Database & SQL",
    skills: [
      "DB2",
      "SQL",
    ],
  },
  {
    title: "Mainframe Tools",
    skills: [
      "TSO/ISPF",
      "SDSF",
      "File-AID",
      "Expeditor",
      "Easytrieve",
    ],
  },
  {
    title: "Utilities",
    skills: [
      "DFSORT",
      "IDCAMS",
      "IEBGENER",
    ],
  },
  {
    title: "Development & Support",
    skills: [
      "Impact Analysis",
      "Production Support",
      "Incident Management",
      "Root Cause Analysis",
      "Defect Resolution",
      "Unit Testing",
      "Batch Monitoring",
      "Deployment Support",
    ],
  },
  {
    title: "Methodologies & Tools",
    skills: [
      "SDLC",
      "Agile",
      "Jira",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-header">
        <p>TECHNICAL SKILLS</p>
        <h2>Technologies &amp; tools</h2>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category) => (
          <div className="skill-category" key={category.title}>
            <h3>{category.title}</h3>

            <div className="skill-list">
              {category.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
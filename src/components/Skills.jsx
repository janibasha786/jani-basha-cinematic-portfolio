function Skills() {
  const skills = [
    {
      category: 'MAINFRAME',
      items: ['COBOL', 'JCL', 'DB2', 'CICS', 'VSAM', 'IMS DB'],
    },
    {
      category: 'TOOLS',
      items: ['TSO / ISPF', 'SDSF', 'File-AID', 'Expeditor'],
    },
    {
      category: 'DATABASE',
      items: ['SQL', 'DB2 SQL'],
    },
    {
      category: 'ENGINEERING',
      items: [
        'Production Support',
        'Debugging',
        'Impact Analysis',
        'Batch Monitoring',
        'Testing',
      ],
    },
  ]

  return (
    <section className="skills-section">
      <div className="section-label">
        <span>04</span>
        <span>SKILLS</span>
      </div>

      <div className="skills-intro">
        <h2>
          TOOLS OF
          <span>THE TRADE.</span>
        </h2>

        <p>
          Technologies and engineering practices used to
          build, maintain and support enterprise applications.
        </p>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-group" key={skill.category}>
            <p className="skill-category">
              {skill.category}
            </p>

            <div className="skill-items">
              {skill.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
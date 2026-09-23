import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  return (
    <section id="about" className="about">
      <div className="section-header">
        <p>ABOUT ME</p>
        <h2>Building and supporting enterprise mainframe applications</h2>
      </div>

      <div className="about-content">
        <div className="about-text">
          <p>
            I am a Mainframe Developer with 5+ years of experience working
            across Banking and Insurance domains.
          </p>

          <p>
            My experience includes application development, enhancements,
            impact analysis, defect resolution, production support, batch
            monitoring and unit testing using technologies such as COBOL,
            JCL, DB2, VSAM, IMS DB and CICS.
          </p>

          <p>
            I have worked across the software development lifecycle, from
            understanding business requirements and analyzing application
            impact to development, testing, deployment and production
            incident support.
          </p>

          <p>
            I also work with mainframe development and support tools including
            TSO/ISPF, SDSF, File-AID and Expeditor, along with SQL and
            Easytrieve.
          </p>
        </div>

        <div className="about-stats">
          <div>
            <strong>5+</strong>
            <span>Years Experience</span>
          </div>

          <div>
            <strong>2</strong>
            <span>Industry Domains</span>
          </div>

          <div>
            <strong>6+</strong>
            <span>Core Mainframe Technologies</span>
          </div>
        </div>
      </div>
    </section>
  );
}
import './style.css'

import Background from './components/Background'
import BackgroundAtmosphere from './components/BackgroundAtmosphere'

import Navbar from './components/Navbar'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

import SmoothScroll from './components/SmoothScroll'

import HeroAnimation from './components/HeroAnimation'
import AboutAnimation from './components/AboutAnimation'
import ExperienceAnimation from './components/ExperienceAnimation'
import ProjectsAnimation from './components/ProjectsAnimation'
import SkillsAnimation from './components/SkillsAnimation'
import ContactAnimation from './components/ContactAnimation'
import NavbarAnimation from './components/NavbarAnimation'
import NavigationTracker from './components/NavigationTracker'

function App() {
  return (
    <main className="portfolio">
      <SmoothScroll />

      {/* HERO */}
      <section className="hero">
        <Background />

        <div className="hero-content hero-animate">
          <p className="eyebrow">
            MAINFRAME DEVELOPER
          </p>

          <h1>
            JANI
            <span>BASHA</span>
          </h1>

          <p className="hero-description">
            Building and supporting enterprise applications
            across banking and insurance domains.
          </p>

          <div className="hero-meta">
            <span>5+ YEARS EXPERIENCE</span>
            <span>COBOL · JCL · DB2 · CICS</span>
          </div>
        </div>
      </section>

      {/* AMBIENT BACKGROUND FOR NON-HERO SECTIONS */}
      <BackgroundAtmosphere />

      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />

      <Navbar />

      <HeroAnimation />
      <AboutAnimation />
      <ExperienceAnimation />
      <ProjectsAnimation />
      <SkillsAnimation />
      <ContactAnimation />
      <NavbarAnimation />
      <NavigationTracker />
    </main>
  )
}

export default App
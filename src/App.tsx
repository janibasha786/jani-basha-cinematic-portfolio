import { useLayoutEffect } from 'react'
import gsap from 'gsap'

import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Expertise from './components/Expertise'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useLayoutEffect(() => {
    const loader = document.querySelector('.page-loader')

    if (!loader) return

    gsap.to(loader, {
      opacity: 0,
      duration: 0.8,
      delay: 0.3,
      ease: 'power2.out',
      onComplete: () => {
        loader.remove()
      }
    })
  }, [])

  return (
    <>
      <div className="page-loader">
        <span>JANI BASHA</span>
      </div>

      <Nav />
      <Hero />
      <About />
      <Expertise />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

export default App
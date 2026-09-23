import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import photo from '../assets/photo.jpg'

gsap.registerPlugin(ScrollTrigger)

const MAX_ANGLE = 28

function angleForProgress(p: number) {
  if (p < 0.25) return -MAX_ANGLE * (p / 0.25)

  if (p < 0.5)
    return -MAX_ANGLE * (1 - (p - 0.25) / 0.25)

  if (p < 0.75)
    return MAX_ANGLE * ((p - 0.5) / 0.25)

  return MAX_ANGLE * (1 - (p - 0.75) / 0.25)
}

export default function Hero() {
  const pinRef = useRef<HTMLDivElement>(null)
  const frameRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: pinRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.3,

        onUpdate: (self) => {
          const angle = angleForProgress(self.progress)

          gsap.set(frameRef.current, {
            rotateY: angle,
            z: -Math.abs(angle) * 1.1,
          })
        },
      })
    }, pinRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={pinRef}
      id="home"
      className="relative h-[320vh]"
    >
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">

        {/* Your headline */}
        <div className="absolute left-[8%] top-1/2 -translate-y-1/2">
          <p className="text-sm tracking-[0.3em]">
            MAINFRAME DEVELOPER
          </p>

          <h1 className="mt-4 text-6xl font-bold">
            Jani Basha
          </h1>

          <p className="mt-6 max-w-xl">
            Mainframe Developer with 5+ years of experience
            in enterprise application development and
            production support across Banking and Insurance.
          </p>

          <div className="mt-8 flex gap-4">
            <a href="#projects">View Projects</a>
            <a href="/resume.pdf" download>
              Download Resume
            </a>
          </div>
        </div>

        {/* 3D Photo */}
        <div style={{ perspective: '1000px' }}>
          <div
            ref={frameRef}
            className="h-[410px] w-[300px] border border-[var(--line)]"
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            <img
              src={photo}
              className="h-full w-full object-cover"
              alt="Jani Basha"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
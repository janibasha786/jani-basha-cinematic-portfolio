import { useEffect, useRef } from 'react'

function BackgroundAtmosphere() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')

    let width = 0
    let height = 0
    let animationFrame

    const mouse = {
      x: 0,
      y: 0,
    }

    const targetMouse = {
      x: 0,
      y: 0,
    }

    const particles = []

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5)

      width = window.innerWidth
      height = window.innerHeight

      canvas.width = width * ratio
      canvas.height = height * ratio

      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`

      ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
    }

    resize()

    const particleCount =
      window.innerWidth < 768 ? 18 : 32

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 0.8 + 0.25,
        speed: Math.random() * 0.12 + 0.025,
        drift: Math.random() * 0.15 - 0.075,
        opacity: Math.random() * 0.22 + 0.05,
      })
    }

    const handleMouseMove = (event) => {
      targetMouse.x =
        event.clientX / window.innerWidth - 0.5

      targetMouse.y =
        event.clientY / window.innerHeight - 0.5
    }

    window.addEventListener(
      'mousemove',
      handleMouseMove,
      { passive: true }
    )

    window.addEventListener(
      'resize',
      resize
    )

    let currentSection = 'about'

    const sections = [
      {
        id: 'about',
        name: 'about',
      },
      {
        id: 'experience',
        name: 'experience',
      },
      {
        id: 'projects',
        name: 'projects',
      },
      {
        id: 'skills',
        name: 'skills',
      },
      {
        id: 'contact',
        name: 'contact',
      },
    ]

    const observers = []

    sections.forEach((section) => {
      const element =
        document.getElementById(section.id)

      if (!element) return

      const observer =
        new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                currentSection = section.name
              }
            })
          },
          {
            threshold: 0.25,
          }
        )

      observer.observe(element)
      observers.push(observer)
    })

    const drawGrid = (
      opacity = 0.035,
      spacing = 90
    ) => {
      ctx.save()

      ctx.strokeStyle = `rgba(90, 150, 125, ${opacity})`
      ctx.lineWidth = 1

      const offsetX =
        (mouse.x * 10) % spacing

      const offsetY =
        (mouse.y * 10) % spacing

      for (
        let x = offsetX;
        x < width;
        x += spacing
      ) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
        ctx.stroke()
      }

      for (
        let y = offsetY;
        y < height;
        y += spacing
      ) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
        ctx.stroke()
      }

      ctx.restore()
    }

    const drawGlow = (
      x,
      y,
      radius,
      opacity
    ) => {
      const gradient =
        ctx.createRadialGradient(
          x,
          y,
          0,
          x,
          y,
          radius
        )

      gradient.addColorStop(
        0,
        `rgba(39, 201, 139, ${opacity})`
      )

      gradient.addColorStop(
        0.45,
        `rgba(39, 201, 139, ${opacity * 0.25})`
      )

      gradient.addColorStop(
        1,
        'rgba(39, 201, 139, 0)'
      )

      ctx.fillStyle = gradient

      ctx.beginPath()
      ctx.arc(
        x,
        y,
        radius,
        0,
        Math.PI * 2
      )
      ctx.fill()
    }

    const drawParticles = (
      intensity = 1
    ) => {
      particles.forEach((particle) => {
        particle.y -= particle.speed
        particle.x += particle.drift

        if (particle.y < -10) {
          particle.y = height + 10
          particle.x = Math.random() * width
        }

        if (particle.x < -10) {
          particle.x = width + 10
        }

        if (particle.x > width + 10) {
          particle.x = -10
        }

        ctx.beginPath()

        ctx.arc(
          particle.x,
          particle.y,
          particle.radius,
          0,
          Math.PI * 2
        )

        ctx.fillStyle =
          `rgba(110, 180, 150, ${
            particle.opacity * intensity
          })`

        ctx.fill()
      })
    }

    const drawScanLine = (
      time,
      opacity = 0.035
    ) => {
      const position =
        (time * 0.025) %
        (height + 200)

      const gradient =
        ctx.createLinearGradient(
          0,
          position - 100,
          0,
          position + 100
        )

      gradient.addColorStop(
        0,
        'rgba(39, 201, 139, 0)'
      )

      gradient.addColorStop(
        0.5,
        `rgba(39, 201, 139, ${opacity})`
      )

      gradient.addColorStop(
        1,
        'rgba(39, 201, 139, 0)'
      )

      ctx.fillStyle = gradient

      ctx.fillRect(
        0,
        position - 100,
        width,
        200
      )
    }

    const draw = (time) => {
      ctx.clearRect(
        0,
        0,
        width,
        height
      )

      mouse.x +=
        (targetMouse.x - mouse.x) * 0.025

      mouse.y +=
        (targetMouse.y - mouse.y) * 0.025

      if (currentSection === 'projects') {
        // Extremely restrained for two-column readability.

        drawGrid(0.018, 110)

        drawGlow(
          width * 0.08,
          height * 0.18,
          300,
          0.025
        )

        drawGlow(
          width * 0.92,
          height * 0.82,
          300,
          0.02
        )

        drawParticles(0.25)

        drawScanLine(
          time,
          0.015
        )
      } else if (currentSection === 'experience') {
        drawGrid(0.028, 85)

        drawGlow(
          width * 0.15,
          height * 0.35,
          380,
          0.035
        )

        drawGlow(
          width * 0.85,
          height * 0.7,
          360,
          0.025
        )

        drawParticles(0.55)

        drawScanLine(
          time,
          0.025
        )
      } else if (currentSection === 'skills') {
        drawGrid(0.032, 75)

        drawGlow(
          width * 0.78,
          height * 0.25,
          420,
          0.04
        )

        drawGlow(
          width * 0.2,
          height * 0.75,
          350,
          0.025
        )

        drawParticles(0.65)

        drawScanLine(
          time,
          0.03
        )
      } else if (currentSection === 'contact') {
        drawGrid(0.025, 95)

        drawGlow(
          width * 0.5,
          height * 0.45,
          500,
          0.04
        )

        drawParticles(0.45)

        drawScanLine(
          time,
          0.025
        )
      } else {
        // ABOUT

        drawGrid(0.035, 90)

        drawGlow(
          width * 0.2,
          height * 0.3,
          420,
          0.045
        )

        drawGlow(
          width * 0.85,
          height * 0.75,
          360,
          0.025
        )

        drawParticles(0.55)

        drawScanLine(
          time,
          0.025
        )
      }

      animationFrame =
        requestAnimationFrame(draw)
    }

    animationFrame =
      requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(
        animationFrame
      )

      window.removeEventListener(
        'mousemove',
        handleMouseMove
      )

      window.removeEventListener(
        'resize',
        resize
      )

      observers.forEach(
        (observer) => observer.disconnect()
      )
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="ambient-background"
      aria-hidden="true"
    />
  )
}

export default BackgroundAtmosphere
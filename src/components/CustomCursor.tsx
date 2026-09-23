import { useEffect, useState } from 'react'

export default function CustomCursor() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  })

  const [enabled, setEnabled] = useState(false)

  useEffect(() => {

    const mediaQuery = window.matchMedia(
      '(hover: hover)'
    )

    setEnabled(mediaQuery.matches)

    if (!mediaQuery.matches) return

    const moveCursor = (event: MouseEvent) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      })
    }

    window.addEventListener(
      'mousemove',
      moveCursor
    )

    return () => {
      window.removeEventListener(
        'mousemove',
        moveCursor
      )
    }

  }, [])

  if (!enabled) return null

  return (
    <>
      <div
        className="pointer-events-none fixed z-[9998] h-2 w-2 rounded-full"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
        }}
      />

      <div
        className="pointer-events-none fixed z-[9997] h-8 w-8 rounded-full border"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  )
}
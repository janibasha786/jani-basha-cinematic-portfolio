import { useEffect, useState } from 'react'

export default function Loader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
    }, 1400)

    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
      <div className="font-mono text-sm">
        <p>&gt; INITIALIZING SYSTEM...</p>
        <p>&gt; LOADING COBOL MODULES...</p>
        <p>&gt; CONNECTING TO DB2...</p>
        <p>&gt; SYSTEM READY_</p>
      </div>
    </div>
  )
}
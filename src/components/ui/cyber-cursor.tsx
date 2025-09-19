'use client'

import { useEffect, useState } from 'react'

export default function CyberCursor() {
  const [isMounted, setIsMounted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isClicking, setIsClicking] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    // Set mounted flag to ensure client-side only rendering
    setIsMounted(true)
    
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isInteractive = target.tagName === 'BUTTON' || 
                           target.closest('button') || 
                           target.tagName === 'A' || 
                           target.closest('a')
      setIsHovering(!!isInteractive)
    }

    document.addEventListener('mousemove', updateMousePosition)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseover', handleMouseOver)

    return () => {
      document.removeEventListener('mousemove', updateMousePosition)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  // Don't render anything until mounted on client side
  if (!isMounted) {
    return null
  }

  return (
    <>
      {/* Main cursor */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          transform: `translate(${mousePosition.x - 10}px, ${mousePosition.y - 10}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <div className={`w-5 h-5 rounded-full border-2 transition-all duration-200
          ${isHovering 
            ? 'border-finn-purple bg-finn-purple/50 scale-125' 
            : 'border-electric-blue bg-electric-blue/30'
          } 
          ${isClicking ? 'scale-75' : ''}`} />
      </div>

      {/* Glowing trail */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          transform: `translate(${mousePosition.x - 25}px, ${mousePosition.y - 25}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      >
        <div className={`w-12 h-12 rounded-full border transition-all duration-300 animate-pulse
          ${isHovering 
            ? 'border-finn-purple/60 scale-125' 
            : 'border-steel-pink/40'
          }
          ${isClicking ? 'scale-150 border-steel-pink/80' : 'scale-100'}`} />
      </div>

      {/* Outer glow */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9997]"
        style={{
          transform: `translate(${mousePosition.x - 40}px, ${mousePosition.y - 40}px)`,
          transition: 'transform 0.5s ease-out'
        }}
      >
        <div className={`w-20 h-20 rounded-full blur-sm transition-all duration-400
          ${isHovering 
            ? 'bg-finn-purple/20 scale-150' 
            : 'bg-cyber-cyan/10'
          }
          ${isClicking ? 'scale-125 bg-cyber-cyan/20' : 'scale-100'}`} />
      </div>
    </>
  )
}
'use client'

import React, { useEffect, useState } from 'react'

interface GlitchTextProps {
  text: string
  className?: string
  intensity?: 'low' | 'medium' | 'high'
  trigger?: 'hover' | 'always' | 'click'
}

export function GlitchText({ 
  text, 
  className = '', 
  intensity = 'medium',
  trigger = 'hover' 
}: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(trigger === 'always')

  const intensitySettings = {
    low: { duration: '0.3s', frequency: '0.1s' },
    medium: { duration: '0.5s', frequency: '0.05s' },
    high: { duration: '0.8s', frequency: '0.03s' }
  }

  const settings = intensitySettings[intensity]

  const handleMouseEnter = () => {
    if (trigger === 'hover') setIsGlitching(true)
  }

  const handleMouseLeave = () => {
    if (trigger === 'hover') setIsGlitching(false)
  }

  const handleClick = () => {
    if (trigger === 'click') {
      setIsGlitching(true)
      setTimeout(() => setIsGlitching(false), 1000)
    }
  }

  return (
    <span
      className={`glitch-text relative inline-block ${className} ${isGlitching ? 'animate-pulse' : ''}`}
      data-text={text}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{
        '--glitch-duration': settings.duration,
        '--glitch-frequency': settings.frequency,
      } as React.CSSProperties}
    >
      {text}
      {isGlitching && (
        <>
          <span
            className="absolute top-0 left-0 text-steel-pink"
            style={{
              animation: `glitch-anim-1 ${settings.duration} infinite linear alternate-reverse`,
              clipPath: 'polygon(0 0%, 100% 0%, 100% 5%, 0 5%)',
            }}
          >
            {text}
          </span>
          <span
            className="absolute top-0 left-0 text-cyber-cyan"
            style={{
              animation: `glitch-anim-2 ${settings.duration} infinite linear alternate-reverse`,
              clipPath: 'polygon(0 85%, 100% 85%, 100% 95%, 0 95%)',
            }}
          >
            {text}
          </span>
        </>
      )}
    </span>
  )
}

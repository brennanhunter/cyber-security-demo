'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface GSAPSplitCharsProps {
  children: string
  className?: string
  delay?: number
  duration?: number
  stagger?: number
}

export default function GSAPSplitChars({ 
  children, 
  className = '', 
  delay = 0, 
  duration = 0.6,
  stagger = 0.02 
}: GSAPSplitCharsProps) {
  const textRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!textRef.current) return

    // Split text into words first, then characters within each word
    const text = textRef.current
    const words = children.split(' ')
    
    // Create spans for each word, with character spans inside
    const wordElements = words.map((word, wordIndex) => {
      const chars = word.split('').map((char, charIndex) => 
        `<span style="display: inline-block; opacity: 0; transform: translateY(50px);" data-char="${wordIndex}-${charIndex}">${char}</span>`
      ).join('')
      
      return `<span style="display: inline-block; margin-right: 0.25em;">${chars}</span>`
    }).join('')
    
    text.innerHTML = wordElements
    const charElements = text.querySelectorAll('[data-char]')

    // GSAP animation with ScrollTrigger
    gsap.fromTo(charElements, 
      {
        opacity: 0,
        y: 50,
        rotationX: -90
      },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: duration,
        delay: delay,
        stagger: stagger,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: text,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse"
        }
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [children, delay, duration, stagger])

  return (
    <h3 ref={textRef} className={className}>
      {children}
    </h3>
  )
}

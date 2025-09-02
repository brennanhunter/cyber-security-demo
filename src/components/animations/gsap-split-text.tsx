'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface GSAPSplitTextProps {
  children: string
  className?: string
  delay?: number
  duration?: number
  stagger?: number
}

export default function GSAPSplitText({ 
  children, 
  className = '', 
  delay = 0, 
  duration = 0.6,
  stagger = 0.02 
}: GSAPSplitTextProps) {
  const textRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (!textRef.current) return

    // Split text into words only
    const text = textRef.current
    const words = children.split(' ')
    
    // Create spans for each word
    const wordElements = words.map((word, index) => 
      `<span style="display: inline-block; opacity: 0; transform: translateY(50px); margin-right: 0.25em;" data-word="${index}">${word}</span>`
    ).join('')
    
    text.innerHTML = wordElements
    const wordElements_nodes = text.querySelectorAll('[data-word]')

    // GSAP animation with ScrollTrigger - word by word
    gsap.fromTo(wordElements_nodes, 
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
        stagger: stagger * 3, // Slower stagger for words
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: text,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [children, delay, duration, stagger])

  return (
    <p ref={textRef} className={className}>
      {children}
    </p>
  )
}

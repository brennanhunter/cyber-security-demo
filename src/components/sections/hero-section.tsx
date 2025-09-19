'use client'

import { useRef, useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import ScrambleText, { ScrambleTextHandle } from '@/components/animations/scramble-text'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import WebGL from '../animations/WebGL'
import CyberCursor from '@/components/ui/cyber-cursor'

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false)
  const primaryBtnRef = useRef<ScrambleTextHandle>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Simple fallback for SSR
  if (!isMounted) {
    return (
      <section className="relative min-h-screen flex items-center justify-between bg-raisin-black overflow-hidden">
        <div className="relative z-20 w-full max-w-6xl mx-auto px-4 lg:px-8 flex flex-col items-center justify-start pt-20 min-h-screen text-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight font-alliance">
              World-Leading Cybersecurity.
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-gray-400 font-alliance">
              Powered By <span className="glitch text-steel-pink" data-text="AI.">AI.</span>
            </h2>
            <p className="body-large max-w-4xl mx-auto leading-relaxed text-gray-300 pt-4">
              Standing as the Ultimate Defenders of the Global Digital Ecosystem, Protecting Connections, 
              Empowering Innovations, and Securing a Resilient Future for Generations to Come
            </p>
            <div className="pt-8">
              <Button 
                variant="ghost" 
                size="lg" 
                className="px-8 py-4 border-2 border-steel-pink text-steel-pink hover:bg-steel-pink/10 font-semibold transition-all duration-300 hover:scale-105 pulse-glow"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
        {/* Static Sun Image for SSR */}
        <div 
          className="absolute left-1/2 transform -translate-x-1/2 z-10 md:hidden pointer-events-none" 
          style={{ bottom: '-70vh' }}
        >
          <Image 
            src="/images/SunImage.png" 
            alt="Sun" 
            width={1800}
            height={1800}
            className="w-[180vw] h-[180vw]"
            style={{ 
              maxWidth: 'none',
              maxHeight: 'none'
            }}
            priority
          />
        </div>
        <div 
          className="absolute left-1/2 transform -translate-x-1/2 z-10 hidden md:block pointer-events-none" 
          style={{ bottom: '-150vh' }}
        >
          <Image 
            src="/images/SunImage.png" 
            alt="Sun" 
            width={1000}
            height={1000}
            className="w-[100vw] h-[100vw]"
            style={{ 
              maxWidth: 'none',
              maxHeight: 'none'
            }}
            priority
          />
        </div>
      </section>
    )
  }

  return <ClientMotionHeroSection primaryBtnRef={primaryBtnRef} sectionRef={sectionRef} />
}

// Separate component with motion hooks that only runs on client
function ClientMotionHeroSection({ primaryBtnRef, sectionRef }: { 
  primaryBtnRef: React.RefObject<ScrambleTextHandle | null>;
  sectionRef: React.RefObject<HTMLElement | null>;
}) {
  const [isMotionReady, setIsMotionReady] = useState(false)
  
  // Always call hooks, but with null target initially
  const { scrollYProgress } = useScroll({
    target: isMotionReady ? sectionRef : undefined,
    offset: ["start start", "end start"]
  })
  
  const sunRotation = useTransform(scrollYProgress, [0, 1], [0, 90])

  useEffect(() => {
    setIsMotionReady(true)
  }, [])
  
  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-between bg-raisin-black overflow-hidden cursor-none">
      {/* Custom Cyber Cursor */}
      <CyberCursor />
      
      {/* Interactive Shader Background */}
      <div className="absolute inset-0 pointer-events-auto">
        <WebGL />
      </div>
      
      {/* Solid raisin-black layer with transparent center */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 65% 65% at center center, 
            transparent 0%, 
            transparent 60%, 
            #191d30 100%
          )`
        }}
      />
      
      {/* Subtle overlay to ensure text readability */}
      <div className="absolute inset-0 bg-raisin-black/20 pointer-events-none" />
      
      {/* Content Container */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-4 lg:px-8 flex flex-col items-center justify-start pt-20 min-h-screen text-center pointer-events-none">
        
        {/* Main Content */}
        <div className="space-y-8">
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight font-alliance">
            World-Leading Cybersecurity.
          </h1>
          
          {/* Subheading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-gray-400 font-alliance">
            Powered By <span className="glitch text-steel-pink" data-text="AI.">AI.</span>
          </h2>
          
          {/* Description */}
          <p className="body-large max-w-4xl mx-auto leading-relaxed text-gray-300 pt-4">
            Standing as the Ultimate Defenders of the Global Digital Ecosystem, Protecting Connections, 
            Empowering Innovations, and Securing a Resilient Future for Generations to Come
          </p>
          
          {/* CTA Button */}
          <div className="pt-8 pointer-events-auto">
            <Button 
              variant="ghost" 
              size="lg" 
              className="px-8 py-4 border-2 border-steel-pink text-steel-pink hover:bg-steel-pink/10 font-semibold transition-all duration-300 hover:scale-105 pulse-glow"
              onMouseEnter={() => primaryBtnRef.current?.startScramble()}
            >
              <ScrambleText ref={primaryBtnRef}>
                Get Started
              </ScrambleText>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Sun Image - Mobile */}
      <motion.div 
        className="absolute left-1/2 transform -translate-x-1/2 z-10 md:hidden pointer-events-none" 
        style={{ 
          bottom: '-70vh',
          rotate: sunRotation
        }}
      >
        <Image 
          src="/images/SunImage.png" 
          alt="Sun" 
          width={1800}
          height={1800}
          className="w-[180vw] h-[180vw]"
          style={{ 
            maxWidth: 'none',
            maxHeight: 'none'
          }}
          priority
        />
      </motion.div>
      
      {/* Sun Image - Desktop */}
      <motion.div 
        className="absolute left-1/2 transform -translate-x-1/2 z-10 hidden md:block pointer-events-none" 
        style={{ 
          bottom: '-150vh',
          rotate: sunRotation
        }}
      >
        <Image 
          src="/images/SunImage.png" 
          alt="Sun" 
          width={1000}
          height={1000}
          className="w-[100vw] h-[100vw]"
          style={{ 
            maxWidth: 'none',
            maxHeight: 'none'
          }}
          priority
        />
      </motion.div>
    </section>
  )
}

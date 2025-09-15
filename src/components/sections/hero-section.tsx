'use client'

import { useRef } from 'react'
import { Button } from '@/components/ui/button'
import ScrambleText, { ScrambleTextHandle } from '@/components/animations/scramble-text'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import HeroBG from '@/components/animations/HeroBG'

export default function HeroSection() {
  const primaryBtnRef = useRef<ScrambleTextHandle>(null)
  const sectionRef = useRef<HTMLElement>(null)
  
  // Scroll-based rotation for the sun
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  })
  
  // Transform scroll progress to rotation (0 to 90 degrees for slower rotation)
  const sunRotation = useTransform(scrollYProgress, [0, 1], [0, 90])
  
  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-between bg-raisin-black overflow-hidden cursor-none">
      {/* Interactive Shader Background */}
      <div className="absolute inset-0">
        <HeroBG />
      </div>
      
      {/* Solid raisin-black layer with transparent center */}
      <div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 65% 65% at center center, 
            transparent 0%, 
            transparent 60%, 
            #191d30 100%
          )`
        }}
      />
      
      {/* Subtle overlay to ensure text readability */}
      <div className="absolute inset-0 bg-raisin-black/20" />
      
  {/* Content Container */}
  <div className="relative z-20 w-full max-w-6xl mx-auto px-4 lg:px-8 flex flex-col items-center justify-start pt-20 min-h-screen text-center">
        
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
          <div className="pt-8">
            <Button 
              variant="ghost" 
              size="lg" 
              className="px-8 py-4 border-2 border-steel-pink text-steel-pink hover:bg-steel-pink/10 font-semibold transition-all duration-300 hover:scale-105"
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
        className="absolute left-1/2 transform -translate-x-1/2 z-10 md:hidden" 
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
        className="absolute left-1/2 transform -translate-x-1/2 z-10 hidden md:block" 
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

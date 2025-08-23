'use client'

import { useRef } from 'react'
import { Button } from '@/components/ui/button'
import ScrambleText, { ScrambleTextHandle } from '@/components/animations/scramble-text'

export default function HeroSection() {
  const primaryBtnRef = useRef<ScrambleTextHandle>(null)
  const secondaryBtnRef = useRef<ScrambleTextHandle>(null)
  return (
    <section className="relative min-h-screen flex items-center justify-between bg-raisin-black overflow-hidden">
      {/* Fire-like gradient background */}
      <div className="absolute inset-0 bg-gradient-radial from-steel-pink/40 via-finn-purple/30 to-transparent" 
           style={{
             background: `
               radial-gradient(ellipse 80% 60% at 50% 100%, 
                 #D108CE40 0%, 
                 #511F6460 25%, 
                 #2D1B6930 50%, 
                 transparent 70%
               ),
               radial-gradient(ellipse 60% 40% at 20% 80%, 
                 #D108CE30 0%, 
                 #511F6440 40%, 
                 transparent 70%
               ),
               radial-gradient(ellipse 60% 40% at 80% 80%, 
                 #511F6440 0%, 
                 #D108CE30 40%, 
                 transparent 70%
               ),
               linear-gradient(to bottom, 
                 #212227 0%, 
                 #21222700 50%,
                 transparent 100%
               )
             `
           }}
      />
  {/* Brand jumbo experimental background layer */}
  <div className="hero-jumbo-layer" aria-hidden />
      
      {/* Additional flame-like effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-radial from-steel-pink/60 via-finn-purple/40 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-gradient-radial from-finn-purple/50 via-steel-pink/30 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-gradient-radial from-steel-pink/50 via-finn-purple/30 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array.from({ length: 48 }, (_, i) => (
            <div key={i} className="border-r border-steel-pink/20 h-full" />
          ))}
        </div>
      </div>
      
  {/* Content Container */}
  <div className="relative z-20 w-full max-w-6xl mx-auto px-4 lg:px-8 flex flex-col items-center justify-start pt-20 min-h-screen text-center">
        
        {/* Main Content */}
        <div className="space-y-8">
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            World-Leading Cybersecurity.
          </h1>
          
          {/* Subheading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-gray-400">
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
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cyber-cyan animate-bounce z-20">
        <div className="flex flex-col items-center">
          <span className="body-small mb-2">Scroll to Explore</span>
          <div className="w-6 h-10 border-2 border-cyber-cyan rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyber-cyan rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import StackingCards from '@/components/ui/stacking-cards'
import { Button } from '@/components/ui/button'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import GSAPSplitText from '@/components/animations/gsap-split-text'

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isClient, setIsClient] = useState(false)
  const [particles, setParticles] = useState<Array<{
    id: number
    left: string
    animationDelay: string
    animationDuration: string
  }>>([])
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Initialize particles only on client
  useEffect(() => {
    setIsClient(true)
    const newParticles = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 3}s`,
      animationDuration: `${3 + Math.random() * 2}s`
    }))
    setParticles(newParticles)
  }, [])

  // Transform scroll progress to line visibility with staggered timing
  const line1Opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]) // Delayed start for "Enterprise"
  const line1Y = useTransform(scrollYProgress, [0.1, 0.3], [200, 0]) // Starts much further down, "rises from ground"
  
  const line2Opacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]) // More delayed for "Cybersecurity"
  const line2Y = useTransform(scrollYProgress, [0.2, 0.4], [50, 0])
  
  const line3Opacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]) // Even more delayed for "Services"
  const line3Y = useTransform(scrollYProgress, [0.3, 0.5], [50, 0])



  // Unstick animation - when description gets close (around 80-90% scroll), heading unsticks

  const headingLines = ['Enterprise', 'Cybersecurity', 'Services']
  const lineAnimations = [
    { opacity: line1Opacity, y: line1Y },
    { opacity: line2Opacity, y: line2Y },
    { opacity: line3Opacity, y: line3Y }
  ]
  // Company data with logos and names
  const companies = [
    { name: 'Microsoft', hasLogo: false },
    { name: 'Amazon', hasLogo: false },
    { name: 'Google', hasLogo: false },
    { name: 'Meta', hasLogo: false },
    { name: 'Apple', hasLogo: false },
    { name: 'Tesla', hasLogo: true, logo: '/logos/tesla-logo.svg' },
    { name: 'Netflix', hasLogo: false },
    { name: 'Spotify', hasLogo: false },
    { name: 'Adobe', hasLogo: false },
    { name: 'Salesforce', hasLogo: false },
    { name: 'Oracle', hasLogo: false },
    { name: 'IBM', hasLogo: false },
    { name: 'Intel', hasLogo: false },
    { name: 'NVIDIA', hasLogo: false },
    { name: 'PayPal', hasLogo: false },
    { name: 'Uber', hasLogo: false },
    { name: 'Airbnb', hasLogo: false },
    { name: 'Twitter', hasLogo: false },
    { name: 'LinkedIn', hasLogo: false },
    { name: 'GitHub', hasLogo: false },
    { name: 'Slack', hasLogo: false },
    { name: 'Zoom', hasLogo: false },
    { name: 'DocuSign', hasLogo: false },
    { name: 'Shopify', hasLogo: false }
  ]

  return (
    <section className="relative bg-raisin-black">
      {/* Seamless blend with hero - gradient meeting point */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-raisin-black/80 to-raisin-black" />
      
      {/* Pink-purple gradient for services section */}
      <div className="absolute inset-0"
           style={{
             background: `
               linear-gradient(135deg, 
                 #D108CE20 0%, 
                 #511F6430 25%, 
                 #2D1B6925 50%, 
                 transparent 75%
               ),
               radial-gradient(ellipse 120% 80% at 30% 60%, 
                 #D108CE15 0%, 
                 #511F6420 40%, 
                 transparent 70%
               ),
               radial-gradient(ellipse 100% 70% at 80% 40%, 
                 #511F6418 0%, 
                 #D108CE12 50%, 
                 transparent 75%
               )
             `
           }}
      />
      
      {/* Additional subtle fire continuation from hero */}
      <div className="absolute top-0 inset-x-0 h-96 opacity-30"
           style={{
             background: `
               radial-gradient(ellipse 100% 80% at 50% 0%, 
                 transparent 0%, 
                 #511F6420 30%, 
                 #D108CE15 60%,
                 transparent 100%
               )
             `
           }}
      />
      
      {/* Enhanced Glassmorphism company banner */}
      <div className="relative w-full overflow-hidden z-10">
        {/* Background with subtle pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-gradient-to-r from-steel-pink/10 via-transparent to-finn-purple/10" />
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }} />
        </div>
        
        {/* Main banner content */}
        <div className="relative backdrop-blur-lg bg-gradient-to-r from-white/8 via-white/12 to-white/8 border-y border-white/20 py-8 shadow-2xl">
          {/* Top accent line */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-steel-pink/50 to-transparent" />
          
          {/* Scrolling companies container */}
          <div className="flex animate-scroll whitespace-nowrap">
            {/* First set of companies */}
            {companies.map((company, index) => (
              <div
                key={`first-${index}`}
                className="group inline-flex items-center justify-center mx-10 py-2 px-4 rounded-lg transition-all duration-500 hover:bg-white/10 hover:backdrop-blur-xl"
              >
                {company.hasLogo ? (
                  <img 
                    src={company.logo} 
                    alt={company.name}
                    className="h-8 w-auto group-hover:scale-110 transition-all duration-300 brightness-0 invert group-hover:brightness-100 group-hover:invert-0"
                  />
                ) : (
                  <span className="text-ghost-white/80 font-bold text-xl tracking-wider group-hover:text-steel-pink group-hover:scale-110 transition-all duration-300 drop-shadow-lg">
                    {company.name}
                  </span>
                )}
                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-steel-pink/20 to-finn-purple/20 blur-xl -z-10" />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {companies.map((company, index) => (
              <div
                key={`second-${index}`}
                className="group inline-flex items-center justify-center mx-10 py-2 px-4 rounded-lg transition-all duration-500 hover:bg-white/10 hover:backdrop-blur-xl"
              >
                {company.hasLogo ? (
                  <img 
                    src={company.logo} 
                    alt={company.name}
                    className="h-8 w-auto group-hover:scale-110 transition-all duration-300 brightness-0 invert group-hover:brightness-100 group-hover:invert-0"
                  />
                ) : (
                  <span className="text-ghost-white/80 font-bold text-xl tracking-wider group-hover:text-steel-pink group-hover:scale-110 transition-all duration-300 drop-shadow-lg">
                    {company.name}
                  </span>
                )}
                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-steel-pink/20 to-finn-purple/20 blur-xl -z-10" />
              </div>
            ))}
          </div>
          
          {/* Bottom accent line */}
          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-finn-purple/50 to-transparent" />
          
          {/* Side shimmer effects */}
          <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-transparent via-steel-pink/60 to-transparent animate-pulse" />
          <div className="absolute top-0 right-0 h-full w-1 bg-gradient-to-b from-transparent via-finn-purple/60 to-transparent animate-pulse" />
        </div>
        
        {/* Enhanced fade edges with brand colors */}
        <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-raisin-black via-raisin-black/80 to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-raisin-black via-raisin-black/80 to-transparent pointer-events-none z-10" />
        
        {/* Floating particles effect - only render on client to avoid hydration mismatch */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {isClient && particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute w-1 h-1 bg-steel-pink/30 rounded-full animate-float"
              style={{
                left: particle.left,
                animationDelay: particle.animationDelay,
                animationDuration: particle.animationDuration
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Services content area */}
      <div ref={containerRef} className="relative z-10">
        {/* Sticky container for heading only */}
        <div className="px-4 lg:px-8 py-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-6">
              <div className="label-text">
                Trusted by Industry Leaders
              </div>
              
              {/* Main Heading - simple sticky */}
              <div className="sticky top-5 z-10">
                <div className="text-6xl md:text-8xl lg:text-9xl font-bold text-center leading-tight font-alliance py-8">
                  {headingLines.map((line, index) => (
                    <motion.div
                      key={index}
                      style={{
                        opacity: lineAnimations[index].opacity,
                        y: lineAnimations[index].y
                      }}
                      className="my-4"
                    >
                      {line}
                    </motion.div>
                  ))}
                </div>
                
                {/* Decorative line */}
                <div className="flex justify-center">
                  <div className="w-1/3 h-1 bg-finn-purple"></div>
                </div>
              </div>
              
              {/* Spacer to create scroll content */}
              <div className="h-[100vh]"></div>
            </div>
          </div>
        </div>
        
        {/* Description text - outside sticky container, this will cause unstick */}
        <div className="px-4 lg:px-8 py-4 pb-24 md:pb-48">
          <div className="text-center">
            <GSAPSplitText 
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center w-[95%] md:w-[88%] mx-auto leading-relaxed font-eau-sans"
              delay={0.2}
              duration={0.8}
              stagger={0.015}
            >
              Our comprehensive security solutions protect the world&apos;s most innovative companies from evolving cyber threats through cutting-edge technology and expert analysis.
            </GSAPSplitText>
          </div>
        </div>
          
        {/* Stacking Cards */}
        <div className="px-4 lg:px-8">
          <StackingCards />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Explore More Services Button */}
          <div className="mt-16 mb-32 text-center relative z-40">
            <Button variant="secondary" size="lg" className="border-2 border-finn-purple/60 hover:border-finn-purple hover:shadow-lg hover:shadow-finn-purple/25 transform hover:scale-105">
              Explore More Services
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient transition to raisin black - positioned to not overlap button */}
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-b from-transparent to-raisin-black z-5" />
    </section>
  )
}

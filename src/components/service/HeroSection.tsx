'use client'

import { PortableText } from '@portabletext/react'
import ScrambleText, { ScrambleTextHandle } from '@/components/animations/scramble-text'
import { useRef } from 'react'

interface HeroSectionProps {
  service: {
    title: string
    heroMedia?: {
      type?: string
      asset?: {
        asset?: {
          url?: string
        }
      }
      alt?: string
    }
    category?: {
      title: string
      description?: string
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    overview?: any[]
  }
}

export default function HeroSection({ service }: HeroSectionProps) {
  const primaryButtonRef = useRef<ScrambleTextHandle>(null)
  const secondaryButtonRef = useRef<ScrambleTextHandle>(null)

  // Define rich text components for client-side use
  const richTextComponents = {
    block: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      normal: ({children}: any) => <p className="mb-4 leading-relaxed">{children}</p>,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      h2: ({children}: any) => <h2 className="text-2xl font-bold mb-4 text-gray-900">{children}</h2>,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      h3: ({children}: any) => <h3 className="text-xl font-bold mb-3 text-gray-800">{children}</h3>,
    },
    marks: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      strong: ({children}: any) => <strong className="font-bold text-cyber-cyan">{children}</strong>,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      em: ({children}: any) => <em className="italic text-ghost-white/70">{children}</em>,
    },
    list: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      bullet: ({children}: any) => <ul className="list-disc list-inside space-y-2 mb-4 ml-4">{children}</ul>,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      number: ({children}: any) => <ol className="list-decimal list-inside space-y-2 mb-4 ml-4">{children}</ol>,
    }
  }

  return (
    <section className="relative min-h-screen bg-raisin-black flex items-center overflow-hidden">
      {/* Animated Background Layer */}
      <div className="hero-jumbo-layer"></div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      
      {/* Geometric Shapes */}
      <div className="absolute top-20 right-20 opacity-20 hidden lg:block">
        <div className="metallic-cube"></div>
      </div>
      <div className="absolute bottom-32 left-16 opacity-15 hidden lg:block">
        <div className="metallic-pyramid"></div>
      </div>
      <div className="absolute top-1/2 right-1/4 opacity-10 hidden xl:block">
        <div className="metallic-sphere"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            {/* Team & Service Hierarchy */}
            {service.category && (
              <div className="flex flex-col space-y-4 mb-8">
                {/* Team Badge */}
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-steel-pink/20 to-cyber-cyan/20 border border-steel-pink/30 rounded-full text-cyber-cyan text-sm font-medium backdrop-blur-sm font-alliance w-fit">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  {service.category.title} Division
                </div>

                {/* Service Type Indicator */}
                <div className="flex items-center text-ghost-white/70">
                  <div className="w-2 h-2 bg-steel-pink rounded-full mr-3 animate-pulse"></div>
                  <span className="text-sm font-alliance tracking-wide uppercase">
                    Specialized Service
                  </span>
                </div>
              </div>
            )}

            {/* Main Heading with Glitch Effect */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight font-alliance">
              <span 
                className="glitch-gradient text-gradient-cyber" 
                data-text={service.title}
              >
                {service.title}
              </span>
            </h1>

            {/* Service Overview */}
            {service.overview && (
              <div className="text-xl text-ghost-white/80 mb-10 leading-relaxed max-w-2xl">
                <PortableText value={service.overview} components={richTextComponents} />
              </div>
            )}

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                className="group inline-flex items-center justify-center px-8 py-4 gradient-primary hover:gradient-secondary text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 pulse-glow font-alliance"
                onMouseEnter={() => primaryButtonRef.current?.startScramble()}
              >
                <ScrambleText ref={primaryButtonRef}>
                  Secure My Organization
                </ScrambleText>
                <svg className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              
              <a 
                href="#scope" 
                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-cyber-cyan/50 text-cyber-cyan hover:border-cyber-cyan hover:bg-cyber-cyan/10 font-semibold rounded-lg transition-all duration-300 backdrop-blur-sm font-alliance"
                onMouseEnter={() => secondaryButtonRef.current?.startScramble()}
              >
                <ScrambleText ref={secondaryButtonRef}>
                  Explore Details
                </ScrambleText>
                <svg className="w-5 h-5 ml-3 transition-transform group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center lg:justify-start mt-12 space-x-8">
              <div className="flex items-center text-ghost-white/60">
                <svg className="w-6 h-6 text-cyber-cyan mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-sm font-alliance">SOC 2 Certified</span>
              </div>
              <div className="flex items-center text-ghost-white/60">
                <svg className="w-6 h-6 text-steel-pink mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-sm font-alliance">24/7 Response</span>
              </div>
              <div className="flex items-center text-ghost-white/60">
                <svg className="w-6 h-6 text-electric-violet mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-sm font-alliance">Zero-Trust</span>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Media */}
          {service.heroMedia?.asset?.asset && (
            <div className="relative">
              {service.heroMedia.type === 'video' ? (
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-steel-pink/20 border border-steel-pink/20">
                  <video
                    className="w-full h-auto"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={service.heroMedia.asset.asset.url} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-raisin-black/50 via-transparent to-transparent pointer-events-none"></div>
                </div>
              ) : (
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-cyber-cyan/20 border border-cyber-cyan/20 group">
                  <picture>
                    {/* WebP format with fallback */}
                    {service.heroMedia.asset.asset.url && (
                      <>
                        <source 
                          srcSet={`${service.heroMedia.asset.asset.url}?format=webp&w=800&q=80`} 
                          type="image/webp" 
                        />
                        <source 
                          srcSet={`${service.heroMedia.asset.asset.url}?format=jpg&w=800&q=80`} 
                          type="image/jpeg" 
                        />
                        <img 
                          src={`${service.heroMedia.asset.asset.url}?w=800&q=80`}
                          alt={service.heroMedia.alt || service.title}
                          className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="eager"
                          fetchPriority="high"
                        />
                      </>
                    )}
                  </picture>
                  <div className="absolute inset-0 bg-gradient-to-t from-raisin-black/60 via-transparent to-transparent pointer-events-none"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-steel-pink/10 via-transparent to-cyber-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              )}

              {/* Floating Action Card */}
              <div className="absolute -bottom-8 -left-8 bg-gradient-to-r from-raisin-black/95 to-charcoal-gray/95 backdrop-blur-xl border border-steel-pink/30 rounded-xl p-6 shadow-2xl hidden lg:block">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-steel-pink to-electric-violet rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-ghost-white font-semibold font-alliance">Free Consultation</p>
                    <p className="text-ghost-white/60 text-sm">Schedule in 60 seconds</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center animate-bounce">
          <div className="w-6 h-10 border-2 border-cyber-cyan/50 rounded-full flex justify-center mb-2">
            <div className="w-1 h-3 bg-cyber-cyan rounded-full mt-2 animate-pulse"></div>
          </div>
          <svg className="w-4 h-4 text-cyber-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
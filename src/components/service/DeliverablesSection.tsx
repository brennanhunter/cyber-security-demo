'use client'

import ScrambleText, { ScrambleTextHandle } from '@/components/animations/scramble-text'
import { useRef } from 'react'

interface Deliverable {
  title: string
  description: string
  format: string
  order: number
}

interface DeliverablesSectionProps {
  service: {
    deliverables?: Deliverable[]
  }
}

// Icon mapping based on deliverable format
const getDeliverableIcon = (format: string) => {
  const formatLower = format.toLowerCase()
  
  if (formatLower.includes('pdf') || formatLower.includes('report') || formatLower.includes('document')) {
    return (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  }
  
  if (formatLower.includes('video') || formatLower.includes('presentation') || formatLower.includes('demo')) {
    return (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    )
  }
  
  if (formatLower.includes('excel') || formatLower.includes('spreadsheet') || formatLower.includes('data')) {
    return (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  }
  
  if (formatLower.includes('dashboard') || formatLower.includes('portal') || formatLower.includes('interface')) {
    return (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  }
  
  if (formatLower.includes('code') || formatLower.includes('script') || formatLower.includes('software')) {
    return (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  }
  
  if (formatLower.includes('training') || formatLower.includes('workshop') || formatLower.includes('session')) {
    return (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  }
  
  // Default icon for other formats
  return (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
    </svg>
  )
}

export default function DeliverablesSection({ service }: DeliverablesSectionProps) {
  const portfolioButtonRef = useRef<ScrambleTextHandle>(null)

  if (!service.deliverables || service.deliverables.length === 0) {
    return null
  }

  // Sort deliverables by order
  const sortedDeliverables = [...service.deliverables].sort((a, b) => a.order - b.order)

  return (
    <section className="relative py-24 bg-gradient-to-br from-charcoal-gray via-raisin-black to-charcoal-gray overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyber-cyan/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-steel-pink/10 to-transparent rounded-full blur-3xl"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-40 left-16 opacity-20 hidden lg:block">
        <div className="w-6 h-6 bg-electric-violet/30 transform rotate-45 animate-spin-slow"></div>
      </div>
      <div className="absolute bottom-32 right-24 opacity-15 hidden lg:block">
        <div className="w-8 h-8 border-2 border-cyber-cyan/50 rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-steel-pink/20 to-cyber-cyan/20 border border-steel-pink/30 rounded-full text-cyber-cyan text-sm font-medium mb-6 backdrop-blur-sm font-alliance">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2-2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
            Comprehensive Deliverables
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ghost-white mb-6 leading-tight font-alliance">
            <span className="text-gradient-cyber">
              What You&apos;ll Receive
            </span>
          </h2>
          
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-steel-pink to-transparent w-32"></div>
            <div className="w-3 h-3 bg-steel-pink rounded-full mx-4 animate-pulse"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-cyber-cyan to-transparent w-32"></div>
          </div>

          <p className="text-xl text-ghost-white/70 max-w-3xl mx-auto font-alliance">
            Actionable intelligence and comprehensive documentation designed to provide immediate value and establish long-term security resilience.
          </p>
        </div>

        {/* Enhanced Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {sortedDeliverables.map((deliverable, index) => (
            <div 
              key={deliverable.order}
              className="group relative bg-gradient-to-br from-charcoal-gray/80 to-raisin-black/60 backdrop-blur-xl rounded-2xl p-8 border border-steel-pink/20 hover:border-steel-pink/40 hover:shadow-2xl hover:shadow-steel-pink/10 transition-all duration-500 transform hover:-translate-y-3"
            >
              {/* Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-steel-pink/5 via-transparent to-cyber-cyan/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Enhanced Order Badge */}
              <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-r from-steel-pink to-cyber-cyan text-white rounded-full flex items-center justify-center text-lg font-bold shadow-xl group-hover:scale-110 transition-transform duration-300 border-4 border-raisin-black">
                {deliverable.order}
              </div>

              {/* Enhanced Icon */}
              <div className="mb-8 relative z-10">
                <div className="w-20 h-20 bg-gradient-to-r from-cyber-cyan/20 to-electric-violet/20 rounded-2xl flex items-center justify-center text-cyber-cyan group-hover:from-cyber-cyan/30 group-hover:to-electric-violet/30 group-hover:scale-105 transition-all duration-300 border border-cyber-cyan/30">
                  {getDeliverableIcon(deliverable.format)}
                </div>
                
                {/* Floating Animation Dots */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-steel-pink rounded-full animate-ping opacity-75"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-cyber-cyan rounded-full animate-pulse opacity-60"></div>
              </div>

              {/* Enhanced Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-ghost-white mb-4 font-alliance group-hover:text-cyber-cyan transition-colors duration-300">
                  {deliverable.title}
                </h3>
                
                <div className="mb-6">
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-cyber-cyan/20 to-electric-violet/20 text-cyber-cyan border border-cyber-cyan/30 backdrop-blur-sm font-alliance">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    {deliverable.format}
                  </span>
                </div>

                <p className="text-ghost-white/80 leading-relaxed">
                  {deliverable.description}
                </p>
              </div>

              {/* Animated Bottom Border */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-steel-pink via-cyber-cyan to-electric-violet rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Enhanced Value Proposition */}
        <div className="relative bg-gradient-to-br from-charcoal-gray/80 to-raisin-black/60 backdrop-blur-xl border border-steel-pink/20 rounded-3xl p-8 lg:p-12 shadow-2xl">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-steel-pink/5 via-transparent to-cyber-cyan/5 rounded-3xl"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <div className="w-24 h-24 bg-gradient-to-r from-steel-pink to-cyber-cyan rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-bold text-ghost-white mb-6 font-alliance">
                <span className="text-gradient-cyber">Excellence Guaranteed</span>
              </h3>
              
              <p className="text-xl text-ghost-white/80 mb-12 max-w-2xl mx-auto">
                Every deliverable undergoes rigorous quality assurance and is backed by our commitment to cybersecurity excellence. 
                You&apos;ll receive actionable intelligence, not just documentation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-steel-pink/20 to-cyber-cyan/20 backdrop-blur-sm border border-steel-pink/30 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-steel-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-bold text-ghost-white mb-2 font-alliance">Rapid Deployment</h4>
                <p className="text-sm text-ghost-white/70">Strategic turnaround optimized for immediate impact</p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyber-cyan/20 to-electric-violet/20 backdrop-blur-sm border border-cyber-cyan/30 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-cyber-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                  </svg>
                </div>
                <h4 className="font-bold text-ghost-white mb-2 font-alliance">Threat-Specific</h4>
                <p className="text-sm text-ghost-white/70">Customized for your unique threat landscape</p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-electric-violet/20 to-steel-pink/20 backdrop-blur-sm border border-electric-violet/30 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-electric-violet" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-ghost-white mb-2 font-alliance">Continuous Intel</h4>
                <p className="text-sm text-ghost-white/70">Ongoing threat intelligence and strategic support</p>
              </div>
            </div>            {/* Enhanced CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-steel-pink to-cyber-cyan hover:from-steel-pink/80 hover:to-cyber-cyan/80 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 pulse-glow font-alliance"
                onMouseEnter={() => portfolioButtonRef.current?.startScramble()}
              >
                <ScrambleText ref={portfolioButtonRef}>
                  Download Sample Portfolio
                </ScrambleText>
                <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </button>
              
              <button className="inline-flex items-center px-8 py-4 border-2 border-cyber-cyan/50 text-cyber-cyan hover:border-cyber-cyan hover:bg-cyber-cyan/10 font-semibold rounded-lg transition-all duration-300 backdrop-blur-sm font-alliance">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Discuss Requirements
              </button>
            </div>
          </div>

          {/* Animated Border */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-steel-pink via-cyber-cyan to-electric-violet rounded-b-3xl opacity-50"></div>
        </div>
      </div>
    </section>
  )
}
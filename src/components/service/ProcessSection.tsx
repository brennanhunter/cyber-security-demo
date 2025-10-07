'use client'

import { PortableText } from '@portabletext/react'
import ScrambleText, { ScrambleTextHandle } from '@/components/animations/scramble-text'
import { useRef } from 'react'

interface ProcessStep {
  title: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  detail: any[]
  duration?: string
  order: number
}

interface ProcessSectionProps {
  service: {
    process?: ProcessStep[]
  }
}

export default function ProcessSection({ service }: ProcessSectionProps) {
  const consultationButtonRef = useRef<ScrambleTextHandle>(null)

  if (!service.process || service.process.length === 0) {
    return null
  }

  // Sort process steps by order
  const sortedProcess = [...service.process].sort((a, b) => a.order - b.order)

  // Define rich text components for client-side use
  const richTextComponents = {
    block: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      normal: ({children}: any) => <p className="mb-4 leading-relaxed text-ghost-white/90">{children}</p>,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      h3: ({children}: any) => <h4 className="text-lg font-semibold mb-3 text-cyber-cyan font-alliance">{children}</h4>,
    },
    marks: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      strong: ({children}: any) => <strong className="font-bold text-steel-pink">{children}</strong>,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      em: ({children}: any) => <em className="italic text-cyber-cyan">{children}</em>,
    },
    list: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      bullet: ({children}: any) => <ul className="list-none space-y-2 mb-4">{children}</ul>,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      number: ({children}: any) => <ol className="list-none space-y-2 mb-4">{children}</ol>,
    },
    listItem: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      bullet: ({children}: any) => (
        <li className="flex items-start">
          <div className="w-1.5 h-1.5 bg-steel-pink rounded-full mr-3 mt-2 flex-shrink-0"></div>
          <span className="text-ghost-white/90">{children}</span>
        </li>
      ),
    }
  }

  return (
    <section className="relative py-24 bg-gradient-to-br from-raisin-black via-charcoal-gray to-raisin-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-steel-pink/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-cyber-cyan/10 to-transparent rounded-full blur-3xl"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-32 right-16 opacity-20 hidden lg:block">
        <div className="w-8 h-8 border border-steel-pink transform rotate-45 animate-pulse"></div>
      </div>
      <div className="absolute bottom-48 left-20 opacity-15 hidden lg:block">
        <div className="w-6 h-6 bg-cyber-cyan/30 rounded-full animate-ping"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-steel-pink/20 to-cyber-cyan/20 border border-steel-pink/30 rounded-full text-cyber-cyan text-sm font-medium mb-6 backdrop-blur-sm font-alliance">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
            Methodology & Execution
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ghost-white mb-6 leading-tight font-alliance">
            <span className="text-gradient-cyber">
              Our Proven Process
            </span>
          </h2>
          
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-steel-pink to-transparent w-32"></div>
            <div className="w-3 h-3 bg-steel-pink rounded-full mx-4 animate-pulse"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-cyber-cyan to-transparent w-32"></div>
          </div>

          <p className="text-xl text-ghost-white/70 max-w-3xl mx-auto font-alliance">
            A systematic, battle-tested approach designed to deliver exceptional security outcomes while maintaining complete transparency throughout every phase.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Enhanced Timeline Line - Hidden on mobile, visible on desktop */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-0.5 top-0 bottom-0">
            <div className="w-1 h-full bg-gradient-to-b from-steel-pink via-cyber-cyan via-electric-violet to-steel-pink rounded-full opacity-40"></div>
            <div className="absolute inset-0 w-1 bg-gradient-to-b from-steel-pink/60 to-cyber-cyan/60 rounded-full animate-pulse"></div>
          </div>

          {/* Process Steps */}
          <div className="space-y-16 lg:space-y-20">
            {sortedProcess.map((step, index) => (
              <div key={step.order} className="relative group">
                {/* Step Number Circle - Enhanced */}
                <div className="flex items-center justify-center lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 mb-8 lg:mb-0 z-20">
                  <div className="relative">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-steel-pink to-cyber-cyan text-white rounded-full text-xl font-bold shadow-2xl mx-auto lg:mx-0 border-4 border-raisin-black group-hover:scale-110 transition-transform duration-300">
                      {step.order}
                    </div>
                    <div className="absolute inset-0 w-16 h-16 bg-gradient-to-r from-steel-pink to-cyber-cyan rounded-full animate-pulse opacity-30"></div>
                  </div>
                </div>

                {/* Step Content - Enhanced */}
                <div className={`lg:w-5/12 ${
                  index % 2 === 0 
                    ? 'lg:pr-16 lg:text-right lg:ml-0' 
                    : 'lg:pl-16 lg:ml-7/12'
                }`}>
                  <div className="relative bg-gradient-to-br from-charcoal-gray/80 to-raisin-black/60 backdrop-blur-xl border border-steel-pink/20 rounded-2xl p-8 shadow-2xl hover:shadow-steel-pink/10 transition-all duration-500 group-hover:border-steel-pink/40">
                    {/* Content Background Effects */}
                    <div className="absolute inset-0 bg-gradient-to-r from-steel-pink/5 via-transparent to-cyber-cyan/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Step Header */}
                    <div className={`mb-6 relative z-10 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                      <h3 className="text-2xl lg:text-3xl font-bold text-ghost-white mb-4 font-alliance">
                        {step.title}
                      </h3>
                      {step.duration && (
                        <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-cyber-cyan/20 to-electric-violet/20 text-cyber-cyan border border-cyber-cyan/30 backdrop-blur-sm font-alliance">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Duration: {step.duration}
                        </div>
                      )}
                    </div>

                    {/* Step Details */}
                    <div className={`prose prose-lg max-w-none relative z-10 ${
                      index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                    }`}>
                      <div className="leading-relaxed">
                        <PortableText 
                          value={step.detail} 
                          components={richTextComponents} 
                        />
                      </div>
                    </div>

                    {/* Animated Border */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-steel-pink via-cyber-cyan to-electric-violet rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>

                {/* Enhanced Step Connector Arrow (Desktop) */}
                <div className={`hidden lg:block absolute top-8 z-10 ${
                  index % 2 === 0 
                    ? 'left-1/2 ml-8' 
                    : 'right-1/2 mr-8'
                }`}>
                  <div className={`flex items-center ${
                    index % 2 === 0 ? '' : 'flex-row-reverse'
                  }`}>
                    <div className={`w-8 h-0.5 bg-gradient-to-r ${
                      index % 2 === 0 
                        ? 'from-steel-pink/60 to-cyber-cyan/60' 
                        : 'from-cyber-cyan/60 to-steel-pink/60'
                    } opacity-60`}></div>
                    <div className={`w-2 h-2 bg-cyber-cyan rounded-full ${
                      index % 2 === 0 ? 'ml-1' : 'mr-1'
                    }`}></div>
                  </div>
                </div>

                {/* Mobile Timeline Connector */}
                {index < sortedProcess.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-12">
                    <div className="w-0.5 h-16 bg-gradient-to-b from-steel-pink to-cyber-cyan opacity-60"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center mt-24">
          <div className="relative bg-gradient-to-br from-charcoal-gray/80 to-raisin-black/60 backdrop-blur-xl border border-steel-pink/30 rounded-3xl p-8 lg:p-12 shadow-2xl max-w-3xl mx-auto">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-steel-pink/5 via-transparent to-cyber-cyan/5 rounded-3xl"></div>
            
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-r from-steel-pink to-cyber-cyan rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              
              <h3 className="text-3xl font-bold text-ghost-white mb-4 font-alliance">
                Ready to Execute?
              </h3>
              <p className="text-ghost-white/70 mb-8 text-lg max-w-xl mx-auto">
                Let&apos;s discuss your security objectives and map out a customized engagement plan using our proven methodology.
              </p>
              
              <button 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-steel-pink to-cyber-cyan hover:from-steel-pink/80 hover:to-cyber-cyan/80 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 pulse-glow font-alliance"
                onMouseEnter={() => consultationButtonRef.current?.startScramble()}
              >
                <ScrambleText ref={consultationButtonRef}>
                  Schedule Strategic Consultation
                </ScrambleText>
                <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
            
            {/* Animated Border */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-steel-pink via-cyber-cyan to-electric-violet rounded-b-3xl opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
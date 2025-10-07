'use client'

import { useState, useRef } from 'react'
import { PortableText } from '@portabletext/react'
import ScrambleText, { ScrambleTextHandle } from '@/components/animations/scramble-text'

interface FAQ {
  question: string
  answer: Array<{
    _key: string
    _type: string
    children?: Array<{
      _key: string
      _type: string
      text: string
    }>
  }>
}

interface FAQSectionProps {
  service: {
    faqs?: FAQ[]
  }
}

export default function FAQSection({ service }: FAQSectionProps) {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const callButtonRef = useRef<ScrambleTextHandle>(null)
  const messageButtonRef = useRef<ScrambleTextHandle>(null)

  if (!service.faqs || service.faqs.length === 0) {
    return null
  }

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  // Enhanced rich text components for dark cybersecurity theme
  const richTextComponents = {
    block: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      normal: ({children}: any) => (
        <p className="mb-4 last:mb-0 leading-relaxed text-ghost-white/80">{children}</p>
      ),
    },
    marks: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      strong: ({children}: any) => <strong className="font-semibold text-cyber-cyan">{children}</strong>,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      em: ({children}: any) => <em className="italic text-electric-violet">{children}</em>,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      link: ({children, value}: any) => (
        <a 
          href={value?.href} 
          className="text-cyber-cyan hover:text-electric-violet underline transition-colors duration-200"
          target="_blank" 
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ),
    },
    list: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      bullet: ({children}: any) => (
        <ul className="list-disc list-inside space-y-2 mb-4 ml-4 text-ghost-white/80">{children}</ul>
      ),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      number: ({children}: any) => (
        <ol className="list-decimal list-inside space-y-2 mb-4 ml-4 text-ghost-white/80">{children}</ol>
      ),
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-raisin-black via-charcoal-gray to-raisin-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,rgba(0,214,221,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_80%,rgba(210,29,105,0.08),transparent_50%)]"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyber-cyan/20 to-electric-violet/20 rounded-full text-sm font-medium text-cyber-cyan border border-cyber-cyan/30 backdrop-blur-sm mb-6 font-alliance">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Intelligence Briefing
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-ghost-white mb-6 font-alliance">
            <span className="text-gradient-cyber">Intelligence</span> Briefing
          </h2>
          <p className="text-xl text-ghost-white/80 max-w-2xl mx-auto leading-relaxed">
            Get tactical answers to critical questions about our cybersecurity services and how we defend your organization against advanced threats.
          </p>
        </div>

        {/* Enhanced FAQ Accordion */}
        <div className="space-y-6">
          {service.faqs.map((faq, index) => (
            <div 
              key={index}
              className="relative bg-gradient-to-br from-charcoal-gray/60 to-raisin-black/40 backdrop-blur-xl border border-cyber-cyan/20 rounded-2xl shadow-2xl hover:shadow-[0_20px_40px_rgba(0,214,221,0.2)] transition-all duration-500 overflow-hidden hover:border-electric-violet/40"
            >
              {/* Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/5 via-transparent to-electric-violet/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Floating Animation Dots */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyber-cyan rounded-full animate-pulse opacity-60"></div>
              
              {/* FAQ Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="relative z-10 w-full px-8 py-6 text-left focus:outline-none focus:ring-4 focus:ring-cyber-cyan/20 transition-all duration-300 hover:bg-cyber-cyan/10"
                aria-expanded={openFAQ === index}
                aria-controls={`faq-answer-${index}`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg md:text-xl font-semibold text-ghost-white pr-8 font-alliance group-hover:text-cyber-cyan transition-colors duration-300">
                    {faq.question}
                  </h3>
                  
                  {/* Enhanced Expand/Collapse Icon */}
                  <div className="flex-shrink-0">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-r from-steel-pink to-cyber-cyan flex items-center justify-center transition-all duration-500 shadow-lg ${
                      openFAQ === index ? 'rotate-45 scale-110' : 'rotate-0 scale-100'
                    }`}>
                      <svg 
                        className="w-5 h-5 text-white" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </button>

              {/* Enhanced FAQ Answer Content */}
              <div
                id={`faq-answer-${index}`}
                className={`transition-all duration-500 ease-in-out ${
                  openFAQ === index 
                    ? 'max-h-screen opacity-100' 
                    : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="relative z-10 px-8 pb-8 pt-2 border-t border-cyber-cyan/30">
                  <div className="prose prose-lg max-w-none">
                    <PortableText 
                      value={faq.answer} 
                      components={richTextComponents} 
                    />
                  </div>
                </div>
              </div>

              {/* Animated Bottom Border */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-steel-pink via-cyber-cyan to-electric-violet rounded-b-2xl transition-opacity duration-500 ${
                openFAQ === index ? 'opacity-100' : 'opacity-0'
              }`}></div>
            </div>
          ))}
        </div>

        {/* Enhanced Additional Help Section */}
        <div className="mt-20 text-center">
          <div className="relative bg-gradient-to-br from-charcoal-gray/80 to-raisin-black/60 backdrop-blur-xl border border-steel-pink/20 rounded-3xl p-8 lg:p-12 shadow-2xl max-w-2xl mx-auto">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-steel-pink/5 via-transparent to-cyber-cyan/5 rounded-3xl"></div>
            
            <div className="relative z-10 mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-steel-pink to-cyber-cyan rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              <h3 className="text-3xl font-bold text-ghost-white mb-6 font-alliance">
                Need <span className="text-gradient-cyber">Direct</span> Intel?
              </h3>
              
              <p className="text-ghost-white/80 mb-10 text-lg leading-relaxed">
                Our elite cybersecurity operators are standing by. Get classified briefings on your specific security challenges and threat landscape.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-steel-pink to-cyber-cyan hover:from-steel-pink/80 hover:to-cyber-cyan/80 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 pulse-glow font-alliance"
                onMouseEnter={() => callButtonRef.current?.startScramble()}
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <ScrambleText ref={callButtonRef}>
                  Schedule Tactical Briefing
                </ScrambleText>
              </button>
              
              <button 
                className="inline-flex items-center px-8 py-4 border-2 border-cyber-cyan/50 text-cyber-cyan hover:border-cyber-cyan hover:bg-cyber-cyan/10 font-semibold rounded-lg transition-all duration-300 backdrop-blur-sm font-alliance"
                onMouseEnter={() => messageButtonRef.current?.startScramble()}
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <ScrambleText ref={messageButtonRef}>
                  Send Encrypted Message
                </ScrambleText>
              </button>
            </div>

            {/* Animated Border */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-steel-pink via-cyber-cyan to-electric-violet rounded-b-3xl opacity-50"></div>
          </div>
        </div>

        {/* Enhanced Quick Contact Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group text-center p-8 bg-gradient-to-br from-charcoal-gray/60 to-raisin-black/40 backdrop-blur-xl border border-steel-pink/20 rounded-2xl shadow-xl hover:shadow-[0_10px_30px_rgba(210,29,105,0.2)] hover:border-cyber-cyan/40 transition-all duration-500">
            <div className="w-14 h-14 bg-gradient-to-r from-steel-pink/20 to-cyber-cyan/20 backdrop-blur-sm border border-steel-pink/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:border-cyber-cyan/50 group-hover:scale-110 transition-all duration-300 shadow-xl">
              <svg className="w-7 h-7 text-steel-pink group-hover:text-cyber-cyan transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="font-bold text-ghost-white mb-2 font-alliance text-lg">Rapid Response</h4>
            <p className="text-sm text-ghost-white/70">Mission-critical response within 2 hours</p>
          </div>

          <div className="group text-center p-8 bg-gradient-to-br from-charcoal-gray/60 to-raisin-black/40 backdrop-blur-xl border border-cyber-cyan/20 rounded-2xl shadow-xl hover:shadow-[0_10px_30px_rgba(0,214,221,0.2)] hover:border-electric-violet/40 transition-all duration-500">
            <div className="w-14 h-14 bg-gradient-to-r from-cyber-cyan/20 to-electric-violet/20 backdrop-blur-sm border border-cyber-cyan/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:border-electric-violet/50 group-hover:scale-110 transition-all duration-300 shadow-xl">
              <svg className="w-7 h-7 text-cyber-cyan group-hover:text-electric-violet transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="font-bold text-ghost-white mb-2 font-alliance text-lg">Elite Operators</h4>
            <p className="text-sm text-ghost-white/70">Certified cybersecurity warfare specialists</p>
          </div>

          <div className="group text-center p-8 bg-gradient-to-br from-charcoal-gray/60 to-raisin-black/40 backdrop-blur-xl border border-electric-violet/20 rounded-2xl shadow-xl hover:shadow-[0_10px_30px_rgba(139,92,246,0.2)] hover:border-steel-pink/40 transition-all duration-500">
            <div className="w-14 h-14 bg-gradient-to-r from-electric-violet/20 to-steel-pink/20 backdrop-blur-sm border border-electric-violet/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:border-steel-pink/50 group-hover:scale-110 transition-all duration-300 shadow-xl">
              <svg className="w-7 h-7 text-electric-violet group-hover:text-steel-pink transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h4 className="font-bold text-ghost-white mb-2 font-alliance text-lg">Zero-Trust Comms</h4>
            <p className="text-sm text-ghost-white/70">Military-grade encrypted communications</p>
          </div>
        </div>
      </div>
    </section>
  )
}
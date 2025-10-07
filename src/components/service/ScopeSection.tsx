'use client'

import { PortableText } from '@portabletext/react'

interface ScopeSectionProps {
  service: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    scope?: any[]
  }
}

export default function ScopeSection({ service }: ScopeSectionProps) {
  // Only render if scope exists
  if (!service.scope) return null

  // Define rich text components for client-side use
  const richTextComponents = {
    block: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      normal: ({children}: any) => <p className="mb-6 leading-relaxed text-ghost-white/90">{children}</p>,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      h2: ({children}: any) => <h3 className="text-2xl font-bold mb-4 text-cyber-cyan font-alliance">{children}</h3>,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      h3: ({children}: any) => <h4 className="text-xl font-semibold mb-3 text-steel-pink font-alliance">{children}</h4>,
    },
    marks: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      strong: ({children}: any) => <strong className="font-bold text-cyber-cyan">{children}</strong>,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      em: ({children}: any) => <em className="italic text-steel-pink">{children}</em>,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      code: ({children}: any) => <code className="px-2 py-1 bg-charcoal-gray/50 text-cyber-cyan rounded font-mono text-sm">{children}</code>,
    },
    list: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      bullet: ({children}: any) => <ul className="list-none space-y-3 mb-6 ml-0">{children}</ul>,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      number: ({children}: any) => <ol className="list-none space-y-3 mb-6 ml-0">{children}</ol>,
    },
    listItem: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      bullet: ({children}: any) => (
        <li className="flex items-start">
          <div className="w-6 h-6 bg-gradient-to-r from-steel-pink to-cyber-cyan rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-ghost-white/90 leading-relaxed">{children}</span>
        </li>
      ),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      number: ({children, index}: any) => (
        <li className="flex items-start">
          <div className="w-8 h-8 bg-gradient-to-r from-cyber-cyan to-electric-violet rounded-lg flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
            <span className="text-white font-bold text-sm">{(index || 0) + 1}</span>
          </div>
          <span className="text-ghost-white/90 leading-relaxed">{children}</span>
        </li>
      ),
    }
  }

  return (
    <section id="scope" className="relative py-24 bg-gradient-to-br from-charcoal-gray to-raisin-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-steel-pink/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyber-cyan/10 to-transparent rounded-full blur-3xl"></div>
      
      {/* Floating Geometric Elements */}
      <div className="absolute top-20 left-10 opacity-20 hidden lg:block">
        <div className="w-4 h-4 bg-steel-pink transform rotate-45 animate-pulse"></div>
      </div>
      <div className="absolute bottom-32 right-20 opacity-15 hidden lg:block">
        <div className="w-6 h-6 border-2 border-cyber-cyan transform rotate-12 animate-spin-slow"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-steel-pink/20 to-cyber-cyan/20 border border-steel-pink/30 rounded-full text-cyber-cyan text-sm font-medium mb-6 backdrop-blur-sm font-alliance">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
            Service Specifications
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ghost-white mb-6 leading-tight font-alliance">
            <span className="text-gradient-cyber">
              Comprehensive Scope
            </span>
          </h2>
          
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-steel-pink to-transparent w-32"></div>
            <div className="w-3 h-3 bg-steel-pink rounded-full mx-4 animate-pulse"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-cyber-cyan to-transparent w-32"></div>
          </div>

          <p className="text-xl text-ghost-white/70 max-w-3xl mx-auto font-alliance">
            Detailed breakdown of our service coverage, methodologies, and deliverables tailored to your security requirements.
          </p>
        </div>
        
        {/* Scope Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="relative bg-gradient-to-br from-raisin-black/80 to-charcoal-gray/60 backdrop-blur-xl border border-steel-pink/20 rounded-2xl p-8 lg:p-12 shadow-2xl">
              {/* Content Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-steel-pink/10 via-transparent to-cyber-cyan/10 rounded-2xl pointer-events-none"></div>
              
              {/* Scope Content */}
              <div className="relative z-10 prose prose-lg max-w-none">
                <PortableText value={service.scope} components={richTextComponents} />
              </div>

              {/* Bottom Border Animation */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-steel-pink via-cyber-cyan to-electric-violet rounded-b-2xl opacity-50"></div>
            </div>
          </div>

          {/* Sidebar - Key Highlights */}
          <div className="lg:col-span-4">
            <div className="sticky top-8 space-y-6">
              {/* Security Standards Card */}
              <div className="bg-gradient-to-br from-charcoal-gray/80 to-raisin-black/60 backdrop-blur-xl border border-cyber-cyan/20 rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyber-cyan to-electric-blue rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-ghost-white font-alliance">Security Standards</h3>
                </div>
                <ul className="space-y-2 text-sm text-ghost-white/80">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyber-cyan rounded-full mr-3"></div>
                    NIST Cybersecurity Framework
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-steel-pink rounded-full mr-3"></div>
                    OWASP Top 10 Coverage
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-electric-violet rounded-full mr-3"></div>
                    ISO 27001 Compliance
                  </li>
                </ul>
              </div>

              {/* Engagement Model Card */}
              <div className="bg-gradient-to-br from-charcoal-gray/80 to-raisin-black/60 backdrop-blur-xl border border-steel-pink/20 rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-steel-pink to-hot-pink rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-ghost-white font-alliance">Engagement Model</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-ghost-white/80">Duration</span>
                    <span className="text-cyber-cyan font-medium">2-4 weeks</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-ghost-white/80">Methodology</span>
                    <span className="text-steel-pink font-medium">Black Box</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-ghost-white/80">Reporting</span>
                    <span className="text-electric-violet font-medium">Real-time</span>
                  </div>
                </div>
              </div>

              {/* Quick Contact Card */}
              <div className="bg-gradient-to-r from-steel-pink/10 to-cyber-cyan/10 border border-steel-pink/30 rounded-xl p-6">
                <h3 className="text-lg font-bold text-ghost-white mb-3 font-alliance">Questions About Scope?</h3>
                <p className="text-sm text-ghost-white/70 mb-4">
                  Our security experts are available to discuss custom requirements and scope modifications.
                </p>
                <button className="w-full px-4 py-2 bg-gradient-to-r from-steel-pink to-cyber-cyan text-white font-medium rounded-lg hover:from-steel-pink/80 hover:to-cyber-cyan/80 transition-all duration-300 font-alliance">
                  Schedule Discussion
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
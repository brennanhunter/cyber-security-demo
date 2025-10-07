'use client'

import ScrambleText, { ScrambleTextHandle } from '@/components/animations/scramble-text'
import { useRef } from 'react'

interface Industry {
  title: string
  slug: { current: string }
  description: string
  icon?: {
    asset?: {
      _id: string
      url: string
    }
    alt?: string
  }
}

interface Client {
  name: string
  slug: { current: string }
  logo?: {
    asset?: {
      _id: string
      url: string
    }
    alt?: string
  }
  website?: string
  isPublic: boolean
}

interface IndustriesClientsSectionProps {
  service: {
    industries?: Industry[]
    clients?: Client[]
  }
}

export default function IndustriesClientsSection({ service }: IndustriesClientsSectionProps) {
  const hasIndustries = service.industries && service.industries.length > 0
  const hasClients = service.clients && service.clients.length > 0
  const consultationButtonRef = useRef<ScrambleTextHandle>(null)
  const caseStudiesButtonRef = useRef<ScrambleTextHandle>(null)

  if (!hasIndustries && !hasClients) {
    return null
  }

  return (
    <section className="py-20 bg-gradient-to-br from-raisin-black via-charcoal-gray to-raisin-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(210,29,105,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,214,221,0.08),transparent_50%)]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-steel-pink/20 to-cyber-cyan/20 rounded-full text-sm font-medium text-cyber-cyan border border-cyber-cyan/30 backdrop-blur-sm mb-6 font-alliance">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
            </svg>
            Trusted Worldwide
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-ghost-white mb-6 font-alliance">
            <span className="text-gradient-cyber">Industries</span> & Clients
          </h2>
          <p className="text-xl text-ghost-white/80 max-w-3xl mx-auto leading-relaxed">
            Trusted by organizations across diverse industries to secure their digital assets and defend against evolving cyber threats.
          </p>
        </div>

        <div className="space-y-20">
          {/* Enhanced Industries Section */}
          {hasIndustries && (
            <div>
              <div className="text-center mb-16">
                <h3 className="text-3xl md:text-4xl font-bold text-ghost-white mb-6 font-alliance">
                  <span className="text-gradient-cyber">Sectors</span> We Defend
                </h3>
                <p className="text-lg text-ghost-white/80 max-w-2xl mx-auto leading-relaxed">
                  Our specialized expertise spans across critical sectors, each with unique threat landscapes and compliance requirements.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {service.industries!.map((industry, index) => (
                  <div 
                    key={industry.slug.current}
                    className="group relative bg-gradient-to-br from-charcoal-gray/60 to-raisin-black/40 backdrop-blur-xl border border-steel-pink/20 rounded-2xl p-8 shadow-2xl hover:shadow-[0_20px_40px_rgba(210,29,105,0.2)] transition-all duration-500 transform hover:-translate-y-2 hover:border-cyber-cyan/40"
                  >
                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-steel-pink/5 via-transparent to-cyber-cyan/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Animated Dots */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-steel-pink rounded-full animate-pulse opacity-60"></div>
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-cyber-cyan rounded-full animate-ping opacity-40"></div>

                    {/* Enhanced Industry Icon */}
                    <div className="relative z-10 mb-8">
                      {industry.icon?.asset?.url ? (
                        <div className="w-20 h-20 rounded-2xl overflow-hidden bg-gradient-to-r from-steel-pink/20 to-cyber-cyan/20 backdrop-blur-sm border border-steel-pink/30 p-4 group-hover:border-cyber-cyan/50 group-hover:scale-110 transition-all duration-500">
                          <img 
                            src={industry.icon.asset.url}
                            alt={industry.icon.alt || industry.title}
                            className="w-full h-full object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-500"
                          />
                        </div>
                      ) : (
                        <div className="w-20 h-20 bg-gradient-to-r from-steel-pink/20 to-cyber-cyan/20 backdrop-blur-sm border border-steel-pink/30 rounded-2xl flex items-center justify-center text-cyber-cyan group-hover:border-cyber-cyan/50 group-hover:scale-110 transition-all duration-500 shadow-xl">
                          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                      )}
                    </div>

                    {/* Enhanced Content */}
                    <div className="relative z-10">
                      <h4 className="text-2xl font-bold text-ghost-white mb-4 group-hover:text-cyber-cyan transition-colors duration-300 font-alliance">
                        {industry.title}
                      </h4>
                      <p className="text-ghost-white/70 leading-relaxed group-hover:text-ghost-white/90 transition-colors duration-300">
                        {industry.description}
                      </p>
                    </div>

                    {/* Animated Border */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-steel-pink via-cyber-cyan to-electric-violet rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Enhanced Clients Section */}
          {hasClients && (
            <div>
              <div className="text-center mb-16">
                <h3 className="text-3xl md:text-4xl font-bold text-ghost-white mb-6 font-alliance">
                  Trusted By <span className="text-gradient-cyber">Elite</span> Organizations
                </h3>
                <p className="text-lg text-ghost-white/80 max-w-2xl mx-auto leading-relaxed">
                  Join the ranks of forward-thinking organizations that have chosen our cybersecurity expertise to defend their most critical assets.
                </p>
              </div>

              {/* Enhanced Client Logos Grid */}
              <div className="relative bg-gradient-to-br from-charcoal-gray/80 to-raisin-black/60 backdrop-blur-xl border border-steel-pink/20 rounded-3xl p-8 lg:p-12 shadow-2xl">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-steel-pink/5 via-transparent to-cyber-cyan/5 rounded-3xl"></div>
                
                <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 items-center">
                  {service.clients!
                    .filter(client => client.isPublic) // Only show public clients
                    .map((client, index) => (
                    <div 
                      key={client.slug.current}
                      className="group flex items-center justify-center p-4 rounded-xl bg-gradient-to-br from-steel-pink/10 to-cyber-cyan/10 backdrop-blur-sm border border-steel-pink/20 hover:border-cyber-cyan/40 hover:bg-gradient-to-br hover:from-cyber-cyan/20 hover:to-electric-violet/20 transition-all duration-500"
                    >
                      {client.logo?.asset?.url ? (
                        <div className="relative">
                          <img 
                            src={client.logo.asset.url}
                            alt={client.logo.alt || client.name}
                            className="max-h-12 w-auto object-contain filter brightness-0 invert opacity-60 group-hover:brightness-100 group-hover:invert-0 group-hover:opacity-100 transition-all duration-500"
                          />
                          {client.website && (
                            <a 
                              href={client.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-steel-pink to-cyber-cyan text-white rounded-lg opacity-0 group-hover:opacity-90 transition-opacity duration-300 shadow-lg"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          )}
                        </div>
                      ) : (
                        <div className="flex items-center justify-center h-12 px-4 bg-gradient-to-r from-steel-pink/20 to-cyber-cyan/20 backdrop-blur-sm border border-steel-pink/30 rounded-lg group-hover:border-cyber-cyan/50 transition-all duration-300">
                          <span className="text-sm font-medium text-cyber-cyan group-hover:text-ghost-white font-alliance transition-colors duration-300">
                            {client.name}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Enhanced Trust Indicators */}
                <div className="mt-16 pt-12 border-t border-steel-pink/30">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    <div className="group">
                      <div className="w-16 h-16 bg-gradient-to-r from-steel-pink to-cyber-cyan rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-ghost-white mb-2 font-alliance text-lg">Enterprise Grade</h4>
                      <p className="text-sm text-ghost-white/70">Fortune 500 trusted security excellence</p>
                    </div>

                    <div className="group">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyber-cyan to-electric-violet rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-ghost-white mb-2 font-alliance text-lg">Compliance Ready</h4>
                      <p className="text-sm text-ghost-white/70">ISO, SOC, GDPR certified frameworks</p>
                    </div>

                    <div className="group">
                      <div className="w-16 h-16 bg-gradient-to-r from-electric-violet to-steel-pink rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-ghost-white mb-2 font-alliance text-lg">24/7 Defense</h4>
                      <p className="text-sm text-ghost-white/70">Continuous threat monitoring & response</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Enhanced Call to Action */}
          <div className="text-center">
            <div className="relative bg-gradient-to-r from-steel-pink/90 to-cyber-cyan/90 backdrop-blur-xl rounded-3xl p-8 lg:p-12 shadow-2xl border border-steel-pink/30">
              {/* Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-steel-pink/20 via-transparent to-cyber-cyan/20 rounded-3xl"></div>
              
              <div className="relative z-10 max-w-3xl mx-auto">
                <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-white font-alliance">
                  Ready to Join Our <span className="text-gradient-light">Elite</span> Clients?
                </h3>
                <p className="text-xl mb-12 text-white/90 leading-relaxed">
                  Discover how our industry-specific expertise can fortify your organization&apos;s defense against evolving cyber threats.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button 
                    className="inline-flex items-center px-8 py-4 bg-white text-steel-pink font-semibold rounded-lg hover:bg-ghost-white/95 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 pulse-glow font-alliance"
                    onMouseEnter={() => consultationButtonRef.current?.startScramble()}
                  >
                    <ScrambleText ref={consultationButtonRef}>
                      Schedule Consultation
                    </ScrambleText>
                    <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </button>
                  
                  <button 
                    className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-steel-pink transition-all duration-300 backdrop-blur-sm font-alliance"
                    onMouseEnter={() => caseStudiesButtonRef.current?.startScramble()}
                  >
                    <ScrambleText ref={caseStudiesButtonRef}>
                      View Case Studies
                    </ScrambleText>
                    <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Animated Border */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-steel-pink via-cyber-cyan to-electric-violet rounded-b-3xl opacity-75"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
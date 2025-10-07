'use client'

import ScrambleText, { ScrambleTextHandle } from '@/components/animations/scramble-text'
import { useRef } from 'react'

interface CaseStudy {
  title: string
  slug: { current: string }
  summary: string
  featuredImage?: {
    asset?: {
      _id: string
      url: string
    }
    alt?: string
  }
  timeline?: string
  isPublic: boolean
}

interface Certificate {
  title: string
  slug: { current: string }
  issuer: string
  badge?: {
    asset?: {
      _id: string
      url: string
    }
    alt?: string
  }
}

interface CaseStudiesSectionProps {
  service: {
    caseStudies?: CaseStudy[]
    certs?: Certificate[]
  }
}

export default function CaseStudiesSection({ service }: CaseStudiesSectionProps) {
  const hasCaseStudies = service.caseStudies && service.caseStudies.length > 0
  const hasCertifications = service.certs && service.certs.length > 0
  const projectButtonRef = useRef<ScrambleTextHandle>(null)
  const portfolioButtonRef = useRef<ScrambleTextHandle>(null)
  const allCasesButtonRef = useRef<ScrambleTextHandle>(null)
  
  // Filter for public case studies only
  const publicCaseStudies = service.caseStudies?.filter(study => study.isPublic) || []

  if (!hasCaseStudies && !hasCertifications) {
    return null
  }

  return (
    <section className="py-20 bg-gradient-to-br from-charcoal-gray via-raisin-black to-charcoal-gray relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(210,29,105,0.08),transparent_50%)]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-electric-violet/20 to-steel-pink/20 rounded-full text-sm font-medium text-electric-violet border border-electric-violet/30 backdrop-blur-sm mb-6 font-alliance">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Mission Critical Results
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-ghost-white mb-6 font-alliance">
            <span className="text-gradient-cyber">Proven Results</span> & Expertise
          </h2>
          <p className="text-xl text-ghost-white/80 max-w-3xl mx-auto leading-relaxed">
            Real-world success stories and elite certifications that demonstrate our mastery in defending against advanced cyber threats.
          </p>
        </div>

        <div className="space-y-20">
          {/* Enhanced Case Studies Section */}
          {publicCaseStudies.length > 0 && (
            <div>
              <div className="text-center mb-16">
                <h3 className="text-3xl md:text-4xl font-bold text-ghost-white mb-6 font-alliance">
                  <span className="text-gradient-cyber">Victory</span> Chronicles
                </h3>
                <p className="text-lg text-ghost-white/80 max-w-2xl mx-auto leading-relaxed">
                  Discover how we&apos;ve helped organizations defeat sophisticated cyber adversaries and fortify their digital infrastructure against evolving threats.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {publicCaseStudies.slice(0, 6).map((caseStudy, index) => (
                  <div 
                    key={caseStudy.slug.current}
                    className="group relative bg-gradient-to-br from-charcoal-gray/60 to-raisin-black/40 backdrop-blur-xl border border-electric-violet/20 rounded-2xl overflow-hidden shadow-2xl hover:shadow-[0_20px_40px_rgba(139,92,246,0.2)] transition-all duration-500 transform hover:-translate-y-3 hover:border-cyber-cyan/40"
                  >
                    {/* Animated Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-electric-violet/5 via-transparent to-cyber-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Floating Animation Dots */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-electric-violet rounded-full animate-pulse opacity-60"></div>
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-cyber-cyan rounded-full animate-ping opacity-40"></div>

                    {/* Enhanced Case Study Image */}
                    {caseStudy.featuredImage?.asset?.url ? (
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={`${caseStudy.featuredImage.asset.url}?w=600&h=300&fit=crop&q=80`}
                          alt={caseStudy.featuredImage.alt || caseStudy.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter brightness-75 group-hover:brightness-90"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-raisin-black/80 via-raisin-black/30 to-transparent"></div>
                        
                        {/* Enhanced Timeline Badge */}
                        {caseStudy.timeline && (
                          <div className="absolute top-4 right-4 px-4 py-2 bg-gradient-to-r from-steel-pink to-cyber-cyan text-white text-sm font-medium rounded-full backdrop-blur-sm border border-white/20 font-alliance">
                            {caseStudy.timeline}
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="h-48 bg-gradient-to-br from-electric-violet/20 to-cyber-cyan/20 backdrop-blur-sm flex items-center justify-center border-b border-electric-violet/30">
                        <div className="text-center">
                          <svg className="w-16 h-16 text-cyber-cyan mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          {caseStudy.timeline && (
                            <span className="text-sm font-medium text-cyber-cyan font-alliance">{caseStudy.timeline}</span>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Enhanced Case Study Content */}
                    <div className="relative z-10 p-8">
                      <h4 className="text-2xl font-bold text-ghost-white mb-4 group-hover:text-cyber-cyan transition-colors duration-300 font-alliance">
                        {caseStudy.title}
                      </h4>
                      <p className="text-ghost-white/70 leading-relaxed mb-6 line-clamp-3 group-hover:text-ghost-white/90 transition-colors duration-300">
                        {caseStudy.summary}
                      </p>
                      
                      {/* Enhanced Read More Button */}
                      <div className="flex items-center text-cyber-cyan font-medium group-hover:text-electric-violet transition-colors duration-300 font-alliance">
                        <span className="text-sm">Analyze Victory</span>
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>

                    {/* Animated Bottom Border */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-steel-pink via-cyber-cyan to-electric-violet opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                ))}
              </div>

              {/* Enhanced View All Case Studies */}
              {publicCaseStudies.length > 6 && (
                <div className="text-center mt-16">
                  <button 
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-steel-pink to-cyber-cyan hover:from-steel-pink/80 hover:to-cyber-cyan/80 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 pulse-glow font-alliance"
                    onMouseEnter={() => allCasesButtonRef.current?.startScramble()}
                  >
                    <ScrambleText ref={allCasesButtonRef}>
                      View All Victory Chronicles
                    </ScrambleText>
                    <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Enhanced Certifications Section */}
          {hasCertifications && (
            <div>
              <div className="text-center mb-16">
                <h3 className="text-3xl md:text-4xl font-bold text-ghost-white mb-6 font-alliance">
                  <span className="text-gradient-cyber">Elite</span> Certifications & Credentials
                </h3>
                <p className="text-lg text-ghost-white/80 max-w-2xl mx-auto leading-relaxed">
                  Industry-recognized certifications and elite credentials that validate our mastery in advanced cybersecurity warfare and defense.
                </p>
              </div>

              {/* Enhanced Certifications Grid */}
              <div className="relative bg-gradient-to-br from-charcoal-gray/80 to-raisin-black/60 backdrop-blur-xl border border-steel-pink/20 rounded-3xl p-8 lg:p-12 shadow-2xl">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-steel-pink/5 via-transparent to-cyber-cyan/5 rounded-3xl"></div>
                
                <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
                  {service.certs!.map((cert, index) => (
                    <div 
                      key={cert.slug.current}
                      className="group flex flex-col items-center p-6 bg-gradient-to-br from-electric-violet/10 to-cyber-cyan/10 backdrop-blur-sm border border-electric-violet/20 rounded-2xl shadow-xl hover:shadow-[0_10px_30px_rgba(139,92,246,0.3)] hover:border-cyber-cyan/40 transition-all duration-500 transform hover:-translate-y-2"
                    >
                      {/* Enhanced Certificate Badge */}
                      <div className="mb-6 relative">
                        {cert.badge?.asset?.url ? (
                          <div className="relative">
                            <img 
                              src={cert.badge.asset.url}
                              alt={cert.badge.alt || cert.title}
                              className="w-20 h-20 object-contain group-hover:scale-110 transition-transform duration-500 filter drop-shadow-lg"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-cyber-cyan/20 to-electric-violet/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                          </div>
                        ) : (
                          <div className="w-20 h-20 bg-gradient-to-r from-steel-pink/20 to-cyber-cyan/20 backdrop-blur-sm border border-steel-pink/30 rounded-full flex items-center justify-center group-hover:border-cyber-cyan/50 group-hover:scale-110 transition-all duration-500 shadow-xl">
                            <svg className="w-10 h-10 text-cyber-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                            </svg>
                          </div>
                        )}
                        
                        {/* Animated Ring */}
                        <div className="absolute inset-0 border-2 border-cyber-cyan/30 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>

                      {/* Enhanced Certificate Info */}
                      <div className="text-center">
                        <h4 className="font-bold text-ghost-white mb-2 text-sm group-hover:text-cyber-cyan transition-colors duration-300 font-alliance">
                          {cert.title}
                        </h4>
                        <p className="text-xs text-ghost-white/60 group-hover:text-ghost-white/80 transition-colors duration-300">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Enhanced Certification Stats */}
                <div className="mt-16 pt-12 border-t border-steel-pink/30 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                  <div className="group">
                    <div className="text-4xl font-bold text-gradient-cyber mb-3 group-hover:scale-110 transition-transform duration-300 font-alliance">{service.certs!.length}+</div>
                    <div className="text-ghost-white/80 font-alliance text-lg">Elite Certifications</div>
                  </div>
                  <div className="group">
                    <div className="text-4xl font-bold text-gradient-cyber mb-3 group-hover:scale-110 transition-transform duration-300 font-alliance">100%</div>
                    <div className="text-ghost-white/80 font-alliance text-lg">Compliance Mastery</div>
                  </div>
                  <div className="group">
                    <div className="text-4xl font-bold text-gradient-cyber mb-3 group-hover:scale-110 transition-transform duration-300 font-alliance">24/7</div>
                    <div className="text-ghost-white/80 font-alliance text-lg">Threat Surveillance</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Enhanced Call to Action */}
          <div className="text-center">
            <div className="relative bg-gradient-to-r from-steel-pink/90 to-cyber-cyan/90 backdrop-blur-xl rounded-3xl p-8 lg:p-12 shadow-2xl border border-steel-pink/30 overflow-hidden">
              {/* Enhanced Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-electric-violet/20 via-transparent to-cyber-cyan/20 rounded-3xl"></div>
              <div className="absolute top-0 left-0 w-32 h-32 bg-steel-pink/30 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-cyber-cyan/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
              
              <div className="relative z-10 max-w-3xl mx-auto">
                <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-white font-alliance">
                  Ready to Become Our Next <span className="text-gradient-light">Victory</span> Story?
                </h3>
                <p className="text-xl mb-12 text-white/90 leading-relaxed">
                  Join the elite ranks of organizations that have transformed their security posture with our battle-tested methodologies and elite expertise.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button 
                    className="inline-flex items-center px-8 py-4 bg-white text-steel-pink font-semibold rounded-lg hover:bg-ghost-white/95 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 pulse-glow font-alliance"
                    onMouseEnter={() => projectButtonRef.current?.startScramble()}
                  >
                    <ScrambleText ref={projectButtonRef}>
                      Launch Your Mission
                    </ScrambleText>
                    <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                  
                  <button 
                    className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-steel-pink transition-all duration-300 backdrop-blur-sm font-alliance"
                    onMouseEnter={() => portfolioButtonRef.current?.startScramble()}
                  >
                    <ScrambleText ref={portfolioButtonRef}>
                      Download Battle Portfolio
                    </ScrambleText>
                    <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
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
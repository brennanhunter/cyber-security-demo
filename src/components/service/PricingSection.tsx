'use client'

import ScrambleText, { ScrambleTextHandle } from '@/components/animations/scramble-text'
import { useRef } from 'react'

interface PricingTier {
  label: string
  priceRange: string
  includes: string[]
}

interface Pricing {
  pricingModel: 'Fixed' | 'T&M' | 'Subscription' | 'Custom'
  pricingTiers: PricingTier[]
}

interface PricingSectionProps {
  service: {
    pricing?: Pricing
    title?: string
  }
}

const getPricingModelIcon = (model: string) => {
  switch (model) {
    case 'Fixed':
      return (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    case 'T&M':
      return (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    case 'Subscription':
      return (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    case 'Custom':
    default:
      return (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
  }
}

const getPricingModelDescription = (model: string) => {
  switch (model) {
    case 'Fixed':
      return 'Mission-critical pricing with zero hidden operational costs'
    case 'T&M':
      return 'Tactical deployment based on threat response requirements'
    case 'Subscription':
      return 'Continuous defense coverage with ongoing threat monitoring'
    case 'Custom':
    default:
      return 'Bespoke security architecture tailored to your threat landscape'
  }
}

export default function PricingSection({ service }: PricingSectionProps) {
  const quoteButtonRef = useRef<ScrambleTextHandle>(null)
  const consultationButtonRef = useRef<ScrambleTextHandle>(null)
  const tierButtonRefs = useRef<(ScrambleTextHandle | null)[]>([])

  if (!service.pricing || !service.pricing.pricingTiers || service.pricing.pricingTiers.length === 0) {
    return null
  }

  const { pricing } = service

  // Initialize refs array for tier buttons
  if (tierButtonRefs.current.length !== pricing.pricingTiers.length) {
    tierButtonRefs.current = Array(pricing.pricingTiers.length).fill(null)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-charcoal-gray via-raisin-black to-charcoal-gray relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(210,29,105,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(0,214,221,0.08),transparent_50%)]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-steel-pink/20 to-cyber-cyan/20 rounded-full text-sm font-medium text-steel-pink border border-steel-pink/30 backdrop-blur-sm mb-6 font-alliance">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
            </svg>
            Mission Investment
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-ghost-white mb-6 font-alliance">
            <span className="text-gradient-cyber">Strategic</span> Investment & Pricing
          </h2>
          <p className="text-xl text-ghost-white/80 max-w-3xl mx-auto mb-12 leading-relaxed">
            Transparent, mission-critical pricing engineered to deliver maximum ROI for your cybersecurity defense operations.
          </p>
          
          {/* Enhanced Pricing Model Badge */}
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-steel-pink/20 to-cyber-cyan/20 backdrop-blur-xl border border-steel-pink/30 text-cyber-cyan rounded-2xl shadow-2xl">
            <div className="mr-4 text-steel-pink">
              {getPricingModelIcon(pricing.pricingModel)}
            </div>
            <div className="text-left">
              <div className="font-bold font-alliance text-lg">{pricing.pricingModel === 'T&M' ? 'Tactical Response' : pricing.pricingModel} Operations</div>
              <div className="text-sm text-ghost-white/70">{getPricingModelDescription(pricing.pricingModel)}</div>
            </div>
          </div>
        </div>

        {/* Enhanced Pricing Tiers */}
        <div className={`grid gap-8 ${
          pricing.pricingTiers.length === 1 ? 'max-w-lg mx-auto' :
          pricing.pricingTiers.length === 2 ? 'md:grid-cols-2 max-w-4xl mx-auto' :
          'md:grid-cols-2 lg:grid-cols-3'
        }`}>
          {pricing.pricingTiers.map((tier, index) => (
            <div 
              key={tier.label}
              className={`relative bg-gradient-to-br from-charcoal-gray/80 to-raisin-black/60 backdrop-blur-xl rounded-3xl p-8 lg:p-10 shadow-2xl hover:shadow-[0_25px_50px_rgba(210,29,105,0.3)] transition-all duration-500 transform hover:-translate-y-3 border ${
                index === 1 && pricing.pricingTiers.length === 3 
                  ? 'border-cyber-cyan/40 ring-4 ring-cyber-cyan/30 scale-105 bg-gradient-to-br from-cyber-cyan/10 to-electric-violet/10' 
                  : 'border-steel-pink/20 hover:border-cyber-cyan/40'
              }`}
            >
              {/* Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-steel-pink/5 via-transparent to-cyber-cyan/5 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Floating Animation Dots */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-steel-pink rounded-full animate-pulse opacity-60"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-cyber-cyan rounded-full animate-ping opacity-40"></div>

              {/* Elite Badge */}
              {index === 1 && pricing.pricingTiers.length === 3 && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-steel-pink to-cyber-cyan text-white text-sm font-bold rounded-full shadow-2xl backdrop-blur-sm border border-white/20 font-alliance">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l14 9-14 9V3z" />
                    </svg>
                    Elite Choice
                  </span>
                </div>
              )}

              {/* Enhanced Tier Header */}
              <div className="relative z-10 text-center mb-10">
                <h3 className="text-3xl font-bold text-ghost-white mb-4 font-alliance">
                  {tier.label}
                </h3>
                <div className="text-4xl md:text-5xl font-bold text-gradient-cyber mb-6">
                  {tier.priceRange}
                </div>
                
                {pricing.pricingModel === 'Custom' && (
                  <p className="text-sm text-ghost-white/60">
                    Custom intelligence briefing based on threat assessment
                  </p>
                )}
              </div>

              {/* Enhanced Features List */}
              <div className="relative z-10 mb-10">
                <h4 className="font-bold text-ghost-white mb-6 flex items-center font-alliance text-lg">
                  <svg className="w-6 h-6 text-cyber-cyan mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Defense Arsenal
                </h4>
                <ul className="space-y-4">
                  {tier.includes.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start group">
                      <div className="w-6 h-6 bg-gradient-to-r from-steel-pink/20 to-cyber-cyan/20 backdrop-blur-sm border border-cyber-cyan/30 rounded-lg flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 group-hover:border-cyber-cyan/60 group-hover:scale-110 transition-all duration-300">
                        <svg className="w-3 h-3 text-cyber-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-ghost-white/80 leading-relaxed group-hover:text-ghost-white transition-colors duration-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Enhanced CTA Button */}
              <button 
                className={`relative z-10 w-full py-4 px-6 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 font-alliance ${
                  index === 1 && pricing.pricingTiers.length === 3
                    ? 'bg-gradient-to-r from-steel-pink to-cyber-cyan hover:from-steel-pink/80 hover:to-cyber-cyan/80 text-white pulse-glow'
                    : 'bg-gradient-to-r from-charcoal-gray/80 to-raisin-black/60 border-2 border-cyber-cyan/50 hover:border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan/10 backdrop-blur-sm'
                }`}
                onMouseEnter={() => tierButtonRefs.current[index]?.startScramble()}
              >
                <ScrambleText ref={(el) => { tierButtonRefs.current[index] = el }}>
                  {pricing.pricingModel === 'Custom' ? 'Request Intel Briefing' : 'Deploy Defense'}
                </ScrambleText>
              </button>

              {/* Animated Bottom Border */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-steel-pink via-cyber-cyan to-electric-violet rounded-b-3xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Enhanced Additional Information */}
        <div className="mt-20 space-y-16">
          {/* Enhanced Value Proposition */}
          <div className="relative bg-gradient-to-br from-charcoal-gray/80 to-raisin-black/60 backdrop-blur-xl border border-steel-pink/20 rounded-3xl p-8 lg:p-12 shadow-2xl">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-steel-pink/5 via-transparent to-cyber-cyan/5 rounded-3xl"></div>
            
            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <h3 className="text-3xl lg:text-4xl font-bold text-ghost-white mb-12 font-alliance">
                Why Choose Our <span className="text-gradient-cyber">{service.title}</span> Operations?
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-r from-steel-pink to-cyber-cyan rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-ghost-white mb-3 font-alliance">Mission ROI</h4>
                  <p className="text-ghost-white/70">Average 300% return on defense investment within 12 months of deployment</p>
                </div>

                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyber-cyan to-electric-violet rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-ghost-white mb-3 font-alliance">Threat Neutralization</h4>
                  <p className="text-ghost-white/70">99.7% reduction in successful cyber attacks through our defense protocols</p>
                </div>

                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-r from-electric-violet to-steel-pink rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-ghost-white mb-3 font-alliance">Rapid Deployment</h4>
                  <p className="text-ghost-white/70">Lightning-fast implementation with measurable defense results in weeks</p>
                </div>
              </div>
            </div>

            {/* Animated Border */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-steel-pink via-cyber-cyan to-electric-violet rounded-b-3xl opacity-50"></div>
          </div>

          {/* Enhanced Final CTA */}
          <div className="text-center">
            <div className="relative bg-gradient-to-r from-steel-pink/90 to-cyber-cyan/90 backdrop-blur-xl rounded-3xl p-8 lg:p-12 shadow-2xl border border-steel-pink/30 overflow-hidden">
              {/* Enhanced Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-electric-violet/20 via-transparent to-cyber-cyan/20 rounded-3xl"></div>
              <div className="absolute top-0 left-0 w-32 h-32 bg-steel-pink/30 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-cyber-cyan/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
              
              <div className="relative z-10 max-w-3xl mx-auto">
                <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-white font-alliance">
                  Ready to <span className="text-gradient-light">Fortify</span> Your Organization?
                </h3>
                <p className="text-xl mb-12 text-white/90 leading-relaxed">
                  Get a comprehensive threat assessment and personalized defense proposal engineered for your specific attack surface and risk profile.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button 
                    className="inline-flex items-center px-8 py-4 bg-white text-steel-pink font-semibold rounded-lg hover:bg-ghost-white/95 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 pulse-glow font-alliance"
                    onMouseEnter={() => quoteButtonRef.current?.startScramble()}
                  >
                    <ScrambleText ref={quoteButtonRef}>
                      Get Custom Intel Report
                    </ScrambleText>
                    <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </button>
                  
                  <button 
                    className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-steel-pink transition-all duration-300 backdrop-blur-sm font-alliance"
                    onMouseEnter={() => consultationButtonRef.current?.startScramble()}
                  >
                    <ScrambleText ref={consultationButtonRef}>
                      Schedule War Room Briefing
                    </ScrambleText>
                    <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
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
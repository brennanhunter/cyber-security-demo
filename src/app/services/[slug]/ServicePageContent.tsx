'use client'

import { useRef } from 'react'
import PageWrapper from '@/components/layout/page-wrapper'
import FAQItem from '@/components/ui/faq-item'
import SafeImage from '@/components/ui/safe-image'
import ScrambleText, { ScrambleTextHandle } from '@/components/animations/scramble-text'

interface ServiceItem {
  icon?: {
    asset?: {
      _id: string
      url: string
    }
    alt?: string
  }
  title: string
  description: string
}

interface Advantage {
  number: number
  title: string
  description?: string
  readMoreLink?: string
}

interface FAQ {
  question: string
  answer: string
}

interface Service {
  title: string
  heroSection?: {
    headline?: string
    subtitle?: string
    ctaText?: string
    ctaLink?: string
  }
  focusSection?: {
    sectionTitle?: string
    mainHeading?: string
    description?: string
    ctaText?: string
    ctaLink?: string
    sideImage?: {
      asset?: {
        _id: string
        url: string
      }
      alt?: string
    }
  }
  servicesGrid?: {
    sectionTitle?: string
    services?: ServiceItem[]
    ctaText?: string
    ctaLink?: string
  }
  advantagesGrid?: {
    sectionTitle?: string
    subtitle?: string
    advantages?: Advantage[]
  }
  faqSection?: {
    sectionTitle?: string
    subtitle?: string
    ctaText?: string
    ctaLink?: string
    faqs?: FAQ[]
  }
  pricing?: {
    startingPrice?: number
    pricingModel?: string
    pricingDetails?: string
  }
}

interface ServicePageContentProps {
  service: Service
}

export default function ServicePageContent({ service }: ServicePageContentProps) {
  const scrambleRef = useRef<ScrambleTextHandle>(null)
  const learnMoreRef = useRef<ScrambleTextHandle>(null)
  const focusCtaRef = useRef<ScrambleTextHandle>(null)
  const servicesCtaRef = useRef<ScrambleTextHandle>(null)
  const faqCtaRef = useRef<ScrambleTextHandle>(null)

  const handleHeroButtonHover = () => {
    if (scrambleRef.current) {
      scrambleRef.current.startScramble()
    }
  }

  return (
    <PageWrapper>
      {/* Hero Section - Sophisticated Dark with Electric Accents */}
      <section className="relative py-24 md:py-32 bg-raisin-black overflow-hidden">
        {/* Subtle background grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" 
               style={{
                 backgroundImage: `linear-gradient(rgba(255, 45, 146, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 45, 146, 0.1) 1px, transparent 1px)`,
                 backgroundSize: '40px 40px'
               }}>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Glitch Graffiti - Full Height Right Side */}
          <div className="absolute top-0 right-8 h-full flex items-center opacity-80 transform rotate-12">
            <img 
              src="/decorations/glitch.png" 
              alt=""
              className="h-full w-auto object-contain"
            />
          </div>
          
          {/* Triple Triangles - Bottom Left */}
          <div className="absolute bottom-12 left-8 opacity-70 transform -rotate-6 animate-spin-slow">
            <img 
              src="/decorations/triangles.png" 
              alt=""
              className="w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72"
            />
          </div>
          
          {/* Small Triangle Accent - Top Left */}
          <div className="absolute top-1/4 left-16 opacity-50 transform rotate-45 animate-spin-reverse">
            <img 
              src="/decorations/triangles.png" 
              alt=""
              className="w-24 h-24 md:w-32 md:h-32"
            />
          </div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h1 className="font-eau-sans text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-ghost-white leading-none">
            <span className="block">{service.heroSection?.headline || service.title}</span>
            <span className="block text-steel-pink">.</span>
          </h1>
          
          {service.heroSection?.subtitle && (
            <p className="font-alliance text-xl md:text-2xl text-ghost-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
              {service.heroSection.subtitle}
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {service.heroSection?.ctaText && service.heroSection?.ctaLink && (
              <a 
                href={service.heroSection.ctaLink}
                onMouseEnter={handleHeroButtonHover}
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-steel-pink to-electric-violet hover:from-electric-violet hover:to-steel-pink text-white font-alliance font-medium transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">
                  <ScrambleText ref={scrambleRef}>
                    {service.heroSection.ctaText}
                  </ScrambleText>
                </span>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </a>
            )}
            
            <a 
              href="#focus" 
              className="inline-flex items-center justify-center px-8 py-4 border border-cyber-cyan/30 text-cyber-cyan hover:bg-cyber-cyan/10 font-alliance font-medium transition-all duration-300"
              onMouseEnter={() => learnMoreRef.current?.startScramble()}
            >
              <ScrambleText ref={learnMoreRef}>
                Learn More
              </ScrambleText>
            </a>
          </div>
        </div>
      </section>

      {/* Our Focus Section */}
      {service.focusSection && (
        <section id="focus" className="py-32 bg-ghost-white relative">
          {/* Subtle electric accent */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-steel-pink to-transparent"></div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                {service.focusSection.sectionTitle && (
                  <div className="relative">
                    <h2 className="font-eau-sans text-7xl md:text-8xl font-bold text-raisin-black/5 mb-4 uppercase tracking-wider leading-none">
                      {service.focusSection.sectionTitle}
                    </h2>
                    <div className="absolute bottom-0 left-0 w-24 h-1 bg-gradient-to-r from-steel-pink via-electric-violet to-cyber-cyan"></div>
                  </div>
                )}
                
                {service.focusSection.mainHeading && (
                  <h3 className="font-alliance text-3xl md:text-4xl font-bold text-raisin-black mb-6 leading-tight">
                    <span className="text-steel-pink">►</span> {service.focusSection.mainHeading}
                  </h3>
                )}
                
                {service.focusSection.description && (
                  <p className="font-alliance text-raisin-black/80 text-xl leading-relaxed mb-10">
                    {service.focusSection.description}
                  </p>
                )}
                
                {service.focusSection.ctaText && service.focusSection.ctaLink && (
                  <a 
                    href={service.focusSection.ctaLink}
                    className="group inline-flex items-center bg-raisin-black hover:bg-gradient-to-r hover:from-steel-pink hover:to-electric-violet text-white font-alliance px-10 py-4 font-semibold transition-all duration-300 uppercase tracking-wider text-sm"
                    onMouseEnter={() => focusCtaRef.current?.startScramble()}
                  >
                    <ScrambleText ref={focusCtaRef}>
                      {service.focusSection.ctaText}
                    </ScrambleText>
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                )}
              </div>
              
              {/* Right Image */}
              {service.focusSection.sideImage && (
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-steel-pink/20 via-electric-violet/20 to-cyber-cyan/20 transform rotate-2 blur-sm"></div>
                  <SafeImage 
                    image={service.focusSection.sideImage}
                    alt="Focus Section"
                    width={600}
                    height={400}
                    className="relative z-10 w-full h-auto shadow-2xl"
                  />
                  {/* Electric corner accent */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-steel-pink"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-cyber-cyan"></div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Services Grid Section */}
      {service.servicesGrid && (
        <section className="py-32 bg-raisin-black relative">
          {/* Electric grid background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" 
                 style={{
                   backgroundImage: `linear-gradient(rgba(0, 212, 255, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 45, 146, 0.3) 1px, transparent 1px)`,
                   backgroundSize: '60px 60px'
                 }}>
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            {service.servicesGrid.sectionTitle && (
              <div className="text-center mb-20">
                <h2 className="font-eau-sans text-6xl md:text-7xl font-bold text-center mb-6 text-ghost-white uppercase tracking-wider">
                  <span className="inline-block bg-gradient-to-r from-steel-pink via-electric-violet to-cyber-cyan bg-clip-text text-transparent">
                    {service.servicesGrid.sectionTitle}
                  </span>
                </h2>
                <div className="w-32 h-1 bg-gradient-to-r from-steel-pink via-electric-violet to-cyber-cyan mx-auto"></div>
              </div>
            )}
            
            {service.servicesGrid.services && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
                {service.servicesGrid.services.map((serviceItem: ServiceItem, index: number) => (
                  <div key={index} className="group relative bg-charcoal-gray/50 backdrop-blur-sm border border-ghost-white/10 p-8 hover:border-steel-pink/50 transition-all duration-300 overflow-hidden">
                    {/* Electric corner accent */}
                    <div className="absolute top-0 left-0 w-8 h-8 bg-gradient-to-br from-steel-pink to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    
                    {serviceItem.icon ? (
                      <div className="mb-6 relative">
                        <SafeImage 
                          image={serviceItem.icon}
                          alt={serviceItem.title}
                          width={48}
                          height={48}
                          className="w-12 h-12 group-hover:scale-110 transition-transform relative z-10"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-steel-pink/20 to-cyber-cyan/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                    ) : (
                      <div className="mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-steel-pink to-electric-violet flex items-center justify-center">
                          <div className="w-6 h-6 bg-ghost-white"></div>
                        </div>
                      </div>
                    )}
                    
                    <h3 className="font-alliance text-xl font-bold text-ghost-white mb-4 group-hover:text-steel-pink transition-colors">
                      {serviceItem.title}
                    </h3>
                    
                    <p className="font-alliance text-ghost-white/70 leading-relaxed text-sm">
                      {serviceItem.description}
                    </p>
                    
                    {/* Electric bottom accent */}
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-steel-pink to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300"></div>
                  </div>
                ))}
              </div>
            )}
            
            {service.servicesGrid.ctaText && service.servicesGrid.ctaLink && (
              <div className="text-center">
                <a 
                  href={service.servicesGrid.ctaLink}
                  className="inline-block bg-gradient-to-r from-steel-pink to-electric-violet hover:from-electric-violet hover:to-cyber-cyan text-white font-alliance px-12 py-4 font-semibold transition-all duration-300 uppercase tracking-wider transform hover:scale-105"
                  onMouseEnter={() => servicesCtaRef.current?.startScramble()}
                >
                  <ScrambleText ref={servicesCtaRef}>
                    {service.servicesGrid.ctaText}
                  </ScrambleText>
                </a>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Advantages Grid Section */}
      {service.advantagesGrid && (
        <section className="py-20 bg-ghost-white">
          <div className="max-w-7xl mx-auto px-6">
            {service.advantagesGrid.sectionTitle && (
              <h2 className="font-eau-sans text-3xl md:text-4xl font-bold text-center mb-4 text-raisin-black">
                {service.advantagesGrid.sectionTitle}
              </h2>
            )}
            
            {service.advantagesGrid.subtitle && (
              <p className="font-alliance text-center text-raisin-black/70 mb-12 max-w-3xl mx-auto">
                {service.advantagesGrid.subtitle}
              </p>
            )}
            
            {service.advantagesGrid.advantages && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.advantagesGrid.advantages
                  .sort((a: Advantage, b: Advantage) => a.number - b.number)
                  .map((advantage: Advantage, index: number) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all">
                      <div className="flex items-center mb-4">
                        <span className="w-8 h-8 bg-gray-100 text-raisin-black rounded-full flex items-center justify-center font-alliance font-bold text-sm mr-3">
                          {advantage.number}
                        </span>
                      </div>
                      
                      <h3 className="font-alliance text-lg font-bold text-raisin-black mb-3">
                        {advantage.title}
                      </h3>
                      
                      {advantage.description && (
                        <p className="font-alliance text-raisin-black/70 text-sm mb-4 leading-relaxed">
                          {advantage.description}
                        </p>
                      )}
                      
                      {advantage.readMoreLink && (
                        <a 
                          href={advantage.readMoreLink}
                          className="text-steel-pink hover:text-steel-pink/80 font-alliance font-medium text-sm flex items-center"
                        >
                          Read more →
                        </a>
                      )}
                    </div>
                  ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {service.faqSection && (
        <section className="py-32 bg-ghost-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
              {/* Left Side - Title and CTA */}
              <div className="lg:col-span-2 space-y-8">
                {service.faqSection.sectionTitle && (
                  <div className="relative">
                    <h2 className="font-eau-sans text-6xl md:text-7xl font-bold text-raisin-black mb-6 uppercase tracking-wider leading-none">
                      {service.faqSection.sectionTitle}
                    </h2>
                    <div className="w-24 h-1 bg-steel-pink"></div>
                  </div>
                )}
                
                {service.faqSection.subtitle && (
                  <p className="font-alliance text-raisin-black/70 text-xl leading-relaxed">
                    {service.faqSection.subtitle}
                  </p>
                )}
                
                {service.faqSection.ctaText && service.faqSection.ctaLink && (
                  <a 
                    href={service.faqSection.ctaLink}
                    className="inline-block bg-raisin-black hover:bg-steel-pink text-white font-alliance px-10 py-4 rounded-none font-semibold transition-all uppercase tracking-wider text-sm"
                    onMouseEnter={() => faqCtaRef.current?.startScramble()}
                  >
                    <ScrambleText ref={faqCtaRef}>
                      {service.faqSection.ctaText}
                    </ScrambleText>
                  </a>
                )}
              </div>
              
              {/* Right Side - FAQ Items */}
              <div className="lg:col-span-3">
                {service.faqSection.faqs && service.faqSection.faqs.map((faq: FAQ, index: number) => (
                  <div key={index} className="mb-4">
                    <FAQItem 
                      question={faq.question}
                      answer={faq.answer}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Pricing Section (if exists) */}
      {service.pricing && (
        <section className="py-20 bg-raisin-black/50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-eau-sans text-3xl md:text-4xl font-bold mb-8 text-ghost-white">
              Pricing
            </h2>
            
            {service.pricing.startingPrice && (
              <div className="mb-6">
                <span className="font-alliance text-5xl font-bold text-steel-pink">
                  ${service.pricing.startingPrice}
                </span>
                {service.pricing.pricingModel && (
                  <span className="font-alliance text-xl text-ghost-white/60 ml-2">
                    / {service.pricing.pricingModel}
                  </span>
                )}
              </div>
            )}
            
            {service.pricing.pricingDetails && (
              <p className="font-alliance text-lg text-ghost-white/80 max-w-2xl mx-auto">
                {service.pricing.pricingDetails}
              </p>
            )}
          </div>
        </section>
      )}
    </PageWrapper>
  )
}
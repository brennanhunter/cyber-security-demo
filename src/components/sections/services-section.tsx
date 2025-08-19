'use client'

import StackingCards from '@/components/ui/stacking-cards'
import { Button } from '@/components/ui/button'

export default function ServicesSection() {
  // Sample company names - you can replace with actual client logos later
  const companies = [
    'Microsoft', 'Amazon', 'Google', 'Meta', 'Apple', 'Tesla', 'Netflix', 'Spotify',
    'Adobe', 'Salesforce', 'Oracle', 'IBM', 'Intel', 'NVIDIA', 'PayPal', 'Uber',
    'Airbnb', 'Twitter', 'LinkedIn', 'GitHub', 'Slack', 'Zoom', 'DocuSign', 'Shopify'
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
      
      {/* Glassmorphism company banner */}
      <div className="relative w-full overflow-hidden z-10">
        <div className="backdrop-blur-md bg-white/5 border-y border-white/10 py-6">
          {/* Scrolling companies container */}
          <div className="flex animate-scroll whitespace-nowrap">
            {/* First set of companies */}
            {companies.map((company, index) => (
              <div
                key={`first-${index}`}
                className="inline-flex items-center justify-center mx-8 text-ghost-white/70 font-semibold text-lg tracking-wide hover:text-steel-pink transition-colors duration-300"
              >
                {company}
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {companies.map((company, index) => (
              <div
                key={`second-${index}`}
                className="inline-flex items-center justify-center mx-8 text-ghost-white/70 font-semibold text-lg tracking-wide hover:text-steel-pink transition-colors duration-300"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
        
        {/* Fade edges for smooth infinite scroll effect */}
        <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-raisin-black to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-raisin-black to-transparent pointer-events-none" />
      </div>
      
      {/* Services content area - placeholder for now */}
      <div className="relative z-10 px-4 lg:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6">
            <div className="label-text">
              Trusted by Industry Leaders
            </div>
            <h2 className="heading-section">
              Enterprise Cybersecurity Services
            </h2>
            <p className="body-large text-center max-w-3xl mx-auto">
              Our comprehensive security solutions protect the world's most innovative companies 
              from evolving cyber threats through cutting-edge technology and expert analysis.
            </p>
          </div>
          
          {/* Stacking Cards */}
          <div className="mt-16">
            <StackingCards />
          </div>
          
          {/* Explore More Services Button */}
          <div className="mt-16 text-center">
            <Button variant="secondary" size="lg" className="border-2 border-finn-purple/60 hover:border-finn-purple hover:shadow-lg hover:shadow-finn-purple/25 transform hover:scale-105">
              Explore More Services
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient transition to raisin black */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-raisin-black z-10" />
    </section>
  )
}

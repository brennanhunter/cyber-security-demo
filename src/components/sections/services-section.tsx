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
      
      {/* Enhanced Glassmorphism company banner */}
      <div className="relative w-full overflow-hidden z-10">
        {/* Background with subtle pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-gradient-to-r from-steel-pink/10 via-transparent to-finn-purple/10" />
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }} />
        </div>
        
        {/* Main banner content */}
        <div className="relative backdrop-blur-lg bg-gradient-to-r from-white/8 via-white/12 to-white/8 border-y border-white/20 py-8 shadow-2xl">
          {/* Top accent line */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-steel-pink/50 to-transparent" />
          
          {/* Scrolling companies container */}
          <div className="flex animate-scroll whitespace-nowrap">
            {/* First set of companies */}
            {companies.map((company, index) => (
              <div
                key={`first-${index}`}
                className="group inline-flex items-center justify-center mx-10 py-2 px-4 rounded-lg transition-all duration-500 hover:bg-white/10 hover:backdrop-blur-xl"
              >
                <span className="text-ghost-white/80 font-bold text-xl tracking-wider group-hover:text-steel-pink group-hover:scale-110 transition-all duration-300 drop-shadow-lg">
                  {company}
                </span>
                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-steel-pink/20 to-finn-purple/20 blur-xl -z-10" />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {companies.map((company, index) => (
              <div
                key={`second-${index}`}
                className="group inline-flex items-center justify-center mx-10 py-2 px-4 rounded-lg transition-all duration-500 hover:bg-white/10 hover:backdrop-blur-xl"
              >
                <span className="text-ghost-white/80 font-bold text-xl tracking-wider group-hover:text-steel-pink group-hover:scale-110 transition-all duration-300 drop-shadow-lg">
                  {company}
                </span>
                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-steel-pink/20 to-finn-purple/20 blur-xl -z-10" />
              </div>
            ))}
          </div>
          
          {/* Bottom accent line */}
          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-finn-purple/50 to-transparent" />
          
          {/* Side shimmer effects */}
          <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-transparent via-steel-pink/60 to-transparent animate-pulse" />
          <div className="absolute top-0 right-0 h-full w-1 bg-gradient-to-b from-transparent via-finn-purple/60 to-transparent animate-pulse" />
        </div>
        
        {/* Enhanced fade edges with brand colors */}
        <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-raisin-black via-raisin-black/80 to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-raisin-black via-raisin-black/80 to-transparent pointer-events-none z-10" />
        
        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-steel-pink/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
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
              Our comprehensive security solutions protect the world&apos;s most innovative companies 
              from evolving cyber threats through cutting-edge technology and expert analysis.
            </p>
          </div>
        </div>
          
        {/* Stacking Cards - Full Width */}
        <div className="mt-16">
          <StackingCards />
        </div>
        
        <div className="max-w-7xl mx-auto">
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

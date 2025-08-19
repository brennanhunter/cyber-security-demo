'use client'

import CrystalScene from '@/components/3d/lightning-scene'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-between bg-raisin-black overflow-hidden">
      {/* Fire-like gradient background */}
      <div className="absolute inset-0 bg-gradient-radial from-steel-pink/40 via-finn-purple/30 to-transparent" 
           style={{
             background: `
               radial-gradient(ellipse 80% 60% at 50% 100%, 
                 #D108CE40 0%, 
                 #511F6460 25%, 
                 #2D1B6930 50%, 
                 transparent 70%
               ),
               radial-gradient(ellipse 60% 40% at 20% 80%, 
                 #D108CE30 0%, 
                 #511F6440 40%, 
                 transparent 70%
               ),
               radial-gradient(ellipse 60% 40% at 80% 80%, 
                 #511F6440 0%, 
                 #D108CE30 40%, 
                 transparent 70%
               ),
               linear-gradient(to bottom, 
                 #212227 0%, 
                 #21222700 50%,
                 transparent 100%
               )
             `
           }}
      />
      
      {/* Additional flame-like effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-radial from-steel-pink/60 via-finn-purple/40 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-gradient-radial from-finn-purple/50 via-steel-pink/30 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-gradient-radial from-steel-pink/50 via-finn-purple/30 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array.from({ length: 48 }, (_, i) => (
            <div key={i} className="border-r border-steel-pink/20 h-full" />
          ))}
        </div>
      </div>
      
      {/* Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-12 gap-8 items-center min-h-screen">
        
        {/* Left Side - Text Content */}
        <div className="lg:col-span-7 space-y-8 lg:pr-8">
          {/* Label */}
          <div className="label-text">
            Cybersecurity Solutions
          </div>
          
          {/* Main Heading */}
          <h1 className="heading-hero font-mono">
            <span className="glitch" data-text="S.C.P">S.C.P</span>
          </h1>
          
          {/* Subheading */}
          <h2 className="text-4xl lg:text-5xl font-semibold text-gradient-cyber leading-tight">
            Secure. Control. Protect.
          </h2>
          
          {/* Description */}
          <p className="body-large max-w-xl">
            Elite cybersecurity specialists providing comprehensive penetration testing, 
            red team operations, and security training to fortify your digital infrastructure 
            against evolving threats.
          </p>
          
          {/* Key Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6">
            <div className="text-center sm:text-left">
              <div className="text-2xl font-bold text-steel-pink font-mono">24/7</div>
              <div className="body-small">Threat Monitoring</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-2xl font-bold text-cyber-cyan font-mono">99.9%</div>
              <div className="body-small">Security Rating</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-2xl font-bold text-electric-blue font-mono">SOC 2</div>
              <div className="body-small">Compliance</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 gradient-primary text-ghost-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Schedule Assessment
            </button>
            <button className="px-8 py-4 border-2 border-steel-pink text-steel-pink hover:bg-steel-pink hover:text-raisin-black font-semibold rounded-lg transition-all duration-300">
              View Case Studies
            </button>
          </div>
        </div>
        
        {/* Right Side - 3D Crystal */}
        <div className="lg:col-span-5 flex items-center justify-center lg:justify-end -mr-8 lg:-mr-16">
          <div className="w-[500px] h-[600px] lg:w-[700px] lg:h-[700px]">
            <CrystalScene 
              scale={1.8}
              glitchIntensity={0.2}
              interactive={false}
            />
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cyber-cyan animate-bounce z-20">
        <div className="flex flex-col items-center">
          <span className="body-small mb-2">Scroll to Explore</span>
          <div className="w-6 h-10 border-2 border-cyber-cyan rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyber-cyan rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

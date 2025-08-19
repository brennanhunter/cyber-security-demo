'use client'

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
          
          {/* Services cards - three rows layout */}
          <div className="mt-16 w-4/5 mx-auto space-y-[45px]">
            {/* Penetration Testing Card */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-steel-pink/10 to-finn-purple/20 backdrop-blur-sm border border-steel-pink/30 hover:border-steel-pink/60 transition-all duration-500 hover:transform hover:scale-105 h-80">
              <div className="flex h-full">
                <div className="relative w-2/5 overflow-hidden">
                  <img 
                    src="/images/Lock.jpg" 
                    alt="Ultimate Penetration Testing"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-raisin-black/60" />
                </div>
                <div className="w-3/5 p-8 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-ghost-white mb-4 group-hover:text-steel-pink transition-colors duration-300">
                    Ultimate Penetration Testing
                  </h3>
                  <p className="body-text mb-6 text-lg">
                    The best possible security is hardened with the most comprehensive 
                    security testing available— simulated attacks performed by the 
                    industry's best white hat hackers.
                  </p>
                  <div className="mt-auto">
                    <Button variant="ghost" size="lg" className="hover:shadow-lg hover:shadow-steel-pink/25 transform hover:scale-105">
                      Know More
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Red Team Operations Card */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-finn-purple/10 to-deep-purple/20 backdrop-blur-sm border border-finn-purple/30 hover:border-finn-purple/60 transition-all duration-500 hover:transform hover:scale-105 h-80">
              <div className="flex h-full">
                <div className="w-3/5 p-8 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-ghost-white mb-4 group-hover:text-finn-purple transition-colors duration-300">
                    Red Team Operations
                  </h3>
                  <p className="body-text mb-6 text-lg">
                    Advanced persistent threat simulation using real-world attack 
                    scenarios to test your organization's detection and response 
                    capabilities against sophisticated adversaries.
                  </p>
                  <div className="mt-auto">
                    <Button variant="secondary" size="lg" className="hover:shadow-lg hover:shadow-finn-purple/25 transform hover:scale-105">
                      Know More
                    </Button>
                  </div>
                </div>
                <div className="relative w-2/5 overflow-hidden">
                  <img 
                    src="/images/Planet.jpg" 
                    alt="Red Team Operations"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-raisin-black/60" />
                </div>
              </div>
            </div>

            {/* Security Training Card */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyber-cyan/10 to-electric-blue/20 backdrop-blur-sm border border-cyber-cyan/30 hover:border-cyber-cyan/60 transition-all duration-500 hover:transform hover:scale-105 h-80">
              <div className="flex h-full">
                <div className="relative w-2/5 overflow-hidden">
                  <img 
                    src="/images/TechWave.webp" 
                    alt="Security Training"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-raisin-black/60" />
                </div>
                <div className="w-3/5 p-8 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-ghost-white mb-4 group-hover:text-cyber-cyan transition-colors duration-300">
                    Security Awareness Training
                  </h3>
                  <p className="body-text mb-6 text-lg">
                    Comprehensive cybersecurity education programs designed to 
                    transform your workforce into your strongest defense against 
                    social engineering and phishing attacks.
                  </p>
                  <div className="mt-auto">
                    <Button variant="cyber" size="lg" className="hover:shadow-lg hover:shadow-cyber-cyan/25 transform hover:scale-105">
                      Know More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

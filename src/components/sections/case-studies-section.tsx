'use client'

import { useState, useRef } from 'react'
import { Button } from '@/components/ui/button'

const caseStudies = [
  {
    id: 1,
    company: "GlobalTech Industries",
    industry: "Manufacturing",
    challenge: "Ransomware Attack Prevention",
    description: "A multinational manufacturing company faced increasing sophistication in ransomware attacks targeting their industrial control systems.",
    solution: "Implemented our Pro Threat Detection and Real-Time Monitoring systems with custom ICS/SCADA protection protocols.",
    results: [
      { metric: "99.8%", label: "Threat Detection Rate" },
      { metric: "0", label: "Successful Breaches" },
      { metric: "45%", label: "Reduced Security Incidents" },
      { metric: "24/7", label: "Continuous Monitoring" }
    ],
    shapeType: "cube",
    bgGradient: "from-steel-pink/10 via-finn-purple/5 to-deep-purple/10",
    borderGradient: "from-steel-pink/30 via-cyber-cyan/20 to-steel-pink/30",
    image: "/images/GlobalTech.jpg",
    cardImage: "/images/GlobalTech.jpg"
  },
  {
    id: 2,
    company: "SecureBank Financial",
    industry: "Banking",
    challenge: "Advanced Persistent Threat Detection",
    description: "A major financial institution required enhanced protection against sophisticated APT attacks targeting customer financial data.",
    solution: "Deployed our Advanced AI Threat Detection with behavioral analysis and real-time transaction monitoring.",
    results: [
      { metric: "100%", label: "APT Detection Rate" },
      { metric: "0", label: "Data Breaches" },
      { metric: "60%", label: "Faster Response Time" },
      { metric: "$2.5M", label: "Saved from Fraud" }
    ],
    shapeType: "pyramid",
    bgGradient: "from-cyber-cyan/10 via-steel-pink/5 to-finn-purple/10",
    borderGradient: "from-cyber-cyan/30 via-steel-pink/20 to-cyber-cyan/30",
    image: "/images/Banking.jpg",
    cardImage: "/images/Banking.jpg"
  },
  {
    id: 3,
    company: "HealthCare Systems",
    industry: "Healthcare",
    challenge: "HIPAA Compliance & Data Protection",
    description: "A major healthcare network needed comprehensive protection for patient data while maintaining HIPAA compliance across multiple facilities.",
    solution: "Implemented our Enterprise Security Suite with healthcare-specific compliance monitoring and encrypted data transmission protocols.",
    results: [
      { metric: "100%", label: "HIPAA Compliance" },
      { metric: "0", label: "Data Violations" },
      { metric: "75%", label: "Faster Incident Response" },
      { metric: "99.9%", label: "System Uptime" }
    ],
    shapeType: "sphere",
    bgGradient: "from-finn-purple/10 via-cyber-cyan/5 to-steel-pink/10",
    borderGradient: "from-finn-purple/30 via-cyber-cyan/20 to-steel-pink/30",
    image: "/images/Hospital.jpg",
    cardImage: "/images/Hospital.jpg"
  }
]

const MetallicShape = ({ type }: { type: string }) => {
  switch (type) {
    case 'cube':
      return <div className="metallic-cube" />
    case 'pyramid':
      return <div className="metallic-pyramid" />
    case 'sphere':
      return <div className="metallic-sphere" />
    default:
      return <div className="metallic-cube" />
  }
}

export default function CaseStudiesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (cardId: number, event: React.MouseEvent) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    
    // Calculate modal position based on card position
    const rect = event.currentTarget.getBoundingClientRect();
    const isThirdCard = cardId === 3; // Third card should open modal to the left
    
    let modalX, modalY;
    
    if (isThirdCard) {
      // Position modal to the left of the third card (rightmost)
      modalX = rect.left - 384 - 24; // 384px modal width + 24px gap
      modalY = rect.top;
    } else {
      // Position modal to the right for first two cards
      modalX = rect.right + 24; // 24px gap from card
      modalY = rect.top;
    }
    
    setModalPosition({ x: modalX, y: modalY });
    setHoveredCard(cardId);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setHoveredCard(null);
    }, 150);
    hoverTimeoutRef.current = timeout;
  };

  const handleModalMouseEnter = (cardId: number) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setHoveredCard(cardId);
  };

  const handleModalMouseLeave = () => {
    const timeout = setTimeout(() => {
      setHoveredCard(null);
    }, 150);
    hoverTimeoutRef.current = timeout;
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-raisin-black via-raisin-black/95 to-raisin-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-steel-pink/8 via-finn-purple/6 to-deep-purple/4 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-cyber-cyan/8 via-finn-purple/6 to-steel-pink/4 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-finn-purple/10 rounded-full blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-steel-pink/20 to-cyber-cyan/20 border border-steel-pink/30 mb-6">
            <span className="text-cyber-cyan text-sm font-medium uppercase tracking-wider">
              Real-World Impact
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-ghost-white mb-6">
            Success Stories That{' '}
            <span className="text-gradient-cyber">Define Excellence</span>
          </h2>
          
          <p className="text-xl text-ghost-white/70 max-w-3xl mx-auto leading-relaxed">
            Discover how industry leaders transformed their cybersecurity posture with our cutting-edge solutions, 
            achieving measurable results and uncompromising protection.
          </p>
        </div>

        {/* Compact Case Study Cards */}
        <div className="case-studies-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="case-study-card group relative rounded-2xl bg-gradient-to-br from-steel-pink/10 via-finn-purple/5 to-deep-purple/10 backdrop-blur-sm border border-steel-pink/30 transition-all duration-500 hover:shadow-2xl hover:shadow-steel-pink/20 cursor-pointer"
              onMouseEnter={(e) => handleMouseEnter(study.id, e)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden rounded-t-2xl">
                <img 
                  src={study.cardImage} 
                  alt={study.company}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-raisin-black/80 via-transparent to-transparent" />
                
                {/* Industry Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-cyber-cyan/20 border border-cyber-cyan/30 text-cyber-cyan text-xs font-medium uppercase tracking-wider backdrop-blur-sm">
                    {study.industry}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-ghost-white mb-2">
                  {study.company}
                </h3>
                <h4 className="text-steel-pink font-semibold mb-3 text-sm">
                  {study.challenge}
                </h4>
                <p className="text-ghost-white/70 text-sm leading-relaxed mb-4 line-clamp-3">
                  {study.description}
                </p>
                
                {/* Quick Stats */}
                <div className="flex justify-between items-center text-xs">
                  <div className="text-center">
                    <div className="text-lg font-bold text-gradient-primary">99.8%</div>
                    <div className="text-ghost-white/60">Detection</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gradient-cyber">0</div>
                    <div className="text-ghost-white/60">Breaches</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gradient-primary">45%</div>
                    <div className="text-ghost-white/60">Reduced</div>
                  </div>
                </div>

                {/* View Details Button */}
                <div className="mt-4 pt-4 border-t border-steel-pink/20">
                  <span className="text-cyber-cyan text-sm font-medium group-hover:text-electric-blue transition-colors">
                    View Full Case Study →
                  </span>
                </div>
              </div>

              {/* Glassmorphism overlay */}
              <div className="absolute inset-0 bg-white/5 rounded-2xl backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Global Modal - Positioned next to hovered card */}
        {hoveredCard && (
          <div 
            className="fixed w-96 bg-gradient-to-br from-steel-pink/15 via-finn-purple/10 to-deep-purple/15 backdrop-blur-md border border-steel-pink/40 rounded-2xl p-6 shadow-2xl z-[999999] pointer-events-auto"
            style={{ 
              opacity: 1,
              visibility: 'visible',
              left: `${modalPosition.x}px`,
              top: `${modalPosition.y}px`
            }}
            onMouseEnter={() => handleModalMouseEnter(hoveredCard)}
            onMouseLeave={handleModalMouseLeave}
          >
            {(() => {
              const study = caseStudies.find(s => s.id === hoveredCard);
              if (!study) return null;
              
              return (
                <>
                  {/* Header with 3D Shape */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-ghost-white mb-1">
                        {study.company}
                      </h3>
                      <p className="text-cyber-cyan text-sm font-medium uppercase tracking-wider">
                        {study.industry}
                      </p>
                    </div>
                    <div className="flex-shrink-0 ml-4 scale-75">
                      <MetallicShape type={study.shapeType} />
                    </div>
                  </div>

                  {/* Challenge */}
                  <div className="mb-4">
                    <h4 className="text-steel-pink font-semibold mb-2 text-xs uppercase tracking-wide">
                      Challenge
                    </h4>
                    <p className="text-ghost-white/90 text-sm font-medium mb-2">
                      {study.challenge}
                    </p>
                    <p className="text-ghost-white/70 text-xs leading-relaxed">
                      {study.description}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="mb-4">
                    <h4 className="text-cyber-cyan font-semibold mb-2 text-xs uppercase tracking-wide">
                      Solution
                    </h4>
                    <p className="text-ghost-white/80 text-xs leading-relaxed">
                      {study.solution}
                    </p>
                  </div>

                  {/* Results Grid */}
                  <div className="mb-4">
                    <h4 className="text-electric-blue font-semibold mb-3 text-xs uppercase tracking-wide">
                      Results Achieved
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {study.results.map((result, idx) => (
                        <div 
                          key={idx} 
                          className="text-center p-2 rounded-lg bg-gradient-to-br from-steel-pink/10 to-cyber-cyan/10 border border-steel-pink/20"
                        >
                          <div className="text-sm font-bold text-gradient-primary mb-1">
                            {result.metric}
                          </div>
                          <div className="text-xs text-ghost-white/70 leading-tight">
                            {result.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    size="sm" 
                    className="w-full bg-gradient-to-r from-steel-pink to-cyber-cyan hover:from-cyber-cyan hover:to-steel-pink text-raisin-black font-semibold text-xs"
                  >
                    View Full Report
                  </Button>
                </>
              );
            })()}
          </div>
        )}

        {/* Section CTA */}
        <div className="text-center">
          <p className="text-ghost-white/60 text-lg mb-6">
            Ready to achieve similar results for your organization?
          </p>
          <Button 
            variant="ghost" 
            size="lg" 
            className="border-2 border-cyber-cyan/60 text-cyber-cyan hover:text-raisin-black hover:bg-cyber-cyan shadow-lg hover:shadow-cyber-cyan/50 transition-all duration-500 transform hover:scale-105"
          >
            View All Case Studies
          </Button>
        </div>
      </div>
    </section>
  )
}

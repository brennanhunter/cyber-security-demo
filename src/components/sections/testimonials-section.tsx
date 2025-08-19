'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function TestimonialsSection() {
  const [showAll, setShowAll] = useState(false)
  
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      position: "CISO",
      company: "TechCorp Industries",
      avatar: "/avatars/sarah-chen.jpg",
      quote: "S.C.P's penetration testing revealed vulnerabilities we never knew existed. Their comprehensive approach saved us from what could have been a catastrophic breach.",
      rating: 5,
      gridClass: "col-span-2 row-span-1", // Large testimonial
      bgClass: "from-steel-pink/20 to-finn-purple/30",
      borderClass: "border-steel-pink/40",
      shadowClass: "hover:shadow-steel-pink/25"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      position: "IT Director",
      company: "Global Finance Corp",
      avatar: "/avatars/marcus-rodriguez.jpg",
      quote: "Outstanding red team operations. They simulated real-world attacks that exposed critical gaps in our security posture.",
      rating: 5,
      gridClass: "col-span-1 row-span-1",
      bgClass: "from-finn-purple/20 to-deep-purple/30",
      borderClass: "border-finn-purple/40",
      shadowClass: "hover:shadow-finn-purple/25"
    },
    {
      id: 3,
      name: "Dr. Emily Watson",
      position: "Security Consultant",
      company: "CyberGuard Solutions",
      avatar: "/avatars/emily-watson.jpg",
      quote: "Their security awareness training transformed our team's mindset. We went from being the weakest link to our strongest defense against social engineering attacks. The interactive modules and real-world scenarios made all the difference.",
      rating: 5,
      gridClass: "col-span-1 row-span-2", // Tall testimonial
      bgClass: "from-cyber-cyan/20 to-electric-blue/30",
      borderClass: "border-cyber-cyan/40",
      shadowClass: "hover:shadow-cyber-cyan/25"
    },
    {
      id: 4,
      name: "James Kim",
      position: "Founder & CEO",
      company: "StartupTech",
      avatar: "/avatars/james-kim.jpg",
      quote: "As a startup, we needed enterprise-level security without the enterprise budget. S.C.P delivered exactly that.",
      rating: 5,
      gridClass: "col-span-1 row-span-1",
      bgClass: "from-deep-purple/20 to-raisin-black/40",
      borderClass: "border-deep-purple/40",
      shadowClass: "hover:shadow-deep-purple/25"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      position: "VP of Operations",
      company: "MedTech Solutions",
      avatar: "/avatars/lisa-thompson.jpg",
      quote: "S.C.P's incident response team contained our breach in under 2 hours. Their forensic analysis helped us understand exactly what happened and how to prevent it in the future. Truly world-class expertise.",
      rating: 5,
      gridClass: "col-span-2 row-span-1",
      bgClass: "from-steel-pink/20 to-cyber-cyan/20",
      borderClass: "border-steel-pink/40",
      shadowClass: "hover:shadow-steel-pink/25"
    },
    // Additional testimonials
    {
      id: 6,
      name: "Michael Foster",
      position: "CTO",
      company: "DataSecure Inc",
      avatar: "/avatars/michael-foster.jpg",
      quote: "The vulnerability assessment was incredibly thorough. They found issues our previous security firm missed completely.",
      rating: 5,
      gridClass: "col-span-1 row-span-1",
      bgClass: "from-cyber-cyan/20 to-electric-blue/30",
      borderClass: "border-cyber-cyan/40",
      shadowClass: "hover:shadow-cyber-cyan/25"
    },
    {
      id: 7,
      name: "Rebecca Zhang",
      position: "Security Manager",
      company: "CloudTech Corp",
      avatar: "/avatars/rebecca-zhang.jpg",
      quote: "Their continuous monitoring service gives us complete peace of mind. We sleep better knowing S.C.P is watching our infrastructure 24/7.",
      rating: 5,
      gridClass: "col-span-2 row-span-1",
      bgClass: "from-finn-purple/20 to-deep-purple/30",
      borderClass: "border-finn-purple/40",
      shadowClass: "hover:shadow-finn-purple/25"
    },
    {
      id: 8,
      name: "David Wilson",
      position: "IT Manager",
      company: "RetailChain Plus",
      avatar: "/avatars/david-wilson.jpg",
      quote: "Compliance was always a nightmare until S.C.P stepped in. They made SOC 2 certification painless.",
      rating: 5,
      gridClass: "col-span-1 row-span-1",
      bgClass: "from-steel-pink/20 to-finn-purple/30",
      borderClass: "border-steel-pink/40",
      shadowClass: "hover:shadow-steel-pink/25"
    },
    {
      id: 9,
      name: "Angela Martinez",
      position: "Head of Security",
      company: "FinanceFirst",
      avatar: "/avatars/angela-martinez.jpg",
      quote: "The threat intelligence reports are invaluable. We're always one step ahead of potential attacks now.",
      rating: 5,
      gridClass: "col-span-1 row-span-1",
      bgClass: "from-deep-purple/20 to-raisin-black/40",
      borderClass: "border-deep-purple/40",
      shadowClass: "hover:shadow-deep-purple/25"
    }
  ]

  const visibleTestimonials = showAll ? testimonials : testimonials.slice(0, 5)

  return (
    <section className="relative bg-raisin-black py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-finn-purple/5 via-transparent to-cyber-cyan/5" />
        
        {/* Floating particles/dots */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-steel-pink/30 rounded-full animate-pulse" />
        <div className="absolute top-40 right-32 w-1 h-1 bg-cyber-cyan/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-electric-blue/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-finn-purple/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="relative z-10 w-full px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="label-text mb-4">
            Client Success Stories
          </div>
          <h2 className="heading-section mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="body-large max-w-3xl mx-auto">
            Discover how S.C.P has protected organizations worldwide from cyber threats, 
            delivering measurable security improvements and peace of mind.
          </p>
        </div>

        {/* Testimonials Grid - Full Width */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12 w-full transition-all duration-700 ease-in-out">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`${testimonial.gridClass} group relative rounded-2xl bg-gradient-to-br ${testimonial.bgClass} backdrop-blur-sm border ${testimonial.borderClass} p-6 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${testimonial.shadowClass} ${
                  index >= 6 ? 'animate-fadeInUp' : ''
                }`}
                style={{
                  animationDelay: index >= 6 ? `${(index - 6) * 100}ms` : '0ms'
                }}
              >
                {/* Glassmorphism overlay */}
                <div className="absolute inset-0 bg-white/5 rounded-2xl backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col">
                  {/* User Details */}
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-steel-pink/20 to-cyber-cyan/20 border border-steel-pink/30 flex items-center justify-center mr-4 text-ghost-white font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="text-ghost-white font-semibold text-sm">
                        {testimonial.name}
                      </h4>
                      <p className="text-ghost-white/70 text-xs">
                        {testimonial.position}
                      </p>
                      <p className="text-cyber-cyan text-xs font-medium">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="flex-1 text-ghost-white/90 text-sm leading-relaxed mb-4">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Rating */}
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-steel-pink"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Fade out overlay when not showing all */}
          {!showAll && (
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-raisin-black via-raisin-black/80 to-transparent pointer-events-none transition-opacity duration-700 ease-in-out" />
          )}
        </div>

        {/* Read More / Show Less Button */}
        <div className="text-center mb-12">
          <Button 
            variant="ghost" 
            size="lg" 
            onClick={() => setShowAll(!showAll)}
            className="border-2 border-cyber-cyan/60 text-cyber-cyan hover:text-raisin-black hover:bg-cyber-cyan shadow-lg hover:shadow-cyber-cyan/50 transition-all duration-500 transform hover:scale-105"
          >
            <span className="flex items-center">
              {showAll ? 'Show Less' : 'Read More Testimonials'}
              <svg 
                className={`ml-2 w-4 h-4 transition-transform duration-500 ease-in-out ${showAll ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </Button>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p className="body-text mb-6">
            Ready to join our satisfied clients? Let's secure your digital future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="primary" 
              size="lg" 
              className="hover:shadow-lg hover:shadow-steel-pink/25 transform hover:scale-105"
            >
              Get Your Security Assessment
            </Button>
            <Button 
              variant="ghost" 
              size="lg" 
              className="border-2 border-cyber-cyan/60 hover:shadow-lg hover:shadow-cyber-cyan/25 transform hover:scale-105"
            >
              View Case Studies
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

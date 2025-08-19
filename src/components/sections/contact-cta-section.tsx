'use client'

import { Button } from '@/components/ui/button'

export default function ContactCtaSection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-raisin-black to-raisin-black/95 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-steel-pink/10 to-cyber-cyan/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute top-20 right-20 w-32 h-32 bg-steel-pink/20 rounded-full blur-2xl" />
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-cyber-cyan/20 rounded-full blur-2xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          <span className="text-gradient-primary">Ready to Secure</span>
          <br />
          <span className="text-ghost-white">Your Digital Future?</span>
        </h2>

        {/* Subtext */}
        <p className="text-xl md:text-2xl text-ghost-white/80 mb-8 leading-relaxed max-w-3xl mx-auto">
          Don't wait for a security breach to take action. Our expert team is ready to fortify your digital infrastructure with cutting-edge cybersecurity solutions.
        </p>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gradient-primary mb-2">24/7</div>
            <div className="text-ghost-white/70 text-sm uppercase tracking-wider">Monitoring</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gradient-cyber mb-2">99.8%</div>
            <div className="text-ghost-white/70 text-sm uppercase tracking-wider">Threat Detection</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gradient-primary mb-2">&lt;5min</div>
            <div className="text-ghost-white/70 text-sm uppercase tracking-wider">Response Time</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-steel-pink to-cyber-cyan hover:from-cyber-cyan hover:to-steel-pink text-raisin-black font-bold text-lg px-8 py-4 shadow-2xl hover:shadow-steel-pink/50 transform hover:scale-105 transition-all duration-300 pulse-glow"
          >
            Get Free Security Assessment
          </Button>
          
          <Button 
            variant="ghost" 
            size="lg" 
            className="border-2 border-cyber-cyan/60 text-cyber-cyan hover:text-raisin-black hover:bg-cyber-cyan shadow-lg hover:shadow-cyber-cyan/50 transition-all duration-500 transform hover:scale-105 text-lg px-8 py-4"
          >
            Schedule Consultation
          </Button>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-steel-pink/20">
          <p className="text-ghost-white/60 mb-4">
            Questions? Our security experts are standing by
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm">
            <a 
              href="tel:+1-800-SECURE-1" 
              className="text-cyber-cyan hover:text-steel-pink transition-colors duration-300 font-medium"
            >
              📞 1-800-SECURE-1
            </a>
            <a 
              href="mailto:security@cyberguard.com" 
              className="text-cyber-cyan hover:text-steel-pink transition-colors duration-300 font-medium"
            >
              ✉️ security@cyberguard.com
            </a>
            <span className="text-ghost-white/50">
              🕒 Available 24/7/365
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

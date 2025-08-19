import { Metadata } from 'next'
import PageWrapper from '@/components/layout/page-wrapper'
import HeroSection from '@/components/sections/hero-section'
import ServicesSection from '@/components/sections/services-section'
import TestimonialsSection from '@/components/sections/testimonials-section'

export const metadata: Metadata = {
  title: 'S.C.P Cybersecurity Solutions | Landing Page',
  description: 'Professional cybersecurity solutions with cutting-edge technology and lightning-fast response times.',
}

export default function LandingPage() {
  return (
    <PageWrapper>
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      
      {/* Placeholder for additional sections */}
      <section className="min-h-screen bg-raisin-black text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">More sections coming soon...</h2>
          <p className="text-gray-400">This is where we'll add the rest of the landing page content.</p>
        </div>
      </section>
    </PageWrapper>
  )
}
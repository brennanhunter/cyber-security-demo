import { Metadata } from 'next'
import PageWrapper from '@/components/layout/page-wrapper'
import HeroSection from '@/components/sections/hero-section'
import ServicesSection from '@/components/sections/services-section'
import TestimonialsSection from '@/components/sections/testimonials-section'
import CaseStudiesSection from '@/components/sections/case-studies-section'
import ContactCtaSection from '@/components/sections/contact-cta-section'

export const metadata: Metadata = {
  title: 'S.C.P Cybersecurity Solutions | Landing Page',
  description: 'Professional cybersecurity solutions with cutting-edge technology and lightning-fast response times.',
}

export default function LandingPage() {
  return (
    <PageWrapper>
      <HeroSection />
      <ServicesSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <ContactCtaSection />
    </PageWrapper>
  )
}
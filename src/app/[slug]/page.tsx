import { notFound } from 'next/navigation'
import { getService, getServiceMeta, getAllServices } from '@/lib/sanity-queries'
import { Metadata } from 'next'
import PageWrapper from '@/components/layout/page-wrapper'
import { HeroSection, ScopeSection, ProcessSection, DeliverablesSection, IndustriesClientsSection, CaseStudiesSection, FAQSection, PricingSection } from '@/components/service'

interface ServicePageProps {
  params: Promise<{
    slug: string
  }>
}

// Generate metadata for SEO
export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const service = await getServiceMeta(slug)
  
  if (!service) {
    return {
      title: 'Service Not Found',
    }
  }

  return {
    title: service.seo?.title || service.title,
    description: service.seo?.description || service.title,
    openGraph: {
      title: service.seo?.title || service.title,
      description: service.seo?.description || service.title,
      images: service.heroMedia?.asset?.asset?.url ? [service.heroMedia.asset.asset.url] : [],
    },
  }
}

// Generate static paths for all services
export async function generateStaticParams() {
  const services = await getAllServices()
  
  return services.map((service: { slug: { current: string } }) => ({
    slug: service.slug.current,
  }))
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = await getService(slug)

  if (!service) {
    notFound()
  }



  return (
    <PageWrapper>
      <HeroSection service={service} />
      <ScopeSection service={service} />
      <ProcessSection service={service} />
      <DeliverablesSection service={service} />
      <IndustriesClientsSection service={service} />
      <CaseStudiesSection service={service} />
      <FAQSection service={service} />
      <PricingSection service={service} />
    </PageWrapper>
  )
}

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

  // Rich text components for PortableText - Professional styling
  const richTextComponents = {
    block: {
      normal: ({children}: {children: React.ReactNode}) => <p className="mb-4 leading-relaxed">{children}</p>,
      h2: ({children}: {children: React.ReactNode}) => <h2 className="text-2xl font-bold mb-4 text-gray-900">{children}</h2>,
      h3: ({children}: {children: React.ReactNode}) => <h3 className="text-xl font-bold mb-3 text-gray-800">{children}</h3>,
    },
    marks: {
      strong: ({children}: {children: React.ReactNode}) => <strong className="font-bold text-blue-600">{children}</strong>,
      em: ({children}: {children: React.ReactNode}) => <em className="italic text-gray-700">{children}</em>,
    },
    list: {
      bullet: ({children}: {children: React.ReactNode}) => <ul className="list-disc list-inside space-y-2 mb-4 ml-4">{children}</ul>,
      number: ({children}: {children: React.ReactNode}) => <ol className="list-decimal list-inside space-y-2 mb-4 ml-4">{children}</ol>,
    }
  }

  return (
    <PageWrapper>
      <HeroSection service={service} richTextComponents={richTextComponents} />
      <ScopeSection service={service} richTextComponents={richTextComponents} />
      <ProcessSection service={service} richTextComponents={richTextComponents} />
      <DeliverablesSection service={service} richTextComponents={richTextComponents} />
      <IndustriesClientsSection service={service} richTextComponents={richTextComponents} />
      <CaseStudiesSection service={service} richTextComponents={richTextComponents} />
      <FAQSection service={service} />
      <PricingSection service={service} />
    </PageWrapper>
  )
}

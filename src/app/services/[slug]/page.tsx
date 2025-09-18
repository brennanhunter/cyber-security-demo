import { notFound } from 'next/navigation'
import { getService, getAllServices } from '@/lib/sanity-queries'
import { urlFor } from '@/lib/sanity'
import ServicePageContent from './ServicePageContent'
import { Metadata } from 'next'

interface ServicePageProps {
  params: Promise<{
    slug: string
  }>
}

// Generate metadata for SEO
export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const service = await getService(slug)
  
  if (!service) {
    return {
      title: 'Service Not Found',
    }
  }

  return {
    title: service.seo?.title || service.title,
    description: service.seo?.description || service.shortDescription,
    openGraph: {
      title: service.seo?.title || service.title,
      description: service.seo?.description || service.shortDescription,
      images: service.seo?.ogImage ? [urlFor(service.seo.ogImage).url()] : [],
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

  return <ServicePageContent service={service} />
}

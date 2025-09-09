import { notFound } from 'next/navigation'
import { getService, getAllServices } from '@/lib/sanity-queries'
import { PortableText } from '@portabletext/react'
import { urlFor } from '@/lib/sanity'
import PageWrapper from '@/components/layout/page-wrapper'
import { Metadata } from 'next'

interface ServicePageProps {
  params: {
    slug: string
  }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = await getService(params.slug)
  
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
  
  return services.map((service: any) => ({
    slug: service.slug.current,
  }))
}

export default async function ServicePage({ params }: ServicePageProps) {
  const service = await getService(params.slug)

  if (!service) {
    notFound()
  }

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-raisin-black">
        {service.heroSection?.backgroundImage && (
          <div className="absolute inset-0 z-0">
            <img 
              src={urlFor(service.heroSection.backgroundImage).url()} 
              alt=""
              className="w-full h-full object-cover opacity-20"
            />
          </div>
        )}
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-steel-pink to-finn-purple bg-clip-text text-transparent">
            {service.heroSection?.headline || service.title}
          </h1>
          
          {service.heroSection?.subtitle && (
            <p className="text-xl md:text-2xl text-ghost-white/80 mb-8 max-w-2xl mx-auto">
              {service.heroSection.subtitle}
            </p>
          )}

          {service.heroSection?.ctaText && service.heroSection?.ctaLink && (
            <a 
              href={service.heroSection.ctaLink}
              className="inline-block bg-steel-pink hover:bg-steel-pink/80 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              {service.heroSection.ctaText}
            </a>
          )}
        </div>
      </section>

      {/* Features Section */}
      {service.features && service.features.length > 0 && (
        <section className="py-20 bg-raisin-black">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-ghost-white">
              Key Features
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.features.map((feature: any, index: number) => (
                <div key={index} className="bg-raisin-black/50 border border-steel-pink/20 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-steel-pink">
                    {feature.title}
                  </h3>
                  
                  {feature.description && (
                    <p className="text-ghost-white/80">
                      {feature.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Content Section */}
      {service.content && (
        <section className="py-20 bg-raisin-black">
          <div className="max-w-4xl mx-auto px-6">
            <div className="prose prose-lg prose-invert max-w-none">
              <PortableText 
                value={service.content}
                components={{
                  types: {
                    // We'll add custom components here later for animations and videos
                  }
                }}
              />
            </div>
          </div>
        </section>
      )}

      {/* Pricing Section */}
      {service.pricing && (
        <section className="py-20 bg-raisin-black/50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-ghost-white">
              Pricing
            </h2>
            
            {service.pricing.startingPrice && (
              <div className="mb-6">
                <span className="text-5xl font-bold text-steel-pink">
                  ${service.pricing.startingPrice}
                </span>
                {service.pricing.pricingModel && (
                  <span className="text-xl text-ghost-white/60 ml-2">
                    / {service.pricing.pricingModel}
                  </span>
                )}
              </div>
            )}
            
            {service.pricing.pricingDetails && (
              <p className="text-lg text-ghost-white/80 max-w-2xl mx-auto">
                {service.pricing.pricingDetails}
              </p>
            )}
          </div>
        </section>
      )}
    </PageWrapper>
  )
}

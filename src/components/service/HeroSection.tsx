import { PortableText } from '@portabletext/react'

interface HeroSectionProps {
  service: {
    title: string
    heroMedia?: {
      type?: string
      asset?: {
        asset?: {
          url?: string
        }
      }
      alt?: string
    }
    category?: {
      title: string
      description?: string
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    overview?: any[]
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  richTextComponents: any
}

export default function HeroSection({ service, richTextComponents }: HeroSectionProps) {
  return (
    <section className="relative py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Category Badge */}
            {service.category && (
              <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full">
                <span className="text-blue-700 font-medium text-sm uppercase tracking-wide">
                  {service.category.title}
                </span>
              </div>
            )}
            
            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {service.title}
            </h1>
            
            {/* Overview */}
            {service.overview && (
              <div className="text-lg md:text-xl text-gray-600 leading-relaxed prose prose-gray max-w-none">
                <PortableText value={service.overview} components={richTextComponents} />
              </div>
            )}

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
                Get Started
              </button>
              
              <a href="#scope" className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-900 font-semibold rounded-lg transition-colors duration-200">
                Learn More
              </a>
            </div>
          </div>

          {/* Right Column - Hero Media */}
          {service.heroMedia?.asset?.asset && (
            <div className="relative">
              {service.heroMedia.type === 'video' ? (
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <video
                    className="w-full h-auto"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={service.heroMedia.asset.asset.url} type="video/mp4" />
                  </video>
                </div>
              ) : (
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <picture>
                    {/* WebP format with fallback */}
                    {service.heroMedia.asset.asset.url && (
                      <>
                        <source 
                          srcSet={`${service.heroMedia.asset.asset.url}?format=webp&w=800&q=80`} 
                          type="image/webp" 
                        />
                        <source 
                          srcSet={`${service.heroMedia.asset.asset.url}?format=jpg&w=800&q=80`} 
                          type="image/jpeg" 
                        />
                        <img 
                          src={`${service.heroMedia.asset.asset.url}?w=800&q=80`}
                          alt={service.heroMedia.alt || service.title}
                          className="w-full h-auto object-cover"
                          loading="eager"
                          fetchPriority="high"
                        />
                      </>
                    )}
                  </picture>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
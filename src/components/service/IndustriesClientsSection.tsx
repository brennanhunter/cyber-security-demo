interface Industry {
  title: string
  slug: { current: string }
  description: string
  icon?: {
    asset?: {
      _id: string
      url: string
    }
    alt?: string
  }
}

interface Client {
  name: string
  slug: { current: string }
  logo?: {
    asset?: {
      _id: string
      url: string
    }
    alt?: string
  }
  website?: string
  isPublic: boolean
}

interface IndustriesClientsSectionProps {
  service: {
    industries?: Industry[]
    clients?: Client[]
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  richTextComponents: any
}

export default function IndustriesClientsSection({ service, richTextComponents }: IndustriesClientsSectionProps) {
  const hasIndustries = service.industries && service.industries.length > 0
  const hasClients = service.clients && service.clients.length > 0

  if (!hasIndustries && !hasClients) {
    return null
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Industries & Clients
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by organizations across diverse industries to secure their digital assets and protect their future.
          </p>
        </div>

        <div className="space-y-16">
          {/* Industries Section */}
          {hasIndustries && (
            <div>
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Industries We Serve
                </h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Our specialized expertise spans across multiple sectors, each with unique security challenges and compliance requirements.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {service.industries!.map((industry, index) => (
                  <div 
                    key={industry.slug.current}
                    className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 hover:border-blue-300"
                  >
                    {/* Industry Icon */}
                    <div className="mb-6">
                      {industry.icon?.asset?.url ? (
                        <div className="w-16 h-16 rounded-xl overflow-hidden bg-gradient-to-r from-blue-100 to-purple-100 p-3 group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">
                          <img 
                            src={industry.icon.asset.url}
                            alt={industry.icon.alt || industry.title}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      ) : (
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl flex items-center justify-center text-blue-600 group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                      )}
                    </div>

                    {/* Industry Content */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                        {industry.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {industry.description}
                      </p>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Clients Section */}
          {hasClients && (
            <div>
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Trusted By Leading Organizations
                </h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Join the ranks of forward-thinking organizations that have chosen our cybersecurity expertise to protect their most valuable assets.
                </p>
              </div>

              {/* Client Logos Grid */}
              <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 items-center">
                  {service.clients!
                    .filter(client => client.isPublic) // Only show public clients
                    .map((client, index) => (
                    <div 
                      key={client.slug.current}
                      className="group flex items-center justify-center p-4 rounded-xl hover:bg-gray-50 transition-all duration-300"
                    >
                      {client.logo?.asset?.url ? (
                        <div className="relative">
                          <img 
                            src={client.logo.asset.url}
                            alt={client.logo.alt || client.name}
                            className="max-h-12 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100"
                          />
                          {client.website && (
                            <a 
                              href={client.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="absolute inset-0 flex items-center justify-center bg-blue-600/90 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          )}
                        </div>
                      ) : (
                        <div className="flex items-center justify-center h-12 px-4 bg-gray-100 rounded-lg group-hover:bg-gray-200 transition-colors duration-300">
                          <span className="text-sm font-medium text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                            {client.name}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Additional Trust Indicators */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div>
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1">Enterprise Grade</h4>
                      <p className="text-sm text-gray-600">Fortune 500 trusted security</p>
                    </div>

                    <div>
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1">Compliance Ready</h4>
                      <p className="text-sm text-gray-600">ISO, SOC, GDPR certified</p>
                    </div>

                    <div>
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1">24/7 Support</h4>
                      <p className="text-sm text-gray-600">Round-the-clock protection</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-white">
              <div className="max-w-3xl mx-auto">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  Ready to Join Our Trusted Clients?
                </h3>
                <p className="text-lg mb-8 text-blue-100">
                  Discover how our industry-specific expertise can strengthen your organization&apos;s security posture.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200 shadow-lg hover:shadow-xl">
                    Schedule Consultation
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </button>
                  
                  <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200">
                    View Case Studies
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
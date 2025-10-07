interface CaseStudy {
  title: string
  slug: { current: string }
  summary: string
  featuredImage?: {
    asset?: {
      _id: string
      url: string
    }
    alt?: string
  }
  timeline?: string
  isPublic: boolean
}

interface Certificate {
  title: string
  slug: { current: string }
  issuer: string
  badge?: {
    asset?: {
      _id: string
      url: string
    }
    alt?: string
  }
}

interface CaseStudiesSectionProps {
  service: {
    caseStudies?: CaseStudy[]
    certs?: Certificate[]
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  richTextComponents: any
}

export default function CaseStudiesSection({ service, richTextComponents }: CaseStudiesSectionProps) {
  const hasCaseStudies = service.caseStudies && service.caseStudies.length > 0
  const hasCertifications = service.certs && service.certs.length > 0
  
  // Filter for public case studies only
  const publicCaseStudies = service.caseStudies?.filter(study => study.isPublic) || []

  if (!hasCaseStudies && !hasCertifications) {
    return null
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Proven Results & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world success stories and industry certifications that demonstrate our commitment to cybersecurity excellence.
          </p>
        </div>

        <div className="space-y-16">
          {/* Case Studies Section */}
          {publicCaseStudies.length > 0 && (
            <div>
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Success Stories
                </h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Discover how we&apos;ve helped organizations like yours overcome complex cybersecurity challenges and achieve their security objectives.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {publicCaseStudies.slice(0, 6).map((caseStudy, index) => (
                  <div 
                    key={caseStudy.slug.current}
                    className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 hover:border-blue-300"
                  >
                    {/* Case Study Image */}
                    {caseStudy.featuredImage?.asset?.url ? (
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={`${caseStudy.featuredImage.asset.url}?w=600&h=300&fit=crop&q=80`}
                          alt={caseStudy.featuredImage.alt || caseStudy.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        {/* Timeline Badge */}
                        {caseStudy.timeline && (
                          <div className="absolute top-4 right-4 px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                            {caseStudy.timeline}
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                        <div className="text-center">
                          <svg className="w-16 h-16 text-blue-600 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          {caseStudy.timeline && (
                            <span className="text-sm font-medium text-blue-800">{caseStudy.timeline}</span>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Case Study Content */}
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                        {caseStudy.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                        {caseStudy.summary}
                      </p>
                      
                      {/* Read More Button */}
                      <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-300">
                        <span className="text-sm">Read Case Study</span>
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* View All Case Studies */}
              {publicCaseStudies.length > 6 && (
                <div className="text-center mt-12">
                  <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    View All Case Studies
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Certifications Section */}
          {hasCertifications && (
            <div>
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Certifications & Credentials
                </h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Industry-recognized certifications and credentials that validate our expertise and commitment to cybersecurity excellence.
                </p>
              </div>

              {/* Certifications Grid */}
              <div className="bg-gradient-to-r from-gray-50 via-blue-50 to-purple-50 rounded-3xl p-8 lg:p-12">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                  {service.certs!.map((cert, index) => (
                    <div 
                      key={cert.slug.current}
                      className="group flex flex-col items-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                    >
                      {/* Certificate Badge */}
                      <div className="mb-4">
                        {cert.badge?.asset?.url ? (
                          <img 
                            src={cert.badge.asset.url}
                            alt={cert.badge.alt || cert.title}
                            className="w-16 h-16 object-contain group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">
                            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                            </svg>
                          </div>
                        )}
                      </div>

                      {/* Certificate Info */}
                      <div className="text-center">
                        <h4 className="font-bold text-gray-900 mb-1 text-sm group-hover:text-blue-600 transition-colors duration-300">
                          {cert.title}
                        </h4>
                        <p className="text-xs text-gray-600">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Certification Stats */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">{service.certs!.length}+</div>
                    <div className="text-gray-600">Professional Certifications</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                    <div className="text-gray-600">Industry Compliant</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-cyan-600 mb-2">24/7</div>
                    <div className="text-gray-600">Continuous Monitoring</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
              </div>
              
              <div className="relative z-10 max-w-3xl mx-auto">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  Ready to Become Our Next Success Story?
                </h3>
                <p className="text-lg mb-8 text-blue-100">
                  Join the growing list of organizations that have transformed their security posture with our proven methodologies and expertise.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg">
                    Start Your Project
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                  
                  <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors duration-200">
                    Download Portfolio
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
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
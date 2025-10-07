interface PricingTier {
  label: string
  priceRange: string
  includes: string[]
}

interface Pricing {
  pricingModel: 'Fixed' | 'T&M' | 'Subscription' | 'Custom'
  pricingTiers: PricingTier[]
}

interface PricingSectionProps {
  service: {
    pricing?: Pricing
    title?: string
  }
}

const getPricingModelIcon = (model: string) => {
  switch (model) {
    case 'Fixed':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      )
    case 'T&M':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    case 'Subscription':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    case 'Custom':
    default:
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
  }
}

const getPricingModelDescription = (model: string) => {
  switch (model) {
    case 'Fixed':
      return 'Clear, upfront pricing with no hidden costs'
    case 'T&M':
      return 'Flexible billing based on time and materials'
    case 'Subscription':
      return 'Ongoing monthly or annual service plans'
    case 'Custom':
    default:
      return 'Tailored pricing based on your specific needs'
  }
}

export default function PricingSection({ service }: PricingSectionProps) {
  if (!service.pricing || !service.pricing.pricingTiers || service.pricing.pricingTiers.length === 0) {
    return null
  }

  const { pricing } = service

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Investment & Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Transparent, value-driven pricing designed to deliver maximum ROI for your cybersecurity investment.
          </p>
          
          {/* Pricing Model Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full">
            <div className="mr-3 text-blue-600">
              {getPricingModelIcon(pricing.pricingModel)}
            </div>
            <div className="text-left">
              <div className="font-semibold">{pricing.pricingModel === 'T&M' ? 'Time & Materials' : pricing.pricingModel} Model</div>
              <div className="text-sm opacity-75">{getPricingModelDescription(pricing.pricingModel)}</div>
            </div>
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className={`grid gap-8 ${
          pricing.pricingTiers.length === 1 ? 'max-w-md mx-auto' :
          pricing.pricingTiers.length === 2 ? 'md:grid-cols-2 max-w-4xl mx-auto' :
          'md:grid-cols-2 lg:grid-cols-3'
        }`}>
          {pricing.pricingTiers.map((tier, index) => (
            <div 
              key={tier.label}
              className={`relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border ${
                index === 1 && pricing.pricingTiers.length === 3 
                  ? 'border-blue-300 ring-4 ring-blue-500/20 scale-105' 
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              {/* Popular Badge */}
              {index === 1 && pricing.pricingTiers.length === 3 && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-full shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Tier Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {tier.label}
                </h3>
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
                  {tier.priceRange}
                </div>
                
                {pricing.pricingModel === 'Custom' && (
                  <p className="text-sm text-gray-600">
                    Custom quote based on requirements
                  </p>
                )}
              </div>

              {/* Features List */}
              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  What&apos;s Included
                </h4>
                <ul className="space-y-3">
                  {tier.includes.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <button className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${
                index === 1 && pricing.pricingTiers.length === 3
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
                  : 'bg-white border-2 border-gray-300 hover:border-blue-500 text-gray-900 hover:text-blue-600'
              }`}>
                {pricing.pricingModel === 'Custom' ? 'Request Quote' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 space-y-12">
          {/* Value Proposition */}
          <div className="bg-gradient-to-r from-gray-50 via-blue-50 to-purple-50 rounded-3xl p-8 lg:p-12">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                Why Choose Our {service.title} Service?
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Proven ROI</h4>
                  <p className="text-gray-600">Average 300% return on cybersecurity investment within 12 months</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Risk Reduction</h4>
                  <p className="text-gray-600">99.7% reduction in successful cyber attacks for our clients</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Fast Implementation</h4>
                  <p className="text-gray-600">Rapid deployment with measurable results in weeks, not months</p>
                </div>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-8 lg:p-12 text-white">
              <div className="max-w-3xl mx-auto">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  Ready to Secure Your Organization?
                </h3>
                <p className="text-lg mb-8 text-blue-100">
                  Get a custom security assessment and personalized pricing proposal tailored to your specific needs and budget.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg">
                    Get Custom Quote
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </button>
                  
                  <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors duration-200">
                    Schedule Consultation
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
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
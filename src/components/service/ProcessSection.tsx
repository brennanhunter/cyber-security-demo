import { PortableText } from '@portabletext/react'

interface ProcessStep {
  title: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  detail: any[]
  duration?: string
  order: number
}

interface ProcessSectionProps {
  service: {
    process?: ProcessStep[]
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  richTextComponents: any
}

export default function ProcessSection({ service, richTextComponents }: ProcessSectionProps) {
  if (!service.process || service.process.length === 0) {
    return null
  }

  // Sort process steps by order
  const sortedProcess = [...service.process].sort((a, b) => a.order - b.order)

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A systematic approach designed to deliver exceptional results while keeping you informed every step of the way.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Timeline Line - Hidden on mobile, visible on desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-0.5 h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500"></div>

          {/* Process Steps */}
          <div className="space-y-12 md:space-y-16">
            {sortedProcess.map((step, index) => (
              <div key={step.order} className="relative">
                {/* Step Number Circle */}
                <div className="flex items-center justify-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2 mb-6 md:mb-0">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-lg font-bold shadow-lg mx-auto md:mx-0">
                    {step.order}
                  </div>
                </div>

                {/* Step Content */}
                <div className={`md:w-1/2 ${
                  index % 2 === 0 
                    ? 'md:pr-12 md:text-right md:ml-0' 
                    : 'md:pl-12 md:ml-1/2'
                }`}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    {/* Step Header */}
                    <div className={`mb-6 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      {step.duration && (
                        <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {step.duration}
                        </div>
                      )}
                    </div>

                    {/* Step Details */}
                    <div className={`prose prose-lg max-w-none ${
                      index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                    }`}>
                      <div className="text-gray-700 leading-relaxed">
                        <PortableText 
                          value={step.detail} 
                          components={richTextComponents} 
                        />
                      </div>
                    </div>

                    {/* Step Connector Arrow (Desktop) */}
                    <div className={`hidden md:block absolute top-6 ${
                      index % 2 === 0 
                        ? 'left-full ml-4' 
                        : 'right-full mr-4'
                    }`}>
                      <div className={`w-6 h-0.5 bg-gradient-to-r ${
                        index % 2 === 0 
                          ? 'from-gray-300 to-blue-500' 
                          : 'from-blue-500 to-gray-300'
                      }`}></div>
                    </div>
                  </div>
                </div>

                {/* Mobile Timeline Connector */}
                {index < sortedProcess.length - 1 && (
                  <div className="md:hidden flex justify-center mt-8">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-blue-500 to-purple-500"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-6">
              Let&apos;s discuss your project and walk through our proven process together.
            </p>
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Schedule Consultation
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
'use client'

import { useState } from 'react'
import { PortableText } from '@portabletext/react'

interface FAQ {
  question: string
  answer: Array<{
    _key: string
    _type: string
    children?: Array<{
      _key: string
      _type: string
      text: string
    }>
  }>
}

interface FAQSectionProps {
  service: {
    faqs?: FAQ[]
  }
}

export default function FAQSection({ service }: FAQSectionProps) {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  if (!service.faqs || service.faqs.length === 0) {
    return null
  }

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  // Define rich text components for client-side use
  const richTextComponents = {
    block: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      normal: ({children}: any) => (
        <p className="mb-4 last:mb-0 leading-relaxed text-gray-700">{children}</p>
      ),
    },
    marks: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      strong: ({children}: any) => <strong className="font-semibold text-gray-900">{children}</strong>,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      em: ({children}: any) => <em className="italic">{children}</em>,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      link: ({children, value}: any) => (
        <a 
          href={value?.href} 
          className="text-blue-600 hover:text-blue-700 underline transition-colors duration-200"
          target="_blank" 
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ),
    },
    list: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      bullet: ({children}: any) => (
        <ul className="list-disc list-inside space-y-2 mb-4 ml-4 text-gray-700">{children}</ul>
      ),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      number: ({children}: any) => (
        <ol className="list-decimal list-inside space-y-2 mb-4 ml-4 text-gray-700">{children}</ol>
      ),
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about our cybersecurity services and how we can help protect your organization.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {service.faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200"
            >
              {/* FAQ Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 hover:bg-gray-50"
                aria-expanded={openFAQ === index}
                aria-controls={`faq-answer-${index}`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </h3>
                  
                  {/* Expand/Collapse Icon */}
                  <div className="flex-shrink-0">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center transition-transform duration-300 ${
                      openFAQ === index ? 'rotate-45' : 'rotate-0'
                    }`}>
                      <svg 
                        className="w-4 h-4 text-white" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </button>

              {/* FAQ Answer Content */}
              <div
                id={`faq-answer-${index}`}
                className={`transition-all duration-500 ease-in-out ${
                  openFAQ === index 
                    ? 'max-h-screen opacity-100' 
                    : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="px-8 pb-6 pt-2 border-t border-gray-100">
                  <div className="prose prose-lg max-w-none text-gray-700">
                    <PortableText 
                      value={faq.answer} 
                      components={richTextComponents} 
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Help Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto border border-gray-200">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Still Have Questions?
              </h3>
              
              <p className="text-gray-600 mb-8">
                Our cybersecurity experts are here to help. Get personalized answers to your specific security challenges and requirements.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Schedule Call
              </button>
              
              <button className="inline-flex items-center px-6 py-3 border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-900 font-semibold rounded-lg transition-colors duration-200">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send Message
              </button>
            </div>
          </div>
        </div>

        {/* Quick Contact Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-1">Quick Response</h4>
            <p className="text-sm text-gray-600">Within 2 hours during business hours</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-1">Expert Guidance</h4>
            <p className="text-sm text-gray-600">Certified cybersecurity professionals</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-1">Confidential</h4>
            <p className="text-sm text-gray-600">All conversations are secure and private</p>
          </div>
        </div>
      </div>
    </section>
  )
}
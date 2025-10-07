import { PortableText } from '@portabletext/react'

interface ScopeSectionProps {
  service: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    scope?: any[]
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  richTextComponents: any
}

export default function ScopeSection({ service, richTextComponents }: ScopeSectionProps) {
  // Only render if scope exists
  if (!service.scope) return null

  return (
    <section id="scope" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Service Scope
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="bg-gray-50 border-l-4 border-blue-600 p-8 rounded-r-lg">
          <div className="prose prose-lg max-w-none text-gray-900">
            <PortableText value={service.scope} components={richTextComponents} />
          </div>
        </div>
      </div>
    </section>
  )
}
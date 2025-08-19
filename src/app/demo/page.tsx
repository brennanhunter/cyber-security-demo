import PageWrapper from '@/components/layout/page-wrapper'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Schedule A Demonstration | S.C.P Cybersecurity',
  description: 'See S.C.P\'s world-leading cybersecurity solutions in action. Book your personalized security demonstration today.',
  keywords: ['cybersecurity demo', 'security demonstration', 'penetration testing demo'],
}

export default function DemoPage() {
  return (
    <PageWrapper>
      <div className="min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="glitch" data-text="Schedule A Demonstration">
                Schedule A Demonstration
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              See S.C.P's world-leading cybersecurity solutions in action
            </p>
            <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700 max-w-2xl mx-auto">
              <p className="text-gray-300">
                Demo page coming soon! This will feature our interactive cybersecurity demonstration portal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

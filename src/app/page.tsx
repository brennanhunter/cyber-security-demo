import { Button } from '@/components/ui/button'
import PageWrapper from '@/components/layout/page-wrapper'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'S.C.P - World-Leading Cybersecurity Powered By AI',
  description: 'Standing as the Ultimate Defenders of the Global Digital Ecosystem, Protecting Connections, Empowering Innovations, and Securing a Resilient Future for Generations to Come.',
  keywords: ['cybersecurity', 'AI security', 'penetration testing', 'red team operations', 'cyber defense'],
  openGraph: {
    title: 'S.C.P - World-Leading Cybersecurity Powered By AI',
    description: 'Standing as the Ultimate Defenders of the Global Digital Ecosystem, Protecting Connections, Empowering Innovations, and Securing a Resilient Future for Generations to Come.',
    type: 'website',
    siteName: 'S.C.P Cybersecurity',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'S.C.P - World-Leading Cybersecurity Powered By AI',
    description: 'Standing as the Ultimate Defenders of the Global Digital Ecosystem, Protecting Connections, Empowering Innovations, and Securing a Resilient Future for Generations to Come.',
  },
}

export default function Home() {
  return (
    <PageWrapper>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo placeholder */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-steel-pink">S.C.P</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-2">
              <span className="glitch-gradient text-gradient-cyber" data-text="Secure • Contain • Protect">Secure • Contain • Protect</span>
            </p>
          </div>

          {/* Main Heading with Glitch Effect */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="glitch block mb-2" data-text="World-Leading Cybersecurity">
              World-Leading Cybersecurity
            </span>
            <span className="text-gradient-cyber">Powered By AI</span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Standing as the Ultimate Defenders of the Global Digital Ecosystem,
            Protecting Connections, Empowering Innovations, and Securing a Resilient
            Future for Generations to Come
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="primary" size="lg" className="pulse-glow">
              Get Started
            </Button>
            <Button variant="cyber" size="lg">
              Schedule A Demonstration
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-steel-pink"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-4xl font-bold text-center mb-12">
            Foundation <span className="text-steel-pink">Established</span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Color Palette Demo */}
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <h4 className="text-xl font-semibold mb-4 text-steel-pink">Color Palette</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-steel-pink"></div>
                  <span className="text-sm">Steel Pink (#D108CE)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-finn-purple"></div>
                  <span className="text-sm">Finn Purple (#511F64)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-cyber-cyan"></div>
                  <span className="text-sm">Cyber Cyan (#00F5FF)</span>
                </div>
              </div>
            </div>

            {/* Animations Demo */}
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <h4 className="text-xl font-semibold mb-4 text-cyber-cyan">Animations</h4>
              <div className="space-y-4">
                <div>
                  <span className="glitch text-lg" data-text="Glitch Effect">
                    Glitch Effect
                  </span>
                </div>
                <div className="pulse-glow bg-steel-pink/20 p-3 rounded">
                  Pulse Glow Effect
                </div>
                <div className="loading-dots">
                  Loading Animation
                </div>
              </div>
            </div>

            {/* Components Demo */}
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <h4 className="text-xl font-semibold mb-4 text-electric-blue">Components</h4>
              <div className="space-y-3">
                <Button variant="primary" size="sm" className="w-full">
                  Primary Button
                </Button>
                <Button variant="secondary" size="sm" className="w-full">
                  Secondary Button
                </Button>
                <Button variant="ghost" size="sm" className="w-full">
                  Ghost Button
                </Button>
              </div>
            </div>
          </div>

          {/* Development Status */}
          <div className="mt-16 text-center">
            <div className="bg-gray-800/30 rounded-lg p-8 border border-gray-700">
              <h4 className="text-2xl font-bold mb-4">
                Development Status: <span className="text-gradient-primary">Foundation Phase</span>
              </h4>
              <p className="text-gray-300 mb-6">
                ✅ Tailwind CSS v4 Configuration<br />
                ✅ Custom Color Palette Integration<br />
                ✅ Animation Utilities Setup<br />
                ✅ Component Architecture Planning<br />
                🔄 Ready for Phase 2 Development
              </p>
              <Button variant="cyber" size="lg">
                View Development Roadmap
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
    </PageWrapper>
  )
}
'use client'

import { ScrambleButton } from '@/components/ui/scramble-button'
import GSAPSplitChars from '@/components/animations/gsap-split-chars'
import Skull from '@/components/3d/Skull'

interface StackingCard {
  id: string
  title: string
  description: string
  image?: string
  component?: 'skull'
  variant: 'ghost' | 'secondary' | 'cyber'
  colorTheme: string
  hoverColor: string
  imageRight?: boolean
}

const cards: StackingCard[] = [
  {
    id: 'penetration-testing',
    title: 'Ultimate Penetration Testing',
    description: 'The best possible security is hardened with the most comprehensive security testing available— simulated attacks performed by the industry\'s best white hat hackers.',
    component: 'skull',
    variant: 'ghost',
    colorTheme: 'from-steel-pink/10 to-finn-purple/20 border-steel-pink/30 hover:border-steel-pink/60',
    hoverColor: 'group-hover:text-steel-pink'
  },
  {
    id: 'red-team-operations',
    title: 'Red Team Operations',
    description: 'Advanced persistent threat simulation using real-world attack scenarios to test your organization\'s detection and response capabilities against sophisticated adversaries.',
    image: '/images/Planet.jpg',
    variant: 'secondary',
    colorTheme: 'from-finn-purple/10 to-deep-purple/20 border-finn-purple/30 hover:border-finn-purple/60',
    hoverColor: 'group-hover:text-finn-purple',
    imageRight: true
  },
  {
    id: 'security-training',
    title: 'Security Awareness Training',
    description: 'Comprehensive cybersecurity education programs designed to transform your workforce into your strongest defense against social engineering and phishing attacks.',
    image: '/images/TechWave.webp',
    variant: 'cyber',
    colorTheme: 'from-cyber-cyan/10 to-electric-blue/20 border-cyber-cyan/30 hover:border-cyber-cyan/60',
    hoverColor: 'group-hover:text-cyber-cyan'
  }
]

export default function StackingCards() {
  const cardHeight = '55vh' // Increased from 40vh for taller cards
  const cardMargin = '2rem' // Reduced from 4rem for closer spacing
  const cardTopOffset = '0.5rem' // Reduced from 1rem for closer spacing
  const numCards = cards.length

  return (
    <div 
      className="w-4/5 mx-auto grid grid-cols-1 gap-8 lg:gap-8" // Responsive gap
      style={{
        gridTemplateRows: `repeat(${numCards}, ${cardHeight})`,
        paddingBottom: `calc(${numCards} * ${cardTopOffset})`,
        marginBottom: cardMargin
      }}
    >
      {cards.map((card) => (
        <div
          key={card.id}
          className="sticky will-change-transform relative"
          style={{
            top: '110px',
            paddingTop: cardTopOffset,
            transformOrigin: '50% 0%'
          }}
        >
          {/* Blue glow on left side */}
          <div className="absolute -left-6 -top-4 w-12 h-[calc(100%+2rem)] bg-electric-blue/40 rounded-full blur-md opacity-60 z-0"></div>
          
          {/* Purple glow on right side */}
          <div className="absolute -right-6 -top-4 w-12 h-[calc(100%+2rem)] bg-steel-pink/40 rounded-full blur-md opacity-60 z-0"></div>
          
          {/* Top horizontal glow - blue to pink gradient */}
          <div className="absolute -top-6 left-0 w-full h-12 bg-gradient-to-r from-electric-blue/30 via-finn-purple/40 to-steel-pink/30 rounded-full blur-md opacity-60 z-0"></div>
          
          {/* Bottom horizontal glow - blue to pink gradient */}
          <div className="absolute -bottom-6 left-0 w-full h-12 bg-gradient-to-r from-electric-blue/30 via-finn-purple/40 to-steel-pink/30 rounded-full blur-md opacity-60 z-0"></div>
          
          <div className={`group relative overflow-hidden rounded-2xl bg-raisin-black border transition-all duration-500 hover:transform hover:scale-105 h-full shadow-2xl z-10`}>
            {/* Mobile Layout - Vertical Stack */}
            <div className="flex h-full md:hidden flex-col">
              <div className="relative h-1/3 overflow-hidden bg-raisin-black">
                {card.component === 'skull' ? (
                  <>
                    <div className="w-full h-full flex items-center justify-center transition-transform duration-700 group-hover:scale-110">
                      <Skull />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-raisin-black/60" />
                  </>
                ) : (
                  <>
                    <img 
                      src={card.image} 
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-raisin-black/60" />
                  </>
                )}
              </div>
              <div className="h-2/3 p-6 flex flex-col justify-center">
                <GSAPSplitChars 
                  className={`text-2xl font-bold text-ghost-white mb-4 ${card.hoverColor} transition-colors duration-300 leading-tight`}
                  delay={0.1}
                  duration={0.6}
                  stagger={0.03}
                >
                  {card.title}
                </GSAPSplitChars>
                <p className="body-text mb-6 text-base leading-relaxed">
                  {card.description}
                </p>
                <div className="mt-auto">
                  <ScrambleButton variant={card.variant} size="lg" className="hover:shadow-lg transform hover:scale-105 text-sm px-6 py-3 w-full">
                    Know More
                  </ScrambleButton>
                </div>
              </div>
            </div>
            
            {/* Desktop Layout - Horizontal */}
            <div className="hidden md:flex h-full">
              {!card.imageRight ? (
                <>
                  <div className="relative w-2/5 overflow-hidden bg-raisin-black">
                    {card.component === 'skull' ? (
                      <>
                        <div className="w-full h-full flex items-center justify-center transition-transform duration-700 group-hover:scale-110">
                          <Skull />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-raisin-black/60" />
                      </>
                    ) : (
                      <>
                        <img 
                          src={card.image} 
                          alt={card.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-raisin-black/60" />
                      </>
                    )}
                  </div>
                  <div className="w-3/5 p-8 lg:p-12 flex flex-col justify-center">
                    <GSAPSplitChars 
                      className={`text-3xl lg:text-4xl xl:text-5xl font-bold text-ghost-white mb-4 lg:mb-6 ${card.hoverColor} transition-colors duration-300 leading-tight`}
                      delay={0.1}
                      duration={0.6}
                      stagger={0.03}
                    >
                      {card.title}
                    </GSAPSplitChars>
                    <p className="body-text mb-6 lg:mb-8 text-lg lg:text-xl xl:text-2xl leading-relaxed">
                      {card.description}
                    </p>
                    <div className="mt-auto">
                      <ScrambleButton variant={card.variant} size="lg" className="hover:shadow-lg transform hover:scale-105 text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4">
                        Know More
                      </ScrambleButton>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-3/5 p-8 lg:p-12 flex flex-col justify-center">
                    <GSAPSplitChars 
                      className={`text-3xl lg:text-4xl xl:text-5xl font-bold text-ghost-white mb-4 lg:mb-6 ${card.hoverColor} transition-colors duration-300 leading-tight`}
                      delay={0.1}
                      duration={0.6}
                      stagger={0.03}
                    >
                      {card.title}
                    </GSAPSplitChars>
                    <p className="body-text mb-6 lg:mb-8 text-lg lg:text-xl xl:text-2xl leading-relaxed">
                      {card.description}
                    </p>
                    <div className="mt-auto">
                      <ScrambleButton variant={card.variant} size="lg" className="hover:shadow-lg transform hover:scale-105 text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4">
                        Know More
                      </ScrambleButton>
                    </div>
                  </div>
                  <div className="relative w-2/5 overflow-hidden bg-raisin-black">
                    {card.component === 'skull' ? (
                      <>
                        <div className="w-full h-full flex items-center justify-center transition-transform duration-700 group-hover:scale-110">
                          <Skull />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-raisin-black/60" />
                      </>
                    ) : (
                      <>
                        <img 
                          src={card.image} 
                          alt={card.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-raisin-black/60" />
                      </>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

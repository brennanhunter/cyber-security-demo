'use client'

import { Button } from '@/components/ui/button'

interface StackingCard {
  id: string
  title: string
  description: string
  image: string
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
    image: '/images/Lock.jpg',
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
  const cardHeight = '40vh' // Equivalent to 40vw but using viewport height
  const cardMargin = '4rem' // 4vw equivalent
  const cardTopOffset = '1rem'
  const numCards = cards.length

  return (
    <div 
      className="w-4/5 mx-auto grid grid-cols-1 gap-16"
      style={{
        gridTemplateRows: `repeat(${numCards}, ${cardHeight})`,
        paddingBottom: `calc(${numCards} * ${cardTopOffset})`,
        marginBottom: cardMargin
      }}
    >
      {cards.map((card) => (
        <div
          key={card.id}
          className="sticky will-change-transform"
          style={{
            top: '110px',
            paddingTop: cardTopOffset,
            transformOrigin: '50% 0%'
          }}
        >
          <div className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${card.colorTheme} backdrop-blur-sm border transition-all duration-500 hover:transform hover:scale-105 h-full shadow-2xl`}>
            <div className="flex h-full">
              {!card.imageRight ? (
                <>
                  <div className="relative w-2/5 overflow-hidden">
                    <img 
                      src={card.image} 
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-raisin-black/60" />
                  </div>
                  <div className="w-3/5 p-8 flex flex-col justify-center">
                    <h3 className={`text-3xl font-bold text-ghost-white mb-4 ${card.hoverColor} transition-colors duration-300`}>
                      {card.title}
                    </h3>
                    <p className="body-text mb-6 text-lg">
                      {card.description}
                    </p>
                    <div className="mt-auto">
                      <Button variant={card.variant} size="lg" className="hover:shadow-lg transform hover:scale-105">
                        Know More
                      </Button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-3/5 p-8 flex flex-col justify-center">
                    <h3 className={`text-3xl font-bold text-ghost-white mb-4 ${card.hoverColor} transition-colors duration-300`}>
                      {card.title}
                    </h3>
                    <p className="body-text mb-6 text-lg">
                      {card.description}
                    </p>
                    <div className="mt-auto">
                      <Button variant={card.variant} size="lg" className="hover:shadow-lg transform hover:scale-105">
                        Know More
                      </Button>
                    </div>
                  </div>
                  <div className="relative w-2/5 overflow-hidden">
                    <img 
                      src={card.image} 
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-raisin-black/60" />
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

'use client'

import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Shield, Lock, Eye, Terminal, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

// Dynamic page names that change on each access
const hiddenPageNames = [
  'CLASSIFIED_OPERATIONS',
  'GHOST_PROTOCOL_ALPHA',
  'SHADOW_NETWORK_BETA', 
  'BLACKOUT_DIRECTIVE_GAMMA',
  'PHANTOM_ARCHIVE_DELTA',
  'CIPHER_VAULT_EPSILON',
  'STEALTH_MODULE_ZETA',
  'COVERT_CHANNEL_ETA',
  'DARK_WEB_THETA',
  'SECURE_PERIMETER_IOTA'
]

// Random response length generators
const generateRandomContent = () => {
  const contentTypes = [
    'ENCRYPTED_DATA_STREAM',
    'BIOMETRIC_SCAN_RESULT', 
    'NETWORK_TRACE_LOG',
    'SECURITY_AUDIT_REPORT',
    'THREAT_ANALYSIS_MATRIX'
  ]
  
  const randomLength = Math.floor(Math.random() * 500) + 100
  const contentType = contentTypes[Math.floor(Math.random() * contentTypes.length)]
  
  return {
    type: contentType,
    length: randomLength,
    data: Array.from({ length: randomLength }, () => 
      Math.random().toString(16).charAt(Math.floor(Math.random() * 16))
    ).join('')
  }
}

// Matrix characters for rain effect (cybersecurity themed)
const matrixChars = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+',
  '[', ']', '{', '}', '|', '\\', ';', ':', '"', "'", '<', '>', ',', '.', '?', '/'
]

// Matrix Column Component
function MatrixColumn({ index }: { index: number }) {
  const [chars, setChars] = useState<string[]>([])
  const columnRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const height = Math.floor(Math.random() * 15) + 8
    const initialChars = Array.from({ length: height }, () => 
      matrixChars[Math.floor(Math.random() * matrixChars.length)]
    )
    setChars(initialChars)
    
    const interval = setInterval(() => {
      setChars(prev => {
        const newChars = [...prev]
        // Change random characters
        const changeCount = Math.floor(Math.random() * 2) + 1
        for (let i = 0; i < changeCount; i++) {
          const randomIndex = Math.floor(Math.random() * newChars.length)
          newChars[randomIndex] = matrixChars[Math.floor(Math.random() * matrixChars.length)]
        }
        return newChars
      })
    }, 150 + Math.random() * 300)
    
    return () => clearInterval(interval)
  }, [])
  
  return (
    <motion.div
      ref={columnRef}
      className="absolute font-mono text-sm leading-none select-none"
      style={{
        left: `${(index * 2)}%`,
        top: '0',
        color: '#D108CE',
        textShadow: '0 0 5px #D108CE'
      }}
      initial={{ y: -100 }}
      animate={{ y: '110vh' }}
      transition={{
        duration: Math.random() * 8 + 4,
        repeat: Infinity,
        ease: 'linear',
        delay: Math.random() * 5
      }}
    >
      {chars.map((char, charIndex) => (
        <motion.div
          key={charIndex}
          className="block"
          style={{
            opacity: charIndex === 0 ? 1 : Math.max(0.1, 1 - (charIndex * 0.15)),
            color: charIndex === 0 ? '#D108CE' : charIndex < 3 ? '#511F64' : '#D108CE40'
          }}
          animate={{
            opacity: [
              charIndex === 0 ? 1 : Math.max(0.1, 1 - (charIndex * 0.15)),
              charIndex === 0 ? 0.7 : Math.max(0.05, 0.7 - (charIndex * 0.15)),
              charIndex === 0 ? 1 : Math.max(0.1, 1 - (charIndex * 0.15))
            ]
          }}
          transition={{
            duration: 0.5 + Math.random() * 0.5,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
        >
          {char}
        </motion.div>
      ))}
    </motion.div>
  )
}

export default function NotFound() {
  const [currentPageName, setCurrentPageName] = useState('')
  const [accessTime, setAccessTime] = useState('')
  const [sessionId, setSessionId] = useState('')
  const [randomContent, setRandomContent] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Generate dynamic page name each time
    const randomName = hiddenPageNames[Math.floor(Math.random() * hiddenPageNames.length)]
    setCurrentPageName(randomName)
    
    // Set access time
    setAccessTime(new Date().toISOString())
    
    // Generate random session ID
    setSessionId(Math.random().toString(36).substring(2, 15).toUpperCase())
    
    // Generate random content
    setRandomContent(generateRandomContent())
    
    // Log the access attempt (simulating server response = 200)
    const currentPath = window.location.pathname
    fetch(`/api/scp-log?path=${encodeURIComponent(currentPath)}`)
      .catch(() => {}) // Silent fail for demo purposes
    
    // Simulate loading delay
    setTimeout(() => setIsLoading(false), 1000)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-raisin-black flex items-center justify-center">
        <div className="text-center">
          <div className="glitch text-4xl font-bold mb-4 text-steel-pink" data-text="ACCESSING...">
            ACCESSING...
          </div>
          <div className="text-cyber-cyan font-mono">
            Establishing Secure Connection
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-raisin-black text-ghost-white overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-radial from-steel-pink/40 via-finn-purple/30 to-transparent" 
             style={{
               background: `
                 radial-gradient(ellipse 80% 60% at 50% 100%, 
                   #D108CE40 0%, 
                   #511F6460 25%, 
                   #2D1B6930 50%, 
                   transparent 70%
                 ),
                 radial-gradient(ellipse 60% 40% at 20% 80%, 
                   #D108CE30 0%, 
                   #511F6440 40%, 
                   transparent 70%
                 ),
                 radial-gradient(ellipse 60% 40% at 80% 80%, 
                   #511F6440 0%, 
                   #D108CE30 40%, 
                   transparent 70%
                 )
               `
             }}
        />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      </div>

      {/* Matrix Code Rain Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-30 overflow-hidden">
        {Array.from({ length: 50 }, (_, i) => (
          <MatrixColumn key={i} index={i} />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Terminal Header */}
        <motion.div 
          className="bg-black/50 border border-cyber-cyan/30 rounded-lg p-6 font-mono text-sm mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <Terminal className="w-4 h-4 text-cyber-cyan" />
            <span className="text-cyber-cyan">S.C.P SECURE TERMINAL v3.7.1</span>
          </div>
          
          <div className="space-y-2 text-xs">
            <div className="flex justify-between">
              <span className="text-gray-400">SESSION ID:</span>
              <span className="text-steel-pink font-bold">{sessionId}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">ACCESS TIME:</span>
              <span className="text-ghost-white">{accessTime}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">CURRENT PAGE:</span>
              <span className="text-steel-pink glitch" data-text={currentPageName}>
                {currentPageName}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">HTTP STATUS:</span>
              <span className="text-green-400 font-bold">200 OK</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">RESPONSE LENGTH:</span>
              <span className="text-cyber-cyan">{randomContent?.length || 0} bytes</span>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {/* Error Icon */}
            <div className="flex justify-center mb-8">
              <motion.div
                className="relative"
                animate={{ 
                  rotateY: [0, 360],
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <Shield className="w-24 h-24 text-steel-pink" />
                <motion.div
                  className="absolute inset-0 border-2 border-cyber-cyan rounded-full"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.5, 1] 
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity 
                  }}
                />
              </motion.div>
            </div>

            {/* Dynamic Title */}
            <h1 className="text-6xl md:text-8xl font-bold mb-6 font-alliance">
              <span className="glitch text-steel-pink" data-text="404">404</span>
            </h1>

            <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-gray-300">
              <span className="glitch text-cyber-cyan" data-text="ACCESS GRANTED">ACCESS GRANTED</span>
            </h2>

            <p className="text-xl mb-12 text-gray-400 leading-relaxed max-w-3xl mx-auto">
              You've accessed a <span className="text-steel-pink font-semibold">classified section</span> of our security perimeter. 
              This hidden endpoint has been <span className="text-cyber-cyan font-semibold">successfully logged</span> and 
              your access patterns are being <span className="text-electric-blue font-semibold">monitored</span> for analysis.
            </p>

            {/* Status Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[
                { icon: Lock, label: 'SECURE', status: 'ACTIVE', color: 'text-green-400' },
                { icon: Eye, label: 'MONITORED', status: 'TRACKING', color: 'text-steel-pink' },
                { icon: Shield, label: 'PROTECTED', status: 'ENABLED', color: 'text-cyber-cyan' },
                { icon: Zap, label: 'ENCRYPTED', status: 'AES-256', color: 'text-electric-blue' }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className="bg-black/30 border border-gray-700 rounded-lg p-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <item.icon className={`w-6 h-6 mx-auto mb-2 ${item.color}`} />
                  <div className="text-xs font-mono">
                    <div className="text-gray-400">{item.label}</div>
                    <div className={item.color}>{item.status}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Random Data Stream */}
            <motion.div
              className="bg-black/40 border border-steel-pink/30 rounded-lg p-6 mb-12 font-mono text-xs overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-steel-pink rounded-full animate-pulse" />
                <span className="text-steel-pink">DATA STREAM: {randomContent?.type}</span>
              </div>
              <div className="text-gray-500 leading-relaxed break-all max-h-32 overflow-hidden">
                {randomContent?.data}...
              </div>
              <div className="text-right text-cyber-cyan mt-2">
                [{randomContent?.length} bytes transmitted]
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <Link href="/">
                <Button 
                  variant="ghost" 
                  size="lg"
                  className="px-8 py-4 border-2 border-steel-pink text-steel-pink hover:bg-steel-pink/10 font-semibold transition-all duration-300 hover:scale-105"
                >
                  Return to Base
                </Button>
              </Link>
              
              <Link href="/demo">
                <Button 
                  variant="ghost" 
                  size="lg"
                  className="px-8 py-4 border-2 border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan/10 font-semibold transition-all duration-300 hover:scale-105"
                >
                  Explore Security Demo
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer Info */}
        <motion.div
          className="mt-20 text-center text-xs font-mono text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <div className="space-y-1">
            <div>S.C.P CYBERSECURITY • SECURE CONTAIN PROTECT</div>
            <div>This access attempt has been logged for security analysis</div>
            <div className="text-steel-pink">All connections are monitored and encrypted</div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

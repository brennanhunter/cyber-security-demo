'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { Suspense } from 'react'
import Crystal from './crystal'

interface CrystalSceneProps {
  className?: string
  interactive?: boolean
  scale?: number
  glitchIntensity?: number
}

export default function CrystalScene({ 
  className = '', 
  interactive = false,
  scale = 1,
  glitchIntensity = 0.3
}: CrystalSceneProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        {/* Ambient lighting */}
        <ambientLight intensity={0.4} />
        
        {/* Directional light */}
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} />
        
        {/* Environment for reflections */}
        <Environment preset="city" />
        
        {/* Crystal */}
        <Suspense fallback={null}>
          <Crystal 
            color="#D108CE" 
            scale={scale}
            glitchIntensity={glitchIntensity}
          />
        </Suspense>
        
        {/* Controls - only if interactive */}
        {interactive && <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />}
      </Canvas>
    </div>
  )
}

'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Color } from 'three'
import * as THREE from 'three'

interface CrystalProps {
  color?: string
  intensity?: number
  scale?: number
  glitchIntensity?: number
}

export default function Crystal({ 
  color = '#D108CE', // Steel pink from our brand
  intensity = 1,
  scale = 1,
  glitchIntensity = 0.3
}: CrystalProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const groupRef = useRef<THREE.Group>(null)

  // Smooth rotation and glitch effects
  useFrame((state) => {
    if (groupRef.current && meshRef.current) {
      const time = state.clock.elapsedTime
      
      // Smooth continuous rotation
      groupRef.current.rotation.y = time * 0.5
      groupRef.current.rotation.x = Math.sin(time * 0.3) * 0.2
      
      // Subtle glitch effects
      const glitch = Math.sin(time * 15) * glitchIntensity
      groupRef.current.position.y = glitch * 0.05
      
      // Scale pulse
      const pulse = 1 + Math.sin(time * 2) * 0.1
      groupRef.current.scale.setScalar(scale * pulse)
      
      // Color shifting
      const material = meshRef.current.material as THREE.MeshStandardMaterial
      const baseColor = new Color(color)
      const shift = Math.sin(time * 3) * 0.2
      material.color.setRGB(
        Math.min(1, baseColor.r + shift * 0.3),
        Math.max(0, baseColor.g - shift * 0.1),
        Math.min(1, baseColor.b + shift * 0.4)
      )
      
      // Emissive intensity pulse
      material.emissiveIntensity = intensity * 0.3 + Math.sin(time * 4) * 0.2
    }
  })

  return (
    <group ref={groupRef}>
      {/* Main crystal - octahedron (diamond shape) */}
      <mesh ref={meshRef}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={intensity * 0.3}
          metalness={0.1}
          roughness={0.2}
          transparent
          opacity={0.9}
        />
      </mesh>
      
      {/* Inner glow */}
      <mesh scale={[0.8, 0.8, 0.8]}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={0.5}
          transparent
          opacity={0.3}
        />
      </mesh>
      
      {/* Outer glow */}
      <mesh scale={[1.3, 1.3, 1.3]}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.2}
          transparent
          opacity={0.1}
        />
      </mesh>
    </group>
  )
}

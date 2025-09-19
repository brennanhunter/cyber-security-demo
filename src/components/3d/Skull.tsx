'use client';
import { Canvas } from '@react-three/fiber';
import { AsciiRenderer} from '@react-three/drei';
import { useGLTF } from '@react-three/drei';
import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Object3D } from 'three';

function SkullModel({ isHovered }: { isHovered: boolean }) {
  const gltf = useGLTF('/models/skull.glb');
  const myRef = useRef<Object3D>(null!);
  useFrame(({ clock }) => {
    if (myRef.current) {
      // Create a continuous nodding motion using sine wave on x-axis rotation
      // Slower speed (0.8 instead of 1.5) and reduced amplitude (0.2 instead of 0.3)
      const baseRotation = Math.sin(clock.elapsedTime * 0.8) * 0.2;
      
      // Add extra amplitude when hovered
      const hoverMultiplier = isHovered ? 1.5 : 1;
      
      myRef.current.rotation.x = baseRotation * hoverMultiplier;
    }
  });
  return <primitive ref={myRef} object={gltf.scene} position={[0, 0.5, 0]} />;
}

export default function Skull() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Don't render the 3D scene on server side
  if (!isMounted) {
    return (
      <div className="w-full h-full cursor-pointer relative overflow-hidden bg-black flex items-center justify-center">
        <div className="text-steel-pink font-mono text-sm">Loading 3D Model...</div>
      </div>
    );
  }

  return (
    <div 
      className="w-full h-full cursor-pointer relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Canvas camera={{ position: [0, 0, 2.5] }}>
         
        <ambientLight intensity={0.9} />
      <directionalLight intensity={0.5} position={[5, 5, 5]} />
      <SkullModel isHovered={isHovered} />
      <AsciiRenderer 
        characters={' .,:;i1tfLCG08#@'} 
        fgColor={'#8c1f69'} 
        bgColor={'black'}
        renderIndex={1}
      />
    </Canvas>
    </div>
  )
}
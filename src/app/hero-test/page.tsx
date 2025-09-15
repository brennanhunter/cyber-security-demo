'use client';
import React from 'react';
import HeroBG from '@/components/animations/HeroBG';

export default function HeroTestPage() {
  return (
    <div className="relative w-full h-screen">
      {/* Interactive fluid shader background */}
      <HeroBG />
      
      {/* Optional content overlay */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Hero Test</h1>
          <p className="text-lg">Interactive fluid shader background</p>
        </div>
      </div>
    </div>
  );
}
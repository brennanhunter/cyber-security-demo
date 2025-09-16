'use client';
import WebGL from '@/components/animations/WebGL';

export default function PavelTestPage() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <WebGL />
      
      {/* Simple overlay to test that the component is working */}
      <div className="absolute top-4 left-4 text-green-400 font-mono text-sm z-10">
        Pavel Fluid Simulation Test
      </div>
      
      {/* Instructions */}
      <div className="absolute bottom-4 left-4 text-green-400/60 font-mono text-xs max-w-md z-10">
        <p>Testing Pavel&apos;s WebGL fluid simulation</p>
        <p>Check console for any WebGL initialization messages</p>
      </div>
    </div>
  );
}
'use client';

import React from 'react';

interface CSSGlitchTextProps {
  children: string;
  className?: string;
}

export function CSSGlitchText({ 
  children, 
  className = ''
}: CSSGlitchTextProps) {
  return (
    <span 
      className={`css-glitch ${className}`}
      data-text={children}
    >
      {children}
    </span>
  );
}

'use client'

import { useRef } from 'react'
import { Button } from './button'
import ScrambleText, { ScrambleTextHandle } from '@/components/animations/scramble-text'
import { cn } from '@/lib/utils'

interface ScrambleButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'cyber'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  children: string
  onClick?: () => void
}

export function ScrambleButton({ 
  variant, 
  size, 
  className, 
  children, 
  onClick 
}: ScrambleButtonProps) {
  const scrambleRef = useRef<ScrambleTextHandle>(null)

  // Add pulse-glow to primary buttons by default
  const enhancedClassName = cn(
    variant === 'primary' && 'pulse-glow',
    className
  )

  return (
    <Button
      variant={variant}
      size={size}
      className={enhancedClassName}
      onClick={onClick}
      onMouseEnter={() => scrambleRef.current?.startScramble()}
    >
      <ScrambleText ref={scrambleRef}>
        {children}
      </ScrambleText>
    </Button>
  )
}
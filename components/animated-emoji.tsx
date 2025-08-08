"use client"

import { TypeIcon as type, LucideIcon } from 'lucide-react'

interface AnimatedIconProps {
  icon: LucideIcon
  className?: string
  animation?: 'bounce' | 'pulse' | 'spin' | 'float' | 'wiggle' | 'glow'
  size?: number
}

export function AnimatedIcon({ 
  icon: Icon, 
  className = "", 
  animation = 'bounce',
  size = 24 
}: AnimatedIconProps) {
  const animationClasses = {
    bounce: 'animate-bounce',
    pulse: 'animate-pulse',
    spin: 'animate-spin',
    float: 'animate-float',
    wiggle: 'animate-wiggle',
    glow: 'animate-glow'
  }

  return (
    <Icon 
      size={size}
      className={`inline-block ${animationClasses[animation]} ${className}`}
      style={{ 
        filter: 'drop-shadow(0 0 10px rgba(168, 85, 247, 0.3))',
        transformOrigin: 'center'
      }}
    />
  )
}

// Keep the old AnimatedEmoji export for backward compatibility with other components
export function AnimatedEmoji({ emoji, className = "", animation = 'bounce' }: {
  emoji: string
  className?: string
  animation?: 'bounce' | 'pulse' | 'spin' | 'float' | 'wiggle' | 'glow'
}) {
  const animationClasses = {
    bounce: 'animate-bounce',
    pulse: 'animate-pulse',
    spin: 'animate-spin',
    float: 'animate-float',
    wiggle: 'animate-wiggle',
    glow: 'animate-glow'
  }

  return (
    <span 
      className={`inline-block text-2xl ${animationClasses[animation]} ${className}`}
      style={{ 
        filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.3))',
        transformOrigin: 'center'
      }}
    >
      {emoji}
    </span>
  )
}

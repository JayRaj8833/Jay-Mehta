"use client"

import { useEffect, useState } from 'react'
import { Code, Rocket, Zap, Target, Lightbulb, Flame, Sparkles, Star, Gem, Palette, Smartphone, Globe } from 'lucide-react'

export function FloatingIcons() {
  const [icons, setIcons] = useState<Array<{
    id: number
    icon: any
    x: number
    y: number
    size: number
    duration: number
    delay: number
  }>>([])

  const iconList = [Code, Rocket, Zap, Target, Lightbulb, Flame, Sparkles, Star, Gem, Palette, Smartphone, Globe]

  useEffect(() => {
    const newIcons = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      icon: iconList[Math.floor(Math.random() * iconList.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 8 + 16,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5
    }))
    setIcons(newIcons)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {icons.map((iconData) => {
        const IconComponent = iconData.icon
        return (
          <div
            key={iconData.id}
            className="absolute animate-float opacity-20 hover:opacity-40 transition-opacity duration-300"
            style={{
              left: `${iconData.x}%`,
              top: `${iconData.y}%`,
              animationDuration: `${iconData.duration}s`,
              animationDelay: `${iconData.delay}s`,
              filter: 'drop-shadow(0 0 10px rgba(168, 85, 247, 0.2))'
            }}
          >
            <IconComponent 
              size={iconData.size} 
              className="text-purple-400"
            />
          </div>
        )
      })}
    </div>
  )
}

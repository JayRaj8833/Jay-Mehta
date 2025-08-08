"use client"

import { useEffect, useState } from 'react'
import { Code, Zap } from 'lucide-react'

export function LoadingScreen() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => setLoading(false), 500)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(timer)
  }, [])

  if (!loading) return null

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1 animate-spin">
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
              <Code className="w-12 h-12 text-purple-400 animate-pulse" />
            </div>
          </div>
          <div className="absolute -top-2 -right-2">
            <Zap className="w-8 h-8 text-yellow-400 animate-bounce" />
          </div>
        </div>
        
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
          Jay Mehta
        </h2>
        
        <div className="w-64 h-2 bg-slate-800 rounded-full mx-auto mb-4 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <p className="text-gray-400 text-sm">Loading amazing portfolio... {progress}%</p>
      </div>
    </div>
  )
}

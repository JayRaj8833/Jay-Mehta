"use client"

import { useState } from 'react'
import { Mail, Send, CheckCircle } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { AnimatedEmoji } from '@/components/animated-emoji'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubscribed(true)
    setIsLoading(false)
    setEmail('')
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <Card className="max-w-4xl mx-auto bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-purple-500/30 overflow-hidden">
          <CardContent className="p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                <Mail className="w-8 h-8 text-white" />
                <AnimatedEmoji emoji="📧" className="absolute -top-2 -right-2 text-xl" animation="bounce" />
              </div>
              
              <div className="flex justify-center mb-4">
                <AnimatedEmoji emoji="🚀" className="mx-2" animation="bounce" />
                <AnimatedEmoji emoji="💡" className="mx-2" animation="pulse" />
                <AnimatedEmoji emoji="📈" className="mx-2" animation="float" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Stay Updated with Latest Insights
              </h2>
              
              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Get exclusive tips on web development, AdSense optimization, traffic generation, 
                and digital marketing strategies delivered straight to your inbox.
              </p>
            </div>

            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-slate-800/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-purple-500"
                    required
                  />
                  <Button 
                    type="submit"
                    disabled={isLoading}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 whitespace-nowrap"
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    ) : (
                      <Send className="w-4 h-4 mr-2" />
                    )}
                    {isLoading ? 'Subscribing...' : 'Subscribe'}
                  </Button>
                </div>
                
                <p className="text-sm text-gray-400 mt-4 text-center">
                  Join 1000+ developers and marketers. Unsubscribe anytime.
                </p>
              </form>
            ) : (
              <div className="text-center">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Successfully Subscribed!</h3>
                <p className="text-gray-300">
                  Thank you for subscribing! You'll receive your first newsletter soon.
                </p>
              </div>
            )}

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <AnimatedEmoji emoji="📚" className="text-2xl" animation="bounce" />
                </div>
                <h4 className="text-white font-semibold mb-2">Weekly Tutorials</h4>
                <p className="text-gray-400 text-sm">In-depth guides and tutorials</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <AnimatedEmoji emoji="💡" className="text-2xl" animation="pulse" />
                </div>
                <h4 className="text-white font-semibold mb-2">Industry Insights</h4>
                <p className="text-gray-400 text-sm">Latest trends and best practices</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <AnimatedEmoji emoji="🎯" className="text-2xl" animation="wiggle" />
                </div>
                <h4 className="text-white font-semibold mb-2">Exclusive Tips</h4>
                <p className="text-gray-400 text-sm">Subscriber-only strategies</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

"use client"

import { useState } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { AnimatedEmoji } from '@/components/animated-emoji'

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hi! I\'m Jay\'s assistant. How can I help you today?' }
  ])

  const handleSend = () => {
    if (!message.trim()) return

    setMessages(prev => [...prev, { type: 'user', text: message }])
    
    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        type: 'bot', 
        text: 'Thanks for your message! Jay will get back to you soon. In the meantime, feel free to explore the portfolio or contact him directly.' 
      }])
    }, 1000)
    
    setMessage('')
  }

  return (
    <>
      {/* Chat Button */}
      <Button
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-110 z-40 relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        <AnimatedEmoji emoji="💬" className="absolute -top-2 -right-2 text-lg" animation="bounce" />
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-80 h-96 bg-slate-900/95 border-slate-700 shadow-2xl z-40 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg text-white flex items-center">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              Chat with Jay
              <AnimatedEmoji emoji="👋" className="ml-2 text-lg" animation="wiggle" />
            </CardTitle>
          </CardHeader>
          
          <CardContent className="flex flex-col h-full p-4">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto space-y-3 mb-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                      msg.type === 'user'
                        ? 'bg-purple-600 text-white'
                        : 'bg-slate-800 text-gray-300'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="flex gap-2">
              <Input
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                className="bg-slate-800 border-slate-600 text-white placeholder:text-gray-400 focus:border-purple-500"
              />
              <Button
                size="icon"
                onClick={handleSend}
                className="bg-purple-600 hover:bg-purple-700"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  )
}

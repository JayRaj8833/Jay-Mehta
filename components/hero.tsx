"use client"

import { useEffect, useState } from 'react'
import { ChevronDown, Rocket, Zap, Lightbulb, Target, Trophy, BarChart3, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedIcon } from '@/components/animated-emoji'
import Image from 'next/image'

export function Hero() {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const titles = [
    'Website Developer',
    'Application Developer', 
    'AdSense Expert',
    'Traffic Provider',
    'Server Specialist'
  ]

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % titles.length
      const fullText = titles[i]

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      )

      setTypingSpeed(isDeleting ? 30 : 150)

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500)
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, typingSpeed, titles])

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Elements Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-4 h-4 bg-purple-400 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-pink-400 rounded-full animate-bounce delay-2000"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-blue-400 rounded-full animate-bounce delay-3000"></div>
        <div className="absolute bottom-20 right-10 w-5 h-5 bg-yellow-400 rounded-full animate-bounce delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image with Animated Icons */}
          <div className="mb-8 relative group">
            <div className="w-40 h-40 mx-auto relative">
              <Image
                src="/images/jay-mehta-profile.png"
                alt="Jay Mehta - Full Stack Developer"
                width={160}
                height={160}
                className="rounded-full object-cover w-full h-full border-4 border-purple-500/50 shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
                priority
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
            
            {/* Floating icons around profile */}
            <div className="absolute -top-2 -right-2">
              <AnimatedIcon icon={Rocket} className="text-purple-400" animation="bounce" size={20} />
            </div>
            <div className="absolute -bottom-2 -left-2">
              <AnimatedIcon icon={Zap} className="text-yellow-400" animation="pulse" size={18} />
            </div>
            <div className="absolute top-4 -left-8">
              <AnimatedIcon icon={Lightbulb} className="text-blue-400" animation="float" size={18} />
            </div>
            <div className="absolute bottom-4 -right-8">
              <AnimatedIcon icon={Target} className="text-pink-400" animation="wiggle" size={18} />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent animate-fade-in">
            Jay Mehta
          </h1>

          {/* Typing Animation */}
          <div className="text-2xl md:text-3xl mb-8 h-12">
            <span className="text-purple-400 font-semibold">
              {text}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          {/* Description */}
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Full-stack developer and digital marketing expert specializing in web development, 
            application creation, AdSense optimization, traffic generation, and server management. 
            Transforming ideas into powerful digital solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transform hover:scale-105 transition-all duration-300"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center group cursor-pointer">
              <div className="flex items-center justify-center mb-2">
                <AnimatedIcon icon={Trophy} className="text-purple-400 mr-2" animation="bounce" size={24} />
                <div className="text-3xl font-bold text-purple-400 group-hover:scale-125 transition-all duration-500 group-hover:text-purple-300">5+</div>
              </div>
              <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Years Experience</div>
              <div className="w-0 h-0.5 bg-purple-400 mx-auto mt-2 group-hover:w-full transition-all duration-500"></div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="flex items-center justify-center mb-2">
                <AnimatedIcon icon={BarChart3} className="text-pink-400 mr-2" animation="pulse" size={24} />
                <div className="text-3xl font-bold text-pink-400 group-hover:scale-125 transition-all duration-500 group-hover:text-pink-300">100+</div>
              </div>
              <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Projects Completed</div>
              <div className="w-0 h-0.5 bg-pink-400 mx-auto mt-2 group-hover:w-full transition-all duration-500"></div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="flex items-center justify-center mb-2">
                <AnimatedIcon icon={Users} className="text-blue-400 mr-2" animation="wiggle" size={24} />
                <div className="text-3xl font-bold text-blue-400 group-hover:scale-125 transition-all duration-500 group-hover:text-blue-300">50+</div>
              </div>
              <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Happy Clients</div>
              <div className="w-0 h-0.5 bg-blue-400 mx-auto mt-2 group-hover:w-full transition-all duration-500"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={scrollToAbout}>
          <ChevronDown className="w-8 h-8 text-purple-400" />
        </div>
      </div>
    </section>
  )
}

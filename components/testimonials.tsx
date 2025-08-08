"use client"

import { useState, useEffect } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight, MessageCircle, User, Building } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { AnimatedIcon } from '@/components/animated-emoji'
import Image from 'next/image'

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStartup Inc.',
      image: '/images/client-sarah.png',
      rating: 5,
      text: 'Jay transformed our website completely! His expertise in React and Next.js helped us achieve a 300% increase in user engagement. The AdSense optimization alone increased our revenue by 250%.',
      project: 'E-commerce Platform'
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Director, Digital Solutions',
      image: '/images/client-michael.png',
      rating: 5,
      text: 'Working with Jay on our AdSense optimization was a game-changer. He helped us get MA approval and our traffic arbitrage strategy now generates consistent 6-figure monthly revenue.',
      project: 'AdSense Optimization'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder, Creative Agency',
      image: '/images/client-emily.png',
      rating: 5,
      text: 'Jay\'s server management skills are exceptional. Our website uptime improved to 99.9% and page load speeds decreased by 60%. His technical expertise is unmatched.',
      project: 'Server Management'
    },
    {
      name: 'David Thompson',
      role: 'CTO, FinTech Solutions',
      image: '/images/client-david.png',
      rating: 5,
      text: 'The mobile application Jay developed for us exceeded all expectations. Clean code, beautiful UI, and robust functionality. Delivered on time and within budget.',
      project: 'Mobile App Development'
    },
    {
      name: 'Lisa Wang',
      role: 'Owner, Online Marketplace',
      image: '/images/client-lisa.png',
      rating: 5,
      text: 'Jay\'s traffic generation strategies helped us scale from 10K to 500K monthly visitors in just 6 months. His digital marketing expertise is phenomenal.',
      project: 'Traffic Generation'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take my word for it. Here's what my clients say about working with me.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <Card className="bg-slate-900/50 border-slate-700 overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="flex justify-center mb-6">
                <AnimatedIcon icon={MessageCircle} className="text-purple-400" animation="float" size={48} />
              </div>
              
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
                  ))}
                </div>
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6 italic">
                  "{testimonials[currentIndex].text}"
                </p>
              </div>

              <div className="flex items-center justify-center space-x-4">
                <div className="relative">
                  <Image
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-full border-2 border-purple-500 object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1">
                    <AnimatedIcon icon={User} className="text-purple-400 bg-slate-900 rounded-full p-1" animation="pulse" size={16} />
                  </div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <h4 className="text-white font-semibold text-lg mr-2">{testimonials[currentIndex].name}</h4>
                    <AnimatedIcon icon={Building} className="text-purple-400" animation="wiggle" size={16} />
                  </div>
                  <p className="text-purple-400">{testimonials[currentIndex].role}</p>
                  <div className="flex items-center justify-center">
                    <Quote className="w-3 h-3 mr-1 text-gray-400" />
                    <p className="text-gray-400 text-sm">{testimonials[currentIndex].project}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-slate-900/80 border-slate-600 hover:border-purple-500"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-slate-900/80 border-slate-600 hover:border-purple-500"
            onClick={nextTestimonial}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-2 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-purple-500 scale-125' : 'bg-slate-600 hover:bg-slate-500'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        {/* All Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className={`bg-slate-900/30 border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 cursor-pointer ${
                index === currentIndex ? 'ring-2 ring-purple-500' : ''
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full border-2 border-purple-500 mr-4 object-cover"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-purple-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                  "{testimonial.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

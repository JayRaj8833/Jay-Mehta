"use client"

import { Code, Smartphone, DollarSign, Users, Server, BarChart3, Globe, Zap, TrendingUp, Cloud, Target, Sparkles } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { AnimatedIcon } from '@/components/animated-emoji'

export function Services() {
  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      animatedIcon: Globe,
      title: "Website Development",
      description: "Custom websites built with modern technologies like React, Next.js, and TypeScript. Responsive, fast, and SEO-optimized.",
      features: ["Responsive Design", "SEO Optimization", "Performance Optimization", "Custom CMS"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      animatedIcon: Zap,
      title: "Application Development", 
      description: "Full-stack web and mobile applications with robust backend systems and intuitive user interfaces.",
      features: ["Web Applications", "Mobile Apps", "API Development", "Database Design"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <DollarSign className="w-12 h-12" />,
      animatedIcon: TrendingUp,
      title: "AdSense & AdManager",
      description: "Complete AdSense optimization, MA/MI approval assistance, and revenue maximization through strategic ad placement.",
      features: ["MA/MI Approval", "Revenue Optimization", "Ad Arbitrage", "Policy Compliance"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Users className="w-12 h-12" />,
      animatedIcon: BarChart3,
      title: "Traffic Provider",
      description: "High-quality, targeted traffic generation through various channels to boost your website's visibility and conversions.",
      features: ["Organic Traffic", "Social Media Traffic", "Paid Campaigns", "Analytics & Reporting"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Server className="w-12 h-12" />,
      animatedIcon: Cloud,
      title: "Server & Hosting",
      description: "Reliable server management and hosting solutions with 99.9% uptime guarantee and 24/7 monitoring.",
      features: ["Cloud Hosting", "Server Management", "SSL Certificates", "Backup Solutions"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      animatedIcon: Target,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies including SEO, content marketing, and conversion optimization.",
      features: ["SEO Services", "Content Strategy", "Social Media Marketing", "Conversion Optimization"],
      color: "from-pink-500 to-rose-500"
    }
  ]

  return (
    <section id="services" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            My Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to help your business grow and succeed in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="bg-slate-900/50 border-slate-700 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105 group overflow-hidden"
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center text-white group-hover:animate-pulse transition-all duration-300 relative`}>
                  {service.icon}
                  <div className="absolute -top-3 -right-3">
                    <AnimatedIcon 
                      icon={service.animatedIcon} 
                      className="text-white" 
                      animation="float" 
                      size={20}
                    />
                  </div>
                </div>
                <CardTitle className="text-2xl text-white group-hover:text-purple-300 transition-colors duration-300 flex items-center justify-center">
                  {service.title}
                  <AnimatedIcon icon={Sparkles} className="ml-2 text-purple-400" animation="pulse" size={16} />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

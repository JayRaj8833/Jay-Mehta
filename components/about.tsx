"use client"

import { Code2, Database, Globe, Zap, Atom, HardDrive, TrendingUp, Monitor } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { AnimatedIcon } from '@/components/animated-emoji'
import Image from 'next/image'

export function About() {
  const skills = [
    {
      icon: <Code2 className="w-8 h-8" />,
      animatedIcon: Atom,
      title: "Frontend Development",
      description: "React, Next.js, TypeScript, Tailwind CSS",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Database className="w-8 h-8" />,
      animatedIcon: HardDrive,
      title: "Backend Development", 
      description: "Node.js, Python, PostgreSQL, MongoDB",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      animatedIcon: TrendingUp,
      title: "Digital Marketing",
      description: "AdSense, Traffic Generation, SEO",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      animatedIcon: Monitor,
      title: "Server Management",
      description: "AWS, Docker, Linux, Hosting Solutions",
      color: "from-orange-500 to-red-500"
    }
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer and digital marketing specialist with over 5 years of experience 
            in creating innovative web solutions and driving online growth for businesses worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-6">My Journey</h3>
            <p className="text-gray-300 leading-relaxed">
              Started as a curious developer, I've evolved into a comprehensive digital solutions provider. 
              My expertise spans from crafting beautiful, responsive websites to managing complex server 
              infrastructures and optimizing digital marketing campaigns.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I specialize in AdSense optimization, traffic arbitrage, and have helped numerous clients 
              achieve MA/MI approval while maximizing their revenue potential. My technical skills 
              complement my marketing expertise, allowing me to deliver holistic digital solutions.
            </p>
            <div className="flex flex-wrap gap-3">
              {['JavaScript', 'React', 'Next.js', 'Node.js', 'Python', 'AWS', 'AdSense', 'SEO'].map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full text-purple-300 text-sm hover:scale-105 transition-transform duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl backdrop-blur-sm border border-purple-500/30 flex items-center justify-center overflow-hidden">
              <div className="relative w-80 h-80 rounded-xl overflow-hidden">
                <Image
                  src="/images/jay-mehta-profile.png"
                  alt="Jay Mehta working on development projects"
                  width={320}
                  height={320}
                  className="object-cover w-full h-full opacity-80 hover:opacity-100 transition-opacity duration-300 rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent rounded-xl"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold text-lg">Crafting Digital Excellence</p>
                  <p className="text-purple-200 text-sm">Full-Stack Developer & Digital Marketing Expert</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={index}
              className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${skill.color} flex items-center justify-center text-white group-hover:animate-pulse relative`}>
                  {skill.icon}
                  <div className="absolute -top-2 -right-2">
                    <AnimatedIcon 
                      icon={skill.animatedIcon} 
                      className="text-white" 
                      animation="bounce" 
                      size={16}
                    />
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">{skill.title}</h4>
                <p className="text-gray-400 text-sm">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

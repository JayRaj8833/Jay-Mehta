"use client"

import { useEffect, useState, useRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Trophy, Award, Star, Target } from 'lucide-react'
import { AnimatedIcon } from '@/components/animated-emoji'

export function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const skills = [
    { name: 'React/Next.js', level: 95, color: 'from-blue-500 to-cyan-500' },
    { name: 'TypeScript', level: 90, color: 'from-blue-600 to-blue-400' },
    { name: 'Node.js', level: 88, color: 'from-green-500 to-emerald-500' },
    { name: 'Python', level: 85, color: 'from-yellow-500 to-orange-500' },
    { name: 'AdSense Optimization', level: 92, color: 'from-purple-500 to-pink-500' },
    { name: 'Server Management', level: 87, color: 'from-red-500 to-pink-500' },
    { name: 'Digital Marketing', level: 89, color: 'from-indigo-500 to-purple-500' },
    { name: 'Database Design', level: 83, color: 'from-teal-500 to-cyan-500' }
  ]

  const tools = [
    'VS Code', 'Git', 'Docker', 'AWS', 'Figma', 'Photoshop',
    'Google Analytics', 'SEMrush', 'Postman', 'MongoDB', 'PostgreSQL', 'Redis'
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-slate-800/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels across various technologies and platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Technical Skills */}
          <Card className="bg-slate-900/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Technical Skills</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-purple-400 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out transform origin-left`}
                      style={{ 
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 100}ms`
                      }}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Tools & Technologies */}
          <Card className="bg-slate-900/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Tools & Technologies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {tools.map((tool, index) => (
                  <div 
                    key={index}
                    className="bg-slate-800/50 border border-slate-600 rounded-lg p-3 text-center hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300 hover:scale-105 group"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span className="text-gray-300 group-hover:text-purple-300 transition-colors duration-300 text-sm font-medium">
                      {tool}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { number: '5+', label: 'Years Experience', icon: Trophy },
            { number: '100+', label: 'Projects Completed', icon: Award },
            { number: '50+', label: 'Happy Clients', icon: Star },
            { number: '99%', label: 'Success Rate', icon: Target }
          ].map((stat, index) => (
            <Card key={index} className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border-purple-500/30 text-center hover:scale-105 transition-transform duration-300 group">
              <CardContent className="p-6">
                <AnimatedIcon icon={stat.icon} className="text-purple-400 mb-2" animation="bounce" size={32} />
                <div className="text-3xl font-bold text-white mb-1 group-hover:scale-110 transition-transform duration-300">{stat.number}</div>
                <div className="text-purple-300 text-sm">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

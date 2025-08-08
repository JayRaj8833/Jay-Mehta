"use client"

import { Calendar, MapPin, Award, Briefcase, Building, MapIcon, Clock } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { AnimatedIcon } from '@/components/animated-emoji'

export function Experience() {
  const experiences = [
    {
      title: 'Senior Full-Stack Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Leading development of enterprise web applications using React, Next.js, and Node.js. Managed a team of 5 developers and increased application performance by 40%.',
      achievements: ['Led team of 5 developers', 'Improved performance by 40%', 'Implemented CI/CD pipeline'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'AdSense Optimization Specialist',
      company: 'Digital Marketing Pro',
      location: 'Remote',
      period: '2021 - 2022',
      description: 'Specialized in AdSense optimization and traffic arbitrage. Helped 50+ clients achieve MA/MI approval and increased their revenue by an average of 300%.',
      achievements: ['50+ successful MA/MI approvals', '300% average revenue increase', 'Traffic arbitrage expert'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Web Developer & Server Admin',
      company: 'CloudHost Services',
      location: 'New York, NY',
      period: '2020 - 2021',
      description: 'Developed custom websites and managed server infrastructure for 100+ clients. Maintained 99.9% uptime and implemented automated backup solutions.',
      achievements: ['99.9% server uptime', '100+ client websites', 'Automated backup systems'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Junior Developer',
      company: 'StartupTech',
      location: 'Austin, TX',
      period: '2019 - 2020',
      description: 'Started career building responsive websites and learning modern web technologies. Contributed to 20+ projects and gained expertise in React and Node.js.',
      achievements: ['20+ project contributions', 'React & Node.js expertise', 'Responsive design mastery'],
      color: 'from-orange-500 to-red-500'
    }
  ]

  const certifications = [
    { name: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', year: '2023' },
    { name: 'Google AdSense Certified', issuer: 'Google', year: '2022' },
    { name: 'React Developer Certification', issuer: 'Meta', year: '2021' },
    { name: 'Digital Marketing Professional', issuer: 'Google', year: '2021' }
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience & Journey
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My professional journey through various roles and achievements in web development and digital marketing.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative mb-20">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 group">
                  <CardContent className="p-6">
                    <div className={`w-4 h-4 bg-gradient-to-r ${exp.color} rounded-full absolute top-8 ${index % 2 === 0 ? '-right-2' : '-left-2'} border-4 border-slate-900`}></div>
                    
                    <div className="flex items-center mb-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300 mr-2">
                        {exp.title}
                      </h3>
                      <AnimatedIcon icon={Briefcase} className="text-purple-400" animation="pulse" size={18} />
                    </div>
                    
                    <div className="flex items-center text-purple-400 font-semibold mb-1">
                      <AnimatedIcon icon={Building} className="mr-2 text-purple-400" animation="wiggle" size={16} />
                      {exp.company}
                    </div>
                    
                    <div className="flex items-center text-gray-400 text-sm mb-2 justify-end">
                      <MapPin className="w-4 h-4 mr-1" />
                      {exp.location}
                    </div>
                    <div className="flex items-center text-gray-400 text-sm mb-4 justify-end">
                      <Calendar className="w-4 h-4 mr-1" />
                      {exp.period}
                    </div>
                    <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm text-purple-300 flex items-center justify-end">
                          <span>✓ {achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <div className="w-1/2"></div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center justify-center">
            <AnimatedIcon icon={Award} className="mr-3 text-yellow-400" animation="bounce" size={32} />
            Certifications & Awards
            <AnimatedIcon icon={Award} className="ml-3 text-yellow-400" animation="pulse" size={32} />
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="bg-gradient-to-br from-yellow-600/20 to-orange-600/20 border-yellow-500/30 hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-center">
                <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h4 className="text-white font-semibold mb-2">{cert.name}</h4>
                <p className="text-yellow-300 text-sm mb-1">{cert.issuer}</p>
                <p className="text-gray-400 text-xs">{cert.year}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

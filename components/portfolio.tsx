"use client"

import { ExternalLink, Github } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function Portfolio() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      image: "/images/ecommerce-platform.png",
      tech: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
      category: "Web Development",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "AdSense Optimization Tool",
      description: "Custom dashboard for monitoring AdSense performance and optimizing ad placements for maximum revenue.",
      image: "/images/adsense-dashboard.png",
      tech: ["React", "Node.js", "Google APIs", "Chart.js"],
      category: "AdSense & Marketing",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Traffic Analytics Platform",
      description: "Real-time traffic monitoring and analytics platform with detailed reporting and insights.",
      image: "/images/analytics-platform.png",
      tech: ["Vue.js", "Python", "MongoDB", "D3.js"],
      category: "Analytics",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Cloud Hosting Manager",
      description: "Server management interface for deploying and monitoring applications across multiple cloud providers.",
      image: "/images/cloud-manager.png",
      tech: ["React", "AWS", "Docker", "Kubernetes"],
      category: "Server Management",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Mobile App Development",
      description: "Cross-platform mobile application with real-time features and offline capabilities.",
      image: "/images/mobile-app.png",
      tech: ["React Native", "Firebase", "Redux", "TypeScript"],
      category: "Mobile Development",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "SEO Optimization Suite",
      description: "Comprehensive SEO analysis and optimization tools for improving website rankings and visibility.",
      image: "/images/seo-suite.png",
      tech: ["Next.js", "Python", "APIs", "Machine Learning"],
      category: "Digital Marketing",
      liveUrl: "#",
      githubUrl: "#"
    }
  ]

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            My Portfolio
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent projects demonstrating expertise across web development, 
            digital marketing, and server management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="bg-slate-900/50 border-slate-700 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105 group overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      variant="secondary" 
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live Demo
                    </Button>
                    <Button 
                      size="sm" 
                      variant="secondary" 
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="mb-2">
                  <span className="text-xs px-2 py-1 bg-purple-600/20 text-purple-300 rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="text-xs px-2 py-1 bg-slate-800 text-gray-300 rounded border border-slate-600 hover:border-purple-500/50 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}

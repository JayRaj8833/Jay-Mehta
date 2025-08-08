"use client"

import { useEffect, useRef, useState } from 'react'
import { Calendar, Clock, ArrowRight, Tag, BookOpen, TrendingUp, User } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { AnimatedIcon } from '@/components/animated-emoji'
import Image from 'next/image'

export function Blog() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const blogPosts = [
    {
      title: 'Maximizing AdSense Revenue: Advanced Optimization Techniques',
      excerpt: 'Learn the latest strategies for optimizing AdSense performance and achieving MA/MI approval with proven techniques that increased client revenue by 300%.',
      image: '/images/blog-adsense-guide.png',
      category: 'AdSense',
      date: '2024-01-15',
      readTime: '8 min read',
      tags: ['AdSense', 'Optimization', 'Revenue'],
      author: 'Jay Mehta'
    },
    {
      title: 'Building Scalable React Applications with Next.js 14',
      excerpt: 'A comprehensive guide to building high-performance React applications using Next.js 14 features including App Router, Server Components, and more.',
      image: '/images/blog-nextjs-guide.png',
      category: 'Development',
      date: '2024-01-10',
      readTime: '12 min read',
      tags: ['React', 'Next.js', 'Performance'],
      author: 'Jay Mehta'
    },
    {
      title: 'Traffic Arbitrage: From Zero to Six Figures',
      excerpt: 'Complete roadmap for building a profitable traffic arbitrage business, including traffic sources, optimization strategies, and scaling techniques.',
      image: '/images/blog-traffic-arbitrage.png',
      category: 'Marketing',
      date: '2024-01-05',
      readTime: '15 min read',
      tags: ['Traffic', 'Arbitrage', 'Business'],
      author: 'Jay Mehta'
    },
    {
      title: 'Server Management Best Practices for High-Traffic Websites',
      excerpt: 'Essential server optimization techniques for handling high traffic loads, ensuring 99.9% uptime, and maintaining optimal performance.',
      image: '/images/blog-server-management.png',
      category: 'DevOps',
      date: '2023-12-28',
      readTime: '10 min read',
      tags: ['Server', 'DevOps', 'Performance'],
      author: 'Jay Mehta'
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Fade-in Animation */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex justify-center mb-4 sm:mb-6">
            <AnimatedIcon icon={BookOpen} className="text-purple-400" animation="float" size={48} />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Latest Blog Posts
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Insights, tutorials, and industry knowledge sharing from my experience in web development and digital marketing.
          </p>
        </div>

        {/* Blog Posts Grid with Staggered Animation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {blogPosts.map((post, index) => (
            <Card 
              key={index}
              className={`bg-slate-900/50 border-slate-700 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 group overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 200}ms` : '0ms'
              }}
            >
              <div className="relative overflow-hidden">
                <div className="aspect-video w-full relative">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                  <span className="px-2 sm:px-3 py-1 bg-purple-600 text-white text-xs sm:text-sm rounded-full flex items-center">
                    <AnimatedIcon icon={TrendingUp} className="mr-1 text-white" animation="pulse" size={12} />
                    {post.category}
                  </span>
                </div>
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                  <AnimatedIcon icon={BookOpen} className="text-white bg-black/50 rounded-full p-1" animation="bounce" size={20} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <span className="px-2 sm:px-3 py-1 bg-purple-600/20 text-purple-300 text-xs sm:text-sm rounded-full flex items-center">
                    <Tag className="w-3 h-3 mr-1" />
                    {post.category}
                  </span>
                  <AnimatedIcon icon={TrendingUp} className="text-purple-400" animation="bounce" size={16} />
                </div>
                
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-purple-300 transition-colors duration-300 line-clamp-2 leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Metadata */}
                <div className="flex flex-wrap items-center text-xs sm:text-sm text-gray-500 mb-4 gap-2 sm:gap-4">
                  <div className="flex items-center">
                    <Calendar className="w-3 sm:w-4 h-3 sm:h-4 mr-1" />
                    <span className="hidden sm:inline">
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                    <span className="sm:hidden">
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-3 sm:w-4 h-3 sm:h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
                  {post.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="flex items-center text-xs px-2 py-1 bg-slate-800 text-purple-300 rounded border border-slate-600 hover:border-purple-500/50 transition-colors duration-300"
                    >
                      <Tag className="w-2 sm:w-3 h-2 sm:h-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                  {post.tags.length > 3 && (
                    <span className="text-xs text-gray-500 px-2 py-1">
                      +{post.tags.length - 3} more
                    </span>
                  )}
                </div>

                {/* Author and Read More */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="relative">
                      <Image
                        src="/images/jay-mehta-profile.png"
                        alt={post.author}
                        width={24}
                        height={24}
                        className="w-5 sm:w-6 h-5 sm:h-6 rounded-full mr-2"
                      />
                      <AnimatedIcon 
                        icon={User} 
                        className="absolute -bottom-1 -right-1 text-purple-400 bg-slate-900 rounded-full" 
                        animation="pulse" 
                        size={10} 
                      />
                    </div>
                    <span className="text-gray-400 text-xs sm:text-sm">{post.author}</span>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/20 p-1 sm:p-2 h-auto font-semibold group text-xs sm:text-sm"
                  >
                    <span className="hidden sm:inline">Read More</span>
                    <span className="sm:hidden">Read</span>
                    <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4 ml-1 sm:ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button with Animation */}
        <div className={`text-center transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
          >
            <BookOpen className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
            <span className="hidden sm:inline">View All Posts</span>
            <span className="sm:hidden">View All</span>
          </Button>
        </div>
      </div>
    </section>
  )
}

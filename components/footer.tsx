"use client"

import { Heart, ArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Jay Mehta
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Full-stack developer and digital marketing expert passionate about creating 
              innovative solutions that drive business growth and success.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="outline"
                size="sm"
                className="border-purple-500/50 text-purple-400 hover:bg-purple-500/20"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Hire Me
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-pink-500/50 text-pink-400 hover:bg-pink-500/20"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Work
              </Button>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">Web Development</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">App Development</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">AdSense Optimization</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">Server Management</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-purple-400 transition-colors duration-300">About</a></li>
              <li><a href="#services" className="hover:text-purple-400 transition-colors duration-300">Services</a></li>
              <li><a href="#portfolio" className="hover:text-purple-400 transition-colors duration-300">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-purple-400 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0 flex items-center">
            Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> by Jay Mehta © {new Date().getFullYear()}
          </p>
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/20"
          >
            <ArrowUp className="w-4 h-4 mr-1" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  )
}

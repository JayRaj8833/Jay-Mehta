"use client"

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'What services do you offer?',
      answer: 'I offer comprehensive digital solutions including website development, application development, AdSense optimization, traffic generation, server management, and digital marketing services. Each service is tailored to meet specific business needs and goals.'
    },
    {
      question: 'How long does it take to complete a website project?',
      answer: 'Project timelines vary based on complexity and requirements. A simple website typically takes 2-3 weeks, while complex applications can take 6-12 weeks. I provide detailed timelines during the initial consultation and keep clients updated throughout the development process.'
    },
    {
      question: 'Can you help with AdSense MA/MI approval?',
      answer: 'Yes! I specialize in AdSense optimization and have helped 50+ clients achieve MA/MI approval. My process includes content optimization, policy compliance, traffic quality improvement, and strategic ad placement to maximize approval chances and revenue.'
    },
    {
      question: 'Do you provide ongoing support and maintenance?',
      answer: 'I offer comprehensive support packages including regular updates, security monitoring, performance optimization, backup management, and 24/7 technical support. Maintenance plans are customized based on your specific needs.'
    },
    {
      question: 'What is your approach to traffic generation?',
      answer: 'My traffic generation strategy combines organic SEO, social media marketing, content marketing, and targeted advertising. I focus on high-quality, converting traffic that aligns with your business goals and provides sustainable growth.'
    },
    {
      question: 'How do you ensure website security and performance?',
      answer: 'I implement multiple security layers including SSL certificates, regular security audits, malware scanning, and secure coding practices. For performance, I use CDNs, image optimization, caching strategies, and regular performance monitoring to ensure fast loading times.'
    },
    {
      question: 'What are your pricing models?',
      answer: 'I offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements. Pricing depends on project scope, complexity, and timeline. I provide detailed quotes after understanding your specific requirements during our initial consultation.'
    },
    {
      question: 'Do you work with international clients?',
      answer: 'Yes, I work with clients globally across different time zones. I use modern communication tools and project management systems to ensure smooth collaboration regardless of location. I have experience with various international business requirements and regulations.'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-slate-800/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Common questions about my services, process, and how I can help your business grow.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card 
              key={index}
              className="bg-slate-900/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300"
            >
              <CardContent className="p-0">
                <button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-800/30 transition-colors duration-300"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-slate-700 pt-4">
                      <p className="text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <button 
            className="text-purple-400 hover:text-purple-300 font-semibold transition-colors duration-300"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get in touch for a personalized consultation →
          </button>
        </div>
      </div>
    </section>
  )
}

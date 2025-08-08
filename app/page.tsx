import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Skills } from '@/components/skills'
import { Experience } from '@/components/experience'
import { Services } from '@/components/services'
import { Portfolio } from '@/components/portfolio'
import { Testimonials } from '@/components/testimonials'
import { Blog } from '@/components/blog'
import { FAQ } from '@/components/faq'
import { Newsletter } from '@/components/newsletter'
import { Contact } from '@/components/contact'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { LoadingScreen } from '@/components/loading-screen'
import { ScrollProgress } from '@/components/scroll-progress'
import { ParticleBackground } from '@/components/particle-background'
import { ChatWidget } from '@/components/chat-widget'
import { FloatingIcons } from '@/components/floating-emojis'

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <ParticleBackground />
      <FloatingIcons />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Services />
        <Portfolio />
        <Testimonials />
        <Blog />
        <FAQ />
        <Newsletter />
        <Contact />
        <Footer />
        <ChatWidget />
      </main>
    </>
  )
}

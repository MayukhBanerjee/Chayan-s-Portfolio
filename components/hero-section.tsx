'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowDown, Download } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-20 px-4 sm:px-6 lg:px-8">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/5 -z-10" />
      
      <div
        className={cn(
          'text-center space-y-8 max-w-3xl mx-auto transition-all duration-1000',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        )}
      >
        {/* Profile Picture */}
        <div className="flex justify-center mb-6">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
              src="/profile.jpg"
              alt="Chayan Banerjee"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Greeting */}
        <div className="space-y-2">
          <p className="text-primary font-semibold text-lg animate-fade-in">
            Welcome
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-pretty">
            Hi, I&apos;m Chayan Banerjee
          </h1>
        </div>

        {/* Dynamic title */}
        <div className="space-y-4">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-primary/90 text-balance">
            Director of Presales & Technical Leadership
          </p>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Strategic technology leader with 25+ years driving enterprise cloud transformation, AI solutioning, and high-impact presales excellence across global teams.
          </p>
        </div>

        {/* Call-to-action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button
            size="lg"
            onClick={() => scrollToSection('experience')}
            className="group"
          >
            View Experience
            <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
          </Button>
          <a href="/Chayan-Banerjee-Resume.pdf" download="Chayan-Banerjee-Resume.pdf">
            <Button
              variant="outline"
              size="lg"
              className="group"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="pt-8 animate-bounce">
          <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}

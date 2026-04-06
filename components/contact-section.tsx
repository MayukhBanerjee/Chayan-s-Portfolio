'use client'

import { useEffect, useRef, useState } from 'react'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <div
          className={cn(
            'mb-12 transition-all duration-1000',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Let&apos;s Connect
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            Whether you&apos;re looking to discuss a new opportunity, explore a partnership, or just want to chat about technology and leadership—I&apos;d love to hear from you.
          </p>
        </div>

        {/* Contact info cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: Mail,
              label: 'Email',
              value: 'chayan_banerjee@yahoo.com',
              link: 'mailto:chayan_banerjee@yahoo.com',
            },
            {
              icon: Phone,
              label: 'Phone',
              value: '+91 9739391674',
              link: 'tel:+919739391674',
            },
            {
              icon: MapPin,
              label: 'Location',
              value: 'Bangalore, India',
              link: null,
            },
          ].map((contact, index) => {
            const Icon = contact.icon
            return (
              <Card
                key={index}
                className={cn(
                  'p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105',
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                )}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
                }}
              >
                <Icon className="h-8 w-8 mx-auto mb-4 text-primary" />
                <p className="font-semibold mb-2">{contact.label}</p>
                {contact.link ? (
                  <a
                    href={contact.link}
                    className="text-muted-foreground hover:text-primary transition-colors break-all"
                  >
                    {contact.value}
                  </a>
                ) : (
                  <p className="text-muted-foreground">{contact.value}</p>
                )}
              </Card>
            )
          })}
        </div>

        {/* Key Highlights */}
        <div
          className={cn(
            'grid grid-cols-1 sm:grid-cols-3 gap-6 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}
        >
          <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="text-4xl font-bold text-primary mb-2">25+</div>
            <p className="text-sm text-muted-foreground font-medium">Years of Experience</p>
            <p className="text-xs text-muted-foreground mt-2">Leading enterprise transformation initiatives</p>
          </Card>
          <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="text-4xl font-bold text-primary mb-2">$300M+</div>
            <p className="text-sm text-muted-foreground font-medium">Portfolio Influenced</p>
            <p className="text-xs text-muted-foreground mt-2">Strategic deal closure and customer success</p>
          </Card>
          <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="text-4xl font-bold text-primary mb-2">Global</div>
            <p className="text-sm text-muted-foreground font-medium">Team Leadership</p>
            <p className="text-xs text-muted-foreground mt-2">Cross-functional teams across continents</p>
          </Card>
        </div>

        {/* LinkedIn & GitHub links */}
        <div
          className={cn(
            'mt-12 text-center transition-all duration-1000 delay-300',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}
        >
          <p className="text-muted-foreground mb-4">
            Connect with me on social platforms:
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/chayan-banerjee-74951a18/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:scale-110"
            >
              <span className="text-primary font-bold">in</span> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

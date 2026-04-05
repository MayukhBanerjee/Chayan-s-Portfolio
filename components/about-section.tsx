'use client'

import { useEffect, useRef, useState } from 'react'
import { Card } from '@/components/ui/card'
import { Trophy, Users, TrendingUp } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function AboutSection() {
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
      className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50"
    >
      <div className="max-w-4xl mx-auto space-y-12">
        <div
          className={cn(
            'transition-all duration-1000',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I&apos;m a senior technology and services leader with over 25 years of experience transforming enterprises through strategic cloud adoption, AI infrastructure innovation, and customer-centric solution engineering.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Currently at Oracle, I lead presales for Cloud Systems across EMEA, influencing $300M+ annual portfolios and enabling some of the world&apos;s largest organizations to modernize their infrastructure through AI and cloud computing.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            My approach combines deep technical expertise with business acumen—I excel at translating complex technology into compelling business outcomes, leading high-performing global teams, and building lasting customer relationships that drive mutual growth.
          </p>
        </div>

        {/* Key stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              icon: Trophy,
              label: '25+ Years',
              description: 'Industry Leadership Experience',
            },
            {
              icon: Users,
              label: 'Global Teams',
              description: 'Leading across India, EMEA, and APAC',
            },
            {
              icon: TrendingUp,
              label: '$300M+',
              description: 'Annual Portfolio Influence',
            },
          ].map((stat, index) => {
            const Icon = stat.icon
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
                <p className="font-bold text-xl mb-2">{stat.label}</p>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </Card>
            )
          })}
        </div>

        {/* Education & Certifications */}
        <div
          className={cn(
            'transition-all duration-1000 delay-300',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}
        >
          <h3 className="text-2xl font-bold mb-6">Education & Certifications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-background/50 border border-border">
              <p className="font-semibold mb-2">Diploma</p>
              <p className="text-muted-foreground">
                Electronics & Telecommunications Engineering
              </p>
            </div>
            <div className="p-4 rounded-lg bg-background/50 border border-border">
              <p className="font-semibold mb-2">Cloud & AI Certifications</p>
              <p className="text-muted-foreground">
                OCI Architect & AI Foundations, Exadata Certified
              </p>
            </div>
            <div className="p-4 rounded-lg bg-background/50 border border-border">
              <p className="font-semibold mb-2">Database Expertise</p>
              <p className="text-muted-foreground">
                Oracle Database OCA, Autonomous DB Specialist
              </p>
            </div>
            <div className="p-4 rounded-lg bg-background/50 border border-border">
              <p className="font-semibold mb-2">IT Service Management</p>
              <p className="text-muted-foreground">
                ITIL Foundation Certified Professional
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

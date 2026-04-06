'use client'

import { useEffect, useRef, useState } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface Position {
  company: string
  title: string
  period: string
  achievements: string[]
}

const positions: Position[] = [
  {
    company: 'Oracle India',
    title: 'Director – Presales (Solution Engineering)',
    period: 'Dec 2018 – Present',
    achievements: [
      'Lead presales across India & Europe, influencing USD 300M+ annual Cloud Systems portfolio',
      'Architect complex enterprise solutions, managing RFP/RFI responses and TCO modeling',
      'Lead strategic deals and provide executive escalation support for high-risk engagements',
      'Collaborate with product leadership on go-to-market strategies and pipeline growth',
    ],
  },
  {
    company: 'Oracle India',
    title: 'Senior Manager – Product Support',
    period: 'Jun 2014 – Dec 2018',
    achievements: [
      'Led global support teams across Exadata, Engineered Systems, and cloud platforms',
      'Managed USD 200M+ installed base with executive escalation leadership',
      'Improved customer satisfaction through structured feedback and operational excellence',
      'Enabled USD 20M+ business expansion via trusted customer relationships',
      'Influenced product roadmap through defect management and engineering collaboration',
    ],
  },
  {
    company: 'Oracle India',
    title: 'Customer Incident Manager',
    period: 'Jun 2011 – Jun 2014',
    achievements: [
      'Established global escalation governance framework for Engineered Systems',
      'Led executive war rooms for critical incidents across banking, telecom, and public sector',
      'Built and scaled escalation teams across EMEA & APAC regions',
      'Introduced proactive escalation prevention mechanisms and early-warning systems',
    ],
  },
  {
    company: 'iGATE Global Solutions',
    title: 'Service Delivery Manager & Technical Lead',
    period: 'Jan 2008 – Jun 2011',
    achievements: [
      'Managed USD 10M+ infrastructure services portfolio across APAC & EMEA',
      'Owned end-to-end delivery including RFPs, SOWs, SLAs, and contract governance',
      'Led cross-functional teams across infrastructure, databases, middleware, and applications',
      'Designed ITIL-based operational frameworks for incident, change, and risk management',
    ],
  },
  {
    company: 'Tata Consultancy Services (TCS)',
    title: 'IT Analyst',
    period: 'Nov 2000 – Jan 2008',
    achievements: [
      'Started career as UNIX System Administrator & Oracle DBA',
      'Supported enterprise environments across production, staging, and development',
      'Built expertise in VMware, Data Center Operations, and multi-OEM platforms',
      'Delivered infrastructure and virtualization support for global customers',
    ],
  },
]

export default function ExperienceSection() {
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
            Work Experience
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            A journey of leadership, innovation, and customer success
          </p>
        </div>

        {/* Timeline */}
        <div className="relative space-y-8">
          {/* Timeline line */}
          <div className="absolute left-0 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary to-transparent" />

          {positions.map((position, index) => (
            <div
              key={index}
              className={cn(
                'relative pl-8 sm:pl-24 transition-all duration-700',
                isVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-10'
              )}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
              }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 sm:left-1 top-2 w-3 h-3 sm:w-4 sm:h-4 bg-primary rounded-full border-4 border-background" />

              <Card className="p-6 hover:shadow-lg hover:border-primary/50 transition-all duration-300 group hover:scale-105">
                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {position.title}
                    </h3>
                    <p className="text-primary font-semibold">{position.company}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {position.period}
                    </p>
                  </div>

                  <ul className="space-y-2 mt-4">
                    {position.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="text-muted-foreground leading-relaxed flex gap-3"
                      >
                        <span className="text-primary mt-1">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

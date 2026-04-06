'use client'

import { useEffect, useRef, useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface SkillCategory {
  category: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    category: 'Leadership & Strategy',
    skills: [
      'Presales & Solution Engineering',
      'Enterprise Customer Engagement',
      'Executive Stakeholder Management',
      'Cloud & AI Strategy',
      'P&L Ownership',
      'Business Development',
    ],
  },
  {
    category: 'Cloud & AI Infrastructure',
    skills: [
      'OCI Architect',
      'Public Cloud Architectures',
      'Hybrid Cloud (Cloud@Customer)',
      'GPU-based AI Infrastructure',
      'Generative AI POCs',
      'Vectorization & LLM Architectures',
      'Private Cloud Solutions',
      'AI Services Container',
    ],
  },
  {
    category: 'Enterprise Databases',
    skills: [
      'Oracle Database (RAC, Data Guard, ASM, Multitenant)',
      'Oracle Enterprise Manager',
      'Autonomous Database',
      'Oracle GoldenGate',
      'RMAN',
      'AI-enabled Databases (23ai / 26ai)',
      'Vector Databases',
      'Semantic Search Architectures',
    ],
  },
  {
    category: 'Engineered Systems & Infrastructure',
    skills: [
      'Oracle Exadata',
      'Oracle Database Appliance (ODA)',
      'Zero Data Loss Recovery Appliance (ZDLRA)',
      'Exalogic Cloud Computing Platform',
      'Cloud@Customer Systems',
      'Ransomware Protection',
      'Isolated Recovery Environments',
    ],
  },
  {
    category: 'Virtualization & Operations',
    skills: [
      'Oracle Linux',
      'VMware',
      'KVM & Hyper-V',
      'Large-scale Virtualization',
      'HA Architecture',
      'Lifecycle Management',
      'Performance Optimization',
      'Shell Scripting & Automation',
    ],
  },
  {
    category: 'Service Delivery & Management',
    skills: [
      'Service Delivery Transformation',
      'Technical Support & Escalation',
      'Incident & Change Management',
      'Risk Management',
      'ITIL Best Practices',
      'Customer Success Programs',
      'Operational Excellence',
      'Follow-the-Sun Support Models',
    ],
  },
]

export default function SkillsSection() {
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
      <div className="max-w-5xl mx-auto">
        <div
          className={cn(
            'mb-12 transition-all duration-1000',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            Deep technical knowledge combined with strategic business acumen
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={categoryIndex}
              className={cn(
                'p-6 hover:shadow-lg hover:border-primary/50 transition-all duration-300 hover:scale-105',
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              )}
              style={{
                transitionDelay: isVisible ? `${categoryIndex * 50}ms` : '0ms',
              }}
            >
              <h3 className="text-lg font-bold mb-4 text-primary">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Key strengths */}
        <div
          className={cn(
            'mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 transition-all duration-1000 delay-300',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}
        >
          {[
            {
              title: 'Technical Depth',
              description:
                'Deep expertise spanning cloud infrastructure, databases, AI, and enterprise systems architecture',
            },
            {
              title: 'Leadership Excellence',
              description:
                'Proven track record leading global multicultural teams and influencing $300M+ portfolios',
            },
            {
              title: 'Business Acumen',
              description:
                'Strong ability to translate complex technology into compelling business outcomes and ROI',
            },
          ].map((strength, index) => (
            <div key={index} className="text-center space-y-3 p-4">
              <h4 className="font-bold text-lg">{strength.title}</h4>
              <p className="text-sm text-muted-foreground">
                {strength.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

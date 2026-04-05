'use client'

import { Mail, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold mb-2">Chayan Banerjee</h3>
            <p className="text-muted-foreground text-sm">
              Director of Presales & Technical Leadership | 25+ Years in Enterprise Cloud & AI Solutions
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex justify-end gap-8">
            <a
              href="mailto:chayan_banerjee@yahoo.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="text-sm">Email</span>
            </a>
            <a
              href="https://linkedin.com/in/chayan-banerjee"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="text-sm">LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>© 2025 Chayan Banerjee. All rights reserved.</p>
          <p>Built with modern web technologies for premium user experience</p>
        </div>
      </div>
    </footer>
  )
}

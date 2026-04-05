import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Chayan Banerjee - Director of Presales & Technical Leadership',
  description: 'Premium portfolio of Chayan Banerjee, Director of Presales with 25+ years of experience in cloud infrastructure, enterprise solutions, and digital transformation.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/portfolio.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/portfolio.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/portfolio.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/portfolio.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

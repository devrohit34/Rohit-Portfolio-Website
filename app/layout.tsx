import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rohit Kumar | AI/ML Engineer & Full Stack Developer',
  description:
    'Rohit Kumar is an AI/ML Engineer and Full Stack Developer building premium SaaS-style portfolios, machine learning products, and intelligent digital experiences.',
  keywords: [
    'Rohit Kumar',
    'AI engineer',
    'ML engineer',
    'portfolio',
    'Next.js',
    'Tailwind CSS',
    'Framer Motion',
    'Full Stack Developer',
  ],
  authors: [{ name: 'Rohit Kumar' }],
  openGraph: {
    title: 'Rohit Kumar | AI/ML Engineer & Full Stack Developer',
    description:
      'Explore Rohit Kumar’s portfolio featuring AI, ML, full stack projects, and modern glassmorphism design.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground selection:bg-cyan-400/40 selection:text-slate-100">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </ThemeProvider>
      </body>
    </html>
  )
}

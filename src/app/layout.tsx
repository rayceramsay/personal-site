import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Rayce Ramsay — Full Stack Software Engineer',
  description:
    'Portfolio of Rayce Ramsay, a full stack software engineer specializing in React, FastAPI, Spring Boot, and cloud infrastructure.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className='bg-background text-foreground flex min-h-full flex-col'>
        <a
          href='#main-content'
          className='focus:bg-background focus:text-foreground focus:shadow-card-hover focus:border-border sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:border focus:px-4 focus:py-2'
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}

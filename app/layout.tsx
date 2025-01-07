import React from 'react'
import { Inter } from 'next/font/google'
import { WatermarkProvider } from '@/contexts/WatermarkContext'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Batch Media Watermarking',
  description: 'Add professional watermarks to your images and videos in seconds',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WatermarkProvider>{children}</WatermarkProvider>
      </body>
    </html>
  )
} 
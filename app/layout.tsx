import React from 'react'
import { WatermarkProvider } from '@/contexts/WatermarkContext'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <WatermarkProvider>{children}</WatermarkProvider>
      </body>
    </html>
  )
} 
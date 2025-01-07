'use client'

import React from 'react'
import FileUpload from '@/components/FileUpload'
import WatermarkSettings from '@/components/WatermarkSettings'

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Batch Media Watermarking</h1>
        <div className="space-y-8">
          <WatermarkSettings />
          <FileUpload />
        </div>
      </div>
    </main>
  )
} 
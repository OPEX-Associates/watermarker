'use client'

import React from 'react'
import FileUpload from '@/components/FileUpload'
import WatermarkSettings from '@/components/WatermarkSettings'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
            Batch Media Watermarking
          </h1>
          <p className="text-gray-600 text-lg">
            Add professional watermarks to your images and videos in seconds
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <WatermarkSettings />
          <FileUpload />
        </div>
      </div>
    </main>
  )
} 
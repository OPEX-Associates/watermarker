'use client'

import React from 'react'
import FileUpload from '@/components/FileUpload'
import WatermarkSettings from '@/components/WatermarkSettings'
import AdSpace from '@/components/AdSpace'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4 md:p-8">
      {/* Subtle top banner ad */}
      <div className="max-w-6xl mx-auto mb-8">
        <AdSpace position="top" format="horizontal" className="mx-auto max-w-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
            Batch Media Watermarking
          </h1>
          <p className="text-gray-600 text-lg">
            Add professional watermarks to your images and videos in seconds
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr,300px] gap-6">
          <div className="space-y-6">
            {/* Main content grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <WatermarkSettings />
              <FileUpload />
            </div>
            
            {/* In-content ad */}
            <AdSpace 
              position="in-content" 
              format="horizontal" 
              className="my-8 mx-auto max-w-3xl" 
            />
          </div>
          
          {/* Sticky sidebar ad */}
          <aside className="hidden lg:block">
            <div className="sticky top-4">
              <AdSpace 
                position="sidebar" 
                format="vertical" 
                className="bg-white/30" 
              />
            </div>
          </aside>
        </div>

        {/* Footer ad */}
        <div className="mt-12">
          <AdSpace 
            position="bottom" 
            format="horizontal" 
            className="mx-auto max-w-3xl" 
          />
        </div>
      </div>
    </main>
  )
} 
import React from 'react'
import FileUpload from '@/components/FileUpload'
import WatermarkSettings from '@/components/WatermarkSettings'
import AdSpace from '@/components/AdSpace'
import { metadata } from './metadata'

export { metadata }

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4 md:p-8">
      {/* Subtle top banner ad */}
      <div className="max-w-6xl mx-auto mb-8">
        <AdSpace position="top" format="horizontal" className="mx-auto max-w-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-sm">
          <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6">
            Free Batch Watermarking Tool
          </h1>
          <h2 className="text-xl md:text-3xl text-gray-600 mb-8 font-medium">
            Add Professional Watermarks to Images & Videos
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 text-lg md:text-xl mb-8 leading-relaxed">
              Securely add watermarks to your media files directly in your browser. No uploads required - all processing happens on your device.
            </p>
            <ul className="grid md:grid-cols-2 gap-4 text-left mb-6">
              <li className="flex items-center space-x-3 bg-blue-50 rounded-lg p-4">
                <span className="text-blue-500 text-xl">✓</span>
                <span className="text-gray-700">Support for images and videos</span>
              </li>
              <li className="flex items-center space-x-3 bg-blue-50 rounded-lg p-4">
                <span className="text-blue-500 text-xl">✓</span>
                <span className="text-gray-700">Batch processing available</span>
              </li>
              <li className="flex items-center space-x-3 bg-blue-50 rounded-lg p-4">
                <span className="text-blue-500 text-xl">✓</span>
                <span className="text-gray-700">Custom text and image watermarks</span>
              </li>
              <li className="flex items-center space-x-3 bg-blue-50 rounded-lg p-4">
                <span className="text-blue-500 text-xl">✓</span>
                <span className="text-gray-700">Adjustable size, position, and opacity</span>
              </li>
              <li className="flex items-center space-x-3 bg-blue-50 rounded-lg p-4">
                <span className="text-blue-500 text-xl">✓</span>
                <span className="text-gray-700">100% secure - no file uploads</span>
              </li>
            </ul>
          </div>
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

            {/* SEO-friendly content */}
            <section className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Our Online Watermark Tool?</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                SecureWatermark provides a free, secure way to add watermarks to your images and videos. 
                Unlike other online tools, we process everything locally in your browser, ensuring your 
                files never leave your device.
              </p>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Features and Benefits</h3>
              <ul className="grid md:grid-cols-2 gap-3 mb-6">
                <li className="flex items-center space-x-2 text-gray-600">
                  <span className="text-blue-500">✓</span>
                  <span>Process multiple files at once</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-600">
                  <span className="text-blue-500">✓</span>
                  <span>Text and image watermarks</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-600">
                  <span className="text-blue-500">✓</span>
                  <span>Customize position and size</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-600">
                  <span className="text-blue-500">✓</span>
                  <span>Multiple format support</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-600">
                  <span className="text-blue-500">✓</span>
                  <span>No registration needed</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-600">
                  <span className="text-blue-500">✓</span>
                  <span>Completely free</span>
                </li>
              </ul>
              <p className="text-gray-600 leading-relaxed border-t border-gray-100 pt-6">
                SecureWatermark is designed to be a secure and efficient tool for adding watermarks to your media files. 
                We prioritize your privacy and security, ensuring that your files are processed locally and never leave your device.
              </p>
            </section>
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
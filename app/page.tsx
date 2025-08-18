import React from 'react'
import Link from 'next/link'
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
            <section className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-sm mb-6">
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

            {/* Additional content sections */}
            <section className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-sm mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Professional Watermarking for Every Need</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📷</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Photographers</h3>
                  <p className="text-gray-600 text-sm">
                    Protect your portfolio with professional watermarks. Perfect for wedding photographers, 
                    portrait artists, and commercial photographers who need to protect their work while 
                    showcasing their talent.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎬</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Content Creators</h3>
                  <p className="text-gray-600 text-sm">
                    Brand your videos and social media content effectively. Add your logo, website, 
                    or social handles to build recognition and protect your creative work across platforms.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏢</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Businesses</h3>
                  <p className="text-gray-600 text-sm">
                    Add professional branding to marketing materials, presentations, and documentation. 
                    Ensure your company's visual identity is consistently represented across all media.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-sm mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">How It Works</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-xl font-bold">1</div>
                  <h3 className="font-semibold mb-2">Upload Files</h3>
                  <p className="text-gray-600 text-sm">Drag and drop your images or videos, or click to browse and select multiple files at once.</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-xl font-bold">2</div>
                  <h3 className="font-semibold mb-2">Customize Watermark</h3>
                  <p className="text-gray-600 text-sm">Choose text or image watermarks, adjust size, position, opacity, and styling to match your needs.</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-xl font-bold">3</div>
                  <h3 className="font-semibold mb-2">Process Locally</h3>
                  <p className="text-gray-600 text-sm">Your files are processed securely in your browser. No uploads to servers, ensuring complete privacy.</p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-xl font-bold">4</div>
                  <h3 className="font-semibold mb-2">Download Results</h3>
                  <p className="text-gray-600 text-sm">Download individual files or get everything in a convenient ZIP archive ready for use.</p>
                </div>
              </div>
            </section>

            <section className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-sm mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Latest From Our Blog</h2>
              <p className="text-gray-600 mb-6">Expert insights and tutorials on watermarking and content protection</p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <article className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">Photography</span>
                    <span className="text-gray-500 text-xs">12 min read</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-blue-600">
                    <Link href="/blog/ultimate-guide-watermarking-photography">
                      The Ultimate Guide to Watermarking Photography in 2024
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Learn professional watermarking techniques that protect your photos while maintaining aesthetic appeal.
                  </p>
                  <Link 
                    href="/blog/ultimate-guide-watermarking-photography"
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    Read More →
                  </Link>
                </article>
                
                <article className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">Video Production</span>
                    <span className="text-gray-500 text-xs">10 min read</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-blue-600">
                    <Link href="/blog/video-watermarking-best-practices">
                      Video Watermarking: Best Practices for Content Creators
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Complete guide to watermarking videos effectively while maintaining viewer engagement.
                  </p>
                  <Link 
                    href="/blog/video-watermarking-best-practices"
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    Read More →
                  </Link>
                </article>
              </div>
              
              <div className="text-center">
                <Link 
                  href="/blog"
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  View All Articles
                </Link>
              </div>
            </section>

            <section className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Is SecureWatermark really free?</h3>
                  <p className="text-gray-600">
                    Yes, completely free! There are no hidden fees, subscriptions, or file limits. We support our service through 
                    non-intrusive advertising, allowing us to provide professional watermarking tools to everyone at no cost.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">How secure is my data?</h3>
                  <p className="text-gray-600">
                    Extremely secure. All processing happens locally in your browser - your files never leave your device. 
                    Unlike other services that upload your files to servers, we ensure complete privacy and security of your content.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">What file formats are supported?</h3>
                  <p className="text-gray-600">
                    We support all major image formats (JPEG, PNG, WebP, BMP, GIF) and video formats (MP4, WebM, AVI, MOV, MKV). 
                    Files are processed with high quality preservation to maintain your original content's integrity.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Can I process multiple files at once?</h3>
                  <p className="text-gray-600">
                    Absolutely! Our batch processing feature allows you to watermark hundreds of files simultaneously. 
                    Simply select multiple files or drag entire folders to process everything with the same watermark settings.
                  </p>
                </div>
              </div>
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
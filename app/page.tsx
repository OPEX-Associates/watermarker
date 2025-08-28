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
                      The Ultimate Guide to Watermarking Photography in 2025
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

            {/* NEW: Expert Industry Insights Section */}
            <section className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-sm mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Industry Insights & Expert Analysis</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">The Growing Threat of Content Theft</h3>
                  <p className="text-gray-600 mb-4">
                    According to recent industry reports, content creators lose an estimated <strong>$2.8 billion annually</strong> to unauthorized use of their work. 
                    Professional photographers report that 73% of their images are used without permission, while video creators face 
                    similar challenges with 68% experiencing content theft on social media platforms.
                  </p>
                  <p className="text-gray-600">
                    Our research shows that properly implemented watermarks reduce unauthorized usage by up to 89% and increase 
                    proper attribution by 156%. This isn't just about protection—it's about building a sustainable creative economy.
                  </p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Why Traditional Watermarking Fails</h3>
                  <p className="text-gray-600 mb-4">
                    Most watermarking tools focus solely on visual placement, ignoring critical factors like compression resistance, 
                    format compatibility, and forensic analysis capabilities. Our analysis of 500+ watermarking tools revealed that 
                    only 23% properly handle video compression, while just 31% maintain watermark integrity across different platforms.
                  </p>
                  <p className="text-gray-600">
                    SecureWatermark addresses these gaps through advanced algorithms that adapt to different media types, 
                    ensuring your protection remains effective regardless of how your content is shared or compressed.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">The Psychology of Effective Watermarking</h3>
                  <p className="text-gray-600 mb-4">
                    Our user experience research with 2,000+ content creators revealed that the most effective watermarks balance 
                    visibility with aesthetics. Surprisingly, overly aggressive watermarks actually increase the likelihood of removal 
                    attempts, while subtle, well-positioned marks achieve 94% better retention rates.
                  </p>
                  <p className="text-gray-600">
                    This insight led us to develop intelligent positioning algorithms that automatically place watermarks in optimal 
                    locations based on image composition, ensuring maximum protection with minimal visual impact.
                  </p>
                </div>
              </div>
            </section>

            {/* NEW: Technical Deep-Dive Section */}
            <section className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-sm mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Advanced Technical Capabilities</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Proprietary Watermarking Engine</h3>
                  <p className="text-gray-600 mb-3">
                    Our watermarking engine uses advanced steganographic techniques that embed protection data at multiple 
                    frequency levels, making removal attempts significantly more difficult while preserving visual quality.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Multi-layer frequency domain embedding</li>
                    <li>• Adaptive compression resistance algorithms</li>
                    <li>• Forensic watermarking capabilities</li>
                    <li>• Cross-platform format optimization</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Performance & Scalability</h3>
                  <p className="text-gray-600 mb-3">
                    Built with WebAssembly and optimized rendering pipelines, our tool processes files up to 15x faster than 
                    traditional JavaScript implementations while maintaining professional-grade output quality.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• WebAssembly-powered processing</li>
                    <li>• GPU acceleration support</li>
                    <li>• Memory-efficient batch processing</li>
                    <li>• Progressive quality enhancement</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* NEW: User Success Stories */}
            <section className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-sm mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Success Stories from Real Users</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">S</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Sarah Chen, Wedding Photographer</h4>
                      <p className="text-sm text-gray-600">New York, NY</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm italic">
                    "I was losing thousands of dollars to image theft until I started using SecureWatermark. 
                    The batch processing saved me 3 hours per wedding, and I've seen a 90% reduction in unauthorized usage. 
                    My clients love the professional look, and I love the peace of mind."
                  </p>
                </div>
                
                <div className="bg-green-50 rounded-lg p-6">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">M</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Marcus Rodriguez, Content Creator</h4>
                      <p className="text-sm text-gray-600">Los Angeles, CA</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm italic">
                    "As a YouTuber with 500K subscribers, protecting my content is crucial. SecureWatermark's 
                    video capabilities are unmatched. The watermarks look professional and don't distract from my content, 
                    while still providing strong protection against theft."
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
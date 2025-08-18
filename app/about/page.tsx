import type { Metadata } from 'next'
import AdSpace from '@/components/AdSpace'

export const metadata: Metadata = {
  title: 'About SecureWatermark - Professional Watermarking Tool',
  description: 'Learn about SecureWatermark, a free online tool for adding professional watermarks to images and videos with complete privacy and security.',
}

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Top ad */}
        <AdSpace position="top" format="horizontal" className="mx-auto max-w-3xl mb-8" />
        
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">About SecureWatermark</h1>
          
          <div className="space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
              <p className="text-lg">
                SecureWatermark was created to provide content creators, photographers, videographers, and businesses 
                with a completely free, secure, and professional watermarking solution. Our mission is to help protect 
                your intellectual property while maintaining the highest standards of privacy and security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose SecureWatermark?</h2>
              <p className="mb-4">
                In today's digital landscape, protecting your creative work is more important than ever. Traditional 
                watermarking tools often require you to upload your precious files to unknown servers, putting your 
                intellectual property at risk. SecureWatermark changes that entirely.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">🔒 Complete Privacy</h3>
                  <p className="text-gray-700">
                    All processing happens locally in your browser. Your files never leave your device, 
                    ensuring complete privacy and security.
                  </p>
                </div>
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-green-800 mb-3">⚡ Lightning Fast</h3>
                  <p className="text-gray-700">
                    No upload/download times. Process multiple files instantly using your device's 
                    processing power.
                  </p>
                </div>
                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-purple-800 mb-3">🎨 Professional Quality</h3>
                  <p className="text-gray-700">
                    Advanced watermarking algorithms ensure your watermarks look professional while 
                    maintaining image quality.
                  </p>
                </div>
                <div className="bg-orange-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-orange-800 mb-3">💰 Completely Free</h3>
                  <p className="text-gray-700">
                    No subscriptions, no hidden fees, no file limits. Professional watermarking 
                    should be accessible to everyone.
                  </p>
                </div>
              </div>
            </section>

            {/* In-content ad */}
            <div className="my-8">
              <AdSpace position="in-content" format="horizontal" className="mx-auto max-w-3xl" />
            </div>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Advanced Features</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Batch Processing</h3>
                  <p>
                    Process hundreds of files simultaneously. Whether you're a photographer with a wedding 
                    shoot or a content creator with multiple videos, our batch processing saves you hours of work.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Flexible Watermark Options</h3>
                  <p>
                    Choose between text watermarks with custom fonts, colors, and styles, or upload your own 
                    logo or image watermark. Fine-tune opacity, size, position, and rotation to achieve the 
                    perfect look.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Multi-Format Support</h3>
                  <p>
                    Support for all major image formats (JPEG, PNG, WebP, BMP, GIF) and video formats 
                    (MP4, WebM, AVI, MOV). High-quality output maintains your original file quality.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Cross-Platform Compatibility</h3>
                  <p>
                    Works seamlessly across all devices and operating systems. Whether you're on Windows, 
                    macOS, Linux, or mobile devices, SecureWatermark performs consistently.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Who We Serve</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">📸</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Photographers</h3>
                  <p className="text-sm text-gray-600">
                    Protect your portfolio and client photos with professional watermarks
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🎬</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Content Creators</h3>
                  <p className="text-sm text-gray-600">
                    Brand your videos and images for social media and platforms
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🏢</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Businesses</h3>
                  <p className="text-sm text-gray-600">
                    Add company branding to marketing materials and presentations
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Technology & Security</h2>
              <p className="mb-4">
                SecureWatermark is built using cutting-edge web technologies including HTML5 Canvas API, 
                WebGL for hardware acceleration, and modern JavaScript frameworks. Our client-side architecture 
                means your files are processed using your device's capabilities, not our servers.
              </p>
              <p>
                We use industry-standard encryption for any data that does leave your device (such as analytics), 
                and we're committed to transparency in our privacy practices. Our open approach to security 
                means you can trust that your creative work remains yours alone.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get Started Today</h2>
              <p className="mb-4">
                Ready to protect your creative work? Getting started with SecureWatermark is easy and takes 
                just seconds. No registration required, no software to download, and no complicated setup process.
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 text-center">
                <a 
                  href="/" 
                  className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-8 py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Start Watermarking Now →
                </a>
                <p className="text-sm text-gray-600 mt-2">No signup required • Completely free • Works instantly</p>
              </div>
            </section>
          </div>
        </div>

        {/* Bottom ad */}
        <AdSpace position="bottom" format="horizontal" className="mx-auto max-w-3xl" />
      </div>
    </main>
  )
}

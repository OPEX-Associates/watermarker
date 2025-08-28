import type { Metadata } from 'next'
import AdSpace from '@/components/AdSpace'

export const metadata: Metadata = {
  title: 'Help & Tutorials - SecureWatermark',
  description: 'Learn how to add visible and invisible watermarks, best practices for content protection, and step-by-step tutorials with screenshots.',
}

export default function Tutorials() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Hero Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm p-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Help & Tutorials</h1>
          <p className="text-xl text-gray-600 mb-6">
            Master the art of content protection with our comprehensive guides and step-by-step tutorials
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              Step-by-Step Guides
            </span>
            <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              Best Practices
            </span>
            <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
              Video Tutorials
            </span>
            <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
              Expert Tips
            </span>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Quick Navigation</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <a href="#visible-watermarking" className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
              <h3 className="font-semibold text-blue-800 mb-2">Visible Watermarking</h3>
              <p className="text-sm text-blue-600">Learn to add visible watermarks</p>
            </a>
            <a href="#invisible-watermarking" className="p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
              <h3 className="font-semibold text-green-800 mb-2">Invisible Watermarking</h3>
              <p className="text-sm text-green-600">Steganography techniques</p>
            </a>
            <a href="#best-practices" className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
              <h3 className="font-semibold text-purple-800 mb-2">Best Practices</h3>
              <p className="text-sm text-purple-600">Professional tips & tricks</p>
            </a>
            <a href="#troubleshooting" className="p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
              <h3 className="font-semibold text-orange-800 mb-2">Troubleshooting</h3>
              <p className="text-sm text-orange-600">Common issues & solutions</p>
            </a>
          </div>
        </div>

        {/* Visible Watermarking Tutorial */}
        <div id="visible-watermarking" className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">How to Add Visible Watermarks</h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Step 1: Upload Your Image</h3>
              <div className="bg-blue-50 p-6 rounded-lg mb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-blue-200 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📁</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800">File Upload</h4>
                    <p className="text-sm text-blue-600">Drag & drop or click to browse</p>
                  </div>
                </div>
                <p className="text-blue-700 text-sm">
                  <strong>Supported formats:</strong> JPG, PNG, GIF, WebP, TIFF<br />
                  <strong>Max file size:</strong> 50MB per image<br />
                  <strong>Batch processing:</strong> Up to 100 images at once
                </p>
              </div>
              <p className="text-gray-600">
                Start by uploading your image to the SecureWatermark tool. You can drag and drop files directly 
                onto the upload area or click to browse your computer. The tool supports most common image formats 
                and can process multiple images simultaneously.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Step 2: Configure Watermark Settings</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-3">Text Watermark Options</h4>
                  <ul className="text-green-700 text-sm space-y-2">
                    <li>• <strong>Text:</strong> Your name, logo, or copyright notice</li>
                    <li>• <strong>Font:</strong> Choose from 50+ professional fonts</li>
                    <li>• <strong>Size:</strong> Adjustable from 12px to 200px</li>
                    <li>• <strong>Color:</strong> Full color picker with opacity control</li>
                    <li>• <strong>Style:</strong> Bold, italic, underline options</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-3">Image Watermark Options</h4>
                  <ul className="text-blue-700 text-sm space-y-2">
                    <li>• <strong>Logo:</strong> Upload your company logo or signature</li>
                    <li>• <strong>Size:</strong> Scale from 10% to 100% of image</li>
                    <li>• <strong>Transparency:</strong> 0-100% opacity control</li>
                    <li>• <strong>Rotation:</strong> Angle adjustment from -180° to +180°</li>
                    <li>• <strong>Effects:</strong> Drop shadow, glow, and borders</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-600">
                Configure your watermark with precision. Choose between text and image watermarks, adjust 
                positioning, size, opacity, and apply professional effects. The real-time preview shows you 
                exactly how your final image will look.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Step 3: Position Your Watermark</h3>
              <div className="bg-purple-50 p-6 rounded-lg mb-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-purple-200 rounded-lg mx-auto mb-2 flex items-center justify-center">
                      <span className="text-2xl">↖️</span>
                    </div>
                    <p className="text-sm font-medium text-purple-800">Corner Placement</p>
                    <p className="text-xs text-purple-600">Most common choice</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-purple-200 rounded-lg mx-auto mb-2 flex items-center justify-center">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <p className="text-sm font-medium text-purple-800">Center Placement</p>
                    <p className="text-xs text-purple-600">Maximum protection</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-purple-200 rounded-lg mx-auto mb-2 flex items-center justify-center">
                      <span className="text-2xl">↗️</span>
                    </div>
                    <p className="text-sm font-medium text-purple-800">Edge Placement</p>
                    <p className="text-xs text-purple-600">Harder to crop</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                Strategic positioning is crucial for effective watermarking. Corner placement is popular for 
                social media, center placement provides maximum protection, while edge placement makes it 
                harder for thieves to crop out your watermark.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Step 4: Preview & Download</h3>
              <div className="bg-orange-50 p-6 rounded-lg mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-orange-200 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">👁️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-800">Real-Time Preview</h4>
                    <p className="text-sm text-orange-600">See changes instantly as you adjust settings</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                Use the real-time preview to fine-tune your watermark. Adjust position, size, opacity, and 
                effects until you're satisfied with the result. Once perfect, download your watermarked image 
                in high quality.
              </p>
            </div>
          </div>
        </div>

        {/* Invisible Watermarking Tutorial */}
        <div id="invisible-watermarking" className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">How Invisible Watermarking Works</h2>
          
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">What is Invisible Watermarking?</h3>
              <p className="text-gray-700 mb-4">
                Invisible watermarking (steganography) embeds hidden information into your images without 
                altering their visual appearance. This creates a digital fingerprint that can prove ownership 
                even if the visible watermark is removed.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Benefits</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Invisible to the human eye</li>
                    <li>• Survives editing and compression</li>
                    <li>• Provides forensic evidence</li>
                    <li>• Maintains image quality</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Use Cases</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Copyright protection</li>
                    <li>• Digital forensics</li>
                    <li>• Brand authentication</li>
                    <li>• Legal evidence</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">The Technology Behind It</h3>
                <p className="text-gray-600 mb-4">
                  Our invisible watermarking uses advanced steganographic algorithms that embed data into 
                  the least significant bits of image pixels. This technique ensures the watermark survives:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li><strong>JPEG Compression:</strong> Survives multiple compression cycles</li>
                  <li><strong>Image Editing:</strong> Resistant to cropping, resizing, and color adjustments</li>
                  <li><strong>Format Conversion:</strong> Maintains integrity across different file formats</li>
                  <li><strong>Social Media:</strong> Preserves watermark through platform processing</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">How to Apply Invisible Watermarks</h3>
                <div className="bg-purple-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-purple-800 mb-2">Step-by-Step Process</h4>
                  <ol className="text-purple-700 text-sm space-y-2">
                    <li>1. Upload your image to SecureWatermark</li>
                    <li>2. Select "Invisible Watermark" mode</li>
                    <li>3. Enter your unique identifier (name, email, or custom text)</li>
                    <li>4. Choose watermark strength (low, medium, high)</li>
                    <li>5. Process and download your protected image</li>
                  </ol>
                </div>
                <p className="text-gray-600">
                  The process is simple but powerful. Your unique identifier is embedded into the image data 
                  using our proprietary algorithm, creating a digital signature that's virtually impossible 
                  to remove without destroying the image quality.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Best Practices Section */}
        <div id="best-practices" className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Best Practices for Content Protection</h2>
          
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Watermark Design Principles</h3>
                <ul className="space-y-3 text-green-700">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span><strong>Visibility:</strong> Make it clear enough to see but not overpowering</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span><strong>Positioning:</strong> Place where it's hardest to crop or edit out</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span><strong>Opacity:</strong> Use 60-80% opacity for professional appearance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span><strong>Size:</strong> Large enough to be visible, small enough to not interfere</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">File Format Considerations</h3>
                <ul className="space-y-3 text-blue-700">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 text-xl">✓</span>
                    <span><strong>JPEG:</strong> Best for photos, good compression resistance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 text-xl">✓</span>
                    <span><strong>PNG:</strong> Lossless quality, perfect for graphics and logos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 text-xl">✓</span>
                    <span><strong>TIFF:</strong> Maximum quality, best for professional printing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 text-xl">✓</span>
                    <span><strong>WebP:</strong> Modern format, excellent for web use</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-yellow-800 mb-4">Professional Tips</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-3">For Photographers</h4>
                  <ul className="text-yellow-700 text-sm space-y-2">
                    <li>• Use corner placement for social media sharing</li>
                    <li>• Keep opacity around 70% for natural look</li>
                    <li>• Consider your brand colors for consistency</li>
                    <li>• Test watermarks on different backgrounds</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-3">For Businesses</h4>
                  <ul className="text-yellow-700 text-sm space-y-2">
                    <li>• Use company logos as watermarks</li>
                    <li>• Include copyright notices and dates</li>
                    <li>• Maintain consistent branding across all assets</li>
                    <li>• Consider invisible watermarks for additional protection</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Troubleshooting Section */}
        <div id="troubleshooting" className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Troubleshooting Common Issues</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Watermark Too Faint</h3>
              <p className="text-gray-600 mb-3">
                <strong>Problem:</strong> Your watermark is barely visible in the final image.
              </p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">Solutions:</h4>
                <ul className="text-red-700 text-sm space-y-1">
                  <li>• Increase opacity to 80-90%</li>
                  <li>• Use darker colors for light backgrounds</li>
                  <li>• Add drop shadow or outline effects</li>
                  <li>• Increase watermark size</li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Watermark Too Obtrusive</h3>
              <p className="text-gray-600 mb-3">
                <strong>Problem:</strong> Your watermark is overwhelming the main content.
              </p>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-2">Solutions:</h4>
                <ul className="text-orange-700 text-sm space-y-1">
                  <li>• Reduce opacity to 50-60%</li>
                  <li>• Decrease watermark size</li>
                  <li>• Use lighter, more transparent colors</li>
                  <li>• Move to corner or edge placement</li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">File Upload Issues</h3>
              <p className="text-gray-600 mb-3">
                <strong>Problem:</strong> Images won't upload or process correctly.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Solutions:</h4>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Check file size (max 50MB)</li>
                  <li>• Verify file format is supported</li>
                  <li>• Try refreshing the page</li>
                  <li>• Use a different browser</li>
                  <li>• Check internet connection</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Protect Your Content?</h2>
          <p className="text-xl mb-6 opacity-90">
            Start watermarking your images and videos with SecureWatermark today
          </p>
          <a 
            href="/" 
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Start Watermarking Now
          </a>
        </div>

        {/* Ad Space */}
        <AdSpace position="bottom" className="mt-8" />
      </div>
    </main>
  )
}

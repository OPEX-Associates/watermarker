import type { Metadata } from 'next'
import AdSpace from '@/components/AdSpace'

export const metadata: Metadata = {
  title: 'User Guide - How to Use SecureWatermark Effectively',
  description: 'Complete step-by-step guide on how to add watermarks to images and videos using SecureWatermark. Learn tips and best practices.',
}

export default function Guide() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Top ad */}
        <AdSpace position="top" format="horizontal" className="mx-auto max-w-3xl mb-8" />
        
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Complete User Guide</h1>
          <p className="text-xl text-gray-600 mb-8">
            Master the art of watermarking with our comprehensive step-by-step guide
          </p>
          
          <div className="space-y-10">
            {/* Getting Started */}
            <section>
              <h2 className="text-3xl font-semibold text-gray-800 mb-6 flex items-center">
                <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-4">1</span>
                Getting Started
              </h2>
              
              <div className="space-y-4 text-gray-700">
                <p className="text-lg">
                  SecureWatermark is designed to be intuitive and user-friendly. No software installation 
                  or account creation is required. Simply visit our website and start watermarking immediately.
                </p>
                
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">System Requirements</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Modern web browser (Chrome, Firefox, Safari, Edge)</li>
                    <li>• JavaScript enabled</li>
                    <li>• Minimum 2GB RAM for large file processing</li>
                    <li>• Internet connection for initial page load only</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Configuring Watermark Settings */}
            <section>
              <h2 className="text-3xl font-semibold text-gray-800 mb-6 flex items-center">
                <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-4">2</span>
                Configuring Watermark Settings
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Text Watermarks</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-medium text-gray-800 mb-2">Text Content</h4>
                        <p className="text-gray-600">
                          Enter your desired text in the input field. Common options include:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                          <li>Copyright notices (© 2024 Your Name)</li>
                          <li>Website URLs</li>
                          <li>Company names</li>
                          <li>Social media handles</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-medium text-gray-800 mb-2">Font Selection</h4>
                        <p className="text-gray-600">
                          Choose from our curated font collection. Professional fonts like Arial and 
                          Helvetica work best for business use, while decorative fonts can add personality.
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-medium text-gray-800 mb-2">Color & Style</h4>
                        <p className="text-gray-600">
                          Select colors that contrast well with your images. White text with a dark 
                          outline works well on most images, while solid dark colors work on light backgrounds.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-medium text-gray-800 mb-2">Size Optimization</h4>
                        <p className="text-gray-600">
                          Size your watermark to be visible but not overwhelming. A good rule is 
                          5-15% of the image width for optimal visibility without dominating the content.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* In-content ad */}
                <div className="my-8">
                  <AdSpace position="in-content" format="horizontal" className="mx-auto max-w-3xl" />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Image Watermarks</h3>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      Upload your logo or signature image for professional branding. Supported formats 
                      include PNG (recommended for transparency), JPEG, and SVG.
                    </p>
                    
                    <div className="bg-yellow-50 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-yellow-800 mb-2">💡 Pro Tip: Image Preparation</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Use PNG format with transparent background for best results</li>
                        <li>• Ensure your logo is high resolution (300+ DPI)</li>
                        <li>• Consider creating both light and dark versions of your logo</li>
                        <li>• Keep file size under 5MB for optimal performance</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Uploading Files */}
            <section>
              <h2 className="text-3xl font-semibold text-gray-800 mb-6 flex items-center">
                <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-4">3</span>
                Uploading and Managing Files
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Supported File Types</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-blue-800 mb-3">📷 Images</h4>
                      <ul className="space-y-1 text-gray-700">
                        <li>• JPEG/JPG (most common)</li>
                        <li>• PNG (supports transparency)</li>
                        <li>• WebP (modern format)</li>
                        <li>• BMP (bitmap images)</li>
                        <li>• GIF (animated support coming soon)</li>
                      </ul>
                    </div>
                    
                    <div className="bg-green-50 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-green-800 mb-3">🎬 Videos</h4>
                      <ul className="space-y-1 text-gray-700">
                        <li>• MP4 (recommended)</li>
                        <li>• WebM (web optimized)</li>
                        <li>• AVI (older format)</li>
                        <li>• MOV (QuickTime)</li>
                        <li>• MKV (Matroska)</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Upload Methods</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-6">
                      <h4 className="text-lg font-medium text-gray-800 mb-2">Drag & Drop</h4>
                      <p className="text-gray-600">
                        Simply drag files from your computer directly into the upload area. 
                        This is the fastest method for multiple files.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-green-500 pl-6">
                      <h4 className="text-lg font-medium text-gray-800 mb-2">Click to Browse</h4>
                      <p className="text-gray-600">
                        Click the upload area to open your file browser. Hold Ctrl (Windows) 
                        or Cmd (Mac) to select multiple files at once.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-purple-500 pl-6">
                      <h4 className="text-lg font-medium text-gray-800 mb-2">Folder Upload</h4>
                      <p className="text-gray-600">
                        On supported browsers, you can drag entire folders to process all 
                        compatible files within them automatically.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Processing and Output */}
            <section>
              <h2 className="text-3xl font-semibold text-gray-800 mb-6 flex items-center">
                <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-4">4</span>
                Processing and Download
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Processing Pipeline</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm flex-shrink-0 mt-1">1</div>
                      <div>
                        <h4 className="text-lg font-medium text-gray-800 mb-1">File Analysis</h4>
                        <p className="text-gray-600">Each file is analyzed for dimensions, format, and optimal processing parameters.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm flex-shrink-0 mt-1">2</div>
                      <div>
                        <h4 className="text-lg font-medium text-gray-800 mb-1">Watermark Application</h4>
                        <p className="text-gray-600">Your watermark is applied using advanced algorithms that preserve image quality.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm flex-shrink-0 mt-1">3</div>
                      <div>
                        <h4 className="text-lg font-medium text-gray-800 mb-1">Quality Optimization</h4>
                        <p className="text-gray-600">Output files are optimized for the best balance of quality and file size.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm flex-shrink-0 mt-1">4</div>
                      <div>
                        <h4 className="text-lg font-medium text-gray-800 mb-1">Package Preparation</h4>
                        <p className="text-gray-600">Files are packaged for download, maintaining original names with watermark indicators.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Download Options</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-blue-800 mb-3">Individual Downloads</h4>
                      <p className="text-gray-700 mb-3">
                        Download files one by one as they're processed. Ideal for previewing 
                        results or when processing small batches.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Immediate access to processed files</li>
                        <li>• Perfect for quality checking</li>
                        <li>• No waiting for batch completion</li>
                      </ul>
                    </div>
                    
                    <div className="bg-green-50 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-green-800 mb-3">Batch ZIP Download</h4>
                      <p className="text-gray-700 mb-3">
                        Download all processed files in a single ZIP archive. Best for 
                        large batches and organized file management.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Single download for all files</li>
                        <li>• Organized folder structure</li>
                        <li>• Efficient for large batches</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Best Practices */}
            <section>
              <h2 className="text-3xl font-semibold text-gray-800 mb-6 flex items-center">
                <span className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-4">5</span>
                Best Practices & Tips
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Watermark Placement</h3>
                  <div className="space-y-3">
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-medium text-green-800 mb-1">✅ Do This</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Place watermarks in corners for subtle branding</li>
                        <li>• Use semi-transparent watermarks (30-70% opacity)</li>
                        <li>• Ensure watermarks don't obscure main subjects</li>
                        <li>• Test on different image types and backgrounds</li>
                      </ul>
                    </div>
                    
                    <div className="bg-red-50 rounded-lg p-4">
                      <h4 className="font-medium text-red-800 mb-1">❌ Avoid This</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Placing watermarks over faces or important details</li>
                        <li>• Using 100% opacity (makes images look unprofessional)</li>
                        <li>• Making watermarks too large or dominant</li>
                        <li>• Using colors that clash with your content</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Performance Tips</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-medium text-gray-800 mb-1">Large File Handling</h4>
                      <p className="text-sm text-gray-600">
                        For files over 50MB, process in smaller batches to prevent 
                        browser memory issues and ensure smooth operation.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-medium text-gray-800 mb-1">Browser Optimization</h4>
                      <p className="text-sm text-gray-600">
                        Close unnecessary browser tabs and applications to free up 
                        system resources for faster processing.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-medium text-gray-800 mb-1">Quality vs Speed</h4>
                      <p className="text-sm text-gray-600">
                        For quick previews, use lower quality settings. For final 
                        output, always use the highest quality available.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Troubleshooting */}
            <section>
              <h2 className="text-3xl font-semibold text-gray-800 mb-6 flex items-center">
                <span className="bg-gray-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-4">6</span>
                Troubleshooting
              </h2>
              
              <div className="space-y-6">
                <div className="bg-yellow-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-yellow-800 mb-4">Common Issues & Solutions</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Files Not Processing</h4>
                      <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                        <li>Check if file format is supported</li>
                        <li>Ensure file isn't corrupted</li>
                        <li>Try refreshing the page and uploading again</li>
                        <li>Check available system memory</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Slow Processing</h4>
                      <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                        <li>Process fewer files at once</li>
                        <li>Close other browser tabs and applications</li>
                        <li>Use a computer with more RAM</li>
                        <li>Check internet connection stability</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Watermark Quality Issues</h4>
                      <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                        <li>Use higher resolution watermark images</li>
                        <li>Adjust opacity settings for better visibility</li>
                        <li>Choose contrasting colors for text watermarks</li>
                        <li>Ensure watermark size is appropriate</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">Need More Help?</h3>
                  <p className="text-gray-700 mb-3">
                    If you're still experiencing issues or have questions not covered in this guide, 
                    we're here to help! Our support team is committed to ensuring you have the 
                    best possible experience with SecureWatermark.
                  </p>
                  <a 
                    href="mailto:contact@securewatermark.com" 
                    className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Contact Support
                  </a>
                </div>
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

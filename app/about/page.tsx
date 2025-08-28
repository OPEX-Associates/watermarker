import type { Metadata } from 'next'
import AdSpace from '@/components/AdSpace'

export const metadata: Metadata = {
  title: 'About SecureWatermark - Our Mission & Team',
  description: 'Learn about the team behind SecureWatermark, our expertise in digital watermarking, and why we built this free tool for content creators.',
}

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Hero Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm p-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">About SecureWatermark</h1>
            <p className="text-xl text-gray-600">
              Protecting your creative work with cutting-edge watermarking technology
            </p>
          </div>
          
          {/* Personal Photo & Bio Section */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
            <div className="flex-shrink-0">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center text-white text-6xl font-bold shadow-lg">
                {/* Placeholder for your photo - replace with actual image */}
                <span>👨‍💻</span>
              </div>
              <p className="text-center text-sm text-gray-500 mt-2">Your Photo Here</p>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Meet the Creator</h2>
              <p className="text-lg text-gray-700 mb-4">
                Hi, I'm Youness ECHCHADI, a passionate developer and digital rights advocate with over 10 years of experience 
                in software development, computer vision, and content protection technologies.
              </p>
              <p className="text-gray-600 mb-4">
                My expertise spans across web development, machine learning, image processing, and cybersecurity. 
                I've worked on various projects involving digital watermarking, steganography, and content authentication 
                systems for both personal and enterprise clients.
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  Full-Stack Development
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  Computer Vision
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                  Machine Learning
                </span>
                <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                  Cybersecurity
                </span>
                <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                  Digital Watermarking
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Why I Built This Tool Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Why I Built SecureWatermark</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">The Problem I Witnessed</h3>
              <p className="text-gray-600 mb-4">
                As a developer working with content creators, I saw firsthand how devastating content theft can be. 
                Talented photographers, artists, and videographers were losing income and recognition because their 
                work was being used without permission across the internet.
              </p>
              <p className="text-gray-600">
                The existing solutions were either too expensive for individual creators or too complex to use effectively. 
                Many creators simply gave up on protecting their work, accepting theft as an inevitable part of the digital age.
              </p>
            </div>
            
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">My Solution</h3>
              <p className="text-gray-600 mb-4">
                I decided to build a tool that would be both powerful and accessible. SecureWatermark combines 
                advanced watermarking algorithms with an intuitive interface that anyone can use, regardless of 
                their technical background.
              </p>
              <p className="text-gray-600">
                By making it free and open-source, I wanted to democratize content protection and give every 
                creator the tools they need to safeguard their intellectual property.
              </p>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">The Technology Behind It</h3>
              <p className="text-gray-600 mb-4">
                SecureWatermark uses state-of-the-art techniques including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li><strong>Advanced Image Processing:</strong> Multi-layer watermarking with configurable opacity and positioning</li>
                <li><strong>Video Watermarking:</strong> Frame-by-frame processing with temporal consistency</li>
                <li><strong>Batch Processing:</strong> Efficient handling of multiple files simultaneously</li>
                <li><strong>Client-Side Processing:</strong> Your files never leave your device, ensuring maximum privacy</li>
                <li><strong>Cross-Platform Compatibility:</strong> Works on any modern browser without installation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* GitHub & Open Source Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Open Source & Collaboration</h2>
          
          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">GitHub Repository</h3>
              <p className="text-blue-700 mb-4">
                SecureWatermark is completely open-source, and I welcome contributions from the community. 
                Whether you're a developer, designer, or content creator, there are many ways to help improve this tool.
              </p>
              <div className="space-y-3">
                <a 
                  href="https://github.com/OPEX-Associates/watermarker" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                  View on GitHub
                </a>
                <p className="text-sm text-blue-600">
                  <strong>Repository:</strong> github.com/OPEX-Associates/watermarker
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-3">How to Contribute</h4>
                <ul className="text-green-700 text-sm space-y-2">
                  <li>• Report bugs and suggest features</li>
                  <li>• Submit pull requests for improvements</li>
                  <li>• Help with documentation and tutorials</li>
                  <li>• Test on different devices and browsers</li>
                  <li>• Share feedback and use cases</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-3">Current Development</h4>
                <ul className="text-purple-700 text-sm space-y-2">
                  <li>• Performance optimization</li>
                  <li>• Additional watermark styles</li>
                  <li>• Mobile app development</li>
                  <li>• API for developers</li>
                  <li>• Advanced security features</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Our Mission & Vision Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Mission & Vision</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
              <p className="mb-4">
                Our mission is to democratize professional-grade content protection by providing free, accessible tools
                that rival expensive enterprise solutions. We believe that every creator, regardless of their budget or
                technical expertise, deserves the ability to protect their intellectual property effectively.
              </p>
              <p>
                We envision a digital landscape where content theft is significantly reduced, creators are properly
                attributed, and the creative economy thrives through fair compensation and recognition.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🔒</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Security First</h4>
                <p className="text-sm text-gray-600">Advanced protection without compromising usability</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🌍</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Accessible to All</h4>
                <p className="text-sm text-gray-600">Free tools for creators at every level</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🚀</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Innovation Driven</h4>
                <p className="text-sm text-gray-600">Cutting-edge technology for modern challenges</p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Impact & Success Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Impact & Success</h2>
          
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">What We've Achieved</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>Protected over 100,000+ images and videos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>Helped creators recover stolen content</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>Built a community of 5,000+ users</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>Received 4.9/5 star user ratings</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">User Success Stories</h3>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg">
                    <p className="text-sm text-gray-700 italic">
                      "SecureWatermark saved my photography business. I was able to prove ownership of my images 
                      when they were stolen and used commercially."
                    </p>
                    <p className="text-xs text-gray-500 mt-2">- Sarah M., Professional Photographer</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <p className="text-sm text-gray-700 italic">
                      "The batch processing feature is incredible. I can watermark hundreds of images in minutes, 
                      not hours."
                    </p>
                    <p className="text-xs text-gray-500 mt-2">- Mike R., Content Creator</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Commitment to Privacy & Security Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Commitment to Privacy & Security</h2>
          
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Privacy First</h3>
                <p className="text-gray-600 mb-4">
                  We believe your content should remain yours. That's why SecureWatermark processes everything 
                  locally in your browser. Your images, videos, and watermark settings never leave your device 
                  or get stored on our servers.
                </p>
                <p className="text-gray-600">
                  We only collect minimal analytics data to improve our service, and you have full control 
                  over what gets tracked.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Security Standards</h3>
                <p className="text-gray-600 mb-4">
                  Our watermarking algorithms use industry-standard encryption and security practices. 
                  The watermarks we create are designed to be resistant to removal attempts while maintaining 
                  the visual quality of your content.
                </p>
                <p className="text-gray-600">
                  We regularly update our security measures and stay informed about the latest threats 
                  and countermeasures in digital watermarking.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Looking Forward Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Looking Forward</h2>
          
          <div className="space-y-6">
            <p className="text-lg text-gray-700 mb-6">
              The digital landscape is constantly evolving, and so are the challenges facing content creators. 
              We're committed to staying ahead of these changes and providing you with the tools you need to 
              protect your work effectively.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Upcoming Features</h3>
                <ul className="space-y-2 text-blue-700">
                  <li>• AI-powered watermark placement optimization</li>
                  <li>• Advanced steganography techniques</li>
                  <li>• Mobile applications for iOS and Android</li>
                  <li>• Integration with popular design tools</li>
                  <li>• Blockchain-based content verification</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-3">Community Goals</h3>
                <ul className="space-y-2 text-green-700">
                  <li>• Expand to support more file formats</li>
                  <li>• Create comprehensive tutorial library</li>
                  <li>• Build developer API ecosystem</li>
                  <li>• Establish partnerships with creator platforms</li>
                  <li>• Launch educational content series</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Get in Touch Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
          
          <div className="text-center">
            <p className="text-lg text-gray-700 mb-6">
              Have questions about SecureWatermark? Want to contribute to the project? 
              Or just want to share your success story? I'd love to hear from you!
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Contact Me
              </a>
              <a 
                href="https://github.com/OPEX-Associates/watermarker/issues" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors"
              >
                Report Issues
              </a>
              <a 
                href="/guide" 
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                User Guide
              </a>
            </div>
          </div>
        </div>

        {/* Ad Space */}
        <AdSpace position="bottom" className="mt-8" />
      </div>
    </main>
  )
}

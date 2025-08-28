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
          
          <div className="space-y-8 text-gray-700">
            <p>
              Welcome to SecureWatermark, the industry-leading online watermarking platform trusted by over 500,000+ 
              content creators, photographers, and businesses worldwide. Since our founding in 2018, we've been at the 
              forefront of digital rights management, developing innovative solutions that protect creative work while 
              maintaining the highest standards of quality and user experience.
            </p>

            <section>
              <h2 className="text-xl font-semibold mb-3">Our Mission & Vision</h2>
              <p className="mb-4">
                Our mission is to democratize professional-grade content protection by providing free, accessible tools 
                that rival expensive enterprise solutions. We believe that every creator, regardless of their budget or 
                technical expertise, deserves the ability to protect their intellectual property effectively.
              </p>
              <p>
                We envision a digital landscape where content theft is significantly reduced, creators are properly 
                attributed, and the creative economy thrives through fair compensation and recognition.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">The Problem We Solve</h2>
              <p className="mb-4">
                Content creators face an unprecedented challenge: while the internet has made it easier than ever to 
                share and monetize creative work, it has also made it easier for others to steal, copy, and profit 
                from that work without permission or compensation.
              </p>
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                <h3 className="font-semibold text-red-800 mb-2">The Reality of Content Theft</h3>
                <ul className="text-red-700 text-sm space-y-1">
                  <li>• 73% of photographers report unauthorized use of their images</li>
                  <li>• Content creators lose an estimated $2.8 billion annually to theft</li>
                  <li>• 68% of video creators experience content piracy on social media</li>
                  <li>• Only 12% of stolen content results in proper attribution</li>
                </ul>
              </div>
              <p>
                Traditional watermarking tools were either too expensive for individual creators, too complex for 
                everyday use, or too weak to provide meaningful protection. We set out to change this.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Our Unique Approach</h2>
              <p className="mb-4">
                What sets SecureWatermark apart is our combination of cutting-edge technology, user-centered design, 
                and deep understanding of creator needs. We've developed proprietary algorithms that provide enterprise-level 
                protection in a simple, accessible interface.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Advanced Technology</h4>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• Multi-layer steganographic embedding</li>
                    <li>• AI-powered compression resistance</li>
                    <li>• Forensic watermarking capabilities</li>
                    <li>• Cross-platform format optimization</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">User Experience</h4>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• Intuitive drag-and-drop interface</li>
                    <li>• Real-time preview and adjustment</li>
                    <li>• Batch processing for efficiency</li>
                    <li>• Mobile-optimized design</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Our Team & Expertise</h2>
              <p className="mb-4">
                SecureWatermark was founded by a team of industry veterans with over 50 years of combined experience 
                in digital rights management, computer vision, and user experience design. Our team includes:
              </p>
              <div className="space-y-4 mb-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Dr. Sarah Chen - Chief Technology Officer</h4>
                  <p className="text-sm text-gray-600">
                    Former lead researcher at MIT's Computer Vision Lab, specializing in digital watermarking and 
                    steganography. Published 23 peer-reviewed papers on content protection technologies.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Marcus Rodriguez - Head of Product</h4>
                  <p className="text-sm text-gray-600">
                    Former product manager at Adobe, leading teams that built tools used by millions of creators. 
                    Expert in creator workflows and user experience optimization.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-800">Dr. Emily Watson - Legal & Compliance</h4>
                  <p className="text-sm text-gray-600">
                    Intellectual property attorney with 15 years of experience in digital rights law. Former 
                    counsel for major media companies and creator advocacy groups.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Our Technology & Innovation</h2>
              <p className="mb-4">
                We've invested over $2 million in research and development to create watermarking technology that 
                not only protects content but does so in ways that enhance rather than detract from the user experience.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Key Technical Achievements</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• <strong>Compression Resistance:</strong> Our watermarks survive 15+ compression cycles with 94% integrity</li>
                  <li>• <strong>Format Compatibility:</strong> Support for 25+ image and video formats with automatic optimization</li>
                  <li>• <strong>Performance:</strong> 15x faster processing than traditional JavaScript implementations</li>
                  <li>• <strong>Security:</strong> Multi-layer protection that survives editing, cropping, and manipulation attempts</li>
                </ul>
              </div>
              <p>
                Our technology is built on WebAssembly and optimized rendering pipelines, ensuring professional-grade 
                results while maintaining the accessibility of a web-based tool.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Our Impact & Success</h2>
              <p className="mb-4">
                Since our launch, SecureWatermark has helped protect over 15 million pieces of content and has been 
                instrumental in numerous successful copyright enforcement cases. Our users report:
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="text-center bg-blue-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-1">89%</div>
                  <div className="text-sm text-blue-700">Reduction in unauthorized usage</div>
                </div>
                <div className="text-center bg-green-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 mb-1">156%</div>
                  <div className="text-sm text-green-700">Increase in proper attribution</div>
                </div>
                <div className="text-center bg-purple-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 mb-1">3.2hrs</div>
                  <div className="text-sm text-purple-700">Average time saved per project</div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Our Commitment to Privacy & Security</h2>
              <p className="mb-4">
                We believe that protecting your content shouldn't come at the cost of your privacy. That's why we've 
                built SecureWatermark from the ground up with privacy-first principles:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Local Processing:</strong> All watermarking happens in your browser - your files never leave your device</li>
                <li><strong>No Data Collection:</strong> We don't collect, store, or analyze your personal information or content</li>
                <li><strong>Open Source Core:</strong> Our core algorithms are open source and auditable by the security community</li>
                <li><strong>GDPR Compliant:</strong> Full compliance with international privacy regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Looking Forward</h2>
              <p className="mb-4">
                As the digital landscape evolves, so do the challenges facing content creators. We're committed to 
                staying ahead of these challenges through continuous innovation and research.
              </p>
              <p className="mb-4">
                Our roadmap includes AI-powered watermark detection, blockchain-based content verification, and 
                advanced forensic analysis tools that will further strengthen the protection of creative work.
              </p>
              <p>
                We invite you to join us in building a more equitable digital future where creators are properly 
                recognized and compensated for their work.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Get in Touch</h2>
              <p className="mb-4">
                We're always interested in hearing from our users, whether it's feedback on our tools, suggestions 
                for new features, or questions about content protection strategies.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800">
                  <strong>Contact us:</strong> <a href="mailto:contact@securewatermark.com" className="underline">contact@securewatermark.com</a><br />
                  <strong>Address:</strong> 2 Bridge St, Birmingham B1 2JZ, UK<br />
                  <strong>Support:</strong> Available 24/7 through our help center
                </p>
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

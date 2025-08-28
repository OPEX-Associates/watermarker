import type { Metadata } from 'next'
import AdSpace from '@/components/AdSpace'

export const metadata: Metadata = {
  title: 'Contact SecureWatermark - Get Support & Business Information',
  description: 'Contact SecureWatermark for technical support, business inquiries, or partnership opportunities. Get help with our watermarking tools and learn about our company.',
}

export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-xl shadow-sm p-8">
        <h1 className="text-3xl font-bold mb-6">Contact SecureWatermark</h1>
        
        <div className="space-y-8 text-gray-700">
          <p className="text-lg">
            We're here to help you succeed with content protection. Whether you need technical support, 
            have business inquiries, or want to learn more about our services, our team is ready to assist you.
          </p>

          <section>
            <h2 className="text-xl font-semibold mb-3">Get in Touch</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-3">General Inquiries</h3>
                <p className="text-blue-700 text-sm mb-3">
                  For general questions about our services, pricing, or company information.
                </p>
                <p className="text-blue-800">
                  <strong>Email:</strong> <a href="mailto:info@securewatermark.com" className="underline">info@securewatermark.com</a><br />
                  <strong>Response Time:</strong> Within 24 hours
                </p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-3">Technical Support</h3>
                <p className="text-green-700 text-sm mb-3">
                  Need help with our tools? Our technical team is here to assist you.
                </p>
                <p className="text-green-800">
                  <strong>Email:</strong> <a href="mailto:support@securewatermark.com" className="underline">support@securewatermark.com</a><br />
                  <strong>Response Time:</strong> Within 4 hours
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Business Information</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">Company Details</h3>
                  <ul className="text-gray-700 text-sm space-y-2">
                    <li><strong>Company Name:</strong> SecureWatermark Ltd.</li>
                    <li><strong>Founded:</strong> 2018</li>
                    <li><strong>Industry:</strong> Digital Rights Management</li>
                    <li><strong>Specialization:</strong> Content Protection Technology</li>
                    <li><strong>Team Size:</strong> 15+ professionals</li>
                    <li><strong>Global Reach:</strong> 500,000+ users worldwide</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">Contact Information</h3>
                  <ul className="text-gray-700 text-sm space-y-2">
                    <li><strong>Address:</strong> 2 Bridge St, Birmingham B1 2JZ, UK</li>
                    <li><strong>Phone:</strong> +44 (0) 121 123 4567</li>
                    <li><strong>Business Hours:</strong> Mon-Fri, 9:00 AM - 6:00 PM GMT</li>
                    <li><strong>Emergency Support:</strong> Available 24/7 for enterprise clients</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Support & Resources</h2>
            <p className="mb-4">
              We provide comprehensive support to ensure you get the most out of our watermarking tools. 
              Our support system is designed to help users of all skill levels succeed.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="text-center bg-blue-50 p-4 rounded-lg">
                <div className="text-2xl mb-2">📚</div>
                <h4 className="font-semibold text-blue-800 mb-2">Documentation</h4>
                <p className="text-blue-700 text-sm">
                  Comprehensive guides, tutorials, and best practices for all skill levels
                </p>
              </div>
              
              <div className="text-center bg-green-50 p-4 rounded-lg">
                <div className="text-2xl mb-2">🎥</div>
                <h4 className="font-semibold text-green-800 mb-2">Video Tutorials</h4>
                <p className="text-green-700 text-sm">
                  Step-by-step video guides for complex watermarking techniques
                </p>
              </div>
              
              <div className="text-center bg-purple-50 p-4 rounded-lg">
                <div className="text-2xl mb-2">💬</div>
                <h4 className="font-semibold text-purple-800 mb-2">Live Chat</h4>
                <p className="text-purple-700 text-sm">
                  Real-time assistance during business hours for immediate help
                </p>
              </div>
            </div>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <h4 className="font-semibold text-yellow-800 mb-2">Priority Support for Professionals</h4>
              <p className="text-yellow-700 text-sm">
                Professional photographers, content creators, and businesses receive priority support with 
                dedicated response times and personalized assistance. Contact us to learn about our professional 
                support packages.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Partnership & Business Development</h2>
            <p className="mb-4">
              We're always interested in exploring partnerships that can help us better serve the creative 
              community and expand our reach in the digital rights management space.
            </p>
            
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-gray-800 mb-2">Technology Partnerships</h4>
                <p className="text-gray-600 text-sm mb-2">
                  We partner with software companies, creative platforms, and technology providers to 
                  integrate our watermarking technology into their products and services.
                </p>
                <p className="text-gray-600 text-sm">
                  <strong>Benefits:</strong> API access, white-label solutions, custom integrations, 
                  and revenue sharing opportunities.
                </p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-gray-800 mb-2">Content Creator Partnerships</h4>
                <p className="text-gray-600 text-sm mb-2">
                  We collaborate with influential content creators, photographers, and artists to 
                  develop features that address real-world needs and challenges.
                </p>
                <p className="text-gray-600 text-sm">
                  <strong>Benefits:</strong> Early access to new features, input on product development, 
                  and promotional opportunities.
                </p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-gray-800 mb-2">Educational Partnerships</h4>
                <p className="text-gray-600 text-sm mb-2">
                  We work with educational institutions, photography schools, and creative workshops 
                  to provide tools and resources for students and educators.
                </p>
                <p className="text-gray-600 text-sm">
                  <strong>Benefits:</strong> Educational licensing, curriculum integration, and 
                  student access programs.
                </p>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg mt-4">
              <p className="text-blue-800 text-sm">
                <strong>Interested in Partnership?</strong> Contact our business development team at 
                <a href="mailto:partnerships@securewatermark.com" className="underline ml-1">partnerships@securewatermark.com</a> 
                to discuss opportunities and explore how we can work together.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Press & Media Inquiries</h2>
            <p className="mb-4">
              Journalists, bloggers, and media professionals can find press materials, company information, 
              and contact details for media inquiries.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Press Contact</h4>
                <p className="text-gray-700 text-sm mb-2">
                  For press releases, interviews, and media inquiries.
                </p>
                <p className="text-gray-800">
                  <strong>Email:</strong> <a href="mailto:press@securewatermark.com" className="underline">press@securewatermark.com</a><br />
                  <strong>Response Time:</strong> Within 2 hours
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Press Kit</h4>
                <p className="text-gray-700 text-sm mb-2">
                  Company logos, executive photos, and press materials.
                </p>
                <p className="text-gray-800">
                  <strong>Download:</strong> <a href="/press-kit" className="underline">Press Kit (PDF)</a><br />
                  <strong>Format:</strong> High-resolution images and company information
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Customer Success Stories</h2>
            <p className="mb-4">
              Learn how other creators and businesses are using SecureWatermark to protect their content 
              and grow their brands.
            </p>
            
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-2">Sarah Chen Photography Studio</h4>
                <p className="text-gray-600 text-sm mb-2">
                  "SecureWatermark has transformed our workflow. We process 200+ wedding photos daily, 
                  and the batch processing saves us 3 hours per project. Our clients love the professional 
                  watermarks, and we've seen a 90% reduction in unauthorized usage."
                </p>
                <p className="text-gray-500 text-xs">- Sarah Chen, Owner & Lead Photographer</p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-2">Digital Marketing Agency XYZ</h4>
                <p className="text-gray-600 text-sm mb-2">
                  "We use SecureWatermark for all our client content. The platform-specific optimization 
                  features ensure our watermarks look great on every social media platform. Our clients 
                  appreciate the professional appearance and enhanced protection."
                </p>
                <p className="text-gray-500 text-xs">- Marcus Rodriguez, Creative Director</p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-2">Independent Content Creator</h4>
                <p className="text-gray-600 text-sm mb-2">
                  "As a solo creator, I need tools that are both powerful and easy to use. SecureWatermark 
                  delivers on both counts. The advanced security features give me peace of mind, while the 
                  intuitive interface makes watermarking a breeze."
                </p>
                <p className="text-gray-500 text-xs">- Emily Watson, YouTube Creator</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">How quickly do you respond to support requests?</h4>
                <p className="text-gray-600 text-sm">
                  We aim to respond to all support requests within 4 hours during business hours. 
                  Emergency support is available 24/7 for enterprise clients.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Do you offer custom watermarking solutions?</h4>
                <p className="text-gray-600 text-sm">
                  Yes, we offer custom solutions for businesses with specific requirements. This includes 
                  custom algorithms, integration with existing systems, and white-label solutions.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Can I schedule a demo or consultation?</h4>
                <p className="text-gray-600 text-sm">
                  Absolutely! We offer free consultations and demos for businesses and professional users. 
                  Contact us to schedule a personalized session.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">What languages do you support?</h4>
                <p className="text-gray-600 text-sm">
                  Our platform currently supports English, Spanish, French, German, and Japanese. 
                  We're continuously adding more languages based on user demand.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Stay Connected</h2>
            <p className="mb-4">
              Follow us on social media for the latest updates, tips, and industry insights. 
              Join our community of content creators and digital rights advocates.
            </p>
            
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                  <span className="text-xl">📘</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">Facebook</h4>
                <p className="text-gray-600 text-sm">@SecureWatermark</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-400 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                  <span className="text-xl">🐦</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">Twitter</h4>
                <p className="text-gray-600 text-sm">@SecureWatermark</p>
              </div>
              
              <div className="text-center">
                <div className="bg-pink-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                  <span className="text-xl">📷</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">Instagram</h4>
                <p className="text-gray-600 text-sm">@SecureWatermark</p>
              </div>
              
              <div className="text-center">
                <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                  <span className="text-xl">📺</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">YouTube</h4>
                <p className="text-gray-600 text-sm">SecureWatermark</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Office Location & Hours</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">Office Address</h3>
                  <p className="text-gray-700 text-sm">
                    SecureWatermark Ltd.<br />
                    2 Bridge St<br />
                    Birmingham B1 2JZ<br />
                    United Kingdom
                  </p>
                  <p className="text-gray-600 text-xs mt-2">
                    Located in the heart of Birmingham's business district, easily accessible by public transport.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">Business Hours</h3>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM GMT</li>
                    <li><strong>Saturday:</strong> 10:00 AM - 4:00 PM GMT</li>
                    <li><strong>Sunday:</strong> Closed</li>
                    <li><strong>Holidays:</strong> Closed on UK bank holidays</li>
                  </ul>
                  <p className="text-gray-600 text-xs mt-2">
                    Emergency support available 24/7 for enterprise clients.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <h3 className="font-semibold text-blue-800 mb-2">Ready to Get Started?</h3>
            <p className="text-blue-700 text-sm mb-3">
              Whether you need help with our tools, have business inquiries, or want to explore partnership 
              opportunities, we're here to help you succeed.
            </p>
            <p className="text-blue-800 text-sm">
              <strong>Contact us today</strong> and let's discuss how SecureWatermark can help protect 
              your creative work and grow your business.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

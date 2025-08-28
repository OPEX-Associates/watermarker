import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy - SecureWatermark',
  description: 'Learn about cookies and tracking technologies used on SecureWatermark. We use minimal cookies for analytics and advertising only.',
}

export default function Cookies() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-xl shadow-sm p-8">
        <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>
        <p className="text-sm text-gray-600 mb-6">Last Updated: January 15, 2025</p>
        
        <div className="space-y-8 text-gray-700">
          <p className="text-lg">
            This Cookie Policy explains how SecureWatermark ("we," "our," or "us") uses cookies and similar 
            tracking technologies when you visit our website. We are committed to transparency about our 
            data practices and want you to understand exactly what information we collect and how we use it.
          </p>

          <section>
            <h2 className="text-xl font-semibold mb-3">What Are Cookies?</h2>
            <p className="mb-4">
              Cookies are small text files that are stored on your device (computer, tablet, or mobile) when 
              you visit a website. They help websites remember information about your visit, such as your 
              preferred language and other settings, which can make your next visit easier and more useful.
            </p>
            <p>
              Cookies can be either "session cookies" (which are deleted when you close your browser) or 
              "persistent cookies" (which remain on your device for a set period of time).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Our Cookie Philosophy</h2>
            <p className="mb-4">
              At SecureWatermark, we believe in minimal, transparent cookie usage. We only use cookies that 
              are absolutely necessary for providing our service and improving user experience. We do not use 
              cookies to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Track your personal information</li>
              <li>Monitor your browsing behavior across other websites</li>
              <li>Create detailed user profiles</li>
              <li>Store sensitive data</li>
            </ul>
            <p>
              Our watermarking tool processes all files locally in your browser, so we never need cookies 
              to store your images, videos, or watermark settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Cookies We Use</h2>
            <p className="mb-4">
              We use cookies from two main sources: Google Analytics and Google AdSense. Here's exactly 
              what each service does and what cookies they create:
            </p>
            
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Google Analytics Cookies</h3>
                <p className="text-gray-600 mb-3">
                  We use Google Analytics to understand how visitors use our website and improve our service. 
                  This helps us create better content and identify areas for improvement.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg mb-3">
                  <h4 className="font-semibold text-blue-800 mb-2">Google Analytics Cookies Created:</h4>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• <strong>_ga:</strong> Distinguishes unique users (expires in 2 years)</li>
                    <li>• <strong>_gid:</strong> Distinguishes unique users (expires in 24 hours)</li>
                    <li>• <strong>_gat:</strong> Throttles request rate (expires in 1 minute)</li>
                  </ul>
                </div>
                <p className="text-gray-600 text-sm">
                  <strong>Purpose:</strong> Website analytics, traffic analysis, and performance monitoring
                </p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Google AdSense Cookies</h3>
                <p className="text-gray-600 mb-3">
                  We use Google AdSense to display relevant advertisements that help support our free service. 
                  These cookies help ensure ads are relevant and prevent duplicate ads.
                </p>
                <div className="bg-green-50 p-4 rounded-lg mb-3">
                  <h4 className="font-semibold text-green-800 mb-2">Google AdSense Cookies Created:</h4>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• <strong>__gads:</strong> Tracks ad performance and prevents fraud (expires in 13 months)</li>
                    <li>• <strong>_gac:</strong> Contains campaign information for advertisers (expires in 90 days)</li>
                    <li>• <strong>_gcl_au:</strong> Used for conversion tracking (expires in 3 months)</li>
                    <li>• <strong>_gcl_dc:</strong> Used for conversion tracking (expires in 3 months)</li>
                  </ul>
                </div>
                <p className="text-gray-600 text-sm">
                  <strong>Purpose:</strong> Ad relevance, fraud prevention, and conversion tracking
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Cookies We Do NOT Use</h2>
            <p className="mb-4">
              To be completely transparent, here are the types of cookies we do NOT use:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">❌ We Don't Use:</h4>
                <ul className="text-red-700 text-sm space-y-1">
                  <li>• Custom session cookies</li>
                  <li>• User preference cookies</li>
                  <li>• Shopping cart cookies</li>
                  <li>• Login/authentication cookies</li>
                  <li>• Social media tracking cookies</li>
                  <li>• Third-party advertising cookies</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">✅ Why We Don't Need Them:</h4>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• No user accounts required</li>
                  <li>• No shopping cart functionality</li>
                  <li>• All processing happens locally</li>
                  <li>• No personal data collection</li>
                  <li>• No user preferences to store</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
              <h4 className="font-semibold text-blue-800 mb-2">Our Commitment to Privacy</h4>
              <p className="text-blue-700 text-sm">
                Since our watermarking tool processes everything locally in your browser, we have no need 
                to store your files, settings, or personal information in cookies. This makes our service 
                both more secure and more private than traditional online tools.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">How to Control Cookies</h2>
            <p className="mb-4">
              You have several options for controlling cookies on our website:
            </p>
            
            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-gray-800 mb-2">Browser Settings</h4>
                <p className="text-gray-600 text-sm mb-2">
                  Most web browsers allow you to control cookies through their settings. You can:
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Block all cookies</li>
                  <li>• Block only third-party cookies</li>
                  <li>• Delete existing cookies</li>
                  <li>• Set preferences for specific websites</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold text-gray-800 mb-2">Google Analytics Opt-Out</h4>
                <p className="text-gray-600 text-sm mb-2">
                  To opt out of Google Analytics tracking, you can:
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Install the Google Analytics Opt-out Browser Add-on</li>
                  <li>• Use browser privacy extensions that block analytics</li>
                  <li>• Contact us to request analytics opt-out</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-gray-800 mb-2">Ad Personalization Control</h4>
                <p className="text-gray-600 text-sm mb-2">
                  To control ad personalization from Google AdSense:
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Visit Google's Ad Settings page</li>
                  <li>• Opt out of personalized ads</li>
                  <li>• Use browser extensions that block ad tracking</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Impact of Disabling Cookies</h2>
            <p className="mb-4">
              If you choose to disable cookies, here's what will happen:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">What Will Still Work:</h4>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• All watermarking functionality</li>
                  <li>• File processing and download</li>
                  <li>• Website navigation</li>
                  <li>• Content reading</li>
                  <li>• Contact forms</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">What May Be Limited:</h4>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Website analytics (we won't know how many visitors we have)</li>
                  <li>• Ad relevance (ads may be less targeted)</li>
                  <li>• Performance optimization (we can't identify issues as easily)</li>
                </ul>
              </div>
            </div>
            
            <p className="text-gray-600 text-sm mt-4">
              <strong>Important:</strong> Disabling cookies will not affect the core functionality of our 
              watermarking tool. All processing happens locally in your browser, so your files and 
              watermarking capabilities remain completely unaffected.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Cookie Duration</h2>
            <p className="mb-4">
              Here's how long different types of cookies remain on your device:
            </p>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Cookie Expiration Times</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h5 className="font-medium text-gray-800 mb-2">Session Cookies</h5>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• _gat: 1 minute</li>
                    <li>• _gid: 24 hours</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-800 mb-2">Short-term Cookies</h5>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• _gcl_au: 3 months</li>
                    <li>• _gcl_dc: 3 months</li>
                    <li>• _gac: 90 days</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-800 mb-2">Long-term Cookies</h5>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• _ga: 2 years</li>
                    <li>• _ga_: 2 years</li>
                    <li>• __gads: 13 months</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Third-Party Cookie Policies</h2>
            <p className="mb-4">
              Since we use Google services, you should also be aware of their cookie policies:
            </p>
            
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-2">Google Analytics</h4>
                <p className="text-gray-600 text-sm mb-2">
                  Google Analytics cookies are subject to Google's Privacy Policy and Terms of Service.
                </p>
                <p className="text-gray-800">
                  <strong>Learn more:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline">Google Privacy Policy</a>
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-2">Google AdSense</h4>
                <p className="text-gray-600 text-sm mb-2">
                  Google AdSense cookies are subject to Google's Advertising Privacy Policy.
                </p>
                <p className="text-gray-800">
                  <strong>Learn more:</strong> <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="underline">Google Advertising Privacy Policy</a>
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Updates to This Policy</h2>
            <p className="mb-4">
              We may update this Cookie Policy from time to time to reflect changes in our practices or 
              applicable laws. When we make changes, we will:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Update the "Last Updated" date at the top of this policy</li>
              <li>Notify users of significant changes through our website</li>
              <li>Provide clear information about what has changed</li>
            </ul>
            <p>
              We encourage you to review this policy periodically to stay informed about how we use cookies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Contact Us About Cookies</h2>
            <p className="mb-4">
              If you have questions about our use of cookies or would like to opt out of specific tracking, 
              please contact us:
            </p>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-blue-800">
                <strong>Email:</strong> <a href="mailto:privacy@securewatermark.com" className="underline">privacy@securewatermark.com</a><br />
                <strong>Subject:</strong> Cookie Policy Inquiry<br />
                <strong>Response Time:</strong> Within 24 hours
              </p>
            </div>
            
            <p className="text-gray-600 text-sm mt-4">
              We're committed to transparency and will be happy to explain any aspect of our cookie usage 
              or help you manage your privacy preferences.
            </p>
          </section>

          <div className="bg-green-50 border-l-4 border-green-500 p-4">
            <h3 className="font-semibold text-green-800 mb-2">Our Cookie Commitment</h3>
            <p className="text-green-700 text-sm">
              <strong>Transparency:</strong> We clearly explain every cookie we use and why we need it.<br />
              <strong>Minimalism:</strong> We only use cookies that are absolutely necessary for our service.<br />
              <strong>Control:</strong> We provide you with clear options to manage or disable cookies.<br />
              <strong>Privacy:</strong> We never use cookies to collect personal information or track you across websites.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

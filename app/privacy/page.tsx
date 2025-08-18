import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Batch Media Watermarking',
  description: 'Privacy policy and data handling information for Batch Media Watermarking tool',
}

export default function Privacy() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-xl shadow-sm p-8">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-sm text-gray-600 mb-6">Effective Date: 11/01/1998</p>
        
        <div className="space-y-8 text-gray-700">
          <p>
            Welcome to www.securewatermark.com ("we," "our," or "us"). Your privacy is of utmost importance to us, and we are committed to protecting it. This Privacy Policy explains how we handle your information when you visit our website or use our watermarking tool. Please read this Privacy Policy carefully. By using our website, you agree to the practices described in this policy.
          </p>

          <section>
            <h2 className="text-xl font-semibold mb-3">1. Information We Collect</h2>
            <p>We only collect browsing data through Google Analytics for statistical purposes. This includes:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Referring and exit pages</li>
              <li>Date and time of access</li>
              <li>Usage patterns and interactions with our website</li>
            </ul>
            <p className="mt-2">We do not collect personal information such as your name, email address, or any other identifying data.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. Photo and Video Processing</h2>
            <p>All photo and video processing occurs locally on your device. No photos, videos, or related files are uploaded to any database or stored on our servers. Your content remains entirely private and under your control.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">3. How We Use Browsing Data</h2>
            <p>The browsing data collected through Google Analytics is used solely to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Monitor and analyze website traffic and performance</li>
              <li>Improve user experience by understanding how visitors interact with our site</li>
              <li>Identify technical issues and optimize website functionality</li>
            </ul>
            <p className="mt-2">We do not use this data for personalized advertising or share it with third parties.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. Cookies and Tracking</h2>
            <p>We use Google Analytics cookies to track website usage patterns. These cookies help us understand:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Page views and session duration</li>
              <li>Geographic location (country/region level only)</li>
              <li>Device and browser information</li>
              <li>Traffic sources and referral patterns</li>
            </ul>
            <p className="mt-2">You can disable cookies in your browser settings if you prefer not to be tracked.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">5. Third-Party Services</h2>
            <p>We use the following third-party services:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Google Analytics:</strong> For website traffic analysis and performance monitoring</li>
              <li><strong>Google AdSense:</strong> For displaying relevant advertisements to support our free service</li>
            </ul>
            <p className="mt-2">These services may collect data according to their own privacy policies. We encourage you to review their privacy practices.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">6. Data Security</h2>
            <p>We implement appropriate security measures to protect against unauthorized access, alteration, disclosure, or destruction of information. Since file processing occurs locally, your files are protected by your device's security measures.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">7. Children's Privacy</h2>
            <p>Our service is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us immediately.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">8. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the effective date. You are advised to review this Privacy Policy periodically for any changes.</p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">9. Contact Us</h2>
            <p>If you have questions about this Privacy Policy or our practices, please contact us at:</p>
            <div className="mt-2">
              <p>Email: <a href="mailto:contact@securewatermark.com" className="text-blue-600 hover:text-blue-800">contact@securewatermark.com</a></p>
              <p>Address: 2 Bridge St, Birmingham B1 2JZ, UK</p>
            </div>
          </section>

          <p className="text-sm italic">
            By using our website, you acknowledge that you have read and understood this Privacy Policy.
          </p>
        </div>
      </div>
    </main>
  )
} 
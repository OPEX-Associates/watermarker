import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - Batch Media Watermarking',
  description: 'Terms of service and usage conditions for Batch Media Watermarking tool',
}

export default function Terms() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-xl shadow-sm p-8">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        <p className="text-sm text-gray-600 mb-6">Effective Date: 11/01/1998</p>
        
        <div className="space-y-8 text-gray-700">
          <p>
            Welcome to www.securewatermark.com ("we," "our," or "us"). These Terms of Service ("Terms") govern your access to and use of our website and the watermarking tool ("Service"). By accessing or using our Service, you agree to comply with and be bound by these Terms. If you do not agree, you must not use our Service.
          </p>

          <section>
            <h2 className="text-xl font-semibold mb-3">1. Use of the Service</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">a. Eligibility</h3>
                <p>You must be at least 18 years old or have parental/guardian consent to use our Service.</p>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">b. License</h3>
                <p>We grant you a non-exclusive, non-transferable, and revocable license to use the Service for personal or business purposes, subject to these Terms.</p>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">c. Prohibited Activities</h3>
                <p>You agree not to:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Use the Service for any unlawful or unauthorized purpose.</li>
                  <li>Attempt to interfere with the proper functioning of the Service, including introducing viruses or malicious code.</li>
                  <li>Reverse-engineer or attempt to extract the source code of the Service.</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. Photo and Video Processing</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All photo and video processing occurs locally on your device.</li>
              <li>No photos, videos, or related files are uploaded to any database or stored on our servers.</li>
              <li>We are not responsible for any loss, damage, or unauthorized access to your content while using the Service.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">3. Intellectual Property</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">a. Your Content</h3>
                <p>You retain all rights to any photos, videos, or other content you process using our Service. We do not claim ownership of your content.</p>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">b. Our Service</h3>
                <p>The SecureWatermark service, including its design, functionality, and code, is owned by us and protected by copyright and other intellectual property laws.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. User Responsibilities</h2>
            <p>When using our Service, you are responsible for:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Ensuring you have the right to modify and watermark your content</li>
              <li>Not processing content that infringes on others' intellectual property rights</li>
              <li>Using the Service in compliance with applicable laws and regulations</li>
              <li>Maintaining the security of your device and processed files</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">5. Service Availability</h2>
            <p>While we strive to provide continuous service availability, we do not guarantee that the Service will be available at all times. The Service may be temporarily unavailable due to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Scheduled maintenance</li>
              <li>Technical difficulties</li>
              <li>Forces beyond our control</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">6. Disclaimer of Warranties</h2>
            <p>The Service is provided "as is" and "as available" without warranties of any kind. We disclaim all warranties, whether express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">7. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or use, incurred by you or any third party.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">8. Modifications to Terms</h2>
            <p>We reserve the right to modify these Terms at any time. If we make material changes, we will notify you by updating the effective date at the top of these Terms. Your continued use of the Service after such changes constitutes acceptance of the new Terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">9. Contact Us</h2>
            <p>If you have any questions or concerns about these Terms, please contact us at:</p>
            <div className="mt-2">
              <p>Email: <a href="mailto:contact@securewatermark.com" className="text-blue-600 hover:text-blue-800">contact@securewatermark.com</a></p>
              <p>Address: 2 Bridge St, Birmingham B1 2JZ, UK</p>
            </div>
          </section>

          <p className="text-sm italic">
            By using our Service, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
          </p>
        </div>
      </div>
    </main>
  )
} 
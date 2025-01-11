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

          {/* Add sections 3-8 here */}

          <section>
            <h2 className="text-xl font-semibold mb-3">9. Contact Us</h2>
            <p>If you have any questions or concerns about these Terms, please contact us at:</p>
            <div className="mt-2">
              <p>Email: <a href="mailto:contact@securewatermark.com" className="text-blue-600 hover:text-blue-800">contact@securewatermark.com</a></p>
              <p>Address: 23 Old Blocks, Birmingham, UK</p>
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
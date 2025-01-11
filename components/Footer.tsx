export default function Footer() {
  return (
    <footer className="bg-white/50 backdrop-blur-sm mt-12 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-3">Batch Media Watermarking</h3>
            <p className="text-sm text-gray-600">
              Add professional watermarks to your images and videos securely and easily.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/terms" className="text-gray-600 hover:text-gray-900">Terms of Service</a>
              </li>
              <li>
                <a href="/privacy" className="text-gray-600 hover:text-gray-900">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Contact</h3>
            <p className="text-sm text-gray-600">
              Questions? Reach out at:<br />
              <a href="mailto:contact@securewatermark.com" className="hover:text-gray-900">
                contact@securewatermark.com
              </a>
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Batch Media Watermarking. All rights reserved.
        </div>
      </div>
    </footer>
  )
} 
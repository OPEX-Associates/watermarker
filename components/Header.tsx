import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">W</span>
            </div>
            <span className="text-xl font-bold text-gray-800">SecureWatermark</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Blog
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="/guide" className="text-gray-600 hover:text-blue-600 transition-colors">
              User Guide
            </Link>
            <Link href="/privacy" className="text-gray-600 hover:text-blue-600 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-gray-600 hover:text-blue-600 transition-colors">
              Terms
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

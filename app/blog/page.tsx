import type { Metadata } from 'next'
import Link from 'next/link'
import AdSpace from '@/components/AdSpace'

export const metadata: Metadata = {
  title: 'Watermarking Blog - Expert Tips & Guides for Content Protection',
  description: 'Expert insights on watermarking, content protection, digital rights management, and media security. Learn professional techniques to protect your creative work.',
  keywords: ['watermarking blog', 'content protection', 'digital rights', 'media security', 'copyright protection'],
}

// Blog post data (in a real app, this would come from a CMS or database)
const blogPosts = [
  {
    slug: 'ultimate-guide-watermarking-photography',
    title: 'The Ultimate Guide to Watermarking Photography in 2024',
    excerpt: 'Learn professional watermarking techniques that protect your photos while maintaining aesthetic appeal. Covers placement, opacity, legal considerations, and advanced methods.',
    date: '2024-01-15',
    category: 'Photography',
    readTime: '12 min read',
    featured: true
  },
  {
    slug: 'video-watermarking-best-practices',
    title: 'Video Watermarking: Best Practices for Content Creators',
    excerpt: 'Complete guide to watermarking videos effectively. Learn about dynamic watermarks, corner vs center placement, and tools that preserve video quality.',
    date: '2024-01-12',
    category: 'Video Production',
    readTime: '10 min read',
    featured: true
  },
  {
    slug: 'legal-aspects-content-protection',
    title: 'Legal Aspects of Content Protection: What Every Creator Should Know',
    excerpt: 'Understanding copyright law, fair use, DMCA takedowns, and how watermarks serve as legal evidence in content theft cases.',
    date: '2024-01-10',
    category: 'Legal',
    readTime: '15 min read',
    featured: false
  },
  {
    slug: 'invisible-watermarking-techniques',
    title: 'Invisible Watermarking: Advanced Protection for Digital Media',
    excerpt: 'Explore steganography, digital fingerprinting, and invisible watermarking methods that protect content without affecting visual appearance.',
    date: '2024-01-08',
    category: 'Advanced Techniques',
    readTime: '14 min read',
    featured: false
  },
  {
    slug: 'social-media-watermarking-strategy',
    title: 'Social Media Watermarking Strategy: Platform-Specific Guide',
    excerpt: 'Optimize watermarks for Instagram, TikTok, YouTube, and other platforms. Learn about aspect ratios, compression, and engagement impact.',
    date: '2024-01-05',
    category: 'Social Media',
    readTime: '8 min read',
    featured: false
  },
  {
    slug: 'batch-watermarking-workflow',
    title: 'Efficient Batch Watermarking Workflows for Professionals',
    excerpt: 'Streamline your watermarking process with automation tools, batch processing techniques, and workflow optimization for large media libraries.',
    date: '2024-01-03',
    category: 'Workflow',
    readTime: '11 min read',
    featured: false
  },
  {
    slug: 'watermark-removal-prevention',
    title: 'How to Prevent Watermark Removal: Advanced Protection Methods',
    excerpt: 'Learn techniques to make watermarks harder to remove, including integration methods, multiple watermark strategies, and forensic watermarking.',
    date: '2023-12-28',
    category: 'Security',
    readTime: '13 min read',
    featured: false
  },
  {
    slug: 'choosing-right-watermark-design',
    title: 'Choosing the Right Watermark Design for Your Brand',
    excerpt: 'Design principles for effective watermarks. Balance visibility with aesthetics, create brand recognition, and maintain professional appearance.',
    date: '2023-12-25',
    category: 'Design',
    readTime: '9 min read',
    featured: false
  }
]

const categories = ['All', 'Photography', 'Video Production', 'Legal', 'Advanced Techniques', 'Social Media', 'Workflow', 'Security', 'Design']

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured)
  const recentPosts = blogPosts.slice(0, 6)

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Top ad */}
        <AdSpace position="top" format="horizontal" className="mx-auto max-w-4xl mb-8" />
        
        {/* Hero Section */}
        <div className="text-center mb-12 bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-sm">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4">
            Watermarking & Content Protection Blog
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            Expert insights, tutorials, and industry news to help you protect your creative work effectively
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Posts */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <article key={post.slug} className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 hover:text-blue-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center group"
                    >
                      Read More 
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* In-content ad */}
        <div className="mb-12">
          <AdSpace position="in-content" format="horizontal" className="mx-auto max-w-4xl" />
        </div>

        {/* Recent Posts Grid */}
        <section className="grid lg:grid-cols-[1fr,300px] gap-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Latest Articles</h2>
            <div className="space-y-6">
              {recentPosts.map((post) => (
                <article key={post.slug} className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-sm">{post.readTime}</span>
                    </div>
                    <span className="text-gray-500 text-sm">
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-blue-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center group"
                  >
                    Continue Reading 
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Sidebar ad */}
            <AdSpace position="sidebar" format="vertical" className="bg-white/30" />
            
            {/* Newsletter signup */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Stay Updated</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Get the latest watermarking tips and content protection strategies delivered to your inbox.
              </p>
              <div className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Your email address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Popular topics */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Popular Topics</h3>
              <div className="space-y-2">
                {categories.slice(1).map((category) => (
                  <button 
                    key={category}
                    className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors text-sm"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </section>

        {/* Bottom ad */}
        <div className="mt-12">
          <AdSpace position="bottom" format="horizontal" className="mx-auto max-w-4xl" />
        </div>
      </div>
    </main>
  )
}

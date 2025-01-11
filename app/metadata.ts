import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free Online Watermark Tool - Add Watermarks to Images & Videos | SecureWatermark',
  description: 'Add professional watermarks to multiple images and videos for free. Process files securely in your browser with no upload required. Support for batch processing.',
  keywords: [
    'watermark tool',
    'free watermark',
    'image watermark',
    'video watermark',
    'batch watermark',
    'online watermark',
    'secure watermark',
    'no upload watermark',
    'browser watermark',
    'watermark maker'
  ],
  openGraph: {
    type: 'website',
    url: 'https://www.securewatermark.com',
    title: 'Free Online Watermark Tool - SecureWatermark',
    description: 'Add watermarks to images & videos securely in your browser. No upload required.',
    images: [{
      url: 'https://www.securewatermark.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'SecureWatermark - Online Watermarking Tool'
    }],
    siteName: 'SecureWatermark'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@securewatermark',
    title: 'Free Online Watermark Tool',
    description: 'Add watermarks to images & videos securely in your browser. No upload required.',
    images: ['https://www.securewatermark.com/twitter-card.jpg'],
  }
} 
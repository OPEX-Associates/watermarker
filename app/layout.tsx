import Script from 'next/script'
import { Inter } from 'next/font/google'
import { WatermarkProvider } from '@/contexts/WatermarkContext'
import './globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Batch Media Watermarking - Add Watermarks to Images & Videos',
    template: '%s - Batch Media Watermarking'
  },
  description: 'Free online tool to add watermarks to multiple images and videos at once. Process files securely in your browser.',
  keywords: ['watermark', 'batch processing', 'image watermark', 'video watermark', 'free watermark tool'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  publisher: 'Your Company',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    siteName: 'Batch Media Watermarking',
    title: 'Add Watermarks to Images & Videos Online',
    description: 'Free online tool to add watermarks to multiple images and videos at once',
    images: [
      {
        url: 'https://your-domain.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Batch Media Watermarking Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Add Watermarks to Images & Videos Online',
    description: 'Free online tool to add watermarks to multiple images and videos at once',
    images: ['https://your-domain.com/twitter-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
        
        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3384158839006881"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>
        <WatermarkProvider>
          {children}
          <Footer />
        </WatermarkProvider>
      </body>
    </html>
  )
} 
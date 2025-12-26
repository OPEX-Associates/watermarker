import Script from 'next/script'
import { Inter } from 'next/font/google'
import { WatermarkProvider } from '@/contexts/WatermarkContext'
import './globals.css'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Batch Media Watermarking - Add Watermarks to Images & Videos',
    template: '%s - Batch Media Watermarking'
  },
  description: 'Free online tool to add watermarks to multiple images and videos at once. Process files securely in your browser.',
  keywords: ['watermark', 'batch processing', 'image watermark', 'video watermark', 'free watermark tool'],
  authors: [{ name: 'SecureWatermark Team' }],
  creator: 'SecureWatermark',
  publisher: 'SecureWatermark',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://securewatermark.com',
    siteName: 'SecureWatermark',
    title: 'Add Watermarks to Images & Videos Online',
    description: 'Free online tool to add watermarks to multiple images and videos at once',
    images: [
      {
        url: 'https://securewatermark.com/og-image.jpg',
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
    images: ['https://securewatermark.com/twitter-card.jpg'],
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
        
        {/* Monetag Pop-under Ad - High Revenue */}
        <Script id="monetag-popunder" strategy="afterInteractive">
          {`
            (function(d,z,s){
              s.src='https://'+d+'/400/'+z;
              try{
                (document.body||document.documentElement).appendChild(s)
              }catch(e){}
            })('grookilteepsou.net',9960349,document.createElement('script'))
          `}
        </Script>
        
        {/* Monetag Vignette/Interstitial Ad - Mobile Optimized */}
        <Script id="monetag-vignette" strategy="afterInteractive">
          {`
            (function(d,z,s){
              s.src='https://'+d+'/401/'+z;
              try{
                (document.body||document.documentElement).appendChild(s)
              }catch(e){}
            })('grookilteepsou.net',9960349,document.createElement('script'))
          `}
        </Script>
        
        {/* Monetag Push Notifications - Recurring Revenue */}
        <Script id="monetag-push" strategy="afterInteractive">
          {`
            (function(d,z,s){
              s.src='https://'+d+'/pfe/current/tag.min.js?z='+z;
              try{
                (document.body||document.documentElement).appendChild(s)
              }catch(e){}
            })('grookilteepsou.net',9960349,document.createElement('script'))
          `}
        </Script>
        
        {/* Monetag In-Page Push - Non-Intrusive */}
        <Script id="monetag-inpage-push" strategy="afterInteractive">
          {`
            (function(d,z,s){
              s.src='https://'+d+'/pfe/current/tag.min.js?z='+z+'&sw=/sw.js';
              try{
                (document.body||document.documentElement).appendChild(s)
              }catch(e){}
            })('grookilteepsou.net',9960349,document.createElement('script'))
          `}
        </Script>
        
        {/* Monetag MultiTag - Auto-optimized ads */}
        <Script id="monetag-multitag" strategy="afterInteractive">
          {`
            (function(s,u,z,p){
              s.src=u;
              s.setAttribute('data-zone',z);
              p.appendChild(s);
            })(document.createElement('script'),'https://iclickcdn.com/tag.min.js',9960349,document.body||document.documentElement)
          `}
        </Script>
        
        {/* Monetag Direct Link Integration */}
        <Script id="monetag-direct-link" strategy="afterInteractive">
          {`
            (function() {
              var script = document.createElement('script');
              script.type = 'text/javascript';
              script.async = true;
              script.src = 'https://otieu.com/4/9960951';
              var target = document.getElementsByTagName('script')[0];
              target.parentNode.insertBefore(script, target);
            })();
          `}
        </Script>
        
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "SecureWatermark",
      "description": "Free online watermarking tool for images and videos",
      "url": "https://securewatermark.com",
      "applicationCategory": "UtilityApplication",
      "operatingSystem": "Web Browser",
      "permissions": "none",
      "isAccessibleForFree": true,
      "creator": {
        "@type": "Organization",
        "name": "SecureWatermark"
      }
    })
  }}
/>
      </head>
      <body className={inter.className}>
        <WatermarkProvider>
          <Header />
          {children}
          <Footer />
        </WatermarkProvider>
      </body>
    </html>
  )
} 
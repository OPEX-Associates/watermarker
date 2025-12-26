'use client'

import React, { useEffect, useRef, useState } from 'react'

interface StickyAdProps {
  position: 'bottom' | 'sidebar'
  zoneId?: string
  className?: string
}

export default function StickyAd({ 
  position = 'bottom', 
  zoneId = '9960349',
  className = '' 
}: StickyAdProps) {
  const adRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(true)
  const [adLoaded, setAdLoaded] = useState(false)

  useEffect(() => {
    if (adRef.current && typeof window !== 'undefined' && !adLoaded) {
      // Load Monetag sticky ad script
      const script = document.createElement('script')
      script.async = true
      script.setAttribute('data-cfasync', 'false')
      script.innerHTML = `
        (function(s,u,z,p){
          s.src=u;
          s.setAttribute('data-zone',z);
          p.appendChild(s);
        })(document.createElement('script'),'https://iclickcdn.com/tag.min.js',${zoneId},document.getElementById('sticky-ad-${position}'))
      `
      adRef.current.appendChild(script)
      setAdLoaded(true)
    }
  }, [position, zoneId, adLoaded])

  if (!isVisible) return null

  if (position === 'bottom') {
    return (
      <div className={`fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg border-t border-gray-200 ${className}`}>
        <div className="max-w-4xl mx-auto relative">
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute -top-8 right-2 bg-gray-800 text-white text-xs px-2 py-1 rounded-t hover:bg-gray-700 transition-colors"
            aria-label="Close ad"
          >
            Close ✕
          </button>
          <div 
            ref={adRef} 
            id={`sticky-ad-${position}`}
            className="min-h-[50px] md:min-h-[90px] flex items-center justify-center py-2"
          >
            <div className="text-gray-300 text-xs">Loading...</div>
          </div>
        </div>
      </div>
    )
  }

  // Sidebar sticky ad
  return (
    <div className={`sticky top-24 ${className}`}>
      <div 
        ref={adRef} 
        id={`sticky-ad-${position}`}
        className="min-h-[250px] w-full max-w-[300px] bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg shadow-sm flex items-center justify-center"
      >
        <div className="text-gray-300 text-xs">Loading...</div>
      </div>
    </div>
  )
}

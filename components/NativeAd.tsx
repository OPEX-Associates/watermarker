'use client'

import React, { useEffect, useRef, useState } from 'react'

interface NativeAdProps {
  className?: string
  zoneId?: string
  title?: string
}

export default function NativeAd({ 
  className = '',
  zoneId = '9960349',
  title = 'Sponsored Content'
}: NativeAdProps) {
  const adRef = useRef<HTMLDivElement>(null)
  const [adLoaded, setAdLoaded] = useState(false)
  const uniqueId = useRef(`native-ad-${Math.random().toString(36).substr(2, 9)}`)

  useEffect(() => {
    if (adRef.current && typeof window !== 'undefined' && !adLoaded) {
      // Load Monetag native ad script
      const script = document.createElement('script')
      script.async = true
      script.setAttribute('data-cfasync', 'false')
      script.innerHTML = `
        (function(s,u,z,p){
          s.src=u;
          s.setAttribute('data-zone',z);
          p.appendChild(s);
        })(document.createElement('script'),'https://iclickcdn.com/tag.min.js',${zoneId},document.getElementById('${uniqueId.current}'))
      `
      adRef.current.appendChild(script)
      setAdLoaded(true)
    }
  }, [zoneId, adLoaded])

  return (
    <div className={`native-ad-wrapper bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden ${className}`}>
      <div className="px-4 py-2 bg-gray-50 border-b border-gray-100">
        <span className="text-xs text-gray-400 uppercase tracking-wider">{title}</span>
      </div>
      <div 
        ref={adRef} 
        id={uniqueId.current}
        className="min-h-[200px] p-4 flex items-center justify-center"
      >
        <div className="text-gray-300 text-xs">Loading content...</div>
      </div>
    </div>
  )
}

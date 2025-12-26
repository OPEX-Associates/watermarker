'use client'

import React, { useEffect, useRef, useState } from 'react'

interface AdSpaceProps {
  position: 'top' | 'sidebar' | 'bottom' | 'in-content'
  className?: string
  format?: 'horizontal' | 'vertical' | 'square' | 'native'
  zoneId?: string
}

declare global {
  interface Window {
    monetag?: any
  }
}

export default function AdSpace({ 
  position, 
  format = 'horizontal', 
  className = '',
  zoneId = '9960349' 
}: AdSpaceProps) {
  const adRef = useRef<HTMLDivElement>(null)
  const [adLoaded, setAdLoaded] = useState(false)
  const uniqueId = useRef(`monetag-${position}-${Math.random().toString(36).substr(2, 9)}`)

  useEffect(() => {
    if (adRef.current && typeof window !== 'undefined' && !adLoaded) {
      // Create ad container with unique ID
      const adContainer = document.createElement('div')
      adContainer.id = uniqueId.current
      adContainer.className = 'monetag-ad-container'
      adRef.current.innerHTML = ''
      adRef.current.appendChild(adContainer)

      // Load Monetag native banner script
      const script = document.createElement('script')
      script.async = true
      script.setAttribute('data-cfasync', 'false')
      
      // Use different ad types based on format
      if (format === 'native') {
        // Native ad format
        script.src = `https://grookilteepsou.net/na/wa498.js`
      } else {
        // Banner ad format
        script.innerHTML = `
          (function(s,u,z,p){
            s.src=u;
            s.setAttribute('data-zone',z);
            p.appendChild(s);
          })(document.createElement('script'),'https://iclickcdn.com/tag.min.js',${zoneId},document.getElementById('${uniqueId.current}'))
        `
      }
      
      adContainer.appendChild(script)
      setAdLoaded(true)
    }
  }, [position, zoneId, format, adLoaded])

  const adSizes = {
    horizontal: 'min-h-[90px] md:min-h-[120px] w-full',
    vertical: 'min-h-[600px] w-full max-w-[300px]',
    square: 'min-h-[250px] w-full max-w-[300px]',
    native: 'min-h-[250px] w-full'
  }

  return (
    <div className={`ad-space ad-${position} ${adSizes[format]} bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg shadow-sm flex items-center justify-center overflow-hidden ${className}`}>
      <div ref={adRef} className="w-full h-full flex items-center justify-center">
        <div className="text-gray-300 text-xs">Loading ad...</div>
      </div>
    </div>
  )
} 
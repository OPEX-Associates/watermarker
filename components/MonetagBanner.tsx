'use client'

import React, { useEffect, useRef } from 'react'

interface MonetagBannerProps {
  zoneId: string
  width?: number
  height?: number
  className?: string
}

export default function MonetagBanner({ 
  zoneId, 
  width = 728, 
  height = 90, 
  className = '' 
}: MonetagBannerProps) {
  const bannerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (bannerRef.current && typeof window !== 'undefined') {
      // Create Monetag banner ad
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.innerHTML = `
        atOptions = {
          'key' : '${zoneId}',
          'format' : 'iframe',
          'height' : ${height},
          'width' : ${width},
          'params' : {}
        };
        document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://fpyf8.com/88/invoke.js"></scr' + 'ipt>');
      `
      bannerRef.current.appendChild(script)
    }
  }, [zoneId, width, height])

  return (
    <div className={`monetag-banner flex justify-center items-center ${className}`}>
      <div 
        ref={bannerRef} 
        style={{ width: `${width}px`, height: `${height}px` }}
        className="bg-gray-100 rounded border"
      />
    </div>
  )
}
'use client'

import React, { useEffect, useRef } from 'react'

interface AdSpaceProps {
  position: 'top' | 'sidebar' | 'bottom' | 'in-content'
  className?: string
  format?: 'horizontal' | 'vertical' | 'square'
  zoneId?: string
}

export default function AdSpace({ 
  position, 
  format = 'horizontal', 
  className = '',
  zoneId = '175134' 
}: AdSpaceProps) {
  const adRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Load Monetag ads
    const loadMonetag = () => {
      if (adRef.current && typeof window !== 'undefined') {
        // Create unique ad container
        const adContainer = document.createElement('div')
        adContainer.id = `monetag-${position}-${Date.now()}`
        adRef.current.appendChild(adContainer)

        // Load Monetag script if not already loaded
        if (!document.querySelector(`script[src*="fpyf8.com"]`)) {
          const script = document.createElement('script')
          script.src = 'https://fpyf8.com/88/tag.min.js'
          script.setAttribute('data-zone', zoneId)
          script.async = true
          script.setAttribute('data-cfasync', 'false')
          document.head.appendChild(script)
        }
      }
    }

    loadMonetag()
  }, [position, zoneId])

  const adSizes = {
    horizontal: 'min-h-[90px] md:min-h-[120px] w-full',
    vertical: 'min-h-[600px] w-full max-w-[300px]',
    square: 'min-h-[250px] w-full max-w-[300px]'
  }

  return (
    <div className={`ad-space ad-${position} ${adSizes[format]} bg-gray-50 rounded-lg shadow-sm flex items-center justify-center ${className}`}>
      <div ref={adRef} className="w-full h-full flex items-center justify-center">
        <div className="text-gray-400 text-sm">Advertisement</div>
      </div>
    </div>
  )
} 
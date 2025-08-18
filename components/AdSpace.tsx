'use client'

import React, { useEffect } from 'react'

interface AdSpaceProps {
  position: 'top' | 'sidebar' | 'bottom' | 'in-content'
  className?: string
  format?: 'horizontal' | 'vertical' | 'square'
}

declare global {
  interface Window {
    adsbygoogle: any[]
  }
}

export default function AdSpace({ position, format = 'horizontal', className = '' }: AdSpaceProps) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (err) {
      console.error('Error loading ads:', err)
    }
  }, [])

  const adSizes = {
    horizontal: 'min-h-[90px] md:min-h-[120px]',
    vertical: 'min-h-[600px]',
    square: 'min-h-[250px]'
  }

  // Ad slot IDs for different positions from AdSense
  const adSlots = {
    top: '4059793141',        // Horizontal banner
    sidebar: '6633985595',    // Vertical Banner (sidebar ad)
    bottom: '4037927631',     // Bottom banner ad
    'in-content': '5237143447' // In Content ad
  }

  return (
    <div className={`ad-space ad-${position} ${adSizes[format]} bg-white/50 backdrop-blur-sm rounded-lg shadow-sm ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-3384158839006881"
        data-ad-slot={adSlots[position]}
        data-ad-format={format === 'horizontal' ? 'auto' : 'rectangle'}
        data-full-width-responsive="true"
      />
    </div>
  )
} 
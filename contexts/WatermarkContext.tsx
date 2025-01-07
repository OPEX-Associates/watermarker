'use client'

import React, { createContext, useContext, useState } from 'react'

interface WatermarkContextType {
  watermarkText: string
  setWatermarkText: (text: string) => void
  watermarkImage: File | null
  setWatermarkImage: (file: File | null) => void
  watermarkType: 'text' | 'image'
  setWatermarkType: (type: 'text' | 'image') => void
  position: string
  setPosition: (position: string) => void
  opacity: number
  setOpacity: (opacity: number) => void
}

const WatermarkContext = createContext<WatermarkContextType | undefined>(undefined)

export function WatermarkProvider({ children }: { children: React.ReactNode }) {
  const [watermarkText, setWatermarkText] = useState('')
  const [watermarkImage, setWatermarkImage] = useState<File | null>(null)
  const [watermarkType, setWatermarkType] = useState<'text' | 'image'>('text')
  const [position, setPosition] = useState('bottom-right')
  const [opacity, setOpacity] = useState(0.5)

  return (
    <WatermarkContext.Provider
      value={{
        watermarkText,
        setWatermarkText,
        watermarkImage,
        setWatermarkImage,
        watermarkType,
        setWatermarkType,
        position,
        setPosition,
        opacity,
        setOpacity,
      }}
    >
      {children}
    </WatermarkContext.Provider>
  )
}

export function useWatermark() {
  const context = useContext(WatermarkContext)
  if (context === undefined) {
    throw new Error('useWatermark must be used within a WatermarkProvider')
  }
  return context
} 
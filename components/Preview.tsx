'use client'

import React, { useEffect, useRef, useState } from 'react'
import { addWatermark } from '@/utils/watermark'
import { useWatermark } from '@/contexts/WatermarkContext'

interface PreviewProps {
  file: File | null
  onClose: () => void
}

export default function Preview({ file, onClose }: PreviewProps) {
  const previewRef = useRef<HTMLDivElement>(null)
  const [previewUrl, setPreviewUrl] = useState<string>('')
  const [loading, setLoading] = useState(true)
  const { watermarkText, watermarkImage, watermarkType, position, opacity, watermarkSize, fontFamily } = useWatermark()

  useEffect(() => {
    if (!file) return

    const generatePreview = async () => {
      try {
        setLoading(true)
        const watermarkedBlob = await addWatermark(
          file,
          watermarkType,
          watermarkType === 'text' ? watermarkText : watermarkImage!,
          position,
          opacity,
          watermarkSize,
          fontFamily
        )
        const url = URL.createObjectURL(watermarkedBlob)
        setPreviewUrl(url)
        setLoading(false)

        return () => {
          URL.revokeObjectURL(url)
        }
      } catch (error) {
        console.error('Error generating preview:', error)
        setLoading(false)
      }
    }

    generatePreview()
  }, [file, watermarkText, watermarkImage, watermarkType, position, opacity, fontFamily])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (previewRef.current && !previewRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [onClose])

  if (!file) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div ref={previewRef} className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Preview: {file.name}</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        
        <div className="relative">
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            </div>
          ) : file.type.startsWith('video/') ? (
            <video
              src={previewUrl}
              controls
              className="w-full rounded"
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              src={previewUrl}
              alt="Preview"
              className="w-full rounded"
            />
          )}
        </div>
      </div>
    </div>
  )
} 
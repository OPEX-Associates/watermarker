'use client'

import React, { useState } from 'react'
import { useWatermark } from '@/contexts/WatermarkContext'

export default function WatermarkSettings() {
  const { 
    watermarkText, 
    setWatermarkText, 
    position, 
    setPosition, 
    opacity, 
    setOpacity,
    watermarkImage,
    setWatermarkImage,
    watermarkType,
    setWatermarkType
  } = useWatermark()

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const file = e.target.files[0]
      setWatermarkImage(file)
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Watermark Settings</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Watermark Type</label>
          <select
            value={watermarkType}
            onChange={(e) => setWatermarkType(e.target.value as 'text' | 'image')}
            className="w-full p-2 border rounded"
          >
            <option value="text">Text</option>
            <option value="image">Image</option>
          </select>
        </div>

        {watermarkType === 'text' ? (
          <div>
            <label className="block text-sm font-medium mb-1">Watermark Text</label>
            <input
              type="text"
              value={watermarkText}
              onChange={(e) => setWatermarkText(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter watermark text"
            />
          </div>
        ) : (
          <div>
            <label className="block text-sm font-medium mb-1">Watermark Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full p-2 border rounded"
            />
            {watermarkImage && (
              <p className="text-sm text-gray-500 mt-1">
                Selected: {watermarkImage.name}
              </p>
            )}
          </div>
        )}

        <div>
          <label className="block text-sm font-medium mb-1">Position</label>
          <select
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="top-left">Top Left</option>
            <option value="top-right">Top Right</option>
            <option value="bottom-left">Bottom Left</option>
            <option value="bottom-right">Bottom Right</option>
            <option value="center">Center</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Opacity ({Math.round(opacity * 100)}%)
          </label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={opacity}
            onChange={(e) => setOpacity(Number(e.target.value))}
            className="w-full"
          />
        </div>
      </div>
    </div>
  )
} 
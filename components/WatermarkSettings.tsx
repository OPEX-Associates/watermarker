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
    <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800">Watermark Settings</h2>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">Type:</span>
          <div className="flex rounded-lg overflow-hidden border border-gray-200">
            <button
              onClick={() => setWatermarkType('text')}
              className={`px-4 py-2 text-sm transition-colors ${
                watermarkType === 'text'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
              }`}
            >
              Text
            </button>
            <button
              onClick={() => setWatermarkType('image')}
              className={`px-4 py-2 text-sm transition-colors ${
                watermarkType === 'image'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
              }`}
            >
              Image
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {watermarkType === 'text' ? (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Watermark Text
            </label>
            <input
              type="text"
              value={watermarkText}
              onChange={(e) => setWatermarkText(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
              placeholder="Enter watermark text"
            />
          </div>
        ) : (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Watermark Image
            </label>
            <div className="relative">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="watermark-image"
              />
              <label
                htmlFor="watermark-image"
                className="block w-full px-4 py-2 rounded-lg border border-dashed border-gray-300 hover:border-blue-500 cursor-pointer transition-colors text-center"
              >
                {watermarkImage ? (
                  <span className="text-gray-700">{watermarkImage.name}</span>
                ) : (
                  <span className="text-gray-500">Click to upload image</span>
                )}
              </label>
            </div>
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Position
          </label>
          <div className="grid grid-cols-3 gap-2">
            {['top-left', 'top-right', 'center', 'bottom-left', 'bottom-right'].map((pos) => (
              <button
                key={pos}
                onClick={() => setPosition(pos)}
                className={`p-2 rounded border text-sm transition-all ${
                  position === pos
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 hover:border-gray-300 text-gray-600'
                }`}
              >
                {pos.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Opacity ({Math.round(opacity * 100)}%)
          </label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={opacity}
            onChange={(e) => setOpacity(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
        </div>
      </div>
    </div>
  )
} 
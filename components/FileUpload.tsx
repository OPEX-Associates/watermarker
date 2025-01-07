'use client'

import React from 'react'
import { useState } from 'react'
import JSZip from 'jszip'
import { addWatermark } from '@/utils/watermark'
import { useWatermark } from '@/contexts/WatermarkContext'

export default function FileUpload() {
  const [files, setFiles] = useState<File[]>([])
  const [processing, setProcessing] = useState(false)
  const { watermarkText, watermarkImage, watermarkType, position, opacity } = useWatermark()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files))
    }
  }

  const handleProcess = async () => {
    setProcessing(true)
    try {
      const zip = new JSZip()
      
      for (const file of files) {
        const watermarkedBlob = await addWatermark(
          file,
          watermarkType,
          watermarkType === 'text' ? watermarkText : watermarkImage!,
          position,
          opacity
        )
        zip.file(
          `watermarked-${file.name}`,
          watermarkedBlob
        )
      }
      
      const content = await zip.generateAsync({ type: 'blob' })
      const url = URL.createObjectURL(content)
      
      const a = document.createElement('a')
      a.href = url
      a.download = 'watermarked-files.zip'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Error processing files:', error)
    }
    setProcessing(false)
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Upload Files</h2>
      <div className="space-y-4">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
          <input
            type="file"
            multiple
            accept="image/*,video/*"
            onChange={handleFileChange}
            className="hidden"
            id="file-upload"
          />
          <label
            htmlFor="file-upload"
            className="cursor-pointer text-blue-500 hover:text-blue-600"
          >
            Click to upload or drag and drop
          </label>
          <p className="text-sm text-gray-500 mt-2">
            Support for images and videos
          </p>
        </div>
        {files.length > 0 && (
          <div>
            <h3 className="font-medium mb-2">Selected Files:</h3>
            <ul className="space-y-1">
              {files.map((file, index) => (
                <li key={index} className="text-sm">
                  {file.name}
                </li>
              ))}
            </ul>
          </div>
        )}
        <button
          onClick={handleProcess}
          disabled={processing || files.length === 0}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          {processing ? 'Processing...' : 'Add Watermark'}
        </button>
      </div>
    </div>
  )
} 
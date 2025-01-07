'use client'

import React, { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import JSZip from 'jszip'
import { addWatermark } from '@/utils/watermark'
import { useWatermark } from '@/contexts/WatermarkContext'
import Preview from './Preview'

export default function FileUpload() {
  const [files, setFiles] = useState<File[]>([])
  const [processing, setProcessing] = useState(false)
  const [progress, setProgress] = useState<{ [key: string]: number }>({})
  const [previewFile, setPreviewFile] = useState<File | null>(null)
  const { watermarkText, watermarkImage, watermarkType, position, opacity } = useWatermark()

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(prev => [...prev, ...acceptedFiles])
    setProgress({})
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': [],
      'video/*': []
    }
  })

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index))
  }

  const handleProcess = async () => {
    setProcessing(true)
    try {
      const zip = new JSZip()
      
      for (const file of files) {
        setProgress(prev => ({ ...prev, [file.name]: 0 }))
        
        const watermarkedBlob = await addWatermark(
          file,
          watermarkType,
          watermarkType === 'text' ? watermarkText : watermarkImage!,
          position,
          opacity,
          (progress) => {
            setProgress(prev => ({ ...prev, [file.name]: progress }))
          }
        )
        
        zip.file(`watermarked-${file.name}`, watermarkedBlob)
        setProgress(prev => ({ ...prev, [file.name]: 100 }))
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
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Upload Files</h2>
      <div className="space-y-4">
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
            isDragActive
              ? 'border-blue-500 bg-blue-50'
              : 'border-gray-300 hover:border-gray-400'
          }`}
        >
          <input {...getInputProps()} />
          <div className="space-y-2">
            <svg
              className="w-12 h-12 mx-auto text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            <div className="text-gray-600">
              {isDragActive ? (
                <p>Drop the files here ...</p>
              ) : (
                <p>Drag & drop files here, or click to select files</p>
              )}
            </div>
            <p className="text-sm text-gray-500">
              Support for images and videos
            </p>
          </div>
        </div>

        {files.length > 0 && (
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-medium text-gray-700 mb-3">Selected Files</h3>
            <ul className="space-y-3">
              {files.map((file, index) => (
                <li
                  key={index}
                  className="bg-white rounded-lg p-3 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-sm text-gray-600">{file.name}</span>
                      <div className="space-x-2">
                        <button
                          onClick={() => setPreviewFile(file)}
                          className="text-xs text-blue-500 hover:text-blue-600 transition-colors"
                        >
                          Preview
                        </button>
                        <button
                          onClick={() => removeFile(index)}
                          className="text-xs text-red-500 hover:text-red-600 transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    {progress[file.name] !== undefined && (
                      <span className="text-xs text-gray-500">
                        {Math.round(progress[file.name])}%
                      </span>
                    )}
                  </div>
                  {progress[file.name] !== undefined && (
                    <div className="w-full h-1 bg-gray-200 rounded-full mt-2">
                      <div
                        className="h-full bg-blue-500 rounded-full transition-all duration-300"
                        style={{ width: `${progress[file.name]}%` }}
                      />
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        <button
          onClick={handleProcess}
          disabled={processing || files.length === 0}
          className={`w-full py-3 px-4 rounded-lg text-white font-medium transition-all ${
            processing || files.length === 0
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-blue-500 hover:bg-blue-600 shadow-lg hover:shadow-xl'
          }`}
        >
          {processing ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
              <span>Processing...</span>
            </div>
          ) : (
            'Add Watermark'
          )}
        </button>
      </div>

      {previewFile && (
        <Preview
          file={previewFile}
          onClose={() => setPreviewFile(null)}
        />
      )}
    </div>
  )
} 
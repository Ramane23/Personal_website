/**
 * Image Zoom Modal Component
 *
 * A reusable modal for displaying and zooming images.
 *
 * Features:
 * - Click to open image in fullscreen modal
 * - Zoom in/out controls
 * - Pan/drag when zoomed
 * - Keyboard shortcuts (ESC to close, +/- to zoom)
 * - Mouse wheel zoom
 */

'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface ImageZoomModalProps {
  imageSrc: string | null
  altText: string
  onClose: () => void
}

export default function ImageZoomModal({ imageSrc, altText, onClose }: ImageZoomModalProps) {
  const [scale, setScale] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })

  // Reset state when modal opens
  useEffect(() => {
    if (imageSrc) {
      setScale(1)
      setPosition({ x: 0, y: 0 })
    }
  }, [imageSrc])

  // Keyboard shortcuts
  useEffect(() => {
    if (!imageSrc) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === '+' || e.key === '=') {
        handleZoomIn()
      } else if (e.key === '-') {
        handleZoomOut()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [imageSrc, scale, onClose])

  if (!imageSrc) return null

  const handleZoomIn = () => {
    setScale(prev => Math.min(prev + 0.25, 3))
  }

  const handleZoomOut = () => {
    setScale(prev => Math.max(prev - 0.25, 0.5))
  }

  const handleReset = () => {
    setScale(1)
    setPosition({ x: 0, y: 0 })
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale > 1) {
      setIsDragging(true)
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y })
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && scale > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault()
    if (e.deltaY < 0) {
      handleZoomIn()
    } else {
      handleZoomOut()
    }
  }

  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-95 p-4"
      onClick={handleBackgroundClick}
    >
      {/* Close Button */}
      <button
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
        onClick={onClose}
        aria-label="Close modal"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Zoom Controls */}
      <div className="absolute top-4 left-4 flex flex-col space-y-2 bg-gray-800 bg-opacity-80 rounded-lg p-2 z-10">
        <button
          onClick={handleZoomIn}
          disabled={scale >= 3}
          className="p-2 text-white hover:bg-gray-700 rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          aria-label="Zoom in"
          title="Zoom in (+)"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
          </svg>
        </button>
        <button
          onClick={handleZoomOut}
          disabled={scale <= 0.5}
          className="p-2 text-white hover:bg-gray-700 rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          aria-label="Zoom out"
          title="Zoom out (-)"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
          </svg>
        </button>
        <button
          onClick={handleReset}
          className="p-2 text-white hover:bg-gray-700 rounded transition-colors"
          aria-label="Reset zoom"
          title="Reset"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>
        <div className="text-white text-xs text-center py-1 border-t border-gray-700">
          {Math.round(scale * 100)}%
        </div>
      </div>

      {/* Image Container */}
      <div
        className="relative max-w-full max-h-full overflow-hidden cursor-move"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onWheel={handleWheel}
        style={{ cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default' }}
      >
        <div
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            transition: isDragging ? 'none' : 'transform 0.2s ease-out'
          }}
        >
          <Image
            src={imageSrc}
            alt={altText}
            width={1400}
            height={900}
            className="w-auto h-auto max-w-[90vw] max-h-[90vh] object-contain select-none"
            draggable={false}
            priority
          />
        </div>
      </div>

      {/* Instructions */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-gray-800 bg-opacity-80 px-4 py-2 rounded-lg">
        <span className="hidden sm:inline">Use scroll wheel or +/- keys to zoom • Drag to pan • ESC to close</span>
        <span className="sm:hidden">Pinch to zoom • Drag to pan</span>
      </div>
    </div>
  )
}

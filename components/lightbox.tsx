"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, ZoomIn, ZoomOut } from "lucide-react"

interface LightboxProps {
  isOpen: boolean
  onClose: () => void
  imageSrc: string
  imageAlt: string
}

export default function Lightbox({ isOpen, onClose, imageSrc, imageAlt }: LightboxProps) {
  const [zoom, setZoom] = useState(1)

  // Resetar o zoom quando a imagem muda ou o lightbox fecha
  useEffect(() => {
    setZoom(1)
  }, [imageSrc, isOpen])

  // Fechar o lightbox com a tecla ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    if (isOpen) {
      window.addEventListener("keydown", handleEsc)
    }

    return () => {
      window.removeEventListener("keydown", handleEsc)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const zoomIn = () => setZoom((prev) => Math.min(prev + 0.5, 3))
  const zoomOut = () => setZoom((prev) => Math.max(prev - 0.5, 1))

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center" onClick={onClose}>
      <div className="relative max-w-[90vw] max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <div className="absolute top-4 right-4 z-10 flex gap-2">
          <button
            onClick={zoomOut}
            className="p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
            aria-label="Diminuir zoom"
          >
            <ZoomOut size={20} />
          </button>
          <button
            onClick={zoomIn}
            className="p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
            aria-label="Aumentar zoom"
          >
            <ZoomIn size={20} />
          </button>
          <button
            onClick={onClose}
            className="p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
            aria-label="Fechar"
          >
            <X size={20} />
          </button>
        </div>

        <div
          className="overflow-auto max-w-[90vw] max-h-[90vh] transition-transform duration-200 ease-out"
          style={{
            transform: `scale(${zoom})`,
            cursor: zoom > 1 ? "move" : "default",
          }}
        >
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={imageAlt}
            width={1200}
            height={1200}
            className="object-contain max-h-[90vh]"
            priority
          />
        </div>
      </div>
    </div>
  )
}

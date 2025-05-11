"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, ZoomIn, ZoomOut, Info } from "lucide-react"
import StatusTag from "@/components/tags/status-tag"
import SizeTag from "@/components/tags/size-tag"
import DiscountTag from "@/components/tags/discount-tag"
import type { MenuItem as MenuItemType } from "@/data/menu-items"

interface ItemLightboxProps {
  isOpen: boolean
  onClose: () => void
  item: MenuItemType & { title: string; description: string }
  dictionary: {
    menu: {
      status: {
        new: string
        limited: string
        promo: string
      }
      sizes: {
        large: string
        medium: string
        small: string
      }
    }
  }
}

export default function ItemLightbox({ isOpen, onClose, item, dictionary }: ItemLightboxProps) {
  const [zoom, setZoom] = useState(1)
  const [showInfo, setShowInfo] = useState(false)
  const { title, description, price, oldPrice, image, status, size } = item
  const hasPromotion = status === "promocao" && oldPrice

  // Resetar o zoom quando a imagem muda ou o lightbox fecha
  useEffect(() => {
    setZoom(1)
    setShowInfo(false)
  }, [image, isOpen])

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
  const toggleInfo = () => setShowInfo((prev) => !prev)

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center" onClick={onClose}>
      <div className="relative max-w-[90vw] max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <div className="absolute top-4 right-4 z-10 flex gap-2">
          <button
            onClick={toggleInfo}
            className={`p-2 rounded-full text-white transition-colors ${showInfo ? "bg-blue-600" : "bg-black/50 hover:bg-black/70"}`}
            aria-label="Mostrar informações"
          >
            <Info size={20} />
          </button>
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
            src={image || "/placeholder.svg"}
            alt={title}
            width={1200}
            height={1200}
            className="object-contain max-h-[90vh] select-none"
            priority
            unoptimized
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>

        {/* Informações do item */}
        {showInfo && (
          <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 backdrop-blur-sm">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-sm text-gray-300 mt-1">{description}</p>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold">R$ {price}</span>
                  {size && <SizeTag size={size} dictionary={dictionary} />}
                </div>
                {hasPromotion && (
                  <div className="flex items-center gap-2 mt-1">
                    <span className="line-through text-sm text-gray-400">R$ {oldPrice}</span>
                    <DiscountTag oldPrice={oldPrice} currentPrice={price} />
                  </div>
                )}
              </div>
            </div>
            {status && (
              <div className="mt-2">
                <StatusTag type={status} dictionary={dictionary} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

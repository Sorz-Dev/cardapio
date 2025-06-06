"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, ZoomIn, ZoomOut, Info, Flame, Percent } from "lucide-react"
import { DiscountTag, SizeTag } from "@/components/client/tags"

interface ProductLightboxProps {
  isOpen: boolean
  onClose: () => void
  product: {
    id: string
    name: string
    description: string
    image: string
    price: number
    originalPrice?: number
    tags?: string[]
    isNew?: boolean
    size?: string
    isPizza?: boolean
  }
}

export function ProductLightbox({ isOpen, onClose, product }: ProductLightboxProps) {
  const [zoom, setZoom] = useState(1)
  const [showInfo, setShowInfo] = useState(false)
  const { name, description, price, originalPrice, image, tags, isNew, size, isPizza } = product
  const hasPromotion = originalPrice && originalPrice > price

  // Formatação de preço para exibição
  const formattedPrice = price.toFixed(2).replace(".", ",")
  const formattedOriginalPrice = originalPrice ? originalPrice.toFixed(2).replace(".", ",") : ""

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
      <div
        className="relative max-w-[90vw] max-h-[90vh] overflow-hidden rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
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
          className="overflow-auto max-w-[90vw] max-h-[90vh] transition-transform duration-200 ease-out rounded-lg"
          style={{
            transform: `scale(${zoom})`,
            cursor: zoom > 1 ? "move" : "default",
          }}
        >
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={1200}
            height={1200}
            className="object-contain max-h-[90vh] select-none rounded-lg"
            style={{ borderRadius: "0.5rem" }}
            priority
            unoptimized
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>

        {/* Informações do produto */}
        {showInfo && (
          <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 backdrop-blur-sm rounded-b-lg">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold">{name}</h3>
                <p className="text-sm text-gray-300 mt-1">{description}</p>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold">R$ {formattedPrice}</span>
                  {isPizza && size && <SizeTag size={size} />}
                </div>
                {hasPromotion && (
                  <div className="flex items-center gap-2 mt-1">
                    <span className="line-through text-sm text-gray-400">R$ {formattedOriginalPrice}</span>
                    <DiscountTag oldPrice={originalPrice} currentPrice={price} />
                  </div>
                )}
              </div>
            </div>
            <div className="mt-2">
              {isNew && (
                <div className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-red-600 text-white font-preco font-bold text-xs">
                  <Flame className="h-3 w-3" />
                  Novidade
                </div>
              )}
              {tags?.includes("Promoção") && (
                <div className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-blue-700 text-white font-preco font-bold text-xs ml-2">
                  <Percent className="h-3 w-3" />
                  Promoção
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

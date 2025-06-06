"use client"

import { useState } from "react"
import Image from "next/image"
import ItemLightbox from "@/components/item-lightbox"
import StatusTag from "@/components/tags/status-tag"
import SizeTag from "@/components/tags/size-tag"
import DiscountTag from "@/components/tags/discount-tag"
import type { MenuItem as MenuItemType } from "@/data/menu-items"

interface MenuItemProps {
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

export default function MenuItem({ item, dictionary }: MenuItemProps) {
  const { title, description, price, oldPrice, image, status, size } = item
  const hasPromotion = oldPrice && price < oldPrice

  // Estado para controlar a abertura do lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false)

  return (
    <div className="w-full max-w-md menu-item">
      {/* Layout para celular (vertical) */}
      <div className="sm:hidden flex flex-col w-full overflow-hidden">
        <div className="relative cursor-pointer p-1.5 w-full" onClick={() => setLightboxOpen(true)}>
          <div className="w-full aspect-square overflow-hidden rounded-md">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              width={120}
              height={120}
              className="w-full h-full object-cover !rounded-md"
              style={{ borderRadius: "0.375rem" }}
            />
          </div>

          {/* Status tag posicionado no canto superior esquerdo da imagem */}
          {status && (
            <div className="absolute top-3 left-3">
              <StatusTag type={status} dictionary={dictionary} />
            </div>
          )}
        </div>

        <div className="flex flex-col text-left mt-1 w-full overflow-hidden px-1.5">
          <h3 className="font-sans font-bold text-[12px] leading-[14px] line-clamp-2 w-full break-words">{title}</h3>
          <p className="font-sans font-normal text-[10px] leading-[12px] text-gray-700 dark:text-gray-300 mt-0.5 line-clamp-5 w-full break-words">
            {description}
          </p>

          {/* Preço atual e tag de tamanho */}
          <div className="flex items-center mt-1 justify-between">
            <div className="flex items-center">
              <span className="text-[#FCA336] font-preco font-bold text-[13px] leading-[13px]">R$ {price}</span>
              {size && (
                <div className="ml-2">
                  <SizeTag size={size} dictionary={dictionary} />
                </div>
              )}
            </div>
          </div>

          {/* Preço antigo */}
          {hasPromotion && (
            <div className="flex items-center gap-1">
              <span className="font-preco font-bold text-[10px] leading-[10px] text-gray-500 line-through">
                R$ {oldPrice}
              </span>

              {/* Discount tag */}
              <DiscountTag oldPrice={oldPrice} currentPrice={price} />
            </div>
          )}
        </div>
      </div>

      {/* Layout para tablet e desktop (horizontal) */}
      <div className="hidden sm:flex flex-row min-w-[320px] w-full">
        <div className="relative cursor-pointer p-1.5" onClick={() => setLightboxOpen(true)}>
          <div className="overflow-hidden rounded-md">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              width={120}
              height={120}
              className="w-[120px] h-[120px] object-cover !rounded-md"
              style={{ borderRadius: "0.375rem" }}
            />
          </div>

          {/* Status tag posicionado no canto superior esquerdo da imagem */}
          {status && (
            <div className="absolute top-3 left-3">
              <StatusTag type={status} dictionary={dictionary} />
            </div>
          )}
        </div>

        <div className="flex flex-col justify-center flex-1 ml-1">
          <h3 className="font-sans font-bold text-[14px] leading-[16px] line-clamp-2">{title}</h3>
          <p className="font-sans font-normal text-[12px] leading-[13px] text-gray-700 dark:text-gray-300 mt-1 line-clamp-3">
            {description}
          </p>

          <div className="flex items-center mt-1 justify-between">
            <div className="flex items-center">
              <span className="text-[#FCA336] font-preco font-bold text-[14px] leading-[14px]">R$ {price}</span>
              {/* Tag de tamanho ao lado do preço */}
              {size && (
                <div className="ml-2">
                  <SizeTag size={size} dictionary={dictionary} />
                </div>
              )}
            </div>
          </div>

          {/* Preço antigo e discount tag */}
          {hasPromotion && (
            <div className="flex items-center gap-1 mt-0.5">
              <span className="font-preco font-bold text-[10px] leading-[10px] text-gray-500 line-through">
                R$ {oldPrice}
              </span>
              <DiscountTag oldPrice={oldPrice} currentPrice={price} />
            </div>
          )}
        </div>
      </div>

      {/* Lightbox para exibição em tela cheia */}
      <ItemLightbox isOpen={lightboxOpen} onClose={() => setLightboxOpen(false)} item={item} dictionary={dictionary} />
    </div>
  )
}

"use client"

import { useState } from "react"
import Image from "next/image"
import ItemLightbox from "@/components/item-lightbox"
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
  const hasPromotion = status === "promocao" && oldPrice

  // Estado para controlar a abertura do lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false)

  return (
    <div className="w-full max-w-md">
      {/* Layout para celular (vertical) */}
      <div className="sm:hidden flex flex-col w-full overflow-hidden">
        <div className="relative cursor-pointer p-1.5 w-full" onClick={() => setLightboxOpen(true)}>
          <div className="w-full aspect-square">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              width={120}
              height={120}
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          {/* Status tag posicionado no canto superior esquerdo da imagem */}
          {status === "promocao" && (
            <div className="absolute top-3 left-3">
              <div className="bg-blue-700 text-white font-preco font-bold text-[8px] leading-[8px] py-0.5 px-2 rounded-md flex items-center">
                <span className="mr-1">%</span>
                Promoção
              </div>
            </div>
          )}

          {/* Tag de tamanho no canto inferior direito */}
          {size && (
            <div className="absolute bottom-2 right-2">
              <div className="bg-teal-500 text-white font-alfaSlab text-[7px] leading-[7px] px-2 py-0.5 rounded-md">
                {dictionary.menu.sizes[size === "grande" ? "large" : size === "media" ? "medium" : "small"]}
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col text-left mt-1 w-full overflow-hidden px-1.5">
          <h3 className="font-sans font-bold text-[12px] leading-[14px] line-clamp-2 w-full break-words">{title}</h3>
          <p className="font-sans font-normal text-[10px] leading-[12px] text-gray-700 dark:text-gray-300 mt-0.5 line-clamp-5 w-full break-words">
            {description}
          </p>

          {/* Preço atual */}
          <div className="flex items-center mt-1">
            <span className="text-[#FCA336] font-preco font-bold text-[13px] leading-[13px]">R$ {price}</span>
          </div>

          {/* Preço antigo */}
          {hasPromotion && (
            <div className="flex items-center gap-1">
              <span className="font-preco font-bold text-[10px] leading-[10px] text-gray-500 line-through">
                R$ {oldPrice}
              </span>

              {/* Discount tag */}
              <div className="bg-rose-600 text-white font-preco font-black text-[8px] leading-[8px] px-1.5 py-0.5 rounded-sm">
                -
                {Math.round(
                  ((Number.parseFloat(oldPrice.replace(",", ".")) - Number.parseFloat(price.replace(",", "."))) /
                    Number.parseFloat(oldPrice.replace(",", "."))) *
                    100,
                )}
                %
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Layout para tablet e desktop (horizontal) */}
      <div className="hidden sm:flex flex-row min-w-[320px] w-full">
        <div className="relative cursor-pointer p-1.5" onClick={() => setLightboxOpen(true)}>
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={120}
            height={120}
            className="w-[120px] h-[120px] object-cover rounded-md"
          />

          {/* Status tag posicionado no canto superior esquerdo da imagem */}
          {status === "promocao" && (
            <div className="absolute top-3 left-3">
              <div className="bg-blue-700 text-white font-preco font-bold text-[8px] leading-[8px] py-0.5 px-2 rounded-md flex items-center">
                <span className="mr-1">%</span>
                Promoção
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col justify-center flex-1 ml-1">
          <h3 className="font-sans font-bold text-[14px] leading-[16px] line-clamp-2">{title}</h3>
          <p className="font-sans font-normal text-[12px] leading-[13px] text-gray-700 dark:text-gray-300 mt-1 line-clamp-3">
            {description}
          </p>

          <div className="flex items-center mt-1">
            <span className="text-[#FCA336] font-preco font-bold text-[14px] leading-[14px]">R$ {price}</span>

            {/* Tag de tamanho */}
            {size && (
              <div className="ml-2">
                <div className="bg-teal-500 text-white font-alfaSlab text-[8px] leading-[8px] px-2 py-0.5 rounded-md">
                  {dictionary.menu.sizes[size === "grande" ? "large" : size === "media" ? "medium" : "small"]}
                </div>
              </div>
            )}
          </div>

          {/* Preço antigo e discount tag */}
          {hasPromotion && (
            <div className="flex items-center gap-1 mt-0.5">
              <span className="font-preco font-bold text-[10px] leading-[10px] text-gray-500 line-through">
                R$ {oldPrice}
              </span>

              {/* Discount tag */}
              <div className="bg-rose-600 text-white font-preco font-black text-[6px] leading-[6px] px-1.5 py-0.5 rounded-sm">
                -
                {Math.round(
                  ((Number.parseFloat(oldPrice.replace(",", ".")) - Number.parseFloat(price.replace(",", "."))) /
                    Number.parseFloat(oldPrice.replace(",", "."))) *
                    100,
                )}
                %
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox para exibição em tela cheia */}
      <ItemLightbox isOpen={lightboxOpen} onClose={() => setLightboxOpen(false)} item={item} dictionary={dictionary} />
    </div>
  )
}

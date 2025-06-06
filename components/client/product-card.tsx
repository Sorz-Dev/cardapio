"use client"

import Image from "next/image"
import Link from "next/link"
import { Flame, Percent } from "lucide-react"
import { DiscountTag, SizeTag } from "@/components/client/tags"

interface ProductCardProps {
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

export function ProductCard({
  id,
  name,
  description,
  image,
  price,
  originalPrice,
  tags,
  isNew,
  size,
  isPizza,
}: ProductCardProps) {
  // Formatação de preço para exibição
  const formattedPrice = price.toFixed(2).replace(".", ",")
  const formattedOriginalPrice = originalPrice ? originalPrice.toFixed(2).replace(".", ",") : ""
  const hasPromotion = originalPrice && originalPrice > price

  return (
    <div className="w-full max-w-md">
      {/* Layout para celular (vertical) */}
      <div className="sm:hidden flex flex-col w-full overflow-hidden">
        <Link href={`/client/${id}`} className="block relative p-1.5 w-full">
          <div className="w-full aspect-square overflow-hidden rounded-md">
            <Image
              src={image || "/placeholder.svg"}
              alt={name}
              width={120}
              height={120}
              className="w-full h-full object-cover !rounded-md"
              style={{ borderRadius: "0.375rem" }}
            />
          </div>

          {/* Tags */}
          <div className="absolute top-3 left-3">
            {isNew && (
              <div className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-red-600 text-white font-preco font-bold text-[8px] leading-[8px]">
                <Flame className="h-3 w-3" />
                Novidade
              </div>
            )}
            {tags?.includes("Promoção") && (
              <div className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-blue-700 text-white font-preco font-bold text-[8px] leading-[8px] mt-1">
                <Percent className="h-3 w-3" />
                Promoção
              </div>
            )}
          </div>
        </Link>

        <Link href={`/client/${id}`} className="flex flex-col text-left mt-1 w-full overflow-hidden px-1.5">
          <h3 className="font-sans font-bold text-[12px] leading-[14px] line-clamp-2 w-full break-words">{name}</h3>
          <p className="font-sans font-normal text-[10px] leading-[12px] text-gray-700 dark:text-gray-300 mt-0.5 line-clamp-5 w-full break-words">
            {description}
          </p>

          {/* Preço atual e tag de tamanho */}
          <div className="flex items-center mt-1 justify-between">
            <div className="flex items-center">
              <span className="text-[#FCA336] font-preco font-bold text-[13px] leading-[13px]">
                R$ {formattedPrice}
              </span>
              {isPizza && size && (
                <div className="ml-2">
                  <SizeTag size={size} />
                </div>
              )}
            </div>
          </div>

          {/* Preço antigo */}
          {hasPromotion && (
            <div className="flex items-center gap-1">
              <span className="font-preco font-bold text-[10px] leading-[10px] text-gray-500 line-through">
                R$ {formattedOriginalPrice}
              </span>

              {/* Discount tag */}
              <DiscountTag oldPrice={originalPrice} currentPrice={price} />
            </div>
          )}
        </Link>
      </div>

      {/* Layout para tablet e desktop (horizontal) */}
      <div className="hidden sm:flex flex-row min-w-[320px] w-full">
        <Link href={`/client/${id}`} className="block relative p-1.5">
          <div className="overflow-hidden rounded-md">
            <Image
              src={image || "/placeholder.svg"}
              alt={name}
              width={120}
              height={120}
              className="w-[120px] h-[120px] object-cover !rounded-md"
              style={{ borderRadius: "0.375rem" }}
            />
          </div>

          {/* Tags */}
          <div className="absolute top-3 left-3 flex flex-col gap-1">
            {isNew && (
              <div className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-red-600 text-white font-preco font-bold text-[8px] leading-[8px]">
                <Flame className="h-3 w-3" />
                Novidade
              </div>
            )}
            {tags?.includes("Promoção") && (
              <div className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-blue-700 text-white font-preco font-bold text-[8px] leading-[8px]">
                <Percent className="h-3 w-3" />
                Promoção
              </div>
            )}
          </div>
        </Link>

        <Link href={`/client/${id}`} className="flex flex-col justify-center flex-1 ml-1">
          <h3 className="font-sans font-bold text-[14px] leading-[16px] line-clamp-2">{name}</h3>
          <p className="font-sans font-normal text-[12px] leading-[13px] text-gray-700 dark:text-gray-300 mt-1 line-clamp-3">
            {description}
          </p>

          <div className="flex items-center mt-1 justify-between">
            <div className="flex items-center">
              <span className="text-[#FCA336] font-preco font-bold text-[14px] leading-[14px]">
                R$ {formattedPrice}
              </span>
              {/* Tag de tamanho ao lado do preço */}
              {isPizza && size && (
                <div className="ml-2">
                  <SizeTag size={size} />
                </div>
              )}
            </div>
          </div>

          {/* Preço antigo e discount tag */}
          {hasPromotion && (
            <div className="flex items-center gap-1 mt-0.5">
              <span className="font-preco font-bold text-[10px] leading-[10px] text-gray-500 line-through">
                R$ {formattedOriginalPrice}
              </span>
              <DiscountTag oldPrice={originalPrice} currentPrice={price} />
            </div>
          )}
        </Link>
      </div>
    </div>
  )
}

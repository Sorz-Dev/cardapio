interface DiscountTagProps {
  oldPrice: string
  currentPrice: string
  className?: string
}

export default function DiscountTag({ oldPrice, currentPrice, className = "" }: DiscountTagProps) {
  // Converter preços de string para número (substituindo vírgula por ponto)
  const oldPriceNum = Number.parseFloat(oldPrice.replace(",", "."))
  const currentPriceNum = Number.parseFloat(currentPrice.replace(",", "."))

  // Calcular a porcentagem de desconto
  const discountPercent = Math.round(((oldPriceNum - currentPriceNum) / oldPriceNum) * 100)

  return (
    <div
      className={`inline-flex items-center justify-center px-1.5 py-0.5 bg-[#ff0059] text-white text-[10px] font-medium rounded-sm ${className}`}
    >
      -{discountPercent}%
    </div>
  )
}

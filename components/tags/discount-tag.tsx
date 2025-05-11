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

  // Modificar as classes para garantir que as bordas estejam arredondadas em dispositivos móveis

  // Alterar a versão mobile para garantir bordas arredondadas
  const mobileClasses = "sm:hidden font-preco font-black text-[8px] leading-[8px] rounded-sm"

  // Alterar a versão desktop para garantir bordas arredondadas
  const desktopClasses = "hidden sm:inline-flex font-preco font-black text-[6px] leading-[6px] rounded-sm"

  // Remover a classe rounded-sm das divs para evitar duplicação
  return (
    <>
      {/* Versão mobile */}
      <div
        className={`inline-flex items-center justify-center px-1.5 py-0.5 bg-rose-600 text-white ${mobileClasses} ${className}`}
      >
        -{discountPercent}%
      </div>

      {/* Versão desktop */}
      <div
        className={`inline-flex items-center justify-center px-1.5 py-0.5 bg-rose-600 text-white ${desktopClasses} ${className}`}
      >
        -{discountPercent}%
      </div>
    </>
  )
}

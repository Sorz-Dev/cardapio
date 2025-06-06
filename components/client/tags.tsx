// Componente DiscountTag
interface DiscountTagProps {
  oldPrice: number
  currentPrice: number
  className?: string
}

export function DiscountTag({ oldPrice, currentPrice, className = "" }: DiscountTagProps) {
  // Calcular a porcentagem de desconto
  const discountPercent = Math.round(((oldPrice - currentPrice) / oldPrice) * 100)

  return (
    <div
      className={`inline-flex items-center justify-center px-1.5 py-0.5 bg-[#FCA336] text-white font-preco font-black text-[8px] leading-[8px] rounded-sm ${className}`}
    >
      -{discountPercent}%
    </div>
  )
}

// Componente SizeTag
interface SizeTagProps {
  size: string
  className?: string
}

export function SizeTag({ size, className = "" }: SizeTagProps) {
  // Mapeamento de tamanhos para configurações visuais
  const sizeConfig: Record<string, { bgColor: string; textColor: string; label: string }> = {
    grande: {
      bgColor: "bg-teal-500",
      textColor: "text-white",
      label: "GRANDE",
    },
    media: {
      bgColor: "bg-rose-600",
      textColor: "text-white",
      label: "MÉDIA",
    },
    broto: {
      bgColor: "bg-sky-500",
      textColor: "text-white",
      label: "BROTO",
    },
    // Adicione outros tamanhos conforme necessário
    // Fallback para tamanhos não mapeados
    default: {
      bgColor: "bg-gray-500",
      textColor: "text-white",
      label: size.toUpperCase(),
    },
  }

  // Usar a configuração do tamanho ou o fallback
  const config = sizeConfig[size.toLowerCase()] || sizeConfig.default

  return (
    <div
      className={`inline-flex items-center justify-center px-2 py-0.5 rounded-md ${config.bgColor} ${config.textColor} font-alfaSlab text-[8px] leading-[8px] ${className}`}
    >
      {config.label}
    </div>
  )
}

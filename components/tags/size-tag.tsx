export type PizzaSize = "grande" | "media" | "broto"

interface SizeTagProps {
  size: PizzaSize
  className?: string
  dictionary: {
    menu: {
      sizes: {
        large: string
        medium: string
        small: string
      }
    }
  }
}

const sizeConfig = {
  grande: {
    bgColor: "bg-teal-500",
    textColor: "text-white",
    labelKey: "large",
  },
  media: {
    bgColor: "bg-rose-600",
    textColor: "text-white",
    labelKey: "medium",
  },
  broto: {
    bgColor: "bg-sky-500",
    textColor: "text-white",
    labelKey: "small",
  },
}

export default function SizeTag({ size, className = "", dictionary }: SizeTagProps) {
  const config = sizeConfig[size]
  const label = dictionary.menu.sizes[config.labelKey as keyof typeof dictionary.menu.sizes]

  // Modificar as classes para garantir que as bordas estejam arredondadas em dispositivos móveis

  // Alterar a versão mobile para garantir bordas arredondadas
  const mobileClasses = "sm:hidden font-alfaSlab text-[7px] leading-[7px] rounded-md"

  // Alterar a versão desktop para garantir bordas arredondadas
  const desktopClasses = "hidden sm:inline-flex font-alfaSlab text-[8px] leading-[8px] rounded-md"

  // Remover a classe rounded-md das divs para evitar duplicação
  return (
    <>
      {/* Versão mobile */}
      <div
        className={`inline-flex items-center justify-center px-2 py-0.5 ${config.bgColor} ${config.textColor} ${mobileClasses} ${className}`}
      >
        {label}
      </div>

      {/* Versão desktop */}
      <div
        className={`inline-flex items-center justify-center px-2 py-0.5 ${config.bgColor} ${config.textColor} ${desktopClasses} ${className}`}
      >
        {label}
      </div>
    </>
  )
}

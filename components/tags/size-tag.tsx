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

  // Aplicando as classes de fonte específicas
  const mobileClasses = "sm:hidden font-alfaSlab text-[7px] leading-[7px]"
  const desktopClasses = "hidden sm:inline-flex font-alfaSlab text-[8px] leading-[8px]"

  return (
    <>
      {/* Versão mobile */}
      <div
        className={`inline-flex items-center justify-center px-2 py-0.5 rounded-md ${config.bgColor} ${config.textColor} ${mobileClasses} ${className}`}
      >
        {label}
      </div>

      {/* Versão desktop */}
      <div
        className={`inline-flex items-center justify-center px-2 py-0.5 rounded-md ${config.bgColor} ${config.textColor} ${desktopClasses} ${className}`}
      >
        {label}
      </div>
    </>
  )
}

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
    bgColor: "bg-[#00a589]",
    textColor: "text-white",
    labelKey: "large",
  },
  media: {
    bgColor: "bg-[#ff0059]",
    textColor: "text-white",
    labelKey: "medium",
  },
  broto: {
    bgColor: "bg-[#019ac9]",
    textColor: "text-white",
    labelKey: "small",
  },
}

export default function SizeTag({ size, className = "", dictionary }: SizeTagProps) {
  const config = sizeConfig[size]
  const label = dictionary.menu.sizes[config.labelKey as keyof typeof dictionary.menu.sizes]

  return (
    <div
      className={`inline-flex items-center justify-center px-2 py-0.5 rounded-md ${config.bgColor} ${config.textColor} text-xs font-medium ${className}`}
    >
      {label}
    </div>
  )
}

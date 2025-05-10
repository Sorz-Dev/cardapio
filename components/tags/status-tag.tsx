import { Flame, Clock, Percent } from "lucide-react"

export type StatusType = "novidade" | "limitado" | "promocao"

interface StatusTagProps {
  type: StatusType
  className?: string
  dictionary: {
    menu: {
      status: {
        new: string
        limited: string
        promo: string
      }
    }
  }
}

const statusConfig = {
  novidade: {
    bgColor: "bg-red-600",
    textColor: "text-white",
    icon: Flame,
    labelKey: "new",
  },
  limitado: {
    bgColor: "bg-emerald-500",
    textColor: "text-white",
    icon: Clock,
    labelKey: "limited",
  },
  promocao: {
    bgColor: "bg-blue-700",
    textColor: "text-white",
    icon: Percent,
    labelKey: "promo",
  },
}

export default function StatusTag({ type, className = "", dictionary }: StatusTagProps) {
  const config = statusConfig[type]
  const Icon = config.icon
  const label = dictionary.menu.status[config.labelKey as keyof typeof dictionary.menu.status]

  return (
    <div
      className={`inline-flex items-center gap-1 px-2 py-1 rounded-md ${config.bgColor} ${config.textColor} font-preco font-bold text-[8px] leading-[8px] ${className}`}
    >
      <Icon className="h-3 w-3" />
      {label}
    </div>
  )
}

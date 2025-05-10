import { Flame, Clock, Percent } from "lucide-react"

export type StatusType = "novidade" | "limitado" | "promocao"

interface StatusTagProps {
  type: StatusType
  className?: string
  dictionary: {
    menu: {
      badges: {
        new: string
        limited: string
        promo: string
      }
    }
  }
}

const statusConfig = {
  novidade: {
    bgColor: "bg-[#b60a0a]",
    textColor: "text-white",
    icon: Flame,
    labelKey: "new",
  },
  limitado: {
    bgColor: "bg-[#0ab68b]",
    textColor: "text-white",
    icon: Clock,
    labelKey: "limited",
  },
  promocao: {
    bgColor: "bg-[#150ab6]",
    textColor: "text-white",
    icon: Percent,
    labelKey: "promo",
  },
}

export default function StatusTag({ type, className = "", dictionary }: StatusTagProps) {
  const config = statusConfig[type]
  const Icon = config.icon
  const label = dictionary.menu.badges[config.labelKey as keyof typeof dictionary.menu.badges]

  return (
    <div
      className={`inline-flex items-center gap-1 px-2 py-1 rounded-md ${config.bgColor} ${config.textColor} text-xs font-medium ${className}`}
    >
      <Icon className="h-3 w-3" />
      {label}
    </div>
  )
}

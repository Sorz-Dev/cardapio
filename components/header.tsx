"use client"
import Link from "next/link"
import Image from "next/image"
import { useLanguage, locales } from "./language-provider"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

interface HeaderProps {
  dictionary: {
    nav: {
      home: string
      menu: string
    }
  }
}

export default function Header({ dictionary }: HeaderProps) {
  const { locale, setLocale } = useLanguage()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Necessário para evitar erro de hidratação, já que o tema é determinado no cliente
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="relative w-auto">
      <div className="h-8 bg-[#FCA336]"></div>
      <div className="h-16 bg-[#FFF9F1] dark:bg-zinc-900 relative place-content-center">
        <div className="container mx-auto px-4 flex justify-between place-items-center">
          <Link href={`/${locale}`} className="relative h-8">
            {mounted ? (
              theme === "dark" ? (
                // Logo para modo escuro
                <Image
                  src="https://d7hd88ngyqaw6jtz.public.blob.vercel-storage.com/restaurants/oficina-do-sabor/logo_branca-N1vnSa3zzD2fS7JC4XI8Oft3eL6bFh.png"
                  alt="Logo Fresco"
                  className="h-8 w-auto"
                  priority
                />
              ) : (
                // Logo para modo claro
                <Image
                  src="https://d7hd88ngyqaw6jtz.public.blob.vercel-storage.com/restaurants/oficina-do-sabor/logo-main-torLP0dMlUbf2X03ILs5VRMAuBj7dl.png"
                  alt="Logo Fresco"
                  className="h-8 w-auto"
                  priority
                />
              )
            ) : (
              // Fallback enquanto o componente não está montado
              <div className="h-8 w-auto bg-gray-200 dark:bg-gray-700 animate-pulse rounded" />
            )}
          </Link>

          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-black dark:text-white"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Alternar tema</span>
            </Button>

            {/* Language Switcher */}
            <div className="flex space-x-2">
              {locales.map((l) => (
                <Button
                  key={l}
                  variant={l === locale ? "default" : "outline"}
                  size="sm"
                  onClick={() => setLocale(l)}
                  className={l === locale ? "bg-[#FCA336] hover:bg-[#FF9C20]" : ""}
                >
                  {l.toUpperCase()}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

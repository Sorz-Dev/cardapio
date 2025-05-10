"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"

// Define the locales here instead of importing from middleware
export const locales = ["pt", "en"]
export const defaultLocale = "pt"

type LanguageContextType = {
  locale: string
  setLocale: (locale: string) => void
}

const LanguageContext = createContext<LanguageContextType>({
  locale: defaultLocale,
  setLocale: () => {},
})

export function LanguageProvider({
  children,
  initialLocale = defaultLocale,
}: {
  children: React.ReactNode
  initialLocale?: string
}) {
  const [locale, setLocaleState] = useState(initialLocale)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    // Extract locale from pathname
    const pathLocale = pathname.split("/")[1]
    if (locales.includes(pathLocale)) {
      setLocaleState(pathLocale)
    }
  }, [pathname])

  const setLocale = (newLocale: string) => {
    if (locales.includes(newLocale) && newLocale !== locale) {
      setLocaleState(newLocale)

      // Get current path without locale prefix
      const pathWithoutLocale = pathname.replace(/^\/[^/]+/, "")

      // Navigate to the same path but with the new locale
      router.push(`/${newLocale}${pathWithoutLocale}`)
    }
  }

  return <LanguageContext.Provider value={{ locale, setLocale }}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => useContext(LanguageContext)

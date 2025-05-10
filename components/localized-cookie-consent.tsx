"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X } from "lucide-react"
import { useLanguage } from "./language-provider"

interface CookieConsentProps {
  dictionary: {
    cookies: {
      title: string
      description: string
      learnMore: string
      accept: string
      reject: string
      privacyPolicy: string
    }
  }
}

export default function LocalizedCookieConsent({ dictionary }: CookieConsentProps) {
  const [showConsent, setShowConsent] = useState(false)
  const { locale } = useLanguage()

  useEffect(() => {
    // Verificar se o usuário já aceitou os cookies
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowConsent(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowConsent(false)
  }

  const rejectCookies = () => {
    localStorage.setItem("cookie-consent", "rejected")
    setShowConsent(false)
  }

  const closeConsent = () => {
    setShowConsent(false)
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#1d1d1d] text-white p-4 z-50">
      <div className="container mx-auto max-w-7xl px-1 relative">
        <button
          onClick={closeConsent}
          className="absolute right-1 top-0 text-white hover:text-gray-300"
          aria-label="Fechar"
        >
          <X size={24} />
        </button>

        <div className="pr-8">
          <h2 className="text-xl font-medium mb-2">{dictionary.cookies.title}</h2>

          <p className="text-sm mb-4">{dictionary.cookies.description}</p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <Link
              href={`/${locale}/politica-de-privacidade`}
              className="text-sm text-gray-300 hover:underline sm:mr-auto"
            >
              {dictionary.cookies.learnMore}
            </Link>

            <div className="flex gap-2">
              <button
                onClick={rejectCookies}
                className="px-4 py-2 text-sm font-medium text-white bg-transparent border border-gray-600 rounded hover:bg-gray-800"
              >
                {dictionary.cookies.reject}
              </button>

              <button
                onClick={acceptCookies}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700"
              >
                {dictionary.cookies.accept}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

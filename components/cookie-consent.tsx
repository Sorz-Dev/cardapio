"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X } from "lucide-react"

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

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
      <div className="container mx-auto max-w-6xl px-4 relative">
        <button
          onClick={closeConsent}
          className="absolute right-4 top-0 text-white hover:text-gray-300"
          aria-label="Fechar"
        >
          <X size={24} />
        </button>

        <div className="pr-8">
          <h2 className="text-xl font-medium mb-2">Este site usa cookies</h2>

          <p className="text-sm mb-4">
            Utilizamos cookies para melhorar sua experiência de navegação, personalizar conteúdo e anúncios, e analisar
            nosso tráfego. Ao continuar navegando, você concorda com o uso de cookies.
          </p>

          <div className="flex items-center">
            <Link href="/politica-de-privacidade" className="text-sm text-gray-300 hover:underline mr-auto">
              Saiba mais em nossa Política de Privacidade
            </Link>

            <div className="flex gap-2">
              <button
                onClick={rejectCookies}
                className="px-4 py-2 text-sm font-medium text-white bg-transparent border border-gray-600 rounded hover:bg-gray-800"
              >
                Rejeitar
              </button>

              <button
                onClick={closeConsent}
                className="px-4 py-2 text-sm font-medium text-white bg-transparent border border-gray-600 rounded hover:bg-gray-800"
              >
                Configurações
              </button>

              <button
                onClick={acceptCookies}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700"
              >
                Aceitar todos
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

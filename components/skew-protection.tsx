"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

export default function SkewProtection() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()
  const [showWarning, setShowWarning] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Prevenir clique direito
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault()
      showCopyWarning()
      return false
    }

    // Prevenir atalhos de teclado comuns para cópia
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey && (e.key === "c" || e.key === "s" || e.key === "u" || e.key === "p")) ||
        (e.metaKey && (e.key === "c" || e.key === "s" || e.key === "u" || e.key === "p")) ||
        e.key === "F12" ||
        e.key === "PrintScreen"
      ) {
        e.preventDefault()
        showCopyWarning()
        return false
      }
    }

    // Prevenir arrastar imagens
    const handleDragStart = (e: DragEvent) => {
      if (e.target instanceof HTMLImageElement) {
        e.preventDefault()
        showCopyWarning()
      }
    }

    // Mostrar aviso temporário
    const showCopyWarning = () => {
      setShowWarning(true)
      setTimeout(() => {
        setShowWarning(false)
      }, 2000)
    }

    // Adicionar listeners
    document.addEventListener("contextmenu", handleContextMenu)
    document.addEventListener("keydown", handleKeyDown)
    document.addEventListener("dragstart", handleDragStart as EventListener)

    // Remover listeners ao desmontar
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu)
      document.removeEventListener("keydown", handleKeyDown)
      document.removeEventListener("dragstart", handleDragStart as EventListener)
    }
  }, [])

  if (!mounted) return null

  return (
    <>
      {/* Aviso de cópia */}
      {showWarning && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white px-6 py-4 rounded-lg shadow-lg z-50 animate-fade-in">
          <p className="text-center font-bold">Conteúdo protegido contra cópia!</p>
        </div>
      )}

      {/* CSS para prevenir seleção de texto em áreas específicas */}
      <style jsx global>{`
        .menu-item, .menu-item * {
          user-select: none;
          -webkit-user-select: none;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.3s ease-in-out;
        }
      `}</style>
    </>
  )
}

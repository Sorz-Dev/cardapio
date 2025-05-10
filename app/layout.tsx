import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Fresco | Especialidades Italianas",
  description:
    "Restaurante especializado em culinária italiana desde 1998. Cardápio variado, ingredientes de qualidade e ambiente acolhedor.",
  verification: {
    google: "googled0c6bb521e069626",
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  )
}

import "./globals.css"

import type React from "react"
import type { Metadata } from "next"
import { Inter, Josefin_Sans, Berkshire_Swash, Mulish, Alfa_Slab_One, Ultra } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { CookieConsent } from "@/components/cookie-consent"
import { getDictionary } from "@/dictionaries"
import "../globals.css"
import SkewProtection from "@/components/skew-protection"
import type { Locale } from "@/i18n"
import { WhatsAppButton } from "@/components/whatsapp-button"
import ScrollToTop from "@/components/scroll-to-top"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-padrao",
})
const berkshireSwash = Berkshire_Swash({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-decorativa",
})
const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-preco",
})
const alfaSlabOne = Alfa_Slab_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-alfa-slab",
})
const ultra = Ultra({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-ultra",
})

export const metadata: Metadata = {
  title: "Fresco | Especialidades Italianas",
  description:
    "Restaurante especializado em culinária italiana desde 1998. Cardápio variado, ingredientes de qualidade e ambiente acolhedor.",
  verification: {
    google: "googled0c6bb521e069626",
  },
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  // Fetch dictionary data on the server
  const dictionary = await getDictionary(params.lang)

  return (
    <html lang={params.lang || "pt"} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${inter.variable} ${josefinSans.variable} ${berkshireSwash.variable} ${mulish.variable} ${alfaSlabOne.variable} ${ultra.variable} font-sans bg-[#FFF9F1] dark:bg-[#1D1D1D]`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <ScrollToTop />
          <LanguageProvider initialLocale={params.lang}>
            <SkewProtection />
            <div className="flex min-h-screen flex-col">
              <Header dictionary={dictionary} />
              <main className="flex-1">{children}</main>
              <Footer dictionary={dictionary} />
              <WhatsAppButton locale={params.lang as Locale} />
              <CookieConsent
                locale={params.lang as Locale}
                translations={{
                  title: dictionary.cookies.title,
                  description: dictionary.cookies.description,
                  accept: dictionary.cookies.accept,
                  reject: dictionary.cookies.reject,
                  privacyPolicy: dictionary.cookies.privacyPolicy,
                  privacyPolicyLink: dictionary.cookies.privacyPolicyLink,
                }}
              />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

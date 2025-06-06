"use client"

import Link from "next/link"
import { useLanguage } from "./language-provider"

interface FooterProps {
  dictionary: {
    footer: {
      copyright: string
      terms: string
      privacy: string
    }
  }
}

export default function Footer({ dictionary }: FooterProps) {
  const { locale } = useLanguage()

  return (
    <>
      {/* Mapa */}
      <div className="w-full bg-stone-900 pt-8 dark:pt-4 pb-4">
        <div className="container mx-auto px-4">
          <div className="w-full h-[400px] rounded-md overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14631.63126850389!2d-46.65384371442871!3d-23.550519899999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sCentro%20Hist%C3%B3rico%20de%20S%C3%A3o%20Paulo%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1715300267456!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa do Centro de São Paulo"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Copyright e Links */}
      <footer className="w-full bg-black text-gray-400 py-4">
        <div className="container mx-auto px-4">
          {/* Mobile layout (vertical) */}
          <div className="flex flex-col items-center md:hidden">
            <p className="text-sm mb-2">{dictionary.footer.copyright}</p>
            <div className="flex items-center gap-4">
              <Link href={`/${locale}/terms`} className="text-sm text-white hover:underline" scroll={true}>
                {dictionary.footer.terms}
              </Link>
              <Link href={`/${locale}/privacy`} className="text-sm text-white hover:underline" scroll={true}>
                {dictionary.footer.privacy}
              </Link>
            </div>
          </div>

          {/* Tablet and Desktop layout (horizontal) */}
          <div className="hidden md:flex justify-between items-center">
            <p className="text-sm">{dictionary.footer.copyright}</p>
            <div className="flex items-center gap-6">
              <Link href={`/${locale}/terms`} className="text-sm text-white hover:underline" scroll={true}>
                {dictionary.footer.terms}
              </Link>
              <Link href={`/${locale}/privacy`} className="text-sm text-white hover:underline" scroll={true}>
                {dictionary.footer.privacy}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

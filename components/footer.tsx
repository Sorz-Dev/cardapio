"use client"

import Image from "next/image"

interface FooterProps {
  dictionary: {
    footer: {
      imageAlt: string
      developedBy: string
      by: string
      copyright: string
    }
  }
}

export default function Footer({ dictionary }: FooterProps) {
  return (
    <>
      {/* Mapa */}
      <div className="w-full bg-stone-900 pt-8 pb-2">
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

      {/* Copyright e Créditos */}
      <footer className="w-full bg-stone-900 text-white py-4">
        <div className="container mx-auto px-4 gap-2 flex flex-col md:flex-row justify-between items-start md:items-center">
          <p className="text-sm">Copyright © 2020 Modelo de Cardápio. Todos os direitos reservados.</p>
          <div className="flex items-center gap-2 md:mt-0 self-start">
            <p className="text-sm">Desenvolvido por</p>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-BQ5tziG65JihZU29nV0cNudcWgb3IX.webp"
              alt="Sorz Logo"
              width={40}
              height={30}
              className="h-3 w-auto"
            />
          </div>
        </div>
      </footer>
    </>
  )
}

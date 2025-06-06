"use client"

import Link from "next/link"
import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react"
import { useEffect, useRef } from "react"

export default function Footer() {
  const mapRef = useRef<HTMLIFrameElement>(null)

  // Iniciar o carregamento do mapa assim que o componente for montado
  useEffect(() => {
    // Garantir que o iframe do mapa comece a carregar imediatamente
    if (mapRef.current) {
      mapRef.current.setAttribute("loading", "eager")

      // Opcionalmente, podemos adicionar um atributo fetchPriority para aumentar a prioridade
      mapRef.current.setAttribute("fetchPriority", "high")
    }
  }, [])

  return (
    <footer className="w-full bg-gray-950 text-white">
      {/* Mapa (visível apenas em mobile) */}
      <div className="w-full pt-8 pb-0 md:hidden">
        <div className="max-w-[1296px] mx-auto px-4 md:px-10 lg:px-[60px]">
          <div className="w-full h-[400px] rounded-md overflow-hidden">
            <iframe
              ref={mapRef}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.173325904463!2d-47.16277008909088!3d-22.833076079220753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8bf3950fb5085%3A0xfd981968f9c778fd!2sR.%20Benedito%20Mateus%2C%20399%20-%20Jardim%20Santa%20Terezinha%20(Nova%20Veneza)%2C%20Sumar%C3%A9%20-%20SP%2C%2013180-220!5e0!3m2!1spt-BR!2sbr!4v1749234873529!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="eager"
              fetchPriority="high"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa - Av. Emílio Bôsco, Parque Yolanda, Sumaré - SP"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Informações e redes sociais */}
      <div className="max-w-[1296px] mx-auto px-4 md:px-10 lg:px-[60px] pt-[28px] pb-8 md:py-8">
        <div className="flex flex-col md:flex-row md:justify-between">
          {/* Coluna da esquerda - Informações */}
          <div className="md:flex-1">
            <h3 className="text-[#ff8904] text-[22px] md:text-[32px] mb-[24px] md:mb-6 font-decorativa">
              Frésco
            </h3>

            {/* Box com informações de contato */}
            <div className="space-y-[20px] md:space-y-6 mb-[24px] md:mb-6">
              <div className="flex items-start space-x-3">
                <MapPin className="text-[#ff8904] mt-1 flex-shrink-0 h-5 w-5" />
                <div>
                  <p className="text-white text-base">R. Benedito Mateus, 399</p>
                  <p className="text-gray-400 text-sm">Jardim Santa Terezinha (Nova Veneza),</p>
                  <p className="text-gray-400 text-sm">Sumaré - SP, 13180-220</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="text-[#ff8904] flex-shrink-0 h-5 w-5" />
                <p className="text-white text-base">(19) 99000-2216</p>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="text-[#ff8904] mt-1 flex-shrink-0 h-5 w-5" />
                <div>
                  <p className="text-white text-base">Horário de Funcionamento:</p>
                  <p className="text-gray-400 text-sm">Qua-Dom: 18h às 02h</p>
                  <p className="text-gray-400 text-sm">Segunda e Terça: Fechado</p>
                </div>
              </div>
            </div>

            {/* Box com redes sociais */}
            <div className="space-y-3">
              <h3 className="text-[#ff8904] text-lg font-bold">Siga-nos</h3>
              <div className="flex space-x-3">
                <span
                  className="bg-[#ff8904] rounded-full p-3 hover:bg-[#e17100] transition-colors cursor-default"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5 text-white" />
                </span>
                <span
                  className="bg-[#ff8904] rounded-full p-3 hover:bg-[#e17100] transition-colors cursor-default"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5 text-white" />
                </span>
              </div>
            </div>
          </div>

          {/* Coluna da direita - Mapa (visível apenas em tablet e desktop) */}
          <div className="hidden md:block md:w-[45%] lg:w-[48%]">
            <div className="w-full h-full rounded-md overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.173325904463!2d-47.16277008909088!3d-22.833076079220753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8bf3950fb5085%3A0xfd981968f9c778fd!2sR.%20Benedito%20Mateus%2C%20399%20-%20Jardim%20Santa%20Terezinha%20(Nova%20Veneza)%2C%20Sumar%C3%A9%20-%20SP%2C%2013180-220!5e0!3m2!1spt-BR!2sbr!4v1749234873529!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="eager"
                fetchPriority="high"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa - Av. Emílio Bôsco, Parque Yolanda, Sumaré - SP"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright e links */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-[1296px] mx-auto px-4 md:px-10 lg:px-[60px]">
          <div className="flex flex-col md:flex-row justify-between">
            <p className="text-gray-400 text-sm mb-4 md:mb-0 text-left max-w-[200px] md:max-w-none">
              © 2025 Frésco. Todos os direitos reservados.
            </p>
            <div className="flex w-full md:w-auto justify-between md:justify-end md:space-x-6">
              <Link href="/terms" className="text-gray-400 text-sm hover:text-[#ff8904] transition-colors">
                Termos de Uso
              </Link>
              <Link href="/privacy" className="text-gray-400 text-sm hover:text-[#ff8904] transition-colors">
                Política de Privacidade
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { format } from "date-fns"
import { ptBR, enUS } from "date-fns/locale"
import { getDictionary } from "@/dictionaries"

export async function generateMetadata({ params }: { params: { lang: string } }) {
  const dict = await getDictionary(params.lang)

  return {
    title: `${dict.terms.title} | Fresco`,
  }
}

export default async function TermsPage({ params }: { params: { lang: string } }) {
  const dict = await getDictionary(params.lang)
  const lang = params.lang

  const dateLocale = lang === "pt" ? ptBR : enUS
  const currentDate = format(new Date(), "dd MMMM yyyy", { locale: dateLocale })

  return (
    <div className="min-h-screen bg-[#FFF9F1] dark:bg-[#1D1D1D]">
      <div className="container px-4 py-8 md:py-12">
        <Link
          href={`/${lang}`}
          className="inline-flex items-center text-sm text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {lang === "pt" ? "Voltar para a página inicial" : "Back to home"}
        </Link>

        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-[#FCA336]">{dict.terms.title}</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
            {dict.terms.lastUpdated} {currentDate}
          </p>

          <div className="space-y-8">
            {dict.terms.content.map((section: any, index: number) => (
              <div key={index} className="space-y-2">
                <h2 className="text-xl font-semibold">{section.title}</h2>
                <p className="text-gray-700 dark:text-gray-300">{section.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

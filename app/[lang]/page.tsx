import Image from "next/image"
import Link from "next/link"
import { getDictionary } from "@/dictionaries"
import MenuItem from "@/components/menu-item"
import { Button } from "@/components/ui/button"
import { getFeaturedItems } from "@/data/menu-items"

export default async function Home({ params }: { params: { lang: string } }) {
  const dict = await getDictionary(params.lang)
  const featuredItems = getFeaturedItems(params.lang as "pt" | "en")

  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <div
        className="w-full h-[520px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url(https://d7hd88ngyqaw6jtz.public.blob.vercel-storage.com/restaurants/oficina-do-sabor/menu-sections/destaques-OLUrlESY79a82Q3Wvj203FDOCkuwNI.jpg)",
        }}
      >
        <div className="flex flex-col items-center gap-3 text-center">
          <Image
            src="https://d7hd88ngyqaw6jtz.public.blob.vercel-storage.com/restaurants/oficina-do-sabor/logo-hero.png"
            alt="Fresco Logo"
            width={230}
            height={100}
            className="w-[230px]"
          />
          <h2 className="text-4xl text-[#FE8800] font-padrao">{dict.hero.subtitle}</h2>
          <p className="text-2xl text-white font-padrao italic">{dict.hero.tagline}</p>
        </div>
      </div>

      {/* About Section */}
      <section className="container mx-auto px-4 py-8 mb-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 h-fit">
          <div className="flex flex-col gap-2 h-fit self-center">
            <p className="text-xl">{dict.about.highlight}</p>
            <h2 className="text-5xl text-[#FE8800] font-decorativa">{dict.about.title}</h2>
            <p className="text-xl font-medium">{dict.about.subtitle}</p>
            <p className="text-lg">{dict.about.description}</p>
          </div>

          <div
            className="hidden lg:flex h-[420px] rounded-2xl bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://d7hd88ngyqaw6jtz.public.blob.vercel-storage.com/restaurants/oficina-do-sabor/pizza.jpg)",
            }}
          ></div>

          <div
            className="h-[420px] rounded-2xl bg-cover bg-center flex flex-col justify-end pb-6 text-center"
            style={{
              backgroundImage:
                "url(https://d7hd88ngyqaw6jtz.public.blob.vercel-storage.com/restaurants/oficina-do-sabor/horario.jpg)",
            }}
          >
            <h3 className="text-6xl text-white font-decorativa">{dict.hours.title}</h3>
            <p className="text-2xl text-white">{dict.hours.description}</p>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="container mx-auto px-2 flex flex-col items-center mb-6 dark:mb-2">
        <div className="flex flex-col items-center gap-2 mb-4">
          <Image
            src="https://d7hd88ngyqaw6jtz.public.blob.vercel-storage.com/restaurants/oficina-do-sabor/menu-leaf.png"
            alt="Menu leaf icon"
            width={108}
            height={68}
          />
          <h2 className="text-4xl text-[#FE8800] font-decorativa">{dict.menu.title}</h2>
          <p className="text-xl font-bold text-center">{dict.menu.subtitle}</p>
        </div>

        <div className="w-full max-w-6xl mb-6">
          <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {featuredItems.map((item) => (
              <MenuItem key={item.id} item={item} dictionary={dict} />
            ))}
          </div>
        </div>

        <Link href={`/${params.lang}/cardapio`} scroll={true}>
          <Button className="bg-[#FCA336] hover:[#FF9C20] text-white rounded-2xl px-6 py-3 text-xl">
            {dict.menu.fullMenu}
          </Button>
        </Link>
      </section>
    </div>
  )
}

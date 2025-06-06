import Image from "next/image"
import { getDictionary } from "@/dictionaries"
// Update the import to use the new component
import MenuItem from "@/components/menu-item"
import { getItemsBySection } from "@/data/menu-items"
import { locales, defaultLocale } from "@/i18n"

export default async function MenuPage({ params }: { params: { lang: string } }) {
  // Ensure we have a valid locale, defaulting to 'pt' if not
  const lang = params.lang && locales.includes(params.lang as any) ? params.lang : defaultLocale
  const dict = await getDictionary(lang)
  const locale = lang as "pt" | "en"

  const pizzaItems = getItemsBySection("pizzas", locale)
  const lancheItems = getItemsBySection("lanches", locale)
  const porcaoItems = getItemsBySection("porcoes", locale)

  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <div
        className="w-full h-[520px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url(https://d7hd88ngyqaw6jtz.public.blob.vercel-storage.com/restaurants/oficina-do-sabor/menu-sections/cardapio-hero.jpg)",
        }}
      >
        <div className="flex flex-col items-center gap-5">
          <Image
            src="https://d7hd88ngyqaw6jtz.public.blob.vercel-storage.com/restaurants/oficina-do-sabor/cardapio-logo.png"
            alt="Cardápio Logo"
            width={230}
            height={100}
            className="w-[230px]"
          />
          <Image
            src="https://d7hd88ngyqaw6jtz.public.blob.vercel-storage.com/restaurants/oficina-do-sabor/barra.png"
            alt="Barra decorativa"
            width={222}
            height={20}
          />
        </div>
      </div>

      {/* Pizzas Section */}
      <section className="container mx-auto px-4 py-8">
        <div
          className="w-full h-[60px] rounded-md overflow-hidden bg-rose-600 dark:bg-rose-700 flex items-center justify-center mb-4"
          style={{
            backgroundImage:
              "url(https://d7hd88ngyqaw6jtz.public.blob.vercel-storage.com/restaurants/oficina-do-sabor/menu-sections/pizzas-b4BCPCHCHdmFEJz8w7qf6KI9A3tgx1.jpg)",
            borderRadius: "0.375rem", // Garante que todos os cantos tenham o mesmo raio
          }}
        >
          <h2 className="text-3xl text-white font-bold">{dict.menu.categories.pizzas}</h2>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl mx-auto">
          {pizzaItems.map((item) => (
            <MenuItem key={item.id} item={item} dictionary={dict} />
          ))}
        </div>
      </section>

      {/* Burgers Section */}
      <section className="container mx-auto px-4 py-2">
        <div
          className="w-full h-[60px] rounded-md overflow-hidden bg-orange-700 dark:bg-orange-800 flex items-center justify-center mb-4"
          style={{
            backgroundImage:
              "url(https://d7hd88ngyqaw6jtz.public.blob.vercel-storage.com/restaurants/oficina-do-sabor/menu-sections/lanches-9N0hPwSBGAgpzvYZkPbv7UB32TADgM.jpg)",
            borderRadius: "0.375rem", // Garante que todos os cantos tenham o mesmo raio
          }}
        >
          <h2 className="text-3xl text-white font-bold">{dict.menu.categories.burgers}</h2>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl mx-auto">
          {lancheItems.map((item) => (
            <MenuItem key={item.id} item={item} dictionary={dict} />
          ))}
        </div>
      </section>

      {/* Portions Section */}
      <section className="container mx-auto px-4 py-8">
        <div
          className="w-full h-[60px] rounded-md overflow-hidden bg-purple-800 dark:bg-purple-900 flex items-center justify-center mb-4"
          style={{
            backgroundImage:
              "url(https://d7hd88ngyqaw6jtz.public.blob.vercel-storage.com/restaurants/oficina-do-sabor/menu-sections/porcoes-D0ogwEV4yVdWASQvcPmmfIRr5SKciK.jpg)",
            borderRadius: "0.375rem", // Garante que todos os cantos tenham o mesmo raio
          }}
        >
          <h2 className="text-3xl text-white font-bold">{dict.menu.categories.portions}</h2>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl mx-auto mb-4">
          {porcaoItems.map((item) => (
            <MenuItem key={item.id} item={item} dictionary={dict} />
          ))}
        </div>
      </section>
    </div>
  )
}

import React from "react"
import { getDictionary } from "@/dictionaries"
import { getItemsBySection } from "@/data/menu-items"

export default async function MenuLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  const dictionary = await getDictionary(params.lang)
  const locale = params.lang as "pt" | "en"

  const pizzaItems = getItemsBySection("pizzas", locale)
  const lancheItems = getItemsBySection("lanches", locale)
  const porcaoItems = getItemsBySection("porcoes", locale)

  const items = {
    pizzaItems,
    lancheItems,
    porcaoItems,
  }

  // Modificamos o children para passar as props necessárias
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { dictionary, items, params })
    }
    return child
  })

  return <>{childrenWithProps}</>
}

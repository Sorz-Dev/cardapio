import "server-only"

const dictionaries = {
  pt: () => import("./pt.json").then((module) => module.default),
  en: () => import("./en.json").then((module) => module.default),
}

export const getDictionary = async (locale: string) => {
  return (dictionaries[locale as keyof typeof dictionaries] || dictionaries.pt)()
}

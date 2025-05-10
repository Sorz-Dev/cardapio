import type { StatusType } from "@/components/tags/status-tag"
import type { PizzaSize } from "@/components/tags/size-tag"

export type MenuSection = "pizzas" | "lanches" | "porcoes"
export type Locale = "pt" | "en"

export interface MenuItemTranslation {
  title: string
  description: string
}

export interface MenuItem {
  id: string
  translations: Record<Locale, MenuItemTranslation>
  price: string
  oldPrice?: string
  image: string
  section: MenuSection
  status?: StatusType
  size?: PizzaSize
  featured: boolean
  priority: number
}

export const menuItems: MenuItem[] = [
  // PIZZAS
  {
    id: "hot-dog",
    translations: {
      pt: {
        title: "Hot Dog",
        description: "Molho de tomate, mussarela, salsicha, milho, batata palha, ketchup, mostarda, azeitona e orégano",
      },
      en: {
        title: "Hot Dog",
        description: "Tomato sauce, mozzarella, sausage, corn, potato sticks, ketchup, mustard, olives and oregano",
      },
    },
    price: "50,00",
    image:
      "https://d7hd88ngyqaw6jtz.public.blob.vercel-storage.com/restaurants/oficina-do-sabor/products/hot-dog-4SzNaR4MSdB2JSVRKNStkGRaLlRMB0.jpg",
    section: "pizzas",
    status: "novidade",
    size: "media",
    featured: true,
    priority: 0,
  },
  {
    id: "bacon-ovo",
    translations: {
      pt: {
        title: "Bacon c/ Ovo",
        description: "Molho de tomate, mussarela, bacon, champignon, pimentão vermelho, cebola roxa e salsinha",
      },
      en: {
        title: "Bacon w/ Egg",
        description: "Tomato sauce, mozzarella, bacon, mushrooms, red bell pepper, red onion and parsley",
      },
    },
    price: "50,00",
    image:
      "https://d7hd88ngyqaw6jtz.public.blob.vercel-storage.com/restaurants/oficina-do-sabor/products/bacon-ovo-4SzNaR4MSdB2JSVRKNStkGRaLlRMB0.jpg",
    section: "pizzas",
    size: "media",
    featured: false,
    priority: 0,
  },
  {
    id: "frango-catupiry",
    translations: {
      pt: {
        title: "Frango c/ Catupiry",
        description: "Molho de tomate, mussarela, calabresa, cebola, azeitona e orégano",
      },
      en: {
        title: "Chicken w/ Catupiry Cheese",
        description: "Tomato sauce, mozzarella, pepperoni, onion, olives and oregano",
      },
    },
    price: "35,00",
    oldPrice: "50,00",
    image:
      "https://d7hd88ngyqaw6jtz.public.blob.vercel-storage.com/restaurants/oficina-do-sabor/products/frango-catupiry-F2C5P1StW6oCrUHfvvVwPlE3cMkrFy.jpg",
    section: "pizzas",
    status: "promocao",
    size: "media",
    featured: true,
    priority: 0,
  },
  {
    id: "calabresa-acebolada",
    translations: {
      pt: {
        title: "Calabresa Acebolada",
        description: "Molho de tomate, mussarela, calabresa, cebola e orégano",
      },
      en: {
        title: "Pepperoni with Onions",
        description: "Tomato sauce, mozzarella, pepperoni, onion and oregano",
      },
    },
    price: "50,00",
    image:
      "https://d7hd88ngyqaw6jtz.public.blob.vercel-storage.com/restaurants/oficina-do-sabor/products/calabresa-acebolada-4SzNaR4MSdB2JSVRKNStkGRaLlRMB0.jpg",
    section: "pizzas",
    size: "media",
    featured: false,
    priority: 0,
  },
  {
    id: "carne-seca-cream-cheese",
    translations: {
      pt: {
        title: "Carne Seca c/ Cream Cheese",
        description: "Molho de tomate, mussarela, cebola, carne seca desfiada, cream cheese e orégano.",
      },
      en: {
        title: "Jerked Beef w/ Cream Cheese",
        description: "Tomato sauce, mozzarella, onion, shredded jerked beef, cream cheese and oregano.",
      },
    },
    price: "50,00",
    image:
      "https://d7hd88ngyqaw6jtz.public.blob.vercel-storage.com/restaurants/oficina-do-sabor/products/carne-seca-cream-cheese-S8EnAjfeePbMEUPPi3tG0Sm47aHG6a.jpg",
    section: "pizzas",
    size: "media",
    featured: false,
    priority: 0,
  },
  {
    id: "portuguesa",
    translations: {
      pt: {
        title: "Portuguesa",
        description: "Molho de tomate, mussarela, presunto, ovo, azeitona verde, ervilhas, cebola, orégano",
      },
      en: {
        title: "Portuguese",
        description: "Tomato sauce, mozzarella, ham, egg, green olives, peas, onion, oregano",
      },
    },
    price: "50,00",
    image:
      "https://d7hd88ngyqaw6jtz.public.blob.vercel-storage.com/restaurants/oficina-do-sabor/products/portuguesa-4SzNaR4MSdB2JSVRKNStkGRaLlRMB0.jpg",
    section: "pizzas",
    size: "media",
    featured: false,
    priority: 0,
  },

  // LANCHES
  {
    id: "bbb-prime",
    translations: {
      pt: {
        title: "BBB Prime",
        description: "Pão brioche, hambúrguer artesanal, maionese da casa, queijo cheddar, cebola e molho barbecue",
      },
      en: {
        title: "BBB Prime",
        description: "Brioche bun, artisanal burger, house mayo, cheddar cheese, onion and barbecue sauce",
      },
    },
    price: "24,90",
    image:
      "https://d7hd88ngyqaw6jtz.public.blob.vercel-storage.com/restaurants/oficina-do-sabor/products/bbb-prime-4SzNaR4MSdB2JSVRKNStkGRaLlRMB0.jpg",
    section: "lanches",
    status: "novidade",
    featured: false,
    priority: 0,
  },
  {
    id: "pf-burg",
    translations: {
      pt: {
        title: "PF Burg",
        description: "Pão brioche, hambúrguer artesanal, alface, queijo cheddar, picles e molho especial",
      },
      en: {
        title: "PF Burg",
        description: "Brioche bun, artisanal burger, lettuce, cheddar cheese, pickles and special sauce",
      },
    },
    price: "24,90",
    image:
      "https://d7hd88ngyqaw6jtz.public.blob.vercel-storage.com/restaurants/oficina-do-sabor/products/pf-burg-4SzNaR4MSdB2JSVRKNStkGRaLlRMB0.jpg",
    section: "lanches",
    status: "promocao",
    featured: false,
    priority: 0,
  },
  {
    id: "queridinho",
    translations: {
      pt: {
        title: "Queridinho",
        description: "Pão brioche, hambúrguer artesanal, alface, queijo cheddar, picles e molho especial",
      },
      en: {
        title: "House Favorite",
        description: "Brioche bun, artisanal burger, lettuce, cheddar cheese, pickles and special sauce",
      },
    },
    price: "14,90",
    oldPrice: "24,90",
    image:
      "https://d7hd88ngyqaw6jtz.public.blob.vercel-storage.com/restaurants/oficina-do-sabor/products/queridinho-YZ7UJ4C0QCab6BqCGIbJ887jCFfnsb.png",
    section: "lanches",
    status: "promocao",
    featured: true,
    priority: 0,
  },
  {
    id: "salada-especial",
    translations: {
      pt: {
        title: "Salada Especial",
        description: "Pão brioche, hambúrguer artesanal, maionese da casa, alface, tomate e queijo cheddar",
      },
      en: {
        title: "Special Salad",
        description: "Brioche bun, artisanal burger, house mayo, lettuce, tomato and cheddar cheese",
      },
    },
    price: "24,90",
    image:
      "https://d7hd88ngyqaw6jtz.public.blob.vercel-storage.com/restaurants/oficina-do-sabor/products/salada-especial-4SzNaR4MSdB2JSVRKNStkGRaLlRMB0.jpg",
    section: "lanches",
    featured: false,
    priority: 0,
  },
  {
    id: "fabuloso-onion",
    translations: {
      pt: {
        title: "Fabuloso Onion",
        description: "Pão brioche, hambúrguer artesanal, maionese da casa, anéis de cebola e molho cheddar",
      },
      en: {
        title: "Fabulous Onion",
        description: "Brioche bun, artisanal burger, house mayo, onion rings and cheddar sauce",
      },
    },
    price: "24,90",
    image:
      "https://d7hd88ngyqaw6jtz.public.blob.vercel-storage.com/restaurants/oficina-do-sabor/products/fabuloso-onion-4SzNaR4MSdB2JSVRKNStkGRaLlRMB0.jpg",
    section: "lanches",
    featured: false,
    priority: 0,
  },
  {
    id: "bacon-piry",
    translations: {
      pt: {
        title: "Bacon Piry",
        description: "Pão brioche, hambúrguer artesanal, requeijão cremoso e bacon",
      },
      en: {
        title: "Bacon Piry",
        description: "Brioche bun, artisanal burger, creamy cheese spread and bacon",
      },
    },
    price: "24,90",
    image:
      "https://d7hd88ngyqaw6jtz.public.blob.vercel-storage.com/restaurants/oficina-do-sabor/products/bacon-piry-dMbYvTKvcge6mLqjthYjCxb5Mnq7j8.jpg",
    section: "lanches",
    featured: false,
    priority: 0,
  },

  // PORÇÕES
  {
    id: "tiras-de-frango",
    translations: {
      pt: {
        title: "Tiras de Frango",
        description: "Tiras Crocantes de Frango, acompanha nosso original creme de alho",
      },
      en: {
        title: "Chicken Strips",
        description: "Crispy Chicken Strips, served with our original garlic cream",
      },
    },
    price: "45,90",
    image:
      "https://d7hd88ngyqaw6jtz.public.blob.vercel-storage.com/restaurants/oficina-do-sabor/products/tiras-de-frango-4SzNaR4MSdB2JSVRKNStkGRaLlRMB0.jpg",
    section: "porcoes",
    status: "novidade",
    featured: false,
    priority: 0,
  },
  {
    id: "batata-frita",
    translations: {
      pt: {
        title: "Batata Frita",
        description: "Batatas Fritas Crocantes, acompanha nosso original creme de alho",
      },
      en: {
        title: "French Fries",
        description: "Crispy French Fries, served with our original garlic cream",
      },
    },
    price: "39,90",
    image:
      "https://d7hd88ngyqaw6jtz.public.blob.vercel-storage.com/restaurants/oficina-do-sabor/products/batata-frita-4SzNaR4MSdB2JSVRKNStkGRaLlRMB0.jpg",
    section: "porcoes",
    status: "promocao",
    featured: false,
    priority: 0,
  },
  {
    id: "pastel-gorgon",
    translations: {
      pt: {
        title: "Pastel Gorgon",
        description:
          "Deliciosos e Crocantes Pastéis. 6 unidades de Carne e 6 unidades de Queijo, acompanha o nosso original creme",
      },
      en: {
        title: "Gorgon Pastry",
        description:
          "Delicious and Crispy Pastries. 6 units of Meat and 6 units of Cheese, served with our original cream",
      },
    },
    price: "49,90",
    image:
      "https://d7hd88ngyqaw6jtz.public.blob.vercel-storage.com/restaurants/oficina-do-sabor/products/pastel-gorgon-4SzNaR4MSdB2JSVRKNStkGRaLlRMB0.jpg",
    section: "porcoes",
    featured: false,
    priority: 0,
  },
  {
    id: "mussarela-sticks",
    translations: {
      pt: {
        title: "Mussarela Sticks",
        description: "Palitos Crocantes de mussarela. Acompanha nosso original creme de alho",
      },
      en: {
        title: "Mozzarella Sticks",
        description: "Crispy mozzarella sticks. Served with our original garlic cream",
      },
    },
    price: "49,90",
    image:
      "https://d7hd88ngyqaw6jtz.public.blob.vercel-storage.com/restaurants/oficina-do-sabor/products/mussarela-sticks-4SzNaR4MSdB2JSVRKNStkGRaLlRMB0.jpg",
    section: "porcoes",
    featured: false,
    priority: 0,
  },
  {
    id: "linguica-na-cachaca",
    translations: {
      pt: {
        title: "Linguiça na Cachaça",
        description:
          "Deliciosa linguiça flambada na cachaça, acompanha vinagrete, farofa, cesta de pães e nosso original creme de alho.",
      },
      en: {
        title: "Sausage in Cachaça",
        description:
          "Delicious sausage flambéed in cachaça, served with vinaigrette, farofa, bread basket and our original garlic cream.",
      },
    },
    price: "45,90",
    image:
      "https://d7hd88ngyqaw6jtz.public.blob.vercel-storage.com/restaurants/oficina-do-sabor/products/linguica-na-cachaca-lvSY6JeXhcZdnjIonnQW5SWoPnx6gE.jpg",
    section: "porcoes",
    status: "limitado",
    featured: true,
    priority: 0,
  },
  {
    id: "batata-queijos-bacon",
    translations: {
      pt: {
        title: "Batata com Queijos e Bacon",
        description: "Nossa famosa cebola australiana, recheada com batata frita, mix de queijos, torresmo e cebolinha",
      },
      en: {
        title: "Potato with Cheese and Bacon",
        description: "Our famous blooming onion, stuffed with french fries, cheese mix, pork rinds and chives",
      },
    },
    price: "64,90",
    image:
      "https://d7hd88ngyqaw6jtz.public.blob.vercel-storage.com/restaurants/oficina-do-sabor/products/batata-queijos-bacon-4SzNaR4MSdB2JSVRKNStkGRaLlRMB0.jpg",
    section: "porcoes",
    featured: false,
    priority: 0,
  },
  {
    id: "cebola-australiana-suprema",
    translations: {
      pt: {
        title: "Cebola Australiana Suprema",
        description:
          "Nossa famosa cebola australiana, recheada com batata frita, mix de queijos, torresmo e cebolinha.",
      },
      en: {
        title: "Supreme Blooming Onion",
        description: "Our famous blooming onion, stuffed with french fries, cheese mix, pork rinds and chives.",
      },
    },
    price: "89,90",
    image:
      "https://d7hd88ngyqaw6jtz.public.blob.vercel-storage.com/restaurants/oficina-do-sabor/products/cebola-australiana-suprema-kNWIiUcLJETzyoTI5gbgHGxNmUgfNO.jpg",
    section: "porcoes",
    status: "limitado",
    featured: true,
    priority: 0,
  },
  {
    id: "tabua-do-jorge",
    translations: {
      pt: {
        title: "Tábua do Jorge",
        description: "Picadinho em tiras coberto com batata frita crocante e acompanha vinagrete, farofa, cesta...",
      },
      en: {
        title: "Jorge's Board",
        description:
          "Sliced meat strips covered with crispy french fries and served with vinaigrette, farofa, bread basket...",
      },
    },
    price: "159,90",
    image:
      "https://d7hd88ngyqaw6jtz.public.blob.vercel-storage.com/restaurants/oficina-do-sabor/products/tabua-do-jorge-4SzNaR4MSdB2JSVRKNStkGRaLlRMB0.jpg",
    section: "porcoes",
    status: "limitado",
    featured: false,
    priority: 0,
  },
]

// Função para obter itens por seção com tradução
export function getItemsBySection(section: MenuSection, locale: Locale): (MenuItem & MenuItemTranslation)[] {
  return menuItems
    .filter((item) => item.section === section)
    .sort((a, b) => {
      // Primeiro por prioridade (maior para menor)
      if (b.priority !== a.priority) {
        return b.priority - a.priority
      }
      // Depois por ordem alfabética (usando o título traduzido)
      return a.translations[locale].title.localeCompare(b.translations[locale].title)
    })
    .map((item) => ({
      ...item,
      ...item.translations[locale],
    }))
}

// Função para obter itens em destaque com tradução
export function getFeaturedItems(locale: Locale): (MenuItem & MenuItemTranslation)[] {
  return menuItems
    .filter((item) => item.featured)
    .sort((a, b) => {
      // Primeiro por prioridade (maior para menor)
      if (b.priority !== a.priority) {
        return b.priority - a.priority
      }
      // Depois por ordem alfabética (usando o título traduzido)
      return a.translations[locale].title.localeCompare(b.translations[locale].title)
    })
    .map((item) => ({
      ...item,
      ...item.translations[locale],
    }))
}

// Função para obter um item por ID com tradução
export function getItemById(id: string, locale: Locale): (MenuItem & MenuItemTranslation) | undefined {
  const item = menuItems.find((item) => item.id === id)
  if (!item) return undefined

  return {
    ...item,
    ...item.translations[locale],
  }
}

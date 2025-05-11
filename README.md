# Fresco - Cardápio Digital

![Fresco Logo](https://d7hd88ngyqaw6jtz.public.blob.vercel-storage.com/restaurants/oficina-do-sabor/logo-main-torLP0dMlUbf2X03ILs5VRMAuBj7dl.png)

## 🇧🇷 Português

### Sobre o Projeto

Fresco é um cardápio digital responsivo para restaurantes, desenvolvido com Next.js e Tailwind CSS. O projeto oferece uma interface moderna e intuitiva para visualização de cardápios, com suporte a múltiplos idiomas (português e inglês) e modo escuro.

### Tecnologias Utilizadas

- **Next.js 14**: Framework React com App Router
- **TypeScript**: Para tipagem estática
- **Tailwind CSS**: Para estilização
- **Shadcn/UI**: Componentes de UI reutilizáveis
- **Next Intl**: Para internacionalização
- **Lucide React**: Para ícones
- **Vercel**: Para hospedagem e deploy

### Funcionalidades

- 🌐 **Multilíngue**: Suporte completo para português e inglês
- 🌓 **Modo Escuro/Claro**: Alternância entre temas
- 📱 **Design Responsivo**: Adaptado para dispositivos móveis, tablets e desktops
- 🖼️ **Lightbox de Imagens**: Visualização ampliada dos itens do cardápio
- 🏷️ **Tags Especiais**: Indicadores para novidades, itens limitados e promoções
- 🍕 **Categorias de Menu**: Organização por tipos de alimentos (pizzas, lanches, porções)
- 🔍 **Detalhes dos Produtos**: Descrições detalhadas, preços e informações adicionais

### Instalação e Execução

\`\`\`bash
# Clone o repositório
git clone https://github.com/seu-usuario/fresco-cardapio.git

# Entre no diretório do projeto
cd fresco-cardapio

# Instale as dependências
npm install

# Execute o servidor de desenvolvimento
npm run dev
\`\`\`

Acesse `http://localhost:3000` no seu navegador para ver o aplicativo em execução.

### Estrutura do Projeto

\`\`\`
fresco-cardapio/
├── app/                    # Diretório principal do App Router
│   ├── [lang]/             # Rotas dinâmicas para idiomas
│   │   ├── cardapio/       # Página do cardápio completo
│   │   └── page.tsx        # Página inicial
├── components/             # Componentes reutilizáveis
│   ├── tags/               # Componentes de tags (status, tamanho, desconto)
│   ├── ui/                 # Componentes de UI (shadcn)
│   └── ...                 # Outros componentes
├── data/                   # Dados do cardápio
├── dictionaries/           # Arquivos de tradução
├── hooks/                  # Hooks personalizados
├── lib/                    # Utilitários e funções auxiliares
├── middleware.ts           # Middleware para roteamento de idiomas
└── ...
\`\`\`

### Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

### Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para detalhes.

---

## 🇬🇧 English

### About the Project

Fresco is a responsive digital menu for restaurants, developed with Next.js and Tailwind CSS. The project offers a modern and intuitive interface for menu visualization, with support for multiple languages (Portuguese and English) and dark mode.

### Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: For static typing
- **Tailwind CSS**: For styling
- **Shadcn/UI**: Reusable UI components
- **Next Intl**: For internationalization
- **Lucide React**: For icons
- **Vercel**: For hosting and deployment

### Features

- 🌐 **Multilingual**: Full support for Portuguese and English
- 🌓 **Dark/Light Mode**: Theme switching
- 📱 **Responsive Design**: Adapted for mobile devices, tablets, and desktops
- 🖼️ **Image Lightbox**: Enlarged view of menu items
- 🏷️ **Special Tags**: Indicators for new items, limited items, and promotions
- 🍕 **Menu Categories**: Organization by food types (pizzas, burgers, portions)
- 🔍 **Product Details**: Detailed descriptions, prices, and additional information

### Installation and Execution

\`\`\`bash
# Clone the repository
git clone https://github.com/your-username/fresco-menu.git

# Enter the project directory
cd fresco-menu

# Install dependencies
npm install

# Run the development server
npm run dev
\`\`\`

Access `http://localhost:3000` in your browser to see the application running.

### Project Structure

\`\`\`
fresco-menu/
├── app/                    # Main App Router directory
│   ├── [lang]/             # Dynamic routes for languages
│   │   ├── cardapio/       # Full menu page
│   │   └── page.tsx        # Home page
├── components/             # Reusable components
│   ├── tags/               # Tag components (status, size, discount)
│   ├── ui/                 # UI components (shadcn)
│   └── ...                 # Other components
├── data/                   # Menu data
├── dictionaries/           # Translation files
├── hooks/                  # Custom hooks
├── lib/                    # Utilities and helper functions
├── middleware.ts           # Middleware for language routing
└── ...
\`\`\`

### Contributions

Contributions are welcome! Feel free to open issues or send pull requests.

1. Fork the project
2. Create a branch for your feature (`git checkout -b feature/new-functionality`)
3. Commit your changes (`git commit -m 'Add new functionality'`)
4. Push to the branch (`git push origin feature/new-functionality`)
5. Open a Pull Request

### License

This project is licensed under the MIT License - see the LICENSE file for details.

# 🚀 Giorgio's Portfolio

<div align="center">

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white)

**Um portfólio moderno e responsivo construído com as tecnologias mais recentes.**

[🌐 Ver Demo](https://giorgioeab.github.io) • [📧 Contato](mailto:giorgio.desenvolvedor@gmail.com)

</div>

---

## ✨ Features

- 🌙 **Dark/Light Mode** - Alternância suave entre temas com persistência local
- 🌍 **Multi-idioma** - Suporte para Português (BR), Inglês e Espanhol
- 🎨 **Design Glassmorphism** - UI moderna com efeitos de vidro fosco
- 📱 **Totalmente Responsivo** - Adaptado para todos os dispositivos
- ⚡ **Animações Fluidas** - Transições elegantes com Framer Motion
- 🔍 **SEO Friendly** - Estrutura otimizada para mecanismos de busca
- 🚀 **Performance** - Build otimizado com Vite para carregamento rápido

## 🛠️ Tecnologias

| Categoria | Tecnologias |
|-----------|-------------|
| **Frontend** | React 19, TypeScript |
| **Styling** | Tailwind CSS 4, CSS Modules |
| **Animations** | Framer Motion |
| **i18n** | i18next, react-i18next |
| **Icons** | Lucide React |
| **Build** | Vite 7, ESBuild |
| **Linting** | ESLint, TypeScript ESLint |

## 📁 Estrutura do Projeto

```
src/
├── assets/          # Imagens e recursos estáticos
├── components/      # Componentes reutilizáveis
│   ├── ui/          # Componentes de UI base
│   ├── Footer.tsx
│   ├── GlassCard.tsx
│   └── Navbar.tsx
├── context/         # Contextos React (Theme)
├── locales/         # Arquivos de tradução (en, es, pt_br)
├── sections/        # Seções da página
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Hero.tsx
│   ├── Projects.tsx
│   └── Skills.tsx
├── types/           # Definições de tipos TypeScript
├── App.tsx          # Componente principal
├── i18n.ts          # Configuração de internacionalização
└── main.tsx         # Entry point
```

## 🚀 Início Rápido

### Pré-requisitos

- Node.js 18+ 
- pnpm (recomendado) ou npm

### Instalação

```bash
# Clone o repositório
git clone https://github.com/Giorgioeab/Giorgioeab.github.io.git

# Entre no diretório
cd Giorgioeab.github.io

# Instale as dependências
pnpm install

# Inicie o servidor de desenvolvimento
pnpm dev
```

### Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `pnpm dev` | Inicia o servidor de desenvolvimento |
| `pnpm build` | Gera o build de produção |
| `pnpm preview` | Visualiza o build localmente |
| `pnpm lint` | Executa o linter |

## 🎨 Customização

### Alterando Cores

O tema utiliza Tailwind CSS. As cores principais podem ser customizadas através das classes de gradiente:

```tsx
// Gradiente principal (blue → purple)
className="bg-gradient-to-r from-blue-600 to-purple-600"
```

### Adicionando Traduções

1. Edite os arquivos em `src/locales/`
2. Adicione as novas chaves em todos os idiomas (`en.json`, `es.json`, `pt_br.json`)

### Adicionando Projetos

Edite a seção de projetos em `src/sections/Projects.tsx` e adicione ao array `projects`:

```tsx
{
  title: t('projects.items.X.title'),
  description: t('projects.items.X.description'),
  tech: ['React', 'Node.js'],
  image: 'url-da-imagem',
  links: { demo: '#', github: '#' }
}
```

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">

Feito com ❤️ por [Giorgio](https://github.com/Giorgioeab)

⭐ Se este projeto te ajudou, considere dar uma estrela!

</div>

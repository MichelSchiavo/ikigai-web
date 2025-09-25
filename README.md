# IKIGAI - Forje seu Destino

Uma experiência imersiva no universo de Kimetsu no Yaiba, desenvolvida com Next.js 15, TypeScript e Tailwind CSS.

## 🗡️ Sobre o Projeto

IKIGAI é um site temático inspirado no universo de Demon Slayer (Kimetsu no Yaiba), onde os usuários podem explorar o mundo dos Caçadores de Demônios, conhecer as diferentes técnicas de respiração e os temidos Onis.

## 🎨 Tecnologias Utilizadas

- **Next.js 15**: Framework React de última geração
- **TypeScript**: Tipagem estática para maior segurança
- **Tailwind CSS 4**: Framework CSS utilitário
- **React 19**: Biblioteca React mais recente
- **Bibliotecas Externas**:
  - GSAP (animações)
  - Swiper (carrossel)
  - AOS (animações on scroll)
  - Typed.js (efeito de digitação)
  - Font Awesome (ícones)

## 🚀 Como Executar

1. **Instalar dependências**:
```bash
npm install
```

2. **Executar em modo de desenvolvimento**:
```bash
npm run dev
```

3. **Build para produção**:
```bash
npm run build
```

4. **Executar build**:
```bash
npm start
```

O projeto estará disponível em: http://localhost:3000

## 🎭 Características

- **Design Responsivo**: Adaptado para desktop e mobile
- **Animações Interativas**: Cursor customizado, cards 3D e transições fluidas
- **Carrossel de Técnicas**: Exibição das diferentes respirações dos Pilares
- **Efeitos Visuais**: Partículas, gradientes e hover effects
- **Tipografia Temática**: Fonte japonesa Shippori Mincho
- **SEO Otimizado**: Meta tags e Open Graph configurados

## 📱 Seções

1. **Hero**: Apresentação com efeito de digitação
2. **A Jornada**: História e contexto do universo
3. **Pilares**: Carrossel com as técnicas de respiração
4. **A Ameaça**: Cards interativos dos principais Onis
5. **Nossa Lenda**: Lore personalizada do projeto

## 🎨 Paleta de Cores

- **Primária**: #A62639 (Vermelho Sangue)
- **Background**: #100a0a (Preto Profundo)
- **Texto**: #f1f1f1 (Branco Suave)
- **Accent**: #4d1a24 (Vermelho Escuro)

## 🛠️ Estrutura do Projeto

```
src/
├── app/
│   ├── globals.css      # Estilos globais
│   ├── layout.tsx       # Layout raiz
│   ├── page.tsx         # Página principal
│   └── viewport.ts      # Configuração do viewport
├── components/
│   ├── About.tsx        # Seção sobre
│   ├── ClientComponents.tsx # Wrapper dos componentes
│   ├── CustomCursor.tsx # Cursor personalizado
│   ├── ExternalScripts.tsx # Scripts externos
│   ├── Footer.tsx       # Rodapé
│   ├── Header.tsx       # Cabeçalho
│   ├── Hero.tsx         # Seção hero
│   ├── Lore.tsx         # Seção lore
│   ├── Onis.tsx         # Seção dos onis
│   └── Pilares.tsx      # Seção pilares
├── data/
│   └── index.ts         # Dados das respirações e onis
└── types/
    ├── global.d.ts      # Declarações globais
    └── index.ts         # Interfaces TypeScript
```

## 🎯 Adaptações do HTML Original

O projeto foi completamente adaptado do HTML estático original para Next.js, mantendo:

- ✅ **Fidelidade Visual**: 100% das animações e estilos preservados
- ✅ **Funcionalidades**: Todas as interações mantidas
- ✅ **Performance**: Otimizado com Next.js
- ✅ **Tipagem**: TypeScript em todos os componentes
- ✅ **Modularização**: Código organizado em componentes React

## 👨‍💻 Desenvolvido por

Adaptação para Next.js + TypeScript + Tailwind CSS mantendo máxima fidelidade ao design original.

---

*Todos os direitos de Kimetsu no Yaiba pertencem a Koyoharu Gotouge.*

# Design System - Escola de Tecnologia

Sistema de design completo e profissional para o site da Escola de Tecnologia, inspirado no estilo visual da FIAP.

## 🎨 Visão Geral

Este Design System fornece uma biblioteca completa de componentes UI/UX, tokens de design, e diretrizes para criar experiências consistentes e modernas.

## 🚀 Tecnologias

- **Next.js 16** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS 3** - Estilização utilitária
- **shadcn/ui** - Componentes UI de alta qualidade
- **Framer Motion** - Animações fluidas
- **Radix UI** - Componentes acessíveis sem estilo

## 📦 Estrutura do Projeto

```
/app
  /design-system      # Página de documentação do Design System
  layout.tsx          # Layout raiz da aplicação
  page.tsx            # Página inicial

/components
  /ui                 # Componentes UI básicos
    - button.tsx
    - card.tsx
    - input.tsx
    - textarea.tsx
    - badge.tsx
    - dialog.tsx
  /system             # Componentes avançados
    - hero-section.tsx
    - course-card.tsx
    - course-grid.tsx
    - navbar.tsx
    - footer.tsx
    - timeline.tsx
    - testimonial-card.tsx
    - cta-block.tsx
    - section-title.tsx
    - container.tsx

/lib
  /design
    - tokens.ts       # Tokens de design (cores, tipografia, etc.)
  - utils.ts          # Utilitários (cn function)

/styles
  - design-system.css # Estilos globais e custom utilities
```

## 🎨 Design Tokens

### Cores

- **Preto**: `#000000`
- **Branco**: `#ffffff`
- **Cinza Escuro**:
  - `#111111` (dark-100)
  - `#222222` (dark-200)
  - `#333333` (dark-300)
- **Neon Pink**: `#ff006e`
- **Neon Purple**: `#6a00f4`
- **Gradientes**:
  - `bg-gradient-neon-pink`
  - `bg-gradient-neon-purple`
  - `bg-gradient-neon-diagonal`

### Tipografia

- **Display**: Poppins (300, 400, 600, 700, 800)
- **Body**: Inter (300, 400, 600, 700, 800)
- **Tamanhos**: xs, sm, base, lg, xl, 2xl, 3xl, 4xl, 5xl, 6xl, 7xl
- **Line Heights**: tight (1.2), normal (1.5), relaxed (1.75)

### Espaçamentos

- **Navbar Height**: 80px (desktop), 64px (mobile)
- **Container Max Width**: 1280px
- **Container Padding**: 2rem (desktop), 1rem (mobile)
- **Section Padding Y**: 5rem (desktop), 3rem (mobile)

### Border Radius

- **sm**: 4px
- **md**: 8px
- **lg**: 12px
- **xl**: 24px
- **full**: 9999px

### Transições

- **Fast**: 150ms
- **Normal**: 300ms
- **Slow**: 500ms
- **Easing**: cubic-bezier(0.4, 0, 0.2, 1)
- **Futuristic**: cubic-bezier(0.34, 1.56, 0.64, 1)

## 🧩 Componentes

### Componentes Básicos

#### Button

```tsx
import { Button } from "@/components/ui/button"

<Button variant="neon">Click me</Button>
<Button variant="neonPink" size="lg">Large Pink</Button>
<Button variant="outline">Outline</Button>
```

**Variantes**: default, secondary, outline, ghost, link, neon, neonPink, neonPurple

**Tamanhos**: sm, default, lg, xl, icon

#### Input & Textarea

```tsx
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

<Input placeholder="Enter your email" type="email" />
<Textarea placeholder="Your message" />
```

#### Card

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
  <CardFooter>Footer</CardFooter>
</Card>
```

#### Badge

```tsx
import { Badge } from "@/components/ui/badge"

<Badge variant="neon">New</Badge>
<Badge variant="neonPink">Hot</Badge>
```

### Componentes Avançados

#### Hero Section

```tsx
import { HeroSection } from "@/components/system/hero-section"

<HeroSection
  subtitle="Welcome to"
  title="Escola de Tecnologia"
  description="Learn cutting-edge technology"
  primaryCta={{
    text: "Get Started",
    href: "/courses"
  }}
  secondaryCta={{
    text: "Learn More",
    onClick: () => console.log('More info')
  }}
/>
```

#### Course Card

```tsx
import { CourseCard } from "@/components/system/course-card"

<CourseCard
  title="Web Development"
  description="Learn to build modern web apps"
  duration="6 months"
  students={1200}
  level="Intermediário"
  category="Development"
  price="R$ 2.499"
  instructor="John Doe"
/>
```

#### Course Grid

```tsx
import { CourseGrid } from "@/components/system/course-grid"
import { CourseCard } from "@/components/system/course-card"

<CourseGrid columns={3}>
  <CourseCard {...course1Props} />
  <CourseCard {...course2Props} />
  <CourseCard {...course3Props} />
</CourseGrid>
```

#### Navbar

```tsx
import { Navbar } from "@/components/system/navbar"

<Navbar
  logoText="Escola de Tecnologia"
  links={[
    { label: "Início", href: "/" },
    { label: "Cursos", href: "/cursos" },
  ]}
  ctaText="Inscreva-se"
  ctaHref="/inscricao"
/>
```

#### Footer

```tsx
import { Footer } from "@/components/system/footer"

<Footer />
```

#### Timeline

```tsx
import { Timeline } from "@/components/system/timeline"

<Timeline
  items={[
    {
      title: "Step 1",
      description: "Description",
      date: "Q1 2024",
    },
    // ... more items
  ]}
/>
```

#### Testimonial Card

```tsx
import { TestimonialCard } from "@/components/system/testimonial-card"

<TestimonialCard
  quote="Great experience!"
  author="John Doe"
  role="Developer"
  company="Tech Corp"
  rating={5}
/>
```

#### CTA Block

```tsx
import { CTABlock } from "@/components/system/cta-block"

<CTABlock
  title="Ready to start?"
  description="Join thousands of students"
  variant="gradient"
  primaryCta={{ text: "Get Started" }}
  secondaryCta={{ text: "Learn More" }}
/>
```

#### Section Title

```tsx
import { SectionTitle } from "@/components/system/section-title"

<SectionTitle
  subtitle="Our Courses"
  title="Learn What Matters"
  description="Cutting-edge technology courses"
  align="center"
/>
```

#### Container

```tsx
import { Container } from "@/components/system/container"

<Container maxWidth="xl">
  {/* Your content */}
</Container>
```

## 📝 Diretrizes UX

### Espaçamento e Grid

- Use sistema de espaçamento consistente (4px, 8px, 16px, 24px, 32px)
- Grid responsivo: Mobile (1 col), Tablet (2 cols), Desktop (3-4 cols)
- Padding padrão dos containers: 2rem desktop, 1rem mobile
- Altura da navbar: 80px desktop, 64px mobile

### Tipografia

- Títulos: Poppins (font-bold, 600-800)
- Body: Inter (font-regular, 400)
- Line-height: 1.5 para body, 1.2 para títulos
- Contrast ratio mínimo: 4.5:1 para texto normal

### Cores e Contraste

- Use cores neon (#ff006e, #6a00f4) apenas para destaques
- Fundo principal: preto (#000) ou dark-100 (#111)
- Texto em fundos escuros: branco ou gray-300
- Sempre teste contraste para acessibilidade

### Interações

- Hover: mudança de cor + escala/sombra (300ms)
- Focus: ring de 2px com offset de 2px
- Active: escala ligeiramente reduzida (0.98)
- Loading states: skeleton ou spinner com neon

### Acessibilidade

✓ Todos os elementos interativos devem ser acessíveis por teclado
✓ Use labels semânticos e ARIA attributes quando necessário
✓ Garanta contraste adequado entre texto e fundo (WCAG AA)
✓ Forneça feedback visual para estados (hover, focus, active, disabled)
✓ Use animações sutis e respeitosas (prefers-reduced-motion)
✓ Imagens devem ter alt text descritivo

## 🛠️ Instalação e Uso

### Instalar Dependências

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Acesse http://localhost:3000

### Build de Produção

```bash
npm run build
npm start
```

### Ver o Design System

Acesse http://localhost:3000/design-system para ver todos os componentes, tokens e exemplos.

## 📚 Recursos

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Radix UI](https://www.radix-ui.com)
- [shadcn/ui](https://ui.shadcn.com)

## 📄 Licença

ISC

---

Desenvolvido com ❤️ para a Escola de Tecnologia

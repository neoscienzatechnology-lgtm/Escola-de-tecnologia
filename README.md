# 🚀 EscolaTech - Escola de Tecnologia EAD

Um website completo, moderno e profissional para uma escola de tecnologia EAD, inspirado na estética da FIAP. Desenvolvido com Next.js, React, TypeScript e TailwindCSS.

![Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18.3-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Características

### 🎨 Design Moderno
- **Identidade Visual**: Inspirado na FIAP com cores vibrantes (rosa neon #ff006e e roxo neon #6a00f4)
- **Tema Escuro**: Interface moderna com fundo preto e tons de cinza
- **Animações Fluidas**: Transições suaves com Framer Motion
- **Totalmente Responsivo**: Design adaptativo para mobile, tablet e desktop

### 📄 Páginas Implementadas

1. **Home** (`/`)
   - Hero animado com gradientes dinâmicos
   - Grid de cursos em destaque
   - Estatísticas da escola
   - Call-to-action destacado

2. **Sobre** (`/sobre`)
   - História da escola
   - Missão, visão e valores
   - Números e conquistas
   - Diferenciais competitivos

3. **Cursos** (`/cursos`)
   - Listagem completa de cursos
   - Filtros por categoria
   - Cards informativos com tecnologias
   - Páginas individuais para cada curso

4. **Metodologia** (`/metodologia`)
   - Timeline animada do processo de aprendizado
   - Benefícios do EAD
   - Recursos da plataforma
   - Diferencial pedagógico

5. **Portfólio** (`/portfolio`)
   - Projetos dos alunos
   - Filtros por área
   - Tecnologias utilizadas
   - Estatísticas de sucesso

6. **Depoimentos** (`/depoimentos`)
   - Carrossel interativo de depoimentos
   - Avaliações de alunos
   - Casos de sucesso
   - Estatísticas de satisfação

7. **Contato** (`/contato`)
   - Formulário funcional com validação
   - Informações de contato
   - FAQ preview
   - API route para envio de emails

8. **Área do Aluno** (`/area-aluno`)
   - Dashboard do aluno (mock)
   - Progresso dos cursos
   - Atividades recentes
   - Conquistas e certificados

### 🛠️ Tecnologias Utilizadas

- **Framework**: Next.js 15.5 com App Router
- **Linguagem**: TypeScript 5.6
- **Estilização**: TailwindCSS 3.4
- **Animações**: Framer Motion
- **Ícones**: Lucide React
- **Lint**: ESLint com configuração Next.js

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18.x ou superior
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/neoscienzatechnology-lgtm/Escola-de-tecnologia.git
cd Escola-de-tecnologia
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter

## 📁 Estrutura do Projeto

```
escola-de-tecnologia/
├── app/                          # App Router do Next.js
│   ├── api/                      # API Routes
│   │   └── contact/             # Endpoint de contato
│   ├── cursos/                   # Páginas de cursos
│   │   ├── [slug]/              # Curso individual
│   │   └── page.tsx             # Lista de cursos
│   ├── area-aluno/              # Área do aluno
│   ├── contato/                 # Página de contato
│   ├── depoimentos/             # Depoimentos
│   ├── metodologia/             # Metodologia
│   ├── portfolio/               # Portfólio
│   ├── sobre/                   # Sobre nós
│   ├── globals.css              # Estilos globais
│   ├── layout.tsx               # Layout principal
│   └── page.tsx                 # Home page
├── components/                   # Componentes reutilizáveis
│   ├── Header.tsx               # Cabeçalho
│   └── Footer.tsx               # Rodapé
├── lib/                         # Bibliotecas e utilitários
│   └── courses.ts               # Dados dos cursos
├── public/                      # Arquivos estáticos
├── next.config.js               # Configuração Next.js
├── tailwind.config.ts           # Configuração Tailwind
├── tsconfig.json                # Configuração TypeScript
└── package.json                 # Dependências
```

## 🎨 Paleta de Cores

```css
/* Cores Principais */
--neon-pink: #ff006e
--neon-purple: #6a00f4

/* Cores Base */
--black: #000000
--gray-950: #0a0a0a
--gray-900: #111111
--gray-800: #1f1f1f

/* Cores de Texto */
--white: #ffffff
--gray-300: #d1d5db
--gray-400: #9ca3af
```

## 🌟 Funcionalidades Especiais

### Animações com Framer Motion
- Fade in/out em scroll
- Slide transitions
- Hover effects
- Carrossel de depoimentos
- Timeline animada

### Responsividade
- Mobile First Design
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Menu mobile com animações
- Grid adaptativo

### Performance
- Static Generation (SSG) para páginas estáticas
- Dynamic Rendering para páginas com parâmetros
- Otimização de imagens
- Code splitting automático

## 📝 Cursos Disponíveis

1. **Desenvolvimento Full Stack** - React, Next.js, Node.js
2. **Data Science & IA** - Python, Machine Learning, TensorFlow
3. **DevOps & Cloud** - Docker, Kubernetes, AWS
4. **UX/UI Design** - Figma, Design Thinking, Prototipagem
5. **Desenvolvimento Mobile** - React Native, Flutter
6. **Segurança Cibernética** - Ethical Hacking, Penetration Testing

## 🚀 Deploy

### Vercel (Recomendado)

1. Faça push do código para o GitHub
2. Importe o projeto no Vercel
3. Configure as variáveis de ambiente (se necessário)
4. Deploy automático em cada push

```bash
npm install -g vercel
vercel
```

### Outras Plataformas
- Netlify
- AWS Amplify
- Google Cloud Run
- Railway

## 🔧 Configuração do Formulário de Contato

O formulário de contato usa uma API route do Next.js. Para integrar com um serviço de email real:

1. Escolha um provedor (SendGrid, Resend, Mailgun, etc.)
2. Adicione as credenciais em `.env.local`:
```env
EMAIL_API_KEY=sua_chave_aqui
EMAIL_FROM=noreply@escolatech.com.br
```
3. Atualize `app/api/contact/route.ts` com a lógica de envio

## 📱 Recursos Implementados

- ✅ Navegação responsiva com menu mobile
- ✅ Hero animado com gradientes dinâmicos
- ✅ Grid de cursos com hover effects
- ✅ Páginas individuais de cursos
- ✅ Timeline animada (Metodologia)
- ✅ Carrossel de depoimentos
- ✅ Formulário de contato funcional
- ✅ Área do aluno (demo)
- ✅ Footer completo com links
- ✅ Animações Framer Motion
- ✅ Design system consistente

## 🎯 Próximos Passos (Opcional)

- [ ] Integração com CMS (Strapi, Contentful)
- [ ] Sistema de autenticação (NextAuth.js)
- [ ] Área do aluno funcional
- [ ] Integração com gateway de pagamento
- [ ] Blog/Notícias
- [ ] Sistema de busca
- [ ] Multilíngue (i18n)
- [ ] Analytics (Google Analytics, Vercel Analytics)

## 📄 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

## 👥 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

## 📞 Suporte

Para dúvidas ou suporte:
- Email: contato@escolatech.com.br
- Website: [escolatech.com.br](https://escolatech.com.br)

---

Desenvolvido com ❤️ usando Next.js, React e TailwindCSS

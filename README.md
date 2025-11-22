# Escola de Tecnologia - Área do Aluno 🎓

Plataforma de ensino EAD (Educação a Distância) desenvolvida com Next.js, TypeScript e TailwindCSS.

## 🚀 Tecnologias

- **Next.js 16** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **TailwindCSS v4** - Framework CSS utilitário
- **Framer Motion** - Biblioteca de animações
- **shadcn/ui** - Componentes UI reutilizáveis
- **Radix UI** - Primitivos de UI acessíveis
- **Lucide React** - Ícones

## 📋 Pré-requisitos

- Node.js 18+ 
- npm, yarn, pnpm ou bun

## 🔧 Instalação

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

4. Abra [http://localhost:3000](http://localhost:3000) no navegador

## 🏗️ Estrutura do Projeto

```
/
├── app/
│   ├── aluno/                    # Área do aluno
│   │   ├── calendario/          # Página de calendário
│   │   ├── configuracoes/       # Página de configurações
│   │   ├── cursos/              # Páginas de cursos
│   │   │   └── [id]/           # Página de detalhes do curso
│   │   ├── dashboard/           # Dashboard principal
│   │   └── trilhas/             # Trilhas de aprendizado
│   ├── login/                   # Página de login
│   ├── layout.tsx              # Layout raiz
│   └── globals.css             # Estilos globais
├── components/
│   ├── aluno/                   # Componentes da área do aluno
│   │   ├── header.tsx          # Cabeçalho
│   │   └── sidebar.tsx         # Menu lateral
│   └── ui/                      # Componentes UI reutilizáveis
├── lib/
│   ├── mock-data/              # Dados mockados
│   └── utils.ts                # Utilitários
└── public/                      # Arquivos estáticos
```

## ✨ Funcionalidades

### 🔐 Autenticação
- Página de login com design futurista
- Autenticação mock (use qualquer email/senha)

### 📊 Dashboard
- Visão geral de estatísticas
- Progresso dos cursos
- Últimas aulas assistidas
- Acesso rápido aos cursos

### 📚 Meus Cursos
- Grid de cursos matriculados
- Filtros (Todos, Em andamento, Concluídos)
- Indicadores de progresso
- Informações do curso (instrutor, duração, nível)

### 🎥 Página de Curso
- Player de vídeo mockado
- Navegação por módulos e aulas
- Sistema de anotações
- Exportação de anotações
- Indicadores de progresso

### 🗺️ Trilhas de Aprendizado
- Roadmaps animados
- Status das etapas (concluído, atual, pendente)
- Vinculação com cursos

### 📅 Calendário
- Calendário interativo
- Eventos (aulas, lives, prazos)
- Filtros por data
- Lista de próximos eventos

### ⚙️ Configurações
- Edição de perfil
- Toggle de tema (claro/escuro)
- Preferências de notificação

## 🎨 Design

O projeto utiliza um tema escuro futurista com:
- Efeitos neon em elementos importantes
- Animações suaves com Framer Motion
- Design responsivo para mobile, tablet e desktop
- Gradientes e backdrop blur

## 📱 Responsividade

- **Mobile**: Menu hambúrguer lateral, layout adaptado
- **Tablet**: Layout intermediário
- **Desktop**: Sidebar fixa, layout completo

## 🧪 Scripts Disponíveis

```bash
npm run dev      # Inicia o servidor de desenvolvimento
npm run build    # Cria build de produção
npm run start    # Inicia o servidor de produção
npm run lint     # Executa o linter
```

## 📦 Build

Para criar uma build de produção:

```bash
npm run build
```

Os arquivos otimizados estarão na pasta `.next/`.

## 🚀 Deploy

### Vercel (Recomendado)

1. Faça push do código para GitHub
2. Importe o projeto no [Vercel](https://vercel.com)
3. Deploy automático

### Outras plataformas

O projeto pode ser deployado em qualquer plataforma que suporte Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## 🔒 Variáveis de Ambiente

Atualmente o projeto usa dados mockados. Para produção, configure:

```env
# Exemplo (não necessário no modo demo)
NEXT_PUBLIC_API_URL=https://api.exemplo.com
```

## 👥 Dados Mock

Os dados de exemplo estão em `lib/mock-data/index.ts`:
- Informações do aluno
- Cursos e módulos
- Trilhas de aprendizado
- Eventos do calendário

## 🎯 Próximos Passos

- [ ] Integração com API real
- [ ] Sistema de autenticação completo
- [ ] Player de vídeo real
- [ ] Sistema de certificados
- [ ] Gamificação (badges, pontos)
- [ ] Chat/Fórum
- [ ] Testes automatizados

## 📄 Licença

Este projeto é um exemplo educacional.

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

---

Desenvolvido com ❤️ para a Escola de Tecnologia

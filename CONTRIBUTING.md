# Guia de Contribuição

Obrigado por seu interesse em contribuir com a Escola de Tecnologia! Este documento fornece diretrizes para contribuir com o projeto.

## 📋 Código de Conduta

- Seja respeitoso e inclusivo
- Aceite críticas construtivas
- Foque no que é melhor para a comunidade
- Mostre empatia com outros membros

## 🚀 Como Começar

### 1. Fork e Clone

```bash
# Fork o repositório no GitHub
# Clone seu fork
git clone https://github.com/seu-usuario/Escola-de-tecnologia.git
cd Escola-de-tecnologia

# Adicione o upstream
git remote add upstream https://github.com/neoscienzatechnology-lgtm/Escola-de-tecnologia.git
```

### 2. Configure o Ambiente

```bash
# Instale dependências
npm install

# Configure variáveis de ambiente
cp .env.example .env.local
# Edite .env.local com suas credenciais Supabase

# Rode migrations locais (via Supabase Dashboard)
# Siga instruções em SETUP_GUIDE.md
```

### 3. Crie uma Branch

```bash
# Atualize main
git checkout main
git pull upstream main

# Crie branch para sua feature
git checkout -b feature/nome-da-feature

# Ou para bugfix
git checkout -b fix/nome-do-bug
```

## 🎯 Tipos de Contribuição

### 🐛 Reportar Bugs

Antes de reportar um bug:
1. Verifique se já não existe uma issue
2. Certifique-se que é realmente um bug
3. Teste na versão mais recente

Ao reportar, inclua:
- Descrição clara do problema
- Passos para reproduzir
- Comportamento esperado vs atual
- Screenshots (se aplicável)
- Ambiente (OS, browser, versões)

Template:
```markdown
**Descrição do Bug**
Uma descrição clara do bug.

**Passos para Reproduzir**
1. Vá para '...'
2. Clique em '...'
3. Role até '...'
4. Veja o erro

**Comportamento Esperado**
O que deveria acontecer.

**Screenshots**
Se aplicável.

**Ambiente**
- OS: [ex. macOS 14.0]
- Browser: [ex. Chrome 120]
- Node: [ex. 20.10.0]
```

### ✨ Sugerir Features

Antes de sugerir:
1. Verifique o roadmap
2. Procure por sugestões similares
3. Considere o escopo do projeto

Template:
```markdown
**Feature Request**
Descrição clara da feature.

**Problema que Resolve**
Por que esta feature é útil?

**Solução Proposta**
Como deveria funcionar?

**Alternativas Consideradas**
Outras abordagens pensadas?

**Contexto Adicional**
Mockups, exemplos, etc.
```

### 💻 Contribuir com Código

#### Guidelines Gerais

- ✅ Siga o style guide do projeto
- ✅ Escreva código limpo e documentado
- ✅ Adicione testes quando possível
- ✅ Mantenha PRs pequenos e focados
- ✅ Atualize documentação

#### Process

1. **Crie uma issue** (se não existe)
2. **Comente na issue** dizendo que vai trabalhar nela
3. **Desenvolva** em sua branch
4. **Teste** localmente
5. **Commit** com mensagens claras
6. **Push** para seu fork
7. **Abra PR** no repositório original

## 📝 Padrões de Código

### TypeScript

```typescript
// ✅ BOM
interface User {
  id: string
  name: string
  email: string
}

async function getUser(id: string): Promise<User | null> {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', id)
    .single()
  
  if (error) return null
  return data
}

// ❌ RUIM
function getUser(id) {  // sem tipos
  const data = supabase.from('users').select('*').eq('id', id).single()  // sem await, sem error handling
  return data
}
```

### Commits

Siga [Conventional Commits](https://www.conventionalcommits.org/):

```bash
# Formato
<type>[optional scope]: <description>

# Tipos
feat: nova feature
fix: correção de bug
docs: apenas documentação
style: formatação, não afeta código
refactor: refatoração sem mudar funcionalidade
test: adicionar/corrigir testes
chore: manutenção (deps, config, etc)

# Exemplos
feat(api): add endpoint for user profile
fix(auth): resolve token expiration issue
docs(readme): update setup instructions
refactor(db): optimize enrollment query
```

### Estrutura de Arquivos

```
/app
  /api
    /[endpoint]
      route.ts        # API route handler
  /[page]
    page.tsx          # Page component
    layout.tsx        # Layout component

/lib
  supabase-client.ts  # Client utils
  supabase-admin.ts   # Server utils

/db
  /migrations         # SQL migrations
  /seed              # Seed data

/supabase
  /functions         # Edge Functions
```

### Nomeação

```typescript
// ✅ Componentes: PascalCase
function CourseCard() {}

// ✅ Functions/variables: camelCase
const getUserProfile = () => {}
const isEnrolled = true

// ✅ Constants: UPPER_SNAKE_CASE
const MAX_COURSES = 10

// ✅ Files: kebab-case
course-card.tsx
user-profile.ts
```

## 🧪 Testes

### Executar Testes

```bash
# Smoke tests
npm run test:smoke

# Lint
npm run lint

# Build
npm run build
```

### Escrever Testes

```typescript
// Exemplo de teste (se implementarmos)
describe('Enrollment API', () => {
  it('should enroll user in course', async () => {
    const response = await fetch('/api/enroll', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ courseId: 'test-id' })
    })
    
    expect(response.status).toBe(201)
    const { enrollment } = await response.json()
    expect(enrollment).toBeDefined()
  })
})
```

## 📚 Documentação

Ao adicionar/modificar features:

1. **Atualize README.md** se necessário
2. **Atualize API_DOCS.md** para novas APIs
3. **Adicione comentários** em código complexo
4. **Atualize CHANGELOG.md**

### Comentários

```typescript
// ✅ BOM - Explica o "porquê"
// Calculate progress as percentage because frontend expects 0-100 range
const progress = (completed / total) * 100

// ❌ RUIM - Apenas repete o código
// Multiply by 100
const progress = (completed / total) * 100
```

## 🔍 Code Review

### Como Revisor

- ✅ Seja construtivo e gentil
- ✅ Explique o "porquê" de suas sugestões
- ✅ Aprove quando estiver bom o suficiente
- ✅ Use emojis para clareza (🎉 ✨ 🐛 📝)

### Como Autor

- ✅ Responda a todos os comentários
- ✅ Agradeça o feedback
- ✅ Faça as mudanças solicitadas ou explique por que não
- ✅ Solicite nova review após mudanças

## 🏷️ Pull Request

### Template

```markdown
## Descrição
Descreva suas mudanças.

## Tipo de Mudança
- [ ] 🐛 Bug fix
- [ ] ✨ Nova feature
- [ ] 💥 Breaking change
- [ ] 📝 Documentação

## Como Testar
1. Clone branch
2. Execute `npm install`
3. Execute `npm run dev`
4. Teste X, Y, Z

## Checklist
- [ ] Código segue style guide
- [ ] Self-review feito
- [ ] Comentários em código complexo
- [ ] Documentação atualizada
- [ ] Sem warnings no lint
- [ ] Build passa sem erros
- [ ] Testes adicionados/atualizados
- [ ] Smoke tests passam

## Screenshots (se aplicável)
Adicione screenshots de UI changes.

## Issues Relacionadas
Fixes #123
Related to #456
```

### Boas Práticas

- ✅ Título descritivo
- ✅ Descrição clara
- ✅ Commits organizados
- ✅ Um PR por feature
- ✅ Reviewers apropriados

## 🚫 O Que NÃO Fazer

- ❌ Commitar secrets/credentials
- ❌ Commitar `node_modules`
- ❌ Commitar `.env.local`
- ❌ PRs enormes (>500 linhas)
- ❌ Código sem testes (para features críticas)
- ❌ Modificar código não relacionado
- ❌ Comentários ofensivos

## 🔐 Segurança

Se encontrar vulnerabilidade:

1. **NÃO** abra issue pública
2. **Email** para: security@escolatecnologia.com
3. **Inclua**:
   - Descrição da vulnerabilidade
   - Passos para reproduzir
   - Impacto potencial
   - Sugestões de fix (opcional)

## 📞 Dúvidas?

- 💬 Discord: [link]
- 📧 Email: contribuidores@escolatecnologia.com
- 📖 Docs: [link]

## 🎉 Reconhecimento

Todos os contribuidores serão reconhecidos em:
- README.md
- Página de contribuidores
- Release notes

## 📜 Licença

Ao contribuir, você concorda que suas contribuições serão licenciadas sob a mesma licença do projeto (ISC).

---

**Obrigado por contribuir! 🚀**

# Escola de Tecnologia - Backend EAD com Supabase

Plataforma completa de ensino à distância (EAD) com backend Supabase, autenticação, gerenciamento de cursos, progresso do aluno e certificados.

## 🎯 Funcionalidades

- ✅ Autenticação com Supabase Auth (Email/Password + OAuth Google)
- ✅ Banco de dados PostgreSQL com migrations e RLS
- ✅ Storage para thumbnails, vídeos e certificados
- ✅ API REST via Next.js API Routes
- ✅ Edge Functions para tarefas assíncronas
- ✅ Sistema de progresso e certificados
- ✅ Trilhas de aprendizado (Learning Paths)

## 🗂️ Estrutura do Projeto

```
.
├── app/
│   ├── api/                    # API Routes (Next.js)
│   │   ├── enroll/            # Inscrição em cursos
│   │   ├── progress/          # Salvamento de progresso
│   │   ├── courses/           # Listagem de cursos
│   │   └── certificate/       # Geração de certificados
│   ├── layout.tsx             # Layout principal
│   └── page.tsx               # Página inicial
├── db/
│   ├── migrations/            # Migrations SQL (001-009)
│   ├── seed/                  # Dados de exemplo
│   └── storage-setup.sql      # Configuração de storage
├── lib/
│   ├── supabase-client.ts     # Cliente Supabase (browser)
│   └── supabase-admin.ts      # Cliente admin (server-side)
├── scripts/
│   ├── migrate.js             # Script de migração
│   ├── seed.js                # Script de seed
│   └── smoke-test.js          # Testes básicos
├── supabase/functions/
│   ├── generate-certificate/  # Edge Function - certificados
│   └── webhook-handler/       # Edge Function - webhooks
└── .github/workflows/
    └── backend-ci.yml         # CI/CD Pipeline
```

## 📊 Modelagem de Dados

### Tabelas Principais

1. **users** - Perfis de usuários (student, teacher, admin)
2. **courses** - Cursos disponíveis
3. **modules** - Módulos dentro de cursos
4. **lessons** - Aulas dentro de módulos
5. **enrollments** - Inscrições de alunos em cursos
6. **lesson_progress** - Progresso individual por aula
7. **paths** - Trilhas de aprendizado
8. **path_courses** - Relação many-to-many entre trilhas e cursos
9. **certificates** - Certificados emitidos

### Diagrama de Relacionamentos

```
users (1) --< (N) enrollments (N) >-- (1) courses
                      |                       |
                      |                       |
                      v                       v
              lesson_progress           modules (1) --< (N) lessons
                      ^                       
                      |
                      |
              paths (N) <--> (N) courses
```

## 🚀 Configuração Inicial

### 1. Pré-requisitos

- Node.js 18+ e npm
- Conta no Supabase (https://supabase.com)
- Git

### 2. Criar Projeto no Supabase

1. Acesse https://app.supabase.com
2. Clique em "New Project"
3. Preencha os dados do projeto
4. Aguarde a criação (pode levar alguns minutos)

### 3. Obter Credenciais

No Dashboard do Supabase:
1. Vá em Settings > API
2. Copie:
   - Project URL (NEXT_PUBLIC_SUPABASE_URL)
   - anon/public key (NEXT_PUBLIC_SUPABASE_ANON_KEY)
   - service_role key (SUPABASE_SERVICE_ROLE_KEY) ⚠️ **NUNCA exponha no client**

### 4. Configurar Variáveis de Ambiente

```bash
# Copie o arquivo de exemplo
cp .env.example .env.local

# Edite .env.local e adicione suas credenciais
nano .env.local
```

### 5. Instalar Dependências

```bash
npm install
```

### 6. Executar Migrations

**Opção A: Via Supabase Dashboard (Recomendado)**

1. Acesse Supabase Dashboard > SQL Editor
2. Clique em "New Query"
3. Para cada arquivo em `db/migrations/` (na ordem 001 a 009):
   - Abra o arquivo
   - Copie todo o conteúdo
   - Cole no SQL Editor
   - Clique em "Run"

**Opção B: Via Supabase CLI**

```bash
# Instale o Supabase CLI
npm install -g supabase

# Faça login
supabase login

# Link ao projeto
supabase link --project-ref your-project-ref

# Execute migrations
supabase db push
```

**Opção C: Script Helper**

```bash
# Exibe instruções
npm run db:migrate
```

### 7. Popular com Dados de Exemplo

No Supabase Dashboard > SQL Editor:
1. Abra `db/seed/seed.sql`
2. Copie todo o conteúdo
3. Cole no SQL Editor e execute

Ou use o script:
```bash
npm run db:seed
```

Isso criará:
- 3 usuários (student, teacher, admin)
- 3 cursos (Fullstack, Data Science, Cloud)
- 2 módulos por curso
- 3 aulas por módulo
- 1 trilha de aprendizado
- Dados de exemplo de inscrição e progresso

### 8. Configurar Storage Buckets

No Supabase Dashboard > Storage:

1. Crie os buckets:
   - `public-assets` (Public: ✅)
   - `private-videos` (Public: ❌)
   - `certificates` (Public: ❌)

2. Configure as policies no SQL Editor:
   - Execute o arquivo `db/storage-setup.sql`

### 9. Configurar Edge Functions (Opcional)

```bash
# Deploy das Edge Functions
supabase functions deploy generate-certificate
supabase functions deploy webhook-handler

# Configurar secrets
supabase secrets set SUPABASE_URL=your-url
supabase secrets set SUPABASE_SERVICE_ROLE_KEY=your-key
```

## 🧪 Testar a Instalação

```bash
# Executar smoke tests
npm run test:smoke

# Iniciar servidor de desenvolvimento
npm run dev
```

Acesse http://localhost:3000

## 📡 API Routes

### POST /api/enroll
Inscreve um usuário em um curso.

**Headers:**
```
Authorization: Bearer <access_token>
Content-Type: application/json
```

**Body:**
```json
{
  "courseId": "uuid-do-curso"
}
```

**Resposta:**
```json
{
  "enrollment": {
    "id": "uuid",
    "user_id": "uuid",
    "course_id": "uuid",
    "progress": 0,
    "enrolled_at": "2024-01-01T00:00:00Z"
  }
}
```

### POST /api/progress
Salva o progresso de uma aula.

**Headers:**
```
Authorization: Bearer <access_token>
Content-Type: application/json
```

**Body:**
```json
{
  "enrollmentId": "uuid-do-enrollment",
  "lessonId": "uuid-da-aula",
  "completed": true
}
```

**Resposta:**
```json
{
  "progress": {
    "id": "uuid",
    "enrollment_id": "uuid",
    "lesson_id": "uuid",
    "completed": true,
    "last_watched_at": "2024-01-01T00:00:00Z"
  },
  "enrollmentProgress": 33.33
}
```

### GET /api/courses
Lista cursos disponíveis.

**Query Parameters:**
- `published=true` - Filtra apenas cursos publicados
- `userId=uuid` - Inclui dados de inscrição do usuário

**Resposta:**
```json
{
  "courses": [
    {
      "id": "uuid",
      "title": "Desenvolvimento Fullstack",
      "slug": "fullstack-moderno",
      "description": "...",
      "cover_url": "...",
      "difficulty": "intermediate",
      "published": true,
      "modules": [...],
      "enrollment": {
        "progress": 33.33,
        "enrolled_at": "2024-01-01T00:00:00Z"
      }
    }
  ]
}
```

### POST /api/certificate
Gera certificado para curso completo.

**Headers:**
```
Authorization: Bearer <access_token>
Content-Type: application/json
```

**Body:**
```json
{
  "courseId": "uuid-do-curso"
}
```

**Resposta:**
```json
{
  "certificate": {
    "id": "uuid",
    "user_id": "uuid",
    "course_id": "uuid",
    "certificate_url": "/certificates/...",
    "issued_at": "2024-01-01T00:00:00Z"
  },
  "message": "Certificate generated successfully"
}
```

## 🔐 Segurança e RLS

Todas as tabelas sensíveis têm Row Level Security (RLS) habilitado:

### Policies Implementadas

1. **users**
   - Usuários podem ver/editar apenas seu próprio perfil
   - Admins podem ver todos os perfis
   - Role não pode ser alterado pelo próprio usuário

2. **courses**
   - Qualquer um pode ver cursos publicados
   - Teachers/Admins podem criar cursos
   - Apenas criador ou admin pode editar

3. **enrollments**
   - Usuários veem apenas suas próprias inscrições
   - Admins veem todas as inscrições

4. **lesson_progress**
   - Usuários gerenciam apenas seu próprio progresso
   - Admins veem todo o progresso

5. **certificates**
   - Usuários veem apenas seus próprios certificados
   - Sistema (service role) pode criar certificados

### Boas Práticas de Segurança

❌ **NUNCA** exponha `SUPABASE_SERVICE_ROLE_KEY` no client
✅ Use apenas em API Routes e Edge Functions
✅ Sempre valide tokens JWT nas API Routes
✅ Use signed URLs para vídeos privados
✅ Configure backup automático no Supabase

## 🎓 Exemplo de Uso no Frontend

```typescript
// Login
const { data, error } = await supabase.auth.signInWithPassword({
  email: 'user@example.com',
  password: 'password'
})

// Obter perfil
const { data: profile } = await supabase
  .from('users')
  .select('*')
  .eq('id', user.id)
  .single()

// Listar cursos publicados (usando API route)
const response = await fetch('/api/courses?published=true')
const { courses } = await response.json()

// Inscrever em curso (usando API route)
const { data: session } = await supabase.auth.getSession()
const enrollResponse = await fetch('/api/enroll', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${session.access_token}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ courseId: 'uuid-do-curso' })
})

// Salvar progresso (usando API route)
const progressResponse = await fetch('/api/progress', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${session.access_token}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    enrollmentId: 'uuid-enrollment',
    lessonId: 'uuid-lesson',
    completed: true
  })
})
```

## 📦 Deploy

### Vercel (Recomendado para Next.js)

1. Instale a Vercel CLI: `npm i -g vercel`
2. Execute: `vercel`
3. Configure as variáveis de ambiente no dashboard da Vercel:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`

### Outras Plataformas

O projeto pode ser deployado em qualquer plataforma que suporte Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## 🔄 Backup e Restauração

### Backup Automático (Supabase)

Supabase faz backup automático diário. Acesse:
- Dashboard > Database > Backups

### Backup Manual

```bash
# Via Supabase CLI
supabase db dump -f backup.sql

# Restaurar
supabase db reset
psql -h your-db-url -U postgres -d postgres -f backup.sql
```

## 🧰 Scripts Disponíveis

```bash
npm run dev          # Inicia servidor de desenvolvimento
npm run build        # Build de produção
npm run start        # Inicia servidor de produção
npm run lint         # Executa ESLint
npm run db:migrate   # Exibe instruções de migration
npm run db:seed      # Exibe instruções de seed
npm run test:smoke   # Executa smoke tests
```

## 🐛 Troubleshooting

### Erro: "relation does not exist"
- Execute as migrations na ordem correta (001 a 009)
- Verifique se o schema `public` está sendo usado

### Erro: "JWT expired" ou "Invalid token"
- Renove o token usando `supabase.auth.refreshSession()`
- Verifique se o JWT secret está correto

### Erro: "permission denied for table"
- Verifique se RLS está configurado corretamente
- Verifique se o usuário tem as policies adequadas
- Use service_role key para operações administrativas

### Edge Functions não funcionam
- Verifique se foram deployadas: `supabase functions list`
- Verifique os logs: `supabase functions logs <function-name>`
- Certifique-se que os secrets estão configurados

## 📝 Checklist de Configuração

- [ ] Projeto Supabase criado
- [ ] Variáveis de ambiente configuradas (.env.local)
- [ ] Migrations executadas (001-009)
- [ ] Seed data inserido
- [ ] Storage buckets criados (public-assets, private-videos, certificates)
- [ ] Storage policies configuradas
- [ ] Edge Functions deployadas (opcional)
- [ ] Smoke tests passando
- [ ] CI/CD configurado (GitHub Actions)

## 🤝 Contribuindo

1. Faça fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença ISC.

## 🔗 Links Úteis

- [Documentação Supabase](https://supabase.com/docs)
- [Documentação Next.js](https://nextjs.org/docs)
- [Supabase RLS](https://supabase.com/docs/guides/auth/row-level-security)
- [Edge Functions](https://supabase.com/docs/guides/functions)
- [Storage](https://supabase.com/docs/guides/storage)

## ⚠️ Observações Importantes

1. **Service Role Key**: Nunca exponha esta chave no client. Use apenas em servidor.
2. **RLS**: Sempre teste policies com diferentes roles (student, teacher, admin).
3. **Vídeos**: Use signed URLs para streaming de vídeos privados.
4. **Backup**: Configure backup automático no Supabase Dashboard.
5. **Rate Limiting**: Configure rate limiting para APIs públicas em produção.

---

Desenvolvido com ❤️ para a Escola de Tecnologia

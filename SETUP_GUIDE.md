# Guia de Configuração Passo a Passo

Este guia irá auxiliá-lo a configurar completamente o backend EAD com Supabase.

## ⏱️ Tempo Estimado: 30-45 minutos

---

## Parte 1: Criar Projeto no Supabase (5-10 min)

### 1.1 Criar Conta no Supabase

1. Acesse https://supabase.com
2. Clique em "Start your project"
3. Faça login com GitHub ou email

### 1.2 Criar Novo Projeto

1. No dashboard, clique em "New Project"
2. Preencha os campos:
   - **Name**: `escola-de-tecnologia` (ou nome de sua escolha)
   - **Database Password**: Crie uma senha forte e **salve em local seguro**
   - **Region**: Escolha a região mais próxima (ex: South America - São Paulo)
   - **Pricing Plan**: Free (para desenvolvimento)
3. Clique em "Create new project"
4. ⏳ Aguarde 2-5 minutos para o projeto ser provisionado

---

## Parte 2: Obter Credenciais (2 min)

### 2.1 Copiar URLs e Keys

1. No dashboard do projeto, vá em **Settings** > **API**
2. Copie os seguintes valores:

**Project URL:**
```
https://xxxxxxxxxxx.supabase.co
```

**anon/public key:**
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**service_role key:**
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

⚠️ **IMPORTANTE**: A `service_role` key tem acesso total ao banco. **NUNCA** exponha no código client!

---

## Parte 3: Configurar Projeto Local (3 min)

### 3.1 Clonar e Instalar

```bash
# Clonar repositório (se ainda não fez)
git clone <seu-repo>
cd Escola-de-tecnologia

# Instalar dependências
npm install
```

### 3.2 Configurar Variáveis de Ambiente

```bash
# Copiar arquivo de exemplo
cp .env.example .env.local

# Editar o arquivo
nano .env.local  # ou use seu editor preferido
```

Cole os valores obtidos no passo 2.1:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

---

## Parte 4: Executar Migrations (10 min)

### 4.1 Abrir SQL Editor

1. No dashboard Supabase, vá em **SQL Editor**
2. Clique em "**New query**"

### 4.2 Executar Cada Migration

Execute as migrations **NA ORDEM**, uma por vez:

**Migration 1 - Users:**
1. Abra `db/migrations/001_create_users.sql`
2. Copie **TODO** o conteúdo
3. Cole no SQL Editor
4. Clique em "**Run**"
5. ✅ Aguarde confirmação de sucesso

**Migration 2 - Courses:**
1. Abra `db/migrations/002_create_courses.sql`
2. Copie **TODO** o conteúdo
3. Cole no SQL Editor
4. Clique em "**Run**"
5. ✅ Aguarde confirmação

**Repita para todas as migrations:**
- ✅ 003_create_modules.sql
- ✅ 004_create_lessons.sql
- ✅ 005_create_enrollments.sql
- ✅ 006_create_lesson_progress.sql
- ✅ 007_create_paths.sql
- ✅ 008_create_path_courses.sql
- ✅ 009_create_certificates.sql

### 4.3 Verificar Tabelas

1. No dashboard, vá em **Table Editor**
2. Você deve ver todas as tabelas criadas:
   - users
   - courses
   - modules
   - lessons
   - enrollments
   - lesson_progress
   - paths
   - path_courses
   - certificates

---

## Parte 5: Popular com Dados de Teste (3 min)

### 5.1 Executar Seed

1. No **SQL Editor**, clique em "**New query**"
2. Abra `db/seed/seed.sql`
3. Copie **TODO** o conteúdo
4. Cole no SQL Editor
5. Clique em "**Run**"

### 5.2 Verificar Dados

1. Vá em **Table Editor** > **courses**
2. Você deve ver 3 cursos:
   - Desenvolvimento Fullstack Moderno
   - Data Science e Machine Learning
   - Cloud Computing e DevOps

---

## Parte 6: Configurar Storage (5 min)

### 6.1 Criar Buckets

1. No dashboard, vá em **Storage**
2. Clique em "**New bucket**"

**Criar 3 buckets:**

**Bucket 1:**
- Name: `public-assets`
- Public bucket: ✅ **YES**
- Clique em "Save"

**Bucket 2:**
- Name: `private-videos`
- Public bucket: ❌ **NO**
- Clique em "Save"

**Bucket 3:**
- Name: `certificates`
- Public bucket: ❌ **NO**
- Clique em "Save"

### 6.2 Configurar Policies

1. No **SQL Editor**, clique em "**New query**"
2. Abra `db/storage-setup.sql`
3. Copie **TODO** o conteúdo
4. Cole no SQL Editor
5. Clique em "**Run**"

---

## Parte 7: Testar Localmente (5 min)

### 7.1 Executar Smoke Tests

```bash
npm run test:smoke
```

Você deve ver:
```
✅ Passed: X
❌ Failed: 0 (ou poucos)
```

### 7.2 Iniciar Servidor

```bash
npm run dev
```

Acesse http://localhost:3000

Você deve ver a página inicial: "Escola de Tecnologia"

---

## Parte 8: Configurar Autenticação (5 min)

### 8.1 Habilitar Email/Password

1. No dashboard, vá em **Authentication** > **Providers**
2. Encontre "**Email**"
3. Certifique-se que está **Enabled**
4. Configure:
   - Confirm email: ❌ (para desenvolvimento)
   - Secure email change: ❌ (para desenvolvimento)

### 8.2 Configurar OAuth Google (Opcional)

1. Em **Authentication** > **Providers**
2. Encontre "**Google**"
3. Clique em "Enable"
4. Siga instruções para obter:
   - Client ID
   - Client Secret
5. Configure redirect URL: `https://seu-projeto.supabase.co/auth/v1/callback`

---

## Parte 9: Deploy Edge Functions (Opcional - 5 min)

### 9.1 Instalar Supabase CLI

```bash
npm install -g supabase
```

### 9.2 Login e Link

```bash
# Login
supabase login

# Link ao projeto
supabase link --project-ref seu-project-ref
```

O `project-ref` está em: Settings > General > Reference ID

### 9.3 Deploy Functions

```bash
# Deploy generate-certificate
supabase functions deploy generate-certificate

# Deploy webhook-handler
supabase functions deploy webhook-handler
```

### 9.4 Configurar Secrets

```bash
supabase secrets set SUPABASE_URL=https://seu-projeto.supabase.co
supabase secrets set SUPABASE_SERVICE_ROLE_KEY=sua-service-role-key
```

---

## ✅ Checklist Final

Confirme que tudo está funcionando:

- [ ] Projeto Supabase criado e rodando
- [ ] Credenciais copiadas e salvas
- [ ] `.env.local` configurado corretamente
- [ ] Todas as 9 migrations executadas
- [ ] Seed data inserido (3 cursos visíveis)
- [ ] 3 buckets de storage criados
- [ ] Storage policies aplicadas
- [ ] Smoke tests passando
- [ ] `npm run dev` rodando sem erros
- [ ] Autenticação configurada
- [ ] Edge Functions deployadas (opcional)

---

## 🎯 Próximos Passos

Agora que o backend está configurado:

1. **Criar usuários de teste:**
   - Vá em Authentication > Users
   - Clique em "Add user"
   - Crie 3 usuários: student, teacher, admin

2. **Atualizar roles dos usuários:**
   - No SQL Editor, execute:
   ```sql
   UPDATE users SET role = 'teacher' WHERE id = 'uuid-do-teacher';
   UPDATE users SET role = 'admin' WHERE id = 'uuid-do-admin';
   ```

3. **Testar APIs:**
   - Use Postman ou Insomnia
   - Teste os endpoints em `/api/`
   - Exemplos estão no README.md

4. **Desenvolver Frontend:**
   - Criar páginas de login
   - Criar dashboard do aluno
   - Criar interface de cursos
   - Implementar player de vídeo

---

## 🆘 Problemas Comuns

### Erro: "relation does not exist"
- **Solução**: Execute as migrations novamente, na ordem correta

### Erro: "permission denied for table"
- **Solução**: Verifique se as RLS policies foram criadas (migration 001-009)

### Smoke tests falham
- **Solução**: Verifique `.env.local` está configurado com as credenciais corretas

### Build falha
- **Solução**: Execute `npm install` novamente

### Edge Functions não funcionam
- **Solução**: Verifique se os secrets foram configurados com `supabase secrets set`

---

## 📞 Suporte

- Documentação Supabase: https://supabase.com/docs
- Discord Supabase: https://discord.supabase.com
- GitHub Issues: [link-do-seu-repo]

---

✨ **Parabéns!** Seu backend EAD está configurado e pronto para uso!

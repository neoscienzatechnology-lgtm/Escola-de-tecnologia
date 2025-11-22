# Guia de Deploy em Produção

Este guia cobre o deploy completo da aplicação em ambiente de produção.

## 📋 Pré-requisitos

- [ ] Backend configurado e testado localmente
- [ ] Projeto Supabase em produção (plano pago recomendado)
- [ ] Conta Vercel, Netlify ou outra plataforma de hosting
- [ ] Domínio personalizado (opcional)
- [ ] Git repository configurado

---

## 🚀 Opção 1: Deploy na Vercel (Recomendado)

### Passo 1: Preparar o Repositório

```bash
# Certifique-se que tudo está commitado
git status
git add .
git commit -m "Prepare for production deployment"
git push origin main
```

### Passo 2: Conectar à Vercel

#### Via Dashboard:

1. Acesse https://vercel.com
2. Clique em "**Add New Project**"
3. Importe seu repositório do GitHub
4. Configure o projeto:
   - Framework Preset: **Next.js**
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`

#### Via CLI:

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Seguir prompts interativos
```

### Passo 3: Configurar Environment Variables

No dashboard da Vercel:

1. Vá em **Settings** > **Environment Variables**
2. Adicione as variáveis:

**Production Environment:**
```
NEXT_PUBLIC_SUPABASE_URL = https://seu-projeto-prod.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY = sua-anon-key-prod
SUPABASE_SERVICE_ROLE_KEY = sua-service-role-key-prod
```

⚠️ Use credenciais do projeto de **PRODUÇÃO** do Supabase

**Preview Environment (opcional):**
- Configure separadamente para branches de staging/preview

### Passo 4: Deploy

```bash
# Deploy para produção
vercel --prod

# Ou via git push (se configurado)
git push origin main
```

### Passo 5: Configurar Domínio

1. No dashboard Vercel, vá em **Settings** > **Domains**
2. Adicione seu domínio personalizado
3. Configure DNS conforme instruções

---

## 🌐 Opção 2: Deploy na Netlify

### Passo 1: Build Command

Crie `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Passo 2: Deploy

1. Acesse https://netlify.com
2. Clique em "**Add new site**" > "Import an existing project"
3. Conecte ao GitHub
4. Configure:
   - Build command: `npm run build`
   - Publish directory: `.next`

### Passo 3: Environment Variables

Em **Site settings** > **Environment variables**, adicione:
```
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
```

---

## ☁️ Opção 3: Deploy em Outras Plataformas

### Railway

```bash
# Instalar CLI
npm i -g @railway/cli

# Login
railway login

# Deploy
railway up
```

### Render

1. Conecte repositório no dashboard
2. Configure build: `npm run build`
3. Configure start: `npm run start`

### AWS Amplify

1. Console AWS > Amplify
2. "New app" > "Host web app"
3. Conecte repositório
4. Configure variáveis de ambiente

---

## 🗄️ Configuração de Produção do Supabase

### 1. Criar Projeto de Produção

⚠️ **Recomendação**: Use um projeto Supabase separado para produção

1. Crie novo projeto em https://supabase.com
2. Escolha região apropriada
3. Escolha plano adequado (Pro recomendado)

### 2. Executar Migrations em Produção

**Opção A: SQL Editor**
- Execute cada migration manualmente (como no desenvolvimento)

**Opção B: Supabase CLI**
```bash
# Link ao projeto de produção
supabase link --project-ref seu-project-ref-prod

# Push migrations
supabase db push
```

### 3. Popular Dados Iniciais

⚠️ **NÃO** execute o seed completo em produção!

Crie dados iniciais específicos:
```sql
-- Criar usuário admin inicial
INSERT INTO public.users (id, display_name, role, avatar_url)
VALUES (
  'seu-uuid-admin',
  'Admin Sistema',
  'admin',
  'url-avatar'
);

-- Criar cursos reais (não de exemplo)
-- ...
```

### 4. Configurar Backup

1. No dashboard Supabase, vá em **Database** > **Backups**
2. Configure:
   - Daily backups: **Enabled**
   - Point-in-time recovery: **Enabled** (plano Pro)
   - Retention: 7-30 dias

### 5. Configurar Storage em Produção

1. Crie os buckets (mesmo processo)
2. Upload de assets reais
3. Configure CORS se necessário:

```sql
-- CORS para storage
UPDATE storage.buckets
SET public = true,
    file_size_limit = 52428800, -- 50MB
    allowed_mime_types = ARRAY['image/jpeg', 'image/png', 'image/gif']
WHERE id = 'public-assets';
```

---

## 🔐 Segurança em Produção

### 1. Environment Variables

✅ **FAZER:**
- Usar variáveis de ambiente para secrets
- Nunca commitar `.env.local` ou `.env`
- Usar diferentes keys para prod/dev

❌ **NÃO FAZER:**
- Hardcode de credentials
- Expor SERVICE_ROLE_KEY no client
- Usar mesmas keys em dev e prod

### 2. RLS Policies

Verifique todas as policies antes de produção:

```sql
-- Verificar quais tabelas têm RLS
SELECT schemaname, tablename, rowsecurity
FROM pg_tables
WHERE schemaname = 'public';

-- Verificar policies ativas
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check
FROM pg_policies
WHERE schemaname = 'public';
```

### 3. Rate Limiting

Configure no Supabase Dashboard:
- **Authentication** > **Rate Limits**
- Limite requests por IP/usuário

### 4. API Keys Rotation

Periodicamente, rotacione suas keys:
1. Gere novas keys no Supabase
2. Atualize em todas as plataformas
3. Teste antes de remover keys antigas
4. Remova keys antigas após migração

---

## 📊 Monitoramento

### 1. Supabase Metrics

No dashboard Supabase:
- **Reports** > Visualize:
  - Database usage
  - API requests
  - Storage usage
  - Active users

### 2. Vercel Analytics

Habilite no projeto:
```bash
vercel analytics enable
```

### 3. Error Tracking

Recomendações:
- **Sentry**: `npm install @sentry/nextjs`
- **LogRocket**: Frontend monitoring
- **DataDog**: Full-stack monitoring

Exemplo Sentry:

```bash
# Instalar
npm install @sentry/nextjs

# Configurar
npx @sentry/wizard -i nextjs
```

### 4. Uptime Monitoring

Ferramentas recomendadas:
- UptimeRobot (free)
- Pingdom
- StatusCake

---

## 🔄 CI/CD Pipeline

### GitHub Actions (Já Configurado)

O arquivo `.github/workflows/backend-ci.yml` já está configurado.

### Deploy Automático

Configure no Vercel/Netlify:
1. **Production**: Deploy automático de `main`
2. **Preview**: Deploy de PRs e branches

### Staging Environment

Recomendação:
```
main -> Production
develop -> Staging
feature/* -> Preview
```

Configure múltiplos ambientes:
```bash
# .env.production
NEXT_PUBLIC_SUPABASE_URL=prod-url

# .env.staging
NEXT_PUBLIC_SUPABASE_URL=staging-url
```

---

## 📈 Otimizações de Performance

### 1. Next.js

```javascript
// next.config.js
module.exports = {
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  
  images: {
    domains: ['*.supabase.co'],
    formats: ['image/avif', 'image/webp'],
  },
}
```

### 2. Supabase

- Use connection pooling
- Configure índices adequados
- Otimize queries complexas
- Use materialized views se necessário

### 3. Caching

```typescript
// Exemplo de cache em API route
export const revalidate = 3600 // 1 hora

export async function GET() {
  // ... fetch data
}
```

---

## 🧪 Testes em Produção

### Smoke Tests Pós-Deploy

```bash
# Configure variáveis de prod
export NEXT_PUBLIC_SUPABASE_URL="prod-url"
export SUPABASE_SERVICE_ROLE_KEY="prod-key"

# Execute smoke tests
npm run test:smoke
```

### Testes Manuais

Checklist:
- [ ] Login/Signup funciona
- [ ] Listar cursos funciona
- [ ] Enrollment funciona
- [ ] Progress tracking funciona
- [ ] Certificado gera corretamente
- [ ] Storage serve arquivos
- [ ] Edge Functions executam

---

## 📝 Checklist de Deploy

### Pré-Deploy
- [ ] Código testado localmente
- [ ] Migrations executadas em prod
- [ ] Storage configurado
- [ ] Environment variables configuradas
- [ ] Secrets rotacionados
- [ ] Backup configurado

### Deploy
- [ ] Build passa sem erros
- [ ] Deploy completo
- [ ] Domínio configurado
- [ ] SSL ativo (HTTPS)

### Pós-Deploy
- [ ] Smoke tests passam
- [ ] Testes manuais completos
- [ ] Monitoring configurado
- [ ] Alerts configurados
- [ ] Documentação atualizada

---

## 🆘 Rollback

Se algo der errado:

### Vercel
```bash
# Listar deployments
vercel ls

# Promover deployment anterior
vercel promote [deployment-url]
```

### Supabase
```bash
# Restaurar backup
# Via dashboard: Database > Backups > Restore
```

### Git
```bash
# Reverter commit
git revert HEAD
git push origin main
```

---

## 📞 Suporte

Em caso de problemas:

1. **Vercel**: https://vercel.com/support
2. **Supabase**: https://supabase.com/support
3. **GitHub Issues**: [seu-repo]/issues

---

## 🎉 Deploy Completo!

Sua aplicação está agora em produção. Próximos passos:

1. Monitorar métricas
2. Coletar feedback de usuários
3. Iterar e melhorar
4. Escalar conforme necessário

**Boa sorte! 🚀**

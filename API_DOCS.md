# API Documentation

Documentação completa das APIs disponíveis no backend da Escola de Tecnologia.

## 🔐 Autenticação

Todas as APIs protegidas requerem um token JWT no header:

```
Authorization: Bearer <access_token>
```

Para obter o token, use o Supabase Auth:

```typescript
const { data: { session } } = await supabase.auth.getSession()
const token = session?.access_token
```

---

## 📚 API Endpoints

### 1. Enrollment API

#### `POST /api/enroll`

Inscreve um usuário autenticado em um curso.

**Autenticação:** Requerida

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

**Resposta Sucesso (201):**
```json
{
  "enrollment": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "user_id": "123e4567-e89b-12d3-a456-426614174000",
    "course_id": "789e0123-e89b-12d3-a456-426614174999",
    "progress": 0,
    "enrolled_at": "2024-01-15T10:30:00.000Z"
  }
}
```

**Erros:**

- `400`: Já inscrito no curso
- `401`: Token inválido ou ausente
- `404`: Curso não encontrado
- `500`: Erro interno

**Exemplo:**
```typescript
const response = await fetch('/api/enroll', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    courseId: '789e0123-e89b-12d3-a456-426614174999'
  })
})

const { enrollment } = await response.json()
```

---

### 2. Progress API

#### `POST /api/progress`

Salva ou atualiza o progresso de uma aula.

**Autenticação:** Requerida

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

**Resposta Sucesso (200):**
```json
{
  "progress": {
    "id": "660e8400-e29b-41d4-a716-446655440000",
    "enrollment_id": "550e8400-e29b-41d4-a716-446655440000",
    "lesson_id": "990e8400-e29b-41d4-a716-446655440000",
    "completed": true,
    "last_watched_at": "2024-01-15T10:35:00.000Z"
  },
  "enrollmentProgress": 33.33
}
```

**Campos:**
- `progress`: Dados da aula atualizada
- `enrollmentProgress`: Progresso total do curso (0-100)

**Erros:**

- `400`: Campos obrigatórios ausentes
- `401`: Token inválido ou ausente
- `404`: Enrollment não encontrado
- `500`: Erro interno

**Exemplo:**
```typescript
const response = await fetch('/api/progress', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    enrollmentId: '550e8400-e29b-41d4-a716-446655440000',
    lessonId: '990e8400-e29b-41d4-a716-446655440000',
    completed: true
  })
})

const { progress, enrollmentProgress } = await response.json()
console.log(`Curso ${enrollmentProgress}% completo`)
```

---

### 3. Courses API

#### `GET /api/courses`

Lista cursos disponíveis com filtros opcionais.

**Autenticação:** Opcional

**Query Parameters:**

- `published` (string, opcional): Filtrar por status de publicação
  - `"true"`: Apenas cursos publicados
  - Omitir: Todos os cursos (requer autenticação)
  
- `userId` (uuid, opcional): Incluir dados de enrollment do usuário

**Exemplos de URL:**
```
GET /api/courses?published=true
GET /api/courses?published=true&userId=123e4567-e89b-12d3-a456-426614174000
```

**Resposta Sucesso (200):**
```json
{
  "courses": [
    {
      "id": "789e0123-e89b-12d3-a456-426614174999",
      "title": "Desenvolvimento Fullstack Moderno",
      "slug": "fullstack-moderno",
      "description": "Aprenda a desenvolver aplicações web completas...",
      "cover_url": "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      "difficulty": "intermediate",
      "published": true,
      "created_at": "2024-01-01T00:00:00.000Z",
      "modules": [
        {
          "id": "890e0123-e89b-12d3-a456-426614174888",
          "title": "Fundamentos de React e Next.js",
          "order": 1
        },
        {
          "id": "891e0123-e89b-12d3-a456-426614174888",
          "title": "Backend com Node.js e PostgreSQL",
          "order": 2
        }
      ],
      "enrollment": {
        "course_id": "789e0123-e89b-12d3-a456-426614174999",
        "progress": 33.33,
        "enrolled_at": "2024-01-10T00:00:00.000Z"
      }
    }
  ]
}
```

**Nota:** O campo `enrollment` só aparece se `userId` for fornecido e o usuário estiver inscrito.

**Erros:**

- `500`: Erro interno

**Exemplo:**
```typescript
// Listar cursos publicados
const response = await fetch('/api/courses?published=true')
const { courses } = await response.json()

// Listar cursos com enrollment do usuário
const userId = user.id
const response2 = await fetch(`/api/courses?published=true&userId=${userId}`)
const { courses: coursesWithEnrollment } = await response2.json()
```

---

### 4. Certificate API

#### `POST /api/certificate`

Gera um certificado para um curso completo (100% de progresso).

**Autenticação:** Requerida

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

**Resposta Sucesso (201):**
```json
{
  "certificate": {
    "id": "770e8400-e29b-41d4-a716-446655440000",
    "user_id": "123e4567-e89b-12d3-a456-426614174000",
    "course_id": "789e0123-e89b-12d3-a456-426614174999",
    "certificate_url": "/certificates/123e4567_789e0123_1705319400000.pdf",
    "issued_at": "2024-01-15T11:30:00.000Z"
  },
  "message": "Certificate generated successfully"
}
```

**Resposta: Certificado Já Existe (200):**
```json
{
  "certificate": {
    "id": "770e8400-e29b-41d4-a716-446655440000",
    "certificate_url": "/certificates/123e4567_789e0123_1705319400000.pdf"
  },
  "message": "Certificate already exists"
}
```

**Erros:**

- `400`: Curso não completo (progresso < 100%)
  ```json
  {
    "error": "Course not completed yet",
    "progress": 75.5
  }
  ```
- `401`: Token inválido ou ausente
- `404`: Enrollment não encontrado
- `500`: Erro interno

**Exemplo:**
```typescript
const response = await fetch('/api/certificate', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    courseId: '789e0123-e89b-12d3-a456-426614174999'
  })
})

if (response.ok) {
  const { certificate } = await response.json()
  console.log('Certificado:', certificate.certificate_url)
} else {
  const { error, progress } = await response.json()
  console.log(`Erro: ${error}. Progresso: ${progress}%`)
}
```

---

## 🔧 Edge Functions

### 1. Generate Certificate Function

#### `POST /functions/v1/generate-certificate`

Gera certificado em PDF (chamado internamente pela API `/api/certificate`).

**Autenticação:** Service Role Key (não chamar diretamente do client)

**Body:**
```json
{
  "userId": "uuid-do-usuario",
  "courseId": "uuid-do-curso"
}
```

**Resposta:**
```json
{
  "certificate": {
    "id": "...",
    "certificate_url": "..."
  },
  "content": "CERTIFICATE OF COMPLETION...",
  "message": "Certificate generated successfully"
}
```

---

### 2. Webhook Handler Function

#### `POST /functions/v1/webhook-handler`

Processa webhooks de eventos externos.

**Autenticação:** Configurável (webhook secret)

**Events Suportados:**

**Event: payment.completed**
```json
{
  "event": "payment.completed",
  "userId": "uuid-do-usuario",
  "courseId": "uuid-do-curso"
}
```

Cria enrollment automaticamente.

**Event: course.completed**
```json
{
  "event": "course.completed",
  "userId": "uuid-do-usuario",
  "courseId": "uuid-do-curso"
}
```

Gera certificado automaticamente.

**Resposta:**
```json
{
  "message": "Webhook processed",
  "status": "success"
}
```

---

## 📊 Database Direct Access (via Supabase Client)

Além das APIs, você pode acessar o banco diretamente usando o Supabase client (com RLS aplicado).

### Listar Cursos Publicados

```typescript
const { data: courses, error } = await supabase
  .from('courses')
  .select(`
    *,
    modules (
      id,
      title,
      order,
      lessons (
        id,
        title,
        order
      )
    )
  `)
  .eq('published', true)
  .order('created_at', { ascending: false })
```

### Obter Detalhes do Curso

```typescript
const { data: course, error } = await supabase
  .from('courses')
  .select(`
    *,
    modules (
      *,
      lessons (*)
    )
  `)
  .eq('slug', 'fullstack-moderno')
  .single()
```

### Verificar Enrollment

```typescript
const { data: enrollment, error } = await supabase
  .from('enrollments')
  .select('*')
  .eq('user_id', userId)
  .eq('course_id', courseId)
  .single()
```

### Obter Progresso do Aluno

```typescript
const { data: progress, error } = await supabase
  .from('lesson_progress')
  .select(`
    *,
    lessons (
      id,
      title,
      modules (
        id,
        title
      )
    )
  `)
  .eq('enrollment_id', enrollmentId)
  .order('last_watched_at', { ascending: false })
```

### Listar Certificados do Usuário

```typescript
const { data: certificates, error } = await supabase
  .from('certificates')
  .select(`
    *,
    courses (
      title,
      slug
    )
  `)
  .eq('user_id', userId)
  .order('issued_at', { ascending: false })
```

### Buscar Trilhas (Paths)

```typescript
const { data: paths, error } = await supabase
  .from('paths')
  .select(`
    *,
    path_courses (
      order,
      courses (
        id,
        title,
        slug,
        cover_url,
        difficulty
      )
    )
  `)
  .order('created_at', { ascending: false })
```

---

## 🔒 Segurança e RLS

Todas as queries diretas via Supabase client respeitam Row Level Security (RLS).

### Policies Aplicadas:

1. **users**: Usuários veem apenas seu próprio perfil
2. **enrollments**: Usuários veem apenas suas inscrições
3. **lesson_progress**: Usuários gerenciam apenas seu progresso
4. **certificates**: Usuários veem apenas seus certificados
5. **courses**: Todos veem cursos publicados

### Bypass RLS (apenas server-side):

Use `supabaseAdmin` para operações que precisam bypass RLS:

```typescript
// Apenas em API routes server-side!
import { supabaseAdmin } from '@/lib/supabase-admin'

const { data } = await supabaseAdmin
  .from('users')
  .select('*')
// RLS é ignorado
```

---

## 📝 Rate Limits

**Recomendações de produção:**

- Auth endpoints: 30 requests/minuto
- API Routes: 100 requests/minuto
- Supabase direct access: 1000 requests/minuto

Configure no Supabase Dashboard > Settings > API

---

## 🧪 Testing

### Exemplo com cURL

```bash
# Obter token
TOKEN="seu-access-token"

# Listar cursos
curl https://seu-dominio.com/api/courses?published=true

# Inscrever em curso
curl -X POST https://seu-dominio.com/api/enroll \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"courseId":"789e0123-e89b-12d3-a456-426614174999"}'

# Salvar progresso
curl -X POST https://seu-dominio.com/api/progress \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "enrollmentId":"550e8400-e29b-41d4-a716-446655440000",
    "lessonId":"990e8400-e29b-41d4-a716-446655440000",
    "completed":true
  }'
```

### Exemplo com Postman

1. Criar collection "Escola de Tecnologia"
2. Adicionar environment variable `BASE_URL` e `TOKEN`
3. Criar requests:
   - GET {{BASE_URL}}/api/courses
   - POST {{BASE_URL}}/api/enroll
   - POST {{BASE_URL}}/api/progress
   - POST {{BASE_URL}}/api/certificate

---

## 🐛 Error Codes

| Código | Significado | Ação |
|--------|-------------|------|
| 400 | Bad Request | Verificar body/params |
| 401 | Unauthorized | Renovar token |
| 403 | Forbidden | Verificar permissões RLS |
| 404 | Not Found | Recurso não existe |
| 500 | Internal Error | Verificar logs |

---

## 📞 Suporte

Para questões sobre a API:
- GitHub Issues: [link-do-repo]
- Email: suporte@escolatecnologia.com

---

Documentação atualizada em: 2024-01-15

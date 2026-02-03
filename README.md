# Escola de Tecnologia - GitHub Pages

Plataforma educacional simplificada para GitHub Pages com funcionalidades básicas de EAD.

## 🚀 Demo

Acesse: [https://neoscienzatechnology-lgtm.github.io/Escola-de-tecnologia/](https://neoscienzatechnology-lgtm.github.io/Escola-de-tecnologia/)

## ✨ Funcionalidades

- ✅ Landing page responsiva
- ✅ Catálogo de cursos
- ✅ Sistema de login simulado (localStorage)
- ✅ Matrícula em cursos
- ✅ Player de vídeo simulado
- ✅ Progresso de aulas
- ✅ Interface moderna com Tailwind CSS

## 🛠️ Tecnologias

- **HTML5** - Estrutura das páginas
- **CSS3** - Estilização via Tailwind CSS CDN
- **JavaScript** - Funcionalidades interativas
- **Font Awesome** - Ícones
- **GitHub Pages** - Hospedagem gratuita

## 📁 Estrutura

```
.
├── index.html          # Página principal
├── course.html         # Página do curso
├── script.js          # JavaScript principal
└── .github/workflows/
    └── deploy.yml     # Deploy automático
```

## 🎯 Funcionalidades Implementadas

### Landing Page
- Header com navegação
- Hero section atrativo
- Grid de cursos
- Seção de recursos
- Footer informativo

### Sistema de Autenticação
- Modal de login
- Persistência no localStorage
- Estado de usuário logado
- Logout funcional

### Catálogo de Cursos
- 6 cursos de exemplo
- Informações detalhadas
- Sistema de matrícula
- Status de inscrição

### Página do Curso
- Player de vídeo simulado
- Módulos e aulas
- Barra de progresso
- Marcação de conclusão

## 🚀 Como Usar

### Deploy Automático
1. Fork este repositório
2. Vá em Settings > Pages
3. Selecione "GitHub Actions" como source
4. O deploy será automático a cada push

### Desenvolvimento Local
```bash
# Clone o repositório
git clone https://github.com/neoscienzatechnology-lgtm/Escola-de-tecnologia.git

# Abra index.html no navegador
# Ou use um servidor local:
npx serve .
```

## 📱 Responsividade

- ✅ Mobile First
- ✅ Tablet otimizado
- ✅ Desktop completo
- ✅ Navegação adaptativa

## 🎨 Design

- **Cores**: Azul (#3B82F6) como primária
- **Tipografia**: Sistema padrão
- **Ícones**: Font Awesome 6
- **Layout**: Grid responsivo
- **Animações**: Hover effects

## 🔧 Personalização

### Adicionar Novos Cursos
Edite o array `courses` em `script.js`:

```javascript
const courses = [
    {
        id: 7,
        title: "Novo Curso",
        description: "Descrição do curso",
        image: "URL_da_imagem",
        duration: "X horas",
        level: "Nível",
        price: "R$ XXX"
    }
];
```

### Modificar Cores
Altere as classes Tailwind no HTML:
- `bg-blue-600` → `bg-green-600`
- `text-blue-600` → `text-green-600`

### Adicionar Páginas
1. Crie novo arquivo HTML
2. Inclua header/footer padrão
3. Adicione link na navegação

## 📊 Dados Simulados

### Usuários de Teste
- **Email**: qualquer@email.com
- **Senha**: qualquer senha
- **Persistência**: localStorage

### Cursos Disponíveis
1. Desenvolvimento Web Fullstack
2. Python para Data Science
3. DevOps e Cloud Computing
4. Mobile com React Native
5. UI/UX Design
6. Cybersecurity Essentials

## 🔄 Atualizações Futuras

- [ ] Integração com API real
- [ ] Sistema de pagamento
- [ ] Chat de suporte
- [ ] Certificados em PDF
- [ ] Avaliações e quizzes
- [ ] Fórum de discussão

## 📄 Licença

MIT License - veja [LICENSE](LICENSE) para detalhes.

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

---

Desenvolvido com ❤️ para educação acessível
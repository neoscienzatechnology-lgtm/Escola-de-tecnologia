export interface Course {
  id: number;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  duration: string;
  level: string;
  price: string;
  category: string;
  gradient: string;
  skills: string[];
  syllabus: {
    module: string;
    topics: string[];
  }[];
  instructor: {
    name: string;
    bio: string;
    expertise: string;
  };
}

export const courses: Course[] = [
  {
    id: 1,
    slug: "desenvolvimento-full-stack",
    title: "Desenvolvimento Full Stack",
    description: "Domine as tecnologias mais modernas do mercado",
    longDescription: "Aprenda a desenvolver aplicações web completas, do front-end ao back-end, utilizando as tecnologias mais demandadas pelo mercado. Este curso abrangente prepara você para se tornar um desenvolvedor completo.",
    duration: "12 meses",
    level: "Básico ao Avançado",
    price: "12x de R$ 297",
    category: "Desenvolvimento",
    gradient: "from-neonPink to-purple-600",
    skills: ["React", "Next.js", "Node.js", "TypeScript", "MongoDB", "PostgreSQL", "Docker", "Git"],
    syllabus: [
      {
        module: "Módulo 1 - Fundamentos Web",
        topics: ["HTML5 e CSS3 Avançado", "JavaScript Moderno (ES6+)", "Git e GitHub", "Design Responsivo"]
      },
      {
        module: "Módulo 2 - Front-end Moderno",
        topics: ["React e Hooks", "Next.js e SSR", "TypeScript", "TailwindCSS", "Estado Global"]
      },
      {
        module: "Módulo 3 - Back-end",
        topics: ["Node.js e Express", "APIs RESTful", "Autenticação JWT", "Banco de Dados SQL e NoSQL"]
      },
      {
        module: "Módulo 4 - DevOps e Deploy",
        topics: ["Docker e Containers", "CI/CD", "Deploy em Cloud", "Monitoramento"]
      }
    ],
    instructor: {
      name: "Prof. Carlos Silva",
      bio: "15 anos de experiência em desenvolvimento web",
      expertise: "Especialista em arquitetura de software e JavaScript"
    }
  },
  {
    id: 2,
    slug: "data-science-ia",
    title: "Data Science & IA",
    description: "Aprenda análise de dados e inteligência artificial",
    longDescription: "Mergulhe no mundo da ciência de dados e inteligência artificial. Aprenda a extrair insights valiosos de dados, construir modelos de machine learning e criar soluções de IA para problemas reais.",
    duration: "10 meses",
    level: "Intermediário",
    price: "12x de R$ 347",
    category: "Dados & IA",
    gradient: "from-neonPurple to-blue-600",
    skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "PyTorch", "SQL", "Estatística"],
    syllabus: [
      {
        module: "Módulo 1 - Fundamentos de Python",
        topics: ["Python para Data Science", "Estruturas de Dados", "NumPy e Pandas", "Visualização de Dados"]
      },
      {
        module: "Módulo 2 - Estatística e Análise",
        topics: ["Estatística Descritiva", "Inferência Estatística", "Análise Exploratória", "Storytelling com Dados"]
      },
      {
        module: "Módulo 3 - Machine Learning",
        topics: ["Algoritmos Supervisionados", "Algoritmos Não Supervisionados", "Feature Engineering", "Avaliação de Modelos"]
      },
      {
        module: "Módulo 4 - Deep Learning",
        topics: ["Redes Neurais", "TensorFlow e Keras", "Computer Vision", "NLP"]
      }
    ],
    instructor: {
      name: "Dra. Ana Paula",
      bio: "Doutora em Ciência da Computação",
      expertise: "Especialista em Machine Learning e IA"
    }
  },
  {
    id: 3,
    slug: "devops-cloud",
    title: "DevOps & Cloud",
    description: "Infraestrutura moderna e automação de processos",
    longDescription: "Domine as práticas de DevOps e computação em nuvem. Aprenda a automatizar processos, gerenciar infraestrutura como código e implementar pipelines de CI/CD em ambientes cloud.",
    duration: "8 meses",
    level: "Intermediário ao Avançado",
    price: "12x de R$ 327",
    category: "Infraestrutura",
    gradient: "from-pink-600 to-neonPink",
    skills: ["Docker", "Kubernetes", "AWS", "Azure", "Terraform", "Jenkins", "GitHub Actions", "Linux"],
    syllabus: [
      {
        module: "Módulo 1 - Fundamentos DevOps",
        topics: ["Cultura DevOps", "Linux Avançado", "Shell Scripting", "Controle de Versão"]
      },
      {
        module: "Módulo 2 - Containers",
        topics: ["Docker Fundamentals", "Docker Compose", "Kubernetes", "Orquestração de Containers"]
      },
      {
        module: "Módulo 3 - Cloud Computing",
        topics: ["AWS Services", "Azure Fundamentals", "Arquitetura Cloud", "Segurança em Cloud"]
      },
      {
        module: "Módulo 4 - CI/CD e IaC",
        topics: ["Jenkins e GitHub Actions", "Terraform", "Ansible", "Monitoring e Logs"]
      }
    ],
    instructor: {
      name: "Eng. Roberto Alves",
      bio: "Cloud Architect Certificado",
      expertise: "Especialista em AWS e Kubernetes"
    }
  },
  {
    id: 4,
    slug: "ux-ui-design",
    title: "UX/UI Design",
    description: "Crie experiências digitais incríveis",
    longDescription: "Aprenda a criar interfaces intuitivas e experiências de usuário memoráveis. Domine as ferramentas e metodologias de design thinking, prototipagem e testes de usabilidade.",
    duration: "6 meses",
    level: "Básico ao Intermediário",
    price: "12x de R$ 247",
    category: "Design",
    gradient: "from-purple-600 to-neonPurple",
    skills: ["Figma", "Adobe XD", "Design Thinking", "Prototipagem", "User Research", "Acessibilidade", "Design Systems"],
    syllabus: [
      {
        module: "Módulo 1 - Fundamentos de Design",
        topics: ["Princípios de Design", "Tipografia", "Teoria das Cores", "Layout e Composição"]
      },
      {
        module: "Módulo 2 - UX Research",
        topics: ["Pesquisa com Usuários", "Personas", "Jornada do Usuário", "Testes de Usabilidade"]
      },
      {
        module: "Módulo 3 - UI Design",
        topics: ["Design de Interfaces", "Prototipagem", "Figma Avançado", "Animações e Microinterações"]
      },
      {
        module: "Módulo 4 - Design Systems",
        topics: ["Componentes Reutilizáveis", "Documentação", "Handoff para Devs", "Acessibilidade"]
      }
    ],
    instructor: {
      name: "Designer Mariana Costa",
      bio: "10 anos de experiência em UX/UI",
      expertise: "Especialista em Design Systems e Acessibilidade"
    }
  },
  {
    id: 5,
    slug: "desenvolvimento-mobile",
    title: "Desenvolvimento Mobile",
    description: "Crie apps nativos e cross-platform",
    longDescription: "Desenvolva aplicativos móveis profissionais para iOS e Android. Aprenda React Native, Flutter e as melhores práticas de desenvolvimento mobile.",
    duration: "9 meses",
    level: "Intermediário",
    price: "12x de R$ 297",
    category: "Desenvolvimento",
    gradient: "from-blue-600 to-cyan-600",
    skills: ["React Native", "Flutter", "iOS", "Android", "Firebase", "App Store", "Google Play"],
    syllabus: [
      {
        module: "Módulo 1 - Fundamentos Mobile",
        topics: ["Mobile First Design", "UI/UX Mobile", "Navegação", "Componentes Nativos"]
      },
      {
        module: "Módulo 2 - React Native",
        topics: ["React Native CLI", "Expo", "Navigation", "State Management"]
      },
      {
        module: "Módulo 3 - Flutter",
        topics: ["Dart Language", "Widgets", "State Management", "Animações"]
      },
      {
        module: "Módulo 4 - Publicação",
        topics: ["App Store Guidelines", "Google Play Console", "CI/CD Mobile", "Analytics"]
      }
    ],
    instructor: {
      name: "Prof. Lucas Martins",
      bio: "Mobile Developer há 8 anos",
      expertise: "Especialista em React Native e Flutter"
    }
  },
  {
    id: 6,
    slug: "seguranca-cibernetica",
    title: "Segurança Cibernética",
    description: "Proteja sistemas e dados contra ameaças",
    longDescription: "Torne-se um especialista em segurança da informação. Aprenda a identificar vulnerabilidades, realizar testes de penetração e implementar medidas de proteção.",
    duration: "10 meses",
    level: "Intermediário ao Avançado",
    price: "12x de R$ 367",
    category: "Segurança",
    gradient: "from-red-600 to-orange-600",
    skills: ["Ethical Hacking", "Penetration Testing", "Network Security", "Cryptography", "OWASP", "Linux Security"],
    syllabus: [
      {
        module: "Módulo 1 - Fundamentos de Segurança",
        topics: ["Conceitos de Segurança", "Tipos de Ataques", "Criptografia", "Segurança de Redes"]
      },
      {
        module: "Módulo 2 - Ethical Hacking",
        topics: ["Reconnaissance", "Scanning", "Exploitation", "Post-Exploitation"]
      },
      {
        module: "Módulo 3 - Web Security",
        topics: ["OWASP Top 10", "SQL Injection", "XSS", "CSRF", "Security Testing"]
      },
      {
        module: "Módulo 4 - Compliance e Governança",
        topics: ["ISO 27001", "LGPD", "GDPR", "Security Policies"]
      }
    ],
    instructor: {
      name: "Dr. Pedro Santos",
      bio: "Security Researcher",
      expertise: "Certificado CEH e OSCP"
    }
  }
];

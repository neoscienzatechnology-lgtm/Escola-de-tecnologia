export interface Student {
  id: string;
  name: string;
  email: string;
  avatar: string;
  enrolledCourses: string[];
  completedCourses: string[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  progress: number;
  modules: Module[];
  duration: string;
  level: 'Iniciante' | 'Intermediário' | 'Avançado';
  instructor: string;
  status: 'enrolled' | 'completed' | 'in-progress';
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
  duration: string;
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
  videoUrl?: string;
  description: string;
}

export interface Track {
  id: string;
  title: string;
  description: string;
  icon: string;
  courses: string[];
  stages: TrackStage[];
}

export interface TrackStage {
  id: string;
  title: string;
  description: string;
  status: 'completed' | 'current' | 'pending';
  courseId?: string;
}

export interface CalendarEvent {
  id: string;
  title: string;
  date: Date;
  type: 'aula' | 'live' | 'prazo';
  description: string;
}

// Mock Student Data
export const mockStudent: Student = {
  id: '1',
  name: 'João Silva',
  email: 'joao.silva@example.com',
  avatar: '/avatars/default.jpg',
  enrolledCourses: ['1', '2', '3'],
  completedCourses: ['4'],
};

// Mock Courses Data
export const mockCourses: Course[] = [
  {
    id: '1',
    title: 'Desenvolvimento Web Full Stack',
    description: 'Aprenda a desenvolver aplicações web completas do zero',
    thumbnail: '🚀',
    progress: 65,
    duration: '120 horas',
    level: 'Intermediário',
    instructor: 'Prof. Maria Santos',
    status: 'in-progress',
    modules: [
      {
        id: '1-1',
        title: 'Fundamentos de HTML e CSS',
        duration: '15 horas',
        lessons: [
          {
            id: '1-1-1',
            title: 'Introdução ao HTML',
            duration: '45 min',
            completed: true,
            description: 'Aprenda os conceitos básicos de HTML e estrutura de páginas web.',
          },
          {
            id: '1-1-2',
            title: 'CSS Básico',
            duration: '60 min',
            completed: true,
            description: 'Estilize suas páginas com CSS.',
          },
          {
            id: '1-1-3',
            title: 'Flexbox e Grid',
            duration: '90 min',
            completed: false,
            description: 'Aprenda layouts modernos com Flexbox e CSS Grid.',
          },
        ],
      },
      {
        id: '1-2',
        title: 'JavaScript Moderno',
        duration: '25 horas',
        lessons: [
          {
            id: '1-2-1',
            title: 'Variáveis e Tipos de Dados',
            duration: '50 min',
            completed: false,
            description: 'Entenda os tipos de dados em JavaScript.',
          },
          {
            id: '1-2-2',
            title: 'Funções e Arrow Functions',
            duration: '60 min',
            completed: false,
            description: 'Domine funções em JavaScript.',
          },
        ],
      },
      {
        id: '1-3',
        title: 'React e Next.js',
        duration: '30 horas',
        lessons: [
          {
            id: '1-3-1',
            title: 'Introdução ao React',
            duration: '90 min',
            completed: false,
            description: 'Aprenda os fundamentos do React.',
          },
        ],
      },
    ],
  },
  {
    id: '2',
    title: 'Python para Data Science',
    description: 'Análise de dados e machine learning com Python',
    thumbnail: '🐍',
    progress: 30,
    duration: '100 horas',
    level: 'Iniciante',
    instructor: 'Prof. Carlos Oliveira',
    status: 'in-progress',
    modules: [
      {
        id: '2-1',
        title: 'Python Básico',
        duration: '20 horas',
        lessons: [
          {
            id: '2-1-1',
            title: 'Introdução ao Python',
            duration: '60 min',
            completed: true,
            description: 'Primeiros passos com Python.',
          },
          {
            id: '2-1-2',
            title: 'Estruturas de Dados',
            duration: '75 min',
            completed: false,
            description: 'Listas, tuplas, dicionários e sets.',
          },
        ],
      },
    ],
  },
  {
    id: '3',
    title: 'DevOps e Cloud Computing',
    description: 'Aprenda a gerenciar infraestrutura na nuvem',
    thumbnail: '☁️',
    progress: 10,
    duration: '80 horas',
    level: 'Avançado',
    instructor: 'Prof. Ana Costa',
    status: 'enrolled',
    modules: [
      {
        id: '3-1',
        title: 'Introdução ao DevOps',
        duration: '15 horas',
        lessons: [
          {
            id: '3-1-1',
            title: 'O que é DevOps?',
            duration: '45 min',
            completed: true,
            description: 'Entenda a cultura DevOps.',
          },
        ],
      },
    ],
  },
  {
    id: '4',
    title: 'Git e GitHub',
    description: 'Controle de versão para desenvolvedores',
    thumbnail: '📦',
    progress: 100,
    duration: '20 horas',
    level: 'Iniciante',
    instructor: 'Prof. Pedro Lima',
    status: 'completed',
    modules: [
      {
        id: '4-1',
        title: 'Git Básico',
        duration: '10 horas',
        lessons: [
          {
            id: '4-1-1',
            title: 'Comandos Básicos',
            duration: '60 min',
            completed: true,
            description: 'Aprenda git init, add, commit e push.',
          },
        ],
      },
    ],
  },
];

// Mock Tracks Data
export const mockTracks: Track[] = [
  {
    id: 'fullstack',
    title: 'Trilha Full Stack',
    description: 'Torne-se um desenvolvedor completo',
    icon: '🚀',
    courses: ['1', '4'],
    stages: [
      {
        id: 'stage-1',
        title: 'Fundamentos',
        description: 'Git e versionamento',
        status: 'completed',
        courseId: '4',
      },
      {
        id: 'stage-2',
        title: 'Desenvolvimento Web',
        description: 'HTML, CSS, JavaScript e React',
        status: 'current',
        courseId: '1',
      },
      {
        id: 'stage-3',
        title: 'Backend',
        description: 'Node.js e bancos de dados',
        status: 'pending',
      },
      {
        id: 'stage-4',
        title: 'Deploy',
        description: 'DevOps e Cloud',
        status: 'pending',
        courseId: '3',
      },
    ],
  },
  {
    id: 'data-science',
    title: 'Trilha Data Science',
    description: 'Análise de dados e IA',
    icon: '📊',
    courses: ['2'],
    stages: [
      {
        id: 'ds-stage-1',
        title: 'Python para Dados',
        description: 'Fundamentos de Python',
        status: 'current',
        courseId: '2',
      },
      {
        id: 'ds-stage-2',
        title: 'Estatística',
        description: 'Conceitos estatísticos',
        status: 'pending',
      },
      {
        id: 'ds-stage-3',
        title: 'Machine Learning',
        description: 'Algoritmos de ML',
        status: 'pending',
      },
    ],
  },
  {
    id: 'cloud',
    title: 'Trilha Cloud',
    description: 'Infraestrutura na nuvem',
    icon: '☁️',
    courses: ['3'],
    stages: [
      {
        id: 'cloud-stage-1',
        title: 'DevOps Básico',
        description: 'Fundamentos de DevOps',
        status: 'current',
        courseId: '3',
      },
      {
        id: 'cloud-stage-2',
        title: 'AWS/Azure',
        description: 'Plataformas cloud',
        status: 'pending',
      },
    ],
  },
];

// Mock Calendar Events
export const mockCalendarEvents: CalendarEvent[] = [
  {
    id: '1',
    title: 'Live: JavaScript Avançado',
    date: new Date(2025, 10, 25, 19, 0),
    type: 'live',
    description: 'Aula ao vivo sobre conceitos avançados de JavaScript',
  },
  {
    id: '2',
    title: 'Projeto Final - Entrega',
    date: new Date(2025, 10, 30, 23, 59),
    type: 'prazo',
    description: 'Prazo final para entrega do projeto',
  },
  {
    id: '3',
    title: 'Aula: React Hooks',
    date: new Date(2025, 10, 27, 14, 0),
    type: 'aula',
    description: 'Aprofundamento em React Hooks',
  },
];

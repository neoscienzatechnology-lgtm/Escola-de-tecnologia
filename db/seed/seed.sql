-- Seed data for Escola de Tecnologia
-- Description: Populates database with sample data for testing

-- Note: This script assumes auth.users already has some users created via Supabase Auth
-- For testing, you'll need to sign up 3 users first, then update their roles

-- Insert sample users (extending auth.users)
-- These IDs should match actual auth.users IDs after signup
-- For demo purposes, we'll create placeholder profiles that can be linked later

-- Sample user profiles
INSERT INTO public.users (id, display_name, role, avatar_url) VALUES
  ('11111111-1111-1111-1111-111111111111', 'João Silva (Student)', 'student', 'https://api.dicebear.com/7.x/avataaars/svg?seed=joao'),
  ('22222222-2222-2222-2222-222222222222', 'Maria Santos (Teacher)', 'teacher', 'https://api.dicebear.com/7.x/avataaars/svg?seed=maria'),
  ('33333333-3333-3333-3333-333333333333', 'Admin User', 'admin', 'https://api.dicebear.com/7.x/avataaars/svg?seed=admin')
ON CONFLICT (id) DO NOTHING;

-- Insert sample courses
INSERT INTO public.courses (id, title, slug, description, cover_url, difficulty, created_by, published) VALUES
  (
    '10000000-0000-0000-0000-000000000001',
    'Desenvolvimento Fullstack Moderno',
    'fullstack-moderno',
    'Aprenda a desenvolver aplicações web completas usando as tecnologias mais modernas do mercado: React, Next.js, Node.js, TypeScript e PostgreSQL.',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800',
    'intermediate',
    '22222222-2222-2222-2222-222222222222',
    TRUE
  ),
  (
    '10000000-0000-0000-0000-000000000002',
    'Data Science e Machine Learning',
    'data-science-ml',
    'Domine os fundamentos de ciência de dados e aprendizado de máquina. Aprenda Python, Pandas, NumPy, Scikit-learn e TensorFlow.',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    'advanced',
    '22222222-2222-2222-2222-222222222222',
    TRUE
  ),
  (
    '10000000-0000-0000-0000-000000000003',
    'Cloud Computing e DevOps',
    'cloud-devops',
    'Aprenda a gerenciar infraestrutura em nuvem com AWS, Azure e GCP. Domine Docker, Kubernetes, CI/CD e práticas DevOps.',
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
    'advanced',
    '22222222-2222-2222-2222-222222222222',
    TRUE
  )
ON CONFLICT (id) DO NOTHING;

-- Insert modules for Fullstack course
INSERT INTO public.modules (id, course_id, title, "order") VALUES
  ('20000000-0000-0000-0000-000000000001', '10000000-0000-0000-0000-000000000001', 'Fundamentos de React e Next.js', 1),
  ('20000000-0000-0000-0000-000000000002', '10000000-0000-0000-0000-000000000001', 'Backend com Node.js e PostgreSQL', 2)
ON CONFLICT (id) DO NOTHING;

-- Insert modules for Data Science course
INSERT INTO public.modules (id, course_id, title, "order") VALUES
  ('20000000-0000-0000-0000-000000000003', '10000000-0000-0000-0000-000000000002', 'Python para Data Science', 1),
  ('20000000-0000-0000-0000-000000000004', '10000000-0000-0000-0000-000000000002', 'Machine Learning Fundamentals', 2)
ON CONFLICT (id) DO NOTHING;

-- Insert modules for Cloud course
INSERT INTO public.modules (id, course_id, title, "order") VALUES
  ('20000000-0000-0000-0000-000000000005', '10000000-0000-0000-0000-000000000003', 'Introdução a Cloud Computing', 1),
  ('20000000-0000-0000-0000-000000000006', '10000000-0000-0000-0000-000000000003', 'Container Orchestration com Kubernetes', 2)
ON CONFLICT (id) DO NOTHING;

-- Insert lessons for Fullstack Module 1
INSERT INTO public.lessons (id, module_id, title, content, video_url, "order") VALUES
  (
    '30000000-0000-0000-0000-000000000001',
    '20000000-0000-0000-0000-000000000001',
    'Introdução ao React',
    '{"markdown": "# Introdução ao React\\n\\nNesta aula você aprenderá os conceitos fundamentais do React.", "duration": "15min", "resources": ["https://react.dev"]}',
    '/videos/react-intro.mp4',
    1
  ),
  (
    '30000000-0000-0000-0000-000000000002',
    '20000000-0000-0000-0000-000000000001',
    'Componentes e Props',
    '{"markdown": "# Componentes e Props\\n\\nAprenda a criar e reutilizar componentes.", "duration": "20min"}',
    '/videos/react-components.mp4',
    2
  ),
  (
    '30000000-0000-0000-0000-000000000003',
    '20000000-0000-0000-0000-000000000001',
    'Next.js App Router',
    '{"markdown": "# Next.js App Router\\n\\nDomine o novo App Router do Next.js.", "duration": "25min"}',
    '/videos/nextjs-app-router.mp4',
    3
  )
ON CONFLICT (id) DO NOTHING;

-- Insert lessons for Fullstack Module 2
INSERT INTO public.lessons (id, module_id, title, content, video_url, "order") VALUES
  (
    '30000000-0000-0000-0000-000000000004',
    '20000000-0000-0000-0000-000000000002',
    'Node.js e Express',
    '{"markdown": "# Node.js e Express\\n\\nConstrua APIs RESTful com Node.js.", "duration": "30min"}',
    '/videos/nodejs-express.mp4',
    1
  ),
  (
    '30000000-0000-0000-0000-000000000005',
    '20000000-0000-0000-0000-000000000002',
    'PostgreSQL e Prisma',
    '{"markdown": "# PostgreSQL e Prisma\\n\\nGerenciamento de banco de dados.", "duration": "35min"}',
    '/videos/postgresql-prisma.mp4',
    2
  ),
  (
    '30000000-0000-0000-0000-000000000006',
    '20000000-0000-0000-0000-000000000002',
    'Autenticação e Segurança',
    '{"markdown": "# Autenticação e Segurança\\n\\nImplemente autenticação segura.", "duration": "40min"}',
    '/videos/auth-security.mp4',
    3
  )
ON CONFLICT (id) DO NOTHING;

-- Insert lessons for Data Science Module 1
INSERT INTO public.lessons (id, module_id, title, content, video_url, "order") VALUES
  (
    '30000000-0000-0000-0000-000000000007',
    '20000000-0000-0000-0000-000000000003',
    'Python Básico',
    '{"markdown": "# Python Básico\\n\\nFundamentos da linguagem Python.", "duration": "25min"}',
    '/videos/python-basics.mp4',
    1
  ),
  (
    '30000000-0000-0000-0000-000000000008',
    '20000000-0000-0000-0000-000000000003',
    'NumPy e Pandas',
    '{"markdown": "# NumPy e Pandas\\n\\nManipulação de dados com Python.", "duration": "35min"}',
    '/videos/numpy-pandas.mp4',
    2
  ),
  (
    '30000000-0000-0000-0000-000000000009',
    '20000000-0000-0000-0000-000000000003',
    'Visualização de Dados',
    '{"markdown": "# Visualização de Dados\\n\\nCrie gráficos com Matplotlib.", "duration": "30min"}',
    '/videos/data-viz.mp4',
    3
  )
ON CONFLICT (id) DO NOTHING;

-- Insert lessons for Data Science Module 2
INSERT INTO public.lessons (id, module_id, title, content, video_url, "order") VALUES
  (
    '30000000-0000-0000-0000-000000000010',
    '20000000-0000-0000-0000-000000000004',
    'Regressão Linear',
    '{"markdown": "# Regressão Linear\\n\\nPrimeiro algoritmo de ML.", "duration": "40min"}',
    '/videos/linear-regression.mp4',
    1
  ),
  (
    '30000000-0000-0000-0000-000000000011',
    '20000000-0000-0000-0000-000000000004',
    'Árvores de Decisão',
    '{"markdown": "# Árvores de Decisão\\n\\nClassificação e regressão.", "duration": "45min"}',
    '/videos/decision-trees.mp4',
    2
  ),
  (
    '30000000-0000-0000-0000-000000000012',
    '20000000-0000-0000-0000-000000000004',
    'Redes Neurais',
    '{"markdown": "# Redes Neurais\\n\\nDeep Learning com TensorFlow.", "duration": "50min"}',
    '/videos/neural-networks.mp4',
    3
  )
ON CONFLICT (id) DO NOTHING;

-- Insert lessons for Cloud Module 1
INSERT INTO public.lessons (id, module_id, title, content, video_url, "order") VALUES
  (
    '30000000-0000-0000-0000-000000000013',
    '20000000-0000-0000-0000-000000000005',
    'O que é Cloud Computing',
    '{"markdown": "# Cloud Computing\\n\\nConceitos fundamentais de nuvem.", "duration": "20min"}',
    '/videos/cloud-intro.mp4',
    1
  ),
  (
    '30000000-0000-0000-0000-000000000014',
    '20000000-0000-0000-0000-000000000005',
    'AWS Fundamentals',
    '{"markdown": "# AWS Fundamentals\\n\\nServiços principais da AWS.", "duration": "35min"}',
    '/videos/aws-fundamentals.mp4',
    2
  ),
  (
    '30000000-0000-0000-0000-000000000015',
    '20000000-0000-0000-0000-000000000005',
    'Deploy de Aplicações',
    '{"markdown": "# Deploy na Nuvem\\n\\nPublique suas aplicações.", "duration": "40min"}',
    '/videos/cloud-deploy.mp4',
    3
  )
ON CONFLICT (id) DO NOTHING;

-- Insert lessons for Cloud Module 2
INSERT INTO public.lessons (id, module_id, title, content, video_url, "order") VALUES
  (
    '30000000-0000-0000-0000-000000000016',
    '20000000-0000-0000-0000-000000000006',
    'Docker Fundamentals',
    '{"markdown": "# Docker\\n\\nContainerização de aplicações.", "duration": "35min"}',
    '/videos/docker-fundamentals.mp4',
    1
  ),
  (
    '30000000-0000-0000-0000-000000000017',
    '20000000-0000-0000-0000-000000000006',
    'Kubernetes Basics',
    '{"markdown": "# Kubernetes\\n\\nOrquestração de containers.", "duration": "45min"}',
    '/videos/k8s-basics.mp4',
    2
  ),
  (
    '30000000-0000-0000-0000-000000000018',
    '20000000-0000-0000-0000-000000000006',
    'CI/CD Pipeline',
    '{"markdown": "# CI/CD\\n\\nAutomação de deploy.", "duration": "40min"}',
    '/videos/cicd-pipeline.mp4',
    3
  )
ON CONFLICT (id) DO NOTHING;

-- Insert a learning path
INSERT INTO public.paths (id, title, description, cover_url) VALUES
  (
    '40000000-0000-0000-0000-000000000001',
    'Trilha Fullstack Professional',
    'Torne-se um desenvolvedor fullstack completo, desde o frontend até deploy em produção.',
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800'
  )
ON CONFLICT (id) DO NOTHING;

-- Associate courses with the learning path
INSERT INTO public.path_courses (path_id, course_id, "order") VALUES
  ('40000000-0000-0000-0000-000000000001', '10000000-0000-0000-0000-000000000001', 1),
  ('40000000-0000-0000-0000-000000000001', '10000000-0000-0000-0000-000000000003', 2)
ON CONFLICT (path_id, course_id) DO NOTHING;

-- Insert sample enrollment (student enrolled in fullstack course)
INSERT INTO public.enrollments (id, user_id, course_id, progress) VALUES
  (
    '50000000-0000-0000-0000-000000000001',
    '11111111-1111-1111-1111-111111111111',
    '10000000-0000-0000-0000-000000000001',
    33.33
  )
ON CONFLICT (user_id, course_id) DO NOTHING;

-- Insert sample lesson progress (student completed 2 lessons)
INSERT INTO public.lesson_progress (enrollment_id, lesson_id, completed, last_watched_at) VALUES
  ('50000000-0000-0000-0000-000000000001', '30000000-0000-0000-0000-000000000001', TRUE, NOW() - INTERVAL '2 days'),
  ('50000000-0000-0000-0000-000000000001', '30000000-0000-0000-0000-000000000002', TRUE, NOW() - INTERVAL '1 day')
ON CONFLICT (enrollment_id, lesson_id) DO NOTHING;

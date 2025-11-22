"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

const PortfolioPage = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Moderno",
      student: "João Silva",
      course: "Desenvolvimento Full Stack",
      description: "Plataforma completa de e-commerce com Next.js, Node.js e MongoDB. Sistema de pagamentos, carrinho e painel administrativo.",
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      image: "🛒",
      gradient: "from-neonPink to-purple-600"
    },
    {
      id: 2,
      title: "Dashboard Analytics",
      student: "Maria Santos",
      course: "Data Science & IA",
      description: "Dashboard interativo para análise de dados em tempo real com visualizações dinâmicas e previsões usando Machine Learning.",
      technologies: ["Python", "Pandas", "Plotly", "Scikit-learn"],
      image: "📊",
      gradient: "from-neonPurple to-blue-600"
    },
    {
      id: 3,
      title: "Sistema de Deploy Automatizado",
      student: "Pedro Oliveira",
      course: "DevOps & Cloud",
      description: "Pipeline CI/CD completo com Docker, Kubernetes e Terraform para deploy automatizado em AWS.",
      technologies: ["Docker", "Kubernetes", "AWS", "Terraform"],
      image: "🚀",
      gradient: "from-pink-600 to-neonPink"
    },
    {
      id: 4,
      title: "App de Fitness",
      student: "Ana Costa",
      course: "UX/UI Design",
      description: "Design system completo para aplicativo de fitness com foco em acessibilidade e experiência do usuário.",
      technologies: ["Figma", "Design System", "Prototyping"],
      image: "💪",
      gradient: "from-purple-600 to-neonPurple"
    },
    {
      id: 5,
      title: "Chatbot com IA",
      student: "Lucas Ferreira",
      course: "Data Science & IA",
      description: "Chatbot inteligente usando processamento de linguagem natural para atendimento ao cliente 24/7.",
      technologies: ["Python", "TensorFlow", "NLP", "FastAPI"],
      image: "🤖",
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      id: 6,
      title: "App de Delivery",
      student: "Carla Souza",
      course: "Desenvolvimento Mobile",
      description: "Aplicativo cross-platform de delivery com rastreamento em tempo real e sistema de pagamento integrado.",
      technologies: ["React Native", "Firebase", "Google Maps"],
      image: "🍕",
      gradient: "from-green-600 to-emerald-600"
    },
    {
      id: 7,
      title: "Sistema de Gestão Escolar",
      student: "Rafael Lima",
      course: "Desenvolvimento Full Stack",
      description: "Plataforma completa para gestão escolar com módulos de matrículas, notas, frequência e comunicação.",
      technologies: ["React", "Express", "PostgreSQL", "Redis"],
      image: "📚",
      gradient: "from-orange-600 to-red-600"
    },
    {
      id: 8,
      title: "Plataforma de Cursos Online",
      student: "Juliana Alves",
      course: "Desenvolvimento Full Stack",
      description: "LMS completo com streaming de vídeo, quiz interativo, certificados e área do aluno.",
      technologies: ["Next.js", "Prisma", "Mux", "Stripe"],
      image: "🎓",
      gradient: "from-indigo-600 to-purple-600"
    },
    {
      id: 9,
      title: "Monitoramento de Infraestrutura",
      student: "Bruno Martins",
      course: "DevOps & Cloud",
      description: "Sistema de monitoramento e alertas para infraestrutura cloud com dashboards customizáveis.",
      technologies: ["Prometheus", "Grafana", "Docker", "Kubernetes"],
      image: "📈",
      gradient: "from-cyan-600 to-blue-600"
    }
  ];

  const categories = ["Todos", "Full Stack", "Data Science", "DevOps", "Design", "Mobile"];

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-black via-gray-950 to-black">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-neonPink/10 via-neonPurple/10 to-neonPink/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Trabalhos dos <span className="bg-gradient-to-r from-neonPink to-neonPurple bg-clip-text text-transparent">Alunos</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Projetos incríveis desenvolvidos por nossos alunos durante os cursos
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 border-b border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  category === "Todos"
                    ? "bg-gradient-to-r from-neonPink to-neonPurple text-white"
                    : "bg-gray-900 text-gray-400 hover:text-white hover:bg-gray-800"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-b from-gray-900 to-gray-950 rounded-xl overflow-hidden border border-gray-800 hover:border-neonPink transition-all group"
              >
                {/* Project Image/Gradient */}
                <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="text-8xl z-10">{project.image}</div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neonPink transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-3 text-sm">
                    <span className="text-gray-500">por</span>
                    <span className="text-neonPink font-medium">{project.student}</span>
                  </div>

                  <div className="text-xs text-neonPurple mb-3">{project.course}</div>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-gray-800">
                    <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-neonPink transition-colors">
                      <ExternalLink size={16} />
                      Demo
                    </button>
                    <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-neonPurple transition-colors">
                      <Github size={16} />
                      Código
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 border-y border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Projetos Desenvolvidos" },
              { number: "100%", label: "Taxa de Conclusão" },
              { number: "4.8/5", label: "Avaliação Média" },
              { number: "95%", label: "Entram no Mercado" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-neonPink to-neonPurple bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-neonPink via-neonPurple to-neonPink">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Crie Seu Próprio Projeto
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Junte-se aos nossos alunos e construa um portfólio de sucesso
            </p>
            <Link
              href="/cursos"
              className="inline-block bg-white text-neonPurple px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all"
            >
              Comece Agora
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;

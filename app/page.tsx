"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code, Rocket, Users, Award } from "lucide-react";

const HomePage = () => {
  const courses = [
    {
      id: 1,
      title: "Desenvolvimento Full Stack",
      description: "Domine as tecnologias mais modernas do mercado",
      duration: "12 meses",
      level: "Básico ao Avançado",
      icon: Code,
      gradient: "from-neonPink to-purple-600",
    },
    {
      id: 2,
      title: "Data Science & IA",
      description: "Aprenda análise de dados e inteligência artificial",
      duration: "10 meses",
      level: "Intermediário",
      icon: Rocket,
      gradient: "from-neonPurple to-blue-600",
    },
    {
      id: 3,
      title: "DevOps & Cloud",
      description: "Infraestrutura moderna e automação de processos",
      duration: "8 meses",
      level: "Intermediário ao Avançado",
      icon: Users,
      gradient: "from-pink-600 to-neonPink",
    },
    {
      id: 4,
      title: "UX/UI Design",
      description: "Crie experiências digitais incríveis",
      duration: "6 meses",
      level: "Básico ao Intermediário",
      icon: Award,
      gradient: "from-purple-600 to-neonPurple",
    },
  ];

  const stats = [
    { number: "10k+", label: "Alunos Formados" },
    { number: "95%", label: "Taxa de Empregabilidade" },
    { number: "50+", label: "Cursos Disponíveis" },
    { number: "4.9/5", label: "Avaliação dos Alunos" },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute w-96 h-96 bg-neonPink/20 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ top: "10%", left: "10%" }}
          />
          <motion.div
            className="absolute w-96 h-96 bg-neonPurple/20 rounded-full blur-3xl"
            animate={{
              x: [0, -100, 0],
              y: [0, 100, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ bottom: "10%", right: "10%" }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="block text-white">Aprenda</span>
              <span className="block bg-gradient-to-r from-neonPink via-neonPurple to-neonPink bg-clip-text text-transparent">
                Tecnologia
              </span>
              <span className="block text-white">Do Futuro</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            Transforme sua carreira com cursos EAD de alta qualidade.
            Metodologia moderna, professores especialistas e certificação reconhecida.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/cursos"
              className="group bg-gradient-to-r from-neonPink to-neonPurple text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-all flex items-center gap-2"
            >
              Ver Cursos
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/sobre"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-black transition-all"
            >
              Sobre Nós
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-black py-16 border-y border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
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

      {/* Courses Section */}
      <section className="bg-gradient-to-b from-black to-gray-950 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Cursos em Destaque
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Escolha entre os cursos mais procurados e comece sua jornada hoje mesmo
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => {
              const Icon = course.icon;
              return (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="bg-gradient-to-b from-gray-900 to-gray-950 rounded-xl p-6 border border-gray-800 hover:border-neonPink transition-all group"
                >
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${course.gradient} flex items-center justify-center mb-4`}>
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neonPink transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{course.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="text-sm text-gray-500">
                      <span className="text-neonPink">Duração:</span> {course.duration}
                    </div>
                    <div className="text-sm text-gray-500">
                      <span className="text-neonPurple">Nível:</span> {course.level}
                    </div>
                  </div>
                  <Link
                    href={`/cursos/${course.id}`}
                    className="inline-flex items-center text-neonPink hover:text-neonPurple transition-colors text-sm font-semibold group"
                  >
                    Saiba mais
                    <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/cursos"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-neonPink to-neonPurple text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-all"
            >
              Ver Todos os Cursos
              <ArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-neonPink via-neonPurple to-neonPink py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Pronto para Começar?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Junte-se a milhares de alunos que já transformaram suas carreiras
            </p>
            <Link
              href="/contato"
              className="inline-block bg-white text-neonPurple px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all"
            >
              Entre em Contato
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

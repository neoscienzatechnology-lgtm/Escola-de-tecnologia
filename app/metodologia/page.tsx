"use client";

import { motion } from "framer-motion";
import { Video, BookOpen, Users, Award, Code, FileText, MessageSquare, TrendingUp } from "lucide-react";

const MetodologiaPage = () => {
  const steps = [
    {
      number: "01",
      title: "Conteúdo em Vídeo",
      description: "Aulas gravadas em alta qualidade com professores especialistas. Assista quantas vezes precisar, no seu ritmo.",
      icon: Video,
      color: "from-neonPink to-pink-600"
    },
    {
      number: "02",
      title: "Material Complementar",
      description: "Apostilas, slides, códigos de exemplo e referências para aprofundar seu conhecimento.",
      icon: BookOpen,
      color: "from-neonPurple to-purple-600"
    },
    {
      number: "03",
      title: "Prática Hands-On",
      description: "Projetos práticos reais que simulam desafios do mercado de trabalho.",
      icon: Code,
      color: "from-pink-600 to-neonPink"
    },
    {
      number: "04",
      title: "Exercícios e Quizzes",
      description: "Avaliações contínuas para fixar o conteúdo e medir seu progresso.",
      icon: FileText,
      color: "from-purple-600 to-neonPurple"
    },
    {
      number: "05",
      title: "Mentoria em Grupo",
      description: "Sessões ao vivo com professores para tirar dúvidas e discutir projetos.",
      icon: Users,
      color: "from-neonPink to-pink-600"
    },
    {
      number: "06",
      title: "Comunidade Ativa",
      description: "Fóruns e grupos de estudo para networking e colaboração com colegas.",
      icon: MessageSquare,
      color: "from-neonPurple to-purple-600"
    },
    {
      number: "07",
      title: "Projeto Final",
      description: "Desenvolva um projeto completo para seu portfólio profissional.",
      icon: TrendingUp,
      color: "from-pink-600 to-neonPink"
    },
    {
      number: "08",
      title: "Certificação",
      description: "Receba seu certificado reconhecido pelo mercado ao concluir o curso.",
      icon: Award,
      color: "from-purple-600 to-neonPurple"
    }
  ];

  const benefits = [
    {
      title: "100% Online",
      description: "Estude de qualquer lugar, a qualquer hora",
      icon: "🌐"
    },
    {
      title: "No Seu Ritmo",
      description: "Você define quando e quanto estudar",
      icon: "⏰"
    },
    {
      title: "Suporte 24/7",
      description: "Tire dúvidas quando precisar",
      icon: "💬"
    },
    {
      title: "Acesso Vitalício",
      description: "Conteúdo disponível para sempre",
      icon: "♾️"
    }
  ];

  const features = [
    "Plataforma moderna e intuitiva",
    "Aplicativo mobile para estudar offline",
    "Trilhas de aprendizado personalizadas",
    "Gamificação e conquistas",
    "Certificados verificáveis via blockchain",
    "Integração com LinkedIn",
    "Portal de vagas exclusivo",
    "Eventos e workshops mensais"
  ];

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
              Nossa <span className="bg-gradient-to-r from-neonPink to-neonPurple bg-clip-text text-transparent">Metodologia</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Uma abordagem moderna e eficaz para você dominar tecnologia do zero ao avançado
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works - Timeline */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Como Funciona
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Cada curso segue uma jornada estruturada para garantir seu aprendizado
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neonPink via-neonPurple to-neonPink hidden md:block"></div>

            <div className="space-y-12">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="flex items-start gap-8">
                      {/* Timeline Dot */}
                      <div className="hidden md:flex flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-neonPink to-neonPurple items-center justify-center relative z-10">
                        <Icon className="text-white" size={28} />
                      </div>

                      {/* Content Card */}
                      <div className="flex-1 bg-gradient-to-b from-gray-900 to-gray-950 rounded-xl p-6 border border-gray-800 hover:border-neonPink transition-all">
                        <div className="flex items-start gap-4">
                          <div className="md:hidden w-12 h-12 rounded-lg bg-gradient-to-br from-neonPink to-neonPurple flex items-center justify-center flex-shrink-0">
                            <Icon className="text-white" size={24} />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <span className={`text-4xl font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                                {step.number}
                              </span>
                              <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                            </div>
                            <p className="text-gray-400">{step.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 border-y border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Vantagens do EAD
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-b from-gray-900 to-gray-950 rounded-xl p-6 border border-gray-800 hover:border-neonPurple transition-all text-center"
              >
                <div className="text-6xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Plataforma Completa
              </h2>
              <p className="text-gray-400 mb-8">
                Nossa plataforma foi desenvolvida pensando na melhor experiência de aprendizado. 
                Recursos modernos e tecnologia de ponta para garantir seu sucesso.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-neonPink flex-shrink-0"></div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-neonPink to-neonPurple p-1">
                <div className="w-full h-full rounded-2xl bg-gray-900 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4">💻</div>
                    <p className="text-white text-xl font-semibold">
                      Tecnologia de Ponta
                    </p>
                    <p className="text-gray-400 mt-2">
                      Interface moderna e intuitiva
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
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
              Pronto para Começar?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Experimente nossa metodologia e veja os resultados
            </p>
            <a
              href="/cursos"
              className="inline-block bg-white text-neonPurple px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all"
            >
              Escolha Seu Curso
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MetodologiaPage;

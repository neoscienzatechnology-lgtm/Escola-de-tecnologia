"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Target, Users, Award, Rocket, Heart, Zap } from "lucide-react";

const SobrePage = () => {
  const values = [
    {
      icon: Target,
      title: "Missão",
      description: "Democratizar o acesso à educação em tecnologia de alta qualidade, preparando profissionais para os desafios do futuro digital."
    },
    {
      icon: Eye,
      title: "Visão",
      description: "Ser a referência em educação tecnológica EAD na América Latina, reconhecida pela excelência e inovação."
    },
    {
      icon: Heart,
      title: "Valores",
      description: "Inovação, qualidade, inclusão, transparência e compromisso com o sucesso dos nossos alunos."
    }
  ];

  const numbers = [
    { value: "2015", label: "Fundação" },
    { value: "50k+", label: "Alunos" },
    { value: "200+", label: "Professores" },
    { value: "98%", label: "Satisfação" }
  ];

  const differentials = [
    {
      icon: Rocket,
      title: "Metodologia Inovadora",
      description: "Aprendizado baseado em projetos reais, hands-on desde o primeiro dia."
    },
    {
      icon: Users,
      title: "Comunidade Ativa",
      description: "Networking com milhares de alunos e profissionais do mercado."
    },
    {
      icon: Award,
      title: "Certificação Reconhecida",
      description: "Certificados validados pelo mercado e aceitos pelas melhores empresas."
    },
    {
      icon: Zap,
      title: "Suporte Dedicado",
      description: "Mentoria individual e suporte técnico disponível 24/7."
    }
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
              Sobre a <span className="bg-gradient-to-r from-neonPink to-neonPurple bg-clip-text text-transparent">EscolaTech</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Transformando vidas através da educação em tecnologia desde 2015
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
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
                Nossa História
              </h2>
              <div className="space-y-4 text-gray-400">
                <p>
                  A EscolaTech nasceu do sonho de tornar a educação em tecnologia acessível a todos. 
                  Fundada em 2015 por um grupo de educadores e profissionais de TI apaixonados, 
                  começamos com apenas 3 cursos e hoje oferecemos mais de 50 programas especializados.
                </p>
                <p>
                  Nossa jornada é marcada pela inovação constante. Fomos pioneiros em adotar 
                  metodologias ativas de aprendizagem no Brasil, sempre buscando as melhores 
                  práticas pedagógicas do mundo.
                </p>
                <p>
                  Hoje, somos orgulhosamente a casa de mais de 50 mil alunos que transformaram 
                  suas carreiras através da tecnologia. Nossa comunidade cresce a cada dia, 
                  e continuamos comprometidos com a excelência educacional.
                </p>
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
                    <div className="text-6xl mb-4">🚀</div>
                    <p className="text-white text-xl font-semibold">
                      Inovação e Educação
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Numbers Section */}
      <section className="py-16 border-y border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {numbers.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-neonPink to-neonPurple bg-clip-text text-transparent mb-2">
                  {item.value}
                </div>
                <div className="text-gray-400">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-b from-gray-900 to-gray-950 rounded-xl p-8 border border-gray-800 hover:border-neonPink transition-all"
                >
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-neonPink to-neonPurple flex items-center justify-center mb-6">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Differentials */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Nossos Diferenciais
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              O que nos torna únicos no mercado de educação em tecnologia
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentials.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-neonPurple transition-all"
                >
                  <Icon className="text-neonPink mb-4" size={40} />
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </motion.div>
              );
            })}
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
              Faça Parte da Nossa História
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Junte-se a milhares de alunos e transforme sua carreira
            </p>
            <Link
              href="/cursos"
              className="inline-block bg-white text-neonPurple px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all"
            >
              Conheça Nossos Cursos
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Eye icon component
function Eye({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export default SobrePage;

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { courses } from "@/lib/courses";
import { Clock, BarChart, ArrowRight, CheckCircle2, User } from "lucide-react";

const CourseDetailPage = () => {
  const params = useParams();
  const course = courses.find((c) => c.slug === params.slug);

  if (!course) {
    return (
      <div className="pt-16 min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Curso não encontrado</h1>
          <Link href="/cursos" className="text-neonPink hover:text-neonPurple">
            Voltar para cursos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-black via-gray-950 to-black">
      {/* Hero Section */}
      <section className={`py-24 bg-gradient-to-r ${course.gradient} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4">
              <Link href="/cursos" className="text-white/80 hover:text-white text-sm">
                ← Voltar para cursos
              </Link>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {course.title}
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl">
              {course.longDescription}
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Clock size={20} className="mr-2" />
                <span className="text-white font-medium">{course.duration}</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <BarChart size={20} className="mr-2" />
                <span className="text-white font-medium">{course.level}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* What You'll Learn */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                O que você vai aprender
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-gray-900 p-4 rounded-lg"
                  >
                    <CheckCircle2 size={20} className="text-neonPink flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Syllabus */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Conteúdo Programático
              </h2>
              <div className="space-y-4">
                {course.syllabus.map((module, index) => (
                  <div
                    key={index}
                    className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800"
                  >
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-4">
                        {module.module}
                      </h3>
                      <ul className="space-y-2">
                        {module.topics.map((topic, topicIndex) => (
                          <li
                            key={topicIndex}
                            className="flex items-start gap-3 text-gray-400"
                          >
                            <CheckCircle2 size={16} className="text-neonPurple flex-shrink-0 mt-1" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Instructor */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Instrutor</h2>
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-neonPink to-neonPurple flex items-center justify-center flex-shrink-0">
                    <User size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {course.instructor.name}
                    </h3>
                    <p className="text-gray-400 mb-2">{course.instructor.bio}</p>
                    <p className="text-neonPink text-sm">{course.instructor.expertise}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="sticky top-24"
            >
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <div className="mb-6">
                  <div className="text-gray-400 text-sm mb-2">Investimento</div>
                  <div className="text-3xl font-bold text-white mb-1">{course.price}</div>
                  <div className="text-sm text-gray-500">ou à vista com desconto</div>
                </div>

                <button className="w-full bg-gradient-to-r from-neonPink to-neonPurple text-white py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity mb-4">
                  Matricule-se Agora
                </button>

                <Link
                  href="/contato"
                  className="w-full block text-center border-2 border-gray-700 text-white py-4 rounded-lg font-semibold hover:border-neonPink transition-colors"
                >
                  Fale com um Consultor
                </Link>

                <div className="mt-6 pt-6 border-t border-gray-800">
                  <h4 className="text-white font-semibold mb-4">Este curso inclui:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-gray-400 text-sm">
                      <CheckCircle2 size={16} className="text-neonPink flex-shrink-0 mt-0.5" />
                      <span>Acesso vitalício ao conteúdo</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-400 text-sm">
                      <CheckCircle2 size={16} className="text-neonPink flex-shrink-0 mt-0.5" />
                      <span>Certificado reconhecido</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-400 text-sm">
                      <CheckCircle2 size={16} className="text-neonPink flex-shrink-0 mt-0.5" />
                      <span>Suporte de professores</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-400 text-sm">
                      <CheckCircle2 size={16} className="text-neonPink flex-shrink-0 mt-0.5" />
                      <span>Projetos práticos</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-400 text-sm">
                      <CheckCircle2 size={16} className="text-neonPink flex-shrink-0 mt-0.5" />
                      <span>Comunidade exclusiva</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

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
              Pronto para começar sua jornada?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Junte-se a milhares de alunos que transformaram suas carreiras
            </p>
            <Link
              href="/cursos"
              className="inline-flex items-center gap-2 bg-white text-neonPurple px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all"
            >
              Ver Outros Cursos
              <ArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetailPage;

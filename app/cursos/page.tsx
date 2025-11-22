"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { courses } from "@/lib/courses";
import { ArrowRight, Clock, BarChart, Tag } from "lucide-react";

const CursosPage = () => {
  const categories = ["Todos", "Desenvolvimento", "Dados & IA", "Infraestrutura", "Design", "Segurança"];

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-black via-gray-950 to-black">
      {/* Header */}
      <section className="py-24 bg-gradient-to-r from-neonPink/10 via-neonPurple/10 to-neonPink/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Nossos <span className="bg-gradient-to-r from-neonPink to-neonPurple bg-clip-text text-transparent">Cursos</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Escolha entre os melhores cursos de tecnologia do mercado e transforme sua carreira
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
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

      {/* Courses Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-b from-gray-900 to-gray-950 rounded-xl overflow-hidden border border-gray-800 hover:border-neonPink transition-all group"
              >
                {/* Course Image/Gradient */}
                <div className={`h-48 bg-gradient-to-br ${course.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/30"></div>
                  <h3 className="text-2xl font-bold text-white z-10 text-center px-4">
                    {course.title}
                  </h3>
                </div>

                {/* Course Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Tag size={16} className="text-neonPink" />
                    <span className="text-sm text-gray-400">{course.category}</span>
                  </div>

                  <p className="text-gray-400 mb-4 line-clamp-2">
                    {course.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock size={16} className="mr-2 text-neonPink" />
                      <span>Duração: {course.duration}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <BarChart size={16} className="mr-2 text-neonPurple" />
                      <span>Nível: {course.level}</span>
                    </div>
                  </div>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {course.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded"
                      >
                        {skill}
                      </span>
                    ))}
                    {course.skills.length > 3 && (
                      <span className="px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded">
                        +{course.skills.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="pt-4 border-t border-gray-800 flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-500">A partir de</div>
                      <div className="text-lg font-bold text-white">{course.price}</div>
                    </div>
                    <Link
                      href={`/cursos/${course.slug}`}
                      className="inline-flex items-center text-neonPink hover:text-neonPurple transition-colors text-sm font-semibold group"
                    >
                      Saiba mais
                      <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
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
              Não encontrou o curso ideal?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Entre em contato conosco e descubra outras opções disponíveis
            </p>
            <Link
              href="/contato"
              className="inline-block bg-white text-neonPurple px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all"
            >
              Fale Conosco
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CursosPage;

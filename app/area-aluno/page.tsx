"use client";

import { motion } from "framer-motion";
import { BookOpen, Video, FileText, Award, TrendingUp, Clock, CheckCircle2, Lock } from "lucide-react";

const AreaAlunoPage = () => {
  const courses = [
    {
      title: "Desenvolvimento Full Stack",
      progress: 65,
      nextLesson: "React Hooks Avançados",
      totalLessons: 120,
      completedLessons: 78
    },
    {
      title: "Data Science & IA",
      progress: 30,
      nextLesson: "Machine Learning Básico",
      totalLessons: 100,
      completedLessons: 30
    }
  ];

  const recentActivities = [
    { type: "lesson", title: "Completou: JavaScript Assíncrono", time: "2 horas atrás" },
    { type: "quiz", title: "Quiz: React Fundamentals - 90%", time: "1 dia atrás" },
    { type: "project", title: "Projeto enviado: E-commerce App", time: "2 dias atrás" },
    { type: "certificate", title: "Certificado obtido: HTML & CSS", time: "1 semana atrás" }
  ];

  const achievements = [
    { icon: "🏆", title: "Primeira Semana", description: "Completou 7 dias consecutivos" },
    { icon: "⭐", title: "100% em Quiz", description: "Gabaritou 5 quizzes" },
    { icon: "🚀", title: "Projeto Destaque", description: "Projeto em destaque na comunidade" },
    { icon: "📚", title: "Estudioso", description: "50 aulas concluídas" }
  ];

  const stats = [
    { label: "Horas de Estudo", value: "127h", icon: Clock },
    { label: "Aulas Concluídas", value: "108", icon: CheckCircle2 },
    { label: "Certificados", value: "3", icon: Award },
    { label: "Projetos", value: "12", icon: TrendingUp }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-black via-gray-950 to-black">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-r from-neonPink/10 via-neonPurple/10 to-neonPink/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Bem-vindo de volta, <span className="bg-gradient-to-r from-neonPink to-neonPurple bg-clip-text text-transparent">Aluno</span>!
            </h1>
            <p className="text-gray-400">Continue de onde parou e alcance seus objetivos</p>
          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 rounded-xl p-6 border border-gray-800"
              >
                <Icon className="text-neonPink mb-3" size={24} />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* My Courses */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">Meus Cursos</h2>
              <div className="space-y-4">
                {courses.map((course, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-b from-gray-900 to-gray-950 rounded-xl p-6 border border-gray-800 hover:border-neonPink transition-all"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
                        <p className="text-gray-400 text-sm">
                          Próxima aula: {course.nextLesson}
                        </p>
                      </div>
                      <button className="bg-gradient-to-r from-neonPink to-neonPurple text-white px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
                        Continuar
                      </button>
                    </div>
                    
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="text-gray-400">
                        {course.completedLessons} de {course.totalLessons} aulas
                      </span>
                      <span className="text-neonPink font-semibold">{course.progress}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${course.progress}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-gradient-to-r from-neonPink to-neonPurple"
                      />
                    </div>
                  </div>
                ))}

                <button className="w-full border-2 border-dashed border-gray-800 rounded-xl p-6 text-gray-400 hover:border-neonPink hover:text-white transition-all flex items-center justify-center gap-2">
                  <Lock size={20} />
                  <span>Explorar Novos Cursos</span>
                </button>
              </div>
            </motion.div>

            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">Atividade Recente</h2>
              <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
                {recentActivities.map((activity, index) => (
                  <div
                    key={index}
                    className={`p-4 flex items-center gap-4 ${
                      index !== recentActivities.length - 1 ? "border-b border-gray-800" : ""
                    }`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neonPink to-neonPurple flex items-center justify-center flex-shrink-0">
                      {activity.type === "lesson" && <BookOpen size={20} className="text-white" />}
                      {activity.type === "quiz" && <FileText size={20} className="text-white" />}
                      {activity.type === "project" && <Video size={20} className="text-white" />}
                      {activity.type === "certificate" && <Award size={20} className="text-white" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-medium text-sm">{activity.title}</p>
                      <p className="text-gray-500 text-xs">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">Conquistas</h2>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="bg-gray-900 rounded-xl p-4 border border-gray-800 hover:border-neonPurple transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-3xl">{achievement.icon}</div>
                      <div>
                        <h3 className="text-white font-semibold text-sm mb-1">
                          {achievement.title}
                        </h3>
                        <p className="text-gray-500 text-xs">{achievement.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">Links Rápidos</h2>
              <div className="space-y-2">
                {[
                  { icon: BookOpen, label: "Minha Biblioteca" },
                  { icon: Award, label: "Certificados" },
                  { icon: FileText, label: "Materiais de Apoio" },
                  { icon: Video, label: "Aulas Gravadas" }
                ].map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <button
                      key={index}
                      className="w-full bg-gray-900 hover:bg-gray-800 border border-gray-800 hover:border-neonPink rounded-lg p-4 flex items-center gap-3 transition-all text-left"
                    >
                      <Icon className="text-neonPink" size={20} />
                      <span className="text-white font-medium">{link.label}</span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Demo Notice */}
      <section className="py-12 border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-neonPink/10 to-neonPurple/10 border border-neonPink/30 rounded-xl p-8 text-center"
          >
            <Lock className="mx-auto mb-4 text-neonPink" size={48} />
            <h3 className="text-2xl font-bold text-white mb-2">
              Esta é uma Visualização Demo
            </h3>
            <p className="text-gray-400 mb-6">
              Para acessar a área do aluno completa, faça sua matrícula em um de nossos cursos
            </p>
            <a
              href="/cursos"
              className="inline-block bg-gradient-to-r from-neonPink to-neonPurple text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Ver Cursos Disponíveis
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AreaAlunoPage;

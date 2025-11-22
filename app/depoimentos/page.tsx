"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const DepoimentosPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Carlos Eduardo",
      role: "Desenvolvedor Full Stack",
      company: "Tech Solutions",
      image: "👨‍💻",
      text: "A EscolaTech mudou completamente minha carreira. Saí de um emprego que não me satisfazia para trabalhar como desenvolvedor em uma empresa de tecnologia. O curso de Full Stack foi muito completo e os professores são excelentes!",
      rating: 5,
      course: "Desenvolvimento Full Stack"
    },
    {
      id: 2,
      name: "Mariana Silva",
      role: "Data Scientist",
      company: "DataCorp",
      image: "👩‍💼",
      text: "Sempre tive interesse em dados, mas não sabia por onde começar. O curso de Data Science da EscolaTech me deu toda a base necessária. Hoje trabalho com IA e estou realizando meu sonho profissional.",
      rating: 5,
      course: "Data Science & IA"
    },
    {
      id: 3,
      name: "Roberto Almeida",
      role: "DevOps Engineer",
      company: "Cloud Systems",
      image: "👨‍🔧",
      text: "Profissionais de DevOps são muito valorizados no mercado e o curso me preparou perfeitamente. Aprendi Docker, Kubernetes, AWS e muito mais. Consegui dobrar meu salário após a conclusão!",
      rating: 5,
      course: "DevOps & Cloud"
    },
    {
      id: 4,
      name: "Julia Santos",
      role: "UX/UI Designer",
      company: "Design Studio",
      image: "👩‍🎨",
      text: "O curso de UX/UI me ensinou não só as ferramentas, mas também a metodologia correta de design. Aprendi a pensar no usuário em primeiro lugar. Hoje trabalho remotamente para uma empresa internacional.",
      rating: 5,
      course: "UX/UI Design"
    },
    {
      id: 5,
      name: "Pedro Henrique",
      role: "Mobile Developer",
      company: "AppMakers",
      image: "👨‍💼",
      text: "Sempre quis desenvolver apps, mas achava muito complicado. Com a metodologia da EscolaTech, aprendi de forma prática e já saí do curso com vários projetos no portfólio. Super recomendo!",
      rating: 5,
      course: "Desenvolvimento Mobile"
    },
    {
      id: 6,
      name: "Ana Carolina",
      role: "Security Analyst",
      company: "SecureNet",
      image: "👩‍💻",
      text: "A área de segurança cibernética é fascinante e o curso me deu todo o conhecimento necessário. Hoje trabalho protegendo sistemas de grandes empresas. Gratidão à EscolaTech!",
      rating: 5,
      course: "Segurança Cibernética"
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const stats = [
    { number: "98%", label: "Recomendam a Escola" },
    { number: "4.9/5", label: "Avaliação Média" },
    { number: "10k+", label: "Alunos Satisfeitos" },
    { number: "95%", label: "Empregabilidade" },
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
              Depoimentos de <span className="bg-gradient-to-r from-neonPink to-neonPurple bg-clip-text text-transparent">Sucesso</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Veja o que nossos alunos têm a dizer sobre suas experiências e conquistas
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-b border-gray-800">
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

      {/* Featured Carousel */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Histórias Inspiradoras
            </h2>
          </motion.div>

          <div className="relative">
            {/* Main Testimonial Card */}
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-b from-gray-900 to-gray-950 rounded-2xl p-8 md:p-12 border border-gray-800 relative"
            >
              <Quote className="absolute top-8 right-8 text-neonPink/20" size={64} />
              
              <div className="flex items-start gap-6 mb-6">
                <div className="text-6xl">{testimonials[activeIndex].image}</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {testimonials[activeIndex].name}
                  </h3>
                  <p className="text-neonPink font-medium mb-1">
                    {testimonials[activeIndex].role}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {testimonials[activeIndex].company}
                  </p>
                </div>
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-500 fill-yellow-500" size={20} />
                ))}
              </div>

              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                &ldquo;{testimonials[activeIndex].text}&rdquo;
              </p>

              <div className="text-sm text-neonPurple">
                Curso: {testimonials[activeIndex].course}
              </div>
            </motion.div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-gray-900 border border-gray-800 hover:border-neonPink flex items-center justify-center transition-all"
              >
                <ChevronLeft className="text-white" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-gray-900 border border-gray-800 hover:border-neonPurple flex items-center justify-center transition-all"
              >
                <ChevronRight className="text-white" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeIndex
                      ? "bg-gradient-to-r from-neonPink to-neonPurple w-8"
                      : "bg-gray-700 hover:bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
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
              Mais Depoimentos
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-neonPink transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-4xl">{testimonial.image}</div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-500 fill-yellow-500" size={16} />
                  ))}
                </div>

                <p className="text-gray-400 text-sm line-clamp-4 mb-3">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                <div className="text-xs text-neonPurple">
                  {testimonial.course}
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
              Seja o Próximo Caso de Sucesso
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Comece sua jornada hoje e transforme sua carreira
            </p>
            <Link
              href="/cursos"
              className="inline-block bg-white text-neonPurple px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all"
            >
              Ver Cursos Disponíveis
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DepoimentosPage;

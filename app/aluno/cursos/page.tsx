'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { mockCourses, mockStudent } from '@/lib/mock-data';
import Link from 'next/link';
import { ArrowRight, Filter } from 'lucide-react';

type FilterType = 'todos' | 'em-andamento' | 'concluidos';

export default function CursosPage() {
  const [filter, setFilter] = useState<FilterType>('todos');

  const enrolledCourses = mockCourses.filter((c) =>
    mockStudent.enrolledCourses.includes(c.id) || 
    mockStudent.completedCourses.includes(c.id)
  );

  const filteredCourses = enrolledCourses.filter((course) => {
    if (filter === 'em-andamento') return course.status === 'in-progress' || course.status === 'enrolled';
    if (filter === 'concluidos') return course.status === 'completed';
    return true;
  });

  const filters: { value: FilterType; label: string }[] = [
    { value: 'todos', label: 'Todos' },
    { value: 'em-andamento', label: 'Em andamento' },
    { value: 'concluidos', label: 'Concluídos' },
  ];

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold mb-2">Meus Cursos</h1>
        <p className="text-muted-foreground">
          Gerencie e acompanhe todos os seus cursos
        </p>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex items-center gap-4"
      >
        <Filter className="w-5 h-5 text-muted-foreground" />
        <div className="flex gap-2">
          {filters.map((f) => (
            <Button
              key={f.value}
              variant={filter === f.value ? 'default' : 'outline'}
              onClick={() => setFilter(f.value)}
              size="sm"
            >
              {f.label}
            </Button>
          ))}
        </div>
      </motion.div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + index * 0.05 }}
            whileHover={{ scale: 1.02 }}
          >
            <Card className="h-full border-primary/20 hover:neon-border transition-all overflow-hidden">
              <CardContent className="p-6 space-y-4">
                {/* Thumbnail and Badge */}
                <div className="flex items-start justify-between">
                  <div className="text-6xl">{course.thumbnail}</div>
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      course.status === 'completed'
                        ? 'bg-green-500/20 text-green-500'
                        : course.status === 'in-progress'
                        ? 'bg-blue-500/20 text-blue-500'
                        : 'bg-yellow-500/20 text-yellow-500'
                    }`}
                  >
                    {course.status === 'completed'
                      ? 'Concluído'
                      : course.status === 'in-progress'
                      ? 'Em andamento'
                      : 'Matriculado'}
                  </span>
                </div>

                {/* Course Info */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold line-clamp-2">
                    {course.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {course.description}
                  </p>
                </div>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>👨‍🏫 {course.instructor}</span>
                  <span>⏱️ {course.duration}</span>
                </div>

                <div className="space-y-1">
                  <span className={`text-xs font-medium px-2 py-1 rounded ${
                    course.level === 'Iniciante'
                      ? 'bg-green-500/10 text-green-500'
                      : course.level === 'Intermediário'
                      ? 'bg-yellow-500/10 text-yellow-500'
                      : 'bg-red-500/10 text-red-500'
                  }`}>
                    {course.level}
                  </span>
                </div>

                {/* Progress */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">Progresso</span>
                    <span className="text-muted-foreground">
                      {course.progress}%
                    </span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                </div>

                {/* Action Button */}
                <Link href={`/aluno/cursos/${course.id}`}>
                  <Button className="w-full" size="lg">
                    {course.progress === 100 ? 'Revisar' : 'Continuar'}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-muted-foreground">
            Nenhum curso encontrado com este filtro.
          </p>
        </motion.div>
      )}
    </div>
  );
}

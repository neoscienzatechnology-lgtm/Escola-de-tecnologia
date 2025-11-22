'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { mockCourses, mockStudent } from '@/lib/mock-data';
import { BookOpen, Clock, TrendingUp, Award, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  const enrolledCourses = mockCourses.filter((c) =>
    mockStudent.enrolledCourses.includes(c.id)
  );
  const inProgressCourses = enrolledCourses.filter(
    (c) => c.status === 'in-progress'
  );
  const completedCount = mockStudent.completedCourses.length;
  
  // Calculate overall progress
  const overallProgress = Math.round(
    enrolledCourses.reduce((acc, course) => acc + course.progress, 0) /
      enrolledCourses.length
  );

  // Get last watched lesson
  const lastCourse = inProgressCourses[0];
  const lastModule = lastCourse?.modules.find(m => 
    m.lessons.some(l => !l.completed)
  );
  const lastLesson = lastModule?.lessons.find(l => !l.completed);

  const stats = [
    {
      icon: BookOpen,
      label: 'Cursos Matriculados',
      value: enrolledCourses.length,
      color: 'text-blue-500',
    },
    {
      icon: TrendingUp,
      label: 'Progresso Geral',
      value: `${overallProgress}%`,
      color: 'text-green-500',
    },
    {
      icon: Clock,
      label: 'Em Andamento',
      value: inProgressCourses.length,
      color: 'text-yellow-500',
    },
    {
      icon: Award,
      label: 'Concluídos',
      value: completedCount,
      color: 'text-purple-500',
    },
  ];

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-muted-foreground">
          Acompanhe seu progresso e continue aprendendo
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="border-primary/20 hover:neon-border transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg bg-primary/10 ${stat.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {stat.label}
                      </p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Progress Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle>Progresso Geral</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">
                    Conclusão Total
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {overallProgress}%
                  </span>
                </div>
                <Progress value={overallProgress} className="h-3" />
              </div>
              
              <div className="space-y-3">
                <p className="text-sm font-medium">Cursos em andamento:</p>
                {inProgressCourses.slice(0, 3).map((course) => (
                  <div key={course.id} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>{course.title}</span>
                      <span className="text-muted-foreground">
                        {course.progress}%
                      </span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Continue Learning Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle>Continue de onde parou</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {lastCourse && lastLesson && (
                <>
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{lastCourse.thumbnail}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{lastCourse.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {lastModule?.title}
                      </p>
                      <p className="text-sm font-medium">
                        📺 {lastLesson.title}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {lastLesson.duration}
                      </p>
                    </div>
                  </div>
                  <Link href={`/aluno/cursos/${lastCourse.id}`}>
                    <Button className="w-full" size="lg">
                      Continuar Aula
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Enrolled Courses */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Card className="border-primary/20">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Meus Cursos</CardTitle>
            <Link href="/aluno/cursos">
              <Button variant="ghost" size="sm">
                Ver todos
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {enrolledCourses.slice(0, 3).map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="cursor-pointer"
                >
                  <Link href={`/aluno/cursos/${course.id}`}>
                    <Card className="h-full border-primary/10 hover:border-primary/30 transition-all">
                      <CardContent className="p-4 space-y-3">
                        <div className="text-4xl">{course.thumbnail}</div>
                        <div>
                          <h4 className="font-semibold mb-1 line-clamp-2">
                            {course.title}
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            {course.instructor}
                          </p>
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span>Progresso</span>
                            <span>{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { mockCourses } from '@/lib/mock-data';
import { notFound } from 'next/navigation';
import {
  Play,
  Volume2,
  Maximize,
  CheckCircle2,
  Circle,
  Download,
  ChevronLeft,
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function CoursePage() {
  const params = useParams();
  const id = params.id as string;
  const course = mockCourses.find((c) => c.id === id);
  const [selectedLesson, setSelectedLesson] = useState(
    course?.modules[0]?.lessons[0]
  );
  const [notes, setNotes] = useState('');

  if (!course) {
    notFound();
  }

  const totalLessons = course.modules.reduce(
    (acc, module) => acc + module.lessons.length,
    0
  );
  const completedLessons = course.modules.reduce(
    (acc, module) => acc + module.lessons.filter((l) => l.completed).length,
    0
  );

  const handleExportNotes = () => {
    const blob = new Blob([notes], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `notas-${course.title}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-4"
      >
        <Link href="/aluno/cursos">
          <Button variant="ghost" size="icon">
            <ChevronLeft className="w-5 h-5" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold mb-1">{course.title}</h1>
          <p className="text-muted-foreground">{course.description}</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-6">
          {/* Video Player Mock */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="border-primary/20 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center relative group">
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 text-center space-y-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button
                      size="lg"
                      className="rounded-full w-20 h-20 text-2xl"
                    >
                      <Play className="w-8 h-8" />
                    </Button>
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {selectedLesson?.title}
                    </h3>
                    <p className="text-sm text-white/70">
                      {selectedLesson?.duration}
                    </p>
                  </div>
                </div>
                {/* Fake Controls */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-4 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="ghost" size="icon" className="text-white">
                    <Play className="w-5 h-5" />
                  </Button>
                  <div className="flex-1">
                    <Progress value={35} className="h-1" />
                  </div>
                  <Button variant="ghost" size="icon" className="text-white">
                    <Volume2 className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-white">
                    <Maximize className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Lesson Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle>Sobre esta aula</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  {selectedLesson?.description}
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-2">
                    ⏱️ Duração: {selectedLesson?.duration}
                  </span>
                  <span className="flex items-center gap-2">
                    👨‍🏫 Instrutor: {course.instructor}
                  </span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Notes Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle>Anotações</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  placeholder="Faça suas anotações aqui..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="min-h-[200px] bg-background/50"
                />
                <Button
                  onClick={handleExportNotes}
                  variant="outline"
                  disabled={!notes}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Exportar Anotações
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Sidebar - Modules and Lessons */}
        <div className="space-y-6">
          {/* Progress Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle>Progresso do Curso</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>
                      {completedLessons} de {totalLessons} aulas
                    </span>
                    <span className="text-muted-foreground">
                      {course.progress}%
                    </span>
                  </div>
                  <Progress value={course.progress} className="h-3" />
                </div>
                <div className="text-sm text-muted-foreground">
                  <p>📚 {course.modules.length} módulos</p>
                  <p>⏱️ {course.duration}</p>
                  <p>📊 {course.level}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Modules and Lessons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle>Conteúdo do Curso</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible defaultValue="item-0">
                  {course.modules.map((module, moduleIndex) => (
                    <AccordionItem
                      key={module.id}
                      value={`item-${moduleIndex}`}
                    >
                      <AccordionTrigger className="hover:no-underline">
                        <div className="flex items-start gap-3 text-left">
                          <span className="text-primary font-bold">
                            {moduleIndex + 1}
                          </span>
                          <div>
                            <p className="font-semibold">{module.title}</p>
                            <p className="text-xs text-muted-foreground">
                              {module.lessons.length} aulas • {module.duration}
                            </p>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2 pl-8">
                          {module.lessons.map((lesson) => (
                            <motion.button
                              key={lesson.id}
                              onClick={() => setSelectedLesson(lesson)}
                              className={cn(
                                'w-full text-left p-3 rounded-lg transition-all',
                                'hover:bg-accent',
                                selectedLesson?.id === lesson.id &&
                                  'bg-primary/10 border-l-4 border-primary'
                              )}
                              whileHover={{ x: 4 }}
                            >
                              <div className="flex items-start gap-3">
                                {lesson.completed ? (
                                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                ) : (
                                  <Circle className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                                )}
                                <div className="flex-1 min-w-0">
                                  <p className="font-medium text-sm line-clamp-2">
                                    {lesson.title}
                                  </p>
                                  <p className="text-xs text-muted-foreground">
                                    {lesson.duration}
                                  </p>
                                </div>
                              </div>
                            </motion.button>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

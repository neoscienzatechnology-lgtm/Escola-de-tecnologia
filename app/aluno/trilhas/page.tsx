'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { mockTracks } from '@/lib/mock-data';
import { ArrowRight, CheckCircle2, Circle, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function TrilhasPage() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold mb-2">Trilhas de Aprendizado</h1>
        <p className="text-muted-foreground">
          Siga uma trilha estruturada para se tornar um especialista
        </p>
      </motion.div>

      {/* Tracks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockTracks.map((track, index) => (
          <motion.div
            key={track.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <Card className="h-full border-primary/20 hover:neon-border transition-all">
              <CardHeader>
                <div className="text-6xl mb-4">{track.icon}</div>
                <CardTitle className="text-2xl">{track.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{track.description}</p>
                <div className="text-sm text-muted-foreground">
                  {track.stages.length} etapas • {track.courses.length} cursos
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Detailed Roadmaps */}
      <div className="space-y-8 mt-12">
        <h2 className="text-2xl font-bold">Roadmaps Detalhados</h2>

        {mockTracks.map((track, trackIndex) => (
          <motion.div
            key={track.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: trackIndex * 0.2 }}
          >
            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{track.icon}</span>
                  <div>
                    <CardTitle className="text-2xl">{track.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {track.description}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {/* Roadmap Timeline */}
                <div className="relative pl-8">
                  {/* Vertical Line */}
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />

                  <div className="space-y-6">
                    {track.stages.map((stage, stageIndex) => (
                      <motion.div
                        key={stage.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: trackIndex * 0.2 + stageIndex * 0.1 }}
                        className="relative"
                      >
                        {/* Stage Node */}
                        <div
                          className={cn(
                            'absolute -left-[30px] w-8 h-8 rounded-full flex items-center justify-center border-2',
                            stage.status === 'completed'
                              ? 'bg-green-500 border-green-500'
                              : stage.status === 'current'
                              ? 'bg-primary border-primary animate-pulse'
                              : 'bg-background border-border'
                          )}
                        >
                          {stage.status === 'completed' && (
                            <CheckCircle2 className="w-5 h-5 text-white" />
                          )}
                          {stage.status === 'current' && (
                            <Loader2 className="w-5 h-5 text-white animate-spin" />
                          )}
                          {stage.status === 'pending' && (
                            <Circle className="w-5 h-5 text-muted-foreground" />
                          )}
                        </div>

                        {/* Stage Content */}
                        <Card
                          className={cn(
                            'border transition-all',
                            stage.status === 'completed'
                              ? 'border-green-500/30 bg-green-500/5'
                              : stage.status === 'current'
                              ? 'border-primary/30 bg-primary/5 neon-border'
                              : 'border-border/30'
                          )}
                        >
                          <CardContent className="p-4">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <h4 className="font-semibold mb-1">
                                  {stage.title}
                                </h4>
                                <p className="text-sm text-muted-foreground mb-2">
                                  {stage.description}
                                </p>
                                {stage.courseId && (
                                  <Link href={`/aluno/cursos/${stage.courseId}`}>
                                    <Button variant="link" className="p-0 h-auto">
                                      Ver curso
                                      <ArrowRight className="ml-1 w-3 h-3" />
                                    </Button>
                                  </Link>
                                )}
                              </div>
                              <div className="ml-4">
                                {stage.status === 'completed' && (
                                  <span className="text-xs px-2 py-1 rounded bg-green-500/20 text-green-500">
                                    Concluído
                                  </span>
                                )}
                                {stage.status === 'current' && (
                                  <span className="text-xs px-2 py-1 rounded bg-primary/20 text-primary">
                                    Em andamento
                                  </span>
                                )}
                                {stage.status === 'pending' && (
                                  <span className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground">
                                    Bloqueado
                                  </span>
                                )}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <div className="mt-6 flex justify-end">
                  <Button size="lg">
                    {track.stages.some((s) => s.status === 'current')
                      ? 'Continuar Trilha'
                      : 'Iniciar Trilha'}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

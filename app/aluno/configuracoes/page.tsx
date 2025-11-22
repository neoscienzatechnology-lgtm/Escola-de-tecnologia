'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { mockStudent } from '@/lib/mock-data';
import { Camera, Save, Moon, Sun } from 'lucide-react';

export default function ConfiguracoesPage() {
  const [name, setName] = useState(mockStudent.name);
  const [email, setEmail] = useState(mockStudent.email);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  const handleSave = () => {
    // Mock save functionality
    alert('Configurações salvas com sucesso! (modo demo)');
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    // In a real app, this would update the theme
    alert(`Tema alterado para ${theme === 'dark' ? 'claro' : 'escuro'} (modo demo)`);
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold mb-2">Configurações</h1>
        <p className="text-muted-foreground">
          Gerencie suas preferências e informações pessoais
        </p>
      </motion.div>

      {/* Profile Settings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle>Perfil</CardTitle>
            <CardDescription>
              Atualize suas informações pessoais
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Avatar */}
            <div className="flex items-center gap-6">
              <div className="relative">
                <Avatar className="w-24 h-24">
                  <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                    {name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </AvatarFallback>
                </Avatar>
                <Button
                  size="icon"
                  className="absolute bottom-0 right-0 rounded-full w-8 h-8"
                  onClick={() => alert('Upload de foto (modo demo)')}
                >
                  <Camera className="w-4 h-4" />
                </Button>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Foto de Perfil</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  PNG, JPG até 5MB
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => alert('Upload de foto (modo demo)')}
                >
                  Alterar Foto
                </Button>
              </div>
            </div>

            {/* Name Input */}
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Nome Completo
              </label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Seu nome"
              />
            </div>

            {/* Email Input */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
              />
            </div>

            {/* Save Button */}
            <Button onClick={handleSave} className="w-full">
              <Save className="w-4 h-4 mr-2" />
              Salvar Alterações
            </Button>
          </CardContent>
        </Card>
      </motion.div>

      {/* Appearance Settings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle>Aparência</CardTitle>
            <CardDescription>
              Personalize a aparência da plataforma
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold mb-1">Tema</h4>
                <p className="text-sm text-muted-foreground">
                  Escolha entre tema claro ou escuro
                </p>
              </div>
              <Button
                variant="outline"
                size="lg"
                onClick={toggleTheme}
                className="gap-2"
              >
                {theme === 'dark' ? (
                  <>
                    <Moon className="w-5 h-5" />
                    Escuro
                  </>
                ) : (
                  <>
                    <Sun className="w-5 h-5" />
                    Claro
                  </>
                )}
              </Button>
            </div>

            <div className="pt-4 border-t">
              <h4 className="font-semibold mb-2">Preview do Tema</h4>
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    theme === 'dark'
                      ? 'border-primary bg-primary/10'
                      : 'border-border bg-muted'
                  }`}
                  onClick={() => setTheme('dark')}
                >
                  <div className="space-y-2">
                    <div className="w-full h-8 bg-slate-900 rounded" />
                    <div className="w-full h-4 bg-slate-800 rounded" />
                    <div className="w-3/4 h-4 bg-slate-800 rounded" />
                  </div>
                  <p className="text-xs text-center mt-2 font-medium">
                    Escuro
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    theme === 'light'
                      ? 'border-primary bg-primary/10'
                      : 'border-border bg-muted'
                  }`}
                  onClick={() => setTheme('light')}
                >
                  <div className="space-y-2">
                    <div className="w-full h-8 bg-slate-100 rounded" />
                    <div className="w-full h-4 bg-slate-200 rounded" />
                    <div className="w-3/4 h-4 bg-slate-200 rounded" />
                  </div>
                  <p className="text-xs text-center mt-2 font-medium">
                    Claro
                  </p>
                </motion.div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Notifications Settings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle>Notificações</CardTitle>
            <CardDescription>
              Configure como você deseja receber notificações
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              {
                title: 'Novas aulas',
                description: 'Receba notificações quando novas aulas forem disponibilizadas',
              },
              {
                title: 'Lives e eventos',
                description: 'Seja notificado sobre lives e eventos ao vivo',
              },
              {
                title: 'Prazos',
                description: 'Lembrete de prazos de entrega',
              },
              {
                title: 'Conquistas',
                description: 'Notificações sobre certificados e conquistas',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-accent transition-colors"
              >
                <div>
                  <h4 className="font-medium">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-muted rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-primary after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all" />
                </label>
              </div>
            ))}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

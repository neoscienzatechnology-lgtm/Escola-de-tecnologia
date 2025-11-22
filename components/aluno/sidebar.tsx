'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  BookOpen,
  Calendar,
  Settings,
  TrendingUp,
} from 'lucide-react';

const menuItems = [
  {
    icon: LayoutDashboard,
    label: 'Dashboard',
    href: '/aluno/dashboard',
  },
  {
    icon: BookOpen,
    label: 'Meus Cursos',
    href: '/aluno/cursos',
  },
  {
    icon: TrendingUp,
    label: 'Trilhas',
    href: '/aluno/trilhas',
  },
  {
    icon: Calendar,
    label: 'Calendário',
    href: '/aluno/calendario',
  },
  {
    icon: Settings,
    label: 'Configurações',
    href: '/aluno/configuracoes',
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r border-border bg-card/50 backdrop-blur-sm h-screen sticky top-0 flex flex-col">
      <div className="p-6 border-b border-border">
        <Link href="/aluno/dashboard" className="flex items-center gap-2">
          <span className="text-3xl">🎓</span>
          <div>
            <h1 className="text-lg font-bold neon-text">Escola Tech</h1>
            <p className="text-xs text-muted-foreground">Área do Aluno</p>
          </div>
        </Link>
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            
            return (
              <motion.li
                key={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center gap-3 px-4 py-3 rounded-lg transition-all',
                    'hover:bg-accent hover:text-accent-foreground',
                    isActive && 'bg-primary text-primary-foreground neon-border'
                  )}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

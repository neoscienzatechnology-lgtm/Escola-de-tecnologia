'use client';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { mockStudent } from '@/lib/mock-data';
import { Bell, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export function Header() {
  const router = useRouter();

  const handleLogout = () => {
    router.push('/login');
  };

  return (
    <header className="border-b border-border bg-card/30 backdrop-blur-sm sticky top-0 z-10">
      <div className="flex items-center justify-between px-4 lg:px-6 py-4">
        <div className="ml-12 lg:ml-0">
          <h2 className="text-lg lg:text-xl font-semibold">Bem-vindo de volta!</h2>
          <p className="text-xs lg:text-sm text-muted-foreground hidden sm:block">
            Continue sua jornada de aprendizado
          </p>
        </div>
        <div className="flex items-center gap-2 lg:gap-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
          </Button>
          <div className="hidden md:flex items-center gap-3">
            <Avatar>
              <AvatarFallback className="bg-primary text-primary-foreground">
                {mockStudent.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              </AvatarFallback>
            </Avatar>
            <div className="text-sm">
              <p className="font-medium">{mockStudent.name}</p>
              <p className="text-muted-foreground text-xs">{mockStudent.email}</p>
            </div>
          </div>
          <Avatar className="md:hidden">
            <AvatarFallback className="bg-primary text-primary-foreground">
              {mockStudent.name
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </AvatarFallback>
          </Avatar>
          <Button variant="ghost" size="icon" onClick={handleLogout} className="hidden sm:flex">
            <LogOut className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { mockCalendarEvents } from '@/lib/mock-data';
import { Calendar as CalendarIcon, Clock, Video, AlertCircle } from 'lucide-react';
import { format, isSameDay } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export default function CalendarioPage() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const eventsOnSelectedDate = mockCalendarEvents.filter((event) =>
    isSameDay(event.date, selectedDate)
  );

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'live':
        return Video;
      case 'prazo':
        return AlertCircle;
      default:
        return CalendarIcon;
    }
  };

  const getEventColor = (type: string) => {
    switch (type) {
      case 'live':
        return 'text-blue-500 bg-blue-500/10';
      case 'prazo':
        return 'text-red-500 bg-red-500/10';
      default:
        return 'text-green-500 bg-green-500/10';
    }
  };

  // Simple calendar days array
  const today = new Date();
  const currentMonth = selectedDate.getMonth();
  const currentYear = selectedDate.getFullYear();
  const firstDay = new Date(currentYear, currentMonth, 1);
  const lastDay = new Date(currentYear, currentMonth + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startingDayOfWeek = firstDay.getDay();

  const calendarDays: (number | null)[] = [];
  for (let i = 0; i < startingDayOfWeek; i++) {
    calendarDays.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }

  const hasEventOnDay = (day: number) => {
    const dateToCheck = new Date(currentYear, currentMonth, day);
    return mockCalendarEvents.some((event) => isSameDay(event.date, dateToCheck));
  };

  const changeMonth = (delta: number) => {
    setSelectedDate(new Date(currentYear, currentMonth + delta, 1));
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold mb-2">Calendário</h1>
        <p className="text-muted-foreground">
          Acompanhe suas aulas, lives e prazos
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-2"
        >
          <Card className="border-primary/20">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>
                  {format(selectedDate, 'MMMM yyyy', { locale: ptBR })}
                </CardTitle>
                <div className="flex gap-2">
                  <button
                    onClick={() => changeMonth(-1)}
                    className="px-3 py-1 rounded hover:bg-accent transition-colors"
                  >
                    ←
                  </button>
                  <button
                    onClick={() => changeMonth(1)}
                    className="px-3 py-1 rounded hover:bg-accent transition-colors"
                  >
                    →
                  </button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-2">
                {/* Weekday headers */}
                {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map(
                  (day) => (
                    <div
                      key={day}
                      className="text-center text-sm font-medium text-muted-foreground p-2"
                    >
                      {day}
                    </div>
                  )
                )}

                {/* Calendar days */}
                {calendarDays.map((day, index) => {
                  if (day === null) {
                    return <div key={`empty-${index}`} />;
                  }

                  const dateForDay = new Date(currentYear, currentMonth, day);
                  const isToday = isSameDay(dateForDay, today);
                  const isSelected = isSameDay(dateForDay, selectedDate);
                  const hasEvent = hasEventOnDay(day);

                  return (
                    <motion.button
                      key={day}
                      onClick={() =>
                        setSelectedDate(new Date(currentYear, currentMonth, day))
                      }
                      className={`
                        relative p-2 rounded-lg text-center transition-all
                        ${isSelected ? 'bg-primary text-primary-foreground neon-border' : ''}
                        ${isToday && !isSelected ? 'border-2 border-primary' : ''}
                        ${!isSelected ? 'hover:bg-accent' : ''}
                      `}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="text-sm font-medium">{day}</span>
                      {hasEvent && (
                        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Events for Selected Date */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-lg">
                {format(selectedDate, "d 'de' MMMM", { locale: ptBR })}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {eventsOnSelectedDate.length > 0 ? (
                <div className="space-y-3">
                  {eventsOnSelectedDate.map((event) => {
                    const Icon = getEventIcon(event.type);
                    const colorClass = getEventColor(event.type);

                    return (
                      <motion.div
                        key={event.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`p-3 rounded-lg ${colorClass}`}
                      >
                        <div className="flex items-start gap-3">
                          <Icon className="w-5 h-5 flex-shrink-0 mt-0.5" />
                          <div className="flex-1">
                            <h4 className="font-semibold text-sm">
                              {event.title}
                            </h4>
                            <p className="text-xs opacity-80 mt-1">
                              {event.description}
                            </p>
                            <div className="flex items-center gap-1 mt-2 text-xs opacity-70">
                              <Clock className="w-3 h-3" />
                              {format(event.date, 'HH:mm')}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground text-center py-8">
                  Nenhum evento neste dia
                </p>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* All Upcoming Events */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle>Próximos Eventos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {mockCalendarEvents
                .sort((a, b) => a.date.getTime() - b.date.getTime())
                .map((event, index) => {
                  const Icon = getEventIcon(event.type);
                  const colorClass = getEventColor(event.type);

                  return (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className={`p-4 rounded-lg ${colorClass} flex items-start gap-4`}
                    >
                      <Icon className="w-6 h-6 flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <h4 className="font-semibold">{event.title}</h4>
                        <p className="text-sm opacity-80 mt-1">
                          {event.description}
                        </p>
                        <div className="flex items-center gap-4 mt-2 text-sm opacity-70">
                          <span className="flex items-center gap-1">
                            <CalendarIcon className="w-4 h-4" />
                            {format(event.date, "d 'de' MMMM", {
                              locale: ptBR,
                            })}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {format(event.date, 'HH:mm')}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

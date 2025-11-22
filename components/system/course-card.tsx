"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Users, Award } from "lucide-react"
import { cn } from "@/lib/utils"

interface CourseCardProps {
  title: string
  description: string
  duration?: string
  students?: number
  level?: "Iniciante" | "Intermediário" | "Avançado"
  category?: string
  image?: string
  price?: string
  instructor?: string
  className?: string
  onEnroll?: () => void
  href?: string
}

export function CourseCard({
  title,
  description,
  duration,
  students,
  level,
  category,
  image,
  price,
  instructor,
  className,
  onEnroll,
  href,
}: CourseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className={cn("h-full", className)}
    >
      <Card className="h-full flex flex-col overflow-hidden border-dark-200 bg-dark-100 text-white hover:border-neon-purple transition-all duration-300">
        {/* Image */}
        {image && (
          <div className="relative h-48 overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-300 hover:scale-110"
              style={{ backgroundImage: `url(${image})` }}
            />
            {category && (
              <Badge variant="neon" className="absolute top-4 right-4">
                {category}
              </Badge>
            )}
          </div>
        )}

        <CardHeader>
          <div className="flex items-start justify-between mb-2">
            <CardTitle className="text-xl font-bold text-white">{title}</CardTitle>
            {level && (
              <Badge
                variant={
                  level === "Iniciante"
                    ? "neonPink"
                    : level === "Intermediário"
                    ? "neonPurple"
                    : "neon"
                }
                className="ml-2"
              >
                {level}
              </Badge>
            )}
          </div>
          <CardDescription className="text-gray-400">{description}</CardDescription>
        </CardHeader>

        <CardContent className="flex-1">
          {instructor && (
            <p className="text-sm text-gray-400 mb-4">
              Por: <span className="text-white font-medium">{instructor}</span>
            </p>
          )}

          <div className="flex flex-wrap gap-4 text-sm text-gray-400">
            {duration && (
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-neon-pink" />
                <span>{duration}</span>
              </div>
            )}
            {students !== undefined && (
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-neon-purple" />
                <span>{students} alunos</span>
              </div>
            )}
          </div>
        </CardContent>

        <CardFooter className="flex items-center justify-between border-t border-dark-200 pt-4">
          {price && (
            <div className="text-2xl font-bold text-neon-pink">{price}</div>
          )}
          <Button
            variant="neon"
            size="sm"
            onClick={onEnroll}
            asChild={!!href}
            className="ml-auto"
          >
            {href ? <a href={href}>Inscrever-se</a> : "Inscrever-se"}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

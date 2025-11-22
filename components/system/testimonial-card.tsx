"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { cn } from "@/lib/utils"

interface TestimonialCardProps {
  quote: string
  author: string
  role?: string
  company?: string
  image?: string
  rating?: number
  className?: string
}

export function TestimonialCard({
  quote,
  author,
  role,
  company,
  image,
  rating = 5,
  className,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn("h-full", className)}
    >
      <Card className="h-full bg-dark-100 border-dark-200 text-white hover:border-neon-purple transition-all duration-300 p-6">
        <CardContent className="p-0 flex flex-col h-full">
          {/* Quote Icon */}
          <Quote className="w-12 h-12 text-neon-pink mb-4 opacity-50" />

          {/* Quote */}
          <p className="text-gray-300 mb-6 flex-1 italic leading-relaxed">
            &ldquo;{quote}&rdquo;
          </p>

          {/* Author Info */}
          <div className="flex items-center gap-4">
            {image && (
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-neon-purple">
                <img
                  src={image}
                  alt={author}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div>
              <p className="font-semibold text-white">{author}</p>
              {(role || company) && (
                <p className="text-sm text-gray-400">
                  {role}
                  {role && company && " • "}
                  {company}
                </p>
              )}
            </div>
          </div>

          {/* Rating */}
          {rating > 0 && (
            <div className="flex gap-1 mt-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={cn(
                    "w-4 h-4",
                    i < rating ? "text-neon-pink" : "text-gray-600"
                  )}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}

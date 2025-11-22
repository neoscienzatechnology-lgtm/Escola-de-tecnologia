"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface TimelineItem {
  title: string
  description: string
  date?: string
  icon?: React.ReactNode
}

interface TimelineProps {
  items: TimelineItem[]
  className?: string
}

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Vertical Line */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-neon-diagonal" />

      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          className={cn(
            "relative mb-12 md:mb-16",
            index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:text-left"
          )}
        >
          {/* Timeline Node */}
          <div className="absolute left-0 md:left-1/2 top-0 -ml-3 md:-ml-3 w-6 h-6 rounded-full bg-gradient-neon-diagonal flex items-center justify-center border-4 border-black">
            {item.icon || <Check className="w-3 h-3 text-white" />}
          </div>

          {/* Content */}
          <div
            className={cn(
              "ml-12 md:ml-0",
              index % 2 === 0 ? "md:mr-12" : "md:ml-12"
            )}
          >
            <div className="bg-dark-100 border border-dark-200 rounded-lg p-6 hover:border-neon-purple transition-all duration-300">
              {item.date && (
                <span className="text-neon-pink text-sm font-semibold uppercase tracking-wider">
                  {item.date}
                </span>
              )}
              <h3 className="text-xl font-bold text-white mt-2 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

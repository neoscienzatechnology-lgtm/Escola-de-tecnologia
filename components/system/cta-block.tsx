"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CTABlockProps {
  title: string
  description?: string
  primaryCta?: {
    text: string
    href?: string
    onClick?: () => void
  }
  secondaryCta?: {
    text: string
    href?: string
    onClick?: () => void
  }
  variant?: "default" | "gradient" | "outlined"
  className?: string
}

export function CTABlock({
  title,
  description,
  primaryCta,
  secondaryCta,
  variant = "gradient",
  className,
}: CTABlockProps) {
  const variants = {
    default: "bg-dark-100 border border-dark-200",
    gradient: "bg-gradient-neon-diagonal",
    outlined: "bg-transparent border-2 border-neon-purple",
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn(
        "rounded-2xl p-8 md:p-12 text-center",
        variants[variant],
        className
      )}
    >
      <motion.h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {description}
        </motion.p>
      )}

      <motion.div
        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        {primaryCta && (
          <Button
            variant={variant === "gradient" ? "secondary" : "neon"}
            size="xl"
            onClick={primaryCta.onClick}
            asChild={!!primaryCta.href}
            className={variant === "gradient" ? "bg-white text-black hover:bg-gray-200" : ""}
          >
            {primaryCta.href ? (
              <a href={primaryCta.href}>{primaryCta.text}</a>
            ) : (
              primaryCta.text
            )}
          </Button>
        )}

        {secondaryCta && (
          <Button
            variant="outline"
            size="xl"
            className="border-white text-white hover:bg-white hover:text-black"
            onClick={secondaryCta.onClick}
            asChild={!!secondaryCta.href}
          >
            {secondaryCta.href ? (
              <a href={secondaryCta.href}>{secondaryCta.text}</a>
            ) : (
              secondaryCta.text
            )}
          </Button>
        )}
      </motion.div>
    </motion.div>
  )
}

"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavLink {
  label: string
  href: string
}

interface NavbarProps {
  logo?: string
  logoText?: string
  links?: NavLink[]
  ctaText?: string
  ctaHref?: string
  onCtaClick?: () => void
  className?: string
}

export function Navbar({
  logo,
  logoText = "Escola de Tecnologia",
  links = [
    { label: "Início", href: "/" },
    { label: "Cursos", href: "/cursos" },
    { label: "Sobre", href: "/sobre" },
    { label: "Contato", href: "/contato" },
  ],
  ctaText = "Inscreva-se",
  ctaHref = "/inscricao",
  onCtaClick,
  className,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-lg border-b border-dark-200",
        className
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            {logo && <img src={logo} alt={logoText} className="h-10" />}
            <span className="text-xl font-bold text-white">{logoText}</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-neon-pink transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              variant="neon"
              onClick={onCtaClick}
              asChild={!!ctaHref}
            >
              {ctaHref ? <a href={ctaHref}>{ctaText}</a> : ctaText}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-dark-100 border-t border-dark-200"
          >
            <div className="container-custom py-4 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:text-neon-pink transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button
                variant="neon"
                className="w-full"
                onClick={() => {
                  setIsOpen(false)
                  onCtaClick?.()
                }}
                asChild={!!ctaHref}
              >
                {ctaHref ? <a href={ctaHref}>{ctaText}</a> : ctaText}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

"use client"

import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"

interface FooterProps {
  className?: string
}

export function Footer({ className }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={cn("bg-black border-t border-dark-200 text-white", className)}>
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-neon-pink">
              Escola de Tecnologia
            </h3>
            <p className="text-gray-400 mb-4">
              Formando os profissionais do futuro com tecnologia de ponta e metodologia
              inspirada na FIAP.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-neon-pink transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-neon-pink transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-neon-pink transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-neon-pink transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-neon-pink transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="/cursos" className="text-gray-400 hover:text-neon-pink transition-colors">
                  Cursos
                </a>
              </li>
              <li>
                <a href="/sobre" className="text-gray-400 hover:text-neon-pink transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="/contato" className="text-gray-400 hover:text-neon-pink transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Programas</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-neon-pink transition-colors">
                  Desenvolvimento Web
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-neon-pink transition-colors">
                  Data Science
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-neon-pink transition-colors">
                  Inteligência Artificial
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-neon-pink transition-colors">
                  DevOps
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400">
                <Mail size={18} className="text-neon-purple" />
                <span>contato@escolatech.com.br</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone size={18} className="text-neon-purple" />
                <span>(11) 1234-5678</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <MapPin size={18} className="text-neon-purple" />
                <span>São Paulo, SP</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-200 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Escola de Tecnologia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Sobre", href: "/sobre" },
    { name: "Cursos", href: "/cursos" },
    { name: "Metodologia", href: "/metodologia" },
    { name: "Portfólio", href: "/portfolio" },
    { name: "Depoimentos", href: "/depoimentos" },
    { name: "Contato", href: "/contato" },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold">
              <span className="text-white">Escola</span>
              <span className="text-neonPink">Tech</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-neonPink px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/area-aluno"
                className="bg-gradient-to-r from-neonPink to-neonPurple text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Área do Aluno
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-t border-gray-800"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-neonPink block px-3 py-2 text-base font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/area-aluno"
                className="bg-gradient-to-r from-neonPink to-neonPurple text-white block px-3 py-2 rounded-lg text-base font-medium text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Área do Aluno
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

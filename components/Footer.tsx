import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-black to-gray-950 border-t border-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1">
            <Link href="/" className="text-2xl font-bold block mb-4">
              <span className="text-white">Escola</span>
              <span className="text-neonPink">Tech</span>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              Transformando vidas através da educação em tecnologia. 
              Inovação, qualidade e futuro.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-neonPink transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-neonPink transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-neonPink transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-neonPink transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-neonPink transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sobre" className="text-gray-400 hover:text-neonPink text-sm transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/cursos" className="text-gray-400 hover:text-neonPink text-sm transition-colors">
                  Cursos
                </Link>
              </li>
              <li>
                <Link href="/metodologia" className="text-gray-400 hover:text-neonPink text-sm transition-colors">
                  Metodologia
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 hover:text-neonPink text-sm transition-colors">
                  Portfólio
                </Link>
              </li>
              <li>
                <Link href="/depoimentos" className="text-gray-400 hover:text-neonPink text-sm transition-colors">
                  Depoimentos
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Suporte</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contato" className="text-gray-400 hover:text-neonPink text-sm transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/area-aluno" className="text-gray-400 hover:text-neonPink text-sm transition-colors">
                  Área do Aluno
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-neonPink text-sm transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-neonPink text-sm transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-neonPink text-sm transition-colors">
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start text-gray-400 text-sm">
                <Mail size={16} className="mr-2 mt-1 flex-shrink-0" />
                <span>contato@escolatech.com.br</span>
              </li>
              <li className="flex items-start text-gray-400 text-sm">
                <Phone size={16} className="mr-2 mt-1 flex-shrink-0" />
                <span>(11) 9999-9999</span>
              </li>
              <li className="flex items-start text-gray-400 text-sm">
                <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
                <span>São Paulo, SP - Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} EscolaTech. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

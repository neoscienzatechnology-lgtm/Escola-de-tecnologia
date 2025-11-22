import { HeroSection } from "@/components/system/hero-section"
import { Navbar } from "@/components/system/navbar"
import { Footer } from "@/components/system/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <HeroSection
        subtitle="Bem-vindo à"
        title="Escola de Tecnologia"
        description="Aprenda as tecnologias mais modernas com os melhores professores do mercado. Inspire-se na metodologia FIAP e transforme sua carreira."
        primaryCta={{
          text: "Ver Cursos",
          href: "/design-system",
        }}
        secondaryCta={{
          text: "Saiba Mais",
          href: "/design-system",
        }}
      />
      <Footer />
    </main>
  )
}

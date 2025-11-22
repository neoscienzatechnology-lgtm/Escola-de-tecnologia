"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { HeroSection } from "@/components/system/hero-section"
import { CourseCard } from "@/components/system/course-card"
import { CourseGrid } from "@/components/system/course-grid"
import { TestimonialCard } from "@/components/system/testimonial-card"
import { Timeline } from "@/components/system/timeline"
import { CTABlock } from "@/components/system/cta-block"
import { SectionTitle } from "@/components/system/section-title"
import { Container } from "@/components/system/container"
import { Navbar } from "@/components/system/navbar"
import { Footer } from "@/components/system/footer"
import { designTokens } from "@/lib/design/tokens"
import { Code, Palette, Type, Layout, Zap } from "lucide-react"

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-20">
        <HeroSection
          subtitle="Design System"
          title="Escola de Tecnologia UI/UX"
          description="Sistema de design completo e profissional inspirado no estilo visual da FIAP"
          primaryCta={{
            text: "Ver Componentes",
            onClick: () => document.getElementById('components')?.scrollIntoView({ behavior: 'smooth' })
          }}
        />
      </section>

      <Container className="py-16 space-y-24">
        {/* Design Tokens */}
        <section id="tokens">
          <SectionTitle
            subtitle="Fundamentos"
            title="Design Tokens"
            description="Tokens de design padronizados para cores, tipografia, espaçamentos e mais"
          />

          {/* Colors */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-6">Cores</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <div className="h-24 rounded-lg bg-black border border-white"></div>
                <p className="text-white font-mono text-sm">Black #000</p>
              </div>
              <div className="space-y-2">
                <div className="h-24 rounded-lg bg-white"></div>
                <p className="text-white font-mono text-sm">White #fff</p>
              </div>
              <div className="space-y-2">
                <div className="h-24 rounded-lg" style={{ background: designTokens.colors.neon.pink }}></div>
                <p className="text-white font-mono text-sm">Neon Pink #ff006e</p>
              </div>
              <div className="space-y-2">
                <div className="h-24 rounded-lg" style={{ background: designTokens.colors.neon.purple }}></div>
                <p className="text-white font-mono text-sm">Neon Purple #6a00f4</p>
              </div>
              <div className="space-y-2">
                <div className="h-24 rounded-lg" style={{ background: designTokens.colors.dark[100] }}></div>
                <p className="text-white font-mono text-sm">Dark 100 #111</p>
              </div>
              <div className="space-y-2">
                <div className="h-24 rounded-lg" style={{ background: designTokens.colors.dark[200] }}></div>
                <p className="text-white font-mono text-sm">Dark 200 #222</p>
              </div>
              <div className="space-y-2">
                <div className="h-24 rounded-lg" style={{ background: designTokens.colors.dark[300] }}></div>
                <p className="text-white font-mono text-sm">Dark 300 #333</p>
              </div>
              <div className="space-y-2">
                <div className="h-24 rounded-lg bg-gradient-neon-diagonal"></div>
                <p className="text-white font-mono text-sm">Gradient Neon</p>
              </div>
            </div>
          </div>

          {/* Typography */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-6">Tipografia</h3>
            <div className="space-y-4 bg-dark-100 rounded-lg p-6 border border-dark-200">
              <div>
                <p className="text-gray-400 text-sm mb-2">Display (Poppins)</p>
                <h1 className="text-5xl font-bold text-white">The quick brown fox</h1>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-2">Body (Inter)</p>
                <p className="text-lg text-white">The quick brown fox jumps over the lazy dog</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
                <div>
                  <p className="text-gray-400 text-xs mb-1">Light (300)</p>
                  <p className="text-white font-light">Sample Text</p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs mb-1">Regular (400)</p>
                  <p className="text-white font-normal">Sample Text</p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs mb-1">Semibold (600)</p>
                  <p className="text-white font-semibold">Sample Text</p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs mb-1">Bold (700)</p>
                  <p className="text-white font-bold">Sample Text</p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs mb-1">Extrabold (800)</p>
                  <p className="text-white font-extrabold">Sample Text</p>
                </div>
              </div>
            </div>
          </div>

          {/* Spacing & Radii */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Border Radius</h3>
              <div className="space-y-3 bg-dark-100 rounded-lg p-6 border border-dark-200">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-neon-pink rounded-sm"></div>
                  <span className="text-white">4px (sm)</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-neon-pink rounded-md"></div>
                  <span className="text-white">8px (md)</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-neon-pink rounded-lg"></div>
                  <span className="text-white">12px (lg)</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-neon-pink rounded-xl"></div>
                  <span className="text-white">24px (xl)</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Transitions</h3>
              <div className="space-y-3 bg-dark-100 rounded-lg p-6 border border-dark-200">
                <div>
                  <p className="text-gray-400 text-sm mb-2">Fast (150ms)</p>
                  <div className="w-16 h-16 bg-neon-pink rounded-lg transition-fast hover:scale-110 cursor-pointer"></div>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-2">Normal (300ms)</p>
                  <div className="w-16 h-16 bg-neon-purple rounded-lg transition-smooth hover:scale-110 cursor-pointer"></div>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-2">Futuristic (bounce)</p>
                  <div className="w-16 h-16 bg-gradient-neon-diagonal rounded-lg transition-futuristic hover:scale-110 cursor-pointer"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Basic Components */}
        <section id="components">
          <SectionTitle
            subtitle="Componentes Básicos"
            title="UI Components"
            description="Componentes fundamentais do sistema de design"
          />

          {/* Buttons */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">Buttons</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="default">Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="neon">Neon</Button>
              <Button variant="neonPink">Neon Pink</Button>
              <Button variant="neonPurple">Neon Purple</Button>
            </div>
            <div className="flex flex-wrap gap-4 mt-4">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="xl">Extra Large</Button>
            </div>
          </div>

          {/* Inputs */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">Inputs</h3>
            <div className="max-w-md space-y-4">
              <Input placeholder="Enter your email" type="email" />
              <Input placeholder="Disabled input" disabled />
              <Textarea placeholder="Type your message here" />
            </div>
          </div>

          {/* Badges */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">Badges</h3>
            <div className="flex flex-wrap gap-3">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="neon">Neon</Badge>
              <Badge variant="neonPink">Neon Pink</Badge>
              <Badge variant="neonPurple">Neon Purple</Badge>
            </div>
          </div>

          {/* Cards */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">Cards</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-dark-100 border-dark-200 text-white">
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card description goes here</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">This is the card content area.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="neon" size="sm">Action</Button>
                </CardFooter>
              </Card>

              <Card className="bg-dark-100 border-dark-200 text-white">
                <CardHeader>
                  <CardTitle>Another Card</CardTitle>
                  <CardDescription>With different content</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">Card content can vary in length and complexity.</p>
                </CardContent>
              </Card>

              <Card className="bg-dark-100 border-dark-200 text-white hover:border-neon-purple transition-all">
                <CardHeader>
                  <CardTitle>Hover Me</CardTitle>
                  <CardDescription>Interactive card</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">This card has hover effects.</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Modal */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">Modal / Dialog</h3>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="neon">Open Modal</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Modal Title</DialogTitle>
                  <DialogDescription className="text-gray-400">
                    This is a modal dialog component. You can put any content here.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <Input placeholder="Your name" />
                  <Textarea placeholder="Your message" />
                  <div className="flex justify-end gap-2">
                    <Button variant="outline">Cancel</Button>
                    <Button variant="neon">Submit</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </section>

        {/* Advanced Components */}
        <section id="advanced">
          <SectionTitle
            subtitle="Componentes Avançados"
            title="Advanced Components"
            description="Componentes complexos e especializados do sistema"
          />

          {/* Course Cards */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-6">Course Cards</h3>
            <CourseGrid columns={3}>
              <CourseCard
                title="Desenvolvimento Web Full Stack"
                description="Aprenda a desenvolver aplicações web modernas do zero ao avançado"
                duration="6 meses"
                students={1234}
                level="Intermediário"
                category="Desenvolvimento"
                price="R$ 2.499"
                instructor="João Silva"
              />
              <CourseCard
                title="Data Science com Python"
                description="Domine análise de dados, machine learning e visualização"
                duration="8 meses"
                students={892}
                level="Avançado"
                category="Data Science"
                price="R$ 2.999"
                instructor="Maria Santos"
              />
              <CourseCard
                title="UI/UX Design"
                description="Crie interfaces incríveis e experiências memoráveis"
                duration="4 meses"
                students={756}
                level="Iniciante"
                category="Design"
                price="R$ 1.999"
                instructor="Pedro Costa"
              />
            </CourseGrid>
          </div>

          {/* Testimonials */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-6">Testimonial Cards</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <TestimonialCard
                quote="A melhor decisão que tomei foi fazer esse curso. Consegui meu primeiro emprego como desenvolvedor em apenas 3 meses!"
                author="Ana Paula"
                role="Desenvolvedora Front-end"
                company="Tech Corp"
                rating={5}
              />
              <TestimonialCard
                quote="Professores incríveis e conteúdo atualizado. Recomendo para qualquer pessoa que quer entrar na área de tecnologia."
                author="Carlos Eduardo"
                role="Data Scientist"
                company="Data Insights"
                rating={5}
              />
              <TestimonialCard
                quote="O suporte e a comunidade são fantásticos. Sempre tem alguém para ajudar quando surge uma dúvida."
                author="Juliana Oliveira"
                role="UX Designer"
                company="Design Studio"
                rating={5}
              />
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-6">Timeline</h3>
            <Timeline
              items={[
                {
                  title: "Inscrição",
                  description: "Faça sua inscrição online em menos de 5 minutos",
                  date: "Passo 1",
                },
                {
                  title: "Início das Aulas",
                  description: "Comece a aprender imediatamente com nossa plataforma",
                  date: "Passo 2",
                },
                {
                  title: "Projetos Práticos",
                  description: "Desenvolva projetos reais para seu portfólio",
                  date: "Passo 3",
                },
                {
                  title: "Certificação",
                  description: "Receba seu certificado reconhecido pelo mercado",
                  date: "Passo 4",
                },
              ]}
            />
          </div>

          {/* CTA Blocks */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6">CTA Blocks</h3>
            
            <CTABlock
              title="Pronto para começar?"
              description="Junte-se a milhares de alunos e transforme sua carreira hoje mesmo"
              variant="gradient"
              primaryCta={{ text: "Começar Agora" }}
              secondaryCta={{ text: "Ver Cursos" }}
            />

            <CTABlock
              title="Tem dúvidas?"
              description="Nossa equipe está pronta para ajudar você"
              variant="outlined"
              primaryCta={{ text: "Falar com Suporte" }}
            />
          </div>
        </section>

        {/* UX Guidelines */}
        <section id="guidelines">
          <SectionTitle
            subtitle="Guidelines"
            title="UX Guidelines"
            description="Diretrizes de experiência do usuário e boas práticas"
          />

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-dark-100 border-dark-200 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Layout className="w-6 h-6 text-neon-pink" />
                  Espaçamento e Grid
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-gray-400">
                <p>• Use sistema de espaçamento consistente (4px, 8px, 16px, 24px, 32px)</p>
                <p>• Grid responsivo: Mobile (1 col), Tablet (2 cols), Desktop (3-4 cols)</p>
                <p>• Padding padrão dos containers: 2rem desktop, 1rem mobile</p>
                <p>• Altura da navbar: 80px desktop, 64px mobile</p>
              </CardContent>
            </Card>

            <Card className="bg-dark-100 border-dark-200 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Type className="w-6 h-6 text-neon-purple" />
                  Tipografia
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-gray-400">
                <p>• Títulos: Poppins (font-bold, 600-800)</p>
                <p>• Body: Inter (font-regular, 400)</p>
                <p>• Line-height: 1.5 para body, 1.2 para títulos</p>
                <p>• Contrast ratio mínimo: 4.5:1 para texto normal</p>
              </CardContent>
            </Card>

            <Card className="bg-dark-100 border-dark-200 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Palette className="w-6 h-6 text-neon-pink" />
                  Cores e Contraste
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-gray-400">
                <p>• Use cores neon (#ff006e, #6a00f4) apenas para destaques</p>
                <p>• Fundo principal: preto (#000) ou dark-100 (#111)</p>
                <p>• Texto em fundos escuros: branco ou gray-300</p>
                <p>• Sempre teste contraste para acessibilidade</p>
              </CardContent>
            </Card>

            <Card className="bg-dark-100 border-dark-200 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Zap className="w-6 h-6 text-neon-purple" />
                  Interações
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-gray-400">
                <p>• Hover: mudança de cor + escala/sombra (300ms)</p>
                <p>• Focus: ring de 2px com offset de 2px</p>
                <p>• Active: escala ligeiramente reduzida (0.98)</p>
                <p>• Loading states: skeleton ou spinner com neon</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 bg-dark-100 border border-dark-200 rounded-lg p-6">
            <h4 className="text-xl font-bold text-white mb-4">Acessibilidade</h4>
            <ul className="space-y-2 text-gray-400">
              <li>✓ Todos os elementos interativos devem ser acessíveis por teclado</li>
              <li>✓ Use labels semânticos e ARIA attributes quando necessário</li>
              <li>✓ Garanta contraste adequado entre texto e fundo (WCAG AA)</li>
              <li>✓ Forneça feedback visual para estados (hover, focus, active, disabled)</li>
              <li>✓ Use animações sutis e respeitosas (prefers-reduced-motion)</li>
              <li>✓ Imagens devem ter alt text descritivo</li>
            </ul>
          </div>
        </section>

        {/* Code Examples */}
        <section id="usage">
          <SectionTitle
            subtitle="Exemplos"
            title="Como Usar"
            description="Exemplos de código para implementação dos componentes"
          />

          <div className="space-y-6">
            <Card className="bg-dark-100 border-dark-200 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Code className="w-5 h-5 text-neon-pink" />
                  Button Component
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-black p-4 rounded-lg overflow-x-auto text-sm">
                  <code className="text-gray-300">{`import { Button } from "@/components/ui/button"

// Basic usage
<Button variant="neon">Click me</Button>

// With different sizes and variants
<Button variant="neonPink" size="lg">Large Pink</Button>
<Button variant="outline">Outline</Button>

// As a link
<Button variant="neon" asChild>
  <a href="/courses">View Courses</a>
</Button>`}</code>
                </pre>
              </CardContent>
            </Card>

            <Card className="bg-dark-100 border-dark-200 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Code className="w-5 h-5 text-neon-purple" />
                  Course Card Component
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-black p-4 rounded-lg overflow-x-auto text-sm">
                  <code className="text-gray-300">{`import { CourseCard } from "@/components/system/course-card"

<CourseCard
  title="Web Development"
  description="Learn to build modern web apps"
  duration="6 months"
  students={1200}
  level="Intermediário"
  category="Development"
  price="R$ 2.499"
  instructor="John Doe"
  onEnroll={() => console.log('Enrolled!')}
/>`}</code>
                </pre>
              </CardContent>
            </Card>

            <Card className="bg-dark-100 border-dark-200 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Code className="w-5 h-5 text-neon-pink" />
                  Hero Section Component
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-black p-4 rounded-lg overflow-x-auto text-sm">
                  <code className="text-gray-300">{`import { HeroSection } from "@/components/system/hero-section"

<HeroSection
  subtitle="Welcome to"
  title="Escola de Tecnologia"
  description="Learn cutting-edge technology"
  primaryCta={{
    text: "Get Started",
    href: "/courses"
  }}
  secondaryCta={{
    text: "Learn More",
    onClick: () => alert('Learn more')
  }}
/>`}</code>
                </pre>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final CTA */}
        <CTABlock
          title="Comece a usar o Design System"
          description="Todos os componentes estão prontos para uso. Comece a criar experiências incríveis!"
          variant="gradient"
          primaryCta={{ text: "Ver Documentação", href: "#tokens" }}
          secondaryCta={{ text: "Voltar ao Início", href: "/" }}
        />
      </Container>

      <Footer />
    </div>
  )
}

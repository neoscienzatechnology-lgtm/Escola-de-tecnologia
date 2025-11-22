import type { Metadata } from "next"
import "../styles/design-system.css"

export const metadata: Metadata = {
  title: "Escola de Tecnologia",
  description: "Formando os profissionais do futuro",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className="dark">{children}</body>
    </html>
  )
}

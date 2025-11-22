import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Escola de Tecnologia - Área do Aluno",
  description: "Plataforma de aprendizado EAD",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

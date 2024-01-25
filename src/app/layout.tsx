import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

// Context
import ContextProviders from '@/components/ContextProviders'

// CSS Global
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'template-admin',
  description: 'Um template-admin feito com nextJs 14, que possui uma tela de login com suporte para login com e-mail ou senha ou com o google e uma home page que permite a alternancia entre temas claro e escuro',
  authors: [{ name: "Bruno Mikael Nagel" }]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProviders>
          {children}
        </ContextProviders>
      </body>
    </html>
  )
}

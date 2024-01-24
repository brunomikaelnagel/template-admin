import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ContextProviders from '@/components/ContextProviders'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'template-admin',
  description: 'Um template administrativo responsivo desenvolvido com Next.js, integrado com autenticação Firebase. Este template oferece uma interface de usuário limpa e moderna para a administração de dados e recursos.'
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

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ContextProviders from '@/components/ContextProviders'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'template-admin',
  description: 'template-admin feito com firebase e nextjs',
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
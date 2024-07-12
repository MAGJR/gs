import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

type Props = {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'Gs',
  description: 'Get the best products all in one place',
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

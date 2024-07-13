import { NextIntlClientProvider, useMessages } from 'next-intl'
import Footer from '../components/footer'
import Header from '../components/header'
import { Metadata } from 'next'

type Props = {
  children: React.ReactNode
  params: {
    locale: 'en' | 'pt-BR'
  }
}

export const metadata: Metadata = {
  title: 'GS | Home ',
  description: 'GS, the solution for your transport needs. Learn about our products and see how we can help.',
}

export default function Layout({ children, params: { locale } }: Props) {
  const messages = useMessages()

  return (
    <html lang={locale}>
      <body>
        <Header />
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Footer />
      </body>
    </html>
  )
}

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
  title: 'GS | Products ',
  description: 'Get the best products all in one place',
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

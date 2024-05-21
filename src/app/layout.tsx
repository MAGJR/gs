import type { Metadata } from "next";
import {NextIntlClientProvider, useMessages} from 'next-intl';
import { Inter } from "next/font/google";
import "./globals.css";
import { unstable_setRequestLocale } from "next-intl/server";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: React.ReactNode
  params: {
      locale: "en" | "pt-BR"
  }
}


export const metadata: Metadata = {
  title: "Gs",
  description: "Generated by create next app",
};

export default  function RootLayout({
  children,
  params: {locale},
}: Props) {
  
  const messages =  useMessages();

  return (
    <html lang={locale}>
     <body className={inter.className}>
      <NextIntlClientProvider messages={messages}> 
        {children}
      </NextIntlClientProvider>
     </body>
    </html>
  );
}
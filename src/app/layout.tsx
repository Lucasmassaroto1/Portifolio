import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackgroundDarkVeil from "@/components/BackgroundDarkVeil";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lucas Massaroto - Portifólio",
  description: "Projetos, experiências e contato.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <BackgroundDarkVeil />
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

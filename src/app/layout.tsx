import type { Metadata, Viewport } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { assetPath } from "@/utils/assets";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: "#444754",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://victor1308code.github.io/vertice-contabilidade"),
  title: "Vértice Contabilidade | Contabilidade Estratégica para Empresas",
  description:
    "Serviços contábeis para empresas, empreendedores e profissionais que buscam mais organização, economia tributária e clareza para cuidar do seu negócio.",
  keywords: [
    "contabilidade",
    "Vértice Contabilidade",
    "contabilidade para empresas",
    "assessoria fiscal",
    "abertura de empresa",
    "departamento pessoal",
    "consultoria contábil",
    "MEI",
    "microempresa",
    "atendimento online e presencial",
  ],
  authors: [{ name: "Vértice Contabilidade" }],
  creator: "Vértice Contabilidade",
  publisher: "Vértice Contabilidade",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://victor1308code.github.io/vertice-contabilidade",
    siteName: "Vértice Contabilidade",
    title: "Vértice Contabilidade | Contabilidade Estratégica para Empresas",
    description:
      "Serviços contábeis para empresas, empreendedores e profissionais que buscam mais organização, economia tributária e clareza para cuidar do seu negócio.",
    images: [
      {
        url: assetPath("/images/logo-header.svg"),
        width: 444,
        height: 444,
        alt: "Vértice Contabilidade - Logotipo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vértice Contabilidade | Contabilidade Estratégica para Empresas",
    description:
      "Serviços contábeis para empresas, empreendedores e profissionais que buscam mais organização, economia tributária e clareza para cuidar do seu negócio.",
    images: [assetPath("/images/logo-header.svg")],
  },
  icons: {
    icon: assetPath("/images/logo-header.svg"),
    shortcut: assetPath("/images/logo-header.svg"),
    apple: assetPath("/images/logo-header.svg"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} ${inter.variable}`}>
      <body className="font-sans antialiased selection:bg-brand-primary-light selection:text-brand-dark">
        {/* Skip link para acessibilidade */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand-primary focus:text-white focus:rounded-md focus:shadow-lg"
        >
          Pular para o conteúdo principal
        </a>
        {children}
      </body>
    </html>
  );
}

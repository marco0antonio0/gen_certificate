import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Gerador Certificado BR - Gerador de Certificados Online Gratuito",
  description:
    "Crie certificados personalizados gratuitamente com o Gerador Certificado BR. 7 modelos profissionais, upload de assinatura, geração em lote e download instantâneo.",
  keywords:
    "gerador certificado br, gerador de certificados, certificados personalizados, criar certificado online, certificado grátis, gerador certificado digital, assinatura digital, certificados profissionais",
  authors: [{ name: "Gerador Certificado BR" }],
  creator: "Gerador Certificado BR",
  publisher: "Gerador Certificado BR",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://geradorCertificadoBR.com",
    title: "Gerador Certificado BR - Gerador de Certificados Online Gratuito",
    description:
      "Crie certificados personalizados gratuitamente. 7 modelos profissionais, upload de assinatura e geração em lote.",
    siteName: "Gerador Certificado BR",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Gerador Certificado BR - Gerador de Certificados",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gerador Certificado BR - Gerador de Certificados Online",
    description: "Crie certificados personalizados gratuitamente",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="canonical" href="https://geradorCertificadoBR.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Gerador Certificado BR",
              description: "Ferramenta gratuita para gerar certificados personalizados",
              url: "https://geradorCertificadoBR.com",
              applicationCategory: "UtilityApplication",
              operatingSystem: "Web",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "BRL",
              },
              creator: {
                "@type": "Organization",
                name: "Gerador Certificado BR",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

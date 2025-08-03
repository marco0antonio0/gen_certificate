import type { Metadata } from "next"
import Header from "@/components/header"
import CertificateGenerator from "@/components/certificate-generator"
import Hero from "@/components/hero"
import Features from "@/components/features"
import InfoSection from "@/components/info-section"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Gerador de Certificados Online Grátis - Crie Certificados Personalizados",
  description:
    "Ferramenta gratuita para gerar certificados personalizados com assinatura digital. Crie certificados profissionais em segundos com múltiplos modelos disponíveis.",
  keywords:
    "gerador de certificados, certificados personalizados, criar certificado online, certificado grátis, gerador certificado digital, assinatura digital, certificados profissionais",
  openGraph: {
    title: "Gerador de Certificados Online - Crie Certificados Personalizados Grátis",
    description:
      "Ferramenta gratuita para gerar certificados personalizados com assinatura e textos customizados. Múltiplos modelos profissionais disponíveis.",
    type: "website",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200&text=Gerador+de+Certificados",
        width: 1200,
        height: 630,
        alt: "Gerador de Certificados Online",
      },
    ],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://certificados.com",
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      <Hero />
      <CertificateGenerator />
      <Features />
      <InfoSection />
      <Footer />
    </main>
  )
}

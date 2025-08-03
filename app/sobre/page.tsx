import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Users, Zap, Shield, Heart, Target } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Sobre o Gerador Certificado BR - Gerador de Certificados Online Gratuito",
  description:
    "Conheça o Gerador Certificado BR, a ferramenta gratuita para criar certificados personalizados. Nossa missão é democratizar a criação de certificados profissionais.",
  robots: "index, follow",
}

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Sobre o Gerador Certificado BR</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Democratizando a criação de certificados profissionais com tecnologia gratuita e acessível para todos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Target className="w-6 h-6 text-blue-600" />
                  Nossa Missão
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Facilitar a criação de certificados profissionais para educadores, empresas e organizações, oferecendo
                  uma ferramenta gratuita, segura e fácil de usar que não requer conhecimentos técnicos.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Heart className="w-6 h-6 text-blue-600" />
                  Nossos Valores
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-600 space-y-2">
                  <li>
                    • <strong>Gratuidade:</strong> Acesso livre para todos
                  </li>
                  <li>
                    • <strong>Privacidade:</strong> Seus dados não são armazenados
                  </li>
                  <li>
                    • <strong>Qualidade:</strong> Certificados profissionais
                  </li>
                  <li>
                    • <strong>Simplicidade:</strong> Interface intuitiva
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Como Funciona</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-lg">1</span>
                </div>
                <h3 className="font-semibold mb-2">Configure</h3>
                <p className="text-gray-600 text-sm">
                  Escolha o modelo, adicione texto personalizado e faça upload da sua assinatura
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-lg">2</span>
                </div>
                <h3 className="font-semibold mb-2">Visualize</h3>
                <p className="text-gray-600 text-sm">Veja o preview em tempo real do seu certificado antes de gerar</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-lg">3</span>
                </div>
                <h3 className="font-semibold mb-2">Baixe</h3>
                <p className="text-gray-600 text-sm">
                  Gere e baixe seus certificados em alta qualidade instantaneamente
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Award className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">7 Modelos</h3>
                <p className="text-gray-600 text-sm">Designs profissionais para diferentes ocasiões</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Users className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Geração em Lote</h3>
                <p className="text-gray-600 text-sm">Até 5 certificados de uma só vez</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Zap className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Instantâneo</h3>
                <p className="text-gray-600 text-sm">Geração e download em segundos</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Shield className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">100% Seguro</h3>
                <p className="text-gray-600 text-sm">Dados não são armazenados</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pronto para Começar?</h2>
            <p className="text-gray-600 mb-6">
              Crie seus certificados profissionais agora mesmo, é rápido e totalmente gratuito.
            </p>
            <Button asChild size="lg">
              <Link href="/">Começar a Gerar Certificados</Link>
            </Button>
            <p className="text-gray-600 mt-6">
              O Gerador Certificado BR é uma ferramenta gratuita criada para facilitar a vida de educadores e
              profissionais.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

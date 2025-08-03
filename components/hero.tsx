"use client"

import { Award, Star, Users, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const scrollToGenerator = () => {
    document.getElementById("generator")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-16 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          <span className="text-blue-600">Gerador Certificado BR</span>
          <br />
          <span className="text-blue-600">Certificados</span> Personalizados
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Crie certificados profissionais com facilidade usando o Gerador Certificado BR. Adicione seu nome, assinatura
          personalizada e escolha entre 7 modelos elegantes. Tudo gratuito e sem cadastro.
        </p>

        <div className="flex flex-wrap justify-center gap-8 mb-8">
          <div className="flex items-center gap-2 text-gray-700">
            <Award className="w-5 h-5 text-blue-600" />
            <span>7 Modelos Profissionais</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <Star className="w-5 h-5 text-blue-600" />
            <span>100% Gratuito</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <Users className="w-5 h-5 text-blue-600" />
            <span>Geração em Lote</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <Zap className="w-5 h-5 text-blue-600" />
            <span>Download Instantâneo</span>
          </div>
        </div>

        <Button onClick={scrollToGenerator} size="lg" className="mb-8">
          Começar Agora - É Grátis
        </Button>

        <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
          <h3 className="font-semibold text-gray-900 mb-2">Recursos Principais:</h3>
          <ul className="text-left text-gray-600 space-y-1">
            <li>✓ Upload de assinatura personalizada</li>
            <li>✓ Remoção automática de fundo</li>
            <li>✓ 7 modelos profissionais</li>
            <li>✓ Geração individual ou em lote (até 5)</li>
            <li>✓ Preview em tempo real</li>
            <li>✓ Seus dados não são armazenados</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

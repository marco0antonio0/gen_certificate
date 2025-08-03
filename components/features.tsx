import { Shield, Zap, Download, Palette, Users, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: Shield,
    title: "Seguro e Privado",
    description: "Seus dados não são armazenados. Tudo é processado em tempo real e descartado após a geração.",
  },
  {
    icon: Zap,
    title: "Rápido e Eficiente",
    description: "Gere certificados em segundos com nossa API otimizada e interface intuitiva.",
  },
  {
    icon: Download,
    title: "Download Instantâneo",
    description: "Baixe seus certificados imediatamente em alta qualidade PNG ou ZIP para múltiplos.",
  },
  {
    icon: Palette,
    title: "Modelos Elegantes",
    description: "Escolha entre diversos modelos profissionais para diferentes tipos de certificados.",
  },
  {
    icon: Users,
    title: "Geração em Lote",
    description: "Crie até 5 certificados de uma só vez para economizar tempo em eventos e cursos.",
  },
  {
    icon: Clock,
    title: "Disponível 24/7",
    description: "Acesse nossa ferramenta a qualquer hora, de qualquer lugar, sem limitações.",
  },
]

export default function Features() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Por que escolher nosso gerador?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nossa ferramenta oferece tudo que você precisa para criar certificados profissionais de forma rápida e
            segura.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

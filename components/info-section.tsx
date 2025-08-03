import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Info, Lock, Trash2, Server } from "lucide-react"

export default function InfoSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Informações Importantes sobre Privacidade</h2>
          <p className="text-gray-600">Sua privacidade é nossa prioridade. Entenda como tratamos seus dados.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-green-800">
                <Lock className="w-6 h-6" />
                Não Armazenamos Dados
              </CardTitle>
            </CardHeader>
            <CardContent className="text-green-700">
              <p>
                Nenhuma informação pessoal, nome, assinatura ou texto é armazenado em nossos servidores. Todos os dados
                são processados em tempo real e descartados imediatamente após a geração do certificado.
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-blue-800">
                <Server className="w-6 h-6" />
                Processamento Seguro
              </CardTitle>
            </CardHeader>
            <CardContent className="text-blue-700">
              <p>
                Utilizamos conexões seguras (HTTPS) para todas as comunicações. Suas imagens de assinatura são
                convertidas e processadas de forma criptografada.
              </p>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-orange-800">
                <Trash2 className="w-6 h-6" />
                Exclusão Automática
              </CardTitle>
            </CardHeader>
            <CardContent className="text-orange-700">
              <p>
                Todos os arquivos temporários gerados durante o processo são automaticamente excluídos após o download,
                garantindo que nada permaneça em nossos sistemas.
              </p>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-purple-800">
                <Info className="w-6 h-6" />
                Uso Responsável
              </CardTitle>
            </CardHeader>
            <CardContent className="text-purple-700">
              <p>
                Esta ferramenta deve ser usada apenas para fins legítimos. Não nos responsabilizamos pelo uso inadequado
                dos certificados gerados.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 p-6 bg-white rounded-lg border">
          <h3 className="font-semibold text-gray-900 mb-3">Como Funciona:</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-600">
            <li>Você preenche os dados do certificado em seu navegador</li>
            <li>Os dados são enviados de forma segura para nossa API</li>
            <li>O certificado é gerado instantaneamente</li>
            <li>Você recebe o arquivo para download</li>
            <li>Todos os dados temporários são imediatamente excluídos</li>
          </ol>
        </div>
      </div>
    </section>
  )
}

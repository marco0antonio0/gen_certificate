import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Eye, Lock, AlertTriangle, FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "Políticas de Uso - Gerador Certificado BR | Termos e Condições",
  description:
    "Conheça as políticas de uso, privacidade e termos de serviço do Gerador Certificado BR. Entenda como protegemos seus dados e as regras de uso da plataforma.",
  robots: "index, follow",
}

export default function PoliticasPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Políticas de Uso</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transparência total sobre como funciona o Gerador Certificado BR e como protegemos sua privacidade.
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-green-600" />
                  Política de Privacidade
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h3 className="font-semibold text-green-800 mb-2">✅ O que NÃO fazemos:</h3>
                  <ul className="text-green-700 space-y-1">
                    <li>• Não armazenamos nenhum dado pessoal</li>
                    <li>• Não salvamos nomes, textos ou assinaturas</li>
                    <li>• Não criamos contas ou perfis de usuário</li>
                    <li>• Não compartilhamos informações com terceiros</li>
                    <li>• Não utilizamos cookies de rastreamento</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Como Funciona o Processamento:</h3>
                  <ol className="list-decimal list-inside space-y-2 text-gray-600">
                    <li>Você preenche os dados do certificado em seu navegador</li>
                    <li>Os dados são enviados temporariamente para nossa API</li>
                    <li>O certificado é gerado instantaneamente</li>
                    <li>Você recebe o arquivo para download</li>
                    <li>Todos os dados temporários são imediatamente excluídos</li>
                  </ol>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <FileText className="w-6 h-6 text-blue-600" />
                  Termos de Uso
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Uso Permitido:</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Criação de certificados para fins educacionais</li>
                    <li>• Certificados de participação em eventos</li>
                    <li>• Reconhecimentos corporativos</li>
                    <li>• Certificados de conclusão de cursos</li>
                    <li>• Diplomas e certificações profissionais legítimas</li>
                  </ul>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h3 className="font-semibold text-red-800 mb-2">❌ Uso Proibido:</h3>
                  <ul className="text-red-700 space-y-1">
                    <li>• Criação de documentos falsos ou fraudulentos</li>
                    <li>• Certificados de instituições sem autorização</li>
                    <li>• Documentos que violem direitos autorais</li>
                    <li>• Conteúdo ofensivo, discriminatório ou ilegal</li>
                    <li>• Uso comercial não autorizado de marcas</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Lock className="w-6 h-6 text-purple-600" />
                  Segurança e Proteção
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-800 mb-2">🔒 Conexão Segura</h4>
                    <p className="text-purple-700 text-sm">
                      Todas as comunicações são protegidas por HTTPS com criptografia SSL/TLS.
                    </p>
                  </div>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-800 mb-2">🗑️ Exclusão Automática</h4>
                    <p className="text-purple-700 text-sm">
                      Arquivos temporários são automaticamente excluídos após o processamento.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6 text-orange-600" />
                  Responsabilidades e Limitações
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Responsabilidade do Usuário:</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Verificar a veracidade das informações inseridas</li>
                    <li>• Usar a ferramenta apenas para fins legítimos</li>
                    <li>• Respeitar direitos autorais e marcas registradas</li>
                    <li>• Não sobrecarregar o sistema com uso excessivo</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Limitações do Serviço:</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Máximo de 5 certificados por geração em lote</li>
                    <li>• Tamanho máximo de imagem para assinatura: 5MB</li>
                    <li>• Disponibilidade sujeita à manutenção do servidor</li>
                    <li>• Não garantimos disponibilidade 100% do tempo</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Eye className="w-6 h-6 text-indigo-600" />
                  Atualizações das Políticas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Estas políticas podem ser atualizadas periodicamente para refletir melhorias no serviço ou mudanças
                  legais. Recomendamos revisar esta página ocasionalmente.
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Última atualização:</strong> agosto de 2025
                </p>
              </CardContent>
            </Card>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Dúvidas sobre as Políticas?</h2>
              <p className="text-gray-600 mb-6">
                Se você tiver alguma dúvida sobre nossas políticas de uso ou privacidade, nossa ferramenta é
                transparente e de código aberto.
              </p>
              <p className="text-sm text-gray-500">
                O Gerador Certificado BR é uma ferramenta gratuita criada para facilitar a vida de educadores e
                profissionais.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

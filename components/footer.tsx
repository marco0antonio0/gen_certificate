import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo.png" alt="Gerador Certificado BR" width={32} height={32} className="rounded" />
              <span className="text-xl font-bold">Gerador Certificado BR</span>
            </div>
            <p className="text-gray-400">
              Ferramenta gratuita e segura para gerar certificados personalizados com facilidade e profissionalismo.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Gerar Certificados
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="hover:text-white transition-colors">
                  Sobre o Site
                </Link>
              </li>
              <li>
                <Link href="/politicas" className="hover:text-white transition-colors">
                  Políticas de Uso
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2 text-gray-400">
              <li>• 7 modelos profissionais</li>
              <li>• Upload de assinatura</li>
              <li>• Geração em lote</li>
              <li>• Preview em tempo real</li>
              <li>• Download instantâneo</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Gerador Certificado BR. Todos os direitos reservados.</p>
          <p className="mt-2 text-sm">
            Ferramenta gratuita - Seus dados não são armazenados - Uso responsável obrigatório
          </p>
        </div>
      </div>
    </footer>
  )
}

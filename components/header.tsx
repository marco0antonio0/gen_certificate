"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileText, Info, Shield } from "lucide-react"

export default function Header() {
  const scrollToGenerator = () => {
    document.getElementById("generator")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image src="/logo.png" alt="Gerador Certificado BR" width={48} height={48} className="rounded-lg" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">Gerador Certificado BR</h1>
              <p className="text-sm text-gray-600">Gerador de Certificados</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <Button variant="ghost" size="sm" onClick={scrollToGenerator}>
              <FileText className="w-4 h-4 mr-2" />
              Gerar Certificados
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/sobre">
                <Info className="w-4 h-4 mr-2" />
                Sobre o Site
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/politicas">
                <Shield className="w-4 h-4 mr-2" />
                Políticas de Uso
              </Link>
            </Button>
          </nav>

          {/* Menu mobile */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={scrollToGenerator}>
              <FileText className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

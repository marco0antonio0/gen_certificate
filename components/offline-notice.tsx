"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Wifi, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"

interface OfflineNoticeProps {
  onRetry: () => void
}

export default function OfflineNotice({ onRetry }: OfflineNoticeProps) {
  return (
    <Card className="border-orange-200 bg-orange-50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-orange-800">
          <Wifi className="w-5 h-5" />
          Modo Offline
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Alert className="border-orange-200">
          <AlertDescription className="text-orange-700">
            A API de geração de certificados está temporariamente indisponível. Isso pode ser devido a:
          </AlertDescription>
        </Alert>

        <ul className="text-sm text-orange-700 space-y-1 ml-4">
          <li>• Problemas de conectividade com a internet</li>
          <li>• Manutenção temporária da API</li>
          <li>• Configurações de CORS do servidor</li>
          <li>• Sobrecarga temporária do servidor</li>
        </ul>

        <div className="space-y-2">
          <p className="text-sm text-orange-700">
            <strong>O que você pode fazer:</strong>
          </p>
          <ul className="text-sm text-orange-700 space-y-1 ml-4">
            <li>• Verifique sua conexão com a internet</li>
            <li>• Aguarde alguns minutos e tente novamente</li>
            <li>• Recarregue a página</li>
          </ul>
        </div>

        <Button
          onClick={onRetry}
          variant="outline"
          className="w-full border-orange-300 text-orange-700 hover:bg-orange-100 bg-transparent"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Tentar Novamente
        </Button>
      </CardContent>
    </Card>
  )
}

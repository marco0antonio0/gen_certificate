"use client"

import { useState, useEffect } from "react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, XCircle, AlertCircle } from "lucide-react"

export default function ApiStatus() {
  const [status, setStatus] = useState<"checking" | "online" | "offline">("checking")

  useEffect(() => {
    checkApiStatus()
  }, [])

  const checkApiStatus = async () => {
    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 5000)

      const response = await fetch("https://api.certificado.opengena.com/tipos_certificados", {
        signal: controller.signal,
        mode: "cors",
        headers: {
          Accept: "application/json",
        },
      })

      clearTimeout(timeoutId)

      if (response.ok) {
        setStatus("online")
      } else {
        setStatus("offline")
      }
    } catch (error) {
      console.warn("API Status Check:", error)
      setStatus("offline")
    }
  }

  if (status === "checking") {
    return (
      <Alert className="mb-6">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>Verificando status da API...</AlertDescription>
      </Alert>
    )
  }

  if (status === "offline") {
    return (
      <Alert variant="destructive" className="mb-6">
        <XCircle className="h-4 w-4" />
        <AlertDescription>
          <strong>API Offline:</strong> A API de geração de certificados está temporariamente indisponível. Alguns
          recursos podem não funcionar corretamente. Tente novamente em alguns minutos.
        </AlertDescription>
      </Alert>
    )
  }

  return (
    <Alert className="mb-6 border-green-200 bg-green-50">
      <CheckCircle className="h-4 w-4 text-green-600" />
      <AlertDescription className="text-green-800">
        <strong>API Online:</strong> Todos os sistemas estão funcionando normalmente.
      </AlertDescription>
    </Alert>
  )
}

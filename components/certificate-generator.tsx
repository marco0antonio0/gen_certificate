"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import SignatureUpload from "./signature-upload"
import CertificatePreview from "./certificate-preview"
import { Download, FileText, Users, Loader2 } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface CertificateData {
  nome: string
  tipo_certificado: string
  texto_personalizado: string
  orgao_emissor: string
  assinatura_b64: string
}

export default function CertificateGenerator() {
  const [formData, setFormData] = useState<CertificateData>({
    nome: "",
    tipo_certificado: "modelo_1",
    texto_personalizado: "",
    orgao_emissor: "",
    assinatura_b64: "",
  })

  const [multipleNames, setMultipleNames] = useState("")
  const [currentTab, setCurrentTab] = useState("single")
  const [availableModels, setAvailableModels] = useState<string[]>([
    "modelo_0",
    "modelo_1",
    "modelo_2",
    "modelo_3",
    "modelo_4",
    "modelo_5",
    "modelo_6",
  ])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [previewUrl, setPreviewUrl] = useState("")

  useEffect(() => {
    fetchAvailableModels()
  }, [])

  const fetchAvailableModels = async () => {
    try {
      const response = await fetch("https://api.certificado.opengena.com/tipos_certificados", {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        const models = await response.json()
        if (Array.isArray(models) && models.length > 0) {
          setAvailableModels(models)
        }
      }
    } catch (error) {
      console.warn("Usando modelos padrão:", error)
    }
  }

  const handleInputChange = (field: keyof CertificateData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    setError("")
  }

  const handleSignatureUpload = (base64: string) => {
    setFormData((prev) => ({ ...prev, assinatura_b64: base64 }))
  }

  const generateSingleCertificate = async () => {
    if (!formData.nome.trim()) {
      setError("Nome é obrigatório")
      return
    }

    setIsLoading(true)
    setError("")

    try {
      const formDataToSend = new FormData()
      formDataToSend.append("nome", formData.nome)
      formDataToSend.append("tipo_certificado", formData.tipo_certificado)
      if (formData.texto_personalizado) {
        formDataToSend.append("texto_personalizado", formData.texto_personalizado)
      }
      if (formData.orgao_emissor) {
        formDataToSend.append("orgao_emissor", formData.orgao_emissor)
      }
      if (formData.assinatura_b64) {
        formDataToSend.append("assinatura_b64", formData.assinatura_b64)
      }

      const response = await fetch("https://api.certificado.opengena.com/gerar_certificado", {
        method: "POST",
        body: formDataToSend,
      })

      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(`Erro ${response.status}: ${errorText}`)
      }

      const blob = await response.blob()
      const url = URL.createObjectURL(blob)

      // Download do arquivo
      const a = document.createElement("a")
      a.href = url
      a.download = `certificado_${formData.nome}.png`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    } catch (error:any) {
      console.error("Erro ao gerar certificado:", error)
      setError(`Erro ao gerar certificado: ${error.message}`)
    } finally {
      setIsLoading(false)
    }
  }

  const generateMultipleCertificates = async () => {
    const names = multipleNames
      .split(",")
      .map((name) => name.trim())
      .filter((name) => name)

    if (names.length === 0) {
      setError("Informe pelo menos um nome")
      return
    }

    if (names.length > 5) {
      setError("Máximo de 5 certificados por vez")
      return
    }

    setIsLoading(true)
    setError("")

    try {
      const formDataToSend = new FormData()
      formDataToSend.append("nomes", names.join(","))
      formDataToSend.append("tipo_certificado", formData.tipo_certificado)
      if (formData.texto_personalizado) {
        formDataToSend.append("texto_personalizado", formData.texto_personalizado)
      }
      if (formData.orgao_emissor) {
        formDataToSend.append("orgao_emissor", formData.orgao_emissor)
      }
      if (formData.assinatura_b64) {
        formDataToSend.append("assinatura_b64", formData.assinatura_b64)
      }

      const response = await fetch("https://api.certificado.opengena.com/gerar_certificados_zip", {
        method: "POST",
        body: formDataToSend,
      })

      if (!response.ok) {
        throw new Error(`Erro ${response.status}: Falha ao gerar certificados`)
      }

      const blob = await response.blob()
      const url = URL.createObjectURL(blob)

      // Download do arquivo ZIP
      const a = document.createElement("a")
      a.href = url
      a.download = "certificados.zip"
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    } catch (error) {
      console.error("Erro ao gerar certificados:", error)
      setError("Erro ao gerar certificados. Verifique os dados e tente novamente.")
    } finally {
      setIsLoading(false)
    }
  }

  const generatePreview = async () => {
    // Determinar qual nome usar para o preview
    let previewName = ""

    if (currentTab === "single") {
      previewName = formData.nome.trim()
    } else {
      // Para múltiplos certificados, usar o primeiro nome
      const names = multipleNames
        .split(",")
        .map((name) => name.trim())
        .filter((name) => name)
      previewName = names[0] || ""
    }

    if (!previewName) {
      setPreviewUrl("")
      return
    }

    try {
      const formDataToSend = new FormData()
      formDataToSend.append("nome", previewName)
      formDataToSend.append("tipo_certificado", formData.tipo_certificado)
      if (formData.texto_personalizado) {
        formDataToSend.append("texto_personalizado", formData.texto_personalizado)
      }
      if (formData.orgao_emissor) {
        formDataToSend.append("orgao_emissor", formData.orgao_emissor)
      }
      if (formData.assinatura_b64) {
        formDataToSend.append("assinatura_b64", formData.assinatura_b64)
      }

      const response = await fetch("https://api.certificado.opengena.com/gerar_certificado", {
        method: "POST",
        body: formDataToSend,
      })

      if (response.ok) {
        const blob = await response.blob()
        // Limpar URL anterior se existir
        if (previewUrl) {
          URL.revokeObjectURL(previewUrl)
        }
        const url = URL.createObjectURL(blob)
        setPreviewUrl(url)
      }
    } catch (error) {
      console.warn("Erro ao gerar preview:", error)
    }
  }

  // Atualizar preview quando qualquer dado relevante mudar
  useEffect(() => {
    const timeoutId = setTimeout(generatePreview, 1000)
    return () => clearTimeout(timeoutId)
  }, [formData, multipleNames, currentTab])

  // Limpar preview quando trocar de aba
  useEffect(() => {
    setPreviewUrl("")
  }, [currentTab])

  return (
    <section id="generator" className="py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Gere Seus Certificados Personalizados</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Preencha os campos abaixo para criar certificados profissionais. Você pode gerar um certificado individual
            ou vários de uma só vez.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Formulário */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Configurações do Certificado
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label className="mb-3" htmlFor="modelo">Modelo do Certificado</Label>
                  <Select
                    value={formData.tipo_certificado}
                    onValueChange={(value) => handleInputChange("tipo_certificado", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione um modelo" />
                    </SelectTrigger>
                    <SelectContent>
                      {availableModels.map((model) => (
                        <SelectItem key={model} value={model}>
                          {model.replace("_", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="orgao">Órgão Emissor (Opcional)</Label>
                  <Input
                    id="orgao"
                    placeholder="Ex: Instituto de Formação Profissional"
                    value={formData.orgao_emissor}
                    onChange={(e) => handleInputChange("orgao_emissor", e.target.value)}
                    className=" mt-3"
                  />
                </div>

                <div>
                  <Label htmlFor="texto">Texto Personalizado (Opcional)</Label>
                  <Textarea
                    id="texto"
                    placeholder="Digite o texto que aparecerá no certificado. Ex: concluiu com êxito o curso de..."
                    value={formData.texto_personalizado}
                    onChange={(e) => handleInputChange("texto_personalizado", e.target.value)}
                    rows={6}
                    className="resize-none h-[200px] mt-3"
                  />
                </div>

                <SignatureUpload onSignatureUpload={handleSignatureUpload} />
              </CardContent>
            </Card>

            <Tabs value={currentTab} onValueChange={setCurrentTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="single" className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Certificado Individual
                </TabsTrigger>
                <TabsTrigger value="multiple" className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Múltiplos Certificados
                </TabsTrigger>
              </TabsList>

              <TabsContent value="single" className="space-y-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div>
                        <Label className="mb-3" htmlFor="nome">Nome para o Certificado *</Label>
                        <Input
                          id="nome"
                          placeholder="Digite o nome completo"
                          value={formData.nome}
                          onChange={(e) => handleInputChange("nome", e.target.value)}
                          required
                        />
                      </div>
                      <Button
                        onClick={generateSingleCertificate}
                        disabled={isLoading || !formData.nome.trim()}
                        className="w-full"
                        size="lg"
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Gerando Certificado...
                          </>
                        ) : (
                          <>
                            <Download className="w-4 h-4 mr-2" />
                            Gerar e Baixar Certificado
                          </>
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="multiple" className="space-y-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="nomes">Nomes (separados por vírgula) *</Label>
                        <Textarea
                          id="nomes"
                          placeholder="João Silva, Maria Santos, Pedro Oliveira, Ana Costa, Carlos Lima"
                          value={multipleNames}
                          onChange={(e) => setMultipleNames(e.target.value)}
                          rows={4}
                          className="resize-none mt-3"
                        />
                        <p className="text-sm text-gray-500 mt-1">
                          Máximo de 5 certificados por vez. O preview mostrará o primeiro nome da lista.
                        </p>
                      </div>
                      <Button
                        onClick={generateMultipleCertificates}
                        disabled={isLoading || !multipleNames.trim()}
                        className="w-full"
                        size="lg"
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Gerando Certificados...
                          </>
                        ) : (
                          <>
                            <Download className="w-4 h-4 mr-2" />
                            Gerar e Baixar ZIP
                          </>
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
          </div>

          {/* Preview */}
          <div>
            <CertificatePreview previewUrl={previewUrl} />
          </div>
        </div>
      </div>
    </section>
  )
}

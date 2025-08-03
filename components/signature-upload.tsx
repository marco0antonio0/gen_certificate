"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Upload, X, Scissors, Loader2 } from "lucide-react"
import Image from "next/image"

interface SignatureUploadProps {
  onSignatureUpload: (base64: string) => void
}

export default function SignatureUpload({ onSignatureUpload }: SignatureUploadProps) {
  const [signature, setSignature] = useState<string>("")
  const [originalSignature, setOriginalSignature] = useState<string>("")
  const [isProcessing, setIsProcessing] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    if (!file.type.startsWith("image/")) {
      alert("Por favor, selecione apenas arquivos de imagem.")
      return
    }

    const reader = new FileReader()
    reader.onload = (e) => {
      const base64 = e.target?.result as string
      setSignature(base64)
      setOriginalSignature(base64)
      onSignatureUpload(base64)
    }
    reader.readAsDataURL(file)
  }

  const removeBackground = async () => {
  if (!originalSignature) return

  setIsProcessing(true)
  try {
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    const img = new window.Image()

    await new Promise((resolve, reject) => {
      img.onload = () => {
        try {
          canvas.width = img.width
          canvas.height = img.height

          if (!ctx) {
            reject(new Error("Canvas não suportado"))
            return
          }

          ctx.drawImage(img, 0, 0)
          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
          const data = imageData.data

          const brightnessThreshold = 220 // tudo mais claro que isso será considerado fundo

          for (let i = 0; i < data.length; i += 4) {
            const r = data[i]
            const g = data[i + 1]
            const b = data[i + 2]

            // Média de brilho simples
            const avg = (r + g + b) / 3

            // Se for claro, remover (tornar transparente)
            if (avg > brightnessThreshold) {
              data[i + 3] = 0
            }
          }

          ctx.putImageData(imageData, 0, 0)
          const newBase64 = canvas.toDataURL("image/png")
          setSignature(newBase64)
          onSignatureUpload(newBase64)
          resolve(true)
        } catch (e) {
          reject(e)
        }
      }

      img.onerror = () => reject(new Error("Erro ao carregar imagem"))
      img.crossOrigin = "anonymous"
      img.src = originalSignature
    })
  } catch (error) {
    console.error("Erro ao remover fundo:", error)
    alert("Erro ao remover o fundo da imagem.")
  } finally {
    setIsProcessing(false)
  }
}


  const clearSignature = () => {
    setSignature("")
    setOriginalSignature("")
    onSignatureUpload("")
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <div className="space-y-4">
      <Label>Assinatura (Opcional)</Label>

      {!signature ? (
        <Card className="border-dashed border-2 border-gray-300 hover:border-gray-400 transition-colors">
          <CardContent className="pt-6">
            <div className="text-center py-8">
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 mb-4">Clique para fazer upload da sua assinatura</p>
              <Button type="button" variant="outline" onClick={() => fileInputRef.current?.click()}>
                <Upload className="w-4 h-4 mr-2" />
                Selecionar Imagem
              </Button>
              <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
              <p className="text-xs text-gray-500 mt-2">Formatos aceitos: PNG, JPG, JPEG</p>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="relative bg-gray-50 rounded-lg p-6 flex justify-center min-h-[120px] items-center">
                <Image
                  src={signature || "/placeholder.svg"}
                  alt="Assinatura"
                  width={250}
                  height={120}
                  className="max-h-28 object-contain"
                />
              </div>

              <div className="grid grid-cols-3 gap-2">
                {/* <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={removeBackground}
                  disabled={isProcessing}
                  className="bg-transparent"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Processando...
                    </>
                  ) : (
                    <>
                      <Scissors className="w-4 h-4 mr-2" />
                      Remover Fundo
                    </>
                  )}
                </Button> */}

                <Button type="button" variant="outline" size="sm" onClick={() => fileInputRef.current?.click()}>
                  <Upload className="w-4 h-4 mr-2" />
                  Trocar
                </Button>

                <Button type="button" variant="outline" size="sm" onClick={clearSignature}>
                  <X className="w-4 h-4 mr-2" />
                  Remover
                </Button>
              </div>

              <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye } from "lucide-react"
import Image from "next/image"

interface CertificatePreviewProps {
  previewUrl: string
}

export default function CertificatePreview({ previewUrl }: CertificatePreviewProps) {
  return (
    <Card className="sticky top-4">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Eye className="w-5 h-5" />
          Preview do Certificado
        </CardTitle>
      </CardHeader>
      <CardContent>
        {previewUrl ? (
          <div className="bg-gray-50 rounded-lg p-4">
            <Image
              src={previewUrl || "/placeholder.svg"}
              alt="Preview do certificado"
              width={400}
              height={300}
              className="w-full h-auto rounded border shadow-sm"
            />
          </div>
        ) : (
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <Eye className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">Preencha o nome para ver o preview do certificado</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

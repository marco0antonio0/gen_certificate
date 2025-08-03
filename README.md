# 🧾 Gerador de Certificados Personalizados

Este é um projeto **frontend em React + Next.js** que permite gerar certificados personalizados, tanto individuais quanto em lote. Ele se conecta a uma **API REST** para processar e baixar os certificados em imagem PNG ou ZIP.

Você pode configurar o modelo, adicionar um texto personalizado, órgão emissor e até incluir uma assinatura com remoção automática de fundo.

---

## 🔥 Funcionalidades

- ✅ Geração de **certificado individual** com nome, texto e assinatura
- ✅ Geração de **vários certificados** ao mesmo tempo (até 5)
- ✅ Preview automático antes do download
- ✅ Upload de assinatura com **remoção automática de fundo**
- ✅ Seleção de modelo de certificado diretamente da API
- ✅ Interface intuitiva e responsiva

---

## 🖼️ Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React Icons](https://lucide.dev/)
- API externa de geração de certificado (host: `https://api.certificado.opengena.com`)

---

## 🚀 Como usar

```bash
# 1. Instale as dependências
npm install

# 2. Inicie o servidor de desenvolvimento
npm run dev
```

Abra o navegador e acesse: `http://localhost:3000`

---

## 🧪 Exemplos de uso

**Certificado único**:
- Digite o nome da pessoa
- Escolha o modelo de certificado
- (Opcional) Adicione órgão emissor e texto personalizado
- (Opcional) Faça upload de uma imagem de assinatura e clique em "Remover Fundo"
- Clique em **"Gerar e Baixar Certificado"**

**Múltiplos certificados**:
- Digite até 5 nomes separados por vírgula
- Clique em **"Gerar e Baixar ZIP"**

---

## 🧠 Observações

- A remoção de fundo da assinatura é feita diretamente no navegador via `canvas`, com base no nível de brilho.
- O preview usa o primeiro nome fornecido e é gerado automaticamente após preencher os campos.
- O download é feito diretamente do blob retornado pela API.

---

## 📁 Estrutura

```
📦 components/
 ┣ 📜 CertificatePreview.tsx
 ┣ 📜 SignatureUpload.tsx
📦 app/
 ┣ 📜 page.tsx (ou CertificateGenerator.tsx)
```

---

## ✍️ Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork
2. Crie sua branch (`git checkout -b feature/minha-funcionalidade`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/minha-funcionalidade`)
5. Crie um Pull Request

---

## 📄 Licença

Este projeto está sob a licença MIT.
# 🤖 Telegram Messaging Agent for Text/Audio/Images

## Archivo
1182_Telegram_Webhook_Automation_Webhook.json

## Descripción

## Nodos utilizados (39 total)

### @n8n/n8n-nodes-langchain.lmChatOpenAi
- gpt-4o-mini
- gpt-4o-mini1

### @n8n/n8n-nodes-langchain.openAi
- Analyze Image
- Transcribe Recording

### @n8n/n8n-nodes-langchain.textClassifier
- Text Classifier Audio
- Text Classifier

### n8n-nodes-base.convertToFile
- Convert to Image File

### n8n-nodes-base.extractFromFile
- Extract from File to Base64

### n8n-nodes-base.httpRequest
- Set Webhook Test URL
- Get Telegram Webhook Info
- Set Webhook Production URL

### n8n-nodes-base.if
- Check User & Chat ID

### n8n-nodes-base.set
- Image Schema
- Edit Fields
- Telegram Token & Webhooks
- Validation

### n8n-nodes-base.stickyNote
- Sticky Note
- Sticky Note2
- Sticky Note5
- Sticky Note3
- Sticky Note1
- Sticky Note6
- Sticky Note4
- Sticky Note7
- Sticky Note8
- Sticky Note9

### n8n-nodes-base.switch
- Message Router

### n8n-nodes-base.telegram
- Error message
- Get Audio File
- Get Image
- Test Webhook Status
- Production Webhook Status
- Audio Task Message
- Audio Other Message
- Text Task Message
- Text Other Message
- Image Message
- Get Webhook Status

### n8n-nodes-base.webhook
- Listen for Telegram Events

## Configuración

1. Importa el archivo `1182_Telegram_Webhook_Automation_Webhook.json` en n8n
2. Revisa las credenciales necesarias:
   - Error message: Configura las credenciales necesarias
   - gpt-4o-mini: Configura las credenciales necesarias
   - Get Audio File: Configura las credenciales necesarias
   - Get Image: Configura las credenciales necesarias
   - Analyze Image: Configura las credenciales necesarias
   - Transcribe Recording: Configura las credenciales necesarias
   - gpt-4o-mini1: Configura las credenciales necesarias
   - Test Webhook Status: Configura las credenciales necesarias
   - Production Webhook Status: Configura las credenciales necesarias
   - Audio Task Message: Configura las credenciales necesarias
   - Audio Other Message: Configura las credenciales necesarias
   - Text Task Message: Configura las credenciales necesarias
   - Text Other Message: Configura las credenciales necesarias
   - Image Message: Configura las credenciales necesarias
   - Get Webhook Status: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n

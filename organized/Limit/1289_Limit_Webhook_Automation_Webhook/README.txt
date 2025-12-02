# AI Voice Chat using Webhook, Memory Manager, OpenAI, Google Gemini & ElevenLabs

## Archivo
1289_Limit_Webhook_Automation_Webhook.json

## Descripción

## Nodos utilizados (15 total)

### @n8n/n8n-nodes-langchain.chainLlm
- Basic LLM Chain

### @n8n/n8n-nodes-langchain.lmChatGoogleGemini
- Google Gemini Chat Model

### @n8n/n8n-nodes-langchain.memoryBufferWindow
- Window Buffer Memory

### @n8n/n8n-nodes-langchain.memoryManager
- Get Chat
- Insert Chat

### @n8n/n8n-nodes-langchain.openAi
- OpenAI - Speech to Text

### n8n-nodes-base.aggregate
- Aggregate

### n8n-nodes-base.httpRequest
- ElevenLabs - Generate Audio

### n8n-nodes-base.limit
- Limit

### n8n-nodes-base.respondToWebhook
- Respond to Webhook

### n8n-nodes-base.stickyNote
- Sticky Note5
- Sticky Note
- Sticky Note2
- Sticky Note1

### n8n-nodes-base.webhook
- Webhook

## Tags
- Workflows

## Configuración

1. Importa el archivo `1289_Limit_Webhook_Automation_Webhook.json` en n8n
2. Revisa las credenciales necesarias:
   - Google Gemini Chat Model: Configura las credenciales necesarias
   - ElevenLabs - Generate Audio: Configura las credenciales necesarias
   - OpenAI - Speech to Text: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n

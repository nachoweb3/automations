# Agentic Telegram AI bot with LangChain nodes and new tools

## Archivo
1300_Telegram_Stickynote_Create_Webhook.json

## Descripción

## Nodos utilizados (8 total)

### @n8n/n8n-nodes-langchain.agent
- AI Agent

### @n8n/n8n-nodes-langchain.lmChatOpenAi
- OpenAI Chat Model

### @n8n/n8n-nodes-langchain.memoryBufferWindow
- Window Buffer Memory

### @n8n/n8n-nodes-langchain.toolHttpRequest
- Generate image in Dalle

### n8n-nodes-base.stickyNote
- Sticky Note

### n8n-nodes-base.telegram
- Send final reply

### n8n-nodes-base.telegramTool
- Send back an image

### n8n-nodes-base.telegramTrigger
- Listen for incoming events

## Configuración

1. Importa el archivo `1300_Telegram_Stickynote_Create_Webhook.json` en n8n
2. Revisa las credenciales necesarias:
   - OpenAI Chat Model: Configura las credenciales necesarias
   - Listen for incoming events: Configura las credenciales necesarias
   - Send final reply: Configura las credenciales necesarias
   - Send back an image: Configura las credenciales necesarias
   - Generate image in Dalle: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n

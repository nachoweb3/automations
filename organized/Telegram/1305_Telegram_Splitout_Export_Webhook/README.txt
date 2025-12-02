# All-in-One Telegram/Baserow AI Assistant 🤖🧠 Voice/Photo/Save Notes/Long Term Mem

## Archivo
1305_Telegram_Splitout_Export_Webhook.json

## Descripción

## Nodos utilizados (48 total)

### @n8n/n8n-nodes-langchain.agent
- AI Tools Agent

### @n8n/n8n-nodes-langchain.lmChatOpenAi
- gpt-4o-mini

### @n8n/n8n-nodes-langchain.memoryBufferWindow
- Window Memory (Easy Mode)

### @n8n/n8n-nodes-langchain.memoryPostgresChat
- Postgres Chat Memory

### @n8n/n8n-nodes-langchain.openAi
- Analyze Image
- Transcribe Recording

### n8n-nodes-base.aggregate
- Aggregate

### n8n-nodes-base.baserow
- Baserow Retrieve Memories
- Baserow Retrieve Notes

### n8n-nodes-base.baserowTool
- Save Note Tool
- Save Memory

### n8n-nodes-base.convertToFile
- Convert to Image File

### n8n-nodes-base.extractFromFile
- Extract from File to Base64

### n8n-nodes-base.if
- Check User & Chat ID

### n8n-nodes-base.merge
- Merge
- Merge1

### n8n-nodes-base.set
- Chat Response
- Edit Fields
- Image Schema1
- Edit Fields1
- Validation

### n8n-nodes-base.splitOut
- caption

### n8n-nodes-base.stickyNote
- Sticky Note7
- Sticky Note8
- Sticky Note9
- Sticky Note
- Sticky Note1
- Sticky Note2
- Sticky Note10
- Sticky Note11
- Sticky Note5
- Sticky Note3
- Sticky Note12
- Sticky Note6
- Sticky Note13
- Sticky Note14
- Sticky Note15
- Sticky Note4
- Sticky Note16
- Sticky Note17
- Sticky Note18
- Sticky Note19

### n8n-nodes-base.switch
- Message Router

### n8n-nodes-base.telegram
- Telegram Response
- Get Audio File
- Get Image
- Error message

### n8n-nodes-base.webhook
- Listen for Telegram Events

## Configuración

1. Importa el archivo `1305_Telegram_Splitout_Export_Webhook.json` en n8n
2. Revisa las credenciales necesarias:
   - gpt-4o-mini: Configura las credenciales necesarias
   - Telegram Response: Configura las credenciales necesarias
   - Get Audio File: Configura las credenciales necesarias
   - Analyze Image: Configura las credenciales necesarias
   - Transcribe Recording: Configura las credenciales necesarias
   - Get Image: Configura las credenciales necesarias
   - Postgres Chat Memory: Configura las credenciales necesarias
   - Save Note Tool: Configura las credenciales necesarias
   - Save Memory: Configura las credenciales necesarias
   - Error message: Configura las credenciales necesarias
   - Baserow Retrieve Memories: Configura las credenciales necesarias
   - Baserow Retrieve Notes: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n

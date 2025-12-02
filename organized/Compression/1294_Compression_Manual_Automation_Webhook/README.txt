# SQL agent with memory

## Archivo
1294_Compression_Manual_Automation_Webhook.json

## Descripción

## Nodos utilizados (13 total)

### @n8n/n8n-nodes-langchain.agent
- AI Agent

### @n8n/n8n-nodes-langchain.chatTrigger
- Chat Trigger

### @n8n/n8n-nodes-langchain.lmChatOpenAi
- OpenAI Chat Model

### @n8n/n8n-nodes-langchain.memoryBufferWindow
- Window Buffer Memory

### n8n-nodes-base.compression
- Extract zip file

### n8n-nodes-base.httpRequest
- Get chinook.zip example

### n8n-nodes-base.manualTrigger
- When clicking "Test workflow"

### n8n-nodes-base.readWriteFile
- Save chinook.db locally
- Load local chinook.db

### n8n-nodes-base.set
- Combine chat input with the binary

### n8n-nodes-base.stickyNote
- Sticky Note
- Sticky Note1
- Sticky Note2

## Configuración

1. Importa el archivo `1294_Compression_Manual_Automation_Webhook.json` en n8n
2. Revisa las credenciales necesarias:
   - OpenAI Chat Model: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n

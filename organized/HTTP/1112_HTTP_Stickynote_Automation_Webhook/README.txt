# AI Agent with charts capabilities using OpenAI Structured Output

## Archivo
1112_HTTP_Stickynote_Automation_Webhook.json

## Descripción

## Nodos utilizados (11 total)

### @n8n/n8n-nodes-langchain.agent
- AI Agent

### @n8n/n8n-nodes-langchain.chatTrigger
- When chat message received

### @n8n/n8n-nodes-langchain.lmChatOpenAi
- OpenAI Chat Model

### @n8n/n8n-nodes-langchain.memoryBufferWindow
- Window Buffer Memory

### @n8n/n8n-nodes-langchain.toolWorkflow
- Generate a chart

### n8n-nodes-base.executeWorkflowTrigger
- Execute "Generate a chart" tool

### n8n-nodes-base.httpRequest
- OpenAI - Generate Chart definition with Structured Output

### n8n-nodes-base.set
- Set response

### n8n-nodes-base.stickyNote
- Sticky Note1
- Sticky Note
- Sticky Note2

## Tags
- experiment

## Configuración

1. Importa el archivo `1112_HTTP_Stickynote_Automation_Webhook.json` en n8n
2. Revisa las credenciales necesarias:
   - OpenAI Chat Model: Configura las credenciales necesarias
   - OpenAI - Generate Chart definition with Structured Output: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n

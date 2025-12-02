# Enhance Chat Responses with Real-Time Search Data via Bright Data & Gemini AI

## Archivo
1183_Manual_Stickynote_Automation_Webhook.json

## Descripción

## Nodos utilizados (18 total)

### @n8n/n8n-nodes-langchain.agent
- AI Agent

### @n8n/n8n-nodes-langchain.chatTrigger
- When chat message received

### @n8n/n8n-nodes-langchain.lmChatGoogleGemini
- Google Gemini Chat Model

### @n8n/n8n-nodes-langchain.memoryBufferWindow
- Simple Memory

### @n8n/n8n-nodes-langchain.toolHttpRequest
- HTTP Request for Webhook Notification

### n8n-nodes-base.manualTrigger
- When clicking ‘Test workflow’

### n8n-nodes-base.set
- Set search query

### n8n-nodes-base.stickyNote
- Sticky Note
- Sticky Note1
- Sticky Note2
- Sticky Note3
- Sticky Note4

### n8n-nodes-mcp.mcpClient
- MCP Client list all tools for Bright Data
- MCP Client Bright Data Search Tool

### n8n-nodes-mcp.mcpClientTool
- Google Search Engine for Bright Data
- Bing Search Engine for Bright Data
- MCP Client List all tools
- Yandex Search Engine for Bright Data

## Tags
- Engineering
- Building Blocks
- AI

## Configuración

1. Importa el archivo `1183_Manual_Stickynote_Automation_Webhook.json` en n8n
2. Revisa las credenciales necesarias:
   - Google Gemini Chat Model: Configura las credenciales necesarias
   - MCP Client list all tools for Bright Data: Configura las credenciales necesarias
   - MCP Client Bright Data Search Tool: Configura las credenciales necesarias
   - Google Search Engine for Bright Data: Configura las credenciales necesarias
   - Bing Search Engine for Bright Data: Configura las credenciales necesarias
   - MCP Client List all tools: Configura las credenciales necesarias
   - Yandex Search Engine for Bright Data: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n

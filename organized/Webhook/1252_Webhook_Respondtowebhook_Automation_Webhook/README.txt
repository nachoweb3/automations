# AI Agent to chat with you Search Console Data, using OpenAI and Postgres

## Archivo
1252_Webhook_Respondtowebhook_Automation_Webhook.json

## Descripción

## Nodos utilizados (30 total)

### @n8n/n8n-nodes-langchain.agent
- AI Agent

### @n8n/n8n-nodes-langchain.lmChatOpenAi
- OpenAI Chat Model

### @n8n/n8n-nodes-langchain.memoryPostgresChat
- Postgres Chat Memory

### @n8n/n8n-nodes-langchain.toolWorkflow
- Call Search Console Tool

### n8n-nodes-base.aggregate
- Array aggregation - response to AI Agent
- Array aggregation - response to AI Agent1

### n8n-nodes-base.executeWorkflowTrigger
- Tool calling

### n8n-nodes-base.httpRequest
- Search Console - Get Custom Insights
- ## Search Console - Get List of Properties

### n8n-nodes-base.respondToWebhook
- Respond to Webhook

### n8n-nodes-base.set
- Set fields
- Set fields - Consruct API CALL
- Set fields - Create searchConsoleDataArray
- Set fields - Create searchConsoleDataArray 2

### n8n-nodes-base.stickyNote
- Sticky Note
- Sticky Note1
- Sticky Note2
- Sticky Note3
- Sticky Note4
- Sticky Note6
- Sticky Note5
- Sticky Note7
- Sticky Note8
- Sticky Note9
- Sticky Note10
- Sticky Note11
- Sticky Note12
- Sticky Note13

### n8n-nodes-base.switch
- Switch

### n8n-nodes-base.webhook
- Webhook - ChatInput

## Configuración

1. Importa el archivo `1252_Webhook_Respondtowebhook_Automation_Webhook.json` en n8n
2. Revisa las credenciales necesarias:
   - Postgres Chat Memory: Configura las credenciales necesarias
   - OpenAI Chat Model: Configura las credenciales necesarias
   - Webhook - ChatInput: Configura las credenciales necesarias
   - Search Console - Get Custom Insights: Configura las credenciales necesarias
   - ## Search Console - Get List of Properties: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n

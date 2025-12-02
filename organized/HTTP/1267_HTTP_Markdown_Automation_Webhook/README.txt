# Agent with custom HTTP Request

## Archivo
1267_HTTP_Markdown_Automation_Webhook.json

## Descripción

## Nodos utilizados (20 total)

### @n8n/n8n-nodes-langchain.agent
- ReAct AI Agent

### @n8n/n8n-nodes-langchain.lmChatOpenAi
- OpenAI Chat Model

### @n8n/n8n-nodes-langchain.manualChatTrigger
- On new manual Chat Message

### @n8n/n8n-nodes-langchain.toolWorkflow
- HTTP_Request_Tool

### n8n-nodes-base.executeWorkflowTrigger
- Execute Workflow Trigger

### n8n-nodes-base.httpRequest
- HTTP Request

### n8n-nodes-base.if
- Is error?
- Simplify?

### n8n-nodes-base.markdown
- Convert to Markdown

### n8n-nodes-base.set
- Exctract HTML Body
- Stringify error message
- Remove extra tags
- Simplify output
- QUERY_PARAMS
- CONFIG
- Send Page Content

### n8n-nodes-base.stickyNote
- Sticky Note
- Sticky Note1
- Sticky Note2
- Sticky Note3

## Configuración

1. Importa el archivo `1267_HTTP_Markdown_Automation_Webhook.json` en n8n
2. Revisa las credenciales necesarias:
   - OpenAI Chat Model: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n

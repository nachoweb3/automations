# Build a Chatbot, Voice Agent and Phone Agent with Voiceflow, Google Calendar and RAG

## Archivo
1361_GoogleCalendar_Webhook_Create_Webhook.json

## Descripción

## Nodos utilizados (34 total)

### @n8n/n8n-nodes-langchain.agent
- Retrive Agent

### @n8n/n8n-nodes-langchain.chainLlm
- Concert start date

### @n8n/n8n-nodes-langchain.documentDefaultDataLoader
- Default Data Loader

### @n8n/n8n-nodes-langchain.embeddingsOpenAi
- Embeddings OpenAI2
- Embeddings OpenAI

### @n8n/n8n-nodes-langchain.lmChatOpenAi
- OpenAI Chat Model3
- OpenAI Chat Model2
- OpenAI Chat Model1

### @n8n/n8n-nodes-langchain.outputParserStructured
- Structured Output Parser

### @n8n/n8n-nodes-langchain.textSplitterTokenSplitter
- Token Splitter

### @n8n/n8n-nodes-langchain.toolVectorStore
- RAG

### @n8n/n8n-nodes-langchain.vectorStoreQdrant
- Retrive Qdrant Vector Store
- Qdrant Vector Store

### n8n-nodes-base.googleCalendar
- Google Calendar

### n8n-nodes-base.googleDrive
- Get folder
- Download Files

### n8n-nodes-base.httpRequest
- API URL Tracking
- Create collection
- Refresh collection

### n8n-nodes-base.manualTrigger
- When clicking ‘Test workflow’

### n8n-nodes-base.respondToWebhook
- Webhook tracking response
- Webhook calendar response
- Webhook RAG response

### n8n-nodes-base.set
- Tracking response
- Calendar response

### n8n-nodes-base.stickyNote
- Sticky Note
- Sticky Note3
- Sticky Note4
- Sticky Note5
- Sticky Note6
- Sticky Note7

### n8n-nodes-base.webhook
- n8n_order
- n8n_appointment
- n8n_rag

## Configuración

1. Importa el archivo `1361_GoogleCalendar_Webhook_Create_Webhook.json` en n8n
2. Revisa las credenciales necesarias:
   - Google Calendar: Configura las credenciales necesarias
   - OpenAI Chat Model3: Configura las credenciales necesarias
   - Retrive Qdrant Vector Store: Configura las credenciales necesarias
   - Embeddings OpenAI2: Configura las credenciales necesarias
   - OpenAI Chat Model2: Configura las credenciales necesarias
   - OpenAI Chat Model1: Configura las credenciales necesarias
   - Qdrant Vector Store: Configura las credenciales necesarias
   - Create collection: Configura las credenciales necesarias
   - Refresh collection: Configura las credenciales necesarias
   - Get folder: Configura las credenciales necesarias
   - Download Files: Configura las credenciales necesarias
   - Embeddings OpenAI: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n

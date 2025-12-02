# Bitrix24 Open Chanel RAG Chatbot Application Workflow example with Webhook Integration

## Archivo
1355_Splitout_Webhook_Automate_Webhook.json

## Descripción

## Nodos utilizados (34 total)

### @n8n/n8n-nodes-langchain.chainRetrievalQa
- Question and Answer Chain

### @n8n/n8n-nodes-langchain.documentDefaultDataLoader
- Default Data Loader

### @n8n/n8n-nodes-langchain.embeddingsOllama
- Embeddings Ollama
- Embeddings Ollama1

### @n8n/n8n-nodes-langchain.lmChatGoogleGemini
- Google Gemini Chat Model

### @n8n/n8n-nodes-langchain.retrieverVectorStore
- Vector Store Retriever

### @n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter
- Recursive Character Text Splitter

### @n8n/n8n-nodes-langchain.vectorStoreQdrant
- Qdrant Vector Store
- Qdrant Vector Store1

### n8n-nodes-base.executeWorkflow
- Execute subworkflow

### n8n-nodes-base.executeWorkflowTrigger
- Execute Workflow Trigger

### n8n-nodes-base.filter
- Filter for files

### n8n-nodes-base.function
- Process Message
- Process Join
- Process Install

### n8n-nodes-base.httpRequest
- Register Bot
- Send Message
- Send Join Message
- Get a list of available storages
- Get a list of List of Files and Folders
- Get a list of Folders files
- Download file
- Move files to Vector stored folder

### n8n-nodes-base.if
- Validate Token

### n8n-nodes-base.merge
- Merge parameters for Subworkflow

### n8n-nodes-base.noOp
- Process Delete

### n8n-nodes-base.respondToWebhook
- Success Response
- Error Response

### n8n-nodes-base.set
- Credentials
- Prepare output parameters

### n8n-nodes-base.splitOut
- Split Out folder files and folders

### n8n-nodes-base.stickyNote
- Sticky Note

### n8n-nodes-base.switch
- Route Event

### n8n-nodes-base.webhook
- Bitrix24 Handler

## Tags
- Tech demo
- Chatbot
- Open Channels
- Bitrix24

## Configuración

1. Importa el archivo `1355_Splitout_Webhook_Automate_Webhook.json` en n8n
2. Revisa las credenciales necesarias:
   - No se detectaron credenciales específicas (revisa manualmente)
3. Activa el workflow desde la interfaz de n8n

# 1359_Wait_Splitout_Create_Webhook

## Archivo
1359_Wait_Splitout_Create_Webhook.json

## Descripción

## Nodos utilizados (38 total)

### @n8n/n8n-nodes-langchain.agent
- AI Agent

### @n8n/n8n-nodes-langchain.chatTrigger
- When chat message received

### @n8n/n8n-nodes-langchain.documentDefaultDataLoader
- Default Data Loader

### @n8n/n8n-nodes-langchain.embeddingsMistralCloud
- Embeddings Mistral Cloud

### @n8n/n8n-nodes-langchain.lmChatOpenAi
- OpenAI Chat Model

### @n8n/n8n-nodes-langchain.memoryBufferWindow
- Window Buffer Memory
- Window Buffer Memory1

### @n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter
- Recursive Character Text Splitter

### @n8n/n8n-nodes-langchain.toolWorkflow
- Ask Tool
- Search Tool

### @n8n/n8n-nodes-langchain.vectorStoreQdrant
- Qdrant Vector Store

### n8n-nodes-base.compression
- Extract Zip Files

### n8n-nodes-base.executeWorkflowTrigger
- Execute Workflow Trigger

### n8n-nodes-base.extractFromFile
- Extract PDF Contents

### n8n-nodes-base.filter
- Only Valid Sections

### n8n-nodes-base.httpRequest
- Get Tax Code Zip File
- Get Mistral Embeddings
- Use Qdrant Search API1
- Use Qdrant Scroll API

### n8n-nodes-base.manualTrigger
- When clicking ‘Test workflow’

### n8n-nodes-base.set
- Extract From Chapter
- Map To Sections
- Content Chunking @ 50k Chars
- Get Search Response
- Get Ask Response

### n8n-nodes-base.splitInBatches
- For Each Section...

### n8n-nodes-base.splitOut
- Files as Items
- Split Out Chunks
- Sections To List

### n8n-nodes-base.stickyNote
- Sticky Note
- Sticky Note1
- Sticky Note2
- Sticky Note3
- Sticky Note4
- Sticky Note5
- Sticky Note6

### n8n-nodes-base.switch
- Switch

### n8n-nodes-base.wait
- 1sec

## Configuración

1. Importa el archivo `1359_Wait_Splitout_Create_Webhook.json` en n8n
2. Revisa las credenciales necesarias:
   - Embeddings Mistral Cloud: Configura las credenciales necesarias
   - Get Mistral Embeddings: Configura las credenciales necesarias
   - Use Qdrant Search API1: Configura las credenciales necesarias
   - Use Qdrant Scroll API: Configura las credenciales necesarias
   - Qdrant Vector Store: Configura las credenciales necesarias
   - OpenAI Chat Model: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n

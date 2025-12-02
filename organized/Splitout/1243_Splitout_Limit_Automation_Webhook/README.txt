# Agent Milvus tool

## Archivo
1243_Splitout_Limit_Automation_Webhook.json

## Descripción

## Nodos utilizados (21 total)

### @n8n/n8n-nodes-langchain.agent
- AI Agent

### @n8n/n8n-nodes-langchain.chatTrigger
- When chat message received

### @n8n/n8n-nodes-langchain.documentDefaultDataLoader
- Default Data Loader

### @n8n/n8n-nodes-langchain.embeddingsOpenAi
- Embeddings OpenAI
- Embeddings OpenAI1

### @n8n/n8n-nodes-langchain.lmChatOpenAi
- OpenAI Chat Model

### @n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter
- Recursive Character Text Splitter1

### @n8n/n8n-nodes-langchain.vectorStoreMilvus
- Milvus Vector Store
- Milvus Vector Store as tool

### n8n-nodes-base.html
- Extract essay names
- Extract Text Only

### n8n-nodes-base.httpRequest
- Fetch Essay List
- Fetch essay texts

### n8n-nodes-base.limit
- Limit to first 3

### n8n-nodes-base.manualTrigger
- When clicking "Execute Workflow"

### n8n-nodes-base.splitOut
- Split out into items

### n8n-nodes-base.stickyNote
- Sticky Note3
- Sticky Note5
- Sticky Note
- Sticky Note1
- Sticky Note2

## Tags
- Milvus
- AI

## Configuración

1. Importa el archivo `1243_Splitout_Limit_Automation_Webhook.json` en n8n
2. Revisa las credenciales necesarias:
   - Milvus Vector Store: Configura las credenciales necesarias
   - Milvus Vector Store as tool: Configura las credenciales necesarias
   - Embeddings OpenAI: Configura las credenciales necesarias
   - OpenAI Chat Model: Configura las credenciales necesarias
   - Embeddings OpenAI1: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n

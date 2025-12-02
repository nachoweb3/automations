# Building RAG Chatbot for Movie Recommendations with Qdrant and Open AI

## Archivo
1363_Splitout_GitHub_Create_Webhook.json

## Descripción

## Nodos utilizados (27 total)

### @n8n/n8n-nodes-langchain.agent
- AI Agent

### @n8n/n8n-nodes-langchain.chatTrigger
- When chat message received

### @n8n/n8n-nodes-langchain.documentDefaultDataLoader
- Default Data Loader

### @n8n/n8n-nodes-langchain.embeddingsOpenAi
- Embeddings OpenAI

### @n8n/n8n-nodes-langchain.lmChatOpenAi
- OpenAI Chat Model

### @n8n/n8n-nodes-langchain.memoryBufferWindow
- Window Buffer Memory

### @n8n/n8n-nodes-langchain.textSplitterTokenSplitter
- Token Splitter

### @n8n/n8n-nodes-langchain.toolWorkflow
- Call n8n Workflow Tool

### @n8n/n8n-nodes-langchain.vectorStoreQdrant
- Qdrant Vector Store

### n8n-nodes-base.aggregate
- Aggregate

### n8n-nodes-base.executeWorkflowTrigger
- Execute Workflow Trigger

### n8n-nodes-base.extractFromFile
- Extract from File

### n8n-nodes-base.github
- GitHub

### n8n-nodes-base.httpRequest
- Embedding Recommendation Request with Open AI
- Embedding Anti-Recommendation Request with Open AI
- Calling Qdrant Recommendation API
- Retrieving Recommended Movies Meta Data

### n8n-nodes-base.manualTrigger
- When clicking ‘Test workflow’

### n8n-nodes-base.merge
- Merge
- Merge1

### n8n-nodes-base.set
- Extracting Embedding
- Extracting Embedding1
- Selecting Fields Relevant for Agent

### n8n-nodes-base.splitOut
- Split Out
- Split Out1

### n8n-nodes-base.stickyNote
- Sticky Note
- Sticky Note1

## Configuración

1. Importa el archivo `1363_Splitout_GitHub_Create_Webhook.json` en n8n
2. Revisa las credenciales necesarias:
   - GitHub: Configura las credenciales necesarias
   - Embeddings OpenAI: Configura las credenciales necesarias
   - Qdrant Vector Store: Configura las credenciales necesarias
   - OpenAI Chat Model: Configura las credenciales necesarias
   - Embedding Recommendation Request with Open AI: Configura las credenciales necesarias
   - Embedding Anti-Recommendation Request with Open AI: Configura las credenciales necesarias
   - Calling Qdrant Recommendation API: Configura las credenciales necesarias
   - Retrieving Recommended Movies Meta Data: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n

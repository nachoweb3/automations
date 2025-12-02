# Generate Exam Questions

## Archivo
1134_Googledocs_Code_Create_Webhook.json

## Descripción

## Nodos utilizados (37 total)

### @n8n/n8n-nodes-langchain.agent
- Answer and create options

### @n8n/n8n-nodes-langchain.chainLlm
- Open questions
- Closed questions

### @n8n/n8n-nodes-langchain.chainRetrievalQa
- Answer questions

### @n8n/n8n-nodes-langchain.documentDefaultDataLoader
- Default Data Loader

### @n8n/n8n-nodes-langchain.embeddingsOpenAi
- Embeddings OpenAI
- Embeddings OpenAI2
- Embeddings OpenAI1

### @n8n/n8n-nodes-langchain.lmChatGoogleGemini
- Google Gemini Chat Model
- Google Gemini Chat Model1
- Google Gemini Chat Model2
- Google Gemini Chat Model3
- Google Gemini Chat Model4

### @n8n/n8n-nodes-langchain.outputParserItemList
- Item List Output Parser
- Item List Output Parser1

### @n8n/n8n-nodes-langchain.outputParserStructured
- Structured Output Parser

### @n8n/n8n-nodes-langchain.retrieverVectorStore
- Vector Store Retriever

### @n8n/n8n-nodes-langchain.textSplitterTokenSplitter
- Token Splitter

### @n8n/n8n-nodes-langchain.toolVectorStore
- RAG

### @n8n/n8n-nodes-langchain.vectorStoreQdrant
- Qdrant Vector Store
- Qdrant Vector Store1
- Qdrant Vector Store2

### n8n-nodes-base.code
- Converto di MD

### n8n-nodes-base.convertToFile
- Convert to File

### n8n-nodes-base.googleDocs
- Get Doc

### n8n-nodes-base.googleSheets
- Write open
- Write closed

### n8n-nodes-base.httpRequest
- Create collection
- Refresh collection

### n8n-nodes-base.manualTrigger
- When clicking ‘Test workflow’

### n8n-nodes-base.splitInBatches
- Loop Over Items
- Loop Over Items1

### n8n-nodes-base.stickyNote
- Sticky Note3
- Sticky Note4
- Sticky Note
- Sticky Note1
- Sticky Note2

## Configuración

1. Importa el archivo `1134_Googledocs_Code_Create_Webhook.json` en n8n
2. Revisa las credenciales necesarias:
   - Qdrant Vector Store: Configura las credenciales necesarias
   - Create collection: Configura las credenciales necesarias
   - Refresh collection: Configura las credenciales necesarias
   - Embeddings OpenAI: Configura las credenciales necesarias
   - Get Doc: Configura las credenciales necesarias
   - Qdrant Vector Store1: Configura las credenciales necesarias
   - Google Gemini Chat Model: Configura las credenciales necesarias
   - Google Gemini Chat Model1: Configura las credenciales necesarias
   - Google Gemini Chat Model2: Configura las credenciales necesarias
   - Google Gemini Chat Model3: Configura las credenciales necesarias
   - Qdrant Vector Store2: Configura las credenciales necesarias
   - Embeddings OpenAI2: Configura las credenciales necesarias
   - Google Gemini Chat Model4: Configura las credenciales necesarias
   - Write open: Configura las credenciales necesarias
   - Write closed: Configura las credenciales necesarias
   - Embeddings OpenAI1: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n

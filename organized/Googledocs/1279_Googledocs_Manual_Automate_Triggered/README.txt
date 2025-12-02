# RAG Workflow For Stock Earnings Report Analysis

## Archivo
1279_Googledocs_Manual_Automate_Triggered.json

## Descripción

## Nodos utilizados (18 total)

### @n8n/n8n-nodes-langchain.agent
- AI Agent

### @n8n/n8n-nodes-langchain.documentDefaultDataLoader
- Default Data Loader

### @n8n/n8n-nodes-langchain.embeddingsGoogleGemini
- Embeddings Google Gemini
- Embeddings Google Gemini (retrieval)

### @n8n/n8n-nodes-langchain.lmChatGoogleGemini
- Google Gemini Chat Model1

### @n8n/n8n-nodes-langchain.lmChatOpenAi
- OpenAI Chat Model

### @n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter
- Recursive Character Text Splitter

### @n8n/n8n-nodes-langchain.toolVectorStore
- Vector Store Tool

### @n8n/n8n-nodes-langchain.vectorStorePinecone
- Pinecone Vector Store
- Pinecone Vector Store (Retrieval)

### n8n-nodes-base.googleDocs
- Save Report to Google Docs

### n8n-nodes-base.googleDrive
- Download File From Google Drive

### n8n-nodes-base.googleSheets
- List Of Files To Load (Google Sheets)

### n8n-nodes-base.manualTrigger
- When clicking ‘Test workflow’

### n8n-nodes-base.splitInBatches
- Loop Over Items

### n8n-nodes-base.stickyNote
- Sticky Note
- Sticky Note1
- Sticky Note2

## Configuración

1. Importa el archivo `1279_Googledocs_Manual_Automate_Triggered.json` en n8n
2. Revisa las credenciales necesarias:
   - Pinecone Vector Store: Configura las credenciales necesarias
   - Embeddings Google Gemini: Configura las credenciales necesarias
   - Google Gemini Chat Model1: Configura las credenciales necesarias
   - OpenAI Chat Model: Configura las credenciales necesarias
   - Pinecone Vector Store (Retrieval): Configura las credenciales necesarias
   - Save Report to Google Docs: Configura las credenciales necesarias
   - Embeddings Google Gemini (retrieval): Configura las credenciales necesarias
   - List Of Files To Load (Google Sheets): Configura las credenciales necesarias
   - Download File From Google Drive: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n

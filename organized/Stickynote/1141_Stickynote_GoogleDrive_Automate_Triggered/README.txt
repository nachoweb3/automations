# RAG Workflow For Company Documents stored in Google Drive

## Archivo
1141_Stickynote_GoogleDrive_Automate_Triggered.json

## Descripción

## Nodos utilizados (18 total)

### @n8n/n8n-nodes-langchain.agent
- AI Agent

### @n8n/n8n-nodes-langchain.chatTrigger
- When chat message received

### @n8n/n8n-nodes-langchain.documentDefaultDataLoader
- Default Data Loader

### @n8n/n8n-nodes-langchain.embeddingsGoogleGemini
- Embeddings Google Gemini
- Embeddings Google Gemini (retrieval)

### @n8n/n8n-nodes-langchain.lmChatGoogleGemini
- Google Gemini Chat Model
- Google Gemini Chat Model (retrieval)

### @n8n/n8n-nodes-langchain.memoryBufferWindow
- Window Buffer Memory

### @n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter
- Recursive Character Text Splitter

### @n8n/n8n-nodes-langchain.toolVectorStore
- Vector Store Tool

### @n8n/n8n-nodes-langchain.vectorStorePinecone
- Pinecone Vector Store
- Pinecone Vector Store (Retrieval)

### n8n-nodes-base.googleDrive
- Download File From Google Drive

### n8n-nodes-base.googleDriveTrigger
- Google Drive File Updated
- Google Drive File Created

### n8n-nodes-base.stickyNote
- Sticky Note2
- Sticky Note
- Sticky Note1

## Configuración

1. Importa el archivo `1141_Stickynote_GoogleDrive_Automate_Triggered.json` en n8n
2. Revisa las credenciales necesarias:
   - Pinecone Vector Store: Configura las credenciales necesarias
   - Embeddings Google Gemini: Configura las credenciales necesarias
   - Pinecone Vector Store (Retrieval): Configura las credenciales necesarias
   - Embeddings Google Gemini (retrieval): Configura las credenciales necesarias
   - Download File From Google Drive: Configura las credenciales necesarias
   - Google Drive File Updated: Configura las credenciales necesarias
   - Google Drive File Created: Configura las credenciales necesarias
   - Google Gemini Chat Model: Configura las credenciales necesarias
   - Google Gemini Chat Model (retrieval): Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n

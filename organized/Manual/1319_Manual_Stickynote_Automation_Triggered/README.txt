# 1319_Manual_Stickynote_Automation_Triggered

## Archivo
1319_Manual_Stickynote_Automation_Triggered.json

## Descripción

## Nodos utilizados (16 total)

### @n8n/n8n-nodes-langchain.chainRetrievalQa
- Question and Answer Chain

### @n8n/n8n-nodes-langchain.chatTrigger
- When clicking 'Chat' button below

### @n8n/n8n-nodes-langchain.documentDefaultDataLoader
- Default Data Loader

### @n8n/n8n-nodes-langchain.embeddingsOpenAi
- Embeddings OpenAI
- Embeddings OpenAI2

### @n8n/n8n-nodes-langchain.lmChatOpenAi
- OpenAI Chat Model

### @n8n/n8n-nodes-langchain.retrieverVectorStore
- Vector Store Retriever

### @n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter
- Recursive Character Text Splitter

### @n8n/n8n-nodes-langchain.vectorStorePinecone
- Read Pinecone Vector Store
- Insert into Pinecone vector store

### n8n-nodes-base.googleDrive
- Google Drive

### n8n-nodes-base.manualTrigger
- When clicking 'Test Workflow' button

### n8n-nodes-base.set
- Set Google Drive file URL

### n8n-nodes-base.stickyNote
- Sticky Note
- Sticky Note1
- Sticky Note2

## Configuración

1. Importa el archivo `1319_Manual_Stickynote_Automation_Triggered.json` en n8n
2. Revisa las credenciales necesarias:
   - Google Drive: Configura las credenciales necesarias
   - Embeddings OpenAI: Configura las credenciales necesarias
   - OpenAI Chat Model: Configura las credenciales necesarias
   - Embeddings OpenAI2: Configura las credenciales necesarias
   - Read Pinecone Vector Store: Configura las credenciales necesarias
   - Insert into Pinecone vector store: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n

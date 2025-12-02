# 🤖 AI Powered RAG Chatbot for Your Docs + Google Drive + Gemini + Qdrant

## Archivo
1185_Telegram_Wait_Automate_Webhook.json

## Descripción

## Nodos utilizados (50 total)

### @n8n/n8n-nodes-langchain.agent
- AI Agent

### @n8n/n8n-nodes-langchain.chatTrigger
- When chat message received

### @n8n/n8n-nodes-langchain.code
- Delete Qdrant Points by File ID

### @n8n/n8n-nodes-langchain.documentDefaultDataLoader
- Data Loader

### @n8n/n8n-nodes-langchain.embeddingsOpenAi
- text-embeddings-3-large
- text-embeddings-3-large1

### @n8n/n8n-nodes-langchain.informationExtractor
- Extract Meta Data

### @n8n/n8n-nodes-langchain.lmChatGoogleGemini
- Google Gemini Chat Model
- Google Gemini Chat Model1

### @n8n/n8n-nodes-langchain.lmChatOpenAi
- gpt-4o-mini1
- OpenAI Chat Model

### @n8n/n8n-nodes-langchain.memoryBufferWindow
- Window Buffer Memory

### @n8n/n8n-nodes-langchain.textSplitterTokenSplitter
- Token Splitter

### @n8n/n8n-nodes-langchain.vectorStoreQdrant
- Qdrant Vector Store
- Qdrant Vector Store Tool

### n8n-nodes-base.extractFromFile
- Get File Contents

### n8n-nodes-base.googleDocs
- Update Chat History

### n8n-nodes-base.googleDrive
- Download File From Google Drive
- Find File Ids in Google Drive Folder
- Google Drive

### n8n-nodes-base.if
- If

### n8n-nodes-base.manualTrigger
- When clicking ‘Test workflow’

### n8n-nodes-base.merge
- Merge
- Merge1
- Merge2

### n8n-nodes-base.set
- Google Folder ID
- Qdrant Collection Name
- Respond to User

### n8n-nodes-base.splitInBatches
- Loop Over Items

### n8n-nodes-base.stickyNote
- Sticky Note
- Sticky Note1
- Sticky Note2
- Sticky Note3
- Sticky Note4
- Sticky Note5
- Sticky Note6
- Sticky Note7
- Sticky Note8
- Sticky Note9
- Sticky Note10
- Sticky Note11
- Sticky Note12
- Sticky Note13
- Sticky Note14

### n8n-nodes-base.summarize
- File Id List

### n8n-nodes-base.telegram
- Confirm Qdrant Delete Points
- Send Declined Message
- Send Completed Message

### n8n-nodes-base.wait
- Wait

### n8n-nodes-base.webhook
- Webhook

## Configuración

1. Importa el archivo `1185_Telegram_Wait_Automate_Webhook.json` en n8n
2. Revisa las credenciales necesarias:
   - Qdrant Vector Store: Configura las credenciales necesarias
   - Google Gemini Chat Model: Configura las credenciales necesarias
   - Download File From Google Drive: Configura las credenciales necesarias
   - Find File Ids in Google Drive Folder: Configura las credenciales necesarias
   - text-embeddings-3-large: Configura las credenciales necesarias
   - gpt-4o-mini1: Configura las credenciales necesarias
   - Confirm Qdrant Delete Points: Configura las credenciales necesarias
   - Send Declined Message: Configura las credenciales necesarias
   - Google Gemini Chat Model1: Configura las credenciales necesarias
   - text-embeddings-3-large1: Configura las credenciales necesarias
   - Google Drive: Configura las credenciales necesarias
   - Update Chat History: Configura las credenciales necesarias
   - Qdrant Vector Store Tool: Configura las credenciales necesarias
   - OpenAI Chat Model: Configura las credenciales necesarias
   - Send Completed Message: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n

# 1332_Splitout_Zendesk_Send_Triggered

## Archivo
1332_Splitout_Zendesk_Send_Triggered.json

## Descripción

## Nodos utilizados (26 total)

### @n8n/n8n-nodes-langchain.agent
- AI Agent
- AI Agent1

### @n8n/n8n-nodes-langchain.chatTrigger
- When chat message received

### @n8n/n8n-nodes-langchain.documentDefaultDataLoader
- Default Data Loader

### @n8n/n8n-nodes-langchain.embeddingsOpenAi
- Embeddings OpenAI1
- Embeddings OpenAI2
- Embeddings OpenAI

### @n8n/n8n-nodes-langchain.lmChatOpenAi
- OpenAI Chat Model
- OpenAI Chat Model1

### @n8n/n8n-nodes-langchain.memoryBufferWindow
- Window Buffer Memory

### @n8n/n8n-nodes-langchain.outputParserStructured
- Structured Output Parser

### @n8n/n8n-nodes-langchain.textSplitterTokenSplitter
- Token Splitter1

### @n8n/n8n-nodes-langchain.vectorStoreQdrant
- Embed JSON in Qdrant Collection
- Query Qdrant Vector Store
- Qdrant Vector Store query

### n8n-nodes-base.extractFromFile
- Extract from File

### n8n-nodes-base.googleDrive
- Pull Mitre Data From Gdrive

### n8n-nodes-base.manualTrigger
- When clicking ‘Test workflow’

### n8n-nodes-base.noOp
- Move on to next ticket

### n8n-nodes-base.splitInBatches
- Loop Over Items

### n8n-nodes-base.splitOut
- Split Out

### n8n-nodes-base.stickyNote
- Sticky Note
- Sticky Note1
- Sticky Note2

### n8n-nodes-base.zendesk
- Get all Zendesk Tickets
- Update Zendesk with Mitre Data

## Configuración

1. Importa el archivo `1332_Splitout_Zendesk_Send_Triggered.json` en n8n
2. Revisa las credenciales necesarias:
   - OpenAI Chat Model: Configura las credenciales necesarias
   - Embeddings OpenAI1: Configura las credenciales necesarias
   - Embeddings OpenAI2: Configura las credenciales necesarias
   - OpenAI Chat Model1: Configura las credenciales necesarias
   - Embeddings OpenAI: Configura las credenciales necesarias
   - Pull Mitre Data From Gdrive: Configura las credenciales necesarias
   - Embed JSON in Qdrant Collection: Configura las credenciales necesarias
   - Query Qdrant Vector Store: Configura las credenciales necesarias
   - Qdrant Vector Store query: Configura las credenciales necesarias
   - Get all Zendesk Tickets: Configura las credenciales necesarias
   - Update Zendesk with Mitre Data: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n

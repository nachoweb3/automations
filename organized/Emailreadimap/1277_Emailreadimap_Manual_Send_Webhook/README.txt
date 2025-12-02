# Email AI Auto-responder. Summerize and send email

## Archivo
1277_Emailreadimap_Manual_Send_Webhook.json

## Descripción

## Nodos utilizados (26 total)

### @n8n/n8n-nodes-langchain.agent
- Write email

### @n8n/n8n-nodes-langchain.chainLlm
- Review email

### @n8n/n8n-nodes-langchain.chainSummarization
- Email Summarization Chain

### @n8n/n8n-nodes-langchain.documentDefaultDataLoader
- Default Data Loader

### @n8n/n8n-nodes-langchain.embeddingsOpenAi
- Embeddings OpenAI
- Embeddings OpenAI1

### @n8n/n8n-nodes-langchain.lmChatOpenAi
- DeepSeek R1
- OpenAI
- DeepSeek
- OpenAI 4-o-mini

### @n8n/n8n-nodes-langchain.textClassifier
- Email Classifier

### @n8n/n8n-nodes-langchain.textSplitterTokenSplitter
- Token Splitter

### @n8n/n8n-nodes-langchain.vectorStoreQdrant
- Qdrant Vector Store
- Qdrant Vector Store1

### n8n-nodes-base.emailReadImap
- Email Trigger (IMAP)

### n8n-nodes-base.emailSend
- Send Email

### n8n-nodes-base.googleDrive
- Get folder
- Download Files

### n8n-nodes-base.httpRequest
- Create collection
- Refresh collection

### n8n-nodes-base.manualTrigger
- When clicking ‘Test workflow’

### n8n-nodes-base.markdown
- Markdown

### n8n-nodes-base.noOp
- Do nothing

### n8n-nodes-base.stickyNote
- Sticky Note3
- Sticky Note5
- Sticky Note

## Configuración

1. Importa el archivo `1277_Emailreadimap_Manual_Send_Webhook.json` en n8n
2. Revisa las credenciales necesarias:
   - Email Trigger (IMAP): Configura las credenciales necesarias
   - DeepSeek R1: Configura las credenciales necesarias
   - Send Email: Configura las credenciales necesarias
   - Qdrant Vector Store: Configura las credenciales necesarias
   - Embeddings OpenAI: Configura las credenciales necesarias
   - Create collection: Configura las credenciales necesarias
   - Refresh collection: Configura las credenciales necesarias
   - Get folder: Configura las credenciales necesarias
   - Download Files: Configura las credenciales necesarias
   - Qdrant Vector Store1: Configura las credenciales necesarias
   - Embeddings OpenAI1: Configura las credenciales necesarias
   - OpenAI: Configura las credenciales necesarias
   - DeepSeek: Configura las credenciales necesarias
   - OpenAI 4-o-mini: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n

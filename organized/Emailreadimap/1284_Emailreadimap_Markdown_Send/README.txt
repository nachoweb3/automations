# AI Email processing autoresponder with approval (Yes/No)

## Archivo
1284_Emailreadimap_Markdown_Send.json

## Descripción

## Nodos utilizados (17 total)

### @n8n/n8n-nodes-langchain.agent
- Write email

### @n8n/n8n-nodes-langchain.chainSummarization
- Email Summarization Chain

### @n8n/n8n-nodes-langchain.embeddingsOpenAi
- Embeddings OpenAI

### @n8n/n8n-nodes-langchain.lmChatOpenAi
- DeepSeek R1
- OpenAI

### @n8n/n8n-nodes-langchain.vectorStoreQdrant
- Qdrant Vector Store

### n8n-nodes-base.emailReadImap
- Email Trigger (IMAP)

### n8n-nodes-base.emailSend
- Send Email

### n8n-nodes-base.gmail
- Send Draft

### n8n-nodes-base.if
- Approve?

### n8n-nodes-base.markdown
- Markdown

### n8n-nodes-base.set
- Set Email

### n8n-nodes-base.stickyNote
- Sticky Note
- Sticky Note1
- Sticky Note2
- Sticky Note3
- Sticky Note4

## Configuración

1. Importa el archivo `1284_Emailreadimap_Markdown_Send.json` en n8n
2. Revisa las credenciales necesarias:
   - Email Trigger (IMAP): Configura las credenciales necesarias
   - DeepSeek R1: Configura las credenciales necesarias
   - Send Email: Configura las credenciales necesarias
   - Qdrant Vector Store: Configura las credenciales necesarias
   - Embeddings OpenAI: Configura las credenciales necesarias
   - OpenAI: Configura las credenciales necesarias
   - Send Draft: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n

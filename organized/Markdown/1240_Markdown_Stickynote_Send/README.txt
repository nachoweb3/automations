# Very simple Human in the loop system email with AI e IMAP

## Archivo
1240_Markdown_Stickynote_Send.json

## Descripción

## Nodos utilizados (16 total)

### @n8n/n8n-nodes-langchain.agent
- Write email

### @n8n/n8n-nodes-langchain.chainSummarization
- Email Summarization Chain

### @n8n/n8n-nodes-langchain.lmChatOpenAi
- OpenAI
- OpenAI Chat Model

### n8n-nodes-base.emailReadImap
- Email Trigger (IMAP)

### n8n-nodes-base.emailSend
- Send Email
- Approve Email

### n8n-nodes-base.if
- Approved?

### n8n-nodes-base.markdown
- Markdown

### n8n-nodes-base.set
- Set Email text

### n8n-nodes-base.stickyNote
- Sticky Note2
- Sticky Note5
- Sticky Note1
- Sticky Note7
- Sticky Note
- Sticky Note11

## Configuración

1. Importa el archivo `1240_Markdown_Stickynote_Send.json` en n8n
2. Revisa las credenciales necesarias:
   - Email Trigger (IMAP): Configura las credenciales necesarias
   - Send Email: Configura las credenciales necesarias
   - OpenAI: Configura las credenciales necesarias
   - Approve Email: Configura las credenciales necesarias
   - OpenAI Chat Model: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n

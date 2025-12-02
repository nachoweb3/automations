# 1335_Googledocs_Webhook_Process_Webhook

## Archivo
1335_Googledocs_Webhook_Process_Webhook.json

## Descripción

## Nodos utilizados (23 total)

### @n8n/n8n-nodes-langchain.chainLlm
- Extract Questions From RFP

### @n8n/n8n-nodes-langchain.lmChatOpenAi
- OpenAI Chat Model

### @n8n/n8n-nodes-langchain.openAi
- Answer Question with Context

### @n8n/n8n-nodes-langchain.outputParserItemList
- Item List Output Parser

### n8n-nodes-base.extractFromFile
- Get RFP Data

### n8n-nodes-base.gmail
- Send Email Notification

### n8n-nodes-base.googleDocs
- Create new RFP Response Document
- Add Metadata to Response Doc
- Record Question & Answer in Response Doc

### n8n-nodes-base.set
- Set Variables

### n8n-nodes-base.slack
- Send Chat Notification

### n8n-nodes-base.splitInBatches
- For Each Question...

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

### n8n-nodes-base.webhook
- Wait for Request

## Configuración

1. Importa el archivo `1335_Googledocs_Webhook_Process_Webhook.json` en n8n
2. Revisa las credenciales necesarias:
   - Create new RFP Response Document: Configura las credenciales necesarias
   - OpenAI Chat Model: Configura las credenciales necesarias
   - Send Chat Notification: Configura las credenciales necesarias
   - Send Email Notification: Configura las credenciales necesarias
   - Add Metadata to Response Doc: Configura las credenciales necesarias
   - Record Question & Answer in Response Doc: Configura las credenciales necesarias
   - Answer Question with Context: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n

# Automated Research Report Generation with OpenAI, Wikipedia, Google Search, and Gmail/Telegram

## Archivo
1341_Telegram_Splitout_Automate_Webhook.json

## Descripción

## Nodos utilizados (26 total)

### @n8n/n8n-nodes-langchain.agent
- Query Refiner
- Research AI Agent

### @n8n/n8n-nodes-langchain.lmChatOpenAi
- OpenAI Chat Model
- OpenAI Chat Model1

### @n8n/n8n-nodes-langchain.memoryBufferWindow
- Simple Memory

### @n8n/n8n-nodes-langchain.outputParserStructured
- Structured Output Parser

### @n8n/n8n-nodes-langchain.toolHttpRequest
- Search News
- Wikipedia
- Google Search Web
- SerpApi

### n8n-nodes-base.aggregate
- Aggregate

### n8n-nodes-base.code
- Input Validation
- Parse Research Output
- Merge Split Items
- Generate PDF HTML

### n8n-nodes-base.executeWorkflowTrigger
- Executed by Main AI Agent

### n8n-nodes-base.gmail
- Send Research to Gmail

### n8n-nodes-base.googleDrive
- Search Folder

### n8n-nodes-base.googleSheets
- Store Research Metadata

### n8n-nodes-base.httpRequest
- Convert HTML to PDF
- Download PDF

### n8n-nodes-base.if
- If

### n8n-nodes-base.manualTrigger
- When clicking ‘Test workflow’

### n8n-nodes-base.splitOut
- Split Out

### n8n-nodes-base.stickyNote
- Sticky Note

### n8n-nodes-base.telegram
- Send PDF

## Configuración

1. Importa el archivo `1341_Telegram_Splitout_Automate_Webhook.json` en n8n
2. Revisa las credenciales necesarias:
   - OpenAI Chat Model: Configura las credenciales necesarias
   - OpenAI Chat Model1: Configura las credenciales necesarias
   - SerpApi: Configura las credenciales necesarias
   - Store Research Metadata: Configura las credenciales necesarias
   - Send Research to Gmail: Configura las credenciales necesarias
   - Send PDF: Configura las credenciales necesarias
   - Search Folder: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n

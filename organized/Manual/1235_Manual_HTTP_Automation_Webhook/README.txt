# Google Trend Data Extract, Summarization with Bright Data & Google Gemini

## Archivo
1235_Manual_HTTP_Automation_Webhook.json

## Descripción

## Nodos utilizados (16 total)

### @n8n/n8n-nodes-langchain.chainLlm
- Markdown to Textual Data Extractor

### @n8n/n8n-nodes-langchain.chainSummarization
- Summarize Google Trends

### @n8n/n8n-nodes-langchain.informationExtractor
- Structured Data Extractor

### @n8n/n8n-nodes-langchain.lmChatGoogleGemini
- Google Gemini Chat Model for Data Extract
- Google Gemini Chat Model for Summarization
- Google Gemini Chat Model for Structured Data Extract

### n8n-nodes-base.function
- Create a binary data

### n8n-nodes-base.gmail
- Send Summary to Gmail

### n8n-nodes-base.httpRequest
- Initiate a Webhook Notification for Markdown to Textual Data Extraction
- Perform Bright Data Web Request
- Initiate a Webhook Notification for Summarization

### n8n-nodes-base.manualTrigger
- When clicking ‘Test workflow’

### n8n-nodes-base.readWriteFile
- Write the file to disk

### n8n-nodes-base.set
- Set URL and Bright Data Zone

### n8n-nodes-base.stickyNote
- Sticky Note
- Sticky Note1

## Tags
- Engineering
- AI

## Configuración

1. Importa el archivo `1235_Manual_HTTP_Automation_Webhook.json` en n8n
2. Revisa las credenciales necesarias:
   - Google Gemini Chat Model for Data Extract: Configura las credenciales necesarias
   - Perform Bright Data Web Request: Configura las credenciales necesarias
   - Google Gemini Chat Model for Summarization: Configura las credenciales necesarias
   - Google Gemini Chat Model for Structured Data Extract: Configura las credenciales necesarias
   - Send Summary to Gmail: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n

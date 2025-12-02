# Extract & Summarize Bing Copilot Search Results with Gemini AI and Bright Data

## Archivo
1314_Manual_Stickynote_Automation_Webhook.json

## Descripción

## Nodos utilizados (19 total)

### @n8n/n8n-nodes-langchain.chainLlm
- Structured Data Extractor

### @n8n/n8n-nodes-langchain.chainSummarization
- Concise Summary Creator

### @n8n/n8n-nodes-langchain.documentDefaultDataLoader
- Default Data Loader

### @n8n/n8n-nodes-langchain.lmChatGoogleGemini
- Google Gemini Chat Model
- Google Gemini Chat Model1

### @n8n/n8n-nodes-langchain.outputParserStructured
- Structured Output Parser

### @n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter
- Recursive Character Text Splitter

### n8n-nodes-base.httpRequest
- Download Snapshot
- Check Snapshot Status
- Structured Data Webhook Notifier
- Summary Webhook Notifier
- Perform a Bing Copilot Request

### n8n-nodes-base.if
- If
- Check on the errors

### n8n-nodes-base.manualTrigger
- When clicking ‘Test workflow’

### n8n-nodes-base.set
- Set Snapshot Id

### n8n-nodes-base.stickyNote
- Sticky Note
- Sticky Note1

### n8n-nodes-base.wait
- Wait for 30 seconds

## Tags
- Engineering
- AI

## Configuración

1. Importa el archivo `1314_Manual_Stickynote_Automation_Webhook.json` en n8n
2. Revisa las credenciales necesarias:
   - Google Gemini Chat Model: Configura las credenciales necesarias
   - Download Snapshot: Configura las credenciales necesarias
   - Google Gemini Chat Model1: Configura las credenciales necesarias
   - Check Snapshot Status: Configura las credenciales necesarias
   - Perform a Bing Copilot Request: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n

# 🦜✨Use OpenAI to Transcribe Audio + Summarize with AI + Save to Google Drive

## Archivo
1368_Telegram_Limit_Export_Triggered.json

## Descripción

## Nodos utilizados (33 total)

### @n8n/n8n-nodes-langchain.openAi
- Transcribe with OpenAI
- Email Content Formatter
- Summarize to Structured JSON
- Summarize to JSON
- Convert JSON to Markdown

### n8n-nodes-base.filter
- Filter by .m4a extension

### n8n-nodes-base.gmail
- Gmail User for Approval
- Send Gmail Message

### n8n-nodes-base.googleDrive
- Download audio file
- Search Google Drive
- Save JSON file to Google Drive
- Save Markdown file to Google Drive
- Get JSON File Meta
- Get Markdown File Meta
- Save Raw Transcript to Google Drive

### n8n-nodes-base.googleDriveTrigger
- On File Created Trigger

### n8n-nodes-base.limit
- Limit to last file

### n8n-nodes-base.manualTrigger
- Start Workflow

### n8n-nodes-base.merge
- Merge All Paths

### n8n-nodes-base.set
- Set Config
- Get Filename for JSON
- Get Filename for Markdown
- Prepare Response JSON
- Prepare Response Markdown

### n8n-nodes-base.stickyNote
- Sticky Note
- Sticky Note1
- Sticky Note2
- Sticky Note3
- Sticky Note4
- Sticky Note5
- Sticky Note6
- Sticky Note7

### n8n-nodes-base.telegram
- Send Telegram Message

## Configuración

1. Importa el archivo `1368_Telegram_Limit_Export_Triggered.json` en n8n
2. Revisa las credenciales necesarias:
   - Gmail User for Approval: Configura las credenciales necesarias
   - Transcribe with OpenAI: Configura las credenciales necesarias
   - Download audio file: Configura las credenciales necesarias
   - Search Google Drive: Configura las credenciales necesarias
   - Send Telegram Message: Configura las credenciales necesarias
   - Send Gmail Message: Configura las credenciales necesarias
   - Email Content Formatter: Configura las credenciales necesarias
   - Summarize to Structured JSON: Configura las credenciales necesarias
   - Summarize to JSON: Configura las credenciales necesarias
   - Convert JSON to Markdown: Configura las credenciales necesarias
   - Save JSON file to Google Drive: Configura las credenciales necesarias
   - Save Markdown file to Google Drive: Configura las credenciales necesarias
   - Get JSON File Meta: Configura las credenciales necesarias
   - Get Markdown File Meta: Configura las credenciales necesarias
   - Save Raw Transcript to Google Drive: Configura las credenciales necesarias
   - On File Created Trigger: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n

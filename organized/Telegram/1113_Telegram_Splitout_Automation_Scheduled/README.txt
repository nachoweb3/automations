# 🤖🧑‍💻 AI Agent  for Top n8n Creators Leaderboard Reporting

## Archivo
1113_Telegram_Splitout_Automation_Scheduled.json

## Descripción

## Nodos utilizados (49 total)

### @n8n/n8n-nodes-langchain.agent
- n8n Creators Stats Agent

### @n8n/n8n-nodes-langchain.chainLlm
- Create Top 10 Workflows List

### @n8n/n8n-nodes-langchain.lmChatGoogleGemini
- Google Gemini Chat Model

### @n8n/n8n-nodes-langchain.lmChatOpenAi
- gpt-4o-mini

### @n8n/n8n-nodes-langchain.toolWorkflow
- Workflow Tool

### n8n-nodes-base.aggregate
- Aggregate

### n8n-nodes-base.convertToFile
- creator-summary

### n8n-nodes-base.executeWorkflowTrigger
- When Executed by Another Workflow

### n8n-nodes-base.gmail
- Gmail Creators & Workflows Report
- Gmail Top 10 Workflows List

### n8n-nodes-base.googleDrive
- Google Drive

### n8n-nodes-base.httpRequest
- stats_aggregate_creators
- stats_aggregate_workflows

### n8n-nodes-base.limit
- Take Top 10 Creators
- Take Top 50 Workflows

### n8n-nodes-base.markdown
- Convert Markdown to HTML
- Convert Top 10 Markdown to HTML

### n8n-nodes-base.merge
- Merge Creators & Workflows

### n8n-nodes-base.readWriteFile
- Save creator-summary.md

### n8n-nodes-base.scheduleTrigger
- Schedule Trigger

### n8n-nodes-base.set
- Global Variables
- Parse Workflow Data
- Parse Creators Data
- Workflow Response
- Creators Data
- Workflows Data

### n8n-nodes-base.sort
- Sort By Top Weekly Creator Inserts
- Sort By Top Weekly Workflow Inserts

### n8n-nodes-base.splitOut
- Split Out Creators
- Split Out Workflows

### n8n-nodes-base.stickyNote
- Sticky Note
- Sticky Note1
- Sticky Note2
- Sticky Note3
- Sticky Note5
- Sticky Note6
- Sticky Note7
- Sticky Note8
- Sticky Note10
- Sticky Note11
- Sticky Note4
- Sticky Note9
- Sticky Note12
- Sticky Note13
- Sticky Note14
- Sticky Note15
- Sticky Note16
- Sticky Note17

### n8n-nodes-base.telegram
- Telegram Top 10  Workflows List

## Configuración

1. Importa el archivo `1113_Telegram_Splitout_Automation_Scheduled.json` en n8n
2. Revisa las credenciales necesarias:
   - gpt-4o-mini: Configura las credenciales necesarias
   - Google Drive: Configura las credenciales necesarias
   - Google Gemini Chat Model: Configura las credenciales necesarias
   - Gmail Creators & Workflows Report: Configura las credenciales necesarias
   - Telegram Top 10  Workflows List: Configura las credenciales necesarias
   - Gmail Top 10 Workflows List: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n

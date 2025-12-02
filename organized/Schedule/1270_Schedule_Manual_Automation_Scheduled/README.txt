# 1270_Schedule_Manual_Automation_Scheduled

## Archivo
1270_Schedule_Manual_Automation_Scheduled.json

## Descripción

## Nodos utilizados (22 total)

### @n8n/n8n-nodes-langchain.agent
- AI company researcher

### @n8n/n8n-nodes-langchain.lmChatOpenAi
- OpenAI Chat Model

### @n8n/n8n-nodes-langchain.outputParserStructured
- Structured Output Parser

### @n8n/n8n-nodes-langchain.toolSerpApi
- SerpAPI - Search Google

### @n8n/n8n-nodes-langchain.toolWorkflow
- Get website content
- Search Google with ScrapingBee

### n8n-nodes-base.googleSheets
- Google Sheets - Update Row with data
- Get rows to enrich

### n8n-nodes-base.manualTrigger
- When clicking "Test workflow"

### n8n-nodes-base.merge
- Merge data

### n8n-nodes-base.scheduleTrigger
- Schedule Trigger

### n8n-nodes-base.set
- Input
- AI Researcher Output Data

### n8n-nodes-base.splitInBatches
- Loop Over Items

### n8n-nodes-base.stickyNote
- Sticky Note
- Sticky Note1
- Sticky Note2
- Sticky Note3
- Sticky Note4
- Sticky Note5
- Sticky Note6
- Sticky Note7

## Configuración

1. Importa el archivo `1270_Schedule_Manual_Automation_Scheduled.json` en n8n
2. Revisa las credenciales necesarias:
   - OpenAI Chat Model: Configura las credenciales necesarias
   - SerpAPI - Search Google: Configura las credenciales necesarias
   - Google Sheets - Update Row with data: Configura las credenciales necesarias
   - Get rows to enrich: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n

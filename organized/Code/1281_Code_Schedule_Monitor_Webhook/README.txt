# AI-Powered Information Monitoring with OpenAI, Google Sheets, Jina AI and Slack

## Archivo
1281_Code_Schedule_Monitor_Webhook.json

## Descripción

## Nodos utilizados (31 total)

### @n8n/n8n-nodes-langchain.chainLlm
- Basic LLM Chain

### @n8n/n8n-nodes-langchain.lmChatOpenAi
- OpenAI Chat Model
- OpenAI Chat Model1

### @n8n/n8n-nodes-langchain.textClassifier
- Relevance Classification for Topic Monitoring

### n8n-nodes-base.code
- Code

### n8n-nodes-base.googleSheets
- Google Sheets - Get RSS Feed url followed
- Google Sheets - Get article monitored database
- Google Sheets - Add relevant articles
- Google Sheets - Add relevant article

### n8n-nodes-base.httpRequest
- Jina AI - Read URL

### n8n-nodes-base.if
- If

### n8n-nodes-base.noOp
- No Operation, do nothing

### n8n-nodes-base.rssFeedRead
- RSS Read

### n8n-nodes-base.scheduleTrigger
- Schedule Trigger

### n8n-nodes-base.set
- Set field - existing_url
- Set fields - Not relevant articles
- Set Fields - Relevant Articles

### n8n-nodes-base.slack
- Slack1

### n8n-nodes-base.stickyNote
- Sticky Note
- Sticky Note3
- Sticky Note4
- Sticky Note6
- Sticky Note5
- Sticky Note8
- Sticky Note9
- Sticky Note10
- Sticky Note2
- Sticky Note11
- Sticky Note12
- Sticky Note1
- Sticky Note7

## Configuración

1. Importa el archivo `1281_Code_Schedule_Monitor_Webhook.json` en n8n
2. Revisa las credenciales necesarias:
   - OpenAI Chat Model: Configura las credenciales necesarias
   - Google Sheets - Get RSS Feed url followed: Configura las credenciales necesarias
   - Slack1: Configura las credenciales necesarias
   - Google Sheets - Get article monitored database: Configura las credenciales necesarias
   - OpenAI Chat Model1: Configura las credenciales necesarias
   - Google Sheets - Add relevant articles: Configura las credenciales necesarias
   - Google Sheets - Add relevant article: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n

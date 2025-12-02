# 1344_Splitout_Filter_Automation_Webhook

## Archivo
1344_Splitout_Filter_Automation_Webhook.json

## Descripción

## Nodos utilizados (38 total)

### @n8n/n8n-nodes-langchain.agent
- Crawl website

### @n8n/n8n-nodes-langchain.lmChatOpenAi
- OpenAI Chat Model

### @n8n/n8n-nodes-langchain.outputParserStructured
- JSON Parser

### @n8n/n8n-nodes-langchain.toolWorkflow
- Text
- URLs

### n8n-nodes-base.aggregate
- Aggregate URLs

### n8n-nodes-base.filter
- Filter out invalid URLs
- Filter out empty hrefs

### n8n-nodes-base.html
- Retrieve URLs

### n8n-nodes-base.httpRequest
- Get website (text)
- Get website (URL)

### n8n-nodes-base.manualTrigger
- Execute workflow

### n8n-nodes-base.markdown
- Convert HTML to Markdown

### n8n-nodes-base.merge
- Merge all data

### n8n-nodes-base.removeDuplicates
- Remove duplicated

### n8n-nodes-base.set
- Map company name and website
- Select company name and website
- Set social media array
- Set domain to path
- Set domain (text)
- Add protocool to domain (text)
- Set response (text)
- Set domain (URL)
- Set response (URL)
- Add protocool to domain (URL)

### n8n-nodes-base.splitOut
- Split out URLs

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

### n8n-nodes-base.supabase
- Get companies
- Insert new row

## Configuración

1. Importa el archivo `1344_Splitout_Filter_Automation_Webhook.json` en n8n
2. Revisa las credenciales necesarias:
   - OpenAI Chat Model: Configura las credenciales necesarias
   - Get companies: Configura las credenciales necesarias
   - Insert new row: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n

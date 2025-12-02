# Social Media AI Agent - Telegram

## Archivo
1280_Linkedin_Telegram_Automation_Scheduled.json

## Descripción

## Nodos utilizados (26 total)

### @n8n/n8n-nodes-langchain.openAi
- Generate Content

### n8n-nodes-base.airtable
- Update X Status
- Update L Status
- Search Item
- Create Item

### n8n-nodes-base.code
- Extract Meta
- Filter Unposted Items
- Validate Generate Content

### n8n-nodes-base.filter
- Filter Errored

### n8n-nodes-base.httpRequest
- Crawl HN Home
- Visit GH Page

### n8n-nodes-base.linkedIn
- LinkedIn

### n8n-nodes-base.markdown
- Convert HTML To Markdown

### n8n-nodes-base.merge
- Merge

### n8n-nodes-base.noOp
- No Operation, do nothing

### n8n-nodes-base.scheduleTrigger
- Schedule Trigger

### n8n-nodes-base.stickyNote
- Sticky Note
- Sticky Note1
- Sticky Note2
- Sticky Note3
- Sticky Note4
- Sticky Note5
- Sticky Note6

### n8n-nodes-base.telegram
- Ping Me

### n8n-nodes-base.twitter
- X

### n8n-nodes-base.wait
- Wait for 5 mins before posting

## Configuración

1. Importa el archivo `1280_Linkedin_Telegram_Automation_Scheduled.json` en n8n
2. Revisa las credenciales necesarias:
   - Update X Status: Configura las credenciales necesarias
   - LinkedIn: Configura las credenciales necesarias
   - Update L Status: Configura las credenciales necesarias
   - Search Item: Configura las credenciales necesarias
   - Create Item: Configura las credenciales necesarias
   - X: Configura las credenciales necesarias
   - Generate Content: Configura las credenciales necesarias
   - Ping Me: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n

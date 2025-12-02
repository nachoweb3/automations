# Automate LinkedIn Posts with AI

## Archivo
1330_Linkedin_Schedule_Automate_Webhook.json

## Descripción

## Nodos utilizados (11 total)

### @n8n/n8n-nodes-langchain.openAi
- Reformat Post Text

### n8n-nodes-base.aggregate
- Pull together all text blocks + image

### n8n-nodes-base.httpRequest
- Fetch image from post

### n8n-nodes-base.linkedIn
- Post on LinkedIn

### n8n-nodes-base.merge
- Combine text+image

### n8n-nodes-base.notion
- Set post status to "Done"
- get all content from post page
- query entries from Notion table for today

### n8n-nodes-base.scheduleTrigger
- Schedule Trigger

### n8n-nodes-base.stickyNote
- Sticky Note1
- Sticky Note

## Configuración

1. Importa el archivo `1330_Linkedin_Schedule_Automate_Webhook.json` en n8n
2. Revisa las credenciales necesarias:
   - Set post status to "Done": Configura las credenciales necesarias
   - Post on LinkedIn: Configura las credenciales necesarias
   - Reformat Post Text: Configura las credenciales necesarias
   - get all content from post page: Configura las credenciales necesarias
   - query entries from Notion table for today: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n

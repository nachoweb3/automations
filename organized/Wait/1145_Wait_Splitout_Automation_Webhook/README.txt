# Google Site Index - sitemap.xml example

## Archivo
1145_Wait_Splitout_Automation_Webhook.json

## Descripción

## Nodos utilizados (21 total)

### n8n-nodes-base.httpRequest
- Check status
- URL Updated
- Get sitemap.xml
- Get content of each sitemap

### n8n-nodes-base.if
- is new?

### n8n-nodes-base.manualTrigger
- When clicking "Test workflow"

### n8n-nodes-base.scheduleTrigger
- Schedule Trigger

### n8n-nodes-base.set
- Force urlset.url to array
- Assign mandatiry sitemap fields

### n8n-nodes-base.sort
- Sort

### n8n-nodes-base.splitInBatches
- Loop Over Items

### n8n-nodes-base.splitOut
- Split Out
- Get content-specific sitemaps

### n8n-nodes-base.stickyNote
- Sticky Note1
- Sticky Note2
- Sticky Note3
- Sticky Note
- Sticky Note4

### n8n-nodes-base.wait
- Wait

### n8n-nodes-base.xml
- Convert sitemap to JSON
- convert page data to JSON

## Configuración

1. Importa el archivo `1145_Wait_Splitout_Automation_Webhook.json` en n8n
2. Revisa las credenciales necesarias:
   - Check status: Configura las credenciales necesarias
   - URL Updated: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n

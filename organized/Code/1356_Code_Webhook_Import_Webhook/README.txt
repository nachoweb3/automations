# Bitrix24 Task Form Widget Application Workflow example with Webhook Integration

## Archivo
1356_Code_Webhook_Import_Webhook.json

## Descripción

## Nodos utilizados (21 total)

### n8n-nodes-base.code
- Check Event Type

### n8n-nodes-base.convertToFile
- Create Settings File

### n8n-nodes-base.extractFromFile
- Extract Installation Settings

### n8n-nodes-base.function
- Process Settings
- Format Task Data

### n8n-nodes-base.httpRequest
- Register Placement
- Get Task Data

### n8n-nodes-base.if
- Is Installation?
- Has Valid Settings?
- If Installation finished

### n8n-nodes-base.merge
- Merge Installation info
- Merge request data with installation settings

### n8n-nodes-base.readWriteFile
- Save Installation Settings
- Read Installation Settings

### n8n-nodes-base.respondToWebhook
- Installation Response
- Task View Response
- Error Response
- Installation finished Response

### n8n-nodes-base.set
- Extract Credentials
- Set Settings Data

### n8n-nodes-base.webhook
- Bitrix24 Handler

## Configuración

1. Importa el archivo `1356_Code_Webhook_Import_Webhook.json` en n8n
2. Revisa las credenciales necesarias:
   - No se detectaron credenciales específicas (revisa manualmente)
3. Activa el workflow desde la interfaz de n8n

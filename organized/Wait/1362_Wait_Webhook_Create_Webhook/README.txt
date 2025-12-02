# Build a Phone Agent to qualify outbound leads and inbound calls with RetellAI -vide

## Archivo
1362_Wait_Webhook_Create_Webhook.json

## Descripción

## Nodos utilizados (18 total)

### @n8n/n8n-nodes-langchain.openAi
- Generate call summary with OpenAI

### n8n-nodes-base.filter
- Filter for analyzed calls only

### n8n-nodes-base.gmail
- Send call summary email
- Send confirmation email to lead

### n8n-nodes-base.googleSheets
- Check if phone number exists in Google Sheets
- Update lead record in Google Sheets

### n8n-nodes-base.googleSheetsTrigger
- Detect new lead in Google Sheets

### n8n-nodes-base.httpRequest
- Call new lead using RetellAI

### n8n-nodes-base.if
- Check if call was outbound

### n8n-nodes-base.respondToWebhook
- Send response to inbound webhook call

### n8n-nodes-base.stickyNote
- Sticky Note
- Sticky Note4
- Sticky Note2
- Sticky Note1

### n8n-nodes-base.twilio
- Send SMS reminder to call lead in 5 minutes

### n8n-nodes-base.wait
- Wait 5 minutes before making call

### n8n-nodes-base.webhook
- Receive inbound call from RetellAI (webhook)
- Receive post-call data from RetellAI (webhook)

## Tags
- inbound
- outbound

## Configuración

1. Importa el archivo `1362_Wait_Webhook_Create_Webhook.json` en n8n
2. Revisa las credenciales necesarias:
   - Detect new lead in Google Sheets: Configura las credenciales necesarias
   - Send SMS reminder to call lead in 5 minutes: Configura las credenciales necesarias
   - Check if phone number exists in Google Sheets: Configura las credenciales necesarias
   - Update lead record in Google Sheets: Configura las credenciales necesarias
   - Send call summary email: Configura las credenciales necesarias
   - Generate call summary with OpenAI: Configura las credenciales necesarias
   - Send confirmation email to lead: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n

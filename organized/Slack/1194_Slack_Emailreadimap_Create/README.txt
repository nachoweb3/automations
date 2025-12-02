# New invoice email notification

## Archivo
1194_Slack_Emailreadimap_Create.json

## Descripción

## Nodos utilizados (6 total)

### n8n-nodes-base.emailReadImap
- Check for new emails

### n8n-nodes-base.emailSend
- Send email to finance manager

### n8n-nodes-base.if
- If email body contains invoice
- If Amount > 1000

### n8n-nodes-base.mindee
- Extract the total amount

### n8n-nodes-base.slack
- Send new invoice notification

## Configuración

1. Importa el archivo `1194_Slack_Emailreadimap_Create.json` en n8n
2. Revisa las credenciales necesarias:
   - Check for new emails: Configura las credenciales necesarias
   - Extract the total amount: Configura las credenciales necesarias
   - Send new invoice notification: Configura las credenciales necesarias
   - Send email to finance manager: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n

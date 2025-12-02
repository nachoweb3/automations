# Check for valid Hubspot contact email

## Archivo
1172_Slack_HubSpot_Send_Triggered.json

## Descripción

## Nodos utilizados (5 total)

### n8n-nodes-base.hubspot
- Get contact email address

### n8n-nodes-base.hubspotTrigger
- When contact created

### n8n-nodes-base.if
- If email is suspicious

### n8n-nodes-base.oneSimpleApi
- validate the email

### n8n-nodes-base.slack
- Send to Slack

## Configuración

1. Importa el archivo `1172_Slack_HubSpot_Send_Triggered.json` en n8n
2. Revisa las credenciales necesarias:
   - When contact created: Configura las credenciales necesarias
   - Get contact email address: Configura las credenciales necesarias
   - validate the email: Configura las credenciales necesarias
   - Send to Slack: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n

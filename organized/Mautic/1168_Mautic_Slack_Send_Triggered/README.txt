# Check for valid Mautic contact email

## Archivo
1168_Mautic_Slack_Send_Triggered.json

## Descripción

## Nodos utilizados (6 total)

### n8n-nodes-base.if
- If is not new contact
- If the email is suspicious

### n8n-nodes-base.itemLists
- extract information

### n8n-nodes-base.mauticTrigger
- On Contact Identified

### n8n-nodes-base.oneSimpleApi
- validate email

### n8n-nodes-base.slack
- Send to Slack

## Configuración

1. Importa el archivo `1168_Mautic_Slack_Send_Triggered.json` en n8n
2. Revisa las credenciales necesarias:
   - On Contact Identified: Configura las credenciales necesarias
   - validate email: Configura las credenciales necesarias
   - Send to Slack: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n

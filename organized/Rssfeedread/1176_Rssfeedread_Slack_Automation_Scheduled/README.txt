# Post RSS feed items from yesterday to Slack

## Archivo
1176_Rssfeedread_Slack_Automation_Scheduled.json

## Descripción

## Nodos utilizados (6 total)

### n8n-nodes-base.cron
- Every Morning

### n8n-nodes-base.dateTime
- Get Yesterdays Date

### n8n-nodes-base.function
- Build our message

### n8n-nodes-base.if
- If it was published after yesterday

### n8n-nodes-base.rssFeedRead
- Get the RSS Feed

### n8n-nodes-base.slack
- Post to Slack

## Configuración

1. Importa el archivo `1176_Rssfeedread_Slack_Automation_Scheduled.json` en n8n
2. Revisa las credenciales necesarias:
   - Post to Slack: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n

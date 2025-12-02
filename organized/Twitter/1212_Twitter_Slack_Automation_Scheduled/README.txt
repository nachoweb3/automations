# Scrape Twitter for mentions of company

## Archivo
1212_Twitter_Slack_Automation_Scheduled.json

## Descripción

## Nodos utilizados (7 total)

### n8n-nodes-base.cron
- Run Every 10 Minutes

### n8n-nodes-base.dateTime
- Now - 10 minutes

### n8n-nodes-base.if
- Created since last run?

### n8n-nodes-base.set
- Filter Tweet Data
- Setup

### n8n-nodes-base.slack
- Post to Slack

### n8n-nodes-base.twitter
- Get last 50 mentions

## Configuración

1. Importa el archivo `1212_Twitter_Slack_Automation_Scheduled.json` en n8n
2. Revisa las credenciales necesarias:
   - Get last 50 mentions: Configura las credenciales necesarias
   - Post to Slack: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n

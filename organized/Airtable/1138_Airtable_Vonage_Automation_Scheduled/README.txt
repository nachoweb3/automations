# Daily Language Learning

## Archivo
1138_Airtable_Vonage_Automation_Scheduled.json

## Descripción

## Nodos utilizados (8 total)

### n8n-nodes-base.airtable
- Save today's words

### n8n-nodes-base.cron
- Daily trigger

### n8n-nodes-base.function
- Extract words
- Craft message

### n8n-nodes-base.hackerNews
- Get top 3 articles

### n8n-nodes-base.lingvaNex
- Translate

### n8n-nodes-base.set
- Filter data 

### n8n-nodes-base.vonage
- Send SMS

## Configuración

1. Importa el archivo `1138_Airtable_Vonage_Automation_Scheduled.json` en n8n
2. Revisa las credenciales necesarias:
   - Translate: Configura las credenciales necesarias
   - Save today's words: Configura las credenciales necesarias
   - Send SMS: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n

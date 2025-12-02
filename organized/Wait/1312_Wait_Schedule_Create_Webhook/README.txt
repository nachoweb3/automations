# Analyze_Crowdstrike_Detections__search_for_IOCs_in_VirusTotal__create_a_ticket_in_Jira_and_post_a_message_in_Slack

## Archivo
1312_Wait_Schedule_Create_Webhook.json

## Descripción

## Nodos utilizados (18 total)

### n8n-nodes-base.httpRequest
- Get recent detections from Crowdstrike
- Get detection details
- Look up SHA in Virustotal
- Look up IOC in Virustotal

### n8n-nodes-base.itemLists
- Split out detections
- Split out behaviours
- Merge behaviour descriptions

### n8n-nodes-base.jira
- Create Jira issue

### n8n-nodes-base.scheduleTrigger
- Schedule Trigger

### n8n-nodes-base.set
- Set behaviour descriptions

### n8n-nodes-base.slack
- Post notification on Slack

### n8n-nodes-base.splitInBatches
- Split In Batches

### n8n-nodes-base.stickyNote
- Sticky Note
- Sticky Note1
- Sticky Note2
- Sticky Note3
- Sticky Note4

### n8n-nodes-base.wait
- Pause 1 second

## Tags
- 🛠️ In progress
- Secops

## Configuración

1. Importa el archivo `1312_Wait_Schedule_Create_Webhook.json` en n8n
2. Revisa las credenciales necesarias:
   - Get recent detections from Crowdstrike: Configura las credenciales necesarias
   - Get detection details: Configura las credenciales necesarias
   - Look up SHA in Virustotal: Configura las credenciales necesarias
   - Look up IOC in Virustotal: Configura las credenciales necesarias
   - Create Jira issue: Configura las credenciales necesarias
   - Post notification on Slack: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n

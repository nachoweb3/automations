# Receive_and_analyze_emails_with_rules_in_Sublime_Security

## Archivo
1161_Code_Slack_Send_Webhook.json

## Descripción

## Nodos utilizados (13 total)

### n8n-nodes-base.code
- Split to matched and unmatched

### n8n-nodes-base.emailReadImap
- Email Trigger (IMAP)

### n8n-nodes-base.httpRequest
- Analyze email with Sublime Security

### n8n-nodes-base.if
- IF email has attachment

### n8n-nodes-base.manualTrigger
- When clicking "Execute Workflow"

### n8n-nodes-base.moveBinaryData
- Move Binary Data

### n8n-nodes-base.set
- Format the message

### n8n-nodes-base.slack
- Slack
- Notify about missing attachment

### n8n-nodes-base.stickyNote
- Sticky Note1
- Sticky Note2
- Sticky Note3
- Sticky Note4

## Tags
- 🛠️ In progress
- Secops

## Configuración

1. Importa el archivo `1161_Code_Slack_Send_Webhook.json` en n8n
2. Revisa las credenciales necesarias:
   - Email Trigger (IMAP): Configura las credenciales necesarias
   - Slack: Configura las credenciales necesarias
   - Notify about missing attachment: Configura las credenciales necesarias
   - Analyze email with Sublime Security: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n

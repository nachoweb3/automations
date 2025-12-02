# Restore your credentials from GitHub

## Archivo
1147_Splitout_GitHub_Automation_Webhook.json

## Descripción

## Nodos utilizados (11 total)

### n8n-nodes-base.extractFromFile
- Convert files to JSON

### n8n-nodes-base.github
- Get file content from GitHub

### n8n-nodes-base.httpRequest
- Get all files in given path

### n8n-nodes-base.if
- Check for skipped Credentials

### n8n-nodes-base.manualTrigger
- When clicking ‘Test workflow’

### n8n-nodes-base.n8n
- Restore n8n Credentials

### n8n-nodes-base.set
- Globals

### n8n-nodes-base.splitOut
- Split the result

### n8n-nodes-base.stickyNote
- Sticky Note1
- Sticky Note4
- Sticky Note

## Tags
- N8n

## Configuración

1. Importa el archivo `1147_Splitout_GitHub_Automation_Webhook.json` en n8n
2. Revisa las credenciales necesarias:
   - Get all files in given path: Configura las credenciales necesarias
   - Get file content from GitHub: Configura las credenciales necesarias
   - Restore n8n Credentials: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n

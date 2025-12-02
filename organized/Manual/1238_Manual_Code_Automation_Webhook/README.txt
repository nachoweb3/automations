# 3D Figurine Orthographic Views with Midjourney and GPT-4o-Image API

## Archivo
1238_Manual_Code_Automation_Webhook.json

## Descripción

## Nodos utilizados (10 total)

### n8n-nodes-base.code
- Get Random Image URL
- Get Final Output
- Get Image

### n8n-nodes-base.httpRequest
- Midjourney Generator
- Get Midjourney URL
- Generation 3-view Image with GPT-4o-Image

### n8n-nodes-base.if
- Verify URL Acquisition
- Check if the URL is obtained

### n8n-nodes-base.manualTrigger
- When clicking ‘Test workflow’

### n8n-nodes-base.wait
- Wait for Generation

## Configuración

1. Importa el archivo `1238_Manual_Code_Automation_Webhook.json` en n8n
2. Revisa las credenciales necesarias:
   - Generation 3-view Image with GPT-4o-Image: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n

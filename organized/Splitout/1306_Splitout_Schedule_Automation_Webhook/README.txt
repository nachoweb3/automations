# Hugging Face to Notion

## Archivo
1306_Splitout_Schedule_Automation_Webhook.json

## Descripción

## Nodos utilizados (11 total)

### @n8n/n8n-nodes-langchain.openAi
- OpenAI Analysis Abstract

### n8n-nodes-base.html
- Extract Hugging Face Paper
- Extract Hugging Face Paper Abstract

### n8n-nodes-base.httpRequest
- Request Hugging Face Paper
- Request Hugging Face Paper Detail

### n8n-nodes-base.if
- If

### n8n-nodes-base.notion
- Check Paper URL Existed
- Store Abstract Notion

### n8n-nodes-base.scheduleTrigger
- Schedule Trigger

### n8n-nodes-base.splitInBatches
- Loop Over Items

### n8n-nodes-base.splitOut
- Split Out

## Configuración

1. Importa el archivo `1306_Splitout_Schedule_Automation_Webhook.json` en n8n
2. Revisa las credenciales necesarias:
   - Check Paper URL Existed: Configura las credenciales necesarias
   - OpenAI Analysis Abstract: Configura las credenciales necesarias
   - Store Abstract Notion: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n

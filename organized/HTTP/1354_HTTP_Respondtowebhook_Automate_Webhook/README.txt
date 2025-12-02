# Bitrix24 Chatbot Application Workflow example with Webhook Integration

## Archivo
1354_HTTP_Respondtowebhook_Automate_Webhook.json

## Descripción

## Nodos utilizados (13 total)

### n8n-nodes-base.function
- Process Message
- Process Join
- Process Install

### n8n-nodes-base.httpRequest
- Register Bot
- Send Message
- Send Join Message

### n8n-nodes-base.if
- Validate Token

### n8n-nodes-base.noOp
- Process Delete

### n8n-nodes-base.respondToWebhook
- Success Response
- Error Response

### n8n-nodes-base.set
- Credentials

### n8n-nodes-base.switch
- Route Event

### n8n-nodes-base.webhook
- Bitrix24 Handler

## Tags
- Tech demo
- Bitrix24
- Chatbot

## Configuración

1. Importa el archivo `1354_HTTP_Respondtowebhook_Automate_Webhook.json` en n8n
2. Revisa las credenciales necesarias:
   - No se detectaron credenciales específicas (revisa manualmente)
3. Activa el workflow desde la interfaz de n8n

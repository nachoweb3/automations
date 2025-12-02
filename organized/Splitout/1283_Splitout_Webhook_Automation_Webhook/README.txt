# 1283_Splitout_Webhook_Automation_Webhook

## Archivo
1283_Splitout_Webhook_Automation_Webhook.json

## Descripción

## Nodos utilizados (40 total)

### @n8n/n8n-nodes-langchain.agent
- AI Agent

### @n8n/n8n-nodes-langchain.chatTrigger
- Chat Trigger

### @n8n/n8n-nodes-langchain.lmChatOpenAi
- OpenAI Chat Model

### @n8n/n8n-nodes-langchain.memoryBufferWindow
- Window Buffer Memory

### @n8n/n8n-nodes-langchain.toolWorkflow
- WooCommerce_Tool

### n8n-nodes-base.aggregate
- Aggregate

### n8n-nodes-base.code
- Decrypt email
- Encrypt email
- Decrypt email address

### n8n-nodes-base.dhl
- DHL

### n8n-nodes-base.executeWorkflowTrigger
- Execute Workflow Trigger

### n8n-nodes-base.httpRequest
- WooCommerce Get Orders

### n8n-nodes-base.if
- If email provided
- If user found
- If contains DHL data
- If order found

### n8n-nodes-base.merge
- Merge Orders
- Merge Order and Tracking Data
- Merge Tracking Data

### n8n-nodes-base.respondToWebhook
- Respond to Webhook

### n8n-nodes-base.set
- No email provided
- No customer found
- Extract Tracking Data
- No order found
- Add Error Information
- Send Response
- Example encrypted email
- Mock Data

### n8n-nodes-base.splitOut
- Split Out

### n8n-nodes-base.stickyNote
- Sticky Note
- Sticky Note1
- Sticky Note2
- Sticky Note3
- Sticky Note4
- Sticky Note5
- Sticky Note6
- Sticky Note8
- Sticky Note7

### n8n-nodes-base.webhook
- Webhook Example Page

### n8n-nodes-base.wooCommerce
- WooCommerce - Get User

## Configuración

1. Importa el archivo `1283_Splitout_Webhook_Automation_Webhook.json` en n8n
2. Revisa las credenciales necesarias:
   - WooCommerce - Get User: Configura las credenciales necesarias
   - WooCommerce Get Orders: Configura las credenciales necesarias
   - DHL: Configura las credenciales necesarias
   - OpenAI Chat Model: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n

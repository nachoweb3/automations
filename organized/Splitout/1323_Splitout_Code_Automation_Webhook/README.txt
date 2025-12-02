# Auto-Tag Blog Posts in WordPress with AI

## Archivo
1323_Splitout_Code_Automation_Webhook.json

## Descripción

## Nodos utilizados (32 total)

### @n8n/n8n-nodes-langchain.chainLlm
- Generate tags for article

### @n8n/n8n-nodes-langchain.lmChatOpenAi
- OpenAI Chat Model
- OpenAI Chat Model1

### @n8n/n8n-nodes-langchain.outputParserAutofixing
- Auto-fixing Output Parser

### @n8n/n8n-nodes-langchain.outputParserStructured
- Structured Output Parser

### n8n-nodes-base.aggregate
- Combine tag_ids
- Combine slugs

### n8n-nodes-base.code
- Return missing tags

### n8n-nodes-base.executeWorkflow
- Auto-Tag Posts in WordPress

### n8n-nodes-base.executeWorkflowTrigger
- Demo Usage in Another Workflow

### n8n-nodes-base.filter
- Keep matches

### n8n-nodes-base.httpRequest
- GET WP tags
- POST WP tags
- GET updated WP tags

### n8n-nodes-base.if
- If

### n8n-nodes-base.rssFeedReadTrigger
- RSS Feed Trigger

### n8n-nodes-base.set
- Return article details
- SET initial record
- MOCK article

### n8n-nodes-base.splitInBatches
- Loop over articles

### n8n-nodes-base.splitOut
- Split Out

### n8n-nodes-base.stickyNote
- Sticky Note1
- Sticky Note2
- Sticky Note
- Sticky Note3
- Sticky Note4
- Sticky Note5
- Sticky Note6
- Sticky Note7
- Sticky Note8
- Sticky Note9

### n8n-nodes-base.wordpress
- Wordpress

## Tags
- marketing

## Configuración

1. Importa el archivo `1323_Splitout_Code_Automation_Webhook.json` en n8n
2. Revisa las credenciales necesarias:
   - OpenAI Chat Model: Configura las credenciales necesarias
   - OpenAI Chat Model1: Configura las credenciales necesarias
   - GET WP tags: Configura las credenciales necesarias
   - POST WP tags: Configura las credenciales necesarias
   - GET updated WP tags: Configura las credenciales necesarias
   - Wordpress: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n

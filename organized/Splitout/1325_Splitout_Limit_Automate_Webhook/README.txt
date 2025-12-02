# 1325_Splitout_Limit_Automate_Webhook

## Archivo
1325_Splitout_Limit_Automate_Webhook.json

## Descripción

## Nodos utilizados (27 total)

### @n8n/n8n-nodes-langchain.chainLlm
- Capture Existing Article Structure

### @n8n/n8n-nodes-langchain.informationExtractor
- Extract Voice Characteristics
- Content Generation Agent

### @n8n/n8n-nodes-langchain.lmChatOpenAi
- OpenAI Chat Model
- OpenAI Chat Model1
- OpenAI Chat Model2

### n8n-nodes-base.aggregate
- Combine Articles

### n8n-nodes-base.html
- Extract Article URLs
- Extract Article Content

### n8n-nodes-base.httpRequest
- Get Blog
- Get Article

### n8n-nodes-base.limit
- Latest Articles

### n8n-nodes-base.manualTrigger
- When clicking ‘Test workflow’

### n8n-nodes-base.markdown
- Markdown

### n8n-nodes-base.merge
- Article Style & Brand Voice

### n8n-nodes-base.set
- New Article Instruction

### n8n-nodes-base.splitOut
- Split Out URLs

### n8n-nodes-base.stickyNote
- Sticky Note
- Sticky Note1
- Sticky Note2
- Sticky Note3
- Sticky Note4
- Sticky Note6
- Sticky Note5
- Sticky Note7
- Sticky Note8

### n8n-nodes-base.wordpress
- Save as Draft

## Configuración

1. Importa el archivo `1325_Splitout_Limit_Automate_Webhook.json` en n8n
2. Revisa las credenciales necesarias:
   - OpenAI Chat Model: Configura las credenciales necesarias
   - OpenAI Chat Model1: Configura las credenciales necesarias
   - OpenAI Chat Model2: Configura las credenciales necesarias
   - Save as Draft: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n

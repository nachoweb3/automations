# 1324_Aggregate_Gmail_Send_Triggered

## Archivo
1324_Aggregate_Gmail_Send_Triggered.json

## Descripción

## Nodos utilizados (19 total)

### @n8n/n8n-nodes-langchain.chainLlm
- Assign labels for message

### @n8n/n8n-nodes-langchain.lmChatOpenAi
- OpenAI Chat

### @n8n/n8n-nodes-langchain.outputParserStructured
- JSON Parser

### n8n-nodes-base.aggregate
- Aggregate label IDs

### n8n-nodes-base.gmail
- Get message content
- Get all labels
- Add labels to message

### n8n-nodes-base.gmailTrigger
- Gmail trigger

### n8n-nodes-base.merge
- Merge corresponding labels

### n8n-nodes-base.set
- Set label values

### n8n-nodes-base.splitOut
- Split out assigned labels

### n8n-nodes-base.stickyNote
- Sticky Note
- Sticky Note1
- Sticky Note2
- Sticky Note4
- Sticky Note5
- Sticky Note6
- Sticky Note7
- Sticky Note8

## Configuración

1. Importa el archivo `1324_Aggregate_Gmail_Send_Triggered.json` en n8n
2. Revisa las credenciales necesarias:
   - Gmail trigger: Configura las credenciales necesarias
   - Get message content: Configura las credenciales necesarias
   - Get all labels: Configura las credenciales necesarias
   - Add labels to message: Configura las credenciales necesarias
   - OpenAI Chat: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n

# 1353_Stickynote_Gmail_Send_Triggered

## Archivo
1353_Stickynote_Gmail_Send_Triggered.json

## Descripción

## Nodos utilizados (13 total)

### @n8n/n8n-nodes-langchain.agent
- Gmail labelling agent

### @n8n/n8n-nodes-langchain.lmChatOpenAi
- OpenAI Chat Model1

### @n8n/n8n-nodes-langchain.memoryBufferWindow
- Window Buffer Memory

### n8n-nodes-base.gmailTool
- Gmail - read labels
- Gmail - get message
- Gmail - add label to message
- Gmail - create label

### n8n-nodes-base.gmailTrigger
- Gmail Trigger

### n8n-nodes-base.stickyNote
- Sticky Note
- Sticky Note1
- Sticky Note2
- Sticky Note3

### n8n-nodes-base.wait
- Wait

## Configuración

1. Importa el archivo `1353_Stickynote_Gmail_Send_Triggered.json` en n8n
2. Revisa las credenciales necesarias:
   - Gmail Trigger: Configura las credenciales necesarias
   - OpenAI Chat Model1: Configura las credenciales necesarias
   - Gmail - read labels: Configura las credenciales necesarias
   - Gmail - get message: Configura las credenciales necesarias
   - Gmail - add label to message: Configura las credenciales necesarias
   - Gmail - create label: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n

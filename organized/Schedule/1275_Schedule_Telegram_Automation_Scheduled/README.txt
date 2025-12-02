# 1275_Schedule_Telegram_Automation_Scheduled

## Archivo
1275_Schedule_Telegram_Automation_Scheduled.json

## Descripción

## Nodos utilizados (15 total)

### @n8n/n8n-nodes-langchain.chainSummarization
- Create a Prompt for DALL-E
- Translate the Story to Arabic
- Create a Story for Kids

### @n8n/n8n-nodes-langchain.lmChatOpenAi
- OpenAI Chat Model
- OpenAI Chat Model1
- OpenAI Chat Model2

### @n8n/n8n-nodes-langchain.openAi
- Generate an Image for the Story
- Generate Audio for the Story

### @n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter
- Recursive Character Text Splitter

### n8n-nodes-base.scheduleTrigger
- Schedule Trigger

### n8n-nodes-base.stickyNote
- Sticky Note
- Sticky Note1

### n8n-nodes-base.telegram
- Send the Story To Channel
- Send Image to the Channel
- Send Audio to the Channel

## Configuración

1. Importa el archivo `1275_Schedule_Telegram_Automation_Scheduled.json` en n8n
2. Revisa las credenciales necesarias:
   - OpenAI Chat Model: Configura las credenciales necesarias
   - OpenAI Chat Model1: Configura las credenciales necesarias
   - OpenAI Chat Model2: Configura las credenciales necesarias
   - Generate an Image for the Story: Configura las credenciales necesarias
   - Generate Audio for the Story: Configura las credenciales necesarias
   - Send the Story To Channel: Configura las credenciales necesarias
   - Send Image to the Channel: Configura las credenciales necesarias
   - Send Audio to the Channel: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n

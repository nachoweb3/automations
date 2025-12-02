# 1276_Schedule_Telegram_Automation_Scheduled

## Archivo
1276_Schedule_Telegram_Automation_Scheduled.json

## Descripción

## Nodos utilizados (14 total)

### @n8n/n8n-nodes-langchain.chainSummarization
- Create a Prompt for DALL-E
- Create a story

### @n8n/n8n-nodes-langchain.lmChatOpenAi
- OpenAI Chat Model
- OpenAI Chat Model2

### @n8n/n8n-nodes-langchain.openAi
- Generate Audio for the story
- Generate a Picture for the story

### @n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter
- Recursive Character Text Splitter

### n8n-nodes-base.scheduleTrigger
- Schedule Trigger

### n8n-nodes-base.set
- Config

### n8n-nodes-base.stickyNote
- Sticky Note
- Sticky Note1

### n8n-nodes-base.telegram
- Send Story Text
- Send Audio for the story
- Send Story Picture

## Configuración

1. Importa el archivo `1276_Schedule_Telegram_Automation_Scheduled.json` en n8n
2. Revisa las credenciales necesarias:
   - OpenAI Chat Model: Configura las credenciales necesarias
   - OpenAI Chat Model2: Configura las credenciales necesarias
   - Generate Audio for the story: Configura las credenciales necesarias
   - Generate a Picture for the story: Configura las credenciales necesarias
   - Send Story Text: Configura las credenciales necesarias
   - Send Audio for the story: Configura las credenciales necesarias
   - Send Story Picture: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n

# Complete Youtube

## Archivo
1264_Code_HTTP_Automation_Webhook.json

## Descripción

## Nodos utilizados (15 total)

### @n8n/n8n-nodes-langchain.agent
- AI Agent

### @n8n/n8n-nodes-langchain.chatTrigger
- chat_message_received

### @n8n/n8n-nodes-langchain.lmChatOpenAi
- openai_llm

### @n8n/n8n-nodes-langchain.memoryBufferWindow
- window_buffer_memory

### @n8n/n8n-nodes-langchain.toolWorkflow
- youtube_search

### n8n-nodes-base.code
- save_data_to_memory1
- retrieve_data_from_memory1

### n8n-nodes-base.httpRequest
- find_video_data1

### n8n-nodes-base.if
- if_longer_than_3_

### n8n-nodes-base.set
- response1
- group_data1

### n8n-nodes-base.splitInBatches
- loop_over_items1

### n8n-nodes-base.stickyNote
- Sticky Note1
- Sticky Note2

### n8n-nodes-base.youTube
- get_videos1

## Configuración

1. Importa el archivo `1264_Code_HTTP_Automation_Webhook.json` en n8n
2. Revisa las credenciales necesarias:
   - get_videos1: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n

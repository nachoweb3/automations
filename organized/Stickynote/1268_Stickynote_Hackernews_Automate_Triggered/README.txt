# 1268_Stickynote_Hackernews_Automate_Triggered

## Archivo
1268_Stickynote_Hackernews_Automate_Triggered.json

## Descripción

## Nodos utilizados (12 total)

### @n8n/n8n-nodes-langchain.agent
- AI Agent

### @n8n/n8n-nodes-langchain.lmChatOpenAi
- OpenAI Chat Model

### @n8n/n8n-nodes-langchain.manualChatTrigger
- On new manual Chat Message

### @n8n/n8n-nodes-langchain.toolWorkflow
- Custom tool to call the wf below

### n8n-nodes-base.code
- Stringify

### n8n-nodes-base.executeWorkflowTrigger
- Execute Workflow Trigger

### n8n-nodes-base.hackerNews
- Hacker News

### n8n-nodes-base.set
- Clean up data

### n8n-nodes-base.stickyNote
- Sticky Note
- Sticky Note1
- Sticky Note2
- Sticky Note3

## Configuración

1. Importa el archivo `1268_Stickynote_Hackernews_Automate_Triggered.json` en n8n
2. Revisa las credenciales necesarias:
   - OpenAI Chat Model: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n

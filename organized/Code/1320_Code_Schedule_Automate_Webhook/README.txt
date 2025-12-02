# Blog Automation TEMPLATE

## Archivo
1320_Code_Schedule_Automate_Webhook.json

## Descripción

## Nodos utilizados (35 total)

### @n8n/n8n-nodes-langchain.chainLlm
- Basic LLM Chain

### @n8n/n8n-nodes-langchain.lmChatOpenAi
- AgentLLM

### n8n-nodes-base.code
- Config
- PreparedData
- RecombinedDataRow
- PrepareXmlPost
- HandleXMLRPCResponse

### n8n-nodes-base.googleSheets
- Schedule
- fetchConfig
- SaveBackToSheet
- SetToPublish
- LogStatus
- LogPublished

### n8n-nodes-base.httpRequest
- CreatePost

### n8n-nodes-base.if
- IfScheduledNow
- IfActionPublish
- IfTakeAction
- IfPromptExists
- PostingSuccessful

### n8n-nodes-base.manualTrigger
- ManualTrigger

### n8n-nodes-base.scheduleTrigger
- ScheduleTrigger

### n8n-nodes-base.set
- Settings

### n8n-nodes-base.stickyNote
- Sticky Note
- Sticky Note1
- Sticky Note2
- Sticky Note3
- Sticky Note4
- Sticky Note5
- Sticky Note6
- Sticky Note7
- Sticky Note8
- Sticky Note9
- Sticky Note10
- Sticky Note11
- Sticky Note12

## Tags
- Published Template

## Configuración

1. Importa el archivo `1320_Code_Schedule_Automate_Webhook.json` en n8n
2. Revisa las credenciales necesarias:
   - Schedule: Configura las credenciales necesarias
   - fetchConfig: Configura las credenciales necesarias
   - AgentLLM: Configura las credenciales necesarias
   - SaveBackToSheet: Configura las credenciales necesarias
   - SetToPublish: Configura las credenciales necesarias
   - LogStatus: Configura las credenciales necesarias
   - LogPublished: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n

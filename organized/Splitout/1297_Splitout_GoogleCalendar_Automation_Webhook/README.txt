# 1297_Splitout_GoogleCalendar_Automation_Webhook

## Archivo
1297_Splitout_GoogleCalendar_Automation_Webhook.json

## Descripción

## Nodos utilizados (28 total)

### @n8n/n8n-nodes-langchain.agent
- AI Agent

### @n8n/n8n-nodes-langchain.lmChatOpenAi
- OpenAI Chat Model1

### @n8n/n8n-nodes-langchain.outputParserStructured
- Structured Output Parser

### @n8n/n8n-nodes-langchain.toolWorkflow
- Schedule Meeting

### n8n-nodes-base.executeWorkflowTrigger
- Execute Workflow Trigger

### n8n-nodes-base.extractFromFile
- PDF Loader

### n8n-nodes-base.googleCalendar
- Get Calendar Event
- Add Attendee to Invite
- Create Calendar Event1

### n8n-nodes-base.googleDrive
- Get Transcript File

### n8n-nodes-base.httpRequest
- Get Meeting ConferenceRecords
- Get Meeting Transcript Location

### n8n-nodes-base.manualTrigger
- When clicking "Test workflow"

### n8n-nodes-base.set
- Response
- Edit Fields
- Fallback Response
- Get Attendees

### n8n-nodes-base.splitOut
- Attendees List

### n8n-nodes-base.stickyNote
- Sticky Note
- Sticky Note2
- Sticky Note3
- Sticky Note4
- Sticky Note6
- Sticky Note5
- Sticky Note1
- Sticky Note7
- Sticky Note8

### n8n-nodes-base.switch
- Actions Router

## Configuración

1. Importa el archivo `1297_Splitout_GoogleCalendar_Automation_Webhook.json` en n8n
2. Revisa las credenciales necesarias:
   - OpenAI Chat Model1: Configura las credenciales necesarias
   - Get Meeting ConferenceRecords: Configura las credenciales necesarias
   - Get Meeting Transcript Location: Configura las credenciales necesarias
   - Get Transcript File: Configura las credenciales necesarias
   - Get Calendar Event: Configura las credenciales necesarias
   - Add Attendee to Invite: Configura las credenciales necesarias
   - Create Calendar Event1: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n

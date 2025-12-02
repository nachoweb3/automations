# 1333_Splitout_GoogleCalendar_Automate_Webhook

## Archivo
1333_Splitout_GoogleCalendar_Automate_Webhook.json

## Descripción

## Nodos utilizados (61 total)

### @n8n/n8n-nodes-langchain.chainLlm
- Correspondance Recap Agent
- Attendee Research Agent
- LinkedIn Summarizer Agent

### @n8n/n8n-nodes-langchain.informationExtractor
- Extract Attendee Information

### @n8n/n8n-nodes-langchain.lmChatOpenAi
- OpenAI Chat Model2
- OpenAI Chat Model
- OpenAI Chat Model1
- OpenAI Chat Model3

### n8n-nodes-base.aggregate
- Aggregate Attendees
- Activities To Array

### n8n-nodes-base.executeWorkflow
- Get Correspondance
- Get LinkedIn Profile & Activity

### n8n-nodes-base.executeWorkflowTrigger
- Execute Workflow Trigger

### n8n-nodes-base.gmail
- Get Message Contents
- Get Last Correspondence

### n8n-nodes-base.googleCalendar
- Check For Upcoming Meetings

### n8n-nodes-base.html
- Extract Profile Metadata
- Get Activity Details
- Get Sections
- Extract Activities
- Extract About

### n8n-nodes-base.httpRequest
- APIFY Web Scraper

### n8n-nodes-base.if
- Has Emails?
- Has Email Address?
- Has LinkedIn URL?
- Is Scrape Successful?

### n8n-nodes-base.merge
- Merge
- Merge1

### n8n-nodes-base.scheduleTrigger
- Schedule Trigger

### n8n-nodes-base.set
- Simplify Emails
- Return LinkedIn Success
- Return LinkedIn Error
- Return Email Error
- Return Email Success
- Set Route Email
- Set Route Linkedin
- Return LinkedIn Error1
- Return Email Error1
- Set LinkedIn Cookie
- Merge Attendee with Summaries
- Get About Section
- Get Activity Section

### n8n-nodes-base.splitOut
- Sections To List
- Attendees to List
- Activities To List

### n8n-nodes-base.stickyNote
- Sticky Note
- Sticky Note1
- Sticky Note2
- Sticky Note3
- Sticky Note4
- Sticky Note5
- Sticky Note6
- Sticky Note7
- Sticky Note9
- Sticky Note8
- Sticky Note10
- Sticky Note11
- Sticky Note12
- Sticky Note13

### n8n-nodes-base.switch
- Router

### n8n-nodes-base.whatsApp
- WhatsApp Business Cloud

## Configuración

1. Importa el archivo `1333_Splitout_GoogleCalendar_Automate_Webhook.json` en n8n
2. Revisa las credenciales necesarias:
   - Get Message Contents: Configura las credenciales necesarias
   - Check For Upcoming Meetings: Configura las credenciales necesarias
   - OpenAI Chat Model2: Configura las credenciales necesarias
   - OpenAI Chat Model: Configura las credenciales necesarias
   - Get Last Correspondence: Configura las credenciales necesarias
   - OpenAI Chat Model1: Configura las credenciales necesarias
   - OpenAI Chat Model3: Configura las credenciales necesarias
   - WhatsApp Business Cloud: Configura las credenciales necesarias
   - APIFY Web Scraper: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n

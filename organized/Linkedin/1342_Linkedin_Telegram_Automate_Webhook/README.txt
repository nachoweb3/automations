# ✨🩷Automated Social Media Content Publishing Factory + System Prompt Composition

## Archivo
1342_Linkedin_Telegram_Automate_Webhook.json

## Descripción

## Nodos utilizados (100 total)

### @n8n/n8n-nodes-langchain.agent
- Social Media Content Creator
- Prepare Email Contents
- 🤖Social Media Router Agent
- Prepare Social Media Email Contents

### @n8n/n8n-nodes-langchain.chatTrigger
- When chat message received

### @n8n/n8n-nodes-langchain.lmChatOpenAi
- gpt-40-mini
- gpt-40-mini1
- gpt-4o-mini
- gpt-4o

### @n8n/n8n-nodes-langchain.memoryBufferWindow
- Window Buffer Memory

### @n8n/n8n-nodes-langchain.toolSerpApi
- SerpAPI

### @n8n/n8n-nodes-langchain.toolWorkflow
- X-Twiter
- Instagram
- Facebook
- LinkedIn
- Short
- YouTube Short

### n8n-nodes-base.code
- Parse Schema
- Parse System Prompt

### n8n-nodes-base.executeWorkflowTrigger
- When Executed by Another Workflow

### n8n-nodes-base.extractFromFile
- Extract as JSON

### n8n-nodes-base.facebookGraphApi
- Instragram Post
- Facebook Post

### n8n-nodes-base.gmail
- Gmail
- Gmail User for Approval

### n8n-nodes-base.googleDocs
- Social Media Schema
- Social Media System Prompt

### n8n-nodes-base.googleDrive
- Save Image to Google Drive
- Save Social Post to Google Drive
- Get Social Post from Google Drive

### n8n-nodes-base.httpRequest
- pollinations.ai1
- Save Image to imgbb.com
- Instagram Image
- Get Social Post Image

### n8n-nodes-base.if
- Is Approved?

### n8n-nodes-base.linkedIn
- LinkedIn Post

### n8n-nodes-base.merge
- Merge Prompts and Schema
- Merge
- Merge Image and Post Contents

### n8n-nodes-base.noOp
- Implement Threads Here
- Implement YouTube Shorts Here

### n8n-nodes-base.set
- Schema
- System Prompt
- Compose Prompt & Schema
- Social Content
- Google Drive Image Meta
- Social Post JSON
- Respond with Google Drive Id
- File Id
- X Response
- Instagram Response
- Facebook Response
- LinkedIn Response

### n8n-nodes-base.stickyNote
- Sticky Note20
- Sticky Note21
- Sticky Note22
- Sticky Note32
- Sticky Note33
- Sticky Note34
- Sticky Note35
- Sticky Note36
- Sticky Note37
- Sticky Note38
- Sticky Note18
- Sticky Note25
- Sticky Note26
- Sticky Note41
- Sticky Note42
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
- Sticky Note13
- Sticky Note14
- Sticky Note15
- Sticky Note16
- Sticky Note17
- Sticky Note19
- Sticky Note23
- Sticky Note24
- Sticky Note27
- Sticky Note28
- Sticky Note29
- Sticky Note30
- Sticky Note43
- Sticky Note44
- Sticky Note45

### n8n-nodes-base.switch
- Social Media Publishing Router

### n8n-nodes-base.telegram
- Telegram Success Message (Optional)
- Telegram Error Message (Optional)

### n8n-nodes-base.twitter
- X Post

## Configuración

1. Importa el archivo `1342_Linkedin_Telegram_Automate_Webhook.json` en n8n
2. Revisa las credenciales necesarias:
   - Gmail: Configura las credenciales necesarias
   - Social Media Schema: Configura las credenciales necesarias
   - Social Media System Prompt: Configura las credenciales necesarias
   - gpt-40-mini: Configura las credenciales necesarias
   - Instagram Image: Configura las credenciales necesarias
   - X Post: Configura las credenciales necesarias
   - Instragram Post: Configura las credenciales necesarias
   - Facebook Post: Configura las credenciales necesarias
   - LinkedIn Post: Configura las credenciales necesarias
   - Gmail User for Approval: Configura las credenciales necesarias
   - gpt-40-mini1: Configura las credenciales necesarias
   - gpt-4o-mini: Configura las credenciales necesarias
   - Save Image to Google Drive: Configura las credenciales necesarias
   - Save Social Post to Google Drive: Configura las credenciales necesarias
   - Telegram Success Message (Optional): Configura las credenciales necesarias
   - Telegram Error Message (Optional): Configura las credenciales necesarias
   - Get Social Post from Google Drive: Configura las credenciales necesarias
   - SerpAPI: Configura las credenciales necesarias
   - gpt-4o: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n

# 1328_Jiratool_Schedule_Automate_Scheduled

## Archivo
1328_Jiratool_Schedule_Automate_Scheduled.json

## Descripción

## Nodos utilizados (36 total)

### @n8n/n8n-nodes-langchain.agent
- KnowledgeBase Agent

### @n8n/n8n-nodes-langchain.chainLlm
- Issue Reminder Agent

### @n8n/n8n-nodes-langchain.lmChatOpenAi
- OpenAI Chat Model
- OpenAI Chat Model1
- OpenAI Chat Model3
- OpenAI Chat Model4

### @n8n/n8n-nodes-langchain.outputParserStructured
- Structured Output Parser

### @n8n/n8n-nodes-langchain.sentimentAnalysis
- Customer Satisfaction Agent

### @n8n/n8n-nodes-langchain.textClassifier
- Classify Current Issue State

### n8n-nodes-base.aggregate
- Join Comments

### n8n-nodes-base.executeWorkflow
- Execute Workflow

### n8n-nodes-base.executeWorkflowTrigger
- Execute Workflow Trigger

### n8n-nodes-base.if
- Solution Found?
- Last Message is Not Bot

### n8n-nodes-base.jira
- Get Issue Comments
- Close Issue
- Send Reminder
- Add Autoclose Message
- Ask For Feedback Message
- Reply to Issue
- Close Issue2
- Get List of Unresolved Long Lived Issues

### n8n-nodes-base.jiraTool
- Find Simlar Issues

### n8n-nodes-base.notionTool
- Query KnowledgeBase

### n8n-nodes-base.scheduleTrigger
- Schedule Trigger

### n8n-nodes-base.set
- Simplify Thread For AI
- Get Issue Metadata

### n8n-nodes-base.slack
- Notify Slack Channel
- Report Unhappy Resolution

### n8n-nodes-base.stickyNote
- Sticky Note1
- Sticky Note2
- Sticky Note3
- Sticky Note4
- Sticky Note5
- Sticky Note6
- Sticky Note

## Configuración

1. Importa el archivo `1328_Jiratool_Schedule_Automate_Scheduled.json` en n8n
2. Revisa las credenciales necesarias:
   - OpenAI Chat Model: Configura las credenciales necesarias
   - OpenAI Chat Model1: Configura las credenciales necesarias
   - OpenAI Chat Model3: Configura las credenciales necesarias
   - OpenAI Chat Model4: Configura las credenciales necesarias
   - Get Issue Comments: Configura las credenciales necesarias
   - Close Issue: Configura las credenciales necesarias
   - Send Reminder: Configura las credenciales necesarias
   - Add Autoclose Message: Configura las credenciales necesarias
   - Ask For Feedback Message: Configura las credenciales necesarias
   - Reply to Issue: Configura las credenciales necesarias
   - Notify Slack Channel: Configura las credenciales necesarias
   - Close Issue2: Configura las credenciales necesarias
   - Get List of Unresolved Long Lived Issues: Configura las credenciales necesarias
   - Find Simlar Issues: Configura las credenciales necesarias
   - Query KnowledgeBase: Configura las credenciales necesarias
   - Report Unhappy Resolution: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n

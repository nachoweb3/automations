# SHEETS RAG

## Archivo
1144_Postgres_Code_Automation_Triggered.json

## Descripción

## Nodos utilizados (23 total)

### @n8n/n8n-nodes-langchain.agent
- AI Agent With SQL Query Prompt

### @n8n/n8n-nodes-langchain.lmChatGoogleGemini
- Google Gemini Chat Model

### @n8n/n8n-nodes-langchain.manualChatTrigger
- When chat message received

### @n8n/n8n-nodes-langchain.toolWorkflow
- execute_query_tool
- get_postgres_schema

### n8n-nodes-base.code
- create table query
- create insertion query
- schema to string

### n8n-nodes-base.executeWorkflowTrigger
- Execute Workflow Trigger

### n8n-nodes-base.googleDriveTrigger
- Google Drive Trigger

### n8n-nodes-base.googleSheets
- fetch sheet data

### n8n-nodes-base.if
- is not in database

### n8n-nodes-base.postgres
- table exists?
- remove table
- create table
- perform insertion
- sql query executor
- schema finder

### n8n-nodes-base.set
- change_this
- response output

### n8n-nodes-base.stickyNote
- Sticky Note
- Sticky Note1
- Sticky Note2

## Configuración

1. Importa el archivo `1144_Postgres_Code_Automation_Triggered.json` en n8n
2. Revisa las credenciales necesarias:
   - Google Drive Trigger: Configura las credenciales necesarias
   - Google Gemini Chat Model: Configura las credenciales necesarias
   - table exists?: Configura las credenciales necesarias
   - fetch sheet data: Configura las credenciales necesarias
   - remove table: Configura las credenciales necesarias
   - create table: Configura las credenciales necesarias
   - perform insertion: Configura las credenciales necesarias
   - sql query executor: Configura las credenciales necesarias
   - schema finder: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n

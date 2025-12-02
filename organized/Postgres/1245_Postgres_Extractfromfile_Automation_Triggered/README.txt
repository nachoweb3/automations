# Translate questions about e-mails into SQL queries and run them

## Archivo
1245_Postgres_Extractfromfile_Automation_Triggered.json

## Descripción

## Nodos utilizados (26 total)

### @n8n/n8n-nodes-langchain.agent
- AI Agent

### @n8n/n8n-nodes-langchain.chatTrigger
- Chat Trigger

### @n8n/n8n-nodes-langchain.lmChatOllama
- Ollama Chat Model

### n8n-nodes-base.convertToFile
- Convert data to binary

### n8n-nodes-base.executeWorkflowTrigger
- WorkflowTrigger

### n8n-nodes-base.extractFromFile
- Extract data from file

### n8n-nodes-base.if
- Check if query exists
- Check for trailing semicolon
- If ran manually
- If file exists or already retried generating it

### n8n-nodes-base.manualTrigger
- When clicking "Test workflow"

### n8n-nodes-base.merge
- Combine query result and chat answer

### n8n-nodes-base.postgres
- List all columns in a table
- List all tables in a database
- Postgres

### n8n-nodes-base.readWriteFile
- Save file locally
- Load the schema from the local file

### n8n-nodes-base.set
- Add table name to output
- Combine schema data and chat input
- Extract SQL query
- Format query results
- Add trailing semicolon
- Format empty output

### n8n-nodes-base.stickyNote
- Sticky Note
- Sticky Note1
- Sticky Note2

## Configuración

1. Importa el archivo `1245_Postgres_Extractfromfile_Automation_Triggered.json` en n8n
2. Revisa las credenciales necesarias:
   - List all columns in a table: Configura las credenciales necesarias
   - List all tables in a database: Configura las credenciales necesarias
   - Ollama Chat Model: Configura las credenciales necesarias
   - Postgres: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n

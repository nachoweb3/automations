# BambooHR AI-Powered Company Policies and Benefits Chatbot

## Archivo
1352_Splitout_Filter_Automate_Triggered.json

## Descripción

## Nodos utilizados (50 total)

### @n8n/n8n-nodes-langchain.agent
- HR AI Agent

### @n8n/n8n-nodes-langchain.chainLlm
- Identify most senior employee

### @n8n/n8n-nodes-langchain.chatTrigger
- Employee initiates a conversation

### @n8n/n8n-nodes-langchain.documentDefaultDataLoader
- Default Data Loader

### @n8n/n8n-nodes-langchain.embeddingsOpenAi
- Embeddings OpenAI
- Embeddings OpenAI1

### @n8n/n8n-nodes-langchain.informationExtractor
- Extract department

### @n8n/n8n-nodes-langchain.lmChatOpenAi
- OpenAI Chat Model
- OpenAI Chat Model1
- OpenAI Chat Model2
- OpenAI Chat Model3
- OpenAI Chat Model4
- OpenAI Chat Model5

### @n8n/n8n-nodes-langchain.memoryBufferWindow
- Window Buffer Memory

### @n8n/n8n-nodes-langchain.outputParserAutofixing
- Auto-fixing Output Parser

### @n8n/n8n-nodes-langchain.outputParserStructured
- Structured Output Parser

### @n8n/n8n-nodes-langchain.textClassifier
- Text Classifier

### @n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter
- Recursive Character Text Splitter

### @n8n/n8n-nodes-langchain.toolVectorStore
- Vector Store Tool

### @n8n/n8n-nodes-langchain.toolWorkflow
- Employee Lookup Tool

### @n8n/n8n-nodes-langchain.vectorStoreSupabase
- Supabase Vector Store
- Supabase Vector Store Retrieval

### n8n-nodes-base.aggregate
- Extract departments
- Extract relevant employee fields

### n8n-nodes-base.bambooHr
- GET all files
- Download file from BambooHR
- GET all employees
- GET all employees (second path)
- Retrieve all employees

### n8n-nodes-base.executeWorkflowTrigger
- AI-Powered HR Benefits and Company Policies Chatbot

### n8n-nodes-base.filter
- Filter out files from undesired categories
- Filter out non-pdf files
- Filter out other employees
- Filter out other departments

### n8n-nodes-base.manualTrigger
- When clicking ‘Test workflow’

### n8n-nodes-base.set
- Stringify employee record for response
- Ensure uniqueness in department list
- Format name for response

### n8n-nodes-base.splitOut
- Split out individual files

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

## Configuración

1. Importa el archivo `1352_Splitout_Filter_Automate_Triggered.json` en n8n
2. Revisa las credenciales necesarias:
   - Embeddings OpenAI: Configura las credenciales necesarias
   - OpenAI Chat Model: Configura las credenciales necesarias
   - OpenAI Chat Model1: Configura las credenciales necesarias
   - Embeddings OpenAI1: Configura las credenciales necesarias
   - OpenAI Chat Model2: Configura las credenciales necesarias
   - OpenAI Chat Model3: Configura las credenciales necesarias
   - OpenAI Chat Model4: Configura las credenciales necesarias
   - OpenAI Chat Model5: Configura las credenciales necesarias
   - GET all files: Configura las credenciales necesarias
   - Download file from BambooHR: Configura las credenciales necesarias
   - Supabase Vector Store: Configura las credenciales necesarias
   - Supabase Vector Store Retrieval: Configura las credenciales necesarias
   - GET all employees: Configura las credenciales necesarias
   - GET all employees (second path): Configura las credenciales necesarias
   - Retrieve all employees: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n

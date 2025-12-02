# 1293_Wait_Splitout_Automation_Webhook

## Archivo
1293_Wait_Splitout_Automation_Webhook.json

## Descripción

## Nodos utilizados (88 total)

### @n8n/n8n-nodes-langchain.documentDefaultDataLoader
- Default Data Loader

### @n8n/n8n-nodes-langchain.embeddingsGoogleGemini
- Embeddings Google Gemini
- Embeddings Google Gemini1
- Embeddings Google Gemini2

### @n8n/n8n-nodes-langchain.informationExtractor
- Extract API Operations
- Identify Service Products

### @n8n/n8n-nodes-langchain.lmChatGoogleGemini
- Google Gemini Chat Model
- Google Gemini Chat Model1
- Google Gemini Chat Model2

### @n8n/n8n-nodes-langchain.textClassifier
- Has API Documentation?

### @n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter
- Recursive Character Text Splitter1

### @n8n/n8n-nodes-langchain.vectorStoreQdrant
- Store Document Embeddings
- Search in Relevant Docs
- Search in Relevant Docs1

### n8n-nodes-base.aggregate
- Combine Docs
- Combine Docs1

### n8n-nodes-base.code
- Merge Lists
- Contruct JSON Schema

### n8n-nodes-base.executeWorkflow
- Research
- Extract
- Generate

### n8n-nodes-base.executeWorkflowTrigger
- Execute Workflow Trigger

### n8n-nodes-base.executionData
- Execution Data

### n8n-nodes-base.filter
- Successful Runs
- Filter Results

### n8n-nodes-base.googleDrive
- Upload to Drive

### n8n-nodes-base.googleSheets
- Append Row
- Research Pending
- Research Result
- Research Error
- Extract Pending
- Extract Result
- Extract Error
- Get API Operations
- Generate Pending
- Generate Error
- Generate Result
- Get All Extract
- Get All Research
- Get All Generate

### n8n-nodes-base.httpRequest
- Web Search For API Schema
- Scrape Webpage Contents

### n8n-nodes-base.if
- Has Results?
- Has Operations?
- All Research Done?
- All Extract Done?
- All Generate Done?
- Has Results?1
- Has Results?3

### n8n-nodes-base.manualTrigger
- When clicking ‘Test workflow’

### n8n-nodes-base.removeDuplicates
- Remove Dupes
- Remove Duplicates

### n8n-nodes-base.set
- Content Chunking @ 50k Chars
- Set Embedding Variables
- Response Empty
- Response OK
- Query Templates
- Query & Docs
- Extract API Templates
- Query & Docs1
- Response OK1
- Response Empty1
- Research Event
- Extract Event
- Set Upload Fields
- Response OK2
- Generate Event
- Response Scrape Error
- Response No API Docs

### n8n-nodes-base.splitInBatches
- For Each Document...
- For Each Template...
- For Each Template...1
- For Each Research...
- For Each Extract...
- For Each Generate...

### n8n-nodes-base.splitOut
- Results to List
- Split Out Chunks
- Template to List

### n8n-nodes-base.stickyNote
- Sticky Note
- Sticky Note1
- Sticky Note2
- Sticky Note3
- Sticky Note4
- Sticky Note5

### n8n-nodes-base.switch
- EventRouter

### n8n-nodes-base.wait
- Wait
- Wait1
- Wait2

## Configuración

1. Importa el archivo `1293_Wait_Splitout_Automation_Webhook.json` en n8n
2. Revisa las credenciales necesarias:
   - Get All Research: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n

# Prepare CSV files with GPT-4

## Archivo
1102_Manual_Openai_Automation_Triggered.json

## Descripción

## Nodos utilizados (11 total)

### n8n-nodes-base.itemLists
- Make JSON Table

### n8n-nodes-base.manualTrigger
- When clicking "Execute Workflow"

### n8n-nodes-base.moveBinaryData
- Strip UTF BOM bytes
- Create valid binary

### n8n-nodes-base.openAi
- OpenAI

### n8n-nodes-base.set
- Parse JSON

### n8n-nodes-base.splitInBatches
- Split In Batches

### n8n-nodes-base.spreadsheetFile
- Convert to CSV

### n8n-nodes-base.stickyNote
- Sticky Note
- Sticky Note1

### n8n-nodes-base.writeBinaryFile
- Save to Disk

## Configuración

1. Importa el archivo `1102_Manual_Openai_Automation_Triggered.json` en n8n
2. Revisa las credenciales necesarias:
   - OpenAI: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n

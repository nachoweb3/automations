# Workflow Importer

## Archivo
1169_Splitout_Code_Import_Webhook.json

## Descripción

## Nodos utilizados (58 total)

### n8n-nodes-base.code
- Prepare Request Data
- Get Workflow Names
- Generate Instance Options
- Get Selected Workflow
- Get Selected Credentials
- Replace Credentials in Workflow
- Generate Credential Options
- Get Missing Credentials

### n8n-nodes-base.executeCommand
- Export Credentials

### n8n-nodes-base.extractFromFile
- Extract from File
- Binary to JSON

### n8n-nodes-base.filter
- Filter Out Nodes Having Credentials

### n8n-nodes-base.form
- Error1
- Error
- Upload File
- Choose Workflow
- Success
- Choose Instance
- Map Credentials

### n8n-nodes-base.formTrigger
- On form submission

### n8n-nodes-base.httpRequest
- Get Workflows

### n8n-nodes-base.if
- Determine Workflow Source

### n8n-nodes-base.merge
- Merge
- Collect Credentials to Replace

### n8n-nodes-base.n8n
- Create Workflow
- Create Empty Credentials

### n8n-nodes-base.noOp
- No Operation
- No Operation1

### n8n-nodes-base.readWriteFile
- Get Credentials Data

### n8n-nodes-base.removeDuplicates
- Remove Duplicate Credentials by Name

### n8n-nodes-base.renameKeys
- Rename Keys

### n8n-nodes-base.set
- Settings
- Extract Credentials
- Add Old Names

### n8n-nodes-base.sort
- Sort by updatedAt DESC

### n8n-nodes-base.splitOut
- Split Out Workflows
- Split Out Nodes

### n8n-nodes-base.stickyNote
- Sticky Note6
- Sticky Note2
- Sticky Note7
- Sticky Note8
- Sticky Note9
- Sticky Note10
- Sticky Note11
- Sticky Note
- Sticky Note12
- Sticky Note13
- Sticky Note14
- Sticky Note15
- Sticky Note16
- Sticky Note17
- Sticky Note18
- Sticky Note19
- Sticky Note20
- Sticky Note21
- Sticky Note22
- Sticky Note23
- Sticky Note24

## Configuración

1. Importa el archivo `1169_Splitout_Code_Import_Webhook.json` en n8n
2. Revisa las credenciales necesarias:
   - Create Workflow: Configura las credenciales necesarias
   - Create Empty Credentials: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n

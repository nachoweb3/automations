# 1329_Splitout_Editimage_Automate_Triggered

## Archivo
1329_Splitout_Editimage_Automate_Triggered.json

## Descripción

## Nodos utilizados (11 total)

### @n8n/n8n-nodes-langchain.chainLlm
- Passport Photo Validator

### @n8n/n8n-nodes-langchain.lmChatGoogleGemini
- Google Gemini Chat Model

### @n8n/n8n-nodes-langchain.outputParserStructured
- Structured Output Parser

### n8n-nodes-base.editImage
- Resize For AI

### n8n-nodes-base.googleDrive
- Download Photos

### n8n-nodes-base.manualTrigger
- When clicking ‘Test workflow’

### n8n-nodes-base.set
- Photo URLs

### n8n-nodes-base.splitOut
- Photos To List

### n8n-nodes-base.stickyNote
- Sticky Note
- Sticky Note1
- Sticky Note2

## Configuración

1. Importa el archivo `1329_Splitout_Editimage_Automate_Triggered.json` en n8n
2. Revisa las credenciales necesarias:
   - Download Photos: Configura las credenciales necesarias
   - Google Gemini Chat Model: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n

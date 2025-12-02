# 1157_Functionitem_Executecommand_Update_Webhook

## Archivo
1157_Functionitem_Executecommand_Update_Webhook.json

## Descripción

## Nodos utilizados (25 total)

### n8n-nodes-base.cron
- Cron

### n8n-nodes-base.emailSend
- NotifyBetterPrice
- NotifyIncorrectPrice

### n8n-nodes-base.executeCommand
- checkifexists
- cleanData

### n8n-nodes-base.functionItem
- getActualPrice
- FunctionItem
- changeME
- initItem
- initItem1
- updateSavedItems
- updateSavedItems1

### n8n-nodes-base.htmlExtract
- HTML Extract

### n8n-nodes-base.httpRequest
- fetchWeb

### n8n-nodes-base.if
- IF1
- IF3
- IF
- IF2
- IF4

### n8n-nodes-base.moveBinaryData
- Move Binary Data1
- JsonToBinary
- itemsToJSON

### n8n-nodes-base.readBinaryFile
- savedItems

### n8n-nodes-base.writeBinaryFile
- Write Binary File1
- SaveToFile

## Configuración

1. Importa el archivo `1157_Functionitem_Executecommand_Update_Webhook.json` en n8n
2. Revisa las credenciales necesarias:
   - NotifyBetterPrice: Configura las credenciales necesarias
   - NotifyIncorrectPrice: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n

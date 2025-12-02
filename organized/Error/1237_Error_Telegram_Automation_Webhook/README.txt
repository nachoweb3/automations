# google drive to instagram, tiktok and youtube

## Archivo
1237_Error_Telegram_Automation_Webhook.json

## Descripción

## Nodos utilizados (15 total)

### @n8n/n8n-nodes-langchain.openAi
- Get Audio from Video
- Generate Description for Videos  in Tiktok and Instagram

### n8n-nodes-base.errorTrigger
- Error Trigger

### n8n-nodes-base.googleDrive
- Google Drive

### n8n-nodes-base.googleDriveTrigger
- Google Drive Trigger

### n8n-nodes-base.httpRequest
- Upload Video and Description to Tiktok
- Upload Video and Description to Instagram
- Upload Video and Description to Youtube

### n8n-nodes-base.if
- If

### n8n-nodes-base.readBinaryFile
- Read Video from Google Drive
- Read Video from Google Drive2
- Read Video from Google Drive3

### n8n-nodes-base.stickyNote
- Sticky Note

### n8n-nodes-base.telegram
- Telegram

### n8n-nodes-base.writeBinaryFile
- Read video from Google Drive

## Configuración

1. Importa el archivo `1237_Error_Telegram_Automation_Webhook.json` en n8n
2. Revisa las credenciales necesarias:
   - Google Drive Trigger: Configura las credenciales necesarias
   - Google Drive: Configura las credenciales necesarias
   - Get Audio from Video: Configura las credenciales necesarias
   - Generate Description for Videos  in Tiktok and Instagram: Configura las credenciales necesarias
   - Upload Video and Description to Tiktok: Configura las credenciales necesarias
   - Upload Video and Description to Instagram: Configura las credenciales necesarias
   - Upload Video and Description to Youtube: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n

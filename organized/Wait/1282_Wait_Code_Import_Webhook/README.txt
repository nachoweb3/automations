# AI-Powered Short-Form Video Generator with OpenAI, Flux, Kling, and ElevenLabs and upload to all social networks

## Archivo
1282_Wait_Code_Import_Webhook.json

## Descripción

## Nodos utilizados (51 total)

### @n8n/n8n-nodes-langchain.openAi
- Generate Image Prompts
- Generate Video Captions
- Generate Script
- Get Audio from Video
- Generate Description for Videos  in Tiktok and Instagram

### n8n-nodes-base.code
- List Elements
- List Elements1
- Calculate Token Usage
- Create List

### n8n-nodes-base.discord
- Notify me on Discord

### n8n-nodes-base.googleDrive
- Upload Voice Audio
- Set Access Permissions
- Upload Final Video
- Set Permissions

### n8n-nodes-base.googleSheets
- Load Google Sheet
- Update Google Sheet

### n8n-nodes-base.httpRequest
- Get image
- Generate Image
- Image-to-Video
- Get Video
- Generate voice
- Render Final Video
- Get Final Video
- Get Raw File
- Upload Video and Description to Tiktok
- Upload Video and Description to Instagram
- Upload Video and Description to Youtube
- Upload Video and Description to Facebook
- Upload Video and Description to Linkedin

### n8n-nodes-base.if
- Fail check
- Check for failures
- Validate list formatting

### n8n-nodes-base.merge
- Match captions with videos
- Pair Videos with Audio

### n8n-nodes-base.readBinaryFile
- Read Video from Google Drive

### n8n-nodes-base.scheduleTrigger
- Once Per Day

### n8n-nodes-base.set
- Set API Keys

### n8n-nodes-base.stickyNote
- Sticky Note1
- Sticky Note
- Sticky Note2
- Sticky Note3
- Sticky Note4
- Sticky Note5
- Sticky Note6
- Sticky Note7

### n8n-nodes-base.wait
- Wait 10min
- Wait 3min
- Wait 5min
- Wait to retry
- Wait1

### n8n-nodes-base.writeBinaryFile
- Write video

## Configuración

1. Importa el archivo `1282_Wait_Code_Import_Webhook.json` en n8n
2. Revisa las credenciales necesarias:
   - Upload Final Video: Configura las credenciales necesarias
   - Set Permissions: Configura las credenciales necesarias
   - Update Google Sheet: Configura las credenciales necesarias
   - Get Audio from Video: Configura las credenciales necesarias
   - Generate Description for Videos  in Tiktok and Instagram: Configura las credenciales necesarias
   - Upload Video and Description to Tiktok: Configura las credenciales necesarias
   - Upload Video and Description to Instagram: Configura las credenciales necesarias
   - Upload Video and Description to Youtube: Configura las credenciales necesarias
   - Upload Video and Description to Facebook: Configura las credenciales necesarias
   - Upload Video and Description to Linkedin: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n

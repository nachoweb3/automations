# Remove Advanced Background from Google Drive Images

## Archivo
1343_Splitout_Editimage_Automation_Webhook.json

## Descripción

## Nodos utilizados (16 total)

### n8n-nodes-base.editImage
- Get Image Size

### n8n-nodes-base.googleDrive
- Upload Picture to Google Drive
- Upload Picture to Google Drive1
- Download Image

### n8n-nodes-base.googleDriveTrigger
- Watch for new images

### n8n-nodes-base.httpRequest
- remove background
- remove background fixed size

### n8n-nodes-base.if
- check which output size method is used

### n8n-nodes-base.merge
- Merge

### n8n-nodes-base.set
- Config

### n8n-nodes-base.splitInBatches
- loop all over your images

### n8n-nodes-base.splitOut
- Split Out

### n8n-nodes-base.stickyNote
- Sticky Note1
- Sticky Note2
- Sticky Note3
- Sticky Note4

## Configuración

1. Importa el archivo `1343_Splitout_Editimage_Automation_Webhook.json` en n8n
2. Revisa las credenciales necesarias:
   - Upload Picture to Google Drive: Configura las credenciales necesarias
   - Upload Picture to Google Drive1: Configura las credenciales necesarias
   - Download Image: Configura las credenciales necesarias
   - Watch for new images: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n

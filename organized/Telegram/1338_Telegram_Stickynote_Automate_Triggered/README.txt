# 1338_Telegram_Stickynote_Automate_Triggered

## Archivo
1338_Telegram_Stickynote_Automate_Triggered.json

## Descripción

## Nodos utilizados (8 total)

### @n8n/n8n-nodes-langchain.openAi
- Analyze image

### n8n-nodes-base.stickyNote
- Sticky Note
- Sticky Note1

### n8n-nodes-base.switch
- Switch ( image or not )

### n8n-nodes-base.telegram
- Send Content for the Analyzed image
- Update Telegram Error Message

### n8n-nodes-base.telegramTrigger
- Get the Image

### n8n-nodes-base.wait
- Wait

## Configuración

1. Importa el archivo `1338_Telegram_Stickynote_Automate_Triggered.json` en n8n
2. Revisa las credenciales necesarias:
   - Get the Image: Configura las credenciales necesarias
   - Send Content for the Analyzed image: Configura las credenciales necesarias
   - Update Telegram Error Message: Configura las credenciales necesarias
   - Analyze image: Configura las credenciales necesarias
3. Activa el workflow desde la interfaz de n8n
